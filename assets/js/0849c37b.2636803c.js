"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1309],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:e},u),{},{components:n})):a.createElement(h,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6603:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,title:"Vagrant Setup"},o="Vagrant Setup",l={unversionedId:"linux-acts/2deploy-mc/vm-vagrant/2vagrant-setup",id:"linux-acts/2deploy-mc/vm-vagrant/2vagrant-setup",title:"Vagrant Setup",description:"Future examples will explain how to install vagrant with a Linux/libvirt host. This example is currently only for a Windows/VirtualBox configuration.",source:"@site/docs/linux-acts/2deploy-mc/vm-vagrant/2vagrant-setup.md",sourceDirName:"linux-acts/2deploy-mc/vm-vagrant",slug:"/linux-acts/2deploy-mc/vm-vagrant/2vagrant-setup",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/2vagrant-setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Vagrant Setup"},sidebar:"tutorialSidebar",previous:{title:"What is Vagrant",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/1vagrant-intro"},next:{title:"Minecraft Vagrant: Basic Deployment",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/3vagrant-basic"}},s={},p=[{value:"Install Git Bash",id:"install-git-bash",level:2},{value:"Install Vagrant:",id:"install-vagrant",level:2},{value:"Set up Git Bash in Windows Terminal:",id:"set-up-git-bash-in-windows-terminal",level:2},{value:"Setup the Deployment Directory",id:"setup-the-deployment-directory",level:2}],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vagrant-setup"},"Vagrant Setup"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Future examples will explain how to install vagrant with a Linux/libvirt host. This example is currently only for a Windows/VirtualBox configuration.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Prerequisite: This Activity assumes that you already have done the VM Activity, and have configured Virtualbox on your windows machine successfully.")),(0,r.kt)("h2",{id:"install-git-bash"},"Install Git Bash"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download Git Bash for Windows ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"here")),(0,r.kt)("li",{parentName:"ol"},"Run the installer, and during the installation process, select the components you want to install (by default, Git Bash is selected)."),(0,r.kt)("li",{parentName:"ol"},"Proceed with the installation, and complete it.")),(0,r.kt)("h2",{id:"install-vagrant"},"Install Vagrant:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download Vagrant for Windows ",(0,r.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/vagrant/downloads"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the installer, and follow the instructions to complete the installation.")),(0,r.kt)("h2",{id:"set-up-git-bash-in-windows-terminal"},"Set up Git Bash in Windows Terminal:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Windows Terminal from the Microsoft Store ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/terminal"},"here")," if you haven't already."),(0,r.kt)("li",{parentName:"ol"},"Open Windows Terminal."),(0,r.kt)("li",{parentName:"ol"},"Click on the down arrow next to the tab and select ",(0,r.kt)("inlineCode",{parentName:"li"},"Git Bash"),". ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can set this as the default in settings if you'd like.")))),(0,r.kt)("h2",{id:"setup-the-deployment-directory"},"Setup the Deployment Directory"),(0,r.kt)("p",null,"In the Git Bash Terminal, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir ~/vagrant-minecraft\ncd ~/vagrant-minecraft/\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can run this in a different directory. Just keep in mind that VMs will perform best on an SSD, and you'll want enough disk space available in the give directory. ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When you see the ",(0,r.kt)("inlineCode",{parentName:"p"},"~"),' symbol in CLI directories, that is just referring to the users "home" directory.')))}c.isMDXComponent=!0}}]);