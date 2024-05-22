import{W as u,r as p,g,j as e,a as j}from"./app-CmMHBtRm.js";import{A as v}from"./AuthenticatedLayout-BMwXgHnR.js";import"./transition-t7xN9JIs.js";import"./index-BFRJqtLk.js";import"./js.cookie-Cz0CWeBA.js";const F=({auth:s,vehicles:d,devices:r,connections:b})=>{const{data:n,setData:o,post:c,processing:_,errors:y,reset:f}=u({name:"",user_id:s.user.id,installationdate:new Date,purchase_id:"",vehicle_id:1,device_id:1,connection_date:""}),[l,k]=p.useState(new WebSocket(`ws://${g()}`)),i=t=>{const{name:a,value:x}=t.target;o(h=>({...h,[a]:x.replace("/","-")}))},m=t=>{t.preventDefault(),c(route("connections.store"));const a=`
 connection_date:`+n.connection_date+`
 vehicle_id:`+n.vehicle_id+`
 device_id:`+n.device_id+`
`;confirm("Data : "+a),l.send(JSON.stringify({type:"running",message:"",data:n}))};return e.jsx("div",{children:e.jsxs(v,{user:s.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:["Dashboard - ",s.user.role]}),children:[e.jsx(j,{title:"Create Connection"}),e.jsxs("div",{className:"max-w-2xl mx-auto dark:text-white",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Create Connection"}),e.jsxs("form",{onSubmit:m,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"vehicle_id",className:"block text-sm dark:text-gray-300  font-medium text-gray-700",children:"Vehicle:"}),e.jsx("p",{children:"Connection:"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",value:n.name,className:"dark:text-gray-800",onChange:i})]}),e.jsx("select",{id:"vehicle_id",name:"vehicle_id",value:n.vehicle_id,onChange:i,className:"mt-1 p-2 text-gray-800 border rounded-md w-full",children:d.map(t=>e.jsx("option",{value:t.id,children:t.make},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"device_id",className:"block text-sm dark:text-gray-300 font-medium text-gray-700",children:"Device:"}),e.jsx("select",{multiple:!0,size:"4",id:"device_id",name:"device_id",onChange:i,className:"mt-1 p-2 text-gray-800 border rounded-md w-full",children:Object.entries(r).map(([t,a])=>e.jsx("option",{value:a.id,children:a.serial_number},a.id))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"connection_date",className:"block text-sm dark:text-gray-300 font-medium text-gray-700",children:"Connection Date:"}),e.jsx("input",{type:"date",id:"connection_date",name:"connection_date",value:n.connection_date,onChange:i,className:"mt-1 p-2 dark:text-gray-800 border rounded-md w-full"})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600",children:"Create Connection"})})]})]})]})})};export{F as default};
