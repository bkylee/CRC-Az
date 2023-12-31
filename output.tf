output "resource_group_location" {
  value = azurerm_resource_group.rg.location
}

/* output "public_ip_address" {
  value = azurerm_public_ip.terraform_test_publicIP.ip_address
} */

output "key_vault" {
  value = azurerm_key_vault.terraform_keyvault.name
}