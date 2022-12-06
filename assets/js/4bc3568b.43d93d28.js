"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[807],{3905:(e,l,i)=>{i.d(l,{Zo:()=>v,kt:()=>h});var t=i(7294);function a(e,l,i){return l in e?Object.defineProperty(e,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[l]=i,e}function d(e,l){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),i.push.apply(i,t)}return i}function n(e){for(var l=1;l<arguments.length;l++){var i=null!=arguments[l]?arguments[l]:{};l%2?d(Object(i),!0).forEach((function(l){a(e,l,i[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(i,l))}))}return e}function s(e,l){if(null==e)return{};var i,t,a=function(e,l){if(null==e)return{};var i,t,a={},d=Object.keys(e);for(t=0;t<d.length;t++)i=d[t],l.indexOf(i)>=0||(a[i]=e[i]);return a}(e,l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)i=d[t],l.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=t.createContext({}),r=function(e){var l=t.useContext(o),i=l;return e&&(i="function"==typeof e?e(l):n(n({},l),e)),i},v=function(e){var l=r(e.components);return t.createElement(o.Provider,{value:l},e.children)},u={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},m=t.forwardRef((function(e,l){var i=e.components,a=e.mdxType,d=e.originalType,o=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),m=r(i),h=a,c=m["".concat(o,".").concat(h)]||m[h]||u[h]||d;return i?t.createElement(c,n(n({ref:l},v),{},{components:i})):t.createElement(c,n({ref:l},v))}));function h(e,l){var i=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var d=i.length,n=new Array(d);n[0]=m;var s={};for(var o in l)hasOwnProperty.call(l,o)&&(s[o]=l[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var r=2;r<d;r++)n[r]=i[r];return t.createElement.apply(null,n)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},335:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>r});var t=i(7462),a=(i(7294),i(3905));const d={sidebar_position:2,title:"Basic Commands"},n=void 0,s={unversionedId:"linux-topics/Commands/common-commands",id:"linux-topics/Commands/common-commands",title:"Basic Commands",description:"In progress...",source:"@site/docs/linux-topics/Commands/common-commands.md",sourceDirName:"linux-topics/Commands",slug:"/linux-topics/Commands/common-commands",permalink:"/snowball/docs/linux-topics/Commands/common-commands",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Basic Commands"},sidebar:"tutorialSidebar",previous:{title:"Navigation Commands",permalink:"/snowball/docs/linux-topics/Commands/nav-commands"},next:{title:"Networking",permalink:"/snowball/docs/linux-topics/Commands/networking"}},o={},r=[{value:"Networking",id:"networking",level:2},{value:"curl",id:"curl",level:3},{value:"dig",id:"dig",level:3},{value:"wget",id:"wget",level:3},{value:"hostname",id:"hostname",level:3},{value:"hostnamectl",id:"hostnamectl",level:3},{value:"ifconfig",id:"ifconfig",level:3},{value:"ip",id:"ip",level:3},{value:"netstat",id:"netstat",level:3},{value:"netcat",id:"netcat",level:3},{value:"nslookup",id:"nslookup",level:3},{value:"ping",id:"ping",level:3},{value:"wget",id:"wget-1",level:3},{value:"Process",id:"process",level:2},{value:"bg",id:"bg",level:3},{value:"clear",id:"clear",level:3},{value:"fg",id:"fg",level:3},{value:"kill",id:"kill",level:3},{value:"killall",id:"killall",level:3},{value:"lsof",id:"lsof",level:3},{value:"nice",id:"nice",level:3},{value:"nohup",id:"nohup",level:3},{value:"pkill",id:"pkill",level:3},{value:"pmap",id:"pmap",level:3},{value:"ps",id:"ps",level:3},{value:"pstree",id:"pstree",level:3},{value:"renice",id:"renice",level:3},{value:"top",id:"top",level:3},{value:"trap",id:"trap",level:3},{value:"wait",id:"wait",level:3},{value:"File Commands",id:"file-commands",level:2},{value:"awk",id:"awk",level:3},{value:"cp",id:"cp",level:3},{value:"cut",id:"cut",level:3},{value:"diff",id:"diff",level:3},{value:"gpg",id:"gpg",level:3},{value:"head",id:"head",level:3},{value:"less",id:"less",level:3},{value:"ln",id:"ln",level:3},{value:"ls",id:"ls",level:3},{value:"mkdir",id:"mkdir",level:3},{value:"more",id:"more",level:3},{value:"mv",id:"mv",level:3},{value:"pwd",id:"pwd",level:3},{value:"rm",id:"rm",level:3},{value:"shred",id:"shred",level:3},{value:"sudo",id:"sudo",level:3},{value:"tail",id:"tail",level:3},{value:"touch",id:"touch",level:3},{value:"wc",id:"wc",level:3},{value:"User Management",id:"user-management",level:2},{value:"adduser",id:"adduser",level:3},{value:"chgrp",id:"chgrp",level:3},{value:"id",id:"id",level:3},{value:"last",id:"last",level:3},{value:"passwd",id:"passwd",level:3},{value:"userdel",id:"userdel",level:3},{value:"usermod",id:"usermod",level:3},{value:"w",id:"w",level:3},{value:"who",id:"who",level:3},{value:"Hardware",id:"hardware",level:2},{value:"badblocks",id:"badblocks",level:3},{value:"dmesg",id:"dmesg",level:3},{value:"dmidecode",id:"dmidecode",level:3},{value:"free",id:"free",level:3},{value:"hdparm",id:"hdparm",level:3},{value:"lsblk",id:"lsblk",level:3},{value:"lshw",id:"lshw",level:3},{value:"lspci",id:"lspci",level:3},{value:"lsusb",id:"lsusb",level:3},{value:"File Compression",id:"file-compression",level:2},{value:"gzip",id:"gzip",level:3},{value:"tar",id:"tar",level:3},{value:"zip",id:"zip",level:3},{value:"Package Management",id:"package-management",level:2},{value:"Searching",id:"searching",level:2},{value:"find",id:"find",level:3},{value:"grep",id:"grep",level:3},{value:"locate",id:"locate",level:3},{value:"System Management",id:"system-management",level:2},{value:"cat",id:"cat",level:3},{value:"date",id:"date",level:3},{value:"finger",id:"finger",level:3},{value:"hostname",id:"hostname-1",level:3},{value:"last",id:"last-1",level:3},{value:"modprobe",id:"modprobe",level:3},{value:"reboot",id:"reboot",level:3},{value:"shutdown",id:"shutdown",level:3},{value:"timedatectl",id:"timedatectl",level:3},{value:"ulimit",id:"ulimit",level:3},{value:"uname",id:"uname",level:3},{value:"uptime",id:"uptime",level:3},{value:"File Permission Management",id:"file-permission-management",level:2},{value:"chmod",id:"chmod",level:3},{value:"chown",id:"chown",level:3},{value:"Remote",id:"remote",level:2},{value:"ssh",id:"ssh",level:3},{value:"scp",id:"scp",level:3},{value:"lftp",id:"lftp",level:3},{value:"rsync",id:"rsync",level:3},{value:"Environment",id:"environment",level:2},{value:"declare",id:"declare",level:3},{value:"echo",id:"echo",level:3},{value:"eport",id:"eport",level:3},{value:"let",id:"let",level:3},{value:"set",id:"set",level:3},{value:"Disk Usage",id:"disk-usage",level:2},{value:"fdisk",id:"fdisk",level:3},{value:"df",id:"df",level:3},{value:"du",id:"du",level:3},{value:"findmnt",id:"findmnt",level:3},{value:"mount",id:"mount",level:3},{value:"umount",id:"umount",level:3},{value:"LVM",id:"lvm",level:2},{value:"Shell",id:"shell",level:2},{value:"alias",id:"alias",level:3},{value:"at",id:"at",level:3},{value:"history",id:"history",level:3},{value:"jobs",id:"jobs",level:3},{value:"man",id:"man",level:3},{value:"sleep",id:"sleep",level:3},{value:"unalias",id:"unalias",level:3},{value:"watch",id:"watch",level:3},{value:"!",id:"",level:3},{value:"?",id:"-1",level:3},{value:"Shortcut Keys",id:"shortcut-keys",level:2},{value:"Editing",id:"editing",level:2},{value:"String manipulation",id:"string-manipulation",level:2},{value:"Searching",id:"searching-1",level:2},{value:"Process Management",id:"process-management",level:2}],v={toc:r};function u(e){let{components:l,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},v,i,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In progress..."),(0,a.kt)("h1",{id:"common-commands"},"Common Commands"),(0,a.kt)("h2",{id:"networking"},"Networking"),(0,a.kt)("h3",{id:"curl"},"curl"),(0,a.kt)("h3",{id:"dig"},"dig"),(0,a.kt)("h3",{id:"wget"},"wget"),(0,a.kt)("h3",{id:"hostname"},"hostname"),(0,a.kt)("h3",{id:"hostnamectl"},"hostnamectl"),(0,a.kt)("h3",{id:"ifconfig"},"ifconfig"),(0,a.kt)("h3",{id:"ip"},"ip"),(0,a.kt)("h3",{id:"netstat"},"netstat"),(0,a.kt)("h3",{id:"netcat"},"netcat"),(0,a.kt)("h3",{id:"nslookup"},"nslookup"),(0,a.kt)("h3",{id:"ping"},"ping"),(0,a.kt)("h3",{id:"wget-1"},"wget"),(0,a.kt)("h2",{id:"process"},"Process"),(0,a.kt)("h3",{id:"bg"},"bg"),(0,a.kt)("h3",{id:"clear"},"clear"),(0,a.kt)("h3",{id:"fg"},"fg"),(0,a.kt)("h3",{id:"kill"},"kill"),(0,a.kt)("h3",{id:"killall"},"killall"),(0,a.kt)("h3",{id:"lsof"},"lsof"),(0,a.kt)("h3",{id:"nice"},"nice"),(0,a.kt)("h3",{id:"nohup"},"nohup"),(0,a.kt)("h3",{id:"pkill"},"pkill"),(0,a.kt)("h3",{id:"pmap"},"pmap"),(0,a.kt)("h3",{id:"ps"},"ps"),(0,a.kt)("h3",{id:"pstree"},"pstree"),(0,a.kt)("h3",{id:"renice"},"renice"),(0,a.kt)("h3",{id:"top"},"top"),(0,a.kt)("h3",{id:"trap"},"trap"),(0,a.kt)("h3",{id:"wait"},"wait"),(0,a.kt)("h2",{id:"file-commands"},"File Commands"),(0,a.kt)("h3",{id:"awk"},"awk"),(0,a.kt)("h3",{id:"cp"},"cp"),(0,a.kt)("h3",{id:"cut"},"cut"),(0,a.kt)("h3",{id:"diff"},"diff"),(0,a.kt)("h3",{id:"gpg"},"gpg"),(0,a.kt)("h3",{id:"head"},"head"),(0,a.kt)("h3",{id:"less"},"less"),(0,a.kt)("h3",{id:"ln"},"ln"),(0,a.kt)("h3",{id:"ls"},"ls"),(0,a.kt)("h3",{id:"mkdir"},"mkdir"),(0,a.kt)("h3",{id:"more"},"more"),(0,a.kt)("h3",{id:"mv"},"mv"),(0,a.kt)("h3",{id:"pwd"},"pwd"),(0,a.kt)("h3",{id:"rm"},"rm"),(0,a.kt)("h3",{id:"shred"},"shred"),(0,a.kt)("h3",{id:"sudo"},"sudo"),(0,a.kt)("h3",{id:"tail"},"tail"),(0,a.kt)("h3",{id:"touch"},"touch"),(0,a.kt)("h3",{id:"wc"},"wc"),(0,a.kt)("h2",{id:"user-management"},"User Management"),(0,a.kt)("h3",{id:"adduser"},"adduser"),(0,a.kt)("h3",{id:"chgrp"},"chgrp"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("h3",{id:"last"},"last"),(0,a.kt)("h3",{id:"passwd"},"passwd"),(0,a.kt)("h3",{id:"userdel"},"userdel"),(0,a.kt)("h3",{id:"usermod"},"usermod"),(0,a.kt)("h3",{id:"w"},"w"),(0,a.kt)("h3",{id:"who"},"who"),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("h3",{id:"badblocks"},"badblocks"),(0,a.kt)("h3",{id:"dmesg"},"dmesg"),(0,a.kt)("h3",{id:"dmidecode"},"dmidecode"),(0,a.kt)("h3",{id:"free"},"free"),(0,a.kt)("h3",{id:"hdparm"},"hdparm"),(0,a.kt)("h3",{id:"lsblk"},"lsblk"),(0,a.kt)("h3",{id:"lshw"},"lshw"),(0,a.kt)("h3",{id:"lspci"},"lspci"),(0,a.kt)("h3",{id:"lsusb"},"lsusb"),(0,a.kt)("h2",{id:"file-compression"},"File Compression"),(0,a.kt)("h3",{id:"gzip"},"gzip"),(0,a.kt)("h3",{id:"tar"},"tar"),(0,a.kt)("h3",{id:"zip"},"zip"),(0,a.kt)("h2",{id:"package-management"},"Package Management"),(0,a.kt)("p",null,"SUSE"),(0,a.kt)("p",null,"zypper\nrpm"),(0,a.kt)("p",null,"Fedora/RH/Oracle\nyum\ndnf\nrpm"),(0,a.kt)("p",null,"Debian / Ubuntu\napt-get\napt"),(0,a.kt)("h2",{id:"searching"},"Searching"),(0,a.kt)("h3",{id:"find"},"find"),(0,a.kt)("h3",{id:"grep"},"grep"),(0,a.kt)("h3",{id:"locate"},"locate"),(0,a.kt)("h2",{id:"system-management"},"System Management"),(0,a.kt)("h3",{id:"cat"},"cat"),(0,a.kt)("h3",{id:"date"},"date"),(0,a.kt)("h3",{id:"finger"},"finger"),(0,a.kt)("h3",{id:"hostname-1"},"hostname"),(0,a.kt)("h3",{id:"last-1"},"last"),(0,a.kt)("h3",{id:"modprobe"},"modprobe"),(0,a.kt)("h3",{id:"reboot"},"reboot"),(0,a.kt)("h3",{id:"shutdown"},"shutdown"),(0,a.kt)("h3",{id:"timedatectl"},"timedatectl"),(0,a.kt)("h3",{id:"ulimit"},"ulimit"),(0,a.kt)("h3",{id:"uname"},"uname"),(0,a.kt)("h3",{id:"uptime"},"uptime"),(0,a.kt)("h2",{id:"file-permission-management"},"File Permission Management"),(0,a.kt)("h3",{id:"chmod"},"chmod"),(0,a.kt)("h3",{id:"chown"},"chown"),(0,a.kt)("h2",{id:"remote"},"Remote"),(0,a.kt)("h3",{id:"ssh"},"ssh"),(0,a.kt)("h3",{id:"scp"},"scp"),(0,a.kt)("h3",{id:"lftp"},"lftp"),(0,a.kt)("h3",{id:"rsync"},"rsync"),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("h3",{id:"declare"},"declare"),(0,a.kt)("h3",{id:"echo"},"echo"),(0,a.kt)("h3",{id:"eport"},"eport"),(0,a.kt)("h3",{id:"let"},"let"),(0,a.kt)("h3",{id:"set"},"set"),(0,a.kt)("h2",{id:"disk-usage"},"Disk Usage"),(0,a.kt)("h3",{id:"fdisk"},"fdisk"),(0,a.kt)("h3",{id:"df"},"df"),(0,a.kt)("h3",{id:"du"},"du"),(0,a.kt)("h3",{id:"findmnt"},"findmnt"),(0,a.kt)("h3",{id:"mount"},"mount"),(0,a.kt)("h3",{id:"umount"},"umount"),(0,a.kt)("h2",{id:"lvm"},"LVM"),(0,a.kt)("h2",{id:"shell"},"Shell"),(0,a.kt)("h3",{id:"alias"},"alias"),(0,a.kt)("h3",{id:"at"},"at"),(0,a.kt)("h3",{id:"history"},"history"),(0,a.kt)("h3",{id:"jobs"},"jobs"),(0,a.kt)("h3",{id:"man"},"man"),(0,a.kt)("h3",{id:"sleep"},"sleep"),(0,a.kt)("h3",{id:"unalias"},"unalias"),(0,a.kt)("h3",{id:"watch"},"watch"),(0,a.kt)("h3",{id:""},"!"),(0,a.kt)("h3",{id:"-1"},"?"),(0,a.kt)("h2",{id:"shortcut-keys"},"Shortcut Keys"),(0,a.kt)("p",null,"Ctrl+C    kill"),(0,a.kt)("h2",{id:"editing"},"Editing"),(0,a.kt)("h2",{id:"string-manipulation"},"String manipulation"),(0,a.kt)("h2",{id:"searching-1"},"Searching"),(0,a.kt)("h2",{id:"process-management"},"Process Management"),(0,a.kt)("h2",{id:"-2"}))}u.isMDXComponent=!0}}]);