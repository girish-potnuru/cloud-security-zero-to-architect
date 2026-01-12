terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.100.0"
    }
  }
}

provider "azurerm" {
  features {}
}

variable "prefix" {
  type = string
}

variable "location" {
  type    = string
  default = "eastus"
}

resource "azurerm_resource_group" "platform_sec" {
  name     = "rg-${var.prefix}-platform-sec"
  location = var.location
}

output "resource_group_name" {
  value = azurerm_resource_group.platform_sec.name
}
