(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{164:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||s[u]||l;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<l;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(164)),o={id:"placeholderapi",title:"PlaceholderAPI",sidebar_label:"PlaceholderAPI"},c={unversionedId:"villagedefense/placeholders/placeholderapi",id:"villagedefense/placeholders/placeholderapi",isDocsHomePage:!1,title:"PlaceholderAPI",description:"---",source:"@site/docs/villagedefense/placeholders/placeholderapi.md",sourceDirName:"villagedefense/placeholders",slug:"/villagedefense/placeholders/placeholderapi",permalink:"/villagedefense/placeholders/placeholderapi",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/villagedefense/placeholders/placeholderapi.md",version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1619195418,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"PlaceholderAPI",frontMatter:{id:"placeholderapi",title:"PlaceholderAPI",sidebar_label:"PlaceholderAPI"},sidebar:"docs",previous:{title:"Free Maps",permalink:"/villagedefense/setup/maps"},next:{title:"Scoreboard",permalink:"/villagedefense/placeholders/scoreboard"}},i=[{value:"Statistics placeholders",id:"statistics-placeholders",children:[]},{value:"Arena-related placeholders",id:"arena-related-placeholders",children:[]}],b={toc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("p",null,"'Search for different placeholders, to customize your plugin experience'"),Object(l.b)("p",null,"These are the ",Object(l.b)("strong",{parentName:"p"},"PlaceholderAPI")," ","(","PAPI",")"," placeholders for VillageDefense. They are included with the plugin, so you do not have to download an expansion from the papi ecloud."),Object(l.b)("h2",{id:"statistics-placeholders"},"Statistics placeholders"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Placeholder"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","kills%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows your zombie kills")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","deaths%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows your deaths")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","games","_","played%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows your played games count")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","highest","_","wave%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the highest wave you survived")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","level%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows your current level")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","exp%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows your exp amount ","(","decimal number",")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","exp","_","to","_","next","_","level%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows amount of exp need to level up")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","arena","_","players","_","online%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the player amount of all arenas together")))),Object(l.b)("h2",{id:"arena-related-placeholders"},"Arena-related placeholders"),Object(l.b)("p",null,"These are special PAPI placeholders that can be defined for each arena you have. You need to replace {arena} with your arena name."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},'Your arena name is "coaster" -',">"," %villagedefense","_","coaster:players%"))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Placeholder"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","{arena}:players%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the amount of players in arena")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","{arena}:max","_","players%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the max players in arena")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","{arena}:state%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the current state raw enum name eg. STARTING")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","{arena}:state","_","pretty%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the prettified name of enum eg. Waiting ","(","instead WAITING","_","FOR","_","PLAYERS",")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","{arena}:mapname%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the name of arena map")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%villagedefense","_","{arena}:wave%"),Object(l.b)("td",{parentName:"tr",align:null},"Shows the current wave")))))}d.isMDXComponent=!0}}]);