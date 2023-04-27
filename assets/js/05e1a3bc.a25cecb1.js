"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3527],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>O,contentTitle:()=>T,default:()=>C,frontMatter:()=>x,metadata:()=>I,toc:()=>E});var n=a(7462),r=a(7294),o=a(3905),l=a(6010),i=a(2466),u=a(6550),s=a(1980),c=a(7392),p=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:a,groupId:n}),[c,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=u??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),d(e)}),[s,d,o]),tabValues:o}}var k=a(2389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(p(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function V(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}const M="tabItem_Ymn6";function S(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(M,n),hidden:a},t)}const x={sidebar_position:2,title:"VM Configuration"},T="Virtual Machine Configuration Walkthrough",I={unversionedId:"linux-acts/1vm/vm-config",id:"linux-acts/1vm/vm-config",title:"VM Configuration",description:"The purpose of this section of the activity, is to guide you through the VirtualBox configuration, in preparation for the OS installation.",source:"@site/docs/linux-acts/1vm/vm-config.md",sourceDirName:"linux-acts/1vm",slug:"/linux-acts/1vm/vm-config",permalink:"/snowball/docs/linux-acts/1vm/vm-config",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"VM Configuration"},sidebar:"tutorialSidebar",previous:{title:"Activity Overview",permalink:"/snowball/docs/linux-acts/1vm/intro"},next:{title:"OS Installation",permalink:"/snowball/docs/linux-acts/1vm/os-install"}},O={},E=[{value:"Setting up a Virtual Machine Manager",id:"setting-up-a-virtual-machine-manager",level:2},{value:"Virtual Machine Management Tools",id:"virtual-machine-management-tools",level:3},{value:"Virtual Machine Configuration Walkthrough",id:"virtual-machine-configuration-walkthrough-1",level:2},{value:"1 - Installing VirtualBox",id:"1---installing-virtualbox",level:3},{value:"2 - Downloading an ISO",id:"2---downloading-an-iso",level:3},{value:"3 - Configuring a VM for Installation",id:"3---configuring-a-vm-for-installation",level:3},{value:"4 - Network Adapter Settings",id:"4---network-adapter-settings",level:3},{value:"5 - Startup and View",id:"5---startup-and-view",level:3}],D={toc:E};function C(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"virtual-machine-configuration-walkthrough"},"Virtual Machine Configuration Walkthrough"),(0,o.kt)("p",null,"The purpose of this section of the activity, is to guide you through the VirtualBox configuration, in preparation for the OS installation."),(0,o.kt)("h2",{id:"setting-up-a-virtual-machine-manager"},"Setting up a Virtual Machine Manager"),(0,o.kt)("p",null,"Before we can run a Linux VM, we need to choose a system to host it. Keep in mind that your options will be limited by your host OS, your hardware, and whether you want to use a free or paid service."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Since Windows is still the most popular Desktop Operating System, this activity will assume that you are running Windows. The activity will also assume Oracle VirtualBox as your VM Host Manager. If you want to use a different VM Host Manager, that's fine. Just ask if you have any questions.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you have any virtualization or hardware problems, they can be specific for your system. Please ask if you have any issues.")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"virtual-machine-management-tools"},"Virtual Machine Management Tools"),(0,o.kt)("p",null,"There are many good Virtual Machine Management tools out there. Here are some of the options you could use."),(0,o.kt)(V,{defaultValue:"vb",values:[{label:"VirtualBox",value:"vb"},{label:"VMware",value:"vmw"},{label:"KVM",value:"kvm"},{label:"AWS",value:"aws"},{label:"Proxmox",value:"pmox"}],mdxType:"Tabs"},(0,o.kt)(S,{value:"vb",mdxType:"TabItem"},"Oracle Virtual Box is a great option if you will be using a Windows machine as your host. It is free and relatively easy to use. Despite being free, it has a lot of good features."),(0,o.kt)(S,{value:"vmw",mdxType:"TabItem"},"VMWare, provides software for VM Management, that is the industry standard for virtualization. However, some of their free offerings, such as VMware Player, can be a little limiting (even with a personal use license). If you are running macOS, VMWare Fusion is a good free option."),(0,o.kt)(S,{value:"kvm",mdxType:"TabItem"},'I would recommend this option if you have a separate machine from your normal desktop computer. You would want to install a Linux distro on this machine, and ideally have 16 GB or more RAM. KVM (Kernel-based Virtual Machine), is software built into the Linux kernel, that manages CPU and Memory for Virtual Machines. QEMU is a technology that emulates VM hardware components. The libvirtd service, and virsh CLI tool, are common tools for Virtual Machine Management. Additionally, the Virtual Machine Manager is a graphical tool, which also has remote support. This means you can control the Virtual Machines from a different machine. For access via a web interface, there are tools like the "cockpit" project. These opensource technolgies, are commonly used in enterprise settings.'),(0,o.kt)(S,{value:"pmox",mdxType:"TabItem"},"Proxmox VE, is a very useful open-source Virtual Machine Management Platform. It uses many of the same technologies mentioned in the KVM section. However, it doesn't get much enterprise use at this point, although that may change."),(0,o.kt)(S,{value:"aws",mdxType:"TabItem"},"AWS (Amazon Web Services) is a popular public cloud provider for Virtual Machines. There are some good free options, depending on your monthly use, and a free 12-month trial. If you'd like to get experience with AWS, this is a good option.")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This might seem confusing at first. If you're not sure which option to choose,please ask.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"virtual-machine-configuration-walkthrough-1"},"Virtual Machine Configuration Walkthrough"),(0,o.kt)("h3",{id:"1---installing-virtualbox"},"1 - Installing VirtualBox"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In a web-browser, navigate to "',(0,o.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads%22"},'https://www.virtualbox.org/wiki/Downloads"'),"."),(0,o.kt)("li",{parentName:"ul"},'Under "latest release platform packages", select the "Windows hosts" download link.'),(0,o.kt)("li",{parentName:"ul"},"After the download has completed, Launch the Installer, and follow the instructions"),(0,o.kt)("li",{parentName:"ul"},'When the installation completes, open the "VirtualBox Manager" application.')),(0,o.kt)("h3",{id:"2---downloading-an-iso"},"2 - Downloading an ISO"),(0,o.kt)("p",null,"Before we can configure a Virtual Machine, we are going to need the openSUSE Leap 15.4 ISO file. The Network ISO can be downloaded here: ",(0,o.kt)("a",{parentName:"p",href:"https://get.opensuse.org/leap/15.4/"},"Link")),(0,o.kt)("h3",{id:"3---configuring-a-vm-for-installation"},"3 - Configuring a VM for Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Select the "New" button'),(0,o.kt)("li",{parentName:"ul"},'In the Bottom of the "Create Virtual Machine" prompt, toggle to "Expert Mode".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VB Setup 1",src:a(7583).Z,width:"831",height:"691"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure the VM with the following parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"vm1-snowball")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Machine Folder"),(0,o.kt)("td",{parentName:"tr",align:null},"Keep Default or specify a directory. VMs will generally perform better on an SSD rather than an HDD.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Version"),(0,o.kt)("td",{parentName:"tr",align:null},"openSUSE (64-bit)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory Size"),(0,o.kt)("td",{parentName:"tr",align:null},"1024 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hard Disk"),(0,o.kt)("td",{parentName:"tr",align:null},"Create a virtual hard disk now")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Select "Create", and continue on to the next prompt window.')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"File Location"),(0,o.kt)("td",{parentName:"tr",align:null},"Default (Or specify a directory). VMs will generally perform better on an SSD rather than an HDD.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"File Size"),(0,o.kt)("td",{parentName:"tr",align:null},"8.00 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hard disk file type"),(0,o.kt)("td",{parentName:"tr",align:null},"VDI (VirtualBox Disk Image)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage on physical hard disk"),(0,o.kt)("td",{parentName:"tr",align:null},"Fixed Size")))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"These minimal CPU, RAM, and Disk Space parameters will work fine for the purposes of this activity.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Select "Create" create the disk, and continue.')),(0,o.kt)("h3",{id:"4---network-adapter-settings"},"4 - Network Adapter Settings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The new VM should be created, but powered off. "),(0,o.kt)("li",{parentName:"ul"},'In the Oracle VM VirtualBox Manger, right click the "vm1-snowball" VM, and select "Settings".'),(0,o.kt)("li",{parentName:"ul"},'Select the "Network" Tab.'),(0,o.kt)("li",{parentName:"ul"},'Configure Adapter 1 to be "Attached to: Bridged Adapter".',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Select "OK"')))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VB Network",src:a(5055).Z,width:"1191",height:"543"})),(0,o.kt)("h3",{id:"5---startup-and-view"},"5 - Startup and View"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start the VM.")),(0,o.kt)("p",null,"A new window will appear. This is the window where you'll control the VM console."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VB Network",src:a(4151).Z,width:"636",height:"474"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In the "Select start-up disk" prompt, point to the openSUSE Leap 15.4 Network ISO file that was downloaded in step 2 above.'),(0,o.kt)("li",{parentName:"ul"},'Select "Start".'),(0,o.kt)("li",{parentName:"ul"},'When the initial page loads, press the down arrow on your keyboard, before the installer defaults to "Boot from Hard Disk".'),(0,o.kt)("li",{parentName:"ul"},"At this point, you may want to adjust the window scaling, or other options.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Generally, a VM has to be shutdown to apply any hardware changes.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your mouse and keyboard is captured within the VM, use Right-Ctrl to escape back out to your normal desktop."),(0,o.kt)("p",{parentName:"admonition"},"For more tips, see the VirtualBox User Manual, or google for any VirtualBox related questions.\n",(0,o.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/manual/ch01.html#intro-starting"},"https://www.virtualbox.org/manual/ch01.html#intro-starting"))))}C.isMDXComponent=!0},7583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vb-config-1-8c0f68ff3f581f79438b3f2b6271bdfa.PNG"},4151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vb-config-2-91cb2bc6fbcf2c31a7fc1a0df4049f2b.PNG"},5055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vb-network-a1a2b97677e55f4e24df118f71a075cc.PNG"}}]);