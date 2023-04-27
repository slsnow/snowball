---
sidebar_position: 4
title: "Minecraft Vagrant: Full Deployment"
---

# Minecraft Vagrant: Full Deployement

The beautiful thing about vagrant, is we can configure it to run all of that setup for us, just by adding those commands to the `bootstrap.sh`. This is essentially bash scripting. We will now destroy the previous VM, and deploy the entire thing.

## Destroy the previous VM

- Exit back to the host machine
- In the directory `~/vagrant-minecraft`, run `vagrant destroy`, and select `y` to destroy the machine.

## Update the bootstrap.sh file to run the full deployment

- In the directory `~/vagrant-minecraft`, run `vim bootstrap.sh`, and update it with the following contents:
```
groupadd game-admins
useradd -g game-admins minecraft-admin
mkdir -p /opt/docker/appdata/minecraft
chown minecraft-admin:game-admins /opt/docker/appdata/minecraft
chmod 740 /opt/docker/appdata/minecraft
zypper patch -y
zypper install -y docker docker-bash-completion
systemctl enable --now docker
docker run -d --name minecraft -p 25565:25565 -e EULA=TRUE -e UID=1001 -e GID=1001 -v /opt/docker/appdata/minecraft:/data itzg/minecraft-server
ip a 
```

Then run `vagrant up`, and watch the logs as it builds. After it finishes, SSH in and test if you'd like.