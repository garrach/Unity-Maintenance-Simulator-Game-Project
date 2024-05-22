import{j as e,r as i,s as p,q as v}from"./app-CmMHBtRm.js";import{_ as b}from"./react-apexcharts.min-Dfj_ehqF.js";const j=({jsonData:r})=>{const l=Object.keys(r).filter(t=>t!=="make"&&t!=="model"&&t!=="year"),f=[{name:"Vehicle Data",data:l.map(t=>parseFloat(r[t]))}],d={chart:{type:"line",toolbar:{show:!1},fontFamily:"Arial, sans-serif",animations:{enabled:!1}},xaxis:{categories:l,labels:{style:{fontSize:"14px",fontWeight:500,colors:"#333"}},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{style:{fontSize:"14px",fontWeight:500,colors:"#333"},formatter:function(t){return t.toFixed(2)}},axisTicks:{show:!1},axisBorder:{show:!1}},stroke:{curve:"smooth"},colors:["#007bff"],markers:{size:6,colors:["#007bff"],strokeWidth:0,strokeColors:"#fff"},tooltip:{enabled:!0,style:{fontSize:"14px"},x:{show:!0,format:"MMM yyyy"},y:{formatter:function(t){return t.toFixed(2)}}},grid:{borderColor:"#eee",padding:{top:15,bottom:15}}};return e.jsxs("div",{className:"chart-container",children:[e.jsx("h2",{className:"chart-title",children:"Vehicle Analytics Line Chart"}),e.jsx(b,{options:d,series:f,type:"line",height:350})]})},V=({webSocket:r,stat:l,auth:c})=>{const[f,d]=i.useState(null);i.useEffect(()=>{d(p)}),v();const[t,o]=i.useState(!1),[n,h]=i.useState({Devices:[{name:"unityStatDV",id:0}],Vehicles:[{name:"unityStatVH",id:0}]}),x=a=>{a.preventDefault(),n.Vehicles.id!==0&&o(s=>!s),n.Devices.id!==0&&o(s=>!s)},[y,m]=i.useState(null),u=i.useRef();return i.useRef(!1),i.useEffect(()=>{if(l)try{r.send(JSON.stringify({type:"unityStatDV",message:"ask for deviceStat Running",data:c})),r.addEventListener("message",a=>{try{const s=JSON.parse(a.data);try{s.type==="deviceStat"?(console.log("Recive : ",s),m(s.data),h({Devices:[{name:"unity device",id:s.data}]}),o(!0),u.current=s.data):o(!1)}catch{console.log("Error:",{error:"Message not from unity.."})}}catch{console.log("Error:",{error:"Message Parsing faild.."})}})}catch{return}else try{r.send(JSON.stringify({type:"unityStatVH",message:"ask for vehicleStat Running",data:{auth:c}})),r.addEventListener("message",a=>{try{const s=JSON.parse(a.data);try{s.type==="vehicleStat"?(console.log("Recive : ",s),m(s.data),h({Vehicles:[{name:"unity Vehicle",id:s.data}]}),o(!0),u.current=s.data):o(!1)}catch{console.log("Error:",{error:"Message not from unity.."})}}catch{console.log("Error:",{error:"Message Parsing faild.."})}})}catch{return}return()=>{}},[r]),e.jsx("div",{className:"flex h-screen",children:e.jsxs("div",{className:"flex flex-col flex-1",children:[e.jsx("header",{className:"bg-gray-200 dark:bg-gray-900 py-4 px-6 border-b border-gray-300 dark:border-gray-700",children:e.jsxs("h1",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200",children:["Dashboard - ",e.jsx("span",{className:"font-bold uppercase",children:c.user.role})," : ",e.jsx("span",{children:l?e.jsx("span",{children:"Client selected Device"}):e.jsx("span",{children:" Client Vehicle"})})]})}),e.jsx("div",{className:"flex-1 bg-gray-100 dark:bg-gray-900 p-6",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-md shadow-md",children:[e.jsxs("h2",{className:"text-lg font-semibold mb-4 dark:text-gray-200",children:["Graphs/Analytics",e.jsx("span",{className:"ml-2 text-sm",children:l?`${n.Devices[0].name}: ${typeof n.Devices[0].id=="string"?n.Devices[0].id:c.user.name}`:`${n.Vehicles[0].name}: ${n.Vehicles[0].id}`})]}),t?e.jsx(j,{jsonData:y}):e.jsx("div",{className:"text-red-500 mb-4",children:"Live feed is not available at the moment."}),e.jsx("button",{onClick:a=>{x(a)},className:"px-4 py-2 bg-blue-500 text-white rounded-md",children:t?"Disable Live Feed":"Enable Live Feed"})]})})]})})};export{V as default};
