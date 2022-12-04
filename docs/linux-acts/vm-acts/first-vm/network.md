---
sidebar_position: 4
title: Networking Basics
---

# Networking Basics

## Identification Activities

During this activity, you will be introduced to a number of basic networking commands that are available on most modern Linux systems. These commands are tools that can be used to display information about the network configuration of the system, including the IP address, and other settings. As a result of this activity, you will be prepared to use SSH login.

### 1 - Display Information About the System's Network Devices

To identify information about the system's network devices, you could run the following command:
```
# hwinfo --netcard
```
<details>
  <summary>Additional Info: <code>hwinfo</code></summary>

The `hwinfo --netcard` command is used to display information about the network devices on a system. This command is part of the `hwinfo` utility, which provides detailed information about the hardware components of the system.

When run with the `--netcard` option, `hwinfo` will display a list of the network devices on the system, including their type, model, and specifications.

The output also includes the driver and modules used by the device, as well as the hardware address (MAC address) and other configuration details.

Overall, the `hwinfo --netcard` command is a useful tool for displaying detailed information about the network devices on a system. It can provide valuable information for diagnosing and troubleshooting network issues on the system.

</details>

<!--
TODO

Add a link to the hwinfo command, and man page
-->

<br></br>

### 2 - Identify the system's IP Address

To view a system's IP address, you can run the following command:
```
ip address
```

<details>
  <summary>Additional Info: The <code>ip address</code> Output</summary>


<br></br>

The output of the `ip address` command will display a list of the network interfaces and their IP address, if any are found. For example, the output might look like this:

```bash
# ip address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 08:00:27:74:5f:18 brd ff:ff:ff:ff:ff:ff
    altname enp0s3
    inet 192.168.0.101/24 brd 192.168.0.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::a00:27ff:fe74:5f18/64 scope link
       valid_lft forever preferred_lft forever

```
In the above example, the first interface, the `lo` network interface, is the loopback IP address. With an address of `127.0.0.1`, this is a special IP address used to enable communication between the network stack on the system, and the localhost. In other words, this address is available for the system to communicate with itself. This can be useful for debugging and other tasks.

In the above example, the second interface, the `eth0` network interface, has an IP address of `192.168.0.101`. This is the IP address that is assigned to the network interface `eth0`, and is used to identify the device on the network.

In the output, `inet` refers to IPv4, wheras `inet6` refers to IPv6.

:::tip

You may see many references to another networking tool named `ifconfig`. This tool is now considered deprecated and has been replaced by the newer `ip` command, which is part of the `iprout2` utility. The `iproute2` suite of tools, and provides a wide range of functionality for managing and configuring network devices on the system.  

:::

:::tip

The `ip a` or `ip addr` commands are the short form of the `ip address` command, and work exactly the same. 

:::
</details>

<br></br>

### 3 - Identify the IP Address of the Router

To identify the router, you can use the `ip` command again to display the default route for the system:
```
ip route show default
```

<details>
  <summary>Additional Info: The Router</summary>

```
# ip route show default
default via 192.168.0.1 dev eth0 proto dhcp
```
The command will display the default route for the system, along with the IP address of the next hop on the route. This IP address will typically be the IP address of the router on the network. In the example above, the IP address of the router is `192.168.0.1`.

</details>

<br></br>

### 4 - Identify the Configured DNS Servers

To identify the DNS servers assigned to a Linux machine, you can use the `cat` command to view the contents of the "/etc/resolv.conf" file, which contains the DNS server information.

```
cat /etc/resolv.conf
```

<details>
  <summary>Additional Info: DNS</summary>

This will display the DNS server information in the following format:

```
nameserver DNS_SERVER_IP_ADDRESS
```

For example:

```
cat /etc/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4
```

A DNS (Domain Name System) server is a server that maps domain names (e.g. example.com) to their corresponding IP addresses (e.g. 1.1.1.1). This allows users to access websites and other network resources using domain names instead of IP addresses. This makes it easier for users to access websites and other network resources, because they do not need to remember the IP addresses of these resources.

:::tip

The "/etc/hosts" file is a simple text file that maps IP addresses to hostnames. This file is used by the operating system to resolve hostnames to IP addresses, without the need for a DNS server. This is useful in situations where the DNS server is not available or not functioning properly, or when you want to test a new hostname without modifying the DNS records.

:::

</details>

<br></br>

### 5 - Test Name Resolution for `google.com`

```
dig +short google.com
```

<details>
  <summary>Additional Info: DNS Query Testing</summary>

The `dig` or `nslookup` commands can be used to query the DNS server for a given IP address. In this case, for `google.com`. It will then display the response. 

Adding the `+short` option to dig, provide just the result for the IP address. The longer output will display information about the DNS server that was able to resolve the hostname.

</details>

<br></br>

### 6 - Ensure the <code>firewalld</code> Service is Disabled

To disable the firewalld server, run the following:
```
systemctl disable --now firewalld
```

<details>
  <summary>Additional Info: Firewalld</summary>

Firewalld is a firewall management service that is used on modern Linux systems to control network traffic and protect the system from external threats. Firewalld allows administrators to configure firewall rules that specify which network traffic should be allowed or blocked on the system. These rules can be used to secure the system and protect it from malicious traffic, such as network attacks or unauthorized access attempts. 

For the purposes of this lab, you will be disabling the service.

</details>

<br></br>

## Simple Connection Testing With `ping`

### The `ping` Command

The `ping` command sends an ICMP echo request packet to the specified IP address, and waits for a response from the destination. If the destination responds to the `ping`, it indicates that the Linux system is able to communicate with the specified IP address. The `ping` is useful, but has limitations as well.

### A - `ping` localhost (IPv4)

To specify to use IPv4, you can add a `-4` option to the ping command. 

For example:

```
ping -4 localhost
PING  (127.0.0.1) 56(84) bytes of data.
64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.212 ms
64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.022 ms
64 bytes from localhost (127.0.0.1): icmp_seq=3 ttl=64 time=0.022 ms
```
:::tip

In the example above, the replies were received. To interrupt the ping command's process, use the bash shortcut for SIGINT (Signal Interrupt). This can be done by pressing `CTRL+C`.

:::

### B - `ping` the Router

`ping` the address for the router IP address we identified in step 3.

For example:
```
# ping 192.168.0.1
PING 192.168.0.1 (192.168.0.1) 56(84) bytes of data.
64 bytes from 192.168.0.1: icmp_seq=1 ttl=64 time=1.42 ms
64 bytes from 192.168.0.1: icmp_seq=2 ttl=64 time=1.59 ms
64 bytes from 192.168.0.1: icmp_seq=3 ttl=64 time=1.80 ms
^C
```

### C - `ping` Google DNS

The IP address `8.8.8.8` is one of the public IP addresses that belong to Google DNS. Try to `ping` it:

```
# ping 8.8.8.8
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=60 time=20.9 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=60 time=15.6 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=60 time=17.1 ms
^C
```

:::caution

If you cannot successfully ping the router, your DNS, or  or 8.8.8.8, there is some network configuration issue. If that's the case, please ask for help.

:::