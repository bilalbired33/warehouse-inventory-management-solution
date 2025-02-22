import{M as F}from"./Modal-291f355a.js";import{_ as C,L as H,r as d,o as s,d as h,e as r,a as t,t as u,g as l,b as f,c as a,F as k,i as M,n as w,T as L,B as S,h as b,w as N,f as A,C as T,I as P}from"./app-32ed258c.js";import{T as D,a as R}from"./DropdownLink-b7a93580.js";import{T as V}from"./ApplicationLogo-67ce1691.js";import{T as E}from"./ApplicationMark-984b256c.js";const G={emits:["close"],components:{Loading:H,Modal:F},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},data(){return{alerts:[],loading:!0}},watch:{show:{immediate:!0,handler(e){e&&(this.loading=!0,axios.get("/alerts").then(i=>this.alerts=i.data).finally(()=>this.loading=!1))}}},computed:{got_alerts(){return this.alerts.warehouses?this.alerts.warehouses.filter(e=>e.alerts>0):!!this.alerts.draft}},methods:{close(){this.$emit("close")}}},q={class:"relative px-6 py-4"},J={class:"text-lg font-bold"},K={class:"mt-4"},Q={class:"py-2 mx-auto max-w-7xl"},X={key:1},Y={key:2,class:"grid grid-cols-1 sm:grid-cols-2 gap-5"},Z={class:"flex items-start justify-between"},ee={class:"mb-2 text-lg font-semibold leading-none text-gray-900 truncate"},se={class:"text-sm leading-none text-gray-600"},ne={class:"flex items-start justify-between"},te={class:"mb-2 text-lg font-semibold leading-none text-gray-900 truncate"},re={class:"text-sm leading-none text-gray-600"};function oe(e,i,g,$,o,m){const p=d("icons"),_=d("loading"),y=d("Link"),v=d("modal");return s(),h(v,{show:g.show,"max-width":g.maxWidth,closeable:g.closeable,onClose:m.close},{default:r(()=>[t("div",q,[t("h3",J,u(e.$t("Application Alerts")),1),t("button",{onClick:i[0]||(i[0]=n=>m.close()),class:"fixed top-2 right-2 flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[l(p,{name:"cross",class:"h-5 w-5"})]),t("div",K,[t("section",Q,[o.loading?(s(),h(_,{key:0})):f("",!0),!m.got_alerts&&!o.loading?(s(),a("div",X,u(e.$t("There is no data to display.")),1)):(s(),a("div",Y,[(s(!0),a(k,null,M(o.alerts.warehouses,n=>(s(),h(y,{key:n.id,href:e.route("alerts.list",n.id),class:"p-4 border rounded-md hover:bg-gray-100"},{default:r(()=>[t("div",Z,[t("h2",ee,u(e.$t(n.name))+" ("+u(n.code)+") ",1),t("span",{class:w(["flex items-center space-x-1 text-sm font-medium leading-none",n.alert/n.stock_count*100>20?"text-red-500":"text-yellow-500"])},[l(p,{name:"down"}),t("span",null,u(e.$number(n.alert/n.stock_count*100))+"%",1)],2)]),t("p",se,u(e.$t("x items are low in stock.",{x:n.alert})),1)]),_:2},1032,["href"]))),128)),o.alerts.draft?(s(!0),a(k,{key:0},M(Object.keys(o.alerts.draft),n=>(s(),a(k,{key:n},[n!="warehouses"?(s(),h(y,{key:0,href:e.route(n+".index",{draft:"yes"}),class:"p-4 border rounded-md hover:bg-gray-100"},{default:r(()=>[t("div",ne,[t("h2",te,u(e.$t(e.$capitalize(n))),1)]),t("p",re,u(e.$t("x records are still draft.",{x:o.alerts.draft[n]})),1)]),_:2},1032,["href"])):f("",!0)],64))),128)):f("",!0)]))])])])]),_:1},8,["show","max-width","closeable","onClose"])}const ae=C(G,[["render",oe]]),ie={components:{AlertsModal:ae},data(){return{alerts:!1,scaled:!1}}},le={class:"px-4"};function ce(e,i,g,$,o,m){const p=d("icons"),_=d("Link"),y=d("alerts-modal");return s(),a("div",le,[e.$page.props.user&&e.$page.props.user.roles.find(v=>v.name=="Super Admin")?(s(),h(_,{key:0,href:e.route("settings"),class:"inline-flex items-center justify-center p-2 bg-white text-gray-700 hover:text-white hover:bg-blue-700 rounded font-bold"},{default:r(()=>[l(p,{name:"cog"})]),_:1},8,["href"])):f("",!0),t("button",{onClick:i[0]||(i[0]=v=>o.alerts=!0),class:"inline-flex items-center justify-center p-2 bg-white text-gray-700 hover:text-white hover:bg-blue-700 rounded font-bold focus:outline-none"},[l(p,{name:"bell"})]),l(y,{show:o.alerts,onClose:i[1]||(i[1]=v=>o.alerts=!1)},null,8,["show"])])}const U=C(ie,[["render",ce]]),ue={emits:["on-change"],data(){return{show:!1}},watch:{show(e){this.$emit("on-change",e)}}},de={class:"md:hidden"};function me(e,i,g,$,o,m){const p=d("icons");return s(),a("span",de,[l(L,{mode:"out-in",name:"fade"},{default:r(()=>[o.show?(s(),a("button",{key:0,onClick:i[0]||(i[0]=_=>o.show=!1),class:"text-white focus:outline-none"},[l(p,{name:"cross"})])):(s(),a("button",{key:1,onClick:i[1]||(i[1]=_=>o.show=!0),class:"text-white focus:outline-none"},[l(p,{name:"menu"})]))]),_:1})])}const O=C(ue,[["render",me]]),he={emits:["on-mobile-menu-change"],components:{IconMenus:U,TecDropdown:D,MobileMenuIcon:O,MobileMenuIcon:O,TecDropdownLink:R,TecApplicationLogo:V,TecApplicationMark:E},data(){return{show:!1,languages:S}},watch:{show(e){this.$emit("on-mobile-menu-change",e)}},computed:{current(){var e;return((e=S.find(i=>i.value==this.$root.$i18n.locale))==null?void 0:e.flag)||"US"}},methods:{logout(){this.$inertia.post(route("logout"))},changeLang(e){this.$inertia.visit("/language/"+e,{onFinish:async()=>{window.Locale=e,document.querySelector("html").setAttribute("lang",e),this.$root.$i18n.locale=e}})}}},pe={class:"md:flex md:shrink-0"},fe={key:0,class:"bg-gray-900 md:shrink-0 md:w-16 px-6 py-3 flex items-center justify-between md:justify-center"},ge={key:1,class:"bg-gray-900 md:shrink-0 md:w-64 px-6 py-3 flex items-center justify-between md:justify-center"},_e={class:"bg-white border-b w-full py-2 px-4 md:py-0 md:text-md flex justify-between items-center"},be={class:"mt-1 mr-4 flex items-center"},$e={class:"flex items-center px-2 py-1 mr-2 border-2 border-transparent rounded-md focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},ke=["innerHTML"],ye=["innerHTML"],we={class:"flex items-center p-1 border-2 border-transparent rounded-md focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},ve={class:"flex items-center gap-x-3"},xe={class:"flex items-center p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-150 ease-in-out"},Ce=["alt","src"],je={class:"hidden sm:inline-flex items-center mr-2"},Ae={class:"block px-4 py-2 text-xs text-gray-400"},Me=t("div",{class:"border-t border-gray-100"},null,-1);function Te(e,i,g,$,o,m){const p=d("tec-application-mark"),_=d("Link"),y=d("mobile-menu-icon"),v=d("tec-application-logo"),n=d("tec-dropdown-link"),c=d("tec-dropdown"),j=d("icons"),B=d("icon-menus");return s(),a("div",pe,[e.$page.props.settings.sidebar=="mini"?(s(),a("div",fe,[l(_,{class:"text-gray-100",href:e.route("dashboard")},{default:r(()=>[l(p,{class:"block h-8"})]),_:1},8,["href"]),l(y,{onOnChange:i[0]||(i[0]=x=>o.show=x)})])):(s(),a("div",ge,[l(_,{class:"text-gray-100",href:e.route("dashboard")},{default:r(()=>[l(v,{class:"block w-56"})]),_:1},8,["href"]),l(y,{onOnChange:i[1]||(i[1]=x=>o.show=x)})])),t("div",_e,[t("div",be,[l(c,{align:"left",width:"48"},{trigger:r(()=>[t("button",$e,[t("span",{class:"",innerHTML:m.current.replace(/./g,x=>String.fromCodePoint(x.charCodeAt(0)+127397))},null,8,ke)])]),content:r(()=>[(s(!0),a(k,null,M(o.languages,x=>(s(),h(n,{key:x.value,as:"button",onClick:I=>m.changeLang(x.value)},{default:r(()=>[t("span",{class:"mr-2",innerHTML:x.flag.replace(/./g,I=>String.fromCodePoint(I.charCodeAt(0)+127397))},null,8,ye),b(" "+u(e.$t(x.label)),1)]),_:2},1032,["onClick"]))),128))]),_:1}),e.$can(["create-contacts","create-users","create-roles"])?(s(),h(c,{key:0,align:"left",width:"56"},{trigger:r(()=>[t("button",we,[l(j,{name:"plus",class:"-ml-1 mr-1"}),b(" "+u(e.$t("New")),1)])]),content:r(()=>[e.$can("create-checkins")?(s(),h(n,{key:0,href:e.route("checkins.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Checkin")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-checkouts")?(s(),h(n,{key:1,href:e.route("checkouts.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Checkout")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-items")?(s(),h(n,{key:2,href:e.route("items.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Item")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-contacts")?(s(),h(n,{key:3,href:e.route("contacts.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Contact")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-categories")?(s(),h(n,{key:4,href:e.route("categories.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Category")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-units")?(s(),h(n,{key:5,href:e.route("units.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Unit")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-warehouses")?(s(),h(n,{key:6,href:e.route("warehouses.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Warehouse")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-users")?(s(),h(n,{key:7,href:e.route("users.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("User")})),1)]),_:1},8,["href"])):f("",!0),e.$can("create-roles")?(s(),h(n,{key:8,href:e.route("roles.create")},{default:r(()=>[b(u(e.$t("create_x",{x:e.$t("Role")})),1)]),_:1},8,["href"])):f("",!0)]),_:1})):f("",!0)]),t("div",ve,[l(B,{class:"flex gap-x-3 items-center"}),l(c,{align:"right",width:"48"},{trigger:r(()=>[t("button",xe,[e.$page.props.jetstream.managesProfilePhotos?(s(),a("img",{key:0,alt:e.$page.props.user.name,src:e.$page.props.user.profile_photo_url,class:"h-8 w-8 rounded-full object-cover sm:mr-2"},null,8,Ce)):f("",!0),t("span",je,[b(u(e.$page.props.user.name)+" ",1),l(j,{name:"chevron-down",class:"ml-2 -mr-1"})])])]),content:r(()=>[t("div",Ae,u(e.$t("Manage Account")),1),l(n,{href:e.route("profile.show")},{default:r(()=>[b(u(e.$t("Profile")),1)]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(s(),h(n,{key:0,href:e.route("api-tokens.index")},{default:r(()=>[b(u(e.$t("API Tokens")),1)]),_:1},8,["href"])):f("",!0),Me,t("form",{onSubmit:i[2]||(i[2]=N((...x)=>m.logout&&m.logout(...x),["prevent"]))},[l(n,{as:"button"},{default:r(()=>[b(u(e.$t("Log Out")),1)]),_:1})],32)]),_:1})])])])}const Le=C(he,[["render",Te]]),Ue={data(){return{show:!0}},watch:{"$page.props.flash":{handler(){this.show=!0,this.$nextTick(()=>{setTimeout(()=>this.show=!1,5e3)})},deep:!0}},mounted(){setTimeout(()=>this.show=!1,5e3)}},Ie={class:"relative z-30"},Se={class:"flex items-start"},Oe={class:"p-4 font-medium"},ze={class:"font-bold mb-1"},We={class:"flex items-start text-white"},Be=["innerHTML"],Fe={key:1,class:"p-4 font-medium"},He={key:0},Ne={key:1};function Pe(e,i,g,$,o,m){const p=d("icons");return s(),a("div",Ie,[l(L,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[e.$page.props.flash.message&&o.show?(s(),a("div",{key:0,onClick:i[0]||(i[0]=_=>o.show=!1),class:"fixed top-4 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-green-500 rounded text-white cursor-pointer"},[t("div",Se,[l(p,{name:"tick",class:"ml-4 mt-4 w-4 h-4"}),t("div",Oe,[t("div",ze,u(e.$t("Success!")),1),b(" "+u(e.$page.props.flash.message),1)])])])):f("",!0)]),_:1}),l(L,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[(e.$page.props.flash.error||Object.keys(e.$page.props.errors).length>0)&&o.show?(s(),a("div",{key:0,onClick:i[1]||(i[1]=_=>o.show=!1),class:"fixed top-4 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-red-500 rounded text-white cursor-pointer"},[t("div",We,[l(p,{name:"cross",class:"ml-4 mt-4 w-4 h-4"}),e.$page.props.flash.error?(s(),a("div",{key:0,class:"p-4 font-medium",innerHTML:e.$page.props.flash.error},null,8,Be)):(s(),a("div",Fe,[Object.keys(e.$page.props.errors).length===1?(s(),a("span",He,"There is one form error.")):(s(),a("span",Ne,"There are "+u(Object.keys(e.$page.props.errors).length)+" form errors.",1))]))])])):f("",!0)]),_:1})])}const De=C(Ue,[["render",Pe]]),z=[{name:"dashboard",route:"dashboard",icon:"home",hidden:!1,heading:"Main",sub_menu:!1,permissions:["all"],lang:{helper:null,main:"Dashboard"}},{name:"checkins",route:null,icon:"in",hidden:!1,heading:null,children:["checkins"],lang:{helper:null,main:"Checkins"},permissions:["read-checkins","create-checkins","update-checkins"],sub_menu:[{name:"checkins.list",route:"checkins.index",icon:null,hidden:!1,sub_menu:!1,target:"checkins",permissions:["read-checkins"],lang:{helper:"list_x",main:"Checkins"}},{name:"checkins.create",route:"checkins.create",icon:null,hidden:!1,sub_menu:!1,target:"checkins",permissions:["create-checkins"],lang:{helper:"create_x",main:"Checkin"}}]},{name:"checkouts",route:null,icon:"out",hidden:!1,heading:null,children:["checkouts"],lang:{helper:null,main:"Checkouts"},permissions:["read-checkouts","create-checkouts","update-checkouts"],sub_menu:[{name:"checkouts.list",route:"checkouts.index",icon:null,hidden:!1,sub_menu:!1,target:"checkouts",permissions:["read-checkouts"],lang:{helper:"list_x",main:"Checkouts"}},{name:"checkouts.create",route:"checkouts.create",icon:null,hidden:!1,sub_menu:!1,target:"checkouts",permissions:["create-checkouts"],lang:{helper:"create_x",main:"Checkout"}}]},{name:"adjustments",route:null,icon:"adjustments",hidden:!1,heading:null,children:["adjustments"],lang:{helper:null,main:"Adjustments"},permissions:["read-adjustments"],sub_menu:[{name:"adjustments.list",route:"adjustments.index",icon:null,hidden:!1,sub_menu:!1,permissions:["read-adjustments"],lang:{main:"Adjustments"}},{name:"adjustments.create",route:"adjustments.create",icon:null,hidden:!1,sub_menu:!1,target:"adjustments",permissions:["create-adjustments"],lang:{helper:"create_x",main:"Adjustment"}}]},{name:"transfers",route:null,icon:"truck",hidden:!1,heading:null,children:["transfers"],lang:{helper:null,main:"Transfers"},permissions:["read-transfers"],sub_menu:[{name:"transfers.list",route:"transfers.index",icon:null,hidden:!1,sub_menu:!1,permissions:["read-transfers"],lang:{main:"Transfers"}},{name:"transfers.create",route:"transfers.create",icon:null,hidden:!1,sub_menu:!1,target:"transfers",permissions:["create-transfers"],lang:{helper:"create_x",main:"Transfer"}}]},{name:"items",route:null,icon:"heart",hidden:!1,heading:null,children:["items"],lang:{helper:null,main:"Items"},permissions:["read-items","create-items","update-items"],sub_menu:[{name:"items.list",route:"items.index",icon:null,hidden:!1,sub_menu:!1,target:"items",permissions:["read-items"],lang:{helper:"list_x",main:"Items"}},{name:"items.create",route:"items.create",icon:null,hidden:!1,sub_menu:!1,target:"items",permissions:["create-items"],lang:{helper:"create_x",main:"Item"}},{name:"items.import",route:"items.import",icon:null,hidden:!1,sub_menu:!1,target:"items",permissions:["import-items"],lang:{helper:"import_x",main:"Items"}}]},{name:"contacts",route:null,icon:"group",hidden:!1,heading:null,children:["contacts"],lang:{helper:null,main:"Contacts"},permissions:["read-contacts","create-contacts","update-contacts"],sub_menu:[{name:"contacts.list",route:"contacts.index",icon:null,hidden:!1,sub_menu:!1,target:"contacts",permissions:["read-contacts"],lang:{helper:"list_x",main:"Contacts"}},{name:"contacts.create",route:"contacts.create",icon:null,hidden:!1,sub_menu:!1,target:"contacts",permissions:["create-contacts"],lang:{helper:"create_x",main:"Contact"}},{name:"contacts.import",route:"contacts.import",icon:null,hidden:!1,sub_menu:!1,target:"contacts",permissions:["import-contacts"],lang:{helper:"import_x",main:"Contacts"}}]},{name:"categories",route:null,icon:"collection",hidden:!1,heading:null,children:["categories"],lang:{helper:null,main:"Categories"},permissions:["read-categories","create-categories","update-categories"],sub_menu:[{name:"categories.list",route:"categories.index",icon:null,hidden:!1,sub_menu:!1,target:"categories",permissions:["read-categories"],lang:{helper:"list_x",main:"Categories"}},{name:"categories.create",route:"categories.create",icon:null,hidden:!1,sub_menu:!1,target:"categories",permissions:["create-categories"],lang:{helper:"create_x",main:"Category"}},{name:"categories.import",route:"categories.import",icon:null,hidden:!1,sub_menu:!1,target:"categories",permissions:["import-categories"],lang:{helper:"import_x",main:"Categories"}}]},{name:"units",route:null,icon:"chip",hidden:!1,heading:null,children:["units"],lang:{helper:null,main:"Units"},permissions:["read-units","create-units","update-units"],sub_menu:[{name:"units.list",route:"units.index",icon:null,hidden:!1,sub_menu:!1,target:"units",permissions:["read-units"],lang:{helper:"list_x",main:"Units"}},{name:"units.create",route:"units.create",icon:null,hidden:!1,sub_menu:!1,target:"units",permissions:["create-units"],lang:{helper:"create_x",main:"Unit"}},{name:"units.import",route:"units.import",icon:null,hidden:!1,sub_menu:!1,target:"units",permissions:["import-units"],lang:{helper:"import_x",main:"Units"}}]},{name:"warehouses",route:null,icon:"building",hidden:!1,heading:null,children:["warehouses"],lang:{helper:null,main:"Warehouses"},permissions:["read-warehouses","create-warehouses","update-warehouses"],sub_menu:[{name:"warehouses.list",route:"warehouses.index",icon:null,hidden:!1,sub_menu:!1,target:"warehouses",permissions:["read-warehouses"],lang:{helper:"list_x",main:"Warehouses"}},{name:"warehouses.create",route:"warehouses.create",icon:null,hidden:!1,sub_menu:!1,target:"warehouses",permissions:["create-warehouses"],lang:{helper:"create_x",main:"Warehouse"}},{name:"warehouses.import",route:"warehouses.import",icon:null,hidden:!1,sub_menu:!1,target:"warehouses",permissions:["import-warehouses"],lang:{helper:"import_x",main:"Warehouses"}}]},{name:"users",route:null,icon:"users",hidden:!1,heading:null,children:["users","roles"],lang:{helper:null,main:"Users"},permissions:["read-users","create-users","update-users","read-roles","create-roles","update-roles"],sub_menu:[{name:"users.list",route:"users.index",icon:null,hidden:!1,sub_menu:!1,permissions:["read-users"],lang:{helper:"list_x",main:"Users"}},{name:"users.create",route:"users.create",icon:null,hidden:!1,sub_menu:!1,permissions:["create-users"],lang:{helper:"create_x",main:"User"}},{name:"roles.list",route:"roles.index",icon:null,hidden:!1,sub_menu:!1,permissions:["read-roles"],lang:{helper:"list_x",main:"Roles"}},{name:"roles.create",route:"roles.create",icon:null,hidden:!1,sub_menu:!1,permissions:["create-roles"],lang:{helper:"create_x",main:"Role"}}]},{name:"reports",route:null,icon:"chart-bar",hidden:!1,heading:null,children:["reports"],lang:{helper:null,main:"Reports"},permissions:["read-reports"],sub_menu:[{name:"reports.list",route:"reports.index",icon:null,hidden:!1,sub_menu:!1,permissions:["read-reports"],lang:{main:"Total Records"}},{name:"reports.checkin",route:"reports.checkin",icon:null,hidden:!1,sub_menu:!1,permissions:["checkin-reports"],lang:{helper:"x_report",main:"Checkin"}},{name:"reports.checkout",route:"reports.checkout",icon:null,hidden:!1,sub_menu:!1,permissions:["checkout-reports"],lang:{helper:"x_report",main:"Checkout"}},{name:"reports.transfer",route:"reports.transfer",icon:null,hidden:!1,sub_menu:!1,permissions:["transfer-reports"],lang:{helper:"x_report",main:"Transfer"}},{name:"reports.adjustment",route:"reports.adjustment",icon:null,hidden:!1,sub_menu:!1,permissions:["adjustment-reports"],lang:{helper:"x_report",main:"Adjustment"}}]},{name:"activity",route:"activity",icon:"doc-text",hidden:!1,heading:"Misc",sub_menu:!1,permissions:["read-activity"],lang:{helper:null,main:"Activity"}}],Re={props:["href","space","hideIcon"],data(){return{open:!1}}};function Ve(e,i,g,$,o,m){const p=d("icons"),_=d("Link");return s(),h(_,{href:g.href,class:w([g.space=="less"?"md:py-2":"md:py-3","flex items-center border-b border-darker px-4 md:px-2 py-4 lg:px-4 focus:bg-blue-600 hover:bg-blue-700"])},{default:r(()=>[A(e.$slots,"icon",{},()=>[g.hideIcon?f("",!0):(s(),h(p,{key:0,name:"link",class:"mr-3"}))]),A(e.$slots,"default")]),_:3},8,["href","class"])}const W=C(Re,[["render",Ve]]),Ee={props:["icon","active"],data(){return{open:!1}},mounted(){this.open=!!this.active}},Ge={class:"flex items-center grow"},qe={key:1};function Je(e,i,g,$,o,m){const p=d("Icons"),_=d("icons");return s(),a("div",null,[t("a",{onClick:i[0]||(i[0]=y=>o.open=!o.open),class:w([o.open?"bg-blue-600":"","cursor-pointer border-b border-darker flex items-center px-4 py-4 md:py-3 focus:bg-blue-600 hover:bg-blue-700"])},[t("span",Ge,[A(e.$slots,"icon",{},()=>[g.icon?(s(),h(p,{key:0,name:g.icon,class:"mr-3"},null,8,["name"])):(s(),a("span",qe,[o.open?(s(),h(_,{key:0,name:"open-folder",class:"mr-3"})):(s(),h(_,{key:1,name:"folder",class:"mr-3"}))]))]),A(e.$slots,"default")]),l(_,{name:"chevron-down",class:w([{"-rotate-180":o.open},"transition transform duration-300"])},null,8,["class"])],2),o.open?(s(),a("div",{key:0,class:w([o.open?"bg-gray-900":"bg-gray-800","py-3 md:py-2"])},[A(e.$slots,"dropdown")],2)):f("",!0)])}const Ke=C(Ee,[["render",Je]]),Qe={components:{MenuItem:W,DropdownMenu:Ke,IconMenus:U},data(){return{menus:z,current:""}},methods:{trans(e){return e.helper?this.$t(e.helper,{x:this.$t(e.main)}):this.$t(e.main)},isActiveUrl(e,i=!1){let g=this.$page.props.settings.baseUrl+(this.$page.url!="/"?this.$page.url:"");if(i){let $=!1;return e.map(o=>{g.includes(o)&&($=!0)}),$}return e.split("?")[0]==g.split("?")[0]}}},Xe={class:"bg-gray-800 text-gray-300 w-full md:w-64 grid grid-cols-1 place-content-between overflow-x-hidden overflow-y-auto"},Ye={class:"md:py-2"},Ze={key:0,class:"hidden md:block mt-1 font-bold text-xs text-gray-600 px-4 py-2"},es={key:0,class:"block mt-1 font-bold text-xs text-gray-600 px-4 py-2"},ss={key:0,class:"block mt-1 font-bold text-xs text-gray-600 px-4 py-2"},ns={class:"py-3 my-4 sm:my-0"};function ts(e,i,g,$,o,m){const p=d("Icons"),_=d("menu-item"),y=d("dropdown-menu"),v=d("icon-menus");return s(),a("div",Xe,[t("div",null,[t("div",Ye,[e.$page.props.settings.sidebar_style=="dropdown"?(s(!0),a(k,{key:0},M(o.menus,n=>(s(),a(k,{key:n.name},[n.heading?(s(),a("div",Ze,u(e.$t(n.heading)),1)):f("",!0),e.$can(n.permissions)&&!n.sub_menu&&!n.hidden?(s(),h(_,{key:1,href:e.route(n.route),class:w({"bg-blue-600":m.isActiveUrl(e.route(n.route))})},T({default:r(()=>[b(" "+u(m.trans(n.lang)),1)]),_:2},[n.icon?{name:"icon",fn:r(()=>[l(p,{name:n.icon,class:"mr-3"},null,8,["name"])]),key:"0"}:void 0]),1032,["href","class"])):e.$can(n.permissions)&&n.sub_menu.length?(s(),h(y,{key:2,active:m.isActiveUrl(n.children,!0)},T({dropdown:r(()=>[(s(!0),a(k,null,M(n.sub_menu,(c,j)=>(s(),a(k,{key:c.name},[e.$can(c.permissions)&&!c.hidden?(s(),h(_,{key:0,space:"less",href:e.route(c.route),class:w({"bg-blue-600":m.isActiveUrl(e.route(c.route)),"border-transparent":j+1==n.sub_menu.length})},{default:r(()=>[b(u(m.trans(c.lang)),1)]),_:2},1032,["href","class"])):f("",!0)],64))),128))]),default:r(()=>[b(" "+u(m.trans(n.lang))+" ",1)]),_:2},[n.icon?{name:"icon",fn:r(()=>[l(p,{name:n.icon,class:"mr-3"},null,8,["name"])]),key:"0"}:void 0]),1032,["active"])):f("",!0)],64))),128)):(s(!0),a(k,{key:1},M(o.menus,n=>(s(),a(k,{key:n.name},[n.heading?(s(),a("div",es,u(e.$t(n.heading)),1)):f("",!0),e.$can(n.permissions)&&!n.sub_menu&&!n.hidden?(s(),h(_,{key:1,href:e.route(n.route),class:w({"bg-blue-600":m.isActiveUrl(e.route(n.route))})},T({default:r(()=>[b(" "+u(m.trans(n.lang)),1)]),_:2},[n.icon?{name:"icon",fn:r(()=>[l(p,{name:n.icon,class:"mr-3"},null,8,["name"])]),key:"0"}:void 0]),1032,["href","class"])):n.sub_menu.length?(s(),a(k,{key:2},[e.$can(n.permissions)?(s(),a("div",ss,u(m.trans(n.lang)),1)):f("",!0),(s(!0),a(k,null,M(n.sub_menu,c=>(s(),a(k,{key:c.name},[e.$can(c.permissions)&&!c.hidden?(s(),h(_,{key:0,href:e.route(c.route),class:w({"bg-blue-600":m.isActiveUrl(e.route(c.route))})},T({default:r(()=>[b(" "+u(m.trans(c.lang)),1)]),_:2},[c.icon?{name:"icon",fn:r(()=>[l(p,{name:c.icon,class:"mr-3"},null,8,["name"])]),key:"0"}:void 0]),1032,["href","class"])):f("",!0)],64))),128))],64)):f("",!0)],64))),128))])]),t("div",ns,[l(v,{class:"mx-3 md:mx-0 gap-x-6 md:gap-x-3 flex items-center justify-between sm:hidden"})])])}const rs=C(Qe,[["render",ts]]),os={components:{Icons:P},props:["active"]},as={class:"z-10 flex group relative"},is={class:"flex items-center"},ls={class:"z-50 rounded-br absolute inset-x-full top-0 hidden group-hover:flex w-56 flex-wrap"},cs={class:"bg-blue-600 h-12 w-56 flex items-center border-b border-darker rounded-tr px-2 lg:px-4"},us={class:"bg-gray-900 w-56 rounded-br flex flex-col flex-nowrap"};function ds(e,i,g,$,o,m){const p=d("icons");return s(),a("div",as,[t("a",{class:w([{"bg-blue-600":g.active},"cursor-pointer flex items-center justify-center border-b w-16 h-12 border-darker px-2 lg:px-4 focus:bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-600"])},[t("div",is,[A(e.$slots,"icon",{},()=>[l(p,{name:"folder",class:"block group-hover:hidden"}),l(p,{name:"open-folder",class:"hidden group-hover:block"})])])],2),t("div",ls,[t("div",cs,[A(e.$slots,"default")]),t("div",us,[A(e.$slots,"dropdown")])])])}const ms=C(os,[["render",ds]]),hs={props:["href","hideIcon"]},ps={class:"cursor-pointer z-10 flex group relative"},fs={class:"rounded-br absolute inset-x-full top-0 hidden group-hover:flex w-48 flex-wrap"},gs={class:"bg-blue-600 h-12 w-48 flex items-center border-b border-darker rounded-r px-2 py-4 lg:px-4"};function _s(e,i,g,$,o,m){const p=d("icons"),_=d("Link");return s(),a("div",ps,[l(_,{href:g.href,class:"flex items-center justify-center border-b w-16 h-12 border-darker px-2 lg:px-4 focus:bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-600"},{default:r(()=>[A(e.$slots,"icon",{},()=>[g.hideIcon?f("",!0):(s(),h(p,{key:0,name:"link"}))]),t("div",fs,[t("div",gs,[A(e.$slots,"default")])])]),_:3},8,["href"])])}const bs=C(hs,[["render",_s]]),$s={components:{MenuItem:W,MenuItemIcon:bs,IconSubMenu:ms,IconMenus:U},data(){return{menus:z}},methods:{trans(e){return e.helper?this.$t(e.helper,{x:this.$t(e.main)}):this.$t(e.main)},isActiveUrl(e,i=!1){let g=this.$page.props.settings.baseUrl+(this.$page.url!="/"?this.$page.url:"");if(i){let $=!1;return e.map(o=>{g.includes(o)&&($=!0)}),$}return e==g}}},ks={class:"bg-gray-800 text-gray-300 w-full h-full md:w-16 grid grid-cols-1 place-content-between"},ys={class:"lg:py-2"},ws={key:0,class:"hidden lg:block mt-1 font-bold text-xs text-gray-600 px-4 py-2"},vs={class:"py-2"},xs={class:"py-4"};function Cs(e,i,g,$,o,m){const p=d("Icons"),_=d("menu-item-icon"),y=d("menu-item"),v=d("icon-sub-menu"),n=d("icon-menus");return s(),a("div",ks,[t("div",null,[t("div",ys,[(s(!0),a(k,null,M(o.menus,c=>(s(),a(k,{key:c.name},[e.$can(c.permissions)&&c.heading?(s(),a("div",ws,u(e.$t(c.heading)),1)):f("",!0),e.$can(c.permissions)&&!c.sub_menu&&!c.hidden?(s(),h(_,{key:1,href:e.route(c.route),class:w({"bg-blue-600":m.isActiveUrl(e.route(c.route))})},T({default:r(()=>[b(" "+u(m.trans(c.lang)),1)]),_:2},[c.icon?{name:"icon",fn:r(()=>[l(p,{name:c.icon},null,8,["name"])]),key:"0"}:void 0]),1032,["href","class"])):e.$can(c.permissions)&&c.sub_menu.length?(s(),h(v,{key:2,active:m.isActiveUrl(c.children,!0)},T({dropdown:r(()=>[t("div",vs,[(s(!0),a(k,null,M(c.sub_menu,j=>(s(),a(k,{key:j.name},[e.$can(j.permissions)&&!j.hidden?(s(),h(y,{key:0,space:"less","hide-icon":!0,href:e.route(j.route),class:w({"bg-blue-600":m.isActiveUrl(e.route(j.route))})},{default:r(()=>[b(u(m.trans(j.lang)),1)]),_:2},1032,["href","class"])):f("",!0)],64))),128))])]),default:r(()=>[b(" "+u(m.trans(c.lang))+" ",1)]),_:2},[c.icon?{name:"icon",fn:r(()=>[l(p,{name:c.icon},null,8,["name"])]),key:"0"}:void 0]),1032,["active"])):f("",!0)],64))),128))])]),t("div",xs,[l(n,{class:"mx-3 md:mx-0 gap-y-6 md:gap-y-4 flex flex-col items-center justify-center"})])])}const js=C($s,[["render",Cs]]),As={props:["title"],components:{TopBar:Le,FullMainMenu:rs,MiniMainMenu:js,FlashMessages:De},watch:{title:{immediate:!0,handler(e){document.title=(e?e+" • ":"")+this.$settings.name}}},data(){return{show:!1}}},Ms={class:"bg-gray-100 min-h-screen print:bg-white"},Ts={class:"md:flex md:flex-col"},Ls={class:"md:h-screen md:flex md:flex-col"},Us={class:"md:flex-1 md:px-4 py-8 md:p-8 overflow-x-hidden md:overflow-y-auto print:m-0 print:p-0 print:overflow-visible","scroll-region":""};function Is(e,i,g,$,o,m){const p=d("top-bar"),_=d("mini-main-menu"),y=d("full-main-menu"),v=d("flash-messages");return s(),a("div",Ms,[t("div",Ts,[t("div",Ls,[l(p,{class:w(["print:hidden",{"md:fixed md:top-0 w-full z-20":e.$page.props.settings.sidebar=="mini"}]),onOnMobileMenuChange:i[0]||(i[0]=n=>o.show=n)},null,8,["class"]),t("div",{class:w(["md:flex md:grow md:items-stretch",e.$page.props.settings.sidebar!="mini"?"overflow-hidden":"pt"])},[e.$page.props.settings.sidebar=="mini"?(s(),h(_,{key:0,class:"hidden md:grid print:hidden ondark"})):(s(),h(y,{key:1,class:"hidden md:grid print:hidden ondark"})),l(L,{name:"slide-fade"},{default:r(()=>[o.show?(s(),h(y,{key:0,class:"block md:hidden print:hidden"})):f("",!0)]),_:1}),t("div",Us,[l(v,{class:"print:hidden"}),A(e.$slots,"default")])],2)])])])}const Fs=C(As,[["render",Is]]);export{Fs as A};
