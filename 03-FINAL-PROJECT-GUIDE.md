# 🏗️ Azure Security Capstone Project

> **Project:** Secure AI-Powered Web Application
> **Duration:** 2 days (10-12 hours total)
> **Skills Demonstrated:** All 8 weeks of learning

---

## 📋 Project Overview

### What You'll Build:
A **secure, production-ready Azure environment** hosting an AI-powered web application with:
- Zero-trust network architecture
- Identity-based access controls
- AI services with content filtering
- Comprehensive security monitoring
- Automated incident response

### Architecture Diagram:

```
                    ┌─────────────────────────────────────────────────────────┐
                    │                    INTERNET                              │
                    └─────────────────────┬───────────────────────────────────┘
                                          │
                    ┌─────────────────────▼───────────────────────────────────┐
                    │              Azure Front Door (WAF)                      │
                    └─────────────────────┬───────────────────────────────────┘
                                          │
    ┌─────────────────────────────────────┴─────────────────────────────────────┐
    │                              HUB VNET (10.0.0.0/16)                        │
    │  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐                  │
    │  │ Azure Firewall│  │ Azure Bastion │  │ VPN Gateway   │                  │
    │  │ (10.0.1.0/26) │  │ (10.0.2.0/26) │  │ (10.0.3.0/27) │                  │
    │  └───────┬───────┘  └───────────────┘  └───────────────┘                  │
    └──────────┼────────────────────────────────────────────────────────────────┘
               │ VNet Peering
    ┌──────────┴────────────────────────────────────────────────────────────────┐
    │                           SPOKE VNET (10.1.0.0/16)                         │
    │  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐      │
    │  │   Web Tier        │  │   App Tier        │  │   Data Tier       │      │
    │  │   App Service     │  │   Function App    │  │   SQL + Storage   │      │
    │  │   (10.1.1.0/24)   │  │   (10.1.2.0/24)   │  │   (10.1.3.0/24)   │      │
    │  └─────────┬─────────┘  └─────────┬─────────┘  └─────────┬─────────┘      │
    │            │                      │                      │                 │
    │  ┌─────────┴──────────────────────┴──────────────────────┴─────────────┐  │
    │  │                    Private Endpoints (10.1.4.0/24)                   │  │
    │  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │  │
    │  │  │ OpenAI   │  │ Key Vault│  │ Storage  │  │ SQL DB   │            │  │
    │  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │  │
    │  └─────────────────────────────────────────────────────────────────────┘  │
    └───────────────────────────────────────────────────────────────────────────┘
                                          │
    ┌─────────────────────────────────────┴─────────────────────────────────────┐
    │                         SECURITY SERVICES                                  │
    │  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐                  │
    │  │ Entra ID      │  │ Defender for  │  │ Microsoft     │                  │
    │  │ + Cond Access │  │ Cloud         │  │ Sentinel      │                  │
    │  └───────────────┘  └───────────────┘  └───────────────┘                  │
    └───────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Phase 1: Foundation Setup (2 hours)

### Step 1.1: Create Resource Groups

```bash
# Set variables
LOCATION="eastus"
PROJECT="secureai"

# Create resource groups
az group create --name rg-$PROJECT-network --location $LOCATION
az group create --name rg-$PROJECT-security --location $LOCATION
az group create --name rg-$PROJECT-app --location $LOCATION
az group create --name rg-$PROJECT-data --location $LOCATION
az group create --name rg-$PROJECT-ai --location $LOCATION
```

### Step 1.2: Deploy Network Infrastructure

```bash
# Create Hub VNet
az network vnet create \
  --resource-group rg-$PROJECT-network \
  --name vnet-hub \
  --address-prefix 10.0.0.0/16 \
  --subnet-name AzureFirewallSubnet \
  --subnet-prefix 10.0.1.0/26

# Add Bastion subnet
az network vnet subnet create \
  --resource-group rg-$PROJECT-network \
  --vnet-name vnet-hub \
  --name AzureBastionSubnet \
  --address-prefix 10.0.2.0/26

# Create Spoke VNet
az network vnet create \
  --resource-group rg-$PROJECT-network \
  --name vnet-spoke \
  --address-prefix 10.1.0.0/16

# Create subnets
for subnet in "snet-web:10.1.1.0/24" "snet-app:10.1.2.0/24" "snet-data:10.1.3.0/24" "snet-pe:10.1.4.0/24"; do
  name=$(echo $subnet | cut -d: -f1)
  prefix=$(echo $subnet | cut -d: -f2)
  az network vnet subnet create \
    --resource-group rg-$PROJECT-network \
    --vnet-name vnet-spoke \
    --name $name \
    --address-prefix $prefix
done

# Disable private endpoint policies
az network vnet subnet update \
  --resource-group rg-$PROJECT-network \
  --vnet-name vnet-spoke \
  --name snet-pe \
  --disable-private-endpoint-network-policies true

# Create VNet peering
az network vnet peering create \
  --resource-group rg-$PROJECT-network \
  --name hub-to-spoke \
  --vnet-name vnet-hub \
  --remote-vnet vnet-spoke \
  --allow-vnet-access \
  --allow-forwarded-traffic

az network vnet peering create \
  --resource-group rg-$PROJECT-network \
  --name spoke-to-hub \
  --vnet-name vnet-spoke \
  --remote-vnet vnet-hub \
  --allow-vnet-access \
  --allow-forwarded-traffic
```

### Step 1.3: Deploy Azure Firewall

```bash
# Create public IP
az network public-ip create \
  --resource-group rg-$PROJECT-network \
  --name pip-firewall \
  --sku Standard

# Create firewall
az network firewall create \
  --resource-group rg-$PROJECT-network \
  --name fw-hub \
  --location $LOCATION \
  --sku AZFW_VNet \
  --tier Standard

# Configure IP
az network firewall ip-config create \
  --resource-group rg-$PROJECT-network \
  --firewall-name fw-hub \
  --name fw-ipconfig \
  --public-ip-address pip-firewall \
  --vnet-name vnet-hub

# Get private IP
FW_PRIVATE_IP=$(az network firewall show \
  --resource-group rg-$PROJECT-network \
  --name fw-hub \
  --query "ipConfigurations[0].privateIPAddress" -o tsv)

# Create route table
az network route-table create \
  --resource-group rg-$PROJECT-network \
  --name rt-to-firewall

az network route-table route create \
  --resource-group rg-$PROJECT-network \
  --route-table-name rt-to-firewall \
  --name default-to-fw \
  --address-prefix 0.0.0.0/0 \
  --next-hop-type VirtualAppliance \
  --next-hop-ip-address $FW_PRIVATE_IP

# Associate with spoke subnets
for subnet in snet-web snet-app snet-data; do
  az network vnet subnet update \
    --resource-group rg-$PROJECT-network \
    --vnet-name vnet-spoke \
    --name $subnet \
    --route-table rt-to-firewall
done
```

---

## 🔐 Phase 2: Security Infrastructure (2 hours)

### Step 2.1: Create Key Vault

```bash
# Generate unique name
KV_NAME="kv-$PROJECT-$(openssl rand -hex 4)"

# Create Key Vault
az keyvault create \
  --resource-group rg-$PROJECT-security \
  --name $KV_NAME \
  --location $LOCATION \
  --enable-rbac-authorization true \
  --enable-soft-delete true \
  --enable-purge-protection true \
  --public-network-access Disabled

# Create private endpoint for Key Vault
az network private-endpoint create \
  --resource-group rg-$PROJECT-network \
  --name pe-keyvault \
  --vnet-name vnet-spoke \
  --subnet snet-pe \
  --private-connection-resource-id $(az keyvault show -n $KV_NAME --query id -o tsv) \
  --group-id vault \
  --connection-name keyvault-connection
```

### Step 2.2: Configure Managed Identities

```bash
# Create User Assigned Managed Identity for App
az identity create \
  --resource-group rg-$PROJECT-security \
  --name mi-webapp

# Get identity details
MI_PRINCIPAL=$(az identity show -g rg-$PROJECT-security -n mi-webapp --query principalId -o tsv)
MI_CLIENT=$(az identity show -g rg-$PROJECT-security -n mi-webapp --query clientId -o tsv)
MI_ID=$(az identity show -g rg-$PROJECT-security -n mi-webapp --query id -o tsv)

# Assign Key Vault Secrets User role
az role assignment create \
  --assignee $MI_PRINCIPAL \
  --role "Key Vault Secrets User" \
  --scope $(az keyvault show -n $KV_NAME --query id -o tsv)
```

### Step 2.3: Create NSGs

```bash
# Web tier NSG
az network nsg create -g rg-$PROJECT-network -n nsg-web

az network nsg rule create \
  -g rg-$PROJECT-network --nsg-name nsg-web \
  -n AllowHTTPS --priority 100 \
  --destination-port-ranges 443 \
  --protocol Tcp --access Allow --direction Inbound

# App tier NSG  
az network nsg create -g rg-$PROJECT-network -n nsg-app

az network nsg rule create \
  -g rg-$PROJECT-network --nsg-name nsg-app \
  -n AllowFromWeb --priority 100 \
  --source-address-prefixes 10.1.1.0/24 \
  --destination-port-ranges 443 \
  --protocol Tcp --access Allow --direction Inbound

# Data tier NSG
az network nsg create -g rg-$PROJECT-network -n nsg-data

az network nsg rule create \
  -g rg-$PROJECT-network --nsg-name nsg-data \
  -n AllowFromApp --priority 100 \
  --source-address-prefixes 10.1.2.0/24 \
  --destination-port-ranges 1433 \
  --protocol Tcp --access Allow --direction Inbound

# Associate NSGs
az network vnet subnet update -g rg-$PROJECT-network --vnet-name vnet-spoke -n snet-web --nsg nsg-web
az network vnet subnet update -g rg-$PROJECT-network --vnet-name vnet-spoke -n snet-app --nsg nsg-app
az network vnet subnet update -g rg-$PROJECT-network --vnet-name vnet-spoke -n snet-data --nsg nsg-data
```

---

## 🤖 Phase 3: AI Services (2 hours)

### Step 3.1: Deploy Azure OpenAI

```bash
AOAI_NAME="aoai-$PROJECT-$(openssl rand -hex 4)"

# Create Azure OpenAI (if you have access)
az cognitiveservices account create \
  --resource-group rg-$PROJECT-ai \
  --name $AOAI_NAME \
  --kind OpenAI \
  --sku S0 \
  --location $LOCATION \
  --custom-domain $AOAI_NAME \
  --public-network-access Disabled

# Create private endpoint
az network private-endpoint create \
  --resource-group rg-$PROJECT-network \
  --name pe-openai \
  --vnet-name vnet-spoke \
  --subnet snet-pe \
  --private-connection-resource-id $(az cognitiveservices account show -g rg-$PROJECT-ai -n $AOAI_NAME --query id -o tsv) \
  --group-id account \
  --connection-name openai-connection

# Assign identity access
az role assignment create \
  --assignee $MI_PRINCIPAL \
  --role "Cognitive Services OpenAI User" \
  --scope $(az cognitiveservices account show -g rg-$PROJECT-ai -n $AOAI_NAME --query id -o tsv)
```

### Step 3.2: Deploy Model with Content Filter

**Portal Steps:**
1. Go to **Azure OpenAI Studio**
2. Create deployment: `gpt-4` or `gpt-35-turbo`
3. Create content filter with strict settings
4. Apply filter to deployment

---

## 🌐 Phase 4: Application Deployment (2 hours)

### Step 4.1: Create App Service with VNet Integration

```bash
# Create App Service Plan
az appservice plan create \
  --resource-group rg-$PROJECT-app \
  --name asp-$PROJECT \
  --sku P1V3 \
  --is-linux

# Create Web App
az webapp create \
  --resource-group rg-$PROJECT-app \
  --plan asp-$PROJECT \
  --name webapp-$PROJECT-$(openssl rand -hex 4) \
  --runtime "PYTHON:3.11"

WEBAPP_NAME=$(az webapp list -g rg-$PROJECT-app --query "[0].name" -o tsv)

# Assign managed identity
az webapp identity assign \
  --resource-group rg-$PROJECT-app \
  --name $WEBAPP_NAME \
  --identities $MI_ID

# Configure VNet integration
az webapp vnet-integration add \
  --resource-group rg-$PROJECT-app \
  --name $WEBAPP_NAME \
  --vnet vnet-spoke \
  --subnet snet-web

# Configure app settings
az webapp config appsettings set \
  --resource-group rg-$PROJECT-app \
  --name $WEBAPP_NAME \
  --settings \
    AZURE_OPENAI_ENDPOINT="https://$AOAI_NAME.openai.azure.com" \
    AZURE_CLIENT_ID=$MI_CLIENT \
    KEY_VAULT_URL="https://$KV_NAME.vault.azure.net"
```

### Step 4.2: Sample Secure Application Code

Create `app.py`:

```python
"""
Secure AI-Powered Web Application
Uses managed identity for all Azure service access
"""

import os
from flask import Flask, request, jsonify
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient
from openai import AzureOpenAI

app = Flask(__name__)

# Initialize Azure credentials (uses managed identity in Azure)
credential = DefaultAzureCredential()

# Key Vault client
kv_url = os.environ.get("KEY_VAULT_URL")
secret_client = SecretClient(vault_url=kv_url, credential=credential)

# Azure OpenAI client with managed identity
openai_client = AzureOpenAI(
    azure_endpoint=os.environ.get("AZURE_OPENAI_ENDPOINT"),
    azure_ad_token_provider=lambda: credential.get_token(
        "https://cognitiveservices.azure.com/.default"
    ).token,
    api_version="2024-02-01"
)

@app.route("/health")
def health():
    return jsonify({"status": "healthy"})

@app.route("/chat", methods=["POST"])
def chat():
    try:
        user_message = request.json.get("message", "")
        
        # Input validation
        if len(user_message) > 1000:
            return jsonify({"error": "Message too long"}), 400
        
        response = openai_client.chat.completions.create(
            model="gpt-4",  # Your deployment name
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message}
            ],
            max_tokens=500
        )
        
        return jsonify({
            "response": response.choices[0].message.content
        })
        
    except Exception as e:
        # Don't expose internal errors
        app.logger.error(f"Error: {str(e)}")
        return jsonify({"error": "An error occurred"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
```

---

## 📊 Phase 5: Security Monitoring (2 hours)

### Step 5.1: Enable Defender for Cloud

```bash
# Enable all Defender plans
for plan in VirtualMachines StorageAccounts KeyVaults AppServices OpenSourceRelationalDatabases; do
  az security pricing create --name $plan --tier Standard
done
```

### Step 5.2: Deploy Microsoft Sentinel

```bash
# Create Log Analytics workspace
az monitor log-analytics workspace create \
  --resource-group rg-$PROJECT-security \
  --workspace-name law-$PROJECT \
  --location $LOCATION

LAW_ID=$(az monitor log-analytics workspace show -g rg-$PROJECT-security -n law-$PROJECT --query id -o tsv)

# Enable diagnostic logging for all resources
# Key Vault
az monitor diagnostic-settings create \
  --resource $(az keyvault show -n $KV_NAME --query id -o tsv) \
  --name kv-diagnostics \
  --workspace $LAW_ID \
  --logs '[{"categoryGroup":"allLogs","enabled":true}]'

# Azure OpenAI
az monitor diagnostic-settings create \
  --resource $(az cognitiveservices account show -g rg-$PROJECT-ai -n $AOAI_NAME --query id -o tsv) \
  --name aoai-diagnostics \
  --workspace $LAW_ID \
  --logs '[{"categoryGroup":"allLogs","enabled":true}]'

# Web App
az monitor diagnostic-settings create \
  --resource $(az webapp show -g rg-$PROJECT-app -n $WEBAPP_NAME --query id -o tsv) \
  --name webapp-diagnostics \
  --workspace $LAW_ID \
  --logs '[{"category":"AppServiceHTTPLogs","enabled":true},{"category":"AppServiceConsoleLogs","enabled":true}]'
```

### Step 5.3: Create Security Alerts

```bash
# Alert for Key Vault access outside business hours
az monitor scheduled-query create \
  --resource-group rg-$PROJECT-security \
  --name "KeyVault-AfterHours-Access" \
  --scopes $LAW_ID \
  --condition "count > 0" \
  --evaluation-frequency 15m \
  --window-size 15m \
  --severity 2 \
  --condition-query "
    AzureDiagnostics
    | where ResourceType == 'VAULTS'
    | where TimeGenerated between (datetime(22:00) .. datetime(06:00))
    | project TimeGenerated, CallerIPAddress, OperationName
  "
```

---

## ✅ Project Validation Checklist

### Network Security
- [ ] Hub-spoke network topology deployed
- [ ] Azure Firewall configured with deny-by-default
- [ ] NSGs applied to all subnets
- [ ] Private endpoints for all PaaS services
- [ ] No public IP addresses on workload resources

### Identity & Access
- [ ] Managed identity used for all service authentication
- [ ] No secrets stored in code or config files
- [ ] RBAC with least-privilege access
- [ ] Conditional Access policies configured

### AI Security
- [ ] Azure OpenAI with private endpoint only
- [ ] Content filtering enabled
- [ ] Rate limiting configured
- [ ] Audit logging enabled

### Monitoring & Response
- [ ] Defender for Cloud enabled
- [ ] Microsoft Sentinel deployed
- [ ] Diagnostic logging for all resources
- [ ] Security alerts configured

---

## 🎯 Stretch Goals (If Time Permits)

1. **Add Azure Front Door with WAF** for global load balancing
2. **Implement DDoS Protection** standard plan
3. **Create automated playbook** for incident response
4. **Add Azure Backup** for disaster recovery
5. **Implement Azure Policy** for governance

---

## 🧹 Cleanup

```bash
# Delete all resource groups
for rg in network security app data ai; do
  az group delete --name rg-$PROJECT-$rg --yes --no-wait
done
```

---

## 📝 Documentation Template

Create a final report documenting:

1. **Architecture Overview** - Diagram and component descriptions
2. **Security Controls** - List of all controls implemented
3. **Access Management** - RBAC assignments and policies
4. **Monitoring Setup** - Alerts and dashboards created
5. **Lessons Learned** - Challenges and solutions
6. **Recommendations** - Future improvements

---

**Congratulations! 🎉** 

You've built a production-grade secure Azure environment. This project demonstrates expertise in:
- Zero-trust network architecture
- Identity-based security
- AI service security
- Security operations and monitoring

Use this as a portfolio piece and reference for your AZ-500 certification! 💪
