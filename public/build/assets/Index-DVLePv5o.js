import{r as d,j as e,a as n}from"./app-BUPJ0MyC.js";import{A as o}from"./AuthenticatedLayout-Cml3nqo3.js";import"./react-apexcharts.min-DOlb6eRm.js";import"./ApplicationLogo-DNpt8IG0.js";import"./transition-DtOdZKmH.js";import"./index-BgVfiXLj.js";const N=({connections:x,vehicles:r,devices:m,auth:i})=>{const[a,h]=d.useState();return d.useEffect(()=>{},[a]),e.jsx("div",{className:"dark:text-white dark:bg-gray-100 ",children:e.jsxs(o,{user:i.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Connected Services"}),children:[e.jsx(n,{title:"Connected Services"}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-900 p-4",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Connected Services"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-md shadow mb-4  dark:bg-gray-800",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Connected Services Chart"}),a]}),e.jsx("ul",{className:"space-y-2",children:e.jsx("li",{className:"bg-white dark:bg-gray-800 p-4 rounded-md shadow-md",children:e.jsx("ul",{children:r&&r.map((s,t)=>e.jsx("li",{children:e.jsxs("ul",{children:[e.jsx("li",{className:"font-bold uppercase",children:s.make},t),e.jsx("li",{children:e.jsx("ul",{children:s.devices&&s.devices.map((c,l)=>e.jsx("li",{className:"text-gray-200  hover:text-gray-900",children:c.serial_number},l))})})]})},t))})})})]})]})]})})};export{N as default};
