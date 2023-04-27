---
sidebar_position: 2
title: Vagrant Setup
---

# Vagrant Setup

:::note

Future examples will explain how to install vagrant with a Linux/libvirt host. This example is currently only for a Windows/VirtualBox configuration.

:::

:::tip

Prerequisite: This Activity assumes that you already have done the VM Activity, and have configured Virtualbox on your windows machine successfully.

:::

## Install Git Bash

1. Download Git Bash for Windows [here](https://git-scm.com/download/win)
2. Run the installer, and during the installation process, select the components you want to install (by default, Git Bash is selected).
3. Proceed with the installation, and complete it.

## Install Vagrant:

1. Download Vagrant for Windows [here](https://developer.hashicorp.com/vagrant/downloads).
2. Run the installer, and follow the instructions to complete the installation.

## Set up Git Bash in Windows Terminal:

1. Install Windows Terminal from the Microsoft Store [here](https://aka.ms/terminal) if you haven't already.
2. Open Windows Terminal.
3. Click on the down arrow next to the tab and select `Git Bash`. 
    - You can set this as the default in settings if you'd like.

## Setup the Deployment Directory

In the Git Bash Terminal, run the following commands:
```
mkdir ~/vagrant-minecraft
cd ~/vagrant-minecraft/
```

:::note

You can run this in a different directory. Just keep in mind that VMs will perform best on an SSD, and you'll want enough disk space available in the give directory. 

:::

:::tip

When you see the `~` symbol in CLI directories, that is just referring to the users "home" directory.

:::



