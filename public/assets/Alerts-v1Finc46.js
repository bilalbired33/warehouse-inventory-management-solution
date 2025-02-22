import{S as g,p as v,m as k}from"./SearchFilter-J3sf2wIY.js";import{t as T}from"./throttle-DnWO0zlu.js";import{P as V}from"./Pagination-CTc1ABRF.js";import{T as A,a as $}from"./DropdownLink-C4dPXnWr.js";import{A as S}from"./AdminLayout-CAkQ7Os4.js";import{A as j}from"./AutoComplete-D56ZVB9O.js";import{T as B}from"./SectionTitle-B7yJArs8.js";import{_ as C,r as n,d as N,e as l,o as r,a as t,g as d,h as p,t as s,c as i,i as _,F as u,b as q}from"./app-PFKfXWEI.js";import"./_baseIsEqual-DTBiz6Tr.js";import"./Modal-c7b3PsDt.js";import"./ApplicationLogo-C_9BxMDe.js";import"./ApplicationMark-CKHzDXqr.js";import"./Label-C2KmBUfM.js";import"./InputError-S5X7Xksv.js";import"./v4-C6aID195.js";const O={components:{Pagination:V,AdminLayout:S,TecDropdown:A,AutoComplete:j,SearchFilter:g,TecDropdownLink:$,TecSectionTitle:B},props:{items:Object,filters:Object,warehouse:Object},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:T(function(){let e=v(this.form);this.$inertia.get(this.route("alerts.list",Object.keys(e).length?{...e,warehouse:this.warehouse.id}:{warehouse:this.warehouse.id,remember:"forget"}),{},{replace:!0,preserveState:!0})},150),deep:!0}},methods:{reset(){this.form=k(this.form,()=>null)}}},D={class:"px-4 md:px-0"},F={class:"mb-6 flex justify-between items-center print:hidden"},L={id:"dd-table",class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-y-visible overflow-x-auto"},P={class:"w-full overflow-y-visible"},R={class:"text-left font-bold"},E={class:"px-6 pt-6 pb-4"},I={class:"px-6 pt-6 pb-4"},U={class:"px-6 pt-6 pb-4 text-right"},z={class:"px-6 pt-6 pb-4 text-right"},G={class:"border-t"},H={class:"px-6 py-4"},J={class:"border-t"},K={class:"px-6 py-4"},M={class:"border-t"},Q={class:"px-6 py-4 text-right"},W={class:"border-t"},X={class:"px-6 py-4 text-right"},Y={key:0},Z={class:"border-t px-6 py-4",colspan:"5"};function tt(e,c,a,et,m,f){const b=n("tec-section-title"),y=n("search-filter"),w=n("pagination"),x=n("admin-layout");return r(),N(x,{title:e.$t("Alerts")},{default:l(()=>[t("div",D,[d(b,{class:"-mx-4 md:mx-0 mb-6"},{title:l(()=>[p(s(e.$t("Item quantity alerts for x",{x:a.warehouse.name})),1)]),description:l(()=>[p(s(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",F,[d(y,{modelValue:m.form.search,"onUpdate:modelValue":c[0]||(c[0]=o=>m.form.search=o),dropdown:!1,class:"w-full max-w-md mr-4",onReset:f.reset},null,8,["modelValue","onReset"])]),t("div",L,[t("table",P,[t("thead",null,[t("tr",R,[t("th",E,s(e.$t("Name")),1),t("th",I,s(e.$t("Code")),1),t("th",U,s(e.$t("Alert on")),1),t("th",z,s(e.$t("Stock")),1)])]),t("tbody",null,[(r(!0),i(u,null,_(a.items.data,o=>(r(),i("tr",{key:o.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[t("td",G,[t("div",H,s(o.name),1)]),t("td",J,[t("div",K,s(o.code),1)]),t("td",M,[t("div",Q,s(e.$number(o.alert_quantity)),1)]),t("td",W,[t("div",X,[(r(!0),i(u,null,_(o.stock,h=>(r(),i("div",{key:h.id},s(e.$number(h.quantity)),1))),128))])])]))),128)),a.items.data.length===0?(r(),i("tr",Y,[t("td",Z,s(e.$t("There is no data to display.")),1)])):q("",!0)])])]),d(w,{class:"mt-6",meta:a.items.meta,links:a.items.links},null,8,["meta","links"])])]),_:1},8,["title"])}const bt=C(O,[["render",tt]]);export{bt as default};
