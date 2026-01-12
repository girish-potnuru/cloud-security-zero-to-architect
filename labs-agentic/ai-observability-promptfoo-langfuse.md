# Lab: AI Observability & Evaluations (Promptfoo + Langfuse)

## Objectives
- Instrument an LLM app with Langfuse (traces, scores)
- Define Promptfoo eval suites; run batch tests
- Export metrics/logs to Log Analytics; build a Sentinel workbook

## Prerequisites
- Azure OpenAI or local model proxy, Langfuse (self-hosted or SaaS), Promptfoo CLI

## Steps (Outline)
1. Add Langfuse SDK to app; capture prompts/responses/latency
2. Define Promptfoo eval YAML (safety, helpfulness, policy adherence)
3. Run evals; export JSON results
4. Send summary metrics to Log Analytics via HTTP data collector
5. Build workbook and an alert for regressions

## Verification
- Traces visible in Langfuse with scores
- Promptfoo report generated and stored
- Sentinel workbook shows eval trends over time
