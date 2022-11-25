---
sidebar_position: 2
title: VM Configuration
---

# Virtual Machine Configuration

## Downloading an ISO

Before we can Configure a Virtual Machine, to install an OS, we need the ISO file for the OS we will be installation. 

In this case, we'll be using the OpenSUSE Leap 15.4 Network Iso. This can be downloaded here:
[Link](https://get.opensuse.org/leap/15.4/). 

## Configuring a VM for Installation

### Initial Setup
In the case of VirtualBox, you'll select the "New" button, and configure the following parameters:

Name: snowball-fvm
Folder: Leave Default, unless you'd rather specify a directory. Keep in mind that VMs will generally perform better on an SSD rather than a HDD.
Image: Select the leap 15.4 network ISO file.

Then select "Next".

### Hardware Selection
For this test, it's fine to provide minimal hardware resources.
- RAM - 1024 MB
- CPU - 1 CPU

Select Next.

Virtual Hard Disk
- Create a Virtual Hard Disk Now
    - Disk Size: 10G

Select Next