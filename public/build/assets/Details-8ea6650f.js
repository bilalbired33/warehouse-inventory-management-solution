import{J as w}from"./JsBarcode-8e05172a.js";import{_ as f,L as v,r as p,o as i,c as n,a as t,b as l,t as e,d as r,F as _,i as h,n as g,g as x,e as j,h as y}from"./app-32ed258c.js";import{M as C}from"./Modal-291f355a.js";const L={components:{Loading:v,Modal:C},props:{item:Object,modal:{default:!1}},data(){return{show:!1,loading:!1,variations:[]}},mounted(){w(".barcode").init(),this.item.stock||(this.item.stock=this.item.all_stock)},updated(){w(".barcode").init()}},T={key:0,class:"bg-gray-100 -mx-6 px-4 md:px-6 md:rounded-md print:h-full print:block print:m-0 print:pt-0"},M={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto print:m-0 print:block"},V={class:"w-full my-4"},B={class:"px-6 py-2 whitespace-nowrap"},N=["src"],S={class:"px-6 py-2"},q=["jsbarcode-value","jsbarcode-format"],H={class:"px-6 py-2 whitespace-nowrap"},D={class:"px-6 py-2"},Q={class:"font-bold"},U={class:"px-6 py-2 whitespace-nowrap"},z={class:"px-6 py-2"},F={class:"px-6 py-2 whitespace-nowrap"},J={class:"px-6 py-2"},K={key:0},R={class:"px-6 py-2 whitespace-nowrap"},W={class:"px-6 py-2"},E={class:"px-6 py-2 whitespace-nowrap"},I={class:"px-6 py-2"},O={key:0},A={class:"px-6 py-2 whitespace-nowrap"},G={class:"px-6 py-2"},P={key:0},X={class:"px-6 py-2 whitespace-nowrap"},Y={class:"px-6 py-2"},Z={class:"px-6 py-2 whitespace-nowrap"},$={class:"px-6 py-2"},tt={class:"px-6 py-2 whitespace-nowrap"},et={class:"px-6 py-2"},st={key:1},ot={class:"px-6 py-2 whitespace-nowrap"},it={class:"px-6 py-2"},nt={class:"px-6 py-2 whitespace-nowrap"},at={class:"px-6 py-2"},dt={key:0},lt={class:"-mx-4 md:mx-0 print:m-0 print:block"},rt={class:"mt-6 avoid print:mt-0"},ct={class:"bg-white pt-3 pb-2 md:rounded-md shadow overflow-x-auto print:mb-2"},mt={class:"text-lg px-4 font-bold -my-3 py-3"},_t={class:"w-full mt-3"},ht={class:"border-t pl-4 pr-2 py-2"},ut=["innerHTML"],pt={key:1},yt={class:"border-t pr-4 pl-2 py-2 text-right"},wt={key:0},gt={key:0,class:"mt-6 -mx-4 md:mx-0 flex flex-col gap-6 avoid print:mb-2 print:block"},bt={class:"flex items-center"},kt={class:"text-gray-500 mr-2"},ft=["innerHTML"],vt={class:"text-gray-500 mr-2"},xt=t("div",{class:"-mx-4 pb-4 border-b print:hidden"},null,-1),jt={class:"flex flex-wrap mt-4 -mb-4 -mr-4 print:m-0"},Ct={class:"px-4 mb-4 mr-4 border py-2 md:rounded-md print:mb-2 print:rounded"},Lt={class:"text-lg font-bold"},Tt={class:"w-full"},Mt={key:0},Vt={class:"pr-3 py-2"},Bt={class:"pl-3 py-2"},Nt={key:1},St={class:"pr-3 py-2"},qt={class:"pl-3 py-2"},Ht={key:2},Dt={class:"pr-3 py-2"},Qt={class:"pl-3 py-2"},Ut={class:"print:block print:h-full"},zt=["src"];function Ft(s,u,o,Jt,c,Kt){const m=p("icons"),b=p("loading"),k=p("modal");return o.item?(i(),n("div",T,[t("div",M,[t("table",V,[t("tr",null,[t("td",B,[t("button",{type:"button",onClick:u[0]||(u[0]=()=>c.show=!0)},[o.item.photo?(i(),n("img",{key:0,class:"block w-24 h-24 rounded-sm mr-2 -my-2",src:o.item.photo},null,8,N)):l("",!0)])]),t("td",S,[(i(),n("svg",{class:"barcode","jsbarcode-width":"2","jsbarcode-height":"70","jsbarcode-fontSize":"12","jsbarcode-value":o.item.code,"jsbarcode-format":o.item.symbology},null,8,q))])]),t("tr",null,[t("td",H,e(s.$t("Name")),1),t("td",D,[t("span",Q,e(s.$t(o.item.name)),1)])]),t("tr",null,[t("td",U,e(s.$t("SKU")),1),t("td",z,e(o.item.sku),1)]),t("tr",null,[t("td",F,e(s.$t("Category")),1),t("td",J,e(s.$t(o.item.categories[0].name)),1)]),o.item.categories.length>2?(i(),n("tr",K,[t("td",R,e(s.$t("Child Category")),1),t("td",W,e(s.$t(o.item.categories[1].name)),1)])):l("",!0),t("tr",null,[t("td",E,e(s.$t("Rack")),1),t("td",I,[o.item.rack_location?(i(),n("div",O,e(o.item.rack_location),1)):l("",!0)])]),t("tr",null,[t("td",A,e(s.$t("Unit")),1),t("td",G,[o.item.unit?(i(),n("div",P,e(s.$t(o.item.unit.name)),1)):l("",!0)])]),t("tr",null,[t("td",X,e(s.$t("Track Serials")),1),t("td",Y,[o.item.track_serials?(i(),r(m,{key:0,name:"tick",class:"text-green-600"})):(i(),r(m,{key:1,name:"cross",class:"text-red-600"}))])]),t("tr",null,[t("td",Z,e(s.$t("Track Weight")),1),t("td",$,[o.item.track_weight?(i(),r(m,{key:0,name:"tick",class:"text-green-600"})):(i(),r(m,{key:1,name:"cross",class:"text-red-600"}))])]),t("tr",null,[t("td",tt,e(s.$t("Track Quantity")),1),t("td",et,[o.item.track_quantity?(i(),r(m,{key:0,name:"tick",class:"text-green-600"})):(i(),r(m,{key:1,name:"cross",class:"text-red-600"}))])]),o.item.has_variants?(i(),n("tr",st,[t("td",ot,e(s.$t("Variants")),1),t("td",it,[(i(!0),n(_,null,h(o.item.variants,d=>(i(),n("div",{key:d.name},[t("strong",null,e(s.$t(d.name))+":",1),y(" "+e(d.option.filter(a=>a).map(a=>s.$t(a)).join(", ")),1)]))),128))])])):l("",!0),t("tr",null,[t("td",nt,e(s.$t("Details")),1),t("td",at,[o.item.details?(i(),n("span",dt,e(s.$t(o.item.details)),1)):l("",!0)])])])]),t("div",lt,[t("div",rt,[t("div",{class:g(["grid gap-6",o.modal?"grid-cols-1 lg:grid-cols-2":"grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"])},[(i(!0),n(_,null,h(o.item.stock,d=>(i(),n("div",{key:"w_"+d.id,class:"w-full print:m-3 print:border print:rounded-md print:w-5/12"},[t("div",ct,[t("h4",mt,e(s.$t(d[0].warehouse.name))+" ("+e(d[0].warehouse.code)+")",1),t("table",_t,[(i(!0),n(_,null,h(d,a=>(i(),n("tr",{key:a.id,class:g({"font-bold":!a.variation})},[t("td",ht,[a.variation?(i(),n("span",{key:0,innerHTML:s.$meta(a.variation.meta)},null,8,ut)):(i(),n("span",pt,e(s.$t("Quantity")),1))]),t("td",yt,[y(e(s.$number(a.quantity))+" "+e(o.item.unit?o.item.unit.code:"")+" ",1),o.item.track_weight?(i(),n("span",wt,"("+e(s.$number(a.weight))+" "+e(s.$settings.weight_unit)+")",1)):l("",!0)])],2))),128))])])]))),128))],2)])]),o.item.has_variants&&c.variations.length?(i(),n("div",gt,[c.loading?(i(),r(b,{key:0})):l("",!0),(i(!0),n(_,null,h(c.variations,d=>(i(),n("div",{key:d.sku,class:"bg-white p-4 md:rounded-md shadow overflow-x-auto"},[t("div",bt,[t("span",kt,e(s.$t("Variation"))+":",1),t("h4",{class:"text-lg font-bold",innerHTML:s.$meta(d.meta)},null,8,ft)]),t("div",null,[t("span",vt,e(s.$t("SKU"))+":",1),y(" "+e(d.sku),1)]),xt,t("div",jt,[(i(!0),n(_,null,h(d.stock,a=>(i(),n("div",{key:a.id,class:"w-full lg:w-1/2 xl:w-1/3 avoid print:m-2 print:rounded-md print:w-5/12"},[t("div",Ct,[t("h4",Lt,e(s.$t(a.warehouse.name))+" ("+e(a.warehouse.code)+")",1),t("table",Tt,[o.item.track_quantity?(i(),n("tr",Mt,[t("td",Vt,e(s.$t("Quantity")),1),t("td",Bt,e(s.$number(a.quantity))+" "+e(o.item.unit?o.item.unit.code:""),1)])):l("",!0),o.item.track_weight?(i(),n("tr",Nt,[t("td",St,e(s.$t("Weight")),1),t("td",qt,e(s.$number(a.weight))+" "+e(s.$settings.weight_unit),1)])):l("",!0),a.rack_location?(i(),n("tr",Ht,[t("td",Dt,e(s.$t("Rack Location")),1),t("td",Qt,e(a.rack_location),1)])):l("",!0)])])]))),128))])]))),128))])):l("",!0),x(k,{show:c.show,"max-width":"2xl",closeable:!0,transparent:!0,onClose:u[1]||(u[1]=()=>c.show=!1)},{default:j(()=>[t("div",Ut,[t("img",{class:"block max-w-full mx-auto rounded-md",src:o.item.photo},null,8,zt)])]),_:1},8,["show"])])):l("",!0)}const It=f(L,[["render",Ft]]);export{It as default};
