param location string = 'eastus'
param orgPrefix string
param deployRgNames array = [
  'platform-sec',
  'platform-network',
  'workloads'
]

resource rgs 'Microsoft.Resources/resourceGroups@2021-04-01' = [for name in deployRgNames: {
  name: 'rg-${orgPrefix}-${name}'
  location: location
}]

output resourceGroupNames array = [for r in rgs: r.name]
