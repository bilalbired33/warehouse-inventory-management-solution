import x from"./Details-BDBAOWNM.js";import{A as g}from"./AdminLayout-CAkQ7Os4.js";import{T as b}from"./SectionTitle-B7yJArs8.js";import{_ as v,r as o,d as a,e as s,o as m,a as t,g as r,h as l,t as c,b as f}from"./app-PFKfXWEI.js";import"./JsBarcode-FqNbiSNK.js";import"./Modal-c7b3PsDt.js";import"./DropdownLink-C4dPXnWr.js";import"./ApplicationLogo-C_9BxMDe.js";import"./ApplicationMark-CKHzDXqr.js";const w={props:{item:Object},components:{AdminLayout:g,ItemDetails:x,TecSectionTitle:b},methods:{print(){window.print()}}},k={class:"px-4 md:px-0"},$={class:"flex items-start justify-between print:hidden"},j={class:"flex items-center"},C={class:"flex"};function N(e,i,n,T,V,p){const d=o("Link"),_=o("tec-section-title"),u=o("icons"),h=o("item-details"),y=o("admin-layout");return m(),a(y,{title:e.$t("Item Details")},{default:s(()=>[t("div",k,[t("div",$,[r(_,{class:"-mx-4 md:mx-0 mb-6 print:hidden"},{title:s(()=>[t("div",j,[r(d,{class:"text-blue-600 hover:text-blue-700",href:e.route("items.index")},{default:s(()=>[l(c(e.$t("Items")),1)]),_:1},8,["href"]),i[1]||(i[1]=t("span",{class:"text-blue-600 font-medium mx-2"},"/",-1)),l(" "+c(e.$t(n.item.name)),1)])]),description:s(()=>[l(c(e.$t("Please review the item details below")),1)]),_:1}),t("div",C,[t("button",{onClick:i[0]||(i[0]=B=>p.print()),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"},[r(u,{name:"printer",class:"h-5 w-5"})]),e.$can("update-items")?(m(),a(d,{key:0,href:e.route("items.edit",n.item.id),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"},{default:s(()=>[r(u,{name:"edit",class:"h-5 w-5"})]),_:1},8,["href"])):f("",!0)])]),n.item?(m(),a(h,{key:0,item:n.item,class:"mt-0 pt-0"},null,8,["item"])):f("",!0)])]),_:1},8,["title"])}const E=v(w,[["render",N]]);export{E as default};
