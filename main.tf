resource "azurerm_resource_group" "rg" {
  location = var.resource_group_location
  name     = "terraform_test_rg"
}

data "azurerm_client_config" "current" {}

#virtual network 
resource "azurerm_virtual_network" "terraform_test_network" {
  name                = "terraform-vnet"
  address_space       = ["192.168.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

#subnet 
resource "azurerm_subnet" "terraform_test_subnet" {
  name                 = "terraform-subnet"
  address_prefixes     = ["192.168.0.0/24"]
  virtual_network_name = azurerm_virtual_network.terraform_test_network.name
  resource_group_name  = azurerm_resource_group.rg.name
}

/* resource "azurerm_public_ip" "terraform_test_publicIP" {
  name                = "terraform-publicIP"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  allocation_method   = "Dynamic"
} */

#nic
/* resource "azurerm_network_interface" "terraform_test_nic" {
  name                = "terraform-nic"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "test_nic_config"
    subnet_id                     = azurerm_subnet.terraform_test_subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.terraform_test_publicIP.id
  }
} */

#storage account 
resource "azurerm_storage_account" "terraform_test_SA" {
  name                     = "saforbkyl"
  location                 = azurerm_resource_group.rg.location
  resource_group_name      = azurerm_resource_group.rg.name
  account_tier             = "Standard"
  account_replication_type = "LRS"

  static_website {
    index_document = "index.html"
  }
}

resource "azurerm_storage_blob" "terraform_blob" {
  name                   = "index.html"
  storage_account_name   = azurerm_storage_account.terraform_test_SA.name
  storage_container_name = "$web"
  type                   = "Block"
  content_type           = "text/html"
  source                 = "index.html"
}

#VM
/* resource "azurerm_linux_virtual_machine" "terraform_test_VM" {
  name                  = "terraform-vm"
  location              = azurerm_resource_group.rg.location
  resource_group_name   = azurerm_resource_group.rg.name
  network_interface_ids = [azurerm_network_interface.terraform_test_nic.id]
  size                  = "Standard_B1s"
  admin_username        = "testadmin"

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  admin_ssh_key {
    username   = "testadmin"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
} */

resource "azurerm_cdn_profile" "terraform_CDNprofile" {
  name                = "testCDNProfile"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "Standard_Microsoft"
}

# resource "azurerm_cdn_endpoint" "terraform_CDNendpoint" {
#   name                = "leekiendpoint"
#   profile_name        = azurerm_cdn_profile.terraform_CDNprofile.name
#   location            = azurerm_resource_group.rg.location
#   resource_group_name = azurerm_resource_group.rg.name

#   origin {
#     name      = "endpointName"
#     host_name = "the origin hostname for the static website"
#   }
# }

resource "azurerm_dns_zone" "terraform_dnsZone" {
  name                = "kiyoonhasacoolwebsite.com"
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_key_vault" "terraform_keyvault" {
  name                        = random_string.keyvault_name.id
  location                    = azurerm_resource_group.rg.location
  resource_group_name         = azurerm_resource_group.rg.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false

  sku_name = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    key_permissions = [
      "Get",
    ]

    secret_permissions = [
      "Get",
    ]

    storage_permissions = [
      "Get",
    ]
  }
}

resource "random_string" "keyvault_name" {
  length = 10
  lower = true
  numeric = false
  special = false
  upper = false 
}