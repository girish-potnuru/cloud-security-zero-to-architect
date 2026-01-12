# Lab: AKS with Istio mTLS, Kyverno Policies, ArgoCD GitOps

## Objectives
- Enable Istio and enforce mTLS between services
- Apply Kyverno policies (image signature, disallow :latest, resource limits)
- Deliver workloads via ArgoCD

## Prerequisites
- AKS cluster (Standard), `az`, `kubectl`, `helm`
- Optional: SPIRE for service identities

## Steps (Outline)
1. Provision AKS and enable monitoring; restrict API server access
2. Install Istio (ambient or sidecar) and enable mTLS in default namespace
3. Apply Kyverno + policies (sample CRDs provided)
4. Install ArgoCD; connect to a sample repo; sync app manifests
5. Validate policies and mTLS via test services

## Verification
- Kyverno policy reports show enforced rules
- mTLS traffic verified (Istio metrics)
- ArgoCD shows healthy sync state
