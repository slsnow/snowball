"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[574],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>M,frontMatter:()=>b,metadata:()=>w,toc:()=>k});var n=a(7462),r=a(7294),i=a(3905),o=a(6010),l=a(2389),s=a(7392),u=a(7094),c=a(2466);const p="tabList__CuJ",h="tabItem_LNqP";function d(e){var t;const{lazy:a,block:i,defaultValue:l,values:d,groupId:m,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===l?l:l??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,u.U)(),[x,M]=(0,r.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:V}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==x&&b.some((t=>t.value===e))&&M(e)}const O=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==x&&(V(t),M(n),null!=m&&k(m,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:O},i,{className:(0,o.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function v(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,n),hidden:a},t)}const b={sidebar_position:1,title:"Getting Started"},y="Introduction to Virtual Machines",w={unversionedId:"linux-acts/first-vm/intro",id:"linux-acts/first-vm/intro",title:"Getting Started",description:"For this activity, we will be installing our first Virtual Machine. The VM will be for activity and lab purposes, and will be an openSUSE Leap 15.4 machine.",source:"@site/docs/linux-acts/first-vm/intro.md",sourceDirName:"linux-acts/first-vm",slug:"/linux-acts/first-vm/intro",permalink:"/snowball/docs/linux-acts/first-vm/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Virtual Machines",permalink:"/snowball/docs/category/virtual-machines"},next:{title:"Minecraft Fun",permalink:"/snowball/docs/category/minecraft-fun"}},g={},k=[{value:"Why install a Virtual Machine?",id:"why-install-a-virtual-machine",level:2},{value:"Setting up a Virtual Machine Manager",id:"setting-up-a-virtual-machine-manager",level:2}],x={toc:k};function M(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-virtual-machines"},"Introduction to Virtual Machines"),(0,i.kt)("p",null,"For this activity, we will be installing our first Virtual Machine. The VM will be for activity and lab purposes, and will be an openSUSE Leap 15.4 machine."),(0,i.kt)("h2",{id:"why-install-a-virtual-machine"},"Why install a Virtual Machine?"),(0,i.kt)("p",null,"There are many reasons to run a virtual machine. In this case, the activities and labs require a openSUSE OS. Even if you already had a bare metal system that boots openSUSE at your house, it's still ideal to have a VM, for snapshots, and many other reasons. You will see some of these reasons yourself throughout the activities. "),(0,i.kt)("p",null,"If you are interested in learning more about the Virtual Machines, how they work, and their benefits, see the links in the Reference Guide:\n",(0,i.kt)("a",{parentName:"p",href:"https://slsnow.github.io/snowball/docs/linux-topics/ext-refs#virtual-machines"},"External References Page: Virtual Machines")),(0,i.kt)("h2",{id:"setting-up-a-virtual-machine-manager"},"Setting up a Virtual Machine Manager"),(0,i.kt)("p",null,"Before we can run a virtual machine, we need to choose a system to host it. Keep in mind that your options will be limited by your hardware as well, as your virtual machine will share hardware resources with its host."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Virtual Machines can require a lot of hardware resources. If you have hardware related questions, let me know, as these questions can be varied.")),(0,i.kt)(m,{defaultValue:"vb",values:[{label:"VirtualBox",value:"vb"},{label:"KVM",value:"kvm"},{label:"VMware",value:"vmw"},{label:"AWS",value:"aws"}],mdxType:"Tabs"},(0,i.kt)(v,{value:"vb",mdxType:"TabItem"},"Oracle Virtual Box is a great option if you will be using a Windows machine as your host. It is free and relatively easy to setup.",(0,i.kt)("p",null,"  Download The Virtual Box Software"),(0,i.kt)("p",null,'  1) Navigate to "',(0,i.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads%22"},'https://www.virtualbox.org/wiki/Downloads"')),(0,i.kt)("p",null,'  2) Under latest release platform packages, select the "Windows hosts" download link. '),(0,i.kt)("p",null,"  3) Follow the installation instructions. "),(0,i.kt)("p",null,'  4) If the installation completes, open the "VirtualBox Manager" application.')),(0,i.kt)(v,{value:"kvm",mdxType:"TabItem"},"KVM (Kernel Virtual Machine), is a great option if you already have a linux host setup. I prefer to run a linux host machine, with KVM libvirt. You can run the Virtual Machine Manager, remotely. You can also use the cockpit WebUI. For now, ask if you have questions about this option."),(0,i.kt)(v,{value:"vmw",mdxType:"TabItem"},"VMware is the industry standard for enterprise on premise virtual machine management. There are good free options if you want to go thise route. Generally, users like to install a separate ESXI server for hosting the Virtual Machines, and not just running it on your desktop machine. If you are running MacOS, VMWare Fusion is a good option."),(0,i.kt)(v,{value:"aws",mdxType:"TabItem"},"AWS (Amazon Web Services) is a popular public cloud provider for Virtual Machines. There are some good free options, depending on your monthly use, and a free 12 month trial.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're not sure which option to choose, please ask.")))}M.isMDXComponent=!0}}]);