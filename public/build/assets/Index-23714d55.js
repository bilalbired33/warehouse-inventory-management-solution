import{S as A,p as B,m as R}from"./SearchFilter-c10f0e4c.js";import{t as F}from"./throttle-50742131.js";import N from"./Details-8ea6650f.js";import{D as O}from"./Dialog-73ba9e33.js";import{M as q}from"./Modal-291f355a.js";import{T as L}from"./Button-d4d49350.js";import{P as U}from"./Pagination-994addf5.js";import{S as W}from"./SelectInput-e6e66a62.js";import{T as E,a as Q}from"./DropdownLink-b7a93580.js";import{A as K}from"./AdminLayout-e87dd638.js";import{A as G}from"./AutoComplete-db11f07b.js";import{T as H}from"./SectionTitle-8b846035.js";import{_ as J,r as u,o as n,d as p,e as m,a as t,g as i,h,t as o,b as r,c,i as C,n as y,F as w}from"./app-32ed258c.js";import"./_baseIsEqual-36c00515.js";import"./JsBarcode-8e05172a.js";import"./LoadingButton-1a262643.js";import"./DialogModal-d32a0a51.js";import"./DangerButton-a5a78b3b.js";import"./SecondaryButton-7ef0b567.js";import"./Label-fda955a2.js";import"./InputError-8d3cfe49.js";import"./v4-4a60fe23.js";import"./ApplicationLogo-67ce1691.js";import"./ApplicationMark-984b256c.js";const X={components:{Modal:q,Dialog:O,TecButton:L,Pagination:U,ItemDetails:N,AdminLayout:K,TecDropdown:E,SelectInput:W,AutoComplete:G,SearchFilter:A,TecDropdownLink:Q,TecSectionTitle:H},props:{items:Object,filters:Object,warehouse:Array},data(){return{edit:null,item:null,close:!1,confirm:!1,details:!1,loading:!1,permanent:!1,restoreConf:!1,form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:F(function(){let e=B(this.form);this.$inertia.visit(this.route("items.index",Object.keys(e).length?e:{remember:"forget"}),{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{goto(e){this.item&&this.item.id==e.id?this.details=!0:(this.loading=!0,axios.get(route("items.show",e.id)+"?json=yes").then(g=>{this.item=g.data,this.details=!0,this.loading=!1}))},reset(){this.form=R(this.form,()=>null)},destroy(e){this.edit=e,this.confirm=!0},deleteItem(){this.$inertia.delete(route("items.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},showDetails(){this.details=!1},hideDetails(){this.details=!1},closeModal(){this.edit=null,this.confirm=!1},restore(e){this.edit=e,this.restoreConf=!0},restoreItem(){this.$inertia.put(this.route("items.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.edit=null,this.restoreConf=!1},deletePermanently(e){this.edit=e,this.permanent=!0},deleteCategoryPermanently(){this.$inertia.delete(route("items.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.edit=null,this.permanent=!1}}},Y={class:"px-4 md:px-0"},Z={class:"mb-6 flex justify-between items-center print:hidden"},ee={class:"flex items-center px-4 py-3 bg-gray-800 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},te=["href"],se={id:"dd-table",class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-y-visible overflow-x-auto"},oe={class:"w-full overflow-y-visible"},ne={class:"text-left font-bold"},ie={class:"px-6 pt-6 pb-4"},re={class:"px-6 pt-6 pb-4"},le={class:"px-6 pt-6 pb-4"},ae={class:"px-6 pt-6 pb-4"},ce={class:"px-6 pt-6 pb-4",colspan:"2"},de=["onClick"],ue={class:"px-6 py-4 max-w-md flex items-center focus:text-indigo-500"},me=["src"],he={class:"font-bold"},fe={key:0,class:"text-gray-600"},pe={class:"flex items-center"},ge={class:"text-gray-600 mr-1"},_e={class:"uppercase"},ye=["onClick"],be={class:"px-6 py-4 w-48"},we={class:"flex items-center"},ke={class:"text-gray-600 mr-1"},ve={class:"flex items-center"},xe={class:"text-gray-600 mr-1"},$e={key:0,class:"flex items-center"},Ce={class:"text-gray-600 mr-1"},Ie=["onClick"],De={class:"px-6 py-4 w-48"},Te={key:0,class:"flex items-center flex-wrap"},ze={class:"text-gray-600 mr-1"},Ve={key:0,class:"ml-1"},je=["onClick"],Se={class:"px-6 py-4 w-48"},Me={key:0},Pe={class:"text-gray-600"},Ae=["onClick"],Be={class:"px-6 py-4 w-56 whitespace-nowrap"},Re={class:"w-full flex flex-col items-center justify-between text-right"},Fe={class:"w-full flex items-center justify-between"},Ne={class:"text-gray-600"},Oe={class:"font-bold"},qe={key:0,class:"w-full flex items-center justify-between"},Le={class:"text-gray-600"},Ue={class:"font-bold"},We={class:"border-t w-16"},Ee={class:"px-4 flex items-center print:hidden"},Qe={key:0,class:"flex items-center"},Ke=["onClick"],Ge=["onClick"],He=["onClick"],Je={key:0},Xe={class:"border-t px-6 py-4",colspan:"5"},Ye={class:"rounded-md overflow-hidden"},Ze={class:"px-6 py-4 bg-white border-b flex items-center justify-between print:hidden"},et={class:"text-lg"},tt={key:0},st={class:"p-6 print:block print:h-full bg-gray-100"};function ot(e,g,b,nt,d,a){const I=u("tec-section-title"),D=u("auto-complete"),T=u("search-filter"),f=u("icons"),x=u("tec-dropdown-link"),z=u("tec-dropdown"),$=u("boolean"),k=u("Link"),V=u("pagination"),j=u("Item-details"),S=u("modal"),v=u("Dialog"),M=u("loading"),P=u("admin-layout");return n(),p(P,{title:e.$t("Items")},{default:m(()=>[t("div",Y,[i(I,{class:"-mx-4 md:mx-0 mb-6"},{title:m(()=>[h(o(e.$t("Items")),1)]),description:m(()=>[h(o(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",Z,[i(T,{modelValue:d.form.search,"onUpdate:modelValue":g[1]||(g[1]=s=>d.form.search=s),class:"w-full max-w-md mr-4",close:d.close,onReset:a.reset},{default:m(()=>[i(D,{id:"trashed",position:"left",label:e.$t("Trashed"),modelValue:d.form.trashed,"onUpdate:modelValue":g[0]||(g[0]=s=>d.form.trashed=s),class:"mt-1 w-full",suggestions:[{label:e.$t("Not Trashed"),value:null},{label:e.$t("With Trashed"),value:"with"},{label:e.$t("Only Trashed"),value:"only"}]},null,8,["label","modelValue","suggestions"])]),_:1},8,["modelValue","close","onReset"]),e.$can(["create-items","import-items","export-items"])?(n(),p(z,{key:0,align:"right",width:"48"},{trigger:m(()=>[t("button",ee,[i(f,{name:"menu"})])]),content:m(()=>[e.$can("create-items")?(n(),p(x,{key:0,href:e.route("items.create")},{default:m(()=>[h(o(e.$t("create_x",{x:e.$t("Item")})),1)]),_:1},8,["href"])):r("",!0),e.$can("export-items")?(n(),c("a",{key:1,href:e.route("items.export"),class:"block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},o(e.$t("export_x",{x:e.$t("Items")})),9,te)):r("",!0),e.$can("import-items")?(n(),p(x,{key:2,href:e.route("items.import")},{default:m(()=>[h(o(e.$t("import_x",{x:e.$t("Items")})),1)]),_:1},8,["href"])):r("",!0)]),_:1})):r("",!0)]),t("div",se,[t("table",oe,[t("tr",ne,[t("th",ie,o(e.$t("Name")),1),t("th",re,o(e.$t("Options")),1),t("th",le,o(e.$t("Variants")),1),t("th",ae,o(e.$t("Relations")),1),t("th",ce,o(e.$t("Stock")),1)]),(n(!0),c(w,null,C(b.items.data,s=>(n(),c("tr",{key:s.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[t("td",{class:y(["border-t",{"cursor-pointer":e.$can("read-items")}]),onClick:l=>a.goto(s)},[t("div",ue,[s.photo?(n(),c("img",{key:0,class:"block w-16 h-16 rounded-sm mr-2 -my-2",src:s.photo},null,8,me)):r("",!0),t("div",null,[t("div",he,o(s.name),1),t("div",null,[h(o(e.$t("Code"))+": ",1),t("strong",null,o(s.code),1)]),s.sku?(n(),c("div",fe,o(e.$t("SKU"))+": "+o(s.sku),1)):r("",!0),t("div",pe,[t("span",ge,o(e.$t("Symbology"))+":",1),h(),t("span",_e,o(s.symbology),1)])]),s.deleted_at?(n(),p(f,{key:1,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):r("",!0)])],10,de),t("td",{class:y(["border-t",{"cursor-pointer":e.$can("read-items")}]),onClick:l=>a.goto(s)},[t("div",be,[t("div",we,[t("span",ke,o(e.$t("Track Weight")),1),i($,{value:s.track_weight,class:"w-3 h-3 ml-1"},null,8,["value"])]),t("div",ve,[t("span",xe,o(e.$t("Track Quantity")),1),i($,{value:s.track_quantity,class:"w-3 h-3 ml-2"},null,8,["value"])]),s.track_quantity==1?(n(),c("div",$e,[t("span",Ce,o(e.$t("Alert on"))+":",1),t("span",null,o(e.$number(s.alert_quantity||0)),1)])):r("",!0)])],10,ye),t("td",{class:y(["border-t",{"cursor-pointer":e.$can("read-items")}]),onClick:l=>a.goto(s)},[t("div",De,[s.has_variants==1?(n(),c("div",Te,[t("span",ze,o(e.$t("Variants"))+":",1),(n(!0),c(w,null,C(s.variants,l=>(n(),c(w,{key:l.name},[l.name?(n(),c("div",Ve,[t("strong",null,o(e.$t(l.name))+":",1),h(" "+o(l.option.filter(_=>_).map(_=>e.$t(_)).join(", ")),1)])):r("",!0)],64))),128))])):r("",!0)])],10,Ie),t("td",{class:y(["border-t",{"cursor-pointer":e.$can("read-items")}]),onClick:l=>a.goto(s)},[t("div",Se,[h(o(s.categories.map(l=>l.name).join(", "))+" ",1),s.unit?(n(),c("div",Me,[t("span",Pe,o(e.$t("Unit"))+":",1),h(" "+o(s.unit.name),1)])):r("",!0)])],10,je),t("td",{class:y(["border-t",{"cursor-pointer":e.$can("read-items")}]),onClick:l=>a.goto(s)},[t("div",Be,[t("div",Re,[t("div",Fe,[t("span",Ne,o(e.$t("Quantity"))+":",1),t("span",Oe,o(e.$number(s.stock.reduce((l,_)=>l+parseFloat(_.quantity),0))),1)]),s.track_weight==1?(n(),c("div",qe,[t("span",Le,o(e.$t("Weight"))+":",1),t("span",Ue,o(e.$number(s.stock.reduce((l,_)=>l+parseFloat(_.weight),0))),1)])):r("",!0)])])],10,Ae),t("td",We,[t("div",Ee,[e.$can(["create-items","import-items","export-items"])?(n(),c("div",Qe,[e.$can("trail-items")?(n(),p(k,{key:0,href:e.route("items.trail",s.id),class:"flex items-center p-3 md:p-2 bg-blue-600 rounded-l-md text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[i(f,{name:"list"})]),_:2},1032,["href"])):r("",!0),i(k,{href:e.route("items.show",s.id),class:"flex items-center p-3 md:p-2 bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[i(f,{name:"doc"})]),_:2},1032,["href"]),e.$can("update-items")?(n(),p(k,{key:1,href:e.route("items.edit",s.id),class:"flex items-center p-3 md:p-2 bg-yellow-600 text-white hover:bg-yellow-700 focus:bg-yellow-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[i(f,{name:"edit"})]),_:2},1032,["href"])):r("",!0),s.deleted_at?(n(),c(w,{key:2},[t("button",{type:"button",onClick:l=>a.restore(s),class:"flex items-center p-3 md:p-2 bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[i(f,{name:"refresh"})],8,Ke),t("button",{type:"button",onClick:l=>a.deletePermanently(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[i(f,{name:"trash"})],8,Ge)],64)):(n(),c("button",{key:3,type:"button",onClick:l=>a.destroy(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[i(f,{name:"trash"})],8,He))])):r("",!0)])])]))),128)),b.items.data.length===0?(n(),c("tr",Je,[t("td",Xe,o(e.$t("There is no data to display.")),1)])):r("",!0)])]),i(V,{class:"mt-6",meta:b.items.meta,links:b.items.links},null,8,["meta","links"])]),i(S,{show:d.details,"max-width":"4xl",closeable:!0,onClose:a.hideDetails},{default:m(()=>[t("div",Ye,[t("div",Ze,[t("div",et,[h(o(e.$t("Item Details"))+" ",1),d.details&&d.item?(n(),c("span",tt,"("+o(e.$t(d.item.name))+")",1)):r("",!0)]),t("button",{onClick:g[2]||(g[2]=s=>a.hideDetails()),class:"flex items-center justify-center -mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[i(f,{name:"cross",class:"h-5 w-5"})])]),t("div",st,[d.item?(n(),p(j,{key:0,item:d.item,modal:!0},null,8,["item"])):r("",!0)])])]),_:1},8,["show","onClose"]),i(v,{"max-width":"md",show:d.permanent,"action-type":"delete",title:"Delete Item?",close:a.closePermanentModal,"action-text":"Delete Permanently",action:a.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),i(v,{show:d.confirm,close:a.closeModal,action:a.deleteItem,"action-type":"delete",title:"Delete Item?","action-text":"Delete Item",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),i(v,{show:d.restoreConf,action:a.restoreItem,title:"Restore Item!",close:a.closeRestoreModal,"action-text":"Restore Item",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"]),d.loading?(n(),p(M,{key:0})):r("",!0)]),_:1},8,["title"])}const zt=J(X,[["render",ot]]);export{zt as default};
