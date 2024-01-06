resource "azurerm_resource_group" "rg" {
  location = var.resource_group_location
  name     = "terraform_test_rg"
}

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

resource "azurerm_public_ip" "terraform_test_publicIP" {
  name                = "terraform-publicIP"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  allocation_method   = "Dynamic"
}

#nic
resource "azurerm_network_interface" "terraform_test_nic" {
  name                = "terraform-nic"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "test_nic_config"
    subnet_id                     = azurerm_subnet.terraform_test_subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.terraform_test_publicIP.id
  }
}

#storage account 
resource "azurerm_storage_account" "terraform_test_SA" {
  name                     = "storageaccountforte"
  location                 = azurerm_resource_group.rg.location
  resource_group_name      = azurerm_resource_group.rg.name
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

#VM
resource "azurerm_linux_virtual_machine" "terraform_test_VM" {
  name                  = "terraform-vm"
  location              = azurerm_resource_group.rg.location
  resource_group_name   = azurerm_resource_group.rg.name
  network_interface_ids = [azurerm_network_interface.terraform_test_nic.id]
  size               = "Standard_B1s"
  admin_username = "testadmin"
  
  os_disk {
    caching           = "ReadWrite"
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
}
