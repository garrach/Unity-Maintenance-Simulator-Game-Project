import{r as s,j as e,d as r}from"./app-BUPJ0MyC.js";const n=({auth:t})=>{const[a,l]=s.useState(null);return s.useEffect(()=>{l(t.initialPage.props.auth.user)}),e.jsx("nav",{className:"bg-gray-800 p-4 text-white fixed top-0 w-full z-50",children:e.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[e.jsx(r,{href:"/",className:"text-2xl font-bold",children:"Your Logo"}),e.jsxs("div",{className:"space-x-4",children:[e.jsx(r,{href:"/aboutUs",className:"hover:text-gray-400",children:"About"}),e.jsx(r,{href:"/contact",className:"hover:text-gray-400",children:"Contact"}),a!==null?e.jsx(r,{href:"/dashboard",className:"hover:text-gray-400",children:"Dashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(r,{href:"/login",className:"hover:text-gray-400",children:"login"}),e.jsx(r,{href:"/register",className:"hover:text-gray-400",children:"register"})]})]})]})})};export{n as default};
