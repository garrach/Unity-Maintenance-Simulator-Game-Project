import{q as p,W as h,j as e,a as b}from"./app-CmMHBtRm.js";import{A as g}from"./AuthenticatedLayout-BMwXgHnR.js";import"./transition-t7xN9JIs.js";import"./index-BFRJqtLk.js";import"./js.cookie-Cz0CWeBA.js";const D=({auth:r})=>{p();const l=new Date().toISOString().slice(0,19).replace("T"," "),{data:t,setData:n,post:d,processing:a,errors:j,reset:o}=h({user_id:r.user.id,title:"",description:"",application_date:l}),i=s=>{const{name:m,value:x}=s.target;n(u=>({...u,[m]:x}))},c=s=>{s.preventDefault(),alert(t.user_id+`
`+t.title+`
`+t.description+`
`+t.application_date+`
`),d(route("reports.store"),{data:t,onSuccess:()=>{o()}})};return e.jsx("div",{children:e.jsxs(g,{user:r.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:["Dashboard - ",r.user.role]}),children:[e.jsx(b,{title:"Report Details"}),e.jsxs("div",{className:"max-w-2xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4 dark:text-gray-200",children:"Create Report"}),e.jsxs("form",{onSubmit:c,className:"space-y-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Title:"}),e.jsx("input",{required:!0,type:"text",id:"title",name:"title",value:t.title,onChange:i,className:"mt-1 p-2 border rounded-md w-full"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Description:"}),e.jsx("textarea",{required:!0,id:"description",name:"description",value:t.description,onChange:i,className:"mt-1 p-2 border rounded-md w-full"})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600",disabled:a,children:a?"Creating...":"Create Report"})})]})]})]})})};export{D as default};
