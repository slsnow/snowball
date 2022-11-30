---
sidebar_position: 6
title: Download Server Files

---

# Download the Minecraft JAVA Edition Server Files

We need to put the actual server files on the server. The latest Minecraft:Java Server files are found here: [Official link](https://www.minecraft.net/en-us/download/server).

## 1 - Download the Files using the `wget` Command

```
wget -O /opt/minecraft/minecraft_server.1.19.1.jar https://piston-data.mojang.com/v1/objects/8399e1211e95faa421c1507b322dbeae86d604df/server.jar
```

## 2 - Create EULA File

To accept the End User Licence Agreement, run this command:
```
echo "eula=true" > /opt/minecraft/eula.txt
```

[EULA Link](https://www.minecraft.net/en-us/eula)

:::note

This is just writing a file, that the server file will check to ensure you have accepted the license.

:::