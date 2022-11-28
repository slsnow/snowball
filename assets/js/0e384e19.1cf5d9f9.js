"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"Learning Linux"},a="Learning Linux",s={unversionedId:"intro",id:"intro",title:"Learning Linux",description:"Welcome to Learning Linux on Snowball.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/snowball/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Learning Linux"},sidebar:"tutorialSidebar",next:{title:"Activity Guide",permalink:"/snowball/docs/category/activity-guide"}},l={},u=[{value:"What is this?",id:"what-is-this",level:2},{value:"What this is NOT",id:"what-this-is-not",level:2},{value:"Who is this for?",id:"who-is-this-for",level:2},{value:"Why Learn Linux?",id:"why-learn-linux",level:2},{value:"Command Line?",id:"command-line",level:2},{value:"OpenSUSE?",id:"opensuse",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"learning-linux"},"Learning Linux"),(0,r.kt)("p",null,"Welcome to Learning Linux on Snowball. "),(0,r.kt)("h2",{id:"what-is-this"},"What is this?"),(0,r.kt)("p",null,"Snowball is a learning resource, designed to guide you through a collection of activities. There are also labs, which are activities to test your knowledge and problem-solving skills."),(0,r.kt)("h2",{id:"what-this-is-not"},"What this is NOT"),(0,r.kt)("p",null,"This is NOT a theory based text-book, video guide, or typical learning course. For recommended resources, see ",(0,r.kt)("a",{parentName:"p",href:"/snowball/docs/linux-topics/ext-refs"},"External Resources"),"."),(0,r.kt)("h2",{id:"who-is-this-for"},"Who is this for?"),(0,r.kt)("p",null,"This is mostly for those that are interested in developing practical Linux skills, specifically for those interested in Linux system administration or technical support."),(0,r.kt)("h2",{id:"why-learn-linux"},"Why Learn Linux?"),(0,r.kt)("p",null,"Most of the world's web servers' are running on a Linux OS. Android, the most used OS on the planet, is Linux based. It's hard to find a company that isn't heavily reliant on Linux devices, and there is also a lot of great Linux software for home use, and self-hosted services.  "),(0,r.kt)("h2",{id:"command-line"},"Command Line?"),(0,r.kt)("p",null,"These guides are mostly CLI focused. Wait, isn't the CLI (command line interface) old, dead, buried, and forgotten? Who needs CLI when we have pretty graphical interfaces. Right?"),(0,r.kt)("p",null,"Wrong! The command line is cool, powerful, and fun \ud83d\ude04"),(0,r.kt)("p",null,"The command line permits you to be an operating system power user, automate tasks quickly, and run your own services. For the uninitiated, it will feel clumsy, but with practice, it will feel as natural as using a touchscreen or mouse."),(0,r.kt)("p",null,"The Linux community has also developed some interesting Desktop software, such as Gnome, Budgie, KDE, and others. These can be fun to use, and are very customizable."),(0,r.kt)("h2",{id:"opensuse"},"OpenSUSE?"),(0,r.kt)("p",null,"The activities and labs are primarily openSUSE based. SUSE software is used by many top companies in varying industries, including: IT Services, Software, Government, Retail, Banking, Higher Education, Health Care, Telecommunication, Automotive, and Aerospace industries. The openSUSE distribution is an RPM based distro, and is free to use. This isn't to say that other Linux distros aren't great as well."))}d.isMDXComponent=!0}}]);