import{b as p,q as x,W as f,r as g,j as e,a as j,d as w}from"./app-BUPJ0MyC.js";import{G as h}from"./GuestLayout-Cnn8Feb9.js";import{T as n,I as l}from"./TextInput-D-R_sn1J.js";import{I as i}from"./InputLabel-VLgqgV5d.js";import{P as v}from"./PrimaryButton-DhdE6-Bn.js";import"./ApplicationLogo-DNpt8IG0.js";const y=async({data:m})=>{const a="http://127.0.0.1:3002/api/login",r={"Content-Type":"application/json","api-key":"YOUR_SECRET_API_KEY"};p.post(a,m,{headers:r}).then(t=>{console.log("Success:",t.data)}).catch(t=>{console.error("Error:",t.response.data)})};function F(){const{props:m}=x(),{data:a,setData:r,post:t,processing:c,errors:o,reset:d}=f({name:"",email:"",role:"client",password:"",password_confirmation:""});g.useEffect(()=>()=>{d("password","password_confirmation")},[]);const u=async s=>{s.preventDefault(),t(route("register"),{onSuccess:()=>{y(a)}})};return e.jsxs(h,{children:[e.jsx(j,{title:"Register"}),e.jsx("form",{onSubmit:u,children:e.jsxs("div",{className:"flex",children:[m.user.role!==""&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex bg-gray-800 h-screen w-full p-12 flex-col sm:justify-center items-center dark:bg-gray-900"})}),e.jsxs("div",{className:"flex regbox flex-col w-full sm:justify-center items-center pt-6 sm:pt-0 dark:bg-gray-900",children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"name",value:"Name"}),e.jsx(n,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(l,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>{r("email",s.target.value)},required:!0}),e.jsx(l,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(l,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(l,{message:o.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(w,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e.jsx(v,{className:"ms-4",disabled:c,children:"Register"})]})]}),e.jsx("style",{children:`
    
    .regbox{
        box-shadow: 28px -26px 27px 0px #96969638 inset;
    }
    `})]})})]})}export{F as default};
