# AI Observability Demo (Flask + Azure OpenAI + Langfuse)

This demo app records traces and simple metrics for Azure OpenAI requests via Langfuse and can export aggregated metrics to Azure Log Analytics for Sentinel alerting and workbook visualization.

## Prerequisites
- Python 3.10+
- Azure OpenAI resource (endpoint + key)
- Langfuse project (host, public key, secret key)
- Optional: Azure Log Analytics workspace (Workspace ID + Shared Key)

## Setup
```bash
# From repo root
cd agentic-demos/ai-observability
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
# If needed: pip install requests

# Configure environment
cp ENV.sample .env
# Edit .env with your values
```

Required environment variables:
- AZURE_OPENAI_ENDPOINT
- AZURE_OPENAI_API_KEY
- LANGFUSE_PUBLIC_KEY
- LANGFUSE_SECRET_KEY
- LANGFUSE_HOST (e.g., https://cloud.langfuse.com)
- PORT (optional, default 5000)
- WORKSPACE_ID and SHARED_KEY (optional for Log Analytics export)

## Run the app
```bash
source .venv/bin/activate
python app.py
# Visit http://localhost:5000 and run a test prompt
```

## Export metrics to Log Analytics
Produce a metrics JSON file with records like:
```json
[
  {
    "TimeGenerated": "2026-01-12T10:00:00Z",
    "status": "success",
    "model": "gpt-4o-mini",
    "latency_ms": 820,
    "prompt_tokens": 120,
    "completion_tokens": 45
  },
  {
    "TimeGenerated": "2026-01-12T10:05:00Z",
    "status": "error",
    "model": "gpt-4o-mini",
    "latency_ms": 1500,
    "prompt_tokens": 95,
    "completion_tokens": 0
  }
]
```

Use the helper to post to Log Analytics:
```bash
export WORKSPACE_ID="<workspace-id>"
export SHARED_KEY="<base64-shared-key>"
export LOG_TYPE="AIObservabilityMetrics" # optional
python send_to_log_analytics.py metrics.sample.json
```

Note: Custom log tables created via the Data Collector API appear as `<LOG_TYPE>_CL` in KQL (e.g., `AIObservabilityMetrics_CL`). Field names may have type suffixes (e.g., `_s` for strings, `_d` for doubles). The included alert/workbook queries use `coalesce()` to handle these variations.

## Deploy Sentinel alert (High Error Rate)
```bash
# Login and select subscription
az login
az account set --subscription "<SUBSCRIPTION_ID>"

# Deploy to the Resource Group hosting the workspace
./../../scripts/deploy-ai-observability-alert.sh \
  <RESOURCE_GROUP> \
  <WORKSPACE_NAME> \
  "AI Observability - High Error Rate" \
  AIObservabilityMetrics \
  0.3
```
This creates a scheduled analytics rule that flags error rate above the threshold over 5-minute bins.

## Deploy Workbook (Overview)
```bash
./../../scripts/deploy-ai-observability-workbook.sh \
  <RESOURCE_GROUP> \
  <WORKSPACE_NAME> \
  "AI Observability Overview" \
  eastus
```
The workbook shows error rate and latency trends over time from `AIObservabilityMetrics`.

## Notes
- For managed identity in production, prefer secretless access for Azure services.
- Extend metrics with cost, safety violations, and eval scores; export aggregates to Log Analytics for dashboards.
