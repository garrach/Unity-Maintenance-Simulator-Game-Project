import{j as e,d as l}from"./app-BUPJ0MyC.js";import{A as i}from"./AuthenticatedLayout-Cml3nqo3.js";import"./ApplicationLogo-DNpt8IG0.js";import"./transition-DtOdZKmH.js";const h=({devices:a,auth:s})=>e.jsx("div",{className:"dark:text-white",children:e.jsx(i,{user:s.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:["Dashboard - ",s.user.role]}),children:e.jsxs("div",{className:"my-5 w-fit",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Device List"}),e.jsx("ul",{className:"space-y-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid gap-4 ",children:a.map((r,t)=>e.jsx("li",{className:`bg-${t%2===0?"gray-100":"gray-200"} dark:bg-${t%2===0?"gray-800":"gray-700"} p-4 rounded-md shadow-md mb-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xl font-semibold mb-1",children:`Serial Number: ${r.serial_number}`}),e.jsx("p",{className:"text-sm text-gray-500",children:`Type: ${r.type}`}),s.user.role==="admin"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-sm text-gray-500",children:`Installation Date: ${r.installation_date}`}),e.jsx("p",{className:"text-sm text-gray-500",children:"Device Price : $..."})]}):e.jsx(e.Fragment,{children:s.user.role==="client"&&!1||s.user.role==="employee"?e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-sm text-gray-500",children:"Installation pending.."})}):e.jsx(e.Fragment,{children:s.user.role==="employee"&&!1||s.user.role==="client"&&!1?e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-sm text-gray-500",children:`Installation Date: ${r.installation_date}`})}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-sm text-gray-500",children:"Device Price : $..."})})})})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(l,{href:route("devices.show",{device:r.id}),className:"text-blue-500 hover:underline",children:"View"}),s.user.role==="admin"&&e.jsx(l,{href:route("devices.edit",{device:r.id}),className:"text-blue-500 hover:underline",children:"Edit"})]})]})},r.id))}),s.user.role==="admin"&&e.jsx(l,{href:route("devices.create"),className:"bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block",children:"Create Device"})]})})});export{h as default};
