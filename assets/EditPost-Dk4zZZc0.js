import{r,u as n,d as l,s as u,j as t,C as c}from"./index-yag6wL5M.js";import{P as m}from"./Post_Form-4mIc_TSJ.js";import"./index.esm-BOc36_KT.js";import"./Button-j7ZomHxx.js";const P=()=>{const[e,i]=r.useState(null),{slug:s}=n(),a=l();return r.useEffect(()=>{s?u.getSinglePost(s).then(o=>{o&&i(o)}):a("/")},[s,a]),e?t.jsx("div",{className:"py-8",children:t.jsx(c,{children:t.jsx(m,{post:e})})}):null};export{P as default};