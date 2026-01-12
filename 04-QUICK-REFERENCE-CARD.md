# 🚀 Azure Security Quick Reference Card

> Print this or keep it handy during your studies!

---

## 📚 Key Certification Exams

| Exam | Name | Level | Focus |
|------|------|-------|-------|
| AZ-900 | Azure Fundamentals | Beginner | Cloud basics |
| SC-900 | Security Fundamentals | Beginner | Security concepts |
| **AZ-500** | **Security Engineer** | **Intermediate** | **Your main goal!** |
| AI-900 | AI Fundamentals | Beginner | AI/ML basics |
| SC-200 | Security Operations | Intermediate | SOC/SIEM |

---

## 🔐 Identity & Access (25-30% of AZ-500)

### Microsoft Entra ID Components
```
├── Users (internal & external)
├── Groups (security & M365)
├── Applications (enterprise & registered)
├── Service Principals
├── Managed Identities
│   ├── System-assigned (tied to resource)
│   └── User-assigned (standalone)
└── Devices
```

### Key Services
| Service | Purpose |
|---------|---------|
| **MFA** | Multi-factor authentication |
| **Conditional Access** | Context-based access policies |
| **PIM** | Just-in-time privileged access |
| **Identity Protection** | Risk-based policies |
| **Access Reviews** | Periodic access certification |

### RBAC Key Roles
| Role | Permissions |
|------|-------------|
| Owner | Full access + assign roles |
| Contributor | Full access, no role assignment |
| Reader | View only |
| User Access Admin | Manage role assignments |
| Security Admin | Security policies + Defender |
| Security Reader | View security info |

---

## 🌐 Network Security (20-25% of AZ-500)

### Defense Layers
```
Internet
    ↓
Azure Front Door + WAF
    ↓
Azure Firewall (Hub)
    ↓
NSG (Subnet level)
    ↓
NSG (NIC level)
    ↓
Host firewall
```

### Key Services Comparison
| Service | Layer | Use Case |
|---------|-------|----------|
| NSG | L3/L4 | Basic IP/port filtering |
| Azure Firewall | L3-L7 | Central egress control |
| WAF | L7 | Web app protection |
| DDoS Protection | L3/L4 | Volumetric attacks |
| Private Link | L3 | Private PaaS access |
| Bastion | L7 | Secure RDP/SSH |

### NSG Rule Priority
- Lower number = Higher priority
- Range: 100-4096
- Default rules: 65000-65500

```bash
# Common NSG commands
az network nsg rule create \
  --nsg-name <nsg> -g <rg> \
  --name AllowHTTPS \
  --priority 100 \
  --destination-port-ranges 443 \
  --access Allow --direction Inbound
```

---

## 🗄️ Data Security (20-25% of AZ-500)

### Encryption Types
| Type | Key Management | Use Case |
|------|----------------|----------|
| Microsoft-managed | Azure handles | Default |
| Customer-managed | Your Key Vault | Compliance |
| Customer-provided | Your infrastructure | Full control |

### Azure Key Vault Objects
| Object | Purpose | Example |
|--------|---------|---------|
| Secrets | Sensitive strings | Connection strings, API keys |
| Keys | Cryptographic keys | Encryption keys |
| Certificates | SSL/TLS certs | HTTPS certificates |

### Key Vault Access Models
```
├── RBAC (Recommended)
│   ├── Key Vault Administrator
│   ├── Key Vault Secrets User
│   ├── Key Vault Crypto User
│   └── Key Vault Certificates Officer
└── Access Policies (Legacy)
    ├── Get, List, Set, Delete
    └── Per secret/key/cert permissions
```

### Storage Security
```bash
# Enable secure transfer
az storage account update -n <account> --https-only true

# Enable infrastructure encryption
az storage account create --require-infrastructure-encryption

# Configure private endpoint
az network private-endpoint create \
  --name pe-storage \
  --private-connection-resource-id <storage-id> \
  --group-id blob
```

---

## 🛡️ Security Operations (25-30% of AZ-500)

### Microsoft Defender for Cloud
| Feature | Purpose |
|---------|---------|
| Secure Score | Security posture metric |
| Recommendations | Improvement suggestions |
| Regulatory Compliance | Standards tracking |
| Workload Protection | Threat detection |

### Microsoft Sentinel Components
```
Data Connectors → Log Analytics → Analytics Rules → Incidents → Playbooks
                                         ↓
                                    Workbooks
```

### Key KQL Queries
```kusto
// Failed sign-ins
SigninLogs
| where ResultType != 0
| summarize count() by UserPrincipalName, IPAddress

// Azure activity by user
AzureActivity
| summarize count() by Caller, OperationNameValue
| top 10 by count_

// Key Vault access
AzureDiagnostics
| where ResourceType == "VAULTS"
| project TimeGenerated, OperationName, CallerIPAddress
```

---

## 🤖 AI Security Essentials

### Azure OpenAI Security Layers
```
1. Network: Private endpoints, VNet integration
2. Identity: Managed identity, RBAC
3. Content: Content filtering, moderation
4. Data: Encryption, no training on data
5. Monitoring: Audit logs, metrics
```

### AI Threat Categories
| Threat | Description | Mitigation |
|--------|-------------|------------|
| Prompt Injection | Malicious prompts | Input validation, system prompts |
| Data Leakage | Exposing training data | Content filtering |
| Model Theft | Extracting model | Rate limiting, monitoring |
| Jailbreaking | Bypassing restrictions | Strict content filters |

### OWASP LLM Top 10
1. Prompt Injection
2. Insecure Output Handling
3. Training Data Poisoning
4. Model Denial of Service
5. Supply Chain Vulnerabilities
6. Sensitive Information Disclosure
7. Insecure Plugin Design
8. Excessive Agency
9. Overreliance
10. Model Theft

---

## 🔧 Essential Azure CLI Commands

### Identity
```bash
# Create user
az ad user create --display-name "Name" --user-principal-name user@domain

# Create group
az ad group create --display-name "Name" --mail-nickname "name"

# Assign role
az role assignment create --assignee <id> --role "Role Name" --scope <scope>

# Create managed identity
az identity create -g <rg> -n <name>
```

### Network
```bash
# Create VNet
az network vnet create -g <rg> -n <name> --address-prefix 10.0.0.0/16

# Create NSG
az network nsg create -g <rg> -n <name>

# Create private endpoint
az network private-endpoint create -g <rg> -n <name> \
  --vnet-name <vnet> --subnet <subnet> \
  --private-connection-resource-id <resource-id> \
  --group-id <group>
```

### Security
```bash
# Enable Defender
az security pricing create --name VirtualMachines --tier Standard

# Create Key Vault
az keyvault create -g <rg> -n <name> --enable-rbac-authorization

# Store secret
az keyvault secret set --vault-name <kv> --name <name> --value <value>
```

---

## 📅 Study Schedule Summary

| Week | Focus | Exam Prep |
|------|-------|-----------|
| 1-2 | Azure Fundamentals | AZ-900 |
| 3-4 | Security Deep Dive | SC-900 |
| 5-6 | AI Security | AI-900 |
| 7-8 | Advanced + Project | **AZ-500** |

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| Microsoft Learn | learn.microsoft.com |
| AZ-500 Exam | learn.microsoft.com/certifications/azure-security-engineer |
| Azure Portal | portal.azure.com |
| Azure CLI Docs | learn.microsoft.com/cli/azure |
| OWASP LLM Top 10 | owasp.org/www-project-top-10-for-large-language-model-applications |

---

**Pro Tip:** Use `az interactive` for an enhanced CLI experience with auto-completion! 🎯
