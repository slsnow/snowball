"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Minecraft Vagrant: Basic Deployment"},o="Minecraft Vagrant: Basic Deployment",l={unversionedId:"linux-acts/2deploy-mc/vm-vagrant/3vagrant-basic",id:"linux-acts/2deploy-mc/vm-vagrant/3vagrant-basic",title:"Minecraft Vagrant: Basic Deployment",description:"Now we will configure the vagrant file, and run a basic deployment of a Linux Minecraft Server, running in an OpenSUSE Leap 15.4 VM.",source:"@site/docs/linux-acts/2deploy-mc/vm-vagrant/3vagrant-basic.md",sourceDirName:"linux-acts/2deploy-mc/vm-vagrant",slug:"/linux-acts/2deploy-mc/vm-vagrant/3vagrant-basic",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/3vagrant-basic",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Minecraft Vagrant: Basic Deployment"},sidebar:"tutorialSidebar",previous:{title:"Vagrant Setup",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/2vagrant-setup"},next:{title:"Minecraft Vagrant: Full Deployment",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/4vagrant-full"}},s={},c=[{value:"Vagrantfile",id:"vagrantfile",level:2},{value:"1. Create the Vagrantfile",id:"1-create-the-vagrantfile",level:3},{value:"2. Create the provisioning <code>bootstrap.sh</code> file.",id:"2-create-the-provisioning-bootstrapsh-file",level:3},{value:"3. Run the Vagrant Deployment",id:"3-run-the-vagrant-deployment",level:3},{value:"4. SSH and Setup Docker Minecraft",id:"4-ssh-and-setup-docker-minecraft",level:3},{value:"1. SSH into the VM",id:"1-ssh-into-the-vm",level:4},{value:"2.  Run the following commands to configure and run Minecraft in a Docker Container.",id:"2--run-the-following-commands-to-configure-and-run-minecraft-in-a-docker-container",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-vagrant-basic-deployment"},"Minecraft Vagrant: Basic Deployment"),(0,r.kt)("p",null,"Now we will configure the vagrant file, and run a basic deployment of a Linux Minecraft Server, running in an OpenSUSE Leap 15.4 VM."),(0,r.kt)("h2",{id:"vagrantfile"},"Vagrantfile"),(0,r.kt)("h3",{id:"1-create-the-vagrantfile"},"1. Create the Vagrantfile"),(0,r.kt)("p",null,"In the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"~/vagrant-minecraft"),", run ",(0,r.kt)("inlineCode",{parentName:"p"},"vim Vagrantfile"),", and paste the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\nVagrant.configure("2") do |config|\n  config.vm.box = "opensuse/Leap-15.4.x86_64"\n  config.vm.network "private_network", type: "dhcp"\n  config.vm.provider :virtualbox do |vb|\n    vb.cpus = 2\n    vb.memory = 16384\n  end\n\n  config.vm.hostname = "minecraft-server"\n  config.vm.synced_folder ".", "/vagrant", disabled: true\n  config.vm.provision "shell", path: "bootstrap.sh"\nend\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This Vagrantfile assumes that you have 2 CPUs and 16G of memory available. Less is okay, and for this example, you shouldn't allocate more than half of your system's total resources. Adjust as needed. ")),(0,r.kt)("h3",{id:"2-create-the-provisioning-bootstrapsh-file"},"2. Create the provisioning ",(0,r.kt)("inlineCode",{parentName:"h3"},"bootstrap.sh")," file."),(0,r.kt)("p",null,"Vagrantfile can run with separate provisioning script files, or copy files to the system itself during installation. In this case we will create a simple script."),(0,r.kt)("p",null,"In the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"~/vagrant-minecraft"),", run ",(0,r.kt)("inlineCode",{parentName:"p"},"vim bootstrap.sh"),", and paste the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zypper patch\nip a\n")),(0,r.kt)("h3",{id:"3-run-the-vagrant-deployment"},"3. Run the Vagrant Deployment"),(0,r.kt)("p",null,"In the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"~/vagrant-minecraft"),", simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant up"),"."),(0,r.kt)("p",null,"Assuming everything is configured correctly, Vagrant will automatically install the VM, and patch the server. You will see Vagrant logs during this portion. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There can be a number of problems that can come up in this scenario. I tried to leave the network configuration very basic, to avoid problems. If you do run into an issue that can't be resolved, please let me know.")),(0,r.kt)("h3",{id:"4-ssh-and-setup-docker-minecraft"},"4. SSH and Setup Docker Minecraft"),(0,r.kt)("h4",{id:"1-ssh-into-the-vm"},"1. SSH into the VM"),(0,r.kt)("p",null,"Run: ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh root@<IPADDRESS>")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Password"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert the IPADDRESS in the command above, the output from the Vagrant logs should show you the IP address that was assigned for the VM. "),(0,r.kt)("li",{parentName:"ul"},"By default, ",(0,r.kt)("inlineCode",{parentName:"li"},"vagrant")," is the password for the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"vagrant")," users.")),(0,r.kt)("h4",{id:"2--run-the-following-commands-to-configure-and-run-minecraft-in-a-docker-container"},"2.  Run the following commands to configure and run Minecraft in a Docker Container."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the ",(0,r.kt)("inlineCode",{parentName:"li"},"game-admins")," group")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# groupadd game-admins\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the user ",(0,r.kt)("inlineCode",{parentName:"li"},"minecraft-admin")," as a member of group ",(0,r.kt)("inlineCode",{parentName:"li"},"game-admins"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# useradd -g game-admins minecraft-admin\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the directory to store the minecraft server data")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# mkdir -p /opt/docker/appdata/minecraft\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set Directory Ownership")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# chown minecraft-admin:game-admins /opt/docker/appdata/minecraft\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set Directory Permissions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# chmod 740 /opt/docker/appdata/minecraft\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"docker")," packages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# zypper install -y docker docker-bash-completion\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start and Enable the docker service.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# systemctl enable --now docker\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the docker container, and run it in the background")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# docker run -d --name minecraft -p 25565:25565 -e EULA=TRUE -e UID=1001 -e GID=1001 -v /opt/docker/appdata/minecraft:/data itzg/minecraft-server   \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check the docker container's logs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# docker logs --follow minecraft\n")))}u.isMDXComponent=!0}}]);