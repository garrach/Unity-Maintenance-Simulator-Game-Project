import{q as y,r as a,j as e,F as l,d as n}from"./app-CmMHBtRm.js";import{e as x,i as k,j as p,k as S,l as L,m as N,n as C,o as j,p as F}from"./index-BFRJqtLk.js";const R=({Children:d,auth:t,expand:g})=>{const{props:h}=y(),i=a.useRef(),f=a.useRef(JSON.parse(atob(h.dataEnc)));i.current=h.services;const[w,b]=a.useState(g),v={"Basic Maintenance Tracking":k,"Car Analytics":p,"Connected Services":S,"Full Maintenance Suite":L,"Customizable Maintenance Schedules":N,"Priority Customer Support":C,Coinsystem:j,JobApplications:F,LeaderBoard:j,"Unity Data Monitoring":p},o=a.useRef([]);a.useEffect(()=>{o.current=[],Object.entries(f.current.services).map(([r,s])=>{o.current.push(s)})},[]);const m=a.useRef([]);i.current&&(m.current=i.current.map((r,s)=>{const c=v[r.name];return c?e.jsx(l,{icon:c},s):null}));const u=()=>{b(r=>!r)};return e.jsxs(e.Fragment,{children:[console.log(o.current),w?e.jsxs(e.Fragment,{children:[e.jsxs("aside",{className:"dark:text-white glass-container text-gray-800 sm:w-56 ",children:[e.jsx("nav",{children:e.jsxs("ul",{className:"p-0 mmLi sm:w-56 ",children:[e.jsx("li",{className:"px-0 py-0",onClick:u,children:e.jsx("span",{className:"text-white",children:e.jsx(l,{icon:x})})}),i.current&&i.current.map((r,s)=>e.jsx("li",{children:e.jsxs(n,{href:route(`${r.route}`),children:[e.jsx("span",{children:r.name}),Object.values(o.current).map(c=>r.name===c.name?e.jsx("div",{children:e.jsx("span",{style:{padding:"4px",fontSize:"11px"},className:"ml-2 uppercase rounded bg-orange-500",children:"purchased"})}):"")]})},s)),e.jsx("li",{children:e.jsx(n,{href:route("subservices.viewPlans"),id:"pop",children:"Subscribe"})}),t.user.role==="admin"&&d]})}),e.jsxs("div",{className:"really-idk mx-auto flex",children:[e.jsx("span",{children:e.jsx("img",{src:"",alt:""})}),e.jsx("ul",{children:e.jsx("li",{className:"ml-2 py-4 rounded hover:rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 px-12",children:e.jsx(n,{href:route("myaccount"),children:t.user.name})})})]})]}),e.jsx("style",{children:`
        .really-idk{
    width: auto;
    position: fixed;
    height: 7rem;
    color:white;
    cursor:pointer;
    bottom: 0;
}
    .menu-content{
    width:100%;
    height:auto;
    background-color:transparent;
    }
    .mmLi li{
    display:flex;
    width:100%;
    height:auto;
    padding:20px;
    transition: all 300ms ease;
    }
    .mmLi ul{
    width:100%;
    height:auto;
    }
    .mmLi ul:hover{
    width:100%;
    height:auto;
    }
    .mmLi li:hover{
    background-color:black;
    color:white;
    cursor:pointer;
    }`})]}):e.jsxs(e.Fragment,{children:[e.jsx(e.Fragment,{children:e.jsxs("aside",{className:"glass-container bg-gray-900",children:[e.jsx("nav",{children:e.jsxs("ul",{className:"mmLi ",children:[e.jsx("li",{children:e.jsx("span",{className:"text-white mx-auto mt-4",onClick:u,children:e.jsx(l,{icon:x,size:"lg"})})}),i.current&&i.current.map((r,s)=>e.jsx("li",{className:"text-white mx-5 mt-4",children:e.jsxs(n,{href:route(`${r.route}`),children:[m.current[s]," "]})},s)),t.user.role==="admin"&&d]})}),e.jsxs("div",{className:"really-idk mx-auto text-white flex",children:[e.jsx("span",{children:e.jsx("img",{src:"",alt:""})}),e.jsx("ul",{children:e.jsx("li",{children:e.jsxs(n,{href:route("myaccount"),children:[" ",t.user.name]})})})]})]})}),e.jsx("style",{children:`
                aside{
                    width:100%;
                    overflow:hidden;
                    padding-bottom:5rem;
                    color:#1f2937;
                }
                .really-idk{
                    width: 4rem;
                    position: fixed;
                    padding:0;
                    text-wrap: wrap;
                    height: 5rem;
                    cursor:pointer;
                    bottom: 0;
                    }
                    .menu-content{
                        width:100%;
                        height:auto;
                        background-color:transparent;
                        overflow:hiddin;
                    }
                    .mmLi li{
                        display:flex;
                        width:100%;
                        height:auto;
                        padding:10px;
                        overflow:hiddin;
                        background-color:transparent;
                        transition: all 300ms ease;
                    }
                    .mmLi ul{
                        width:100%;
                        height:auto;
                        overflow:hiddin;
                    }
                    .mmLi ul:hover{
                        width:100%;
                        height:auto;
                    }
                    .mmLi li:hover{
                        background-color:black;
                        color:#1f2937;
                        cursor:pointer;
                    }`})]})]})},E=R;export{E as default};
