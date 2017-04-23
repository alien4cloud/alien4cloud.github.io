#!/bin/bash -e
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

echo "Downloading alien4cloud"
curl -k -o "alien4cloud-dist-1.4.0-SNAPSHOT.tar.gz" -O "https://fastconnect.org/maven/content/repositories/opensource-snapshot/alien4cloud/alien4cloud-dist/1.4.0-SNAPSHOT/alien4cloud-dist-1.4.0-20170421.112240-13-dist.tar.gz" || error_exit $? "Failed downloading alien4cloud"

echo "Downloading puccini"
curl -k -o "puccini-cli-1.4.0-SNAPSHOT.tgz" -O "https://fastconnect.org/maven/content/repositories/opensource-snapshot/org/alien4cloud/puccini/puccini-cli/1.4.0-SNAPSHOT/puccini-cli-1.4.0-20170421.165648-1.tgz" || error_exit $? "Failed downloading puccini"

echo "Downloading alien4cloud puccini plugin"
curl -k -o "alien4cloud-puccini-plugin-1.4.0-SNAPSHOT.zip" -O "https://fastconnect.org/maven/content/repositories/opensource-snapshot/alien4cloud/alien4cloud-puccini-plugin/1.4.0-SNAPSHOT/alien4cloud-puccini-plugin-1.4.0-20170421.133520-2.zip" || error_exit $? "Failed downloading alien4cloud puccini plugin"

echo "Extracting alien4cloud"
tar zxvf alien4cloud-dist-1.4.0-SNAPSHOT.tar.gz

echo "Extracting puccini"
tar xvzf puccini-cli-1.4.0-SNAPSHOT.tgz

echo "Copy puccini plugin to alien4cloud"
mv alien4cloud-puccini-plugin-1.4.0-SNAPSHOT.zip alien4cloud/init/plugins/

rm alien4cloud-dist-1.4.0-SNAPSHOT.tar.gz
rm puccini-cli-1.4.0-SNAPSHOT.tgz

echo "Pulling required docker puccini image"
docker pull alien4cloud/puccini-deployer-base:1.0.0-alpine

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
--data-binary "{\"pucciniHome\":\"$INSTALL_DIR/puccini-cli-1.4.0-SNAPSHOT\"}" > /dev/null

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
--data-binary '{"resourceType":"org.alien4cloud.puccini.docker.nodes.Container","resourceName":"New resource","archiveName":"puccini-docker-provider-types","archiveVersion":"1.4.0-SNAPSHOT","id":"org.alien4cloud.puccini.docker.nodes.Container:1.4.0-SNAPSHOT"}' | \
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

if which open > /dev/null ; then
  open 'http://localhost:8088'
elif which xdg-open > /dev/null ; then
  xdg-open 'http://localhost:8088'
elif which gnome-open > /dev/null ; then
  gnome-open 'http://localhost:8088'
elif which python > /dev/null ; then
  python -mwebbrowser 'http://localhost:8088'
else
  echo "Open your browser and go to http://localhost:8088."
fi
