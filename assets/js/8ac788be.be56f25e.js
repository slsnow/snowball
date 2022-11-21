"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,f=u["".concat(l,".").concat(p)]||u[p]||c[p]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,title:"User Management"},o="User Management",m={unversionedId:"linux-acts/mc-fun/mc-manual/user-mgm",id:"linux-acts/mc-fun/mc-manual/user-mgm",title:"User Management",description:"Before starting this activity, take a snapshot of your VM.",source:"@site/docs/linux-acts/mc-fun/mc-manual/user-mgm.md",sourceDirName:"linux-acts/mc-fun/mc-manual",slug:"/linux-acts/mc-fun/mc-manual/user-mgm",permalink:"/snowball/docs/linux-acts/mc-fun/mc-manual/user-mgm",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"User Management"},sidebar:"tutorialSidebar",previous:{title:"Minecraft Manual Build",permalink:"/snowball/docs/linux-acts/mc-fun/mc-manual/"},next:{title:"Installing Java Packages",permalink:"/snowball/docs/linux-acts/mc-fun/mc-manual/java-pkgs"}},l={},d=[{value:"1. Create a group named <code>game-admins</code>.",id:"1-create-a-group-named-game-admins",level:2},{value:"2. Create a user named <code>minecraft-admin</code> that belongs to the group <code>game-admins</code>.",id:"2-create-a-user-named-minecraft-admin-that-belongs-to-the-group-game-admins",level:2},{value:"3. Create a password for <code>minecraft-admin</code>.",id:"3-create-a-password-for-minecraft-admin",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"user-management"},"User Management"),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Before starting this activity, take a snapshot of your VM.")),(0,r.kt)("br",null),"For this activity, we want to create a non-root user, to limit access to the machine. This user will provide access to the minecraft related directories and files, without giving full root access to the server.",(0,r.kt)("h2",{id:"1-create-a-group-named-game-admins"},"1. Create a group named ",(0,r.kt)("inlineCode",{parentName:"h2"},"game-admins"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null," Expand for Help "),(0,r.kt)("p",null,"Run the following command to create a group named ",(0,r.kt)("inlineCode",{parentName:"p"},"game-admins")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# groupadd game-admins\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"man groupadd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"groupadd --help")," to view additional options.")),(0,r.kt)("h2",{id:"2-create-a-user-named-minecraft-admin-that-belongs-to-the-group-game-admins"},"2. Create a user named ",(0,r.kt)("inlineCode",{parentName:"h2"},"minecraft-admin")," that belongs to the group ",(0,r.kt)("inlineCode",{parentName:"h2"},"game-admins"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null," Expand for Help "),(0,r.kt)("p",null,"Run the following command to create a user named ",(0,r.kt)("inlineCode",{parentName:"p"},"minecraft-admin"),", and simultaneously add it to the group named ",(0,r.kt)("inlineCode",{parentName:"p"},"game-admins"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# useradd -g game-admins minecraft-admin\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"man useradd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useradd --help")," to view additional options.")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To verify that the user ",(0,r.kt)("inlineCode",{parentName:"p"},"minecraft-admin")," belongs to the group ",(0,r.kt)("inlineCode",{parentName:"p"},"game-admins"),", run:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"# id minecraft-admin\n"))),(0,r.kt)("h2",{id:"3-create-a-password-for-minecraft-admin"},"3. Create a password for ",(0,r.kt)("inlineCode",{parentName:"h2"},"minecraft-admin"),"."),(0,r.kt)("details",{markdown:"1"},(0,r.kt)("summary",null,"Expand for Help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# passwd minecraft-admin\n"))),(0,r.kt)("br",null))}c.isMDXComponent=!0}}]);