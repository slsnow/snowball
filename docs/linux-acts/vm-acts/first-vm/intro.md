---
sidebar_position: 1
title: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction to Virtual Machines

For this activity, we will be installing our first Virtual Machine. The VM will be for activity and lab purposes, and will be an openSUSE Leap 15.4 machine.

The activities will include:
- VM Configuration
- OS Installation
- SSH
- Basic Navigation
- Basic File Management
- Basic Package Management
- Basic File Editing
- Basic System Monitoring

## Why install a Virtual Machine?

There are many reasons to run a virtual machine. In this case, the activities and labs require a openSUSE OS. Even if you already had a bare metal system that boots openSUSE at your house, it's still ideal to have a VM, for snapshots, and many other reasons. You will see some of these reasons yourself throughout the activities. 

If you are interested in learning more about the Virtual Machines, how they work, and their benefits, see the links in the Reference Guide: 
[External References Page: Virtual Machines](https://slsnow.github.io/snowball/docs/linux-topics/ext-refs#virtual-machines)


## Setting up a Virtual Machine Manager

Before we can run a virtual machine, we need to choose a system to host it. Keep in mind that your options will be limited by your hardware as well, as your virtual machine will share hardware resources with its host.

:::info

For now, most of these instructions are assuming that you're using Oracle VirtualBox as your VM Host Manager.

:::

:::caution

Virtual Machines can require a lot of hardware resources. If you have hardware related questions, let me know, as these questions can be varied.

:::

<Tabs
  defaultValue="vb"
  values={[
    {label: 'VirtualBox', value: 'vb'},
    {label: 'KVM', value: 'kvm'},
    {label: 'VMware', value: 'vmw'},
    {label: 'AWS', value: 'aws'},
  ]}>
  
  <TabItem value="vb">
  Oracle Virtual Box is a great option if you will be using a Windows machine as your host. It is free and relatively easy to setup.

  Download The Virtual Box Software

  1) Navigate to "https://www.virtualbox.org/wiki/Downloads"

  2) Under latest release platform packages, select the "Windows hosts" download link. 

  3) Follow the installation instructions. 

  4) If the installation completes, open the "VirtualBox Manager" application.
  
  </TabItem>
  <TabItem value="kvm">
  KVM (Kernel Virtual Machine), is a great option if you already have a linux host setup. I prefer to run a linux host machine, with KVM libvirt. You can run the Virtual Machine Manager, remotely. You can also use the cockpit WebUI.   
  
  For now, ask if you have questions about this option.
  
  </TabItem>
  <TabItem value="vmw">
  VMware is the industry standard for enterprise on premise virtual machine management. There are good free options if you want to go thise route. Generally, users like to install a separate ESXI server for hosting the Virtual Machines, and not just running it on your desktop machine. If you are running MacOS, VMWare Fusion is a good option.  
  </TabItem>
  <TabItem value="aws">
  AWS (Amazon Web Services) is a popular public cloud provider for Virtual Machines. There are some good free options, depending on your monthly use, and a free 12 month trial.</TabItem>
</Tabs>


:::tip

If you're not sure which option to choose, please ask.

:::


