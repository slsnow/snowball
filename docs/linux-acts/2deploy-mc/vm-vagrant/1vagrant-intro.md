---
sidebar_position: 1
title: What is Vagrant
---

# Vagrant Setup

In this activity, we are going to automate VM deployments using a tool called Vagrant.

## What is Vagrant?

Vagrant is an open-source software product developed by HashiCorp for building and managing virtual machine (VM) environments in a single workflow. It facilitates the process of setting up and configuring VM environments, ensuring that users have a consistent and reproducible environment across different platforms. 

Vagrant is able to use various virtualization providers, such as: VirtualBox, VMware, AWS, and others. Vagrant is primarily used by developers, operations engineers, and designers to create and manage portable and easy-to-reproduce development environments. Hashicorp also makes an infrastructure product called Terraform, that is used for deployments as well, but includes support across public cloud providers.

## How does it work?
Vagrant relies on a configuration file called Vagrantfile to define the desired VM environment, including the base VM image (called a "box"), the virtualization provider (e.g., VirtualBox, VMware, AWS), and any provisioning scripts or tools (e.g., Shell scripts, Ansible, Puppet) to configure the VM after it's created.

The basic steps of a Vagrant deployment are:

1. Read the Vagrantfile to determine the VM configuration.
2. Download the specified base VM image (box) if it's not already available locally.
3. Create a new VM using the selected virtualization provider with the specified settings (e.g., memory, CPU, network).
4. Run any provisioning scripts or tools to configure the VM according to the Vagrantfile.
5. Manage the lifecycle of the VM, including starting, stopping, suspending, resuming, and destroying it.

## How to configure and use Vagrant?

In this activity, the vagrant files, and instructions will be provided for you. Vagrant will also be used to deploy lab activities.

The Vagrantfile configuration, and networking configurations, can be a little confusing at first. It can be very powerful, and help you save a lot of time. To see an example of a more complex Vagrant Configuration, refer to the following project: 

[SUSE Vagrant Labs](https://github.com/ZeTopHat/suse-vagrant-labs).

