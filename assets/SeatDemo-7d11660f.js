import{_ as f,u as g,r as c,b as r,o as x,c as b,a as e,d as i,F as v,e as w,p as y,f as S}from"./index-525fdb06.js";const n=s=>(y("data-v-d88fefd3"),s=s(),S(),s),k=n(()=>e("div",{class:"flex justify-content-center py-5 px-3"},[e("i",{class:"pi pi-fw pi-user mr-2 text-2xl"}),e("p",{class:"m-0 text-lg"},"Registro al Sistema BoldataSat")],-1)),I=n(()=>e("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Ingrese su correo electronico",-1)),V=n(()=>e("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Ingrese su contraseña",-1)),h=n(()=>e("div",{class:"flex align-items-center py-5 px-3"},[e("p",{class:"m-0 text-lg bg-red-300"},"Si no recuerda su código de cliente, contactese con la empresa BoldatSat.")],-1)),B={__name:"SeatDemo",setup(s){const u=g();c([{label:"Verificación",to:"/uikit/menu"},{label:"Registro",to:"/uikit/menu/seat"},{label:"Confirmación",to:"/uikit/menu/confirmation"}]);const o=c({email:"",password:""}),d=async()=>{try{const{data:t}=await w.loginConLAravel(o.value);console.log("++++++",t),localStorage.setItem("accessToken",t.accessToken),t.usuario.ability.push({action:"read",subject:"Auth"}),localStorage.setItem("userData",JSON.stringify(t)),ability.update(t.usuario.ability),u.push({name:"Perfil"})}catch{alert("Ocurrio un error al autenticar el usuario")}};return(t,a)=>{const p=r("InputText"),m=r("Password"),_=r("Button");return x(),b(v,null,[k,e("div",null,[I,i(p,{id:"email1",type:"email",placeholder:"pepito@gmail.com",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:o.value.email,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value.email=l)},null,8,["modelValue"]),V,i(m,{id:"password1",modelValue:o.value.password,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value.password=l),placeholder:"************",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:"padding:1rem"},null,8,["modelValue"]),h,i(_,{type:"button",label:"Verificar",onClick:a[2]||(a[2]=l=>d()),class:"w-full p-3 text-xl"})])],64)}}},D=f(B,[["__scopeId","data-v-d88fefd3"]]);export{D as default};
