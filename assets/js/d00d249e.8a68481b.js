"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,title:"Network and SSH"},o="Network and SSH Basics",s={unversionedId:"linux-acts/vm-acts/first-vm/net-ssh",id:"linux-acts/vm-acts/first-vm/net-ssh",title:"Network and SSH",description:"With the bridged adapter setting, the VM should now have its own Private IP address on your network. In this section of the activity, we will identify the IP address, and use a terminal to open a remote secure shell (SSH) to the VM.",source:"@site/docs/linux-acts/vm-acts/first-vm/net-ssh.md",sourceDirName:"linux-acts/vm-acts/first-vm",slug:"/linux-acts/vm-acts/first-vm/net-ssh",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/net-ssh",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Network and SSH"},sidebar:"tutorialSidebar",previous:{title:"OS Installation",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/os-install"},next:{title:"Minecraft Fun",permalink:"/snowball/docs/category/minecraft-fun"}},l={},d=[{value:"Network Activity",id:"network-activity",level:2},{value:"1 - Testing a connection to the outside world",id:"1---testing-a-connection-to-the-outside-world",level:2},{value:"2 - Determining your IP Address",id:"2---determining-your-ip-address",level:2},{value:"The <code>ip</code> Command",id:"the-ip-command",level:3},{value:"The <code>ip address</code> output",id:"the-ip-address-output",level:3},{value:"SSH Activity",id:"ssh-activity",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network-and-ssh-basics"},"Network and SSH Basics"),(0,r.kt)("p",null,"With the bridged adapter setting, the VM should now have its own Private IP address on your network. In this section of the activity, we will identify the IP address, and use a terminal to open a remote secure shell (SSH) to the VM."),(0,r.kt)("h2",{id:"network-activity"},"Network Activity"),(0,r.kt)("h2",{id:"1---testing-a-connection-to-the-outside-world"},"1 - Testing a connection to the outside world"),(0,r.kt)("p",null,"In the VM, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ping 8.8.8.8\n")),(0,r.kt)("p",null,"If successful, you will see the following output:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Net-SSH1",src:n(7935).Z,width:"784",height:"196"})),(0,r.kt)("p",null,"8.8.8.8 is the Primary DNS server for Google DNS. When we run ",(0,r.kt)("inlineCode",{parentName:"p"},"ping"),", it basically sends a request (via ICMP) and waits for a reply. In this case, replies were received."),(0,r.kt)("p",null,"To interrupt the ping command's process, use the bash shortcut for SIGINT (Signal Interrupt). This can be done by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL+C"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If running ping to 8.8.8.8 is not successful, there is some type of network issue. If you are unable to resolve the issue, ask for help.")),(0,r.kt)("h2",{id:"2---determining-your-ip-address"},"2 - Determining your IP Address"),(0,r.kt)("h3",{id:"the-ip-command"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"ip")," Command"),(0,r.kt)("p",null,"To determine the IP address that was assigned to this system, we are going to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," command. This is a useful command, and can be used for gathering details about a system's network configuration. It can also be used as a tool to make network configuration changes as well. "),(0,r.kt)("p",null,"In the console, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ip address\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ip a")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ip addr")," commands are the short form of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ip address")," command, and work exactly the same. ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You may see many references to ",(0,r.kt)("inlineCode",{parentName:"p"},"ifconfig")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"netstat"),". These tools and commands are now considered deprecated and have been replaced by the newer ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ss")," commands.  ")),(0,r.kt)("h3",{id:"the-ip-address-output"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"ip address")," output"),(0,r.kt)("p",null,"Let's break down the output of this command."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Net-SSH2",src:n(9186).Z,width:"1399",height:"419"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"lo:"),"\nThis is referring to the loopback device, which we won't concern ourselves with at this point.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"eth0:"),"\nIn openSUSE "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ip a")," output explanation"),(0,r.kt)("li",{parentName:"ul"},"Terminal on your Desktop Machine"),(0,r.kt)("li",{parentName:"ul"},"ssh to the system",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Warning about firewalld and sshd service")))),(0,r.kt)("h2",{id:"ssh-activity"},"SSH Activity"))}p.isMDXComponent=!0},7935:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/net-ssh-1-cc25e077d1628edcc11e19556c16bb07.PNG"},9186:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/net-ssh-2-3509c5e158b7289ea5450bf989111389.PNG"}}]);