import{W as n,j as e,a,d}from"./app-CmMHBtRm.js";import{G as l}from"./GuestLayout-DHUlu-f7.js";import{P as m}from"./PrimaryButton-DCV0SL7I.js";import"./Navbar-riBAp0WR.js";import"./index-BFRJqtLk.js";function y({status:t}){const{post:i,processing:r}=n({}),s=o=>{o.preventDefault(),i(route("verification.send"))};return e.jsxs(l,{children:[e.jsx(a,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:s,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(m,{disabled:r,children:"Resend Verification Email"}),e.jsx(d,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Log Out"})]})})]})}export{y as default};
