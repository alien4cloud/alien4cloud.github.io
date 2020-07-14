---
layout: post
exclude_from_search: true
title:  Yorc from < 4.0.0-M8 to >= 4.0.0-M8
root: ../
categories: MIGRATION_GUIDES
parent: [migration_guides]
node_name: Yorc.4.0.0.M8
weight: 10000
exclude_from_search: true
---


Before version 4.0.0-M8, Yorc use long for events and logs IDs.
Since version 4.0.0-M8, Yorc uses nano timestamp for events and logs IDs.
A4C stores the last retrieved log/event indexes in 2 elasticsearch indexes.

When migrating from Yorc v < 4.0.0-M8 to Yorc v > 4.0.0-M8, you need to delete documents in eventindex and logeventindex indexes. When starting, A4C will ask Yorc for the last index for both events and logs. Without this, A4C will retrieve a lot of past events and logs.

The following script will help you to perform this operation, orchestrator per orchestrator :

{% highlight bash %}
#!/bin/bash -e

function  usage() {
  echo "Usage:"
  echo "  export ES_URL=<addr> && ./$(basename $0) <orchestratorName>"
  echo "  dry run : export ES_URL=<addr> && ./$(basename $0) <orchestratorName> --dry"
  echo "  SSL : export ES_URL=<addr> && export ES_CA_CERT=~/.ssl/ca-cert.pem && export ES_CLIENT_CERT=~/.ssl/client-cert.pem && export ES_CLIENT_KEY=~/.ssl/client-key.pem && ./$(basename $0) <orchestratorName>"
  exit 0
}

if [ $# -lt 1 ]; then
  usage
fi

ONAME=$1
# --dry if you want to dry run (no delete)
dry=$2

# Curl Options
OPTS=(--progress-bar -f -H 'Accept: application/json' -H 'Content-Type: application/json')
if [ -f "$ES_CA_CERT" ]; then
  OPTS=("${OPTS[@]}" --cacert "$ES_CA_CERT")
fi
if [ -f "$ES_CLIENT_CERT" ]; then
  OPTS=("${OPTS[@]}" --cert "$ES_CLIENT_CERT")
fi
if [ -f "$ES_CLIENT_KEY" ]; then
  OPTS=("${OPTS[@]}" --key "$ES_CLIENT_KEY")
fi

echo "Will use following options with curl : ${OPTS[@]}"

function cleanIndex() {
  OID=$1
  IND=$2

  echo
  echo "Cleaning $OID in index $IND"

  if [ "$dry" == "--dry" ];
  then
    echo "Dry run, do nothing !"
    return
  fi

  curl -XDELETE "${OPTS[@]}" "$ES_URL/$IND/_doc/$OID"
  echo
}

OID=$(envsubst << EOF | curl -XPOST "${OPTS[@]}" $ES_URL/orchestrator/_search?size=1 -d @- | jq -r '.hits.hits[0]._id'
{
  "query": {
    "term": {
      "name":"$ONAME"
    }
  }
}
EOF
)

if [ -z "$OID" -o "$OID" = "null" ]; then
  echo "Orchestrator $ONAME is unknown"
  exit 1
fi

echo "Orchestrator ID is $OID"

cleanIndex $OID "eventindex"
cleanIndex $OID "logeventindex"

{% endhighlight %}


### Migration steps

- Stop A4C
- Stop Yorc
- Upgrade Yorc binary
- Start Yorc (If you change the Yorc storage configuration, ensure the migration is terminated)
- Run the script to delete the document in A4C indexes (orchestrator per orchestrator)
- Start A4C
