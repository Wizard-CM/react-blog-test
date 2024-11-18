import{j as e,r as t,s as F,L,p as U,u as B,a as M,C as O,g as R}from"./index-3HRFaF50.js";import{m as S,L as P}from"./data-BybHxHam.js";import{u as Y,B as H}from"./Button-DvjWA77Y.js";const p=({children:l})=>e.jsx("h3",{className:"text-xl font-light font-serif",children:l}),K=({post:l,newdate:a,index:n})=>{const[o,m]=t.useState(!1),[i,x]=t.useState("opacity-[0]"),g=F.getFilePreview(l==null?void 0:l.featuredImage);return t.useEffect(()=>{const j=new Image;j.onload=()=>{m(!0),x("opacity-[1]")},j.src=g},[]),e.jsx(L,{to:`/post/${l.$id}`,children:e.jsxs("div",{className:"flex gap-2 items-center border-b-[1px] border-gray-300 py-1",children:[e.jsxs("div",{className:"left w-full",children:[e.jsxs("div",{className:"flex gap-3 font-mono",children:[e.jsx("p",{className:"text-[0.7rem] capitalize",children:l.userName}),e.jsxs("p",{className:"text-[0.7rem]",children:[S[a==null?void 0:a.getMonth()]," ",a==null?void 0:a.getDate(),",",a==null?void 0:a.getFullYear()]})]}),e.jsx("h3",{className:"mt-1 font-semibold capitalize",children:l==null?void 0:l.title}),e.jsx("span",{className:"font-[0.6rem] mb-2 text-[0.8rem] text-gray-700",children:U(l.content)}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:"my-2 px-2 bg-[#F0F0F0] border-[1px] text-[0.9rem] font-serif rounded-lg capitalize text-blue-600",children:l.category}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{}),e.jsx("p",{className:" px-1  text-[0.7rem]  font-bold",children:l==null?void 0:l.likes})]})]})]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"relative w-44 h-28",children:[e.jsx("img",{src:g,className:`absolute top-0 left-0 ${o&&"z-[11]"} w-full h-full shadow-sm object-cover transition-all duration-300 ease-in-out ${i}`,alt:"",loading:n<4?"eager":"lazy"}),e.jsx(B,{hash:(l==null?void 0:l.blurHash)||"LMB3vf%2IBIU~qozIUM{%fR*RjWB",width:"100%",height:"100%",resolutionX:32,resolutionY:32,punch:1,className:"absolute top-0 left-0 z-10"})]})})]})})},T=({children:l})=>e.jsx("button",{className:" text-blue-600 px-2 bg-[#F0F0F0] border-[1px] font-serif rounded-lg capitalize",children:l}),C=(l,a)=>{let n=a;return l.map(o=>{n.find(i=>i.toLocaleUpperCase()==o.category.toLocaleUpperCase())||n.push(o.category)}),n},k=l=>l.charAt(0).toUpperCase()+l.slice(1).toLowerCase();let f=["All"];const W=()=>{const l=M(s=>s.post.posts),{register:a,handleSubmit:n,watch:o,setValue:m}=Y(),[i,x]=t.useState(l),[g,j]=t.useState("All"),[v,$]=t.useState(4),[h,N]=t.useState([]),[z,u]=t.useState(!1),[y,w]=t.useState(0);function E(){u(!1)}function b(s){j(s);const r=l.filter(c=>c.category.toLocaleUpperCase()==s.toLocaleUpperCase());s!="All"?x(r):x(l)}const A=s=>{s==""&&N(C(l,f));const r=new RegExp(`^${s}`,"i");N(c=>c.filter(d=>r.test(d)))},D=s=>{const r=h.length;s.key==="ArrowDown"&&w(d=>(d+1)%r),s.key==="ArrowUp"&&w(d=>(d-1+r)%r);const c=h.find((d,I)=>I==y);m("search",k(c)),s.key==="Enter"&&b(c)};return t.useEffect(()=>{f=C(l,f),N(f)},[]),t.useEffect(()=>{const s=r=>{const c=r.target.parentElement;c.className.includes("search-filter-ul")||c.className.includes("filters")||u(!1)};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[]),console.log(o("search")),e.jsx("div",{className:"w-full",children:e.jsx(O,{children:e.jsxs("div",{className:"parent w-full flex-wrap flex gap-2 lg:gap-5 md:flex-row py-1",children:[e.jsx("div",{className:"home-left w-full xl:w-[18%] order-1 md:order-1",children:e.jsxs("div",{className:"w-1/2 md:w-1/3 lg:w-1/4 xl:w-full sm:px-6 xl:px-0 lg:my-4 rounded-lg",children:[e.jsx(p,{children:"Filtering Section"}),e.jsx("form",{onSubmit:n(E),className:"mt-4",children:e.jsx(R,{type:"text",placeholder:"Search Articles...",className:"border-[1px] border-black",onClick:()=>{u(!0)},onKeyDown:D,...a("search",{onChange:s=>{s.target.value==""&&x(l),s.target.value!=""&&u(!0),A(s.target.value)}})})}),e.jsx("div",{className:`w-full filtered-search-results shadow-xl rounded-lg bg-white 
                  ${z?"block":"hidden"}`,children:e.jsx("ul",{className:"search-filter-ul",children:h==null?void 0:h.map((s,r)=>e.jsx("li",{className:` hover:bg-gray-700 capitalize hover:text-white px-4 py-2 ${y===r&&"bg-gray-700 text-white"}`,onClick:()=>{m("search",k(s)),u(!1),b(o("search"))},children:s},s))})})]})}),e.jsxs("div",{className:`home-mid w-full  md:w-[70%] xl:w-[52%] min-h-96   md:border-r-[2px] xl:border-l-[2px] border-gray-100 py-0 sm:px-6 \r
        order-3  md:order-1 \r
          `,children:[e.jsx("div",{className:"w-full border-b-[1px] mb-3 border-gray-900 uppercase",children:e.jsx(p,{children:g})}),i.slice(0,v).map(s=>{const r=new Date(s==null?void 0:s.$createdAt);return e.jsx(K,{newdate:r,post:s},s.$id)}),i.length==0&&e.jsx("h2",{className:"text-3xl w-full font-semibold text-center",children:"No Posts To Show"}),e.jsx("div",{className:"mt-5",children:v<i.length&&e.jsx(H,{bgColor:"",textColor:"text-black",className:"border-[1px] border-black",onClick:()=>{$(s=>s+4)},children:"LoadMore"})})]}),e.jsxs("div",{className:"home-right w-full md:w-[27%] xl:w-[18%] order-2 md:order-1 ",children:[e.jsxs("div",{className:"top sm:px-6 xl:px-0",children:[e.jsx("div",{className:"my-3",children:e.jsx(p,{children:"Choose Category"})}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:f.map((s,r)=>e.jsx("span",{onClick:()=>{b(s)},children:e.jsx(T,{children:s})},r))})]}),e.jsxs("div",{className:"hidden md:block bottom",children:[e.jsx("div",{className:"my-3",children:e.jsx(p,{children:"Trending"})}),i.slice(3).map(s=>{const r=new Date(s==null?void 0:s.$createdAt);return e.jsx(L,{to:`/post/${s.$id}`,className:"",children:e.jsxs("div",{className:"flex gap-3 items-center border-b-[1px] border-gray-300 py-3",children:[e.jsx("div",{className:"left",children:e.jsx("img",{src:F.getFilePreview(s==null?void 0:s.featuredImage),className:"w-24 h-16 shadow-sm object-cover",alt:"",loading:"lazy"})}),e.jsxs("div",{className:"right w-full",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("p",{className:"text-[0.7rem] font-mono capitalize",children:s.userName}),e.jsxs("p",{className:"text-[0.7rem]",children:[S[r==null?void 0:r.getMonth()]," ",r==null?void 0:r.getDate(),",",r==null?void 0:r.getFullYear()]})]}),e.jsx("h3",{className:"mt-2 font-semibold text-[0.8rem] capitalize",children:s==null?void 0:s.title})]})]})},s.$id)})]})]})]})})})};export{W as default};