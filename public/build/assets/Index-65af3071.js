import{S as T,p as B,m as j}from"./SearchFilter-c10f0e4c.js";import{t as C}from"./throttle-50742131.js";import{T as N}from"./Button-d4d49350.js";import{P as S}from"./Pagination-994addf5.js";import{S as U}from"./SelectInput-e6e66a62.js";import{A as O}from"./AdminLayout-e87dd638.js";import{T as F}from"./SectionTitle-8b846035.js";import{_ as R,r as a,o as n,d as p,e as r,a as t,g as l,h as _,t as o,c as i,i as g,F as k,n as A,b as u}from"./app-32ed258c.js";import"./_baseIsEqual-36c00515.js";import"./DropdownLink-b7a93580.js";import"./Label-fda955a2.js";import"./InputError-8d3cfe49.js";import"./v4-4a60fe23.js";import"./Modal-291f355a.js";import"./ApplicationLogo-67ce1691.js";import"./ApplicationMark-984b256c.js";const E={components:{TecButton:N,Pagination:S,AdminLayout:O,SelectInput:U,SearchFilter:T,TecSectionTitle:F},props:{roles:Object,users:Object,filters:Object},data(){return{form:{role:this.filters.role,search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:C(function(){let e=B(this.form);this.$inertia.visit(this.route("users.index",Object.keys(e).length?e:{remember:"forget"}),{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{goto(e){this.$can("update-users")&&this.$inertia.visit(e)},reset(){this.form=j(this.form,()=>null)}}},I={class:"px-4 md:px-0"},P={class:"mb-6 flex justify-between items-center print:hidden"},L={class:"block text-gray-700"},q={value:null},z=["value"],D={class:"mt-4 block text-gray-700"},W={value:null},G={value:"with"},H={value:"only"},J={class:"hidden lg:inline"},K={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},M={class:"w-full whitespace-nowrap"},Q={class:"text-left font-bold"},X={class:"px-6 pt-6 pb-4"},Y={class:"px-6 pt-6 pb-4"},Z={class:"px-6 pt-6 pb-4",colspan:"2"},ee=["onClick"],te={class:"border-t"},se={class:"focus:outline-none px-6 py-4 flex items-center focus:text-indigo-500"},oe=["src"],ne={class:"border-t"},le={class:"focus:outline-none px-6 py-4 flex items-center"},ae={class:"border-t"},re={class:"focus:outline-none px-6 py-4 flex items-center"},ie={class:"border-t w-px"},ce={key:0,class:"focus:outline-none px-4 flex items-center"},de={key:0},me={class:"border-t px-6 py-4",colspan:"4"};function ue(e,c,m,he,d,f){const w=a("tec-section-title"),b=a("select-input"),v=a("search-filter"),h=a("icons"),x=a("tec-button"),V=a("pagination"),$=a("admin-layout");return n(),p($,{title:e.$t("Users")},{default:r(()=>[t("div",I,[l(w,{class:"-mx-4 md:mx-0 mb-6"},{title:r(()=>[_(o(e.$t("Users")),1)]),description:r(()=>[_(o(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",P,[l(v,{modelValue:d.form.search,"onUpdate:modelValue":c[2]||(c[2]=s=>d.form.search=s),class:"w-full max-w-md mr-4",onReset:f.reset},{default:r(()=>[t("label",L,o(e.$t("Role"))+":",1),l(b,{modelValue:d.form.role,"onUpdate:modelValue":c[0]||(c[0]=s=>d.form.role=s),class:"mt-1 w-full"},{default:r(()=>[t("option",q,o(e.$t("All")),1),(n(!0),i(k,null,g(m.roles,s=>(n(),i("option",{key:s,value:s.name},o(e.$t(s.name)),9,z))),128))]),_:1},8,["modelValue"]),t("label",D,o(e.$t("Trashed"))+":",1),l(b,{modelValue:d.form.trashed,"onUpdate:modelValue":c[1]||(c[1]=s=>d.form.trashed=s),class:"mt-1 w-full"},{default:r(()=>[t("option",W,o(e.$t("Not Trashed")),1),t("option",G,o(e.$t("With Trashed")),1),t("option",H,o(e.$t("Only Trashed")),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue","onReset"]),l(x,{href:e.route("users.create")},{default:r(()=>[t("span",null,[l(h,{name:"plus",class:"w-5 h-5 lg:mr-2"})]),t("span",J,o(e.$t("create_x",{x:e.$t("User")})),1)]),_:1},8,["href"])]),t("div",K,[t("table",M,[t("tr",Q,[t("th",X,o(e.$t("Name")),1),t("th",Y,o(e.$t("Email")),1),t("th",Z,o(e.$t("Role")),1)]),(n(!0),i(k,null,g(m.users.data,s=>(n(),i("tr",{key:s.id,onClick:y=>f.goto(e.route("users.edit",s.id)),class:A(["hover:bg-gray-100 focus-within:bg-gray-100",{"cursor-pointer":e.$can("update-users")}])},[t("td",te,[t("div",se,[s.photo?(n(),i("img",{key:0,class:"block w-5 h-5 rounded-full mr-2 -my-2",src:s.photo},null,8,oe)):u("",!0),_(" "+o(s.name)+" ",1),s.two_factor_enabled?(n(),p(h,{key:1,name:"otp",class:"shrink-0 text-blue-600 ml-2"})):u("",!0),s.deleted_at?(n(),p(h,{key:2,name:"trash",class:"shrink-0 text-red-500 ml-2"})):u("",!0)])]),t("td",ne,[t("div",le,o(s.email),1)]),t("td",ae,[t("div",re,o(s.roles?s.roles.map(y=>e.$t(y)).join(", "):""),1)]),t("td",ie,[e.$can("update-users")?(n(),i("div",ce,[l(h,{name:"chevron-down",class:"transform -rotate-90 block w-4 h-4"})])):u("",!0)])],10,ee))),128)),m.users.data.length===0?(n(),i("tr",de,[t("td",me,o(e.$t("There is no data to display.")),1)])):u("",!0)])]),l(V,{class:"mt-6",meta:m.users.meta,links:m.users.links},null,8,["meta","links"])])]),_:1},8,["title"])}const Ne=R(E,[["render",ue]]);export{Ne as default};
