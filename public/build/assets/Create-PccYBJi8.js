import{W as n,j as e}from"./app-CmMHBtRm.js";import{A as o}from"./AuthenticatedLayout-BMwXgHnR.js";import"./transition-t7xN9JIs.js";import"./index-BFRJqtLk.js";import"./js.cookie-Cz0CWeBA.js";const f=({auth:t})=>{const{data:a,setData:d,post:s,processing:l,errors:c,reset:m}=n({name:"",description:"",version:"",platform:"",file_size:"",file_path:"",device_ids:[]}),r=i=>{i.preventDefault(),s(route("assetBundles.store"))};return e.jsx("div",{children:e.jsx(o,{user:t.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:["Dashboard - ",t.user.role]}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Create AssetBundle"}),e.jsx("form",{onSubmit:r,children:e.jsx("div",{children:e.jsx("button",{type:"submit",children:"Create AssetBundle"})})})]})})})};export{f as default};
