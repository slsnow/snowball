---
sidebar_position: 3
title: "Minecraft Vagrant: Basic Deployment"
---

# Minecraft Vagrant: Basic Deployment

Now we will configure the vagrant file, and run a basic deployment of a Linux Minecraft Server, running in an OpenSUSE Leap 15.4 VM.

## Vagrantfile

### 1. Create the Vagrantfile

In the directory `~/vagrant-minecraft`, run `vim Vagrantfile`, and paste the following contents:

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "opensuse/Leap-15.4.x86_64"
  config.vm.network "private_network", type: "dhcp"
  config.vm.provider :virtualbox do |vb|
    vb.cpus = 2
    vb.memory = 16384
  end

  config.vm.hostname = "minecraft-server"
  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.provision "shell", path: "bootstrap.sh"
end
```

:::danger

This Vagrantfile assumes that you have 2 CPUs and 16G of memory available. Less is okay, and for this example, you shouldn't allocate more than half of your system's total resources. Adjust as needed. 

:::

### 2. Create the provisioning `bootstrap.sh` file.

Vagrantfile can run with separate provisioning script files, or copy files to the system itself during installation. In this case we will create a simple script.

In the directory `~/vagrant-minecraft`, run `vim bootstrap.sh`, and paste the following content:

```bash
zypper patch
ip a
```

### 3. Run the Vagrant Deployment

In the directory `~/vagrant-minecraft`, simply run `vagrant up`.

Assuming everything is configured correctly, Vagrant will automatically install the VM, and patch the server. You will see Vagrant logs during this portion. 

:::note

There can be a number of problems that can come up in this scenario. I tried to leave the network configuration very basic, to avoid problems. If you do run into an issue that can't be resolved, please let me know.

:::

### 4. SSH and Setup Docker Minecraft

#### 1. SSH into the VM

Run: `ssh root@<IPADDRESS>`

**Password**: `vagrant`

- Insert the IPADDRESS in the command above, the output from the Vagrant logs should show you the IP address that was assigned for the VM. 
- By default, `vagrant` is the password for the `root` and `vagrant` users.

#### 2.  Run the following commands to configure and run Minecraft in a Docker Container.

- Create the `game-admins` group
```bash
# groupadd game-admins
```

- Create the user `minecraft-admin` as a member of group `game-admins`.
```bash
# useradd -g game-admins minecraft-admin
```

- Create the directory to store the minecraft server data
```bash
# mkdir -p /opt/docker/appdata/minecraft
```

- Set Directory Ownership
```bash
# chown minecraft-admin:game-admins /opt/docker/appdata/minecraft
```

- Set Directory Permissions
```bash
# chmod 740 /opt/docker/appdata/minecraft
```

- Install `docker` packages
```bash
# zypper install -y docker docker-bash-completion
```

- Start and Enable the docker service.
```bash
# systemctl enable --now docker
```

- Create the docker container, and run it in the background
```bash
# docker run -d --name minecraft -p 25565:25565 -e EULA=TRUE -e UID=1001 -e GID=1001 -v /opt/docker/appdata/minecraft:/data itzg/minecraft-server   
``` 

- Check the docker container's logs
```bash
# docker logs --follow minecraft
```