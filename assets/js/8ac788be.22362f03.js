"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[135],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2,title:"User Management"},i="Configure User Management",m={unversionedId:"linux-acts/mc-fun/mc-manual/user-mgm",id:"linux-acts/mc-fun/mc-manual/user-mgm",title:"User Management",description:"Configure a non-root user, to limit access to the machine. This user will provide access to the minecraft related directories and files, without giving full root access to the server.",source:"@site/docs/linux-acts/mc-fun/mc-manual/user-mgm.md",sourceDirName:"linux-acts/mc-fun/mc-manual",slug:"/linux-acts/mc-fun/mc-manual/user-mgm",permalink:"/snowball/docs/linux-acts/mc-fun/mc-manual/user-mgm",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"User Management"},sidebar:"tutorialSidebar",previous:{title:"Virtual Machine",permalink:"/snowball/docs/linux-acts/mc-fun/mc-manual/mc-vm"},next:{title:"Installing Java Packages",permalink:"/snowball/docs/linux-acts/mc-fun/mc-manual/java-pkgs"}},l={},c=[{value:"1. Create a group named <code>game-admins</code>.",id:"1-create-a-group-named-game-admins",level:2},{value:"2. Create a user named <code>minecraft-admin</code> that belongs to the group <code>game-admins</code>.",id:"2-create-a-user-named-minecraft-admin-that-belongs-to-the-group-game-admins",level:2},{value:"3. Create a password for <code>minecraft-admin</code>.",id:"3-create-a-password-for-minecraft-admin",level:2}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-user-management"},"Configure User Management"),(0,r.kt)("p",null,"Configure a non-root user, to limit access to the machine. This user will provide access to the minecraft related directories and files, without giving full root access to the server."),(0,r.kt)("h2",{id:"1-create-a-group-named-game-admins"},"1. Create a group named ",(0,r.kt)("inlineCode",{parentName:"h2"},"game-admins"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null," Expand for Help "),(0,r.kt)("p",null,"Run the following command to create a group named ",(0,r.kt)("inlineCode",{parentName:"p"},"game-admins")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# groupadd game-admins\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"man groupadd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"groupadd --help")," to view additional options.")),(0,r.kt)("h2",{id:"2-create-a-user-named-minecraft-admin-that-belongs-to-the-group-game-admins"},"2. Create a user named ",(0,r.kt)("inlineCode",{parentName:"h2"},"minecraft-admin")," that belongs to the group ",(0,r.kt)("inlineCode",{parentName:"h2"},"game-admins"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null," Expand for Help "),(0,r.kt)("p",null,"Run the following command to create a user named ",(0,r.kt)("inlineCode",{parentName:"p"},"minecraft-admin"),", and simultaneously add it to the group named ",(0,r.kt)("inlineCode",{parentName:"p"},"game-admins"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# useradd -g game-admins minecraft-admin\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"man useradd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useradd --help")," to view additional options.")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To verify that the user ",(0,r.kt)("inlineCode",{parentName:"p"},"minecraft-admin")," belongs to the group ",(0,r.kt)("inlineCode",{parentName:"p"},"game-admins"),", run:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"# id minecraft-admin\n"))),(0,r.kt)("h2",{id:"3-create-a-password-for-minecraft-admin"},"3. Create a password for ",(0,r.kt)("inlineCode",{parentName:"h2"},"minecraft-admin"),"."),(0,r.kt)("details",{markdown:"1"},(0,r.kt)("summary",null,"Expand for Help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# passwd minecraft-admin\n"))),(0,r.kt)("br",null))}u.isMDXComponent=!0}}]);