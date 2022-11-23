---
sidebar_position: 6
title: Download Server Files

---

# Download the Minecraft JAVA Edition Server Files

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