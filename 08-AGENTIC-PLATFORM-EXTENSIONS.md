# 🧩 Agentic Platform Extensions (Optional Advanced)

This module extends the Architect Track to cover the agentic platform and AI observability components from the reference architecture: service mesh + policies, GitOps, agent frameworks, AI evals/guardrails, persistence hardening, and PKI/mTLS.

---

## Outcomes
- Operate AKS with mesh (Istio) and policy (Kyverno) under GitOps (ArgoCD)
- Add AI evals/observability with Promptfoo + Langfuse; wire traces to Sentinel
- Build an agent workflow (LangGraph or Agno) and MCP server, fronted by API Gateway
- Harden Redis/Postgres/Service Bus with private endpoints, RBAC, auditing
- Implement internal PKI + mTLS between services; document trade-offs

---

## Modules & Labs

1) AKS Mesh & Policies (Istio + Kyverno + ArgoCD)
- Goals: mTLS across workloads, policy-as-code (image signature, runtime constraints), GitOps delivery
- Lab: `labs-agentic/aks-kyverno-argocd.md`

2) AI Observability & Evaluations
- Goals: trace prompts/responses (Langfuse), build eval sets (Promptfoo), export signals to Log Analytics → Sentinel
- Lab: `labs-agentic/ai-observability-promptfoo-langfuse.md`

3) Agent Frameworks & Gateway
- Goals: implement MCP server and a simple LangGraph/Agno workflow; secure behind APIM/module gateway
- Lab: `labs-agentic/agent-framework-mcp-langgraph.md`

4) Persistence Hardening
- Goals: Redis/Postgres/Service Bus with private endpoints, encryption, auth, minimal RBAC, diagnostic logs
- Lab: `labs-agentic/persistence-redis-postgres-servicebus.md`

5) PKI & mTLS
- Goals: issue service identities (SPIFFE/SPIRE or internal CA), rotate certs, enforce mTLS via Istio
- Lab: `labs-agentic/pki-mtls-istio.md`

---

## Integration Points
- Sentinel: ingest Langfuse/Promptfoo summaries, AKS logs, APIM and Service Bus diagnostics
- Key Vault: manage secrets/keys/certs; no secrets in code
- PrivateLink & Firewall: lock down PaaS persistence and cognitive/AI endpoints
- Policy-as-code: Kyverno for pods; Azure Policy for resources; CI checks for both

---

## Deliverables
- Mesh + policy baseline README, manifests, and ADRs
- Agent workflow demo + gateway config
- Evals pack (prompt sets, metrics), traces dashboard, Sentinel workbook
- Persistence IaC modules and runbook for audit/eventing
- PKI/mTLS docs and rotation procedure

---

Updated: January 2026
