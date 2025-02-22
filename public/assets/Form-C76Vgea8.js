import{D}from"./Dialog-CBfXGxNq.js";import{T as M}from"./TextInput-CNd7BHfN.js";import{S as P}from"./SelectInput-Bl7BPvb9.js";import{A as x}from"./AdminLayout-CAkQ7Os4.js";import{L as B}from"./LoadingButton-DuL9lXrz.js";import{T as A}from"./DialogModal-DGhkFqan.js";import{T as L}from"./TrashedMessage-CoPSjYpa.js";import{T as R}from"./FormSection-DOK5FbWO.js";import{T as N}from"./DangerButton-BRiD1LeJ.js";import{T as F}from"./SectionTitle-B7yJArs8.js";import{T as U}from"./ActionMessage-Disc29dP.js";import{T as I}from"./SecondaryButton-DNoVYIkM.js";import{_ as j,r as d,d as h,e as i,o as a,g as m,a as f,c,h as u,t as l,F as p,b as g,i as E}from"./app-PFKfXWEI.js";import"./Label-C2KmBUfM.js";import"./Input-CjMYJgEv.js";import"./InputError-S5X7Xksv.js";import"./v4-C6aID195.js";import"./Modal-c7b3PsDt.js";import"./DropdownLink-C4dPXnWr.js";import"./ApplicationLogo-C_9BxMDe.js";import"./ApplicationMark-CKHzDXqr.js";const O={props:["edit","parents"],components:{Dialog:D,TextInput:M,AdminLayout:x,SelectInput:P,LoadingButton:B,TecDialogModal:A,TecFormSection:R,TecDangerButton:N,TrashedMessage:L,TecSectionTitle:F,TecActionMessage:U,TecSecondaryButton:I},data(){return{confirm:!1,permanent:!1,restoreConf:!1,form:this.$inertia.form({_method:this.edit?"put":"post",name:this.edit?this.edit.name:null,code:this.edit?this.edit.code:null,parent_id:this.edit?this.edit.parent_id:null})}},methods:{update(){this.form.post(this.edit?this.route("categories.update",this.edit.id):this.route("categories.store"),{preserveScroll:!0})},destroy(){this.confirm=!0},deleteCategory(){this.form.delete(route("categories.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.confirm=!1},restore(){this.restoreConf=!0},restoreCategory(){this.$inertia.put(this.route("categories.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.restoreConf=!1},deletePermanently(){this.permanent=!0},deleteCategoryPermanently(){this.form.delete(route("categories.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.permanent=!1}}},q={class:"flex items-center"},z={class:"flex flex-col gap-y-6"},G={value:""},H=["value"],J={class:"w-full flex items-center justify-between"},K={key:1},Q={class:"flex items-center"};function W(e,o,r,X,n,s){const C=d("Link"),T=d("trashed-message"),b=d("text-input"),k=d("select-input"),w=d("tec-action-message"),S=d("loading-button"),v=d("tec-form-section"),y=d("Dialog"),V=d("admin-layout");return a(),h(V,{title:e.$t(r.edit?"edit_x":"create_x",{x:e.$t("Category")})},{default:i(()=>[m(v,{onSubmitted:s.update},{title:i(()=>[f("div",q,[r.edit?(a(),c(p,{key:0},[m(C,{class:"text-blue-600 hover:text-blue-700",href:e.route("categories.index")},{default:i(()=>[u(l(e.$t("Categories")),1)]),_:1},8,["href"]),o[5]||(o[5]=f("span",{class:"text-blue-600 font-medium mx-2"},"/",-1)),u(" "+l(r.edit.name),1)],64)):(a(),c(p,{key:1},[u(l(e.$t("create_x",{x:e.$t("Category")})),1)],64))])]),description:i(()=>[u(l(r.edit?e.$t("Update the record by modifying the details in the form below"):e.$t("Please fill the form below to add new record.")),1)]),form:i(()=>[r.edit&&r.edit.deleted_at?(a(),h(T,{key:0,class:"mb-6",onRestore:s.restore},{default:i(()=>[u(l(e.$t("This record has been deleted.")),1)]),_:1},8,["onRestore"])):g("",!0),f("div",z,[m(b,{modelValue:n.form.name,"onUpdate:modelValue":o[0]||(o[0]=t=>n.form.name=t),error:e.$page.props.errors.name,label:e.$t("Name")},null,8,["modelValue","error","label"]),m(b,{modelValue:n.form.code,"onUpdate:modelValue":o[1]||(o[1]=t=>n.form.code=t),error:e.$page.props.errors.code,label:e.$t("Code")},null,8,["modelValue","error","label"]),r.parents&&r.parents.length>1?(a(),h(k,{key:0,modelValue:n.form.parent_id,"onUpdate:modelValue":o[2]||(o[2]=t=>n.form.parent_id=t),label:e.$t("Parent Category"),error:e.$page.props.errors.parent_id},{default:i(()=>[f("option",G,l(e.$t("Select")),1),(a(!0),c(p,null,E(r.parents,t=>{var _;return a(),c(p,{key:t.id},[t.id!=((_=r.edit)==null?void 0:_.id)?(a(),c("option",{key:0,value:t.id},l(t.name),9,H)):g("",!0)],64)}),128))]),_:1},8,["modelValue","label","error"])):g("",!0)])]),actions:i(()=>[f("div",J,[r.edit?(a(),c(p,{key:0},[r.edit.deleted_at?(a(),c("button",{key:1,type:"button",onClick:o[4]||(o[4]=(...t)=>s.deletePermanently&&s.deletePermanently(...t)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},l(e.$t("delete_x",{x:e.$t("Permanently")})),1)):(a(),c("button",{key:0,type:"button",onClick:o[3]||(o[3]=(...t)=>s.destroy&&s.destroy(...t)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},l(e.$t("delete_x",{x:e.$t("Category")})),1))],64)):(a(),c("div",K)),f("div",Q,[m(w,{on:n.form.recentlySuccessful,class:"mr-3"},{default:i(()=>[u(l(e.$t("Saved.")),1)]),_:1},8,["on"]),m(S,{type:"submit",loading:n.form.processing,disabled:n.form.processing},{default:i(()=>[u(l(e.$t("Save")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["onSubmitted"]),m(y,{"max-width":"md",show:n.permanent,"action-type":"delete",title:"Delete Category?",close:s.closePermanentModal,"action-text":"Delete Permanently",action:s.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),m(y,{show:n.confirm,close:s.closeModal,"action-type":"delete",action:s.deleteCategory,title:"Delete Category?","action-text":"Delete Category",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),m(y,{show:n.restoreConf,action:s.restoreCategory,title:"Restore Category!",close:s.closeRestoreModal,"action-text":"Restore Category",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"])]),_:1},8,["title"])}const be=j(O,[["render",W]]);export{be as default};
