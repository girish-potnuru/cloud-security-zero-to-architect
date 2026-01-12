# ✅ Security Architect Portfolio Checklist

This checklist helps you prove architect-level capability beyond the 8-week core. Use it to plan and collect artifacts for interviews and on-the-job readiness.

---

## 1) Governance & Landing Zones
- [ ] Management group hierarchy diagram (corp, online, platform, sandboxes)
- [ ] Subscription strategy (vending model, naming/alias, ownership)
- [ ] Policy baseline initiative (deny public network, enforce private endpoints, encryption)
- [ ] Tagging & cost governance (required tags, cost RBAC, budgets)
- [ ] RBAC at scale (role design, custom roles, break-glass)
- [ ] Private DNS + PaaS private endpoints pattern
- [ ] DDoS Standard, Front Door/WAF plan

Artifacts:
- [ ] policy-baseline/initiative-baseline.json
- [ ] Diagram (PNG/PDF) in docs/

## 2) IaC & Platform Engineering
- [ ] Bicep/Terraform modules for core platform (RGs, networking, policy)
- [ ] CI/CD for IaC (validate, lint, policy checks, plan)
- [ ] Drift detection/documented runbook
- [ ] Secretless patterns (managed identities, Key Vault)

Artifacts:
- [ ] iac/bicep/landing-zone.bicep
- [ ] iac/terraform/main.tf
- [ ] .github/workflows/iac-validate.yml

## 3) Detection Engineering
- [ ] Analytics rules (10–15) mapped to MITRE
- [ ] Hunting queries (10–15)
- [ ] Workbook (posture + top alerts)
- [ ] Tuning notes (noise reduction, allowlists)

Artifacts:
- [ ] detection-content/sentinel-analytics/*.kql
- [ ] detection-content/hunting-queries/*.kql
- [ ] workbooks/security-overview-workbook.json

## 4) Incident Response & Resilience
- [ ] IR runbooks (auth anomalies, KV access, WAF spikes, malware)
- [ ] SOAR playbooks (Logic Apps) for 1–2 common alerts
- [ ] BCP/DR summary: RTO/RPO targets and test evidence

Artifacts:
- [ ] playbooks/playbook-*.json
- [ ] IR runbooks in docs/

## 5) Compliance & Risk
- [ ] Control mapping: Azure Security Benchmark → NIST/CIS/ISO 27001
- [ ] Evidence pack (screenshots/exports) and cadence
- [ ] Risk register, exceptions process, waivers with expiries

Artifacts:
- [ ] Mapping matrix in docs/
- [ ] Evidence folder with index/readme

## 6) AI Security (if applicable)
- [ ] Safety evaluations + guardrails (content filter, prompt flow)
- [ ] PII redaction pipeline
- [ ] Audit logging and abuse monitoring plan

Artifacts:
- [ ] Updated capstone design in 03-FINAL-PROJECT-GUIDE.md

## 7) Architecture Method & Leadership
- [ ] Threat models (STRIDE) for two workloads
- [ ] ADRs (≥5) with trade-offs and decision date
- [ ] Executive deck (diagrams, cost, SLA/DR strategy)

Artifacts:
- [ ] adr/ADR-*.md
- [ ] Deck (PDF/Slides) in docs/

---

## Evidence Tips
- Keep sensitive details out; use sanitized screenshots and redactions
- Link each artifact to a control/requirement and outcome (e.g., Secure Score +12%)
- Prefer reproducible artifacts (IaC, templates, JSON)

---

Updated: January 2026
