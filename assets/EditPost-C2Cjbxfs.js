import{r,e as n,f as l,s as c,j as t,C as m}from"./index-CW2sj8PF.js";import{P as u}from"./Post_Form-Co7FD_sL.js";import"./index.esm-C3Vsz0gO.js";import"./Sub_Loader-D3PpayN5.js";const d=()=>{const[e,i]=r.useState(null),{slug:s}=n(),a=l();return r.useEffect(()=>{s?c.getSinglePost(s).then(o=>{o&&i(o)}):a("/")},[s,a]),e?t.jsx("div",{className:"py-8",children:t.jsx(m,{children:t.jsx(u,{post:e})})}):null};export{d as default};