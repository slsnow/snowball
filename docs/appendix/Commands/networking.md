# Networking


In progress...

- Computer Networking: Computers are more useful when they can communicate with other computers. Computer networking is the process by which computers are able to communicate with each other. 

- A <u>L</u>ocal <u>A</u>rea <u>N</u>etwork (LAN) is a computer network that interconnects computers within a limited area, such as your home network.

- Network Adapter: A Network Adapter is a component that connects a computer system to a computer network, and is also called a Network Interface Controller (NIC), among other names.

- <u>M</u>edia <u>A</u>ccess <u>C</u>ontrol Address: A MAC address is a unique identifier assigned to a NIC.

- Switch: A device that connects devices on a computer network, and passes communication (packet switching) between the devices.

- Network Bridge: A network bridge is a virtual switch that funnels the virtual guests through to the physical NIC of the VM host machine. 

- DHCP


more details


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


    
The default gateway is for any and all traffic which is not destined for the local network and for which no preferred route is specified in the route table. Traditionally, the default gateway is a dedicated network router.

- Router: A network device that forwards communication (data packets), from one computer network, to other computer networks.

- Firewall: A firewall is a network security device that monitors incoming and outgoing network traffic. After it filters through the traffic, it is able to allow or block communication based on a defined set of security rules. There are also software firewalls, that can run locally as well.

- WAN: A <u>W</u>ide <u>A</u>rea <u>N</u>etwork (WAN) is a computer network that interconnects computer networks that extend over large geographical areas. The internet, is an example of a Wide Area Network. 

- Layer Models: [Doc Link](https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-network.html#fig-net-basic-OSI)

![netbasic osi](/img/vm-acts/net_basic_osi.png)
