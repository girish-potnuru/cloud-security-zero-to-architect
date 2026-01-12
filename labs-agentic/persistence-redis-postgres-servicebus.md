# Lab: Persistence Hardening — Redis, Postgres, Service Bus

## Objectives
- Enforce private endpoints and disable public network access
- Configure RBAC/managed identity access and auditing
- Enable diagnostic logging to Log Analytics

## Prerequisites
- Azure Redis, Azure Database for PostgreSQL, Azure Service Bus

## Steps (Outline)
1. Create resources with private endpoints; disable public network
2. Configure Azure AD auth (where supported) and managed identities
3. Enable diagnostic settings for all three services to Log Analytics
4. Add Key Vault for connection secrets; rotate regularly

## Verification
- No public endpoints reachable
- Access via managed identity only
- Logs visible in workspace with detections configured
