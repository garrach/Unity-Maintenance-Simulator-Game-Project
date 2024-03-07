import{r,j as e}from"./app-BUPJ0MyC.js";const d=({notifications:i})=>{const[t,o]=r.useState(!0),s=()=>{Notification.permission==="granted"?(t&&new Notification(i.someSocket),o(!t)):Notification.permission!=="denied"&&Notification.requestPermission().then(a=>{a==="granted"&&new Notification(i.someSocket)})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-md shadow-md",children:e.jsxs("div",{className:"relative flex",children:[e.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Notification Center"}),e.jsx("span",{className:"bg-gray-300 ml-12 bott rounded-full",children:e.jsx("span",{onClick:s,className:"hand rounded-full"})})]})}),e.jsx("style",{children:`
            .bott{
              display:block;
              width:50px;
              height:25px;
            }
            .hand{
              display:block;
              width:25px;
              height:25px;
              background-color:dimgray;
            }
            .bott:hover .hand{
              animation: slide 500ms ease 1 forwards;
            }

            @keyframes slide{
              from{
                background-color:dimgray;
                width:25px;
                height:25px;
              }
              to{
                background-color:#00abff;
                width:100%;
                height:25px;
              }
            }
          `})]})};export{d as default};
