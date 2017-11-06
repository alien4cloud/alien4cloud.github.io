#!/bin/bash -e
ALIEN4CLOUD_VERSION=1.4.3.1
FASTCONNECT_REPOSITORY=opensource
INSTALL_DIR="`pwd`/alien4cloud-getstarted"

# Create the install dir if not present.
if [ ! -d $INSTALL_DIR ]; then
  echo "Creating target directory $INSTALL_DIR"
  mkdir -p $INSTALL_DIR;
fi

cd $INSTALL_DIR

if which curl > /dev/null ; then
  echo "Downloading alien4cloud getting started components"
else
  echo "You need curl installed."
  exit 1
fi

if [ ! -f "alien4cloud-dist-${ALIEN4CLOUD_VERSION}.tar.gz" ]; then
  echo "Downloading alien4cloud"
  curl -k -o "alien4cloud-dist-${ALIEN4CLOUD_VERSION}.tar.gz" -L "http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=$FASTCONNECT_REPOSITORY&g=alien4cloud&a=alien4cloud-dist&v=${ALIEN4CLOUD_VERSION}&p=tar.gz&c=dist" || error_exit $? "Failed downloading alien4cloud"
else
    echo "An archive of alien4cloud already exist, we will use it"
fi

if [ ! -f "puccini-cli-${ALIEN4CLOUD_VERSION}.tgz" ]; then
  echo "Downloading puccini"
  curl -k -o "puccini-cli-${ALIEN4CLOUD_VERSION}.tgz" -L "http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=$FASTCONNECT_REPOSITORY&g=org.alien4cloud.puccini&a=puccini-cli&v=${ALIEN4CLOUD_VERSION}&p=tgz" || error_exit $? "Failed downloading puccini"
else
    echo "An archive of puccini already exist, we will use it"
fi

if [ ! -f "alien4cloud-puccini-plugin-${ALIEN4CLOUD_VERSION}.zip" ]; then
  echo "Downloading alien4cloud puccini plugin"
  curl -k -o "alien4cloud-puccini-plugin-${ALIEN4CLOUD_VERSION}.zip" -L "http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=$FASTCONNECT_REPOSITORY&g=alien4cloud&a=alien4cloud-puccini-plugin&v=${ALIEN4CLOUD_VERSION}&p=zip" || error_exit $? "Failed downloading alien4cloud puccini plugin"
else
    echo "An archive of  alien4cloud puccini plugin already exist, we will use it"
fi

echo "Extracting alien4cloud"
tar zxvf alien4cloud-dist-${ALIEN4CLOUD_VERSION}.tar.gz

echo "Extracting puccini"
tar xvzf puccini-cli-${ALIEN4CLOUD_VERSION}.tgz
PUCCINI_DIR=puccini-cli-${ALIEN4CLOUD_VERSION}

echo "Copy puccini plugin to alien4cloud"
mv alien4cloud-puccini-plugin-${ALIEN4CLOUD_VERSION}.zip alien4cloud/init/plugins/

rm alien4cloud-dist-${ALIEN4CLOUD_VERSION}.tar.gz
rm puccini-cli-${ALIEN4CLOUD_VERSION}.tgz

echo "Pulling required docker puccini image"
docker pull alien4cloud/puccini-deployer-base:1.0.0-alpine
docker pull alien4cloud/puccini-deployer:${ALIEN4CLOUD_VERSION}

echo "Pulling sample docker ubuntu image"
docker pull alien4cloud/puccini-ubuntu-trusty

echo "Starting alien4cloud"
cd alien4cloud
./alien4cloud.sh > /dev/null 2>&1 &

echo "Waiting for alien4cloud to start"
until $(curl --output /dev/null --silent --head --fail http://localhost:8088); do
  printf '.'
  sleep 5
done

ALIEN_URL="http://localhost:8088"
ALIEN_LOGIN="admin"
ALIEN_PWD="admin"

echo "Initializing getting started data"
curl -c curlcookie.txt "$ALIEN_URL/login?username=$ALIEN_LOGIN&password=$ALIEN_PWD&submit=Login" \
-XPOST \
-H 'Content-Type: application/x-www-form-urlencoded'

echo "Create puccini orchestrator"
ORCHESTRATORID=`curl "$ALIEN_URL/rest/latest/orchestrators" \
-b curlcookie.txt \
-XPOST \
-H 'Content-Type: application/json; charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"name":"Puccini simple orchestrator","pluginId":"alien4cloud-plugin-puccini","pluginBean":"puccini-orchestrator"}' | \
    python -c "import sys, json; print json.load(sys.stdin)['data']"`

echo "Created orchestrator with id $ORCHESTRATORID"

echo "Update orchestrator configuration"
curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/configuration" \
-XPUT \
-s -b curlcookie.txt \
-H 'Content-Type: application/json; charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary "{\"pucciniHome\":\"$INSTALL_DIR/$PUCCINI_DIR\"}" > /dev/null

echo "Enable orchestrator (takes a few secs as it checks and configure puccini)"
curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/instance" \
-XPOST \
-s -b curlcookie.txt \
-H 'Content-Type: application/json; charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{}' > /dev/null

sleep 5

echo "Create local docker location"
LOCATIONID=`curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/locations" \
-XPOST \
-b curlcookie.txt \
-H 'Content-Type: application/json; charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"name":"Local docker","infrastructureType":"Docker"}' | \
    python -c "import sys, json; print json.load(sys.stdin)['data']"`

echo "Created location $LOCATIONID"

echo "Creating compute location resource"
RESOURCEID=`curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/locations/$LOCATIONID/resources" \
-XPOST \
-b curlcookie.txt \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"resourceType":"org.alien4cloud.puccini.docker.nodes.Container","resourceName":"New resource","archiveName":"puccini-docker-provider-types","archiveVersion":"'$ALIEN4CLOUD_VERSION'","id":"org.alien4cloud.puccini.docker.nodes.Container:'$ALIEN4CLOUD_VERSION'"}' | \
    python -c "import sys, json; print json.load(sys.stdin)['data']['resourceTemplate']['id']"`

echo "Configure template $RESOURCEID"
curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/locations/$LOCATIONID/resources/$RESOURCEID/template/properties" \
-XPOST \
-s -b curlcookie.txt \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"propertyName":"image_id","propertyValue":"alien4cloud/puccini-ubuntu-trusty"}' > /dev/null

curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/locations/$LOCATIONID/resources/$RESOURCEID/template/capabilities/os/properties" \
-XPOST \
-s -b curlcookie.txt \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"propertyName":"architecture","propertyValue":"x86_64"}' > /dev/null

curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/locations/$LOCATIONID/resources/$RESOURCEID/template/capabilities/os/properties" \
-XPOST \
-s -b curlcookie.txt \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"propertyName":"type","propertyValue":"linux"}' > /dev/null

curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/locations/$LOCATIONID/resources/$RESOURCEID/template/capabilities/os/properties" \
-XPOST \
-s -b curlcookie.txt \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"propertyName":"distribution","propertyValue":"ubuntu"}' > /dev/null

curl "$ALIEN_URL/rest/latest/orchestrators/$ORCHESTRATORID/locations/$LOCATIONID/resources/$RESOURCEID" \
-XPUT \
-s -b curlcookie.txt \
-H 'Content-Type: application/json; charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
--data-binary '{"name":"Ubuntu"}' > /dev/null

if which xdg-open > /dev/null ; then
  xdg-open 'http://localhost:8088'
elif which gnome-open > /dev/null ; then
  gnome-open 'http://localhost:8088'
elif which open > /dev/null ; then
  open 'http://localhost:8088'
elif which python > /dev/null ; then
  python -mwebbrowser 'http://localhost:8088'
else
  echo "Open your browser and go to http://localhost:8088."
fi
