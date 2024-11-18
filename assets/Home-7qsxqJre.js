import{j as e,r as i,s as $,L as z,p as D,u as O,a as R,C as P,g as Y}from"./index-d02eNFuI.js";import{m as E,L as H}from"./data-BWEPIRSF.js";import{u as K,B as T}from"./Button-BtXGTEQq.js";const N=({children:r})=>e.jsx("h3",{className:"text-xl font-light font-serif",children:r}),_=({post:r,newdate:t,index:n})=>{const[c,x]=i.useState(!1),[a,h]=i.useState("opacity-[0]"),g=$.getFilePreview(r==null?void 0:r.featuredImage);return i.useEffect(()=>{const j=new Image;j.onload=()=>{x(!0),h("opacity-[1]")},j.src=g},[]),e.jsx(z,{to:`/post/${r.$id}`,children:e.jsxs("div",{className:"flex gap-2 items-center border-b-[1px] border-gray-300 py-1",children:[e.jsxs("div",{className:"left w-full",children:[e.jsxs("div",{className:"flex gap-3 font-mono",children:[e.jsx("p",{className:"text-[0.7rem] capitalize",children:r.userName}),e.jsxs("p",{className:"text-[0.7rem]",children:[E[t==null?void 0:t.getMonth()]," ",t==null?void 0:t.getDate(),",",t==null?void 0:t.getFullYear()]})]}),e.jsx("h3",{className:"mt-1 font-semibold capitalize",children:r==null?void 0:r.title}),e.jsx("span",{className:"font-[0.6rem] mb-2 text-[0.8rem] text-gray-700",children:D(r.content)}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:"my-2 px-2 bg-[#F0F0F0] border-[1px] text-[0.9rem] font-serif rounded-lg capitalize text-blue-600",children:r.category}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{}),e.jsx("p",{className:" px-1  text-[0.7rem]  font-bold",children:r==null?void 0:r.likes})]})]})]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"relative w-44 h-28",children:[e.jsx("img",{src:g,className:`absolute top-0 left-0 ${c&&"z-[11]"} w-full h-full shadow-sm object-cover transition-all duration-300 ease-in-out ${a}`,alt:"",loading:n<4?"eager":"lazy"}),e.jsx(O,{hash:(r==null?void 0:r.blurHash)||"LMB3vf%2IBIU~qozIUM{%fR*RjWB",width:"100%",height:"100%",resolutionX:32,resolutionY:32,punch:1,className:"absolute top-0 left-0 z-10"})]})})]})})},q=({children:r})=>e.jsx("button",{className:" text-blue-600 px-2 bg-[#F0F0F0] border-[1px] font-serif rounded-lg capitalize",children:r}),L=(r,t)=>{let n=t;return r==null||r.map(c=>{(n==null?void 0:n.find(a=>a.toLocaleUpperCase()==(c==null?void 0:c.category.toLocaleUpperCase())))||n.push(c==null?void 0:c.category)}),n},S=r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase();let m=["All"];const Q=()=>{var C,k;const r=R(l=>l.post.posts),{register:t,handleSubmit:n,watch:c,setValue:x}=K(),[a,h]=i.useState(r),[g,j]=i.useState("All"),[y,A]=i.useState(4),[u,b]=i.useState([]),[I,f]=i.useState(!1),[p,w]=i.useState(0);function U(){f(!1)}function v(l){j(l);const s=r.filter(d=>d.category.toLocaleUpperCase()==l.toLocaleUpperCase());l!="All"?h(s):h(r)}const B=l=>{l==""&&b(L(r,m));const s=new RegExp(`^${l}`,"i");b(d=>d.filter(o=>s.test(o)))},M=l=>{const s=u.length;l.key==="ArrowDown"&&w(o=>(o+1)%s),l.key==="ArrowUp"&&w(o=>(o-1+s)%s);const d=u.find((o,F)=>F==p&&F!=0);x("search",S(d)),l.key==="Enter"&&v(d)};return i.useEffect(()=>{m=L(r,m),b(m)},[]),i.useEffect(()=>{const l=s=>{const d=s.target.parentElement;d.className.includes("search-filter-ul")||d.className.includes("filters")||f(!1)};return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[]),console.log(c("search")),e.jsx("div",{className:"w-full",children:e.jsx(P,{children:e.jsxs("div",{className:"parent w-full flex-wrap flex gap-2 lg:gap-5 md:flex-row py-1",children:[e.jsx("div",{className:"home-left w-full xl:w-[18%] order-1 md:order-1",children:e.jsxs("div",{className:"w-1/2 md:w-1/3 lg:w-1/4 xl:w-full sm:px-6 xl:px-0 lg:my-4 rounded-lg",children:[e.jsx(N,{children:"Filtering Section"}),e.jsx("form",{onSubmit:n(U),className:"mt-4",children:e.jsx(Y,{type:"text",placeholder:"Search Articles...",className:"border-[1px] border-black",onClick:()=>{f(!0)},onKeyDown:M,...t("search",{onChange:l=>{l.target.value==""&&h(r),l.target.value!=""&&f(!0),B(l.target.value)}})})}),e.jsx("div",{className:`w-full filtered-search-results shadow-xl rounded-lg bg-white 
                  ${I?"block":"hidden"}`,children:e.jsx("ul",{className:"search-filter-ul",children:u==null?void 0:u.map((l,s)=>e.jsx("li",{className:` hover:bg-gray-700 capitalize hover:text-white px-4 py-2 ${p===s&&"bg-gray-700 text-white"}`,onClick:()=>{x("search",S(l)),f(!1),v(c("search"))},children:l},l))})})]})}),e.jsxs("div",{className:`home-mid w-full  md:w-[70%] xl:w-[52%] min-h-96 md:border-r-[2px] xl:border-l-[2px] border-gray-100 py-0 sm:px-6 \r
        order-3 md:order-1 `,children:[e.jsx("div",{className:"w-full border-b-[1px] mb-3 border-gray-900 uppercase",children:e.jsx(N,{children:g})}),(C=a==null?void 0:a.slice(0,y))==null?void 0:C.map(l=>{const s=new Date(l==null?void 0:l.$createdAt);return e.jsx(_,{newdate:s,post:l},l.$id)}),(a==null?void 0:a.length)==0&&e.jsx("h2",{className:"text-3xl w-full font-semibold text-center",children:"No Posts To Show"}),e.jsx("div",{className:"mt-5",children:y<(a==null?void 0:a.length)&&e.jsx(T,{bgColor:"",textColor:"text-black",className:"border-[1px] border-black",onClick:()=>{A(l=>l+4)},children:"LoadMore"})})]}),e.jsxs("div",{className:"home-right w-full md:w-[27%] xl:w-[18%] order-2 md:order-1 ",children:[e.jsxs("div",{className:"top sm:px-6 xl:px-0",children:[e.jsx("div",{className:"my-3",children:e.jsx(N,{children:"Choose Category"})}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:m==null?void 0:m.map((l,s)=>e.jsx("span",{onClick:()=>{v(l)},children:e.jsx(q,{children:l})},s))})]}),e.jsxs("div",{className:"hidden md:block bottom",children:[e.jsx("div",{className:"my-3",children:e.jsx(N,{children:"Trending"})}),(k=a==null?void 0:a.slice(3))==null?void 0:k.map(l=>{const s=new Date(l==null?void 0:l.$createdAt);return e.jsx(z,{to:`/post/${l.$id}`,className:"",children:e.jsxs("div",{className:"flex gap-3 items-center border-b-[1px] border-gray-300 py-3",children:[e.jsx("div",{className:"left",children:e.jsx("img",{src:$.getFilePreview(l==null?void 0:l.featuredImage),className:"w-24 h-16 shadow-sm object-cover",alt:"",loading:"lazy"})}),e.jsxs("div",{className:"right w-full",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("p",{className:"text-[0.7rem] font-mono capitalize",children:l.userName}),e.jsxs("p",{className:"text-[0.7rem]",children:[E[s==null?void 0:s.getMonth()]," ",s==null?void 0:s.getDate(),",",s==null?void 0:s.getFullYear()]})]}),e.jsx("h3",{className:"mt-2 font-semibold text-[0.8rem] capitalize",children:l==null?void 0:l.title})]})]})},l.$id)})]})]})]})})})};export{Q as default};
