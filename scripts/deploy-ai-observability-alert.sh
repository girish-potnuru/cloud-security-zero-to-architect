#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/deploy-ai-observability-alert.sh <RESOURCE_GROUP> <WORKSPACE_NAME> [RULE_NAME] [LOG_TYPE] [ERROR_RATE_THRESHOLD]
# Defaults: RULE_NAME="AI Observability - High Error Rate", LOG_TYPE="AIObservabilityMetrics", ERROR_RATE_THRESHOLD=0.3

RG=${1:?Resource Group required}
WS=${2:?Workspace Name required}
RULE_NAME=${3:-AI Observability - High Error Rate}
LOG_TYPE=${4:-AIObservabilityMetrics}
ERROR_RATE=${5:-0.3}

az deployment group create \
  -g "$RG" \
  --template-file detection-content/sentinel-analytics/ai-observability-alert.json \
  --parameters workspaceName="$WS" ruleName="$RULE_NAME" logType="$LOG_TYPE" errorRateThreshold=$ERROR_RATE \
  --mode Incremental

echo "Sentinel alert deployed: $RULE_NAME to workspace $WS in RG $RG"
