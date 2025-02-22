import{S as P,p as S,m as A}from"./SearchFilter-J3sf2wIY.js";import{t as R}from"./throttle-DnWO0zlu.js";import{D as j}from"./Dialog-CBfXGxNq.js";import{M as B}from"./Modal-c7b3PsDt.js";import I from"./Details-INIy0yq1.js";import{T as N}from"./Button-CYWIMkWL.js";import{P as F}from"./Pagination-CTc1ABRF.js";import{S as L}from"./SelectInput-Bl7BPvb9.js";import{T as O,a as E}from"./DropdownLink-C4dPXnWr.js";import{A as U}from"./AdminLayout-CAkQ7Os4.js";import{A as q}from"./AutoComplete-D56ZVB9O.js";import{T as W}from"./SectionTitle-B7yJArs8.js";import{_ as Y,r as a,d as g,e as m,o as l,a as t,g as n,h as u,t as o,c as f,i as G,n as b,b as h,F as k}from"./app-PFKfXWEI.js";import"./_baseIsEqual-DTBiz6Tr.js";import"./LoadingButton-DuL9lXrz.js";import"./DialogModal-DGhkFqan.js";import"./DangerButton-BRiD1LeJ.js";import"./SecondaryButton-DNoVYIkM.js";import"./JsBarcode-FqNbiSNK.js";import"./TrashedMessage-CoPSjYpa.js";import"./ApplicationLogo-C_9BxMDe.js";import"./ApplicationMark-CKHzDXqr.js";import"./Label-C2KmBUfM.js";import"./InputError-S5X7Xksv.js";import"./v4-C6aID195.js";const H={components:{Modal:B,Dialog:j,TecButton:N,Pagination:F,AdminLayout:U,TecDropdown:O,SelectInput:L,AutoComplete:q,SearchFilter:P,TransferDetails:I,TecDropdownLink:E,TecSectionTitle:W},props:{filters:Object,transfers:Object},data(){return{edit:null,close:!1,transfer:null,details:!1,confirm:!1,loading:!1,permanent:!1,restoreConf:!1,form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:R(function(){let e=S(this.form);this.$inertia.get(this.route("transfers.index",Object.keys(e).length?e:{remember:"forget"}),{},{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{goto(e){this.transfer&&this.transfer.id==e?this.details=!0:(this.loading=!0,axios.get(route("transfers.show",e)+"?json=yes").then(d=>{this.transfer=d.data,this.details=!0,this.loading=!1}))},showDetails(){this.details=!1},hideDetails(){this.details=!1},reset(){this.form=A(this.form,()=>null)},sendEmail(e){this.$inertia.get(route("notifications.transfer",e))},destroy(e){this.edit=e,this.confirm=!0},deleteItem(){this.$inertia.delete(route("transfers.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.edit=null,this.confirm=!1},restore(e){this.edit=e,this.restoreConf=!0},restoreItem(){this.$inertia.put(this.route("transfers.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.edit=null,this.restoreConf=!1},deletePermanently(e){this.edit=e,this.permanent=!0},deleteCategoryPermanently(){this.$inertia.delete(route("transfers.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.edit=null,this.permanent=!1},print(){window.print()}}},J={class:"px-4 md:px-0"},K={class:"mb-6 flex justify-between items-center print:hidden"},Q={class:"hidden lg:inline"},X={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},Z={class:"w-full whitespace-nowrap"},ee={class:"text-left font-bold"},te={class:"px-6 pt-6 pb-4"},se={class:"px-6 pt-6 pb-4"},oe={class:"px-6 pt-6 pb-4",colspan:"2"},ne=["onClick"],re={class:"px-6 py-4 flex items-center focus:text-indigo-500"},ie={class:"text-gray-500"},le={class:"text-gray-500"},ae={key:0,class:"flex items-center"},de={class:"text-gray-500"},ce=["onClick"],me={class:"px-6 py-4"},ue={class:"flex items-center"},fe={class:"text-gray-500 mr-1"},he={class:"flex items-center"},pe={class:"text-gray-500 mr-1"},ge={class:"flex items-center"},_e={class:"text-gray-500 mr-1"},ye=["onClick"],be={class:"px-6 py-4 flex items-center"},we={class:"w-full whitespace-normal line-clamp-3"},ve={class:"border-t w-16"},ke={class:"px-4 flex items-center print:hidden"},xe={key:0,class:"flex items-center"},Ce=["onClick"],Te=["onClick"],De=["onClick"],$e=["onClick"],Ve={key:0},ze={class:"border-t px-6 py-4",colspan:"4"},Me={class:"px-6 py-4 print:px-0"},Pe={key:0,class:"flex items-center justify-between print:hidden"},Se={class:"text-lg"},Ae={class:"hidden sm:inline"},Re={class:"-mr-2 flex items-center"},je={class:"mt-4 print-mt-0"};function Be(e,d,_,Ie,r,i){const x=a("tec-section-title"),w=a("auto-complete"),C=a("search-filter"),c=a("icons"),T=a("tec-button"),v=a("Link"),D=a("pagination"),$=a("transfer-details"),V=a("modal"),y=a("Dialog"),z=a("loading"),M=a("admin-layout");return l(),g(M,{title:e.$t("Transfers")},{default:m(()=>[t("div",J,[n(x,{class:"-mx-4 md:mx-0 mb-6"},{title:m(()=>[u(o(e.$t("Transfers")),1)]),description:m(()=>[u(o(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",K,[n(C,{modelValue:r.form.search,"onUpdate:modelValue":d[2]||(d[2]=s=>r.form.search=s),class:"w-full max-w-md mr-4",onReset:i.reset},{default:m(()=>[n(w,{id:"trashed",position:"left",label:e.$t("Trashed"),modelValue:r.form.trashed,"onUpdate:modelValue":d[0]||(d[0]=s=>r.form.trashed=s),class:"mt-1 w-full",suggestions:[{label:e.$t("Not Trashed"),value:null},{label:e.$t("With Trashed"),value:"with"},{label:e.$t("Only Trashed"),value:"only"}]},null,8,["label","modelValue","suggestions"]),n(w,{id:"draft",position:"left",label:e.$t("Draft"),modelValue:r.form.draft,"onUpdate:modelValue":d[1]||(d[1]=s=>r.form.draft=s),class:"mt-1 w-full",suggestions:[{label:e.$t("All"),value:null},{label:e.$t("Yes"),value:"yes"},{label:e.$t("No"),value:"no"}]},null,8,["label","modelValue","suggestions"])]),_:1},8,["modelValue","onReset"]),n(T,{href:e.route("transfers.create")},{default:m(()=>[t("span",null,[n(c,{name:"plus",class:"w-5 h-5 lg:mr-2"})]),t("span",Q,o(e.$t("create_x",{x:e.$t("Transfer")})),1)]),_:1},8,["href"])]),t("div",X,[t("table",Z,[t("thead",null,[t("tr",ee,[t("th",te,o(e.$t("Transfer")),1),t("th",se,o(e.$t("Relations")),1),t("th",oe,o(e.$t("Details")),1)])]),t("tbody",null,[(l(!0),f(k,null,G(_.transfers.data,(s,Ne)=>(l(),f("tr",{key:s.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[t("td",{class:b(["border-t",{"cursor-pointer":e.$can("read-transfers")}]),onClick:p=>i.goto(s.id)},[t("div",re,[t("div",null,[t("div",null,[t("span",ie,o(e.$t("Ref"))+":",1),u(" "+o(s.reference),1)]),t("div",null,[t("span",le,o(e.$t("Date"))+":",1),u(" "+o(e.$date(s.date)),1)]),s.draft==1?(l(),f("div",ae,[t("span",de,o(e.$t("Draft"))+":",1),n(c,{name:"tick",class:"text-green-600 ml-2"})])):h("",!0)]),s.deleted_at?(l(),g(c,{key:0,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):h("",!0)])],10,ne),t("td",{class:b(["border-t",{"cursor-pointer":e.$can("read-transfers")}]),onClick:p=>i.goto(s.id)},[t("div",me,[t("div",ue,[t("div",fe,o(e.$t("To"))+":",1),u(" "+o(s.to_warehouse.name),1)]),t("div",he,[t("div",pe,o(e.$t("From"))+":",1),u(" "+o(s.from_warehouse.name),1)]),t("div",ge,[t("div",_e,o(e.$t("User"))+":",1),u(" "+o(s.user.name),1)])])],10,ce),t("td",{class:b(["border-t max-w-lg min-w-56",{"cursor-pointer":e.$can("read-transfers")}]),onClick:p=>i.goto(s.id)},[t("div",be,[t("div",we,o(s.details),1)])],10,ye),t("td",ve,[t("div",ke,[e.$can(["create-transfers","import-transfers","export-transfers"])?(l(),f("div",xe,[n(v,{href:e.route("transfers.show",s.id),class:"flex items-center p-3 md:p-2 bg-blue-600 rounded-l-md text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[n(c,{name:"doc"})]),_:2},1032,["href"]),t("button",{onClick:p=>i.sendEmail(s.id),class:"flex items-center p-3 md:p-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:bg-indigo-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[n(c,{name:"email"})],8,Ce),e.$can("update-transfers")?(l(),g(v,{key:0,href:e.route("transfers.edit",s.id),class:"flex items-center p-3 md:p-2 bg-yellow-600 text-white hover:bg-yellow-700 focus:bg-yellow-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[n(c,{name:"edit"})]),_:2},1032,["href"])):h("",!0),s.deleted_at?(l(),f(k,{key:1},[t("button",{type:"button",onClick:p=>i.restore(s),class:"flex items-center p-3 md:p-2 bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[n(c,{name:"refresh"})],8,Te),t("button",{type:"button",onClick:p=>i.deletePermanently(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[n(c,{name:"trash"})],8,De)],64)):(l(),f("button",{key:2,type:"button",onClick:p=>i.destroy(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[n(c,{name:"trash"})],8,$e))])):h("",!0)])])]))),128)),_.transfers.data.length===0?(l(),f("tr",Ve,[t("td",ze,o(e.$t("There is no data to display.")),1)])):h("",!0)])])]),n(D,{class:"mt-6",meta:_.transfers.meta,links:_.transfers.links},null,8,["meta","links"])]),n(V,{show:r.details,"max-width":"4xl",closeable:!0,onClose:i.hideDetails},{default:m(()=>[t("div",Me,[r.details&&r.transfer?(l(),f("div",Pe,[t("div",Se,[u(o(e.$t("Transfer Details"))+" ",1),t("span",Ae,"("+o(r.transfer.reference)+")",1)]),t("div",Re,[t("button",{onClick:d[3]||(d[3]=s=>i.hideDetails()),class:"flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[n(c,{name:"cross",class:"h-5 w-5"})])])])):h("",!0),t("div",je,[r.transfer?(l(),g($,{key:0,transfer:r.transfer},null,8,["transfer"])):h("",!0)])])]),_:1},8,["show","onClose"]),n(y,{"max-width":"md",show:r.permanent,"action-type":"delete",title:"Delete Transfer!",close:i.closePermanentModal,"action-text":"Delete Permanently",action:i.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),n(y,{show:r.confirm,close:i.closeModal,action:i.deleteItem,"action-type":"delete",title:"Delete Transfer!","action-text":"Delete Transfer",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),n(y,{show:r.restoreConf,action:i.restoreItem,title:"Restore Transfer!",close:i.closeRestoreModal,"action-text":"Restore Transfer",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"]),r.loading?(l(),g(z,{key:0})):h("",!0)]),_:1},8,["title"])}const ct=Y(H,[["render",Be]]);export{ct as default};
