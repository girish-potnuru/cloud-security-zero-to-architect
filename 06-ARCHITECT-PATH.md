# 🧭 Security Architect Track (Weeks 9–16)

> Advanced path to evolve from Security Engineer to Security Architect. Builds on the 8-week core by adding governance, enterprise architecture, IaC, detection engineering, and incident response depth.

---

## 🎯 Outcomes

- Design enterprise-ready landing zones and governance
- Drive policy-as-code and secure platform engineering with IaC
- Author Sentinel detections, workbooks, and automation
- Lead incident response and resilience planning
- Map Azure controls to frameworks (NIST, CIS, ISO 27001) and produce evidence

---

## 🗺️ Pillars

1) Governance & Landing Zones
- Azure CAF Enterprise-Scale, management groups, subscription topology
- Azure Policy baseline (tagging, PII data, public network, encryption)
- RBAC strategy at tenant, mgmt group, subscription, resource scopes

2) Architecture Method
- Requirements → risks → threat model (STRIDE) → controls → ADRs
- Reference architectures: AKS, API-first, data platform, AI apps
- Cost, reliability, and performance trade-offs

3) IaC & Platform Engineering
- Bicep/Terraform for landing zones and reusable security modules
- CI/CD with validation, policy checks, drift detection
- Secrets management via managed identities and Key Vault

4) Detection Engineering
- KQL content lifecycle: detections, hunts, baselines, tuning
- MITRE ATT&CK mapping and content testing
- Workbooks and dashboards for security posture

5) IR & Resilience
- Runbooks, playbooks, tabletop exercises
- RTO/RPO, backup/restore validation, chaos testing
- Change management, access governance, break-glass

6) Compliance & Risk
- Azure Security Benchmark → NIST/CIS/ISO mapping
- Evidence collection and audit readiness with Purview
- Risk register and exception processes

---

## 📅 Weeks 9–16 (Advanced)

- Week 9: CAF Landing Zone design, management group hierarchy, subscription strategy
- Week 10: Azure Policy baseline + exemptions; tagging and cost governance
- Week 11: IaC foundations (Bicep/Terraform) for landing zones and security modules
- Week 12: CI/CD for IaC with validation and policy checks
- Week 13: Sentinel detections, hunting queries, workbook scaffolding
- Week 14: Incident response runbooks and SOAR playbooks
- Week 15: Compliance mappings and evidence automation (Purview + logs)
- Week 16: Architecture challenge and executive readout (diagrams, ADRs, costs)

---

## 🧪 Hands-On Checkpoints

- Deploy minimal landing zone with management groups and policy assignments
- Enforce private endpoints, encryption, and deny public network on PaaS
- Build CI pipeline to validate Bicep/Terraform and run policy checks
- Publish 5+ Sentinel analytics rules and 5+ hunting queries
- Create 1 workbook and 1 automation playbook for a common alert

---

## 📦 Repo Additions

- iac/ (IaC samples)
  - bicep/landing-zone.bicep
  - terraform/main.tf
- detection-content/
  - sentinel-analytics/*.kql
  - hunting-queries/*.kql

See those folders for quick-starts.

---

## 📑 Deliverables Checklist

- Management group and subscription topology diagram
- Policy baseline and exemptions register
- IaC modules and CI/CD pipeline config
- Detections library (analytics + hunts) and workbook
- IR runbooks and at least one SOAR playbook
- Compliance mapping and evidence examples
- Architecture Decision Records (ADRs) for key choices

---

## 🧭 Interview & Portfolio

- Publish sanitized diagrams, KQL samples, and IaC snippets
- Prepare 2–3 architecture stories with trade-offs and metrics
- Show before/after Secure Score and cost considerations

---

Updated: January 2026
