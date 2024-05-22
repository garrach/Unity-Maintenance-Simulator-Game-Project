import{j as e}from"./app-CmMHBtRm.js";import{S as r,D as l,P as a,V as s,T as o}from"./react-pdf.browser-BY6CyNOM.js";import"./md5-BAU7s_JP.js";const t=r.create({page:{flexDirection:"row",backgroundColor:"#d4d4d4",padding:20},section:{margin:10,padding:10,flexGrow:1,textAlign:"justify",border:"1px solid #CCCCCC"},header:{marginBottom:20,fontSize:24,fontWeight:"bold",textAlign:"center",borderBottom:"2px solid #333333"},text:{fontSize:12,textAlign:"justify",fontFamily:"Times-Roman"},textB:{fontSize:11,fontWeight:"bold",textAlign:"justify",fontFamily:"Times-Roman"},footer:{position:"absolute",bottom:10,left:0,right:0,textAlign:"center",fontSize:10},footer2:{position:"absolute",bottom:40,left:40,right:0,textAlign:"justify",fontFamily:"Times-Roman",fontSize:10}}),p=({data:i})=>e.jsx(l,{children:e.jsxs(a,{size:"A4",style:t.page,children:[e.jsxs(s,{style:t.section,children:[e.jsx(o,{style:t.header,children:"FullMaintenance Report"}),e.jsxs(o,{style:t.text,children:["Title : ",i.rep.title,`

`,"FullMaintenance :"]}),i.rep.dataMain.map(n=>e.jsxs(o,{style:t.text,children:[typeof n.device=="object"&&n.device[0].type,typeof n.status=="number"&&n.status?n.status===1?" ok":"[pending]":"..pending",`
 for:`,e.jsx(o,{style:t.textB,children:typeof n.user=="object"&&n.user.name})]})),e.jsxs(o,{style:t.text,children:[`
`,"Sincerely, ",i.user.name]})]}),e.jsx(s,{style:t.footer2,children:e.jsxs(o,{children:["Report Disclaimer:",`

`,"This report, along with any accompanying documents, is provided for informational purposes only and",`
`,"does not constitute professional advice. While every effort has been made to ensure the accuracy",`
`,"and completeness of the information contained herein, no warranty, express or implied, is given regarding",`
`,"the reliability, suitability, or correctness of the contents. The views and opinions expressed in this report",`
`,"are those of the author(s) and do not necessarily reflect",`
`,"the official policy or position of Car Maintain.",`
`]})}),e.jsx(s,{style:t.footer,children:e.jsxs(o,{children:["Generated on: ",new Date().toLocaleString()]})})]})});export{p as default};
