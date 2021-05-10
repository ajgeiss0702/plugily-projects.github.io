(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2001],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,u=c["".concat(o,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3743:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return d}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={id:"api",title:"Developer API",sidebar_label:"DeveloperApi"},s={unversionedId:"buildbattle/development/api",id:"buildbattle/development/api",isDocsHomePage:!1,title:"Developer API",description:"---",source:"@site/docs/buildbattle/development/developer-api.md",sourceDirName:"buildbattle/development",slug:"/buildbattle/development/api",permalink:"/buildbattle/development/api",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/buildbattle/development/developer-api.md",version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614521615,formattedLastUpdatedAt:"2/28/2021",sidebar_label:"DeveloperApi",frontMatter:{id:"api",title:"Developer API",sidebar_label:"DeveloperApi"},sidebar:"docs",previous:{title:"Scoreboard",permalink:"/buildbattle/placeholders/scoreboard"},next:{title:"Plugin files explained",permalink:"/buildbattle/support/files"}},o=[{value:'Maven repository <a id="maven"></a>',id:"maven-repository",children:[]},{value:"Events",id:"events",children:[{value:"<strong>BBEvent</strong> (<strong>Generic</strong>)",id:"bbevent-generic",children:[]},{value:"<strong>BBGameJoinEvent</strong> (<strong>Cancellable</strong>)",id:"bbgamejoinevent-cancellable",children:[]},{value:"<strong>BBGameStartEvent</strong>",id:"bbgamestartevent",children:[]},{value:"<strong>BBGameLeaveEvent</strong>",id:"bbgameleaveevent",children:[]},{value:"<strong>BBGameEndEvent</strong>",id:"bbgameendevent",children:[]},{value:"<strong>BBGameStateChangeEvent</strong>",id:"bbgamestatechangeevent",children:[]}]},{value:'Stats storage <a id="stats-storage"></a>',id:"stats-storage",children:[{value:"<strong>Retrieving online players stats</strong>",id:"retrieving-online-players-stats",children:[]},{value:"<strong>Requesting sorted statistics of all players</strong>",id:"requesting-sorted-statistics-of-all-players",children:[]},{value:"<strong>Available statistic types</strong>",id:"available-statistic-types",children:[]}]},{value:'Manipulating player join/leave attempts <a id="manipulating-player-join-leave-attempts"></a>',id:"manipulating-player-joinleave-attempts",children:[{value:'Join attempt <a id="join-attempt"></a>',id:"join-attempt",children:[]},{value:'Leave attempt <a id="leave-attempt"></a>',id:"leave-attempt",children:[]}]}],p={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Get the API and some examples"),(0,l.kt)("p",null,"Full java documentation: ",(0,l.kt)("a",{parentName:"p",href:"https://jd.plajer.xyz/minecraft/buildbattle"},"https://jd.plajer.xyz/minecraft/buildbattle")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"}," Contents may be not up to date! Please use java docs instead. Here you can only get some simple examples."))),(0,l.kt)("h2",{id:"maven-repository"},"Maven repository ",(0,l.kt)("a",{id:"maven"})),(0,l.kt)("p",null,"Maven repository usually contains latest releases, if not, please check in few days if release is there."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How to access repo:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add repository")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markup"},"        <repositories>\n            <repository>\n                <id>plugilyprojects</id>\n                <url>https://maven.plugily.xyz</url>\n            </repository>\n        </repositories>\n")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"2"),". Add the dependency"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markup"},"        <dependencies>\n                 <dependency>\n                        <groupId>plugily.projects</groupId>\n                        <artifactId>buildbattle</artifactId>\n                        <version>{version}</version>\n                        <scope>provided</scope>\n                 </dependency>\n        </dependencies>\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"bbevent-generic"},(0,l.kt)("strong",{parentName:"h3"},"BBEvent")," ","(",(0,l.kt)("strong",{parentName:"h3"},"Generic"),")"),(0,l.kt)("p",null,"The event is called ",(0,l.kt)("strong",{parentName:"p"},"everytime")," any Build Battle event is called because it's a generic event."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onEventCall(BBEvent event){\n        if(event instanceof BBGameChangeStateEvent){\n            Bukkit.getConsoleSender().sendMessage("BBGameChangeStateEvent was called!");\n        }\n    }\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns event arena for which event was called")),(0,l.kt)("h3",{id:"bbgamejoinevent-cancellable"},(0,l.kt)("strong",{parentName:"h3"},"BBGameJoinEvent")," ","(",(0,l.kt)("strong",{parentName:"h3"},"Cancellable"),")"),(0,l.kt)("p",null,"The event is called when a player is trying to join an arena."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameJoin(BBGameJoinEvent event){\n        event.getPlayer().sendMessage("You have joined " + event.getArena().getID());\n        event.setCancelled(true);\n        event.getPlayer().sendMessage("Or maybe not? :D");\n    }\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getPlayer","(",")")," - returns player involved in this event"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena where player is attempting to join")),(0,l.kt)("h3",{id:"bbgamestartevent"},(0,l.kt)("strong",{parentName:"h3"},"BBGameStartEvent")),(0,l.kt)("p",null,"The event is called when the arena starts."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameStart(BBGameStartEvent event){\n        for(Player p : event.getArena().getPlayers()){\n            p.sendMessage("Game has started!");\n        }\n    }\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns event arena")),(0,l.kt)("h3",{id:"bbgameleaveevent"},(0,l.kt)("strong",{parentName:"h3"},"BBGameLeaveEvent")),(0,l.kt)("p",null,"The event is called when a player is trying to leave an arena."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameQuit(BBGameLeaveEvent event){\n        event.getPlayer().sendMessage("You have quitted" + e.getArena().getID());\n    }\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getPlayer","(",")")," - returns player involved in this event"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena what player is attempting to leave")),(0,l.kt)("h3",{id:"bbgameendevent"},(0,l.kt)("strong",{parentName:"h3"},"BBGameEndEvent")),(0,l.kt)("p",null,"The event is called when a game has ended."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameStop(BBGameStartEvent event){\n        for(Player p : event.getArena().getPlayers()){\n            p.sendMessage("Cool game? Maybe play again?");\n        }\n    }\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena that is stopped")),(0,l.kt)("h3",{id:"bbgamestatechangeevent"},(0,l.kt)("strong",{parentName:"h3"},"BBGameStateChangeEvent")),(0,l.kt)("p",null,"The event is called when a game arena state has changed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameStop(BBGameStateChangeEvent event){\n        ArenaState prev = event.getPreviousState();\n        ArenaState curr = event.getState();\n        for(Player p : event.getArena().getPlayers()){\n            p.sendMessage("Game state changed from " + prev.getFormattedName() + " to " + curr.getFormattedName());\n        }\n    }\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event.getPreviousState","(",")")," - returns arena state before change"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event.getState","(",")")," - returns current arena state"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena that is stopped")),(0,l.kt)("h2",{id:"stats-storage"},"Stats storage ",(0,l.kt)("a",{id:"stats-storage"})),(0,l.kt)("h3",{id:"retrieving-online-players-stats"},(0,l.kt)("strong",{parentName:"h3"},"Retrieving online players stats")),(0,l.kt)("p",null,"You can easily get online players stats using BB3 API - Stats Storage class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    public int getWins(Player p){\n        return StatsStorage.getUserStats(p, StatsStorage.StatisticType.WINS);\n    }\n")),(0,l.kt)("p",null,"Very easy, right?"),(0,l.kt)("h3",{id:"requesting-sorted-statistics-of-all-players"},(0,l.kt)("strong",{parentName:"h3"},"Requesting sorted statistics of all players")),(0,l.kt)("p",null,"To access sorted statistics hMap with players you must call it from StatsStorage class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    public void printBestStats(StatsStorage.StatisticType statistic){\n        Map<UUID, Integer> statsMap = StatsStorage.getStats(statistic);\n        UUID[] uuidsArray = (UUID[]) StatsStorage.getStats(statistic).keySet().toArray();\n        for(int i = 0; i < 10; i++){\n            Bukkit.broadcastMessage("#" + i + " UUID: " + uuidsArray[i] + ", stats: " + statsMap.get(uuidsArray[i]));\n        }\n    }\n')),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Be aware of IndexOutOfBoundsException as the list might be not enough big!"))),(0,l.kt)("h3",{id:"available-statistic-types"},(0,l.kt)("strong",{parentName:"h3"},"Available statistic types")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Statistic name ","(","enum",")"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Statistic identifier ","(","string",")"," ","(","for advanced things",")"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"BLOCKS","_","BROKEN"),(0,l.kt)("td",{parentName:"tr",align:"center"},"blocksbroken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"BLOCKS","_","PLACED"),(0,l.kt)("td",{parentName:"tr",align:"center"},"blocksplaced")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"GAMES","_","PLAYED"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gamesplayed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WINS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"wins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LOSES"),(0,l.kt)("td",{parentName:"tr",align:"center"},"loses")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"HIGHEST","_","WIN"),(0,l.kt)("td",{parentName:"tr",align:"center"},"highestwin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"PARTICLES","_","USED"),(0,l.kt)("td",{parentName:"tr",align:"center"},"particles")))),(0,l.kt)("h2",{id:"manipulating-player-joinleave-attempts"},"Manipulating player join/leave attempts ",(0,l.kt)("a",{id:"manipulating-player-join-leave-attempts"})),(0,l.kt)("h3",{id:"join-attempt"},"Join attempt ",(0,l.kt)("a",{id:"join-attempt"})),(0,l.kt)("p",null,"To force player to join specified arena you can use our ",(0,l.kt)("inlineCode",{parentName:"p"},"ArenaManager")," class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  public void sendPlayerToArena(String arena, Player player){\n    ArenaManager.joinAttempt(player, ArenaRegistry.getArena(arena));\n  }\n\n  // or\n\n  public void sendPlayerToArena(Arena arena, Player player){\n    ArenaManager.joinAttempt(player, arena);\n  }\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You should check is arena name exist otherwise it will throw NullPointerException"))),(0,l.kt)("p",null," After that you can check for ",(0,l.kt)("inlineCode",{parentName:"p"},"#isCancelled()")," if join attempt was cancelled or not."),(0,l.kt)("h3",{id:"leave-attempt"},"Leave attempt ",(0,l.kt)("a",{id:"leave-attempt"})),(0,l.kt)("p",null,"You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"ArenaManager")," class to force player to quit arena."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  public void forcePlayerQuit(Player player){\n    Arena arena = ArenaRegistry.getArena(player);\n\n    ArenaManager.leaveAttempt(player, arena);\n  }\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"}," You should check is arena isn't null otherwise it will throw NullPointerException"))))}d.isMDXComponent=!0}}]);