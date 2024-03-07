import{r as n,j as e}from"./app-BUPJ0MyC.js";const d=()=>{const r=n.useRef(),a=t=>{r.current=t.target.value,window.addEventListener("keydown",s=>{s.key==="Enter"&&console.log("searching.. "+s.target.value)})};return e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-md shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Search and Filters"}),e.jsx("div",{className:"bg-gray-200 flex block w-70 h-10 rounded px-4 py-1",children:e.jsx("input",{className:"rounded",type:"search",name:"search_options",id:"Sp",placeholder:"search_options",onChange:a})}),e.jsx("style",{children:`
        #Sp{
          position:relative;
          display:block;
          width:100%;
          height:100%;
          border:none;
        }
        `})]})};export{d as default};
