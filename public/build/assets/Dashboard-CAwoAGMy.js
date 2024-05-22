import{r as t,j as e,q as z,W as Q,u as X,d as k,a as Z,b as ee,g as te,F as S}from"./app-CmMHBtRm.js";import{A as se}from"./AuthenticatedLayout-BMwXgHnR.js";import re from"./DashboardElements-CNE1GjIq.js";import{a as p}from"./js.cookie-Cz0CWeBA.js";import{a as ne,b as ae,c as oe}from"./index-BFRJqtLk.js";import{A as G}from"./AlertDialog-DTt_Baj7.js";import q from"./sideBar-CvYtQ7JB.js";import"./transition-t7xN9JIs.js";import"./RecentConnections-BXwTOG-l.js";import"./RecentActivities-KjKopizm.js";import"./react-apexcharts.min-Dfj_ehqF.js";import"./QuickActions-DWtaMeM9.js";import"./Navigation-ByOUceVA.js";import"./SystemStatus-DYGKZKmO.js";import"./VehicleList-BVlKDgFQ.js";import"./PaymentPlanOverview-yNqC500K.js";import"./UsersList-CI3iOFn2.js";import"./WishList-DfL6-MZj.js";import"./unitySatuts-V9Ao4xGx.js";const ce=({guideElemnt:s,nextGuid:g,storedMenuState:x,closeGuide:b,skipping:h})=>{const a=t.useRef(null),f=()=>{a.current&&a.current.focus()};if(!s||x===0)return null;const o=s[g.current],{left:c,top:d}=o.getBoundingClientRect(),m=o.innerHTML;return e.jsxs("div",{ref:a,style:{left:c-50,top:d+window.scrollY},className:"w-80 h-auto absolute bg-gray-800 dark:bg-gray-300 border border-gray-300 rounded-lg shadow-lg p-6 z-50 focus:outline-none",tabIndex:"-1",children:[e.jsxs("div",{className:"mb-4 text-gray-300 dark:text-gray-800",id:"showGuid",children:[e.jsx("button",{onClick:i=>b(i),className:"absolute top-0 left-0 text-white dark:text-gray-500 px-4 py-2 rounded-md",children:"Skip"}),e.jsx("h1",{className:"text-xl font-bold mt-4",children:"Guide"}),e.jsx("div",{ref:a,className:"text-sm grid grid-cols-1 gap-1 dark:text-gray-800",dangerouslySetInnerHTML:{__html:m}})]}),e.jsx("button",{onClick:i=>{h(i,s),f()},className:"absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md",children:"Next"})]})},ie=ce;function Fe({auth:s,usersList:g,reports:x,requestJob:b,wishListItems:h,userExp:a}){const f={"Content-Type":"application/json","api-key":"YOUR_SECRET_API_KEY"};t.useEffect(()=>{async function r(){await ee.post(`http://${te()}/api/get-key?ID=${s.user.id}`,s,{headers:f}).then(l=>{})}r()},[]);const[o,c]=t.useState(p.get("Guide")),[d,m]=t.useState(!1),[i,A]=t.useState(!1),[F,w]=t.useState(""),[N,O]=t.useState(null),[U,W]=t.useState(0),u=t.useRef(0),[I,L]=t.useState(null),[M,le]=t.useState({reports:x,requestJob:b,wishListItems:h}),{props:T}=z(),[_,de]=t.useState({type:"head",message:"Welcome, WebSocket to provide realtime data monitoring",data:""}),{data:H,setData:v}=Q({currentwebSocket:i,planstate:"planstate",message:""}),R=()=>{m(!d)},D=r=>{try{return JSON.parse(r)}catch{return{message:"Reloading.."}}},{dynamicValues:E,updateValues:$}=X(),n=E.socket;n.addEventListener("open",r=>{$({dash:"open"}),v({currentwebSocket:n,planstate:"planstate",message:D(E.dash)})});const j=r=>{L(n),A(!0),r&&m(!d);const l=new URL(n.url).host;w(l),n.addEventListener("message",y=>{v({currentwebSocket:n,planstate:"planstate",message:D(y.data)});let C={type:"",message:"",data:""};try{C=JSON.parse(y);const{type:V,message:me,data:pe}=C}catch{}})},J=t.useRef(),[Y,ue]=t.useState();t.useEffect(()=>(j(!1),()=>{j(!1)}),[]);const B=(r,l)=>{r.preventDefault();try{l.length-1>u.current&&o?(u.current++,W(u.current)):(c(0),p.set("Guide",0))}catch{u.current=0}};t.useEffect(()=>(c(p.get("Guide")),()=>{c(0)}),[]);const K=r=>{r.preventDefault(),c(0),p.set("Guide",0)};t.useEffect(()=>{O(document.querySelectorAll("#pop"))},[U]);const P=({userRole:r})=>{switch(r){case"admin":return e.jsxs(e.Fragment,{children:[e.jsx(S,{icon:oe}),e.jsx("span",{className:"ml-2 font-bold uppercase",children:r})]});case"client":return e.jsxs(e.Fragment,{children:[e.jsx(S,{icon:ae}),e.jsx("span",{className:"ml-2 font-bold uppercase",children:r})]});case"employee":return e.jsxs(e.Fragment,{children:[e.jsx(S,{icon:ne}),e.jsx("span",{className:"ml-2 font-bold uppercase",children:r})]})}};return e.jsxs(e.Fragment,{children:[e.jsxs(se,{webSocket:I,user:s.user,pannier:T.pannier,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",id:"pop",children:["Dashboard - ",e.jsx(P,{userRole:s.user.role}),s.user.role==="admin"&&e.jsx("span",{className:"flex w-56 m-2 justify-around p-2 hover:bg-orange-500 rounded-md",children:e.jsx(k,{href:route("unityRefresh"),children:"Unity Refresh"})})]}),children:[e.jsx(Z,{title:"Dashboard"}),d&&e.jsx(G,{title:"WebSocket",message:_.message,onClose:R}),e.jsxs("div",{className:"py-0 bgstyleglass",children:[Y&&e.jsx(G,{title:"Role Request",message:"Request From Client",onClose:R}),e.jsxs("div",{ref:J,className:`flex ${s.user.role==="client"?"w-full":""}`,children:[s.user.role==="admin"||s.user.role==="employee"?e.jsx("div",{className:"sm:flex side-menu",children:e.jsx("div",{className:"flex",children:e.jsx(q,{auth:s,expand:!0,Children:e.jsxs("ul",{children:[e.jsx("li",{className:"text-gray-200 mt-4 hover:text-white",children:e.jsx(k,{href:route("paymentPlans.index"),id:"pop",children:"Subscribe"})}),e.jsx("li",{className:"text-gray-200 mt-4 hover:text-white",children:e.jsx(k,{href:route("users"),id:"pop",children:"Users List"})})]})})})}):e.jsx("div",{className:"sm:flex side-menu",children:e.jsx("div",{className:"flex",children:e.jsx(q,{auth:s,expand:!0})})}),e.jsx("div",{className:"relative dark:bg-gray-900 bg-gray-300 menu-content",children:e.jsx(re,{requests:M,auth:s,usersList:g,webSocket:n,currentwebSocket:w,display:H,userExp:a})})]})]})]}),e.jsx("div",{className:"fixed bottom-4 right-4",onClick:j,children:i?e.jsx(e.Fragment,{children:e.jsxs("span",{className:"bg-green-500 cursor-pointer dispp text-white px-4 py-2 rounded-full hover:bg-blue-600",children:[e.jsxs("span",{className:"websocket",children:["ws://",F]}),e.jsx("span",{children:"WebSocket-ON"})]})}):e.jsx(e.Fragment,{children:e.jsxs("span",{className:"bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block",children:[e.jsx("span",{className:"websocket"}),e.jsx("span",{children:"pokeWebSocket"})]})})}),N&&o!=0&&e.jsx(ie,{guideElemnt:N,nextGuid:u,storedMenuState:o,closeGuide:K,skipping:B}),e.jsx("style",{children:` 
        .rounded-md{
          border-radius: 1.3rem !important;
        }
        @media (prefers-color-scheme: dark) {
          .bgstyleglass{
            background: rgb(0,23,69);
            background: linear-gradient(215deg, rgb(31, 41, 55) 21%, rgba(87, 52, 213, 0.52) 47%, rgb(31, 41, 55) 50%)   
          }
        }
        @media (prefers-color-scheme: light) {
          .bgstyleglass{
            background: rgb(0,23,69);
            background: linear-gradient(215deg, rgb(247, 247, 247) 21%, rgb(227, 227, 227) 47%, rgb(255, 255, 255) 50%)  
          }
        }
        .websocket{
          display:none;
          padding:20px;
          width: 15rem;
          height: 4rem;
          bottom:3rem;
          right: 10%;
          color:black;
        }
        .dispp:hover .websocket{
          display:block;
          position:absolute;
          border-radius:0.3rem;
          background-color: white;
        }
          `})]})}export{Fe as default};
