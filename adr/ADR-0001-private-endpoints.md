# ADR-0001: Enforce Private Endpoints for PaaS Services

- Status: Accepted
- Date: 2026-01-12

## Context
Many Azure PaaS services (Key Vault, Storage, Cognitive Services) expose public endpoints by default. To reduce data exfiltration risk and meet compliance, traffic must stay on private networks.

## Decision
Enforce private endpoints for all supported PaaS services in production subscriptions. Deny public network access where available. Manage DNS via Private DNS Zones. Exceptions require time-bound waiver and compensating controls.

## Options Considered
1. Public endpoints with IP allowlists
2. Private Endpoints with Private DNS Zones (Chosen)
3. Service Endpoints

## Consequences
- Improved data exfiltration resistance
- Increased management overhead for PE/DNS
- Requires egress control via Firewall and route tables

## Implementation Notes
- Policy initiative: deny public network, enforce PE
- Route traffic via Hub Firewall; disallow direct Internet egress
- Validate with synthetic tests and Sentinel detections
