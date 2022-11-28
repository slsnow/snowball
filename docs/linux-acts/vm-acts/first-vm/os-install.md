---
sidebar_position: 3
title: OS Installation
---

# Operating System Installation Guide

## Installing Leap 15.4

The VM will boot from the ISO file (or installation media). This is similar to booting from a USB or DVD on a normal machine OS installation. You will see the initial menu, and its options.

<br></br>

![leap15-4-install-1](/img/vm-acts/os-install-1.PNG)

<!---
Markdown Image Example

![leap15-4-install-1](/img/vm-acts/os-install-1.PNG)

(not working for some reason) https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown
<img src="/img/vm-acts/os-install-1.PNG" alt="os-in-1" width="500"/>
--->

:::tip

Follow along with the Installation Documentation here: https://doc.opensuse.org/documentation/leap/startup/html/book-startup/cha-install.html#

:::


:::caution

If you see a "Booting from local disk..." message, you took too long to make a selection. Close the VM Console Window, Poweroff the machine, and start again. This is caused by an intended installation media timeout. If no selection is made at the initial menu screen, it will attempt the default option to "Boot from Hard Disk".  

:::

### 1 - Select "Installation" to Launch the Installer Program

You will see a "Loading Kernel" message, and some logs scrolling by fast. The installer will then enter a loading screen, with a "Hardware Detection" message, as it prepares for the installation.

:::tip

openSUSE uses the YaST installer. During certain loading screens, such as the "Hardware Detection" screen, you can hit the `ESC` key to view additional logging. This is also true in other similar situations, especially related to booting.

:::

:::warning

If the installer fails to load, and you see a "Kernel Panic" log, you may want to try to disable Hyper-V. If you are having any issues at this point, please let me know.

:::

### 2 - The Welcome Screen

- Select "Next" to accept the License Agreement.

### 3 - Enabling Online Repositories

- A prompt will appear, asking to "Activate online repositories now?"

![leap15-4-install-1](/img/vm-acts/os-install-2.PNG)

- Select "Yes". 
- A new Window will appear, Listing the Online Repositories.
- Keep the default selections, and select "Next" to continue.

![leap15-4-install-1](/img/vm-acts/os-install-3.PNG)

### 4 - System Role

- On the system role page, select the button for "Server: Small set of packages suitable for servers with a text mode interface".
- Select Next

### 5 - Disk

- Keep the default Suggested Partitioning, and select "Next".

### 6 - Clock and Time Zone

- Select your timezone, and select "Next".

### 7 - Local User

- Select to "Skip User Creation", and select "Next".

### 8 - Authentication for the System Administrator Root

- Use the password `linux`
- Confirm and select Next
- A message will appear (Really use this password?)
- Select "Yes"

### 9 - Installation Overview

- Scroll down and Find the "Security" section.
    - Select to "disable" the Firewall.

![leap15-4-install-1](/img/vm-acts/os-install-4.PNG)

- Select "Install".
- In the Confirm Installation window, select "Install".
- Wait a few minutes for the installation to complete (It can take a little bit).

### 10 - Installation Complete, Login, and Snapshots

After the installation is complete, the Installation Media may load again on the first boot. You can either select Boot from Hard Disk Manually, or remove the installation media. Keep in mind if you don't remove the Installation Media, or change the boot order, this will happen on each boot, slowing down the reboot process.

After the inital boot, you will see a "localhost login:" screen.
- To login type "root" and press Enter
- When it prompts for the password, type "linux".

Now is good time to take a snapshot of the machine. Then if you break anything, you can revert to the snapshot.If you want, you can practice logging in, then reverting back to your snapshot.

:::note

VirtualBox Snapshot Documentation: https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/snapshots.html

:::