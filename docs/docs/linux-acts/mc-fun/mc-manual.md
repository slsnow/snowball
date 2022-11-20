---
sidebar_position: 1
title: Minecraft Manual Build
---
# Minecraft: Manual Building a Minecraft Server 

:::caution Warning

Before starting this activity, take a snapshot of the VM.

:::

## Activity Overview: 

- Goal: Build a local minecraft server from scratch. 
- Activity Topics: 
    - Linux User Management
    - Downloading a file
    - File Editing
    - Java - Running a jar file

## Linux User Management
In a real life scenario, you might want to create some users to limit access. You may want to give access to a friend to be able to run certain game server related tasks on the system, but perhaps you don't want to give them full system access.

### 1. Create a group named `game-admins`.

<details>
  <summary> Expand for Help </summary>

Run the following command to create a group named `game-admins`
```
# groupadd game-admins
```
See `man groupadd` and `groupadd --help` to view additional options.

</details>
<br></br>

### 2. Create a user named `minecraft-admin` that belongs to the group `game-admins`.

<details>
  <summary> Expand for Help </summary>

Run the following command to create a user named `minecraft-admin`, and simultaneously add it to the group named `game-admins`.
```
# useradd -g game-admins minecraft-admin
```

See `man useradd` and `useradd --help` to view additional options.

</details>

:::tip

To verify that the user `minecraft-admin` belongs to the group `game-admins`, run:

```
# id minecraft-admin
```

:::


### 3. Create a password for `minecraft-admin`.

<details markdown="1"><summary>Expand for Help</summary>

```
# passwd minecraft-admin
```
</details>
<br></br>


## Installing Java Packages

This activity uses **Minecraft Java Edition**. To be able to run the Java based application, we will need to first install the required packages.

The Java Runtime Environment (JRE) is software that allows applications written in the Java programming language to run. For this activity, the popular open source implementation of Java, openJDK, will be used.

As of writing this guide, the latest version of minecraft is version 1.19.1.

### 1 - Use zypper to identify the latest Java openjdk Packages

<details markdown="1"><summary>Expand for Help</summary>

```
# zypper se java-*-openjdk
```

<!-- TODO
Link to Topic, Package Mangagement in openSUSE.
-->

:::note

As of this writing, the latest package version was the `java-17-openjdk` package.

:::

</details>


### 2 - Use zypper to install the latest Java openjdk Packages 

Install the `java-17-openjdk` package, with its dependencies.

<details markdown="1"><summary>Expand for Help</summary>

```
# zypper in java-17-openjdk
# java --version
```
:::note

The zypper package manager, like other linux package managers, will automatically resolve package dependencies, based on the repositories that are enabled on the system. 

To see more information about the package, you can run `zypper info <package>`.

:::


<!-- TODO
Link to Topic, Package Mangagement in openSUSE.
-->

</details>

## Minecraft Directory and Permissions

We'd like to create a directory to house the minecraft server files. We also want to limit the access that processes and users have to the minecraft server files by configuring the ownership and permissions.

<!-- TODO
Continue Here
Add Instructions about creating a home directory ... oh wait, I don't know, this section is a bit weird
-->

Tasks:
A) Change and login as the `minecraft-admin` user, and verify the password works.
B) Create a directory for the server at the location `/opt/minecraft/` using sudo.
C) Assign ownership to `minecraft-admin:game-admins` using sudo.
D) Change the permissions on `/opt/minecraft` to 740
E) Change the home of the user `minecraft-admin` to `/opt/minecraft/`.
F) Verify another login, the current directory, and permissions.

<details markdown="1"><summary>Expand for Help</summary>

```
# su - minecraft-admin
> su - minecraft-admin
> exit

> sudo mkdir /opt/minecraft/
> sudo chown minecraft-admin:game-admins /opt/minecraft
> sudo chmod 740 /opt/minecraft

> exit
# usermod -d /opt/minecraft/ minecraft-admin

# su - minecraft-admin
> ls -la /opt/minecraft/
> pwd
```

</details>

---

## Download the Minecraft:JAVA Edition Server Files

We need to put the actual server files on the server.
The latest Minecraft:Java Server files are found officially at this url:
https://www.minecraft.net/en-us/download/server
You can right click the hyperlink to get the link address.

```
wget -O minecraft_server.1.19.1.jar https://piston-data.mojang.com/v1/objects/8399e1211e95faa421c1507b322dbeae86d604df/server.jar
```

```
echo "eula=true" > eula.txt
```

---
## Launch Minecraft for the first Time

```
java -Xms1024M -Xmx6144M -jar minecraft_server.1.19.1.jar nogui
```

Go to Client and test logging into the Server

<!-- TODO
Add A section for launching it in Screen.

-->

## Minecraft Systemd Configuration

Create a systemd service file
- `vim /etc/systemd/system/minecraft.service`

Contents
```
[Unit]
Description=Minecraft Server
After=network.target

[Service]
User=minecraft-admin
WorkingDirectory=/opt/minecraft
EnvironmentFile=/etc/sysconfig/minecraft
ExecStart=/usr/bin/java $JAVA_OPTS
Restart=always

[Install]
WantedBy=multi-user.target
```

## Configuration File

Create configuration file "/etc/sysconfig/minecraft" to hold our java settings for launching the server
```
JAVA_OPTS="-Xms1024M -Xmx2048M -jar minecraft_server.1.19.1.jar nogui"
```

## Daemon Reload

After making changes to these settings, you have to run a daemon-reload
- systemctl daemon-reload

## Start | Enable | Status
To start the server run "systemctl start minecraft.service"
To ensure it start on boot run "systemctl enable minecraft.service"
To check the status, "systemctl status minecraft.service"

Need to make sure there is enough memory, can tweek the amount of memory/cpus as needed for stability, and can edit the min and max in the /etc/sysconfig/minecraft file. 

## Logging

Systemd has it's own journal for logging purposes. 
To access these logs run "journalctl". 

You can run "journalctl -f" to follow the logs live. 
You can also run "journalctl -xeu minecraft.service"
    This will take you to the bottom, and only show the minecraft.service entries. This is useful if the service fails to start, or has other errors.

