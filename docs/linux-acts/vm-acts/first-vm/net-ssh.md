---
sidebar_position: 4
title: Network and SSH
---

# Network and SSH Basics

With the bridged adapter setting, the VM should now have its own Private IP address on your network. In this section of the activity, we will identify the IP address, and use a terminal to open a remote secure shell (SSH) to the VM.

## Network Activity

## 1 - Testing a connection to the outside world

In the VM, run the following command:
```
ping 8.8.8.8
```

If successful, you will see the following output:

![Net-SSH1](/img/vm-acts/net-ssh-1.PNG)

8.8.8.8 is the Primary DNS server for Google DNS. When we run `ping`, it basically sends a request (via ICMP) and waits for a reply. In this case, replies were received.

To interrupt the ping command's process, use the bash shortcut for SIGINT (Signal Interrupt). This can be done by pressing `CTRL+C`.

:::caution

If running ping to 8.8.8.8 is not successful, there is some type of network issue. If you are unable to resolve the issue, ask for help.

:::

## 2 - Determining your IP Address

### The `ip` Command

To determine the IP address that was assigned to this system, we are going to use the `ip` command. This is a useful command, and can be used for gathering details about a system's network configuration. It can also be used as a tool to make network configuration changes as well. 

In the console, run the following command:
```
ip address
```

:::tip

The `ip a` or `ip addr` commands are the short form of the `ip address` command, and work exactly the same. 

:::

:::info

You may see many references to `ifconfig` and `netstat`. These tools and commands are now considered deprecated and have been replaced by the newer `ip` and `ss` commands.  

:::

### The `ip address` output

Let's break down the output of this command.

![Net-SSH2](/img/vm-acts/net-ssh-2.PNG)

- `lo:`
This is referring to the loopback device, which we won't concern ourselves with at this point.

- `eth0:`
In openSUSE 




- `ip a` output explanation
- Terminal on your Desktop Machine
- ssh to the system
    - Warning about firewalld and sshd service


## SSH Activity

<!---
TODO
Split Network and SSH into separate sub activities

--->

<!---
TODO
In a later guide, add instructions for copying public key to a remote host, that way you can 

--->
