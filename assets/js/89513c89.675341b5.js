(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(162)),i={id:"api",title:"Developer API",sidebar_label:"DeveloperApi"},l={unversionedId:"murdermystery/development/api",id:"murdermystery/development/api",isDocsHomePage:!1,title:"Developer API",description:"---",source:"@site/docs/murdermystery/development/developer-api.md",slug:"/murdermystery/development/api",permalink:"/murdermystery/development/api",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/murdermystery/development/developer-api.md",version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614521615,formattedLastUpdatedAt:"2/28/2021",sidebar_label:"DeveloperApi",sidebar:"docs",previous:{title:"Scoreboard",permalink:"/murdermystery/placeholders/scoreboard"},next:{title:"Plugin files explained",permalink:"/murdermystery/support/files"}},b=[{value:'Maven repository <a id="maven"></a>',id:"maven-repository",children:[]},{value:"Events",id:"events",children:[{value:"<strong>MMGameJoinAttemptEvent</strong> (<strong>Cancellable</strong>)",id:"mmgamejoinattemptevent-cancellable",children:[]},{value:"<strong>MMGameStartEvent</strong>",id:"mmgamestartevent",children:[]},{value:"<strong>MMGameLeaveAttemptEvent</strong>",id:"mmgameleaveattemptevent",children:[]},{value:"<strong>MMGameEndEvent</strong>",id:"mmgameendevent",children:[]},{value:"<strong>MMGameStateChangeEvent</strong>",id:"mmgamestatechangeevent",children:[]},{value:"<strong>MMPlayerStatisticChangeEvent</strong>",id:"mmplayerstatisticchangeevent",children:[]}]},{value:'Stats storage <a id="stats-storage"></a>',id:"stats-storage",children:[{value:"<strong>Retrieving online players stats</strong>",id:"retrieving-online-players-stats",children:[]},{value:"<strong>Requesting sorted statistics of all players</strong>",id:"requesting-sorted-statistics-of-all-players",children:[]},{value:"<strong>Available statistic types</strong>",id:"available-statistic-types",children:[]}]},{value:"Manipulating player join/leave attempts",id:"manipulating-player-joinleave-attempts",children:[{value:'Join attempt <a id="join-attempt"></a>',id:"join-attempt",children:[]},{value:'Leave attempt <a id="leave-attempt"></a>',id:"leave-attempt",children:[]}]}],s={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("p",null,"Get the API and some examples"),Object(c.b)("p",null,"Full js documentation: ",Object(c.b)("a",{parentName:"p",href:"https://jd.plajer.xyz/minecraft/murdermystery"},"https://jd.plajer.xyz/minecraft/murdermystery")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"}," Contents may be not up to date! Please use js docs instead. Here you can only get some simple examples."))),Object(c.b)("h2",{id:"maven-repository"},"Maven repository ",Object(c.b)("a",{id:"maven"})),Object(c.b)("p",null,"Maven repository usually contains latest releases, if not, please check in few days if release is there."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"How to access repo:")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Add repository")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-markup"},"        <repositories>\n            <repository>\n                <id>plugilyprojects</id>\n                <url>https://maven.plugily.xyz</url>\n            </repository>\n        </repositories>\n")),Object(c.b)("p",null,"  ",Object(c.b)("strong",{parentName:"p"},"2"),". Add the dependency"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-markup"},"        <dependencies>\n                 <dependency>\n                        <groupId>plugily.projects</groupId>\n                        <artifactId>murdermystery</artifactId>\n                        <version>{version}</version>\n                        <scope>provided</scope>\n                 </dependency>\n        </dependencies>\n")),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("h3",{id:"mmgamejoinattemptevent-cancellable"},Object(c.b)("strong",{parentName:"h3"},"MMGameJoinAttemptEvent")," ","(",Object(c.b)("strong",{parentName:"h3"},"Cancellable"),")"),Object(c.b)("p",null,"The event is called when a player is trying to join an arena."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameJoin(MMGameJoinAttemptEvent event){\n        event.getPlayer().sendMessage("You have joined " + event.getArena().getID());\n        event.setCancelled(true);\n        event.getPlayer().sendMessage("Or maybe not? :D");\n    }\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getPlayer","(",")")," - returns player involved in this event"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena where player is attempting to join")),Object(c.b)("h3",{id:"mmgamestartevent"},Object(c.b)("strong",{parentName:"h3"},"MMGameStartEvent")),Object(c.b)("p",null,"The event is called when the arena starts."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameStart(MMGameStartEvent event){\n        for(Player p : event.getArena().getPlayers()){\n            p.sendMessage("Game has started!");\n        }\n    }\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns event arena")),Object(c.b)("h3",{id:"mmgameleaveattemptevent"},Object(c.b)("strong",{parentName:"h3"},"MMGameLeaveAttemptEvent")),Object(c.b)("p",null,"The event is called when a player is trying to leave an arena."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameQuit(MMGameLeaveAttemptEvent event){\n        event.getPlayer().sendMessage("You have quitted" + e.getArena().getID());\n    }\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getPlayer","(",")")," - returns player involved in this event"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena what player is attempting to leave")),Object(c.b)("h3",{id:"mmgameendevent"},Object(c.b)("strong",{parentName:"h3"},"MMGameEndEvent")),Object(c.b)("p",null,"The event is called when a game has ended."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameStop(MMGameEndEvent event){\n        for(Player p : event.getArena().getPlayers()){\n            p.sendMessage("Cool game? Maybe play again?");\n        }\n    }\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena that is stopped")),Object(c.b)("h3",{id:"mmgamestatechangeevent"},Object(c.b)("strong",{parentName:"h3"},"MMGameStateChangeEvent")),Object(c.b)("p",null,"The event is called when a game arena state has changed."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onGameStop(MMGameStateChangeEvent event){\n        ArenaState prev = event.getPreviousState();\n        ArenaState curr = event.getState();\n        for(Player p : event.getArena().getPlayers()){\n            p.sendMessage("Game state changed from " + prev.getFormattedName() + " to " + curr.getFormattedName());\n        }\n    }\n')),Object(c.b)("h3",{id:"mmplayerstatisticchangeevent"},Object(c.b)("strong",{parentName:"h3"},"MMPlayerStatisticChangeEvent")),Object(c.b)("p",null,"The event is called when the player receives a new statistic."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    @EventHandler\n    public void onStatChange(MMPlayerStatisticChangeEvent event){\n        StatisticType stat = e.getStatisticType();\n        int statNumber = e.getNumber();\n        e.getPlayer().sendMessage("Your statistic " + stat.getName() + " has changed to " + statNumber);\n    }\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getPlayer","(",")")," - returns player involved in this event"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns arena player is playing ","(","player is always in arena when this event is called",")"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getStatisticType","(",")")," - returns statistic of StatsStorage.StatisticType enum"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getNumber","(",")")," - returns current value of statistic")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getPreviousState","(",")")," - returns arena state before change"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getState","(",")")," - returns current arena state"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"event","#","getArena","(",")")," - returns existing arena that is stopped")),Object(c.b)("h2",{id:"stats-storage"},"Stats storage ",Object(c.b)("a",{id:"stats-storage"})),Object(c.b)("h3",{id:"retrieving-online-players-stats"},Object(c.b)("strong",{parentName:"h3"},"Retrieving online players stats")),Object(c.b)("p",null,"You can easily get online players stats using MM API - Stats Storage class."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"    public int getWins(Player p){\n        return StatsStorage.getUserStats(p, StatsStorage.StatisticType.WINS);\n    }\n")),Object(c.b)("p",null,"Very easy, right?"),Object(c.b)("h3",{id:"requesting-sorted-statistics-of-all-players"},Object(c.b)("strong",{parentName:"h3"},"Requesting sorted statistics of all players")),Object(c.b)("p",null,"To access sorted statistics hMap with players you must call it from StatsStorage class."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    public void printBestStats(StatsStorage.StatisticType statistic){\n        Map<UUID, Integer> statsMap = StatsStorage.getStats(statistic);\n        UUID[] uuidsArray = (UUID[]) StatsStorage.getStats(statistic).keySet().toArray();\n        for(int i = 0; i < 10; i++){\n            Bukkit.broadcastMessage("#" + i + " UUID: " + uuidsArray[i] + ", stats: " + statsMap.get(uuidsArray[i]));\n        }\n    }\n')),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"}," Be aware of IndexOutOfBoundsException as the list might be not enough big!"))),Object(c.b)("h3",{id:"available-statistic-types"},Object(c.b)("strong",{parentName:"h3"},"Available statistic types")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Statistic name ","(","enum",")"),Object(c.b)("th",{parentName:"tr",align:"center"},"Statistic identifier ","(","string",")"," ","(","for advanced things",")"),Object(c.b)("th",{parentName:"tr",align:"center"},"Persistent"),Object(c.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"CONTRIBUTION","_","DETECTIVE"),Object(c.b)("td",{parentName:"tr",align:"center"},"contribdetective"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Points for chances of being detective")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"CONTRIBUTION","_","MURDERER"),Object(c.b)("td",{parentName:"tr",align:"center"},"contribmurderer"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Points for chances of being murderer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"DEATHS"),Object(c.b)("td",{parentName:"tr",align:"center"},"deaths"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Deaths amount")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"GAMES","_","PLAYED"),Object(c.b)("td",{parentName:"tr",align:"center"},"gamesplayed"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Total games played")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"WINS"),Object(c.b)("td",{parentName:"tr",align:"center"},"wins"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Wins amount")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LOSES"),Object(c.b)("td",{parentName:"tr",align:"center"},"loses"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Loses amount")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"HIGHEST","_","SCORE"),Object(c.b)("td",{parentName:"tr",align:"center"},"highestscore"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Highest score in-game")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"KILLS"),Object(c.b)("td",{parentName:"tr",align:"center"},"kills"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:"center"},"Total kills amount")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LOCAL","_","SCORE"),Object(c.b)("td",{parentName:"tr",align:"center"},"local","_","score"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:"center"},"In-game current score amount")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LOCAL","_","PRAISES"),Object(c.b)("td",{parentName:"tr",align:"center"},"local","_","praises"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:"center"},"In-game praises amount")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LOCAL","_","CURRENT","_","PRAY"),Object(c.b)("td",{parentName:"tr",align:"center"},"local","_","pray"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:"center"},"In-game current activated pray perk ID")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LOCAL","_","GOLD"),Object(c.b)("td",{parentName:"tr",align:"center"},"local","_","gold"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:"center"},"In-game current gold amount")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LOCAL","_","KILLS"),Object(c.b)("td",{parentName:"tr",align:"center"},"local","_","kills"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:"center"},"In-game current kills amount ","(","mainly for murderer",")")))),Object(c.b)("h2",{id:"manipulating-player-joinleave-attempts"},"Manipulating player join/leave attempts"),Object(c.b)("h3",{id:"join-attempt"},"Join attempt ",Object(c.b)("a",{id:"join-attempt"})),Object(c.b)("p",null," To force player to join specified arena you can use our ",Object(c.b)("inlineCode",{parentName:"p"},"ArenaManager")," class."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"  public void sendPlayerToArena(String arena, Player player){\n    ArenaManager.joinAttempt(player, ArenaRegistry.getArena(arena));\n  }\n\n  // or\n\n  public void sendPlayerToArena(Arena arena, Player player){\n    ArenaManager.joinAttempt(player, arena);\n  }\n")),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"You should check is arena name exist otherwise it will throw NullPointerException"))),Object(c.b)("p",null," After that you can check for ",Object(c.b)("inlineCode",{parentName:"p"},"#isCancelled()")," if join attempt was cancelled or not."),Object(c.b)("h3",{id:"leave-attempt"},"Leave attempt ",Object(c.b)("a",{id:"leave-attempt"})),Object(c.b)("p",null," You can also use ",Object(c.b)("inlineCode",{parentName:"p"},"ArenaManager")," class to force player to quit arena."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"  public void forcePlayerQuit(Player player){\n    Arena arena = ArenaRegistry.getArena(player);\n\n    ArenaManager.leaveAttempt(player, arena);\n  }\n")),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"}," You should check is arena isn't null otherwise it will throw NullPointerException"))))}p.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),o=p(a),d=n,g=o["".concat(i,".").concat(d)]||o[d]||m[d]||c;return a?r.a.createElement(g,l(l({ref:t},s),{},{components:a})):r.a.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);