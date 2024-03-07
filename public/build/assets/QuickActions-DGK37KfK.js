import{j as e,d as s}from"./app-BUPJ0MyC.js";import o from"./Navigation-Cv8EIhnF.js";import{c as d}from"./client-C8N3uvOR.js";const m=({auth:r,requests:t})=>{const l=i=>{i.preventDefault();const n=d("dashdoard_sentRequest");n.addEventListener("open",a=>{n.readyState===WebSocket.OPEN&&n.send(JSON.stringify({type:"roleRequest",message:"a request from client to admin, to grant role",data:r.user}))})};return e.jsxs("div",{className:"bg-white dark:bg-transparent p-4 rounded-md shadow-md",children:[r.user.role==="admin"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"clientEmployee-requests",children:[e.jsx("span",{children:t.reports}),e.jsx("span",{children:t.requestJob}),e.jsx("span",{children:t.notify})]})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"clientEmployee-requests flex flex-[2_2_0%]",children:[e.jsx("form",{onSubmit:l,children:e.jsx("button",{children:"report_issue"})}),e.jsx("span",{children:"notify"})]})}),e.jsx("h2",{className:"text-lg font-semibold  mb-2",children:"Quick Actions"}),e.jsxs("div",{className:"mt-20",children:[r.user.role==="admin"?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-blue-600",children:e.jsx(s,{href:"/vehicles",children:"Add Vehicle"})}),e.jsx("button",{className:"bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600",children:e.jsx(s,{href:"/paymentPlans",children:"Create Plan"})}),e.jsx("button",{className:"bg-green-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600",children:e.jsx(s,{href:"/connections",children:"Connections"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"bg-blue-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-blue-600",children:e.jsx(s,{href:"/devices",children:"request device"})}),e.jsx("button",{className:"bg-blue-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-green-600",children:e.jsx(s,{href:route("whishlist.index"),children:"whishlist"})}),e.jsx("button",{className:"bg-green-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-green-600",children:e.jsx(s,{href:route("priority-customer-support"),children:"Apply for job"})})]}),r.user.role==="admin"||r.user.role==="employee"?e.jsx(e.Fragment,{children:e.jsx(o,{})}):e.jsx(e.Fragment,{})]}),e.jsx("style",{children:`
        .clientEmployee-requests{
          display: flex;
          justify-content: end;
          width: auto;
          position: relative;
        }
        .clientEmployee-requests span{
          display: block;
          position: relative;
          padding: 0.3rem;
          width: auto;
          height: auto;
          border-radius: 0.2rem;
          background-color: red;
          text-align: center;
          margin: 7px;
        }
       
        `})]})};export{m as default};
