---
sidebar_position: 4
title: Networking Basics
---

# Networking Basics

The purpose of this section, is to run through some network related commands, to become familiar with some basic networking concepts.

## Networking Activity

## 1 - Identify Hardware Details for your NIC

To view information about the NIC, you could run the following command:
```
# hwinfo --netcard
```

The `hwinfo` command, as it turns out, is a command to display hardware info. In this example, since the `--netcard` argument was specified, information about the Network Card, or Network Interface Controller, is displayed. This includes information such as the NIC hardware vendor, driver, MAC (HW Address), and more. 

<details>
  <summary>Additional Notes: Local Hardware Components and Concepts</summary>

- Computer Networking: Computers are more useful when they can communicate with other computers. Computer networking is the process by which computers are able to communicate with each other. 

- A <u>L</u>ocal <u>A</u>rea <u>N</u>etwork (LAN) is a computer network that interconnects computers within a limited area, such as your home network.

- Network Adapter: A Network Adapter is a component that connects a computer system to a computer network, and is also called a Network Interface Controller (NIC), among other names.

- <u>M</u>edia <u>A</u>ccess <u>C</u>ontrol Address: A MAC address is a unique identifier assigned to a NIC.

- Switch: A device that connects devices on a computer network, and passes communication (packet switching) between the devices.

- Network Bridge: A network bridge is a virtual switch that funnels the virtual guests through to the physical NIC of the VM host machine. 

</details>

<!--
Add DHCP info above
-->


## 2 - Identify the system's Private IP Address

System's are assigned private IP addresses,  for local (LAN) communication.

To view a system's Private IP address, you can simply run the following command:
```
ip address
```
This output might seem a bit confusing. In the example below, the system's IP address is `192.168.0.101`. 

<details>
  <summary>Additional Notes: <code>ip address</code> output</summary>

Let's break down some of the output values of the command `ip address`.

An Example Output:
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

- `1: lo: ...`
    - This section refers to the loopback interface, or Local Host.
    - This is an interface, that assigns the localhost IP 127.0.0.1, which will loop back to the system itself.
    - The loopback address is useful for debugging tasks.
    - For more information: [Leap 15.4 Networking Docs](https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-network.html#sec-network-addresses-route)

- `2: eth0:...`
    - This is the default device name assigned to the NIC.
        - For now, we won't worry about the rest of the values on that line.
- `link/ether 08:00:27:74:5f:18 ...`
    - This refers to the interface MAC address.
- `altname enp0s3`
    - This is an alternative name for this interface
    - "en" is short for Ethernet
    - "p0" refers to the bus number of the NIC
    - "s3" referes to the slot number. 
- `inet 192.168.0.101/24 ...`
    - inet: This refers to IPv4 (Internet Protocol version 4).
    - `192.168.0.101` is the IP Address that we were looking for.
    - `/24` refers to the subnet mask.
- `inet6 ...`
    - This section refers to the ipv6 address.

</details>

:::tip

The `ip a` or `ip addr` commands are the short form of the `ip address` command, and work exactly the same. 

:::

:::info

You may see many references to `ifconfig` and `netstat`. These tools and commands are now considered deprecated and have been replaced by the newer `ip` and `ss` commands.  

:::

## 3 - Identify the Router

To identify the default router's IP address, run the following command:
```
ip route
```
In the example output below, the router's IP address is `192.168.0.1`.

To test a connection to the router, you could run:
```
ping 192.168.0.1
```

<details>
  <summary>Additional Notes: Router and External Networking</summary>

Example Output:
```
# ip route
default via 192.168.0.1 dev eth0 proto dhcp
192.168.0.0/24 dev eth0 proto kernel scope link src 192.168.0.101
```

The default gateway is for any and all traffic which is not destined for the local network and for which no preferred route is specified in the route table. Traditionally, the default gateway is a dedicated network router.

- Router: A network device that forwards communication (data packets), from one computer network, to other computer networks.

- Firewall: A firewall is a network security device that monitors incoming and outgoing network traffic. After it filters through the traffic, it is able to allow or block communication based on a defined set of security rules. There are also software firewalls, that can run locally as well.

- WAN: A <u>W</u>ide <u>A</u>rea <u>N</u>etwork (WAN) is a computer network that interconnects computer networks that extend over large geographical areas. The internet, is an example of a Wide Area Network. 

- Layer Models: [Doc Link](https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-network.html#fig-net-basic-OSI)

![netbasic osi](/img/vm-acts/net_basic_osi.png)

</details>

## 4 - Ensure the Local Firewall is Disabled

The OS openSUSE Leap 15.4, and other current Linux distros, come with the local firewall service called `firewalld`. 
To check run:

```
systemctl status firewalld
```

If the status is showing as active, stop and disable it by running:
```
systemctl disable --now firewalld
```

:::info

Processes, Services, and systemd will be addressed in later activities.

:::


## 5 - Testing Connections

### The `ping` Command

The `ping` command is a simple connection tool, to test sending a receiving packets via ICMP. This is a simple and well known command, but has it's limitations as well. More details about other network connection tools will be discussed in future activities.

### A - Test the Connection to the Router

First, let's ping the address for the router IP address we identified in step 3.

For example:
```
# ping 192.168.0.1
PING 192.168.0.1 (192.168.0.1) 56(84) bytes of data.
64 bytes from 192.168.0.1: icmp_seq=1 ttl=64 time=1.42 ms
64 bytes from 192.168.0.1: icmp_seq=2 ttl=64 time=1.59 ms
64 bytes from 192.168.0.1: icmp_seq=3 ttl=64 time=1.80 ms
^C
```

:::tip

In the example, replies were received. To interrupt the ping command's process, use the bash shortcut for SIGINT (Signal Interrupt). This can be done by pressing `CTRL+C`.

:::

### B - Test an External Connection

The IP address `8.8.8.8` is one of the public IP addresses that belong to Google DNS. Try to `ping` it:

```
# ping 8.8.8.8
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=60 time=20.9 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=60 time=15.6 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=60 time=17.1 ms
^C
```

In the example, replies were received. Interrupt as was done above.

:::caution

If you cannot successfully ping the router or 8.8.8.8, there is some network configuration issue. If that's the case, please ask for help.

:::

## 6 - Identify the Configured DNS Servers

The Domain Name System (DNS), is a naming system to assign names to IP addresses. Like contacts in a phone, it's a lot easier to remember a name rather than a number. DNS servers keep track of what IPs belong to which hostname. 

The DNS servers should have been configured automatically for you on this VM. You can check this by running
```
cat /etc/resolv
```
See the IP address(es) after `nameserver` in that file.

## 7 - Test a connection to `dns.google.com`

```
ping dns.google.com
PING dns.google.com (8.8.8.8) 56(84) bytes of data.
64 bytes from dns.google (8.8.8.8): icmp_seq=1 ttl=60 time=19.1 ms
64 bytes from dns.google (8.8.8.8): icmp_seq=2 ttl=60 time=16.0 ms
64 bytes from dns.google (8.8.8.8): icmp_seq=3 ttl=60 time=16.2 ms
```

The `dig` or `nslookup` commands are useful for checking DNS lookup.

```
# dig +short dns.google.com
8.8.8.8
8.8.4.4
```
As you can see, the DNS lookup for `dns.google.com` is returning with 2 separate public addresses (8.8.8.8 and 8.8.4.4).