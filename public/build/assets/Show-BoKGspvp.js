import{q as o,r as n,W as c,j as e,d as x}from"./app-BUPJ0MyC.js";import{A as m}from"./AuthenticatedLayout-Cml3nqo3.js";import"./ApplicationLogo-DNpt8IG0.js";import"./transition-DtOdZKmH.js";const b=({connection:l,auth:s})=>{const{props:t}=o();return n.useState(!0),c({password:""}),e.jsx("div",{children:e.jsx(m,{user:s.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:["Dashboard - ",s.user.role]}),children:e.jsxs("div",{className:"max-w-2xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Connection Details"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"name",className:"block font-bold text-2xl text-gray-600 dark:text-gray-400"}),e.jsxs("ul",{children:[e.jsx("li",{children:`vehicle:${t.vehicles[0].make}`}),e.jsx("ul",{children:t.devices.map((a,d)=>e.jsx("ul",{children:a.map((i,r)=>e.jsx("li",{children:`${r} : ${i.type}`},r))},d))})]})]}),e.jsx("div",{className:"space-x-2",children:e.jsx(x,{href:route("connections.edit",{connection:l.id}),className:"bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none",children:"Edit"})})]})})})};export{b as default};
