# AI Observability: Validation Guide

Use these steps to verify data ingestion, alerting, and workbook visuals in Azure.

## 1) Confirm custom log ingestion
After posting sample records via `send_to_log_analytics.py`, run these KQL queries in your Log Analytics workspace:

Error rate over time:
```
AIObservabilityMetrics_CL
| extend status_val = coalesce(status, status_s)
| summarize errors = countif(status_val == "error"), total = count() by bin(TimeGenerated, 5m)
| extend errorRate = todouble(errors) / todouble(total)
| order by TimeGenerated asc
```

Latency trend:
```
AIObservabilityMetrics_CL
| extend lat = todouble(coalesce(latency_ms, latency_ms_d))
| summarize avgLatencyMs = avg(lat) by bin(TimeGenerated, 5m)
| order by TimeGenerated asc
```

If no results appear, check that `WORKSPACE_ID`, `SHARED_KEY`, and network access are correct.

## 2) Verify Sentinel alert deployment
Find the rule named "AI Observability - High Error Rate" in Microsoft Sentinel → Analytics.
- Inspect the query and schedule (5m frequency, 30m period).
- Lower the threshold if needed (e.g., `0.1`) and post more `error` records.
- Confirm alerts and incidents are created when the error rate exceeds the threshold.

## 3) Validate Workbook
Open the "AI Observability Overview" workbook. You should see:
- Error Rate Trend: points above zero when `status == error` exists.
- Latency Trend: a line chart reflecting averaged `latency_ms` in 5m bins.

If the workbook shows errors:
- Ensure the workbook is bound to the correct workspace.
- Confirm the table name appears as `AIObservabilityMetrics_CL`.
- Adjust the queries if your field types differ (use `coalesce()` and cast with `todouble()`).

## 4) Troubleshooting checklist
- Data not ingested:
  - Validate the Data Collector API signature; ensure `SHARED_KEY` is base64 and correct.
  - Check outbound network restrictions or proxies blocking `*.ods.opinsights.azure.com`.
- Alert not firing:
  - Ensure rule is enabled and query returns rows; try a lower threshold.
  - Verify time range alignment (`TimeGenerated`) and schedule windows.
- Workbook empty:
  - Confirm table and field names; suffixes like `_s` or `_d` are common.
  - Use the workspace query window to iterate before embedding in workbook.

## 5) Next enhancements
- Add safety violation and cost metrics; create separate tiles and alerts.
- Export eval scores (Promptfoo) as aggregated records and visualize pass rates.
- Add playbooks to notify and auto-scale or route traffic on high error rates.
