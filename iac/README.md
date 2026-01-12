# IaC Quick Start

This folder contains minimal Bicep and Terraform samples to bootstrap landing zone and governance work.

## Bicep

Deploy resource groups for a platform foundation.

```bash
az group create -n rg-iac -l eastus
az deployment sub create \
  -l eastus \
  -f iac/bicep/landing-zone.bicep \
  -p orgPrefix=demo
```

## Terraform

Create a basic platform security resource group.

```bash
cd iac/terraform
terraform init
terraform apply -var "prefix=demo" -auto-approve
```
