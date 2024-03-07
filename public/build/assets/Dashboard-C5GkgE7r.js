import{r as s,W as R,j as e,d as h,a as q}from"./app-BUPJ0MyC.js";import{A as O}from"./AuthenticatedLayout-Cml3nqo3.js";import"./react-apexcharts.min-DOlb6eRm.js";import{c as W}from"./client-C8N3uvOR.js";import A from"./DashboardElements-14SMeYhc.js";import{A as x}from"./AlertDialog-u8RvhtPl.js";import E from"./sideBar-C8GBKWiV.js";import"./ApplicationLogo-DNpt8IG0.js";import"./transition-DtOdZKmH.js";import"./index-BgVfiXLj.js";import"./RecentConnections-Atqm8bp3.js";import"./RecentActivities-CKuUYo1L.js";import"./Analytics-dqrv8pGT.js";import"./QuickActions-DGK37KfK.js";import"./Navigation-Cv8EIhnF.js";import"./SystemStatus-DNa_UISF.js";import"./SearchFilters-B6ZxVQZ9.js";import"./VehicleList-BUkucgV9.js";import"./NotificationCenter-l4zqe3q4.js";import"./MaintenanceReminders-CSNQnOwN.js";import"./PaymentPlanOverview-BwnlRhQs.js";import"./UsersList-CHFVxdTY.js";function me({auth:r,usersList:k}){const[o,i]=s.useState(!1),[c,j]=s.useState(!1),[S,l]=s.useState(""),[F,f]=s.useState(null),[y,J]=s.useState({reports:10,requestJob:0,notify:0}),[w,C]=s.useState({type:"head",message:"Welcome, WebSocket to provide realtime data monitoring",data:""}),{data:N,setData:d,delete:L,processing:H,reset:M,errors:U}=R({currentwebSocket:c,planstate:"planstate",message:""}),m=()=>{i(!o)},p=n=>{try{return JSON.parse(n)}catch{return{message:"Reloading.."}}},b=n=>{const t=W("auth");f(t),j(!0),n&&i(!o);const D=new URL(t.url).host;l(D),t.addEventListener("open",a=>{d({currentwebSocket:t,planstate:"planstate",message:p(a.data)}),t.send(JSON.stringify({type:"poke",message:"reload",data:"client on "+r.user.name}))}),t.addEventListener("message",a=>{d({currentwebSocket:t,planstate:"planstate",message:p(a.data)});let u={type:"",message:"",data:""};try{u=JSON.parse(a);const{type:g,message:B,data:G}=u;console.log(g)}catch{console.log(a)}})};s.useEffect(()=>{b(!1)},[]);const[v,z]=s.useState();return e.jsxs(e.Fragment,{children:[e.jsxs(O,{user:r.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:["Dashboard - ",r.user.role,e.jsx("span",{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{href:route("meeting.index"),children:"Meet"}),e.jsx(h,{href:route("unityRefresh"),children:"unityRefresh"})]})})]}),children:[e.jsx(q,{title:"Dashboard"}),o&&e.jsx(x,{title:"WebSocket",message:w.message,onClose:m}),e.jsxs("div",{className:"py-0",children:[v&&e.jsx(x,{title:"Role Request",message:"Request From Client",onClose:m}),e.jsxs("div",{className:"sm:flex side-menu dark:bg-gray-900",children:[e.jsx("div",{className:"flex bg-gray-200",children:e.jsx(E,{auth:r,expand:!1})}),e.jsx("div",{className:"relative bg-gray-100 menu-content",children:e.jsx(A,{requests:y,auth:r,usersList:k,currentwebSocket:l,display:N})})]})]})]}),e.jsx("div",{className:"fixed bottom-4 right-4",onClick:b,children:c?e.jsx(e.Fragment,{children:e.jsxs("span",{className:"bg-green-500 cursor-pointer dispp text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block",children:[e.jsxs("span",{className:"websocket",children:["ws://",S]}),e.jsx("span",{children:"WebSocket-ON"})]})}):e.jsx(e.Fragment,{children:e.jsxs("span",{className:"bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block",children:[e.jsx("span",{className:"websocket"}),e.jsx("span",{children:"pokeWebSocket"})]})})}),e.jsx("style",{children:` 
        .rounded-md{
          border-radius: 1.3rem !important;
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
          `})]})}export{me as default};
