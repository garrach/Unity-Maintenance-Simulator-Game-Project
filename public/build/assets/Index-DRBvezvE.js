import{q as i,W as x,j as e,a as n,d as r}from"./app-CmMHBtRm.js";import{A as c}from"./AuthenticatedLayout-BMwXgHnR.js";import"./transition-t7xN9JIs.js";import"./index-BFRJqtLk.js";import"./js.cookie-Cz0CWeBA.js";const v=({reports:s,auth:a,that:m})=>{i();const{data:h,setData:p,delete:d,processing:u,reset:g,errors:y}=x({password:""}),l=t=>{confirm("Are you sure you want to delete this report?")&&d(route("reports.destroy",{report:t}))};return e.jsx("div",{children:e.jsxs(c,{user:a.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:["Dashboard - ",a.user.role]}),children:[e.jsx(n,{title:"Report Details"}),e.jsxs("div",{className:"my-4 max-w-7xl mx-auto mt-6 p-6 bg-gray-200 text-gray-800 dark:text-gray-200 dark:bg-gray-800 rounded-md shadow-md",children:[e.jsx("h1",{className:"text-3xl font-semibold mb-4",children:"Report List"}),e.jsx("ul",{className:"space-y-4",children:s&&s.map(t=>e.jsxs("li",{className:"border rounded-md shadow-md p-4 ",children:[e.jsx("h2",{className:"text-xl font-semibold dark:text-gray-200",children:t.title}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:t.description}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-400",children:["Report Date: ",t.application_date]}),e.jsxs("div",{className:"flex mt-2 relative",children:[e.jsx(r,{href:route("reports.show",{report:t.id}),className:"bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-2",children:"View"}),e.jsx(r,{href:route("reports.edit",{report:t.id}),className:"bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 mr-2",children:"Edit"}),e.jsx("button",{className:"bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600",onClick:o=>{o.preventDefault(),l(t.id)},children:"Delete"})]})]},t.id))}),e.jsx(r,{href:route("reports.create"),className:"bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 inline-block",children:"Create Report"})]})]})})};export{v as default};
