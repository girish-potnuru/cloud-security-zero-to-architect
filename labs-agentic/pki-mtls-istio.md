# Lab: PKI & mTLS for Services (Istio)

## Objectives
- Issue service identities and certificates (SPIFFE/SPIRE or internal CA)
- Enforce mTLS across namespaces via Istio peer/auth policies
- Rotate certs and document the process

## Prerequisites
- AKS cluster, Istio installed; CA choice decided

## Steps (Outline)
1. Deploy SPIRE server/agents or configure Istio CA
2. Define PeerAuthentication and DestinationRule for mTLS
3. Issue service certs; validate via test calls
4. Document rotation; automate via CronJobs or controllers

## Verification
- Service-to-service traffic is encrypted and authenticated
- Cert expiry and rotation alarms configured
