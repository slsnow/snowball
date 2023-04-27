---
sidebar_position: 2
title: Virtual Machine
---
# Virtual Machine Configuration

To complete this activity, you will need a VM running the openSUSE Leap 15.4 OS.

## Hardware Recommendations

- Minecraft Wiki Recommendations: [Link](https://minecraft.fandom.com/wiki/Server/Requirements/Dedicated#Console)

- You can test these recommendations, and adjust resources as needed. 

### My Hardware Recommendations

|       |CPU | RAM | Disk Space|
|---    |--- | --- |---        | 
|Minimum| 1  | 4G  | 20G       |
|Better | 1  | 8G  | 25G       |
|Optimal| 2+ | 12G | 30G+      |
<br></br>

:::tip

Generally, I wouldn't recommend assigning the VM with more than half of a systems total resources. For example, if you only have 8G RAM total, on the host, don't assign more than 4G to the guest machine. 

:::

:::danger

It might not be ideal for performance to run the Virtual Machine Host on the same machine that is running the minecraft client to play the game.

:::

## VM Setup

- Download the ISO file from https://get.opensuse.org/leap/15.4/
    - Feel free to use the "Network Image".
- Create a VM using your VM host manager of choice.
- Allocate resources
- Use the leap15.4 ISO for the installation media
- Use a Bridged Connection

## OS Installation

Run through the installer. You may follow the documentation for help if needed:
https://doc.opensuse.org/documentation/leap/startup/single-html/book-startup/index.html#sec-opensuse-installquick-install

- Networking
    - Just leave it alone to use DHCP for now
- Leave the Online Repositories to the default selections
- System Role
    - Server (Small set of packages suitable for servers with a text mode interface.)
- Disk
    - Select Guided Setup
    - Select to use LVM
        - Deselect the option to have a home directory
        - EXT4 or XFS are fine
    - The recommendation should leave you with 2G of SWAP, and the rest of your disk space for the "root" logical volume
    - If a lot of this isn't making sense, write down your questions, and we will also be addressing this topic in future labs.
- Clock and Time Zone
    - Set your Region and time
- Local User
    - Skip User Creation
- Authentication for the System Administrator "root"
    - In this scenario we aren't too worried about security, as this will all be happening locally. It's best to assign a simple root password, such as `linux`. 
- In the installation setting, scroll to Security
    - Disable Firewall
    - Enable SSH
- Complete the Installation

## Post Installation

- Verify the networking
    - Make sure you can reach the outside world
        - `ping 8.8.8.8`
    - Check your current ip
        - `ip a`
        - Under `eth0` you should see a line "inet" and a private IP (The series of numbers starting with `192.168` or `10.`). This is the systems IP address. You will want to take note of this ip.

- If you'd like, you can assign a hostname, like: minecraft.snowball.home
     - `hostnamectl set-hostname minecraft.snowball.home`
     - vim /etc/hosts
          - Create an entry with the IP   FQDN    shortname
          - Example: `192.168.0.31   minecraft.snowball.home     minecraft`

- You can configure a local /etc/hosts, or local DNS to resolve the hostname, or just use the IP address. If you're curious about this, ask me. 

:::caution Warning

It's recommended to take a snapshot of your VM before starting this activity.

:::