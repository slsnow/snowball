"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[335],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>M,frontMatter:()=>k,metadata:()=>b,toc:()=>y});var n=a(7462),r=a(7294),l=a(3905),o=a(6010),i=a(2389),s=a(7392),u=a(7094),p=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:i,values:d,groupId:h,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,u.U)(),[N,M]=(0,r.useState)(b),V=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&M(e)}const S=e=>{const t=e.currentTarget,a=V.indexOf(t),n=k[a].value;n!==N&&(x(t),M(n),null!=h&&y(h,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=V.indexOf(e.currentTarget)+1;a=V[t]??V[0];break}case"ArrowLeft":{const t=V.indexOf(e.currentTarget)-1;a=V[t]??V[V.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>V.push(e),onKeyDown:T,onClick:S},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,n),hidden:a},t)}const k={sidebar_position:2,title:"VM Configuration"},v="Virtual Machine Configuration Walkthrough",b={unversionedId:"linux-acts/vm-acts/first-vm/vm-config",id:"linux-acts/vm-acts/first-vm/vm-config",title:"VM Configuration",description:"Setting up a Virtual Machine Manager",source:"@site/docs/linux-acts/vm-acts/first-vm/vm-config.md",sourceDirName:"linux-acts/vm-acts/first-vm",slug:"/linux-acts/vm-acts/first-vm/vm-config",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/vm-config",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"VM Configuration"},sidebar:"tutorialSidebar",previous:{title:"Activity Overview",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/intro"},next:{title:"OS Installation",permalink:"/snowball/docs/linux-acts/vm-acts/first-vm/os-install"}},w={},y=[{value:"Setting up a Virtual Machine Manager",id:"setting-up-a-virtual-machine-manager",level:2},{value:"Virtual Machine Management Tools",id:"virtual-machine-management-tools",level:3},{value:"Virtual Machine Configuration Walkthrough",id:"virtual-machine-configuration-walkthrough-1",level:2},{value:"1 - Installing VirtualBox",id:"1---installing-virtualbox",level:3},{value:"2 - Downloading an ISO",id:"2---downloading-an-iso",level:3},{value:"3 - Configuring a VM for Installation",id:"3---configuring-a-vm-for-installation",level:3},{value:"4 - Network Adapter Settings",id:"4---network-adapter-settings",level:3},{value:"5 - Startup and View",id:"5---startup-and-view",level:3}],N={toc:y};function M(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"virtual-machine-configuration-walkthrough"},"Virtual Machine Configuration Walkthrough"),(0,l.kt)("h2",{id:"setting-up-a-virtual-machine-manager"},"Setting up a Virtual Machine Manager"),(0,l.kt)("p",null,"Before we can run a virtual machine, we need to choose a system to host it. Keep in mind that your options will be limited by your host OS, your hardware, and whether you want to use a free or paid service."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Since Windows is still the most popular Desktop Operating System, this activity will assume that you are running Windows. The activity will also assume Oracle VirtualBox as your VM Host Manager. If you want to use a different VM Host Manager, that's fine. Just ask if you have any questions.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If you have any virtualization or hardware problems, they can be specific for your system. Please ask if you have any issues.")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"virtual-machine-management-tools"},"Virtual Machine Management Tools"),(0,l.kt)("p",null,"There are many good Virtual Machine Management tools out there. Here are some of the options you could use."),(0,l.kt)(h,{defaultValue:"vb",values:[{label:"VirtualBox",value:"vb"},{label:"VMware",value:"vmw"},{label:"KVM",value:"kvm"},{label:"AWS",value:"aws"},{label:"Proxmox",value:"pmox"}],mdxType:"Tabs"},(0,l.kt)(g,{value:"vb",mdxType:"TabItem"},"Oracle Virtual Box is a great option if you will be using a Windows machine as your host. It is free and relatively easy to use. Despite being free, it has a lot of good features."),(0,l.kt)(g,{value:"vmw",mdxType:"TabItem"},"VMWare, provides software for VM Management, that is the industry standard for virtualization. However, some of their free offerings, such as VMware Player, can be a little limiting (even with a personal use license). If you are running macOS, VMWare Fusion is a good free option."),(0,l.kt)(g,{value:"kvm",mdxType:"TabItem"},'I would recommend this option if you have a separate machine from your normal desktop computer. You would want to install a Linux distro on this machine, and ideally have 16 GB or more RAM. KVM (Kernel-based Virtual Machine), is software built into the Linux kernel, that manages CPU and Memory for Virtual Machines. QEMU is a technology that emulates VM hardware components. The libvirtd service, and virsh CLI tool, are common tools for Virtual Machine Management. Additionally, the Virtual Machine Manager is a graphical tool, which also has remote support. This means you can control the Virtual Machines from a different machine. For access via a web interface, there are tools like the "cockpit" project. These opensource technolgies, are commonly used in enterprise settings.'),(0,l.kt)(g,{value:"pmox",mdxType:"TabItem"},"Proxmox VE, is a very useful open-source Virtual Machine Management Platform. It uses many of the same technologies mentioned in the KVM section. However, it doesn't get much enterprise use at this point, although that may change."),(0,l.kt)(g,{value:"aws",mdxType:"TabItem"},"AWS (Amazon Web Services) is a popular public cloud provider for Virtual Machines. There are some good free options, depending on your monthly use, and a free 12-month trial. If you'd like to get experience with AWS, this is a good option.")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This might seem confusing at first. If you're not sure which option to choose,please ask.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"virtual-machine-configuration-walkthrough-1"},"Virtual Machine Configuration Walkthrough"),(0,l.kt)("h3",{id:"1---installing-virtualbox"},"1 - Installing VirtualBox"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In a web-browser, navigate to "',(0,l.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads%22"},'https://www.virtualbox.org/wiki/Downloads"'),"."),(0,l.kt)("li",{parentName:"ul"},'Under "latest release platform packages", select the "Windows hosts" download link.'),(0,l.kt)("li",{parentName:"ul"},"After the download has completed, Launch the Installer, and follow the instructions"),(0,l.kt)("li",{parentName:"ul"},'When the installation completes, open the "VirtualBox Manager" application.')),(0,l.kt)("h3",{id:"2---downloading-an-iso"},"2 - Downloading an ISO"),(0,l.kt)("p",null,"Before we can configure a Virtual Machine, we are going to need the openSUSE Leap 15.4 ISO file. The Network ISO can be downloaded here: ",(0,l.kt)("a",{parentName:"p",href:"https://get.opensuse.org/leap/15.4/"},"Link")),(0,l.kt)("h3",{id:"3---configuring-a-vm-for-installation"},"3 - Configuring a VM for Installation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select the "New" button'),(0,l.kt)("li",{parentName:"ul"},'In the Bottom of the "Create Virtual Machine" prompt, toggle to "Expert Mode".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"VB Setup 1",src:a(7583).Z,width:"831",height:"691"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure the VM with the following parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Item"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"vm1-snowball")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Machine Folder"),(0,l.kt)("td",{parentName:"tr",align:null},"Keep Default or specify a directory. VMs will generally perform better on an SSD rather than an HDD.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Linux")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version"),(0,l.kt)("td",{parentName:"tr",align:null},"openSUSE (64-bit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory Size"),(0,l.kt)("td",{parentName:"tr",align:null},"1024 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hard Disk"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a virtual hard disk now")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select "Create", and continue on to the next prompt window.')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Item"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File Location"),(0,l.kt)("td",{parentName:"tr",align:null},"Default (Or specify a directory). VMs will generally perform better on an SSD rather than an HDD.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File Size"),(0,l.kt)("td",{parentName:"tr",align:null},"8.00 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hard disk file type"),(0,l.kt)("td",{parentName:"tr",align:null},"VDI (VirtualBox Disk Image)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage on physical hard disk"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed Size")))),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"These minimal CPU, RAM, and Disk Space parameters will work fine for the purposes of this activity.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select "Create" create the disk, and continue.')),(0,l.kt)("h3",{id:"4---network-adapter-settings"},"4 - Network Adapter Settings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The new VM should be created, but powered off. "),(0,l.kt)("li",{parentName:"ul"},'In the Oracle VM VirtualBox Manger, right click the "vm1-snowball" VM, and select "Settings".'),(0,l.kt)("li",{parentName:"ul"},'Select the "Network" Tab.'),(0,l.kt)("li",{parentName:"ul"},'Configure Adapter 1 to be "Attached to: Bridged Adapter".',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Select "OK"')))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"VB Network",src:a(5055).Z,width:"1191",height:"543"})),(0,l.kt)("h3",{id:"5---startup-and-view"},"5 - Startup and View"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start the VM.")),(0,l.kt)("p",null,"A new window will appear. This is the window where you'll control the VM console."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"VB Network",src:a(4151).Z,width:"636",height:"474"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In the "Select start-up disk" prompt, point to the openSUSE Leap 15.4 Network ISO file that was downloaded in step 2 above.'),(0,l.kt)("li",{parentName:"ul"},'Select "Start".'),(0,l.kt)("li",{parentName:"ul"},'When the initial page loads, press the down arrow on your keyboard, before the installer defaults to "Boot from Hard Disk".'),(0,l.kt)("li",{parentName:"ul"},"At this point, you may want to adjust the window scaling, or other options.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Generally, a VM has to be shutdown to apply any hardware changes.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If your mouse and keyboard is captured within the VM, use Right-Ctrl to escape back out to your normal desktop."),(0,l.kt)("p",{parentName:"admonition"},"For more tips, see the VirtualBox User Manual, or google for any VirtualBox related questions.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/manual/ch01.html#intro-starting"},"https://www.virtualbox.org/manual/ch01.html#intro-starting"))))}M.isMDXComponent=!0},7583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vb-config-1-8c0f68ff3f581f79438b3f2b6271bdfa.PNG"},4151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vb-config-2-91cb2bc6fbcf2c31a7fc1a0df4049f2b.PNG"},5055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vb-network-a1a2b97677e55f4e24df118f71a075cc.PNG"}}]);