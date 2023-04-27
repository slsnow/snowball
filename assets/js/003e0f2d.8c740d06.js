"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"What is Vagrant"},i="Vagrant Setup",l={unversionedId:"linux-acts/2deploy-mc/vm-vagrant/1vagrant-intro",id:"linux-acts/2deploy-mc/vm-vagrant/1vagrant-intro",title:"What is Vagrant",description:"In this activity, we are going to automate VM deployments using a tool called Vagrant.",source:"@site/docs/linux-acts/2deploy-mc/vm-vagrant/1vagrant-intro.md",sourceDirName:"linux-acts/2deploy-mc/vm-vagrant",slug:"/linux-acts/2deploy-mc/vm-vagrant/1vagrant-intro",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/1vagrant-intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"What is Vagrant"},sidebar:"tutorialSidebar",previous:{title:"Vagrant Deployment",permalink:"/snowball/docs/category/vagrant-deployment"},next:{title:"Vagrant Setup",permalink:"/snowball/docs/linux-acts/2deploy-mc/vm-vagrant/2vagrant-setup"}},s={},c=[{value:"What is Vagrant?",id:"what-is-vagrant",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"How to configure and use Vagrant?",id:"how-to-configure-and-use-vagrant",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vagrant-setup"},"Vagrant Setup"),(0,r.kt)("p",null,"In this activity, we are going to automate VM deployments using a tool called Vagrant."),(0,r.kt)("h2",{id:"what-is-vagrant"},"What is Vagrant?"),(0,r.kt)("p",null,"Vagrant is an open-source software product developed by HashiCorp for building and managing virtual machine (VM) environments in a single workflow. It facilitates the process of setting up and configuring VM environments, ensuring that users have a consistent and reproducible environment across different platforms. "),(0,r.kt)("p",null,"Vagrant is able to use various virtualization providers, such as: VirtualBox, VMware, AWS, and others. Vagrant is primarily used by developers, operations engineers, and designers to create and manage portable and easy-to-reproduce development environments. Hashicorp also makes an infrastructure product called Terraform, that is used for deployments as well, but includes support across public cloud providers."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,'Vagrant relies on a configuration file called Vagrantfile to define the desired VM environment, including the base VM image (called a "box"), the virtualization provider (e.g., VirtualBox, VMware, AWS), and any provisioning scripts or tools (e.g., Shell scripts, Ansible, Puppet) to configure the VM after it\'s created.'),(0,r.kt)("p",null,"The basic steps of a Vagrant deployment are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Read the Vagrantfile to determine the VM configuration."),(0,r.kt)("li",{parentName:"ol"},"Download the specified base VM image (box) if it's not already available locally."),(0,r.kt)("li",{parentName:"ol"},"Create a new VM using the selected virtualization provider with the specified settings (e.g., memory, CPU, network)."),(0,r.kt)("li",{parentName:"ol"},"Run any provisioning scripts or tools to configure the VM according to the Vagrantfile."),(0,r.kt)("li",{parentName:"ol"},"Manage the lifecycle of the VM, including starting, stopping, suspending, resuming, and destroying it.")),(0,r.kt)("h2",{id:"how-to-configure-and-use-vagrant"},"How to configure and use Vagrant?"),(0,r.kt)("p",null,"In this activity, the vagrant files, and instructions will be provided for you. Vagrant will also be used to deploy lab activities."),(0,r.kt)("p",null,"The Vagrantfile configuration, and networking configurations, can be a little confusing at first. It can be very powerful, and help you save a lot of time. To see an example of a more complex Vagrant Configuration, refer to the following project: "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZeTopHat/suse-vagrant-labs"},"SUSE Vagrant Labs"),"."))}p.isMDXComponent=!0}}]);