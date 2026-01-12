#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/deploy-ai-observability-workbook.sh <RESOURCE_GROUP> <WORKSPACE_NAME> [WORKBOOK_NAME] [LOCATION]
# Defaults: WORKBOOK_NAME="AI Observability Overview", LOCATION="eastus"

RG=${1:?Resource Group required}
WS=${2:?Workspace Name required}
WB_NAME=${3:-AI Observability Overview}
LOCATION=${4:-eastus}

WS_ID=$(az resource show -g "$RG" -n "$WS" --resource-type Microsoft.OperationalInsights/workspaces --query id -o tsv)

az deployment group create \
  -g "$RG" \
  --template-file workbooks/ai-observability-workbook.json \
  --parameters workbookName="$WB_NAME" location="$LOCATION" workspaceResourceId="$WS_ID" \
  --mode Incremental

echo "Workbook deployed: $WB_NAME bound to $WS in $RG ($LOCATION)"
