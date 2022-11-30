---
sidebar_position: 6
title: Launch the Mincraft Server

---

# Launch Minecraft the Minecraft Server

## 1 - Change to the minecraft user

```
su - minecraft-admin
```

## 2 - Start a Screen Session

<details>
  <summary>Additional Notes: Screen</summary>

Screen, in progress.


</details>

<!---
TODO

Add Screen content explanation here

-->

```
screen -S minecraft-screen
```

## 3 - Launch the Minecraft Server

```
java -Xms1024M -Xmx4096M -jar minecraft_server.1.19.1.jar nogui
```

## 4 - Test if the client can connect to the Server
Go to Client and test logging into the Server

<!-- TODO
Add images for client connections and more details.

-->

<!-- TODO

Add a minecraft Systemd and packages configuration activity

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
--->