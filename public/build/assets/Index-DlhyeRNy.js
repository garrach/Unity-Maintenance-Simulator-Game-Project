import{r,W as A,j as t,a as R,F as T}from"./app-CmMHBtRm.js";import{A as E}from"./AuthenticatedLayout-BMwXgHnR.js";import{a as H}from"./react-pdf.browser-BY6CyNOM.js";import I from"./FullMaintenancePDF-n1KzegiK.js";import{w as O}from"./index-BFRJqtLk.js";import"./transition-t7xN9JIs.js";import"./js.cookie-Cz0CWeBA.js";import"./md5-BAU7s_JP.js";const z=({auth:a,maintenanceTasksz:f,Vehicles:j})=>{const[b,y]=r.useState({rep:"",user:""}),[u,w]=r.useState(!1),n=r.useRef(),[P,N]=r.useState(),[l,m]=r.useState([]),{post:S}=A(),[x,v]=r.useState([]),[c,F]=r.useState(null);r.useEffect(()=>{v(JSON.parse(atob(j)))},[]);const C=(e,s)=>{e.preventDefault(),F(s)},D=(e,s)=>{S(route("markAsComplete",{id:e,VID:c?c.id:11}))};r.useEffect(()=>{const e=JSON.parse(atob(f));return N(Object.keys(e)),n.current=Object.values(e),n.current.map(s=>{Object.values(s).map(i=>{m(o=>o&&[...o,i])})}),()=>{m(null)}},[]);let h=0;function p(e){window.scrollTo(0,window.scrollY-e*.01),h=requestAnimationFrame(p),window.scrollY===0&&cancelAnimationFrame(h)}const M=e=>{w(!u),requestAnimationFrame(p)};r.useEffect(()=>{y({rep:{title:"Full Maintenance Suite",dataMain:l},user:a.user})},[n.current]);const[d,V]=r.useState(""),[g,$]=r.useState([]);r.useEffect(()=>{if(l&&l.length>0){const e=l.filter(s=>s.user&&s.user.name.toLowerCase().includes(d.toLowerCase()));$(e)}},[l,d]);const k=e=>{V(e.target.value)};return t.jsx("div",{children:t.jsxs(E,{user:a.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Full Maintenance Suite"}),children:[t.jsx(R,{title:"Full Maintenance Suite"}),u&&t.jsx(H,{width:window.innerWidth-20,height:window.innerHeight,children:t.jsx(I,{data:b})}),t.jsxs("div",{className:"my-4 p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-md",children:[t.jsxs("section",{className:"mb-8",children:[t.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Scheduled Maintenance"}),(a.user.role==="admin"||a.user.role==="employee")&&t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",placeholder:"Search Client...",value:d,onChange:k,className:"border p-2 w-full dark:text-gray-800"})}),t.jsxs("div",{className:"relative h-32",children:[t.jsxs("h4",{children:[t.jsx(T,{icon:O}),t.jsx("span",{className:"ml-2 font-bold uppercase",children:"Registred Cars"})]}),t.jsxs("ul",{className:"flex",children:[x.length>0&&x.map((e,s)=>t.jsx("li",{children:t.jsxs("div",{className:"flex p-4 justify-center items-center",children:[t.jsx("input",{type:"radio",name:"VID",className:"outline-none select-none border-0",id:`VID${s}`,value:e.id,onChange:i=>{C(i,e)}}),t.jsx("label",{htmlFor:`VID${s}`,className:"ml-2 select-none cursor-pointer hover:underline decoration-sky-500",children:e.make})]})},s)),console.log(c)]})]}),n.current&&g.length===0?t.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"No scheduled maintenance tasks found."}):t.jsx("ul",{className:"space-y-4",children:n.current&&g.map((e,s)=>e.device&&e.device.map((i,o)=>t.jsxs("div",{children:[t.jsx("h3",{className:"uppercase text-2xl dark:text-white text-gray-800",children:`${e.user.name} : ${e.user.role}`}),t.jsxs("li",{className:`bg-${e.status===1?"green-100":"yellow-100"} dark:bg-${e.status===1?"green-700":"yellow-700"} p-4 rounded-md shadow-md flex items-center justify-between`,children:[t.jsxs("div",{children:[t.jsx("h3",{className:`text-lg font-semibold mb-2 ${e.status===1?"dark:text-orange-600":"dark:text-gray-500"}`,children:i.type}),t.jsx("p",{className:`text-sm text-gray-500 ${e.status===1?"line-through":""}`,children:e.status===1?"Completed":"Scheduled"})]}),(a.user.role==="admin"||a.user.role==="employee")&&t.jsx("div",{className:"flex space-x-2",children:t.jsx("button",{onClick:()=>D(e.purchase_id),className:`text-white px-3 py-1 rounded bg-${e.status===1?"gray":"green"}-500 hover:bg-${e.status===1?"gray":"green"}-600`,disabled:e.status==="completed",children:"Mark as Complete"})})]},o)]},s)))})]}),(a.user.role=="admin"||a.user.role=="employee")&&t.jsx("button",{className:"bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600",onClick:e=>{e.preventDefault(),M()},children:"Generate Report"})]})]})})};export{z as default};
