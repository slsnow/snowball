---
sidebar_position: 4
title: Directories and Permissions
---

# Configure Minecraft Directories and Permissions

Configure a home directory for the minecraft server files, and limit permissions to the `minecraft-admin` user.

## 1. Create the directory /opt/minecraft

```
# mkdir -p /opt/minecraft
```

## 2. Assign the directory ownership to `minecraft-admin:game-admins`

```
# chown minecraft-admin:game-admins /opt/minecraft
```
## 3. Assign the permissiosn `740` to the directory `/opt/minecraft/`

```
# chmod 740 /opt/minecraft
```

## 4. Assign `/opt/minecraft` as the home directory for the user `minecraft-admin`.

```
# usermod -d /opt/minecraft/ minecraft-admin
```

## 5. Verify That all is configured as mentioned above

```
# su - minecraft-admin
> ls -la ./
> pwd
```