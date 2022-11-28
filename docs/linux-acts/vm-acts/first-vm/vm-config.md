---
sidebar_position: 2
title: VM Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual Machine Configuration Walkthrough

## Setting up a Virtual Machine Manager

Before we can run a virtual machine, we need to choose a system to host it. Keep in mind that your options will be limited by your host OS, your hardware, and whether you want to use a free or paid service.

:::info

Since Windows is still the most popular Desktop Operating System, this activity will assume that you are running Windows. The activity will also assume Oracle VirtualBox as your VM Host Manager. If you want to use a different VM Host Manager, that's fine. Just ask if you have any questions.

:::

:::caution

If you have any virtualization or hardware problems, they can be specific for your system. Please ask if you have any issues.

:::

<br></br>

### Virtual Machine Management Tools

There are many good Virtual Machine Management tools out there. Here are some of the options you could use.

<Tabs
  defaultValue="vb"
  values={[
    {label: 'VirtualBox', value: 'vb'},
    {label: 'VMware', value: 'vmw'},
    {label: 'KVM', value: 'kvm'},
    {label: 'AWS', value: 'aws'},
    {label: 'Proxmox', value: 'pmox'}
  ]}> 
  <TabItem value="vb">
  Oracle Virtual Box is a great option if you will be using a Windows machine as your host. It is free and relatively easy to use. Despite being free, it has a lot of good features.
  </TabItem>
  <TabItem value="vmw">
  VMWare, provides software for VM Management, that is the industry standard for virtualization. However, some of their free offerings, such as VMware Player, can be a little limiting (even with a personal use license). If you are running macOS, VMWare Fusion is a good free option.  
  </TabItem>
  <TabItem value="kvm">
  I would recommend this option if you have a separate machine from your normal desktop computer. You would want to install a Linux distro on this machine, and ideally have 16 GB or more RAM. KVM (Kernel-based Virtual Machine), is software built into the Linux kernel, that manages CPU and Memory for Virtual Machines. QEMU is a technology that emulates VM hardware components. The libvirtd service, and virsh CLI tool, are common tools for Virtual Machine Management. Additionally, the Virtual Machine Manager is a graphical tool, which also has remote support. This means you can control the Virtual Machines from a different machine. For access via a web interface, there are tools like the "cockpit" project. These opensource technolgies, are commonly used in enterprise settings.
  </TabItem>
  <TabItem value="pmox">
  Proxmox VE, is a very useful open-source Virtual Machine Management Platform. It uses many of the same technologies mentioned in the KVM section. However, it doesn't get much enterprise use at this point, although that may change.
  </TabItem>    
  <TabItem value="aws">
  AWS (Amazon Web Services) is a popular public cloud provider for Virtual Machines. There are some good free options, depending on your monthly use, and a free 12-month trial. If you'd like to get experience with AWS, this is a good option.
  </TabItem>
</Tabs>

<br></br>
<br></br>

:::tip

This might seem confusing at first. If you're not sure which option to choose,please ask.

:::

<br></br>

## Virtual Machine Configuration Walkthrough

### 1 - Installing VirtualBox
- In a web-browser, navigate to "https://www.virtualbox.org/wiki/Downloads".
- Under "latest release platform packages", select the "Windows hosts" download link.
- After the download has completed, Launch the Installer, and follow the instructions
- When the installation completes, open the "VirtualBox Manager" application.

### 2 - Downloading an ISO

Before we can configure a Virtual Machine, we are going to need the the files to install an OS on the VM. In this case, we'll be using the OpenSUSE Leap 15.4 Operating System. The Network ISO can be downloaded here: [Link](https://get.opensuse.org/leap/15.4/)

### 3 - Configuring a VM for Installation

- Select the "New" button
- In the Bottom of the "Create Virtual Machine" prompt, toggle to "Expert Mode". 
- Configure the VM with the following parameters:

|Item | Parameters |
|---  |---         |
|Name | snowball-fvm|   
|Machine Folder| Default (Or specify a directory). VMs will generally perform better on an SSD rather than an HDD.|
|Type| Linux |
|Version | openSUSE (64-bit)|
|Memory Size| 1024 MB|
|Hard Disk | Create a virtual hard disk now|

- Select "Create", and continue on to the next prompt window.

|Item | Parameters |
|---  |---         |
|File Location | Default (Or specify a directory). VMs will generally perform better on an SSD rather than an HDD.|
|File Size | 8.00 GB|
|Hard disk file type | VDI (virtualBOx Disk Image)|
|Storage on physical hard disk|Fixed Size|

<br></br>

:::note

These minimal CPU, RAM, and Disk Space parameters will work fine for the purposes of this activity.

:::

- Select "Create" to continue.

At this point, a new Window should appear showing your VM (Powered OFF), with an additional prompt. 

- In the "Select start-up disk" prompt, point to the openSUSE Leap 15.4 Network ISO that was downloaded in step 2 above.
- Select "Start" to begin the OS installation.
    - At this point, you may want to apply the "Scaled-View" in the display options.  

:::tip

See the VirtualBox User Manual, or google for any VirtualBox related questions.
https://www.virtualbox.org/manual/ch01.html#intro-starting

:::