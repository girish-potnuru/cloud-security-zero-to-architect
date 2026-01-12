# Policy Baseline (Template)

Goal: Define an Azure Policy initiative that enforces core security controls (deny public network, enforce private endpoints, require encryption, tags).

How to use:
1) Replace placeholder policyDefinitionIds with built-in/custom definitions you select.
2) Assign the initiative at the management group or subscription scope.
3) Track exemptions in an exemptions log (include expiry and justification).

## Find Built-in Policy IDs (CLI)
Use Azure CLI to locate policy definitions by display name and capture their IDs:

```bash
# Example: find policies related to public network access
az policy definition list \
	--query "[?contains(displayName, 'public network access')].{name:name,id:id,displayName:displayName}" -o table

# Private endpoints / encryption / required tags
az policy definition list --query "[?contains(displayName,'private endpoint')]" -o table
az policy definition list --query "[?contains(displayName,'encrypt') && contains(displayName,'at rest')]" -o table
az policy definition list --query "[?contains(displayName,'require tag')]" -o table
```

Then replace the placeholder IDs in initiative-baseline.json and commit.
