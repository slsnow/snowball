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