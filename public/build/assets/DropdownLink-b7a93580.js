import{_ as g,y as h,s as v,u as y,o as r,c,a as i,f as l,m as d,p as f,g as k,e as p,n as u,T as w,r as C,d as b}from"./app-32ed258c.js";const _={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-2","bg-white"]},closeOnClick:{default:!0}},setup(){let t=h(!1);const e=s=>{t.value&&s.keyCode===27&&(t.value=!1)};return v(()=>document.addEventListener("keydown",e)),y(()=>document.removeEventListener("keydown",e)),{open:t}},computed:{widthClass(){return{40:"w-40",48:"w-48",56:"w-56",64:"w-64"}[this.width.toString()]},alignmentClasses(){return this.align==="left"?"origin-top-left left-0":this.align==="right"?"origin-top-right right-0":this.align==="top-right"?"origin-bottom-right right-0 bottom-100":"origin-top"}},methods:{close(){this.closeOnClick&&(this.open=!1)}}},x={class:"relative"};function L(t,e,s,n,m,o){return r(),c("div",x,[i("div",{onClick:e[0]||(e[0]=a=>n.open=!n.open),id:"dd-div"},[l(t.$slots,"trigger")]),d(i("div",{class:"fixed inset-0 z-40",onClick:e[1]||(e[1]=a=>n.open=!1)},null,512),[[f,n.open]]),k(w,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:p(()=>[d(i("div",{onClick:e[2]||(e[2]=(...a)=>o.close&&o.close(...a)),style:{display:"none"},class:u([[o.widthClass,o.alignmentClasses],"absolute z-50 my-2 rounded-md shadow-lg"])},[i("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",s.contentClasses])},[l(t.$slots,"content")],2)],2),[[f,n.open]])]),_:3})])}const z=g(_,[["render",L]]),T={props:["href","as"]},$={key:0,type:"submit",class:"block w-full px-4 py-2 leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"};function B(t,e,s,n,m,o){const a=C("Link");return r(),c("div",null,[s.as=="button"?(r(),c("button",$,[l(t.$slots,"default")])):(r(),b(a,{key:1,href:s.href,class:"block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:p(()=>[l(t.$slots,"default")]),_:3},8,["href"]))])}const D=g(T,[["render",B]]);export{z as T,D as a};
