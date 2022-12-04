"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:5,title:"SSH"},s="SSH (Secure Shell)",r={unversionedId:"linux-acts/vm-acts/first-vm/ssh",id:"linux-acts/vm-acts/first-vm/ssh",title:"SSH",description:"SSH (Secure Shell) is a network protocol that allows secure remote access to a computer.",source:"@site/docs/linux-acts/vm-acts/first-vm/ssh.md",sourceDirName:"linux-acts/vm-acts/first-vm",slug:"/linux-acts/vm-acts/first-vm/ssh",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/ssh",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"SSH"},sidebar:"tutorialSidebar",previous:{title:"Networking Basics",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/network"},next:{title:"Commands",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/commands"}},l={},u=[{value:"SSH Activity",id:"ssh-activity",level:2},{value:"1 - Open a Terminal",id:"1---open-a-terminal",level:3},{value:"2 - Test an Initial SSH Connection",id:"2---test-an-initial-ssh-connection",level:3},{value:"3 - Exit SSH",id:"3---exit-ssh",level:3},{value:"4 - SSH Verbose Output",id:"4---ssh-verbose-output",level:3},{value:"5 - SSH Configuration Files",id:"5---ssh-configuration-files",level:3},{value:"6 - Copy SSH Keys",id:"6---copy-ssh-keys",level:3},{value:"A - Generate an SSH Key Pair",id:"a---generate-an-ssh-key-pair",level:4},{value:"C - Copy the <code>id_rsa.pub</code> File to the Remote System",id:"c---copy-the-id_rsapub-file-to-the-remote-system",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ssh-secure-shell"},"SSH (Secure Shell)"),(0,i.kt)("p",null,"SSH (Secure Shell) is a network protocol that allows secure remote access to a computer. "),(0,i.kt)("p",null,"SSH provides a secure channel over an unsecured network in a client-server architecture, allowing data to be exchanged between two networked devices. SSH uses encryption to protect the data transmitted over the network, making it more secure than other protocols such as Telnet. It is commonly used to log in to remote servers, execute commands, and transfer files securely. SSH is also commonly used to securely tunnel other protocols, such as FTP, HTTP, and X11."),(0,i.kt)("h2",{id:"ssh-activity"},"SSH Activity"),(0,i.kt)("p",null,"For this activity, you will use SSH from a terminal on your computer to connect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"vm1-snowball")," system."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'It is assumed that you are using "Windows Terminal", and "Windows Powershell" to run SSH into the system. The instructions will generally apply for a Linux terminal, or pretty much any system that can run an SSH client.')),(0,i.kt)("h3",{id:"1---open-a-terminal"},"1 - Open a Terminal"),(0,i.kt)("p",null,"Download the Windows Terminal: ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/terminal/install"},"Instructions Link")),(0,i.kt)("p",null,"When you open the terminal, open a tab for Windows PowerShell. "),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Additional Info: Windows SSH Clients"),(0,i.kt)("p",null,"PuTTY is a popular SSH client for Windows, but there are several other SSH clients that are available for Windows, and that offer similar or better functionality than PuTTY. Some of the best alternatives to PuTTY include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MobaXterm: MobaXterm is a feature-rich SSH client for Windows that includes many advanced features, such as a built-in X11 server, a built-in SFTP client, and support for multi-tabbed sessions. MobaXterm also includes a range of tools for remote administration, such as a terminal emulator, a remote desktop client, and a network scanner.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"KiTTY: KiTTY is a fork of PuTTY that adds several new features and improvements, such as session saving and reopening, automatic logon, and support for graphical applications (e.g. X11 forwarding). KiTTY is a lightweight and easy-to-use SSH client, and is a good alternative to PuTTY for users who want a more feature-rich SSH client.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SecureCRT: SecureCRT is a commercial SSH client for Windows that offers advanced features and a user-friendly interface. SecureCRT includes support for multiple protocols (e.g. SSH, Telnet, Rlogin), support for multiple session types (e.g. VT100, VT102, VT220), and support for a wide range of authentication methods (e.g. public key, password, keyboard-interactive). SecureCRT is a powerful and reliable SSH client, and is a good alternative to PuTTY for users who need advanced features and professional-grade support.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ZOC Terminal: ZOC Terminal is a commercial SSH client for Windows that offers a range of advanced features, such as support for multiple protocols (e.g. SSH, Telnet, Rlogin), support for multiple window types (e.g"))),(0,i.kt)("p",null,"There are many other options as well. When working from a Windows machine, I prefer to just use the Windows Terminal, combined with WSL, or the builtin Windows SSH Client as described here:\n",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh"},"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh"))),(0,i.kt)("h3",{id:"2---test-an-initial-ssh-connection"},"2 - Test an Initial SSH Connection"),(0,i.kt)("p",null,"Open your terminal, and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," command to connect to the remote system, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user and the IP address. "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The following examples will be using the IP address ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.0.101"),", but you will need to use the IP address identified in the previous activity.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh <user>@<IP ADDRESS>\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh root@192.168.0.101\n")),(0,i.kt)("p",null,"When prompted, enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," password (should be ",(0,i.kt)("inlineCode",{parentName:"p"},"linux"),"). This will authenticate the ssh connection and allow you to access a shell on the remote system. When the ssh connection is established, you can now run commands on the remote system as if you were logged in directly on the remote system."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Additional Info: Benefits of SSH"),(0,i.kt)("p",null,"There are several benefits of using SSH over other remote access methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Security: SSH uses strong encryption to protect the data transmitted over the network. This makes it more secure than other remote access methods, such as Telnet, which transmit data in plain text.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessibility: SSH allows users to access a remote computer from any location with an internet connection. This is useful for remote administration and support, as well as for accessing files and applications on a remote server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scriptability: SSH allows users to automate tasks and execute commands on a remote computer using scripts. This can save time and reduce the risk of errors when performing repetitive tasks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tunneling: SSH allows users to tunnel other protocols, such as FTP and HTTP, through an encrypted SSH connection. This can provide additional security for sensitive data and protect against network sniffing attacks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Compatibility: SSH is supported on a wide range of platforms, including Linux, macOS, Windows, and mobile devices. This makes it a versatile and widely-used tool for remote access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy and Pasting: One benefit of using SSH over some other methods, is the ability to paste text. Unlike a console, where pasting is not supported, SSH allows users to easily paste text from their local clipboard into the remote terminal. This can save time and improve productivity when working with long commands or complex text."))),(0,i.kt)("p",null,"For example, imagine you are working on a remote Linux server and need to edit a configuration file with a long list of options. With a console, you would need to type out the entire list of options manually, which can be time-consuming and error-prone. With SSH, you can simply copy the list of options from your local machine and paste them into the remote terminal. This makes it much faster and easier to edit the configuration file. Additionally, pasting text with SSH is secure, as the text is encrypted during transmission.")),(0,i.kt)("h3",{id:"3---exit-ssh"},"3 - Exit SSH"),(0,i.kt)("p",null,"When you are using the Secure Shell (SSH) protocol to connect to a remote server, you can exit the remote session by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"exit")," command. This command terminates the SSH session and closes the connection to the remote server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"exit\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Usually, if you disconnect from a remote SSH session, while a command or process is running, it will continue to run, as it is being executed on the remote system. In some cases, you may want to run commands and process in the background on the remote system in various ways, or use utilities like ",(0,i.kt)("inlineCode",{parentName:"p"},"screen"),".")),(0,i.kt)("h3",{id:"4---ssh-verbose-output"},"4 - SSH Verbose Output"),(0,i.kt)("p",null,"Trying an SSH login to the remote system again, but this time trying adding the verbose option ",(0,i.kt)("inlineCode",{parentName:"p"},"-v"),". This can be useful for debugging purposes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh -v root@192.168.0.101\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Additional Info: SSH with Verbosity"),(0,i.kt)("p",null,"To enable verbose output, include the ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," option, which will display detailed information about the ssh connection process. You can add increasing levels of verbosity, up to a maximum of three, with the option ",(0,i.kt)("inlineCode",{parentName:"p"},"-vvv"),".")),(0,i.kt)("h3",{id:"5---ssh-configuration-files"},"5 - SSH Configuration Files"),(0,i.kt)("p",null,"When using SSH, there are several configuration files that control the behavior of the SSH client and server. These configuration files contain settings and options that determine how the SSH client and server operate, and can be customized to suit the needs of the user or organization. For this activity, we will be leaving them at their defaults, but you should be aware of these files."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Additional Info: SSH Configuration"),(0,i.kt)("b",null,"Client Side Configuration Files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssh_config"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file is used by the SSH client, and contains settings that apply to all SSH connections made from the client machine. This can specify the default SSH port, the default user to connect as, and other security options. For more info see ",(0,i.kt)("inlineCode",{parentName:"li"},"man ssh_config"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"known_hosts"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file is used by the SSH client to store the public keys of servers that the client has previously connected to. The known_hosts file is typically located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.ssh")," directory on the client machine.")))),(0,i.kt)("b",null,"Server Side Configuration Files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sshd_config"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file is used by the SSH server, and contains settings that apply to the SSH server and control how it operates and manages SSH connections. It can specify which users are allowed to connect to the server, the authentication and encryption methods to allow, the server's listening port, among other things. For more info, see ",(0,i.kt)("inlineCode",{parentName:"li"},"man sshd_config"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorized_keys"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file is used by the SSH server to store the public keys of users who are allowed to connect to the server. The authorized_keys file is typically located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.ssh")," directory of each user's home directory on the server."))))),(0,i.kt)("h3",{id:"6---copy-ssh-keys"},"6 - Copy SSH Keys"),(0,i.kt)("p",null,"For this final step of the activity, you will manually copy an SSH key to the remote system, to secure passwordless SSH."),(0,i.kt)("h4",{id:"a---generate-an-ssh-key-pair"},"A - Generate an SSH Key Pair"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh-keygen\n")),(0,i.kt)("p",null,"When prompted, just hit the ",(0,i.kt)("inlineCode",{parentName:"p"},"enter")," key several times, until finished (this only needs to be done once)."),(0,i.kt)("h4",{id:"c---copy-the-id_rsapub-file-to-the-remote-system"},"C - Copy the ",(0,i.kt)("code",null,"id_rsa.pub")," File to the Remote System"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scp ~/.ssh/id_rsa.pub user@remote.system.com:~/.ssh/authorized_keys\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure that you can now exit, and successfully SSH back into the remote system, without it prompting for a password.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Additional Info: SSH Keys"),(0,i.kt)("p",null,"SSH keys are a type of cryptographic key that is used for authentication in the Secure Shell (SSH) protocol. SSH keys consist of a pair of files: a private key, which is kept on the client machine, and a public key, which is stored on the server. "),(0,i.kt)("p",null,"SSH keys offer several advantages over other authentication methods, such as passwords. SSH keys are more secure than passwords, because they use a form of encryption that is difficult to crack. SSH keys are also more convenient than passwords, because they allow the user to authenticate without having to enter a password."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Using the above method, would overwrite a systems existing authorized_keys files. In a normal scenario, you might not want to do that. This was just used for a quick example. Alternatively, you could append the contents to the existing contents of the file on the remote server.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"From a Linux machine, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen"),", and then the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-copy-id")," command. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-copy-id")," command is an ideal way to copy an SSH key to a remote system."))))}p.isMDXComponent=!0}}]);