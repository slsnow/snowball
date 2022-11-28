---
sidebar_position: 3
title: OS Installation
---

# The Leap 15.4 Operating System Installation

The VM should boot up, into the ISO file (or installation media). This is similar to booting from a USB or DVD on a normal machine, for OS installation purposes, and will look like this.

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

If you see a "Booting from local disk..." message, you took too long to make a selection. Close the Window, Poweroff the machine, and start again. This is caused by an installation media timeout. If no selection is made, it will attempt the default option to "Boot from Hard Disk".  

:::

## 1 - Select "Installation" to Launch the Installer Program

You will see some logs scrolling, as the installer hardware and prepares for installation.

:::tip

openSUSE uses the YaST installer. While the Installer is loading, on certain screens you can hit the `ESC` key to view additional logging.

:::

:::warning

If it fails to start the installation, and you see a "Kernel Panic" log, you may want to try to disable Hyper-V on your system. If you are having any issues at this point, please let me know.

:::

## 2 - The Welcome Screen

- Select "Next" to accept the License Agreement.

## 3 - Enabling Online Repositories

- Select "Yes". 
- Ignore a warning about not being able to find repositories, and continue.

## 4 - Disk

- Keep the defaults, and select "Next".

## 5 - Clock and Time Zone

- Select your timezone

## 6 - Local User

- Skip User Creation

## 7 - Root Password

- Use the password `linux`
- Select Next, select "Yes" to bypass the warning.

## 8 - Installation Overview

- Scroll down and Find the "Security" section.
    - Select to "disable" the Firewall.
- Select "Install".
- Wait a few minutes for the installation to complete.

<!---
Continue Here
- Need to adjust instructions for adding Bridged Adapter, so the machine can reach the outside world.
   - network Settings
   - bridged adapter
- Need to make instructions continue on with 
- rename VM to something like "vm1-snowball".
-->