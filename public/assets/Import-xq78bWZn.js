import{F as b}from"./FileInput-De2CDnn2.js";import{A as y}from"./AdminLayout-CAkQ7Os4.js";import{L as x}from"./LoadingButton-DuL9lXrz.js";import{T as v}from"./FormSection-DOK5FbWO.js";import{T as $}from"./SecondaryButton-DNoVYIkM.js";import{_ as k,r as n,d as w,e as s,o as r,g as d,h as c,t,a as o,n as S,c as l,b as p}from"./app-PFKfXWEI.js";import"./Label-C2KmBUfM.js";import"./Input-CjMYJgEv.js";import"./InputError-S5X7Xksv.js";import"./v4-C6aID195.js";import"./Modal-c7b3PsDt.js";import"./DropdownLink-C4dPXnWr.js";import"./ApplicationLogo-C_9BxMDe.js";import"./ApplicationMark-CKHzDXqr.js";import"./SectionTitle-B7yJArs8.js";const F={props:["parents"],components:{FileInput:b,AdminLayout:y,LoadingButton:x,TecFormSection:v,TecSecondaryButton:$},data(){return{selected:null,form:this.$inertia.form({_method:"POST",excel:null})}},methods:{updateFile(e){this.selected=e.target.files[0].name},submit(){this.$refs.file&&(this.form.excel=this.$refs.file.files[0]),this.form.post(route("warehouses.import.save"),{preserveScroll:!0})}}},B={for:"file-upload",class:"block font-medium text-gray-700"},C={class:"space-y-1 text-center"},T={class:"flex items-center justify-center text-gray-600 py-2"},N={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"},V={key:0,class:"font-semibold"},E={key:1,class:"font-semibold"},I={class:"pl-1"},L={class:"text-xs text-gray-700"},j={key:0,class:"inline-block pt-4"},A={class:"px-3 py-1 rounded-md border font-bold text-lg"},P={key:1,class:"mt-4 pt-2 text-red-600 rounded-md"};function W(e,m,z,D,i,a){const u=n("icons"),f=n("loading-button"),h=n("tec-form-section"),_=n("admin-layout");return r(),w(_,{title:e.$t("import_x",{x:e.$t("Warehouses")})},{default:s(()=>[d(h,{onSubmitted:a.submit},{title:s(()=>[c(t(e.$t("import_x",{x:e.$t("Warehouses")})),1)]),description:s(()=>[c(t(e.$t("Please upload the excel file to import records.")),1)]),form:s(()=>[o("div",null,[o("label",B,t(e.$t("Excel File")),1),o("div",{class:S([e.$page.props.errors.excel?"border-red-500":"border-gray-300","mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"])},[o("div",C,[d(u,{name:"doc-text",class:"mx-auto h-12 w-12 text-gray-400"}),o("div",T,[o("label",N,[i.selected?(r(),l("span",V,t(e.$t("Change file")),1)):(r(),l("span",E,t(e.$t("Select file")),1)),o("input",{ref:"file",type:"file",class:"sr-only",id:"file-upload",name:"file-upload",onChange:m[0]||(m[0]=(...g)=>a.updateFile&&a.updateFile(...g)),accept:".xls,.xlsx,application/vnd.ms-excel"},null,544)]),o("p",I,t(e.$t("or drag and drop")),1)]),o("div",L,[o("div",null,t(e.$t("Excel file should have code, name, phone, email, address & active columns.")),1),o("div",null,t(e.$t("You must fill the name & code columns along with active as `yes` or `no`")),1)]),i.selected?(r(),l("div",j,[o("div",A,t(e.$t("Selected File"))+": "+t(i.selected),1)])):p("",!0),e.$page.props.errors.excel?(r(),l("div",P,t(e.$page.props.errors.excel),1)):p("",!0)])],2)])]),actions:s(()=>[d(f,{loading:i.form.processing,disabled:i.form.processing},{default:s(()=>[c(t(e.$t("Import")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["onSubmitted"])]),_:1},8,["title"])}const oe=k(F,[["render",W]]);export{oe as default};
