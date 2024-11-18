import{k as B,j as gt}from"./index-3HRFaF50.js";var oe=e=>e.type==="checkbox",se=e=>e instanceof Date,L=e=>e==null;const Ze=e=>typeof e=="object";var D=e=>!L(e)&&!Array.isArray(e)&&Ze(e)&&!se(e),vt=e=>D(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,ht=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,_t=(e,s)=>e.has(ht(s)),bt=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(r||D(e)))if(s=r?[]:{},!r&&!bt(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=M(e[l]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,d=(e,s,r)=>{if(!s||!D(e))return r;const l=Ve(s.split(/[,[\].]+?/)).reduce((n,a)=>L(n)?n:n[a],e);return w(l)||l===e?w(e[s])?r:e[s]:l},W=e=>typeof e=="boolean",Oe=e=>/^\w*$/.test(e),et=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,r)=>{let l=-1;const n=Oe(s)?[s]:et(s),a=n.length,g=a-1;for(;++l<a;){const v=n[l];let P=r;if(l!==g){const q=e[v];P=D(q)||Array.isArray(q)?q:isNaN(+n[l+1])?{}:[]}if(v==="__proto__")return;e[v]=P,e=e[v]}return e};const $e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};B.createContext(null);var Ft=(e,s,r,l=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const g=a;return s._proxyFormState[g]!==p.all&&(s._proxyFormState[g]=!l||p.all),e[g]}});return n},C=e=>D(e)&&!Object.keys(e).length,Vt=(e,s,r,l)=>{r(e);const{name:n,...a}=e;return C(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(g=>s[g]===p.all)},ge=e=>Array.isArray(e)?e:[e];function At(e){const s=B.useRef(e);s.current=e,B.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var $=e=>typeof e=="string",xt=(e,s,r,l,n)=>$(e)?(l&&s.watch.add(e),d(r,e,n)):Array.isArray(e)?e.map(a=>(l&&s.watch.add(a),d(r,a))):(l&&(s.watchAll=!0),r),wt=(e,s,r,l,n)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[l]:n||!0}}:{},He=e=>({isOnSubmit:!e||e===p.onSubmit,isOnBlur:e===p.onBlur,isOnChange:e===p.onChange,isOnAll:e===p.all,isOnTouch:e===p.onTouched}),je=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const ne=(e,s,r,l)=>{for(const n of r||Object.keys(e)){const a=d(e,n);if(a){const{_f:g,...v}=a;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],n)&&!l)return!0;if(g.ref&&s(g.ref,g.name)&&!l)return!0;if(ne(v,s))break}else if(D(v)&&ne(v,s))break}}};var Dt=(e,s,r)=>{const l=ge(d(e,r));return A(l,"root",s[r]),A(e,r,l),e},Le=e=>e.type==="file",z=e=>typeof e=="function",he=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>$(e),Ce=e=>e.type==="radio",_e=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var tt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Ke}return Ke};const ze={isValid:!1,value:null};var rt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,ze):ze;function Ge(e,s,r="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||W(e)&&!e)return{type:r,message:ve(e)?e:"",ref:s}}var re=e=>D(e)&&!_e(e)?e:{value:e,message:""},Je=async(e,s,r,l,n)=>{const{ref:a,refs:g,required:v,maxLength:P,minLength:q,min:x,max:_,pattern:fe,validate:G,name:U,valueAsNumber:Ae,mount:H,disabled:J}=e._f,b=d(s,U);if(!H||J)return{};const j=g?g[0]:a,K=h=>{l&&j.reportValidity&&(j.setCustomValidity(W(h)?"":h||""),j.reportValidity())},m={},ee=Ce(a),ce=oe(a),X=ee||ce,te=(Ae||Le(a))&&w(a.value)&&w(b)||he(a)&&a.value===""||b===""||Array.isArray(b)&&!b.length,N=wt.bind(null,U,r,m),de=(h,F,E,O=Y.maxLength,I=Y.minLength)=>{const R=h?F:E;m[U]={type:h?O:I,message:R,ref:a,...N(h?O:I,R)}};if(n?!Array.isArray(b)||!b.length:v&&(!X&&(te||L(b))||W(b)&&!b||ce&&!tt(g).isValid||ee&&!rt(g).isValid)){const{value:h,message:F}=ve(v)?{value:!!v,message:v}:re(v);if(h&&(m[U]={type:Y.required,message:F,ref:j,...N(Y.required,F)},!r))return K(F),m}if(!te&&(!L(x)||!L(_))){let h,F;const E=re(_),O=re(x);if(!L(b)&&!isNaN(b)){const I=a.valueAsNumber||b&&+b;L(E.value)||(h=I>E.value),L(O.value)||(F=I<O.value)}else{const I=a.valueAsDate||new Date(b),R=ae=>new Date(new Date().toDateString()+" "+ae),ie=a.type=="time",ue=a.type=="week";$(E.value)&&b&&(h=ie?R(b)>R(E.value):ue?b>E.value:I>new Date(E.value)),$(O.value)&&b&&(F=ie?R(b)<R(O.value):ue?b<O.value:I<new Date(O.value))}if((h||F)&&(de(!!h,E.message,O.message,Y.max,Y.min),!r))return K(m[U].message),m}if((P||q)&&!te&&($(b)||n&&Array.isArray(b))){const h=re(P),F=re(q),E=!L(h.value)&&b.length>+h.value,O=!L(F.value)&&b.length<+F.value;if((E||O)&&(de(E,h.message,F.message),!r))return K(m[U].message),m}if(fe&&!te&&$(b)){const{value:h,message:F}=re(fe);if(_e(h)&&!b.match(h)&&(m[U]={type:Y.pattern,message:F,ref:a,...N(Y.pattern,F)},!r))return K(F),m}if(G){if(z(G)){const h=await G(b,s),F=Ge(h,j);if(F&&(m[U]={...F,...N(Y.validate,F.message)},!r))return K(F.message),m}else if(D(G)){let h={};for(const F in G){if(!C(h)&&!r)break;const E=Ge(await G[F](b,s),j,F);E&&(h={...E,...N(F,E.message)},K(E.message),r&&(m[U]=h))}if(!C(h)&&(m[U]={ref:j,...h},!r))return m}}return K(!0),m};function mt(e,s){const r=s.slice(0,-1).length;let l=0;for(;l<r;)e=w(e)?l++:e[s[l++]];return e}function Et(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function k(e,s){const r=Array.isArray(s)?s:Oe(s)?[s]:et(s),l=r.length===1?e:mt(e,r),n=r.length-1,a=r[n];return l&&delete l[a],n!==0&&(D(l)&&C(l)||Array.isArray(l)&&Et(l))&&k(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}},be=e=>L(e)||!Ze(e);function Q(e,s){if(be(e)||be(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const r=Object.keys(e),l=Object.keys(s);if(r.length!==l.length)return!1;for(const n of r){const a=e[n];if(!l.includes(n))return!1;if(n!=="ref"){const g=s[n];if(se(a)&&se(g)||D(a)&&D(g)||Array.isArray(a)&&Array.isArray(g)?!Q(a,g):a!==g)return!1}}return!0}var st=e=>e.type==="select-multiple",kt=e=>Ce(e)||oe(e),ke=e=>he(e)&&e.isConnected,it=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function Fe(e,s={}){const r=Array.isArray(e);if(D(e)||r)for(const l in e)Array.isArray(e[l])||D(e[l])&&!it(e[l])?(s[l]=Array.isArray(e[l])?[]:{},Fe(e[l],s[l])):L(e[l])||(s[l]=!0);return s}function ut(e,s,r){const l=Array.isArray(e);if(D(e)||l)for(const n in e)Array.isArray(e[n])||D(e[n])&&!it(e[n])?w(s)||be(r[n])?r[n]=Array.isArray(e[n])?Fe(e[n],[]):{...Fe(e[n])}:ut(e[n],L(s)?{}:s[n],r[n]):r[n]=!Q(e[n],s[n]);return r}var ye=(e,s)=>ut(e,s,Fe(s)),at=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:l})=>w(e)?e:s?e===""?NaN:e&&+e:r&&$(e)?new Date(e):l?l(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Le(s)?s.files:Ce(s)?rt(e.refs).value:st(s)?[...s.selectedOptions].map(({value:r})=>r):oe(s)?tt(e.refs).value:at(w(s.value)?e.ref.value:s.value,e)}var St=(e,s,r,l)=>{const n={};for(const a of e){const g=d(s,a);g&&A(n,a,g._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:l}},le=e=>w(e)?e:_e(e)?e.source:D(e)?_e(e.value)?e.value.source:e.value:e;const Qe="AsyncFunction";var Tt=e=>(!e||!e.validate)&&!!(z(e.validate)&&e.validate.constructor.name===Qe||D(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Qe)),Ot=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,s,r){const l=d(e,r);if(l||Oe(r))return{error:l,name:r};const n=r.split(".");for(;n.length;){const a=n.join("."),g=d(s,a),v=d(e,a);if(g&&!Array.isArray(g)&&r!==a)return{name:r};if(v&&v.type)return{name:a,error:v};n.pop()}return{name:r}}var Lt=(e,s,r,l,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(s||e):(r?l.isOnBlur:n.isOnBlur)?!e:(r?l.isOnChange:n.isOnChange)?e:!0,Ct=(e,s)=>!Ve(d(e,s)).length&&k(e,s);const Ut={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0};function Nt(e={}){let s={...Ut,...e},r={submitCount:0,isDirty:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},n=D(s.defaultValues)||D(s.values)?M(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:M(n),g={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},P,q=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:Ee(),array:Ee(),state:Ee()},fe=He(s.mode),G=He(s.reValidateMode),U=s.criteriaMode===p.all,Ae=t=>i=>{clearTimeout(q),q=setTimeout(t,i)},H=async t=>{if(x.isValid||t){const i=s.resolver?C((await X()).errors):await N(l,!0);i!==r.isValid&&_.state.next({isValid:i})}},J=(t,i)=>{(x.isValidating||x.validatingFields)&&((t||Array.from(v.mount)).forEach(u=>{u&&(i?A(r.validatingFields,u,i):k(r.validatingFields,u))}),_.state.next({validatingFields:r.validatingFields,isValidating:!C(r.validatingFields)}))},b=(t,i=[],u,c,f=!0,o=!0)=>{if(c&&u){if(g.action=!0,o&&Array.isArray(d(l,t))){const y=u(d(l,t),c.argA,c.argB);f&&A(l,t,y)}if(o&&Array.isArray(d(r.errors,t))){const y=u(d(r.errors,t),c.argA,c.argB);f&&A(r.errors,t,y),Ct(r.errors,t)}if(x.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const y=u(d(r.touchedFields,t),c.argA,c.argB);f&&A(r.touchedFields,t,y)}x.dirtyFields&&(r.dirtyFields=ye(n,a)),_.state.next({name:t,isDirty:h(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else A(a,t,i)},j=(t,i)=>{A(r.errors,t,i),_.state.next({errors:r.errors})},K=t=>{r.errors=t,_.state.next({errors:r.errors,isValid:!1})},m=(t,i,u,c)=>{const f=d(l,t);if(f){const o=d(a,t,w(u)?d(n,t):u);w(o)||c&&c.defaultChecked||i?A(a,t,i?o:Se(f._f)):O(t,o),g.mount&&H()}},ee=(t,i,u,c,f)=>{let o=!1,y=!1;const V={name:t},S=!!(d(l,t)&&d(l,t)._f&&d(l,t)._f.disabled);if(!u||c){x.isDirty&&(y=r.isDirty,r.isDirty=V.isDirty=h(),o=y!==V.isDirty);const T=S||Q(d(n,t),i);y=!!(!S&&d(r.dirtyFields,t)),T||S?k(r.dirtyFields,t):A(r.dirtyFields,t,!0),V.dirtyFields=r.dirtyFields,o=o||x.dirtyFields&&y!==!T}if(u){const T=d(r.touchedFields,t);T||(A(r.touchedFields,t,u),V.touchedFields=r.touchedFields,o=o||x.touchedFields&&T!==u)}return o&&f&&_.state.next(V),o?V:{}},ce=(t,i,u,c)=>{const f=d(r.errors,t),o=x.isValid&&W(i)&&r.isValid!==i;if(e.delayError&&u?(P=Ae(()=>j(t,u)),P(e.delayError)):(clearTimeout(q),P=null,u?A(r.errors,t,u):k(r.errors,t)),(u?!Q(f,u):f)||!C(c)||o){const y={...c,...o&&W(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...y},_.state.next(y)}},X=async t=>{J(t,!0);const i=await s.resolver(a,s.context,St(t||v.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return J(t),i},te=async t=>{const{errors:i}=await X(t);if(t)for(const u of t){const c=d(i,u);c?A(r.errors,u,c):k(r.errors,u)}else r.errors=i;return i},N=async(t,i,u={valid:!0})=>{for(const c in t){const f=t[c];if(f){const{_f:o,...y}=f;if(o){const V=v.array.has(o.name),S=f._f&&Tt(f._f);S&&x.validatingFields&&J([c],!0);const T=await Je(f,a,U,s.shouldUseNativeValidation&&!i,V);if(S&&x.validatingFields&&J([c]),T[o.name]&&(u.valid=!1,i))break;!i&&(d(T,o.name)?V?Dt(r.errors,T,o.name):A(r.errors,o.name,T[o.name]):k(r.errors,o.name))}!C(y)&&await N(y,i,u)}}return u.valid},de=()=>{for(const t of v.unMount){const i=d(l,t);i&&(i._f.refs?i._f.refs.every(u=>!ke(u)):!ke(i._f.ref))&&xe(t)}v.unMount=new Set},h=(t,i)=>(t&&i&&A(a,t,i),!Q(Ue(),n)),F=(t,i,u)=>xt(t,v,{...g.mount?a:w(i)?n:$(t)?{[t]:i}:i},u,i),E=t=>Ve(d(g.mount?a:n,t,e.shouldUnregister?d(n,t,[]):[])),O=(t,i,u={})=>{const c=d(l,t);let f=i;if(c){const o=c._f;o&&(!o.disabled&&A(a,t,at(i,o)),f=he(o.ref)&&L(i)?"":i,st(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(V=>V===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:t,values:{...a}})))}(u.shouldDirty||u.shouldTouch)&&ee(t,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ae(t)},I=(t,i,u)=>{for(const c in i){const f=i[c],o=`${t}.${c}`,y=d(l,o);(v.array.has(t)||!be(f)||y&&!y._f)&&!se(f)?I(o,f,u):O(o,f,u)}},R=(t,i,u={})=>{const c=d(l,t),f=v.array.has(t),o=M(i);A(a,t,o),f?(_.array.next({name:t,values:{...a}}),(x.isDirty||x.dirtyFields)&&u.shouldDirty&&_.state.next({name:t,dirtyFields:ye(n,a),isDirty:h(t,o)})):c&&!c._f&&!L(o)?I(t,o,u):O(t,o,u),je(t,v)&&_.state.next({...r}),_.values.next({name:g.mount?t:void 0,values:{...a}})},ie=async t=>{g.mount=!0;const i=t.target;let u=i.name,c=!0;const f=d(l,u),o=()=>i.type?Se(f._f):vt(t),y=V=>{c=Number.isNaN(V)||Q(V,d(a,u,V))};if(f){let V,S;const T=o(),Z=t.type===$e.BLUR||t.type===$e.FOCUS_OUT,ct=!Ot(f._f)&&!s.resolver&&!d(r.errors,u)&&!f._f.deps||Lt(Z,d(r.touchedFields,u),r.isSubmitted,G,fe),De=je(u,v,Z);A(a,u,T),Z?(f._f.onBlur&&f._f.onBlur(t),P&&P(0)):f._f.onChange&&f._f.onChange(t);const me=ee(u,T,Z,!1),dt=!C(me)||De;if(!Z&&_.values.next({name:u,type:t.type,values:{...a}}),ct)return x.isValid&&(e.mode==="onBlur"?Z&&H():H()),dt&&_.state.next({name:u,...De?{}:me});if(!Z&&De&&_.state.next({...r}),s.resolver){const{errors:qe}=await X([u]);if(y(T),c){const yt=Xe(r.errors,l,u),We=Xe(qe,l,yt.name||u);V=We.error,u=We.name,S=C(qe)}}else J([u],!0),V=(await Je(f,a,U,s.shouldUseNativeValidation))[u],J([u]),y(T),c&&(V?S=!1:x.isValid&&(S=await N(l,!0)));c&&(f._f.deps&&ae(f._f.deps),ce(u,S,V,me))}},ue=(t,i)=>{if(d(r.errors,i)&&t.focus)return t.focus(),1},ae=async(t,i={})=>{let u,c;const f=ge(t);if(s.resolver){const o=await te(w(t)?t:f);u=C(o),c=t?!f.some(y=>d(o,y)):u}else t?(c=(await Promise.all(f.map(async o=>{const y=d(l,o);return await N(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!r.isValid)&&H()):c=u=await N(l);return _.state.next({...!$(t)||x.isValid&&u!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:u}:{},errors:r.errors}),i.shouldFocus&&!c&&ne(l,ue,t?f:v.mount),c},Ue=t=>{const i={...g.mount?a:n};return w(t)?i:$(t)?d(i,t):t.map(u=>d(i,u))},Ne=(t,i)=>({invalid:!!d((i||r).errors,t),isDirty:!!d((i||r).dirtyFields,t),error:d((i||r).errors,t),isValidating:!!d(r.validatingFields,t),isTouched:!!d((i||r).touchedFields,t)}),lt=t=>{t&&ge(t).forEach(i=>k(r.errors,i)),_.state.next({errors:t?r.errors:{}})},Re=(t,i,u)=>{const c=(d(l,t,{_f:{}})._f||{}).ref,f=d(r.errors,t)||{},{ref:o,message:y,type:V,...S}=f;A(r.errors,t,{...S,...i,ref:c}),_.state.next({name:t,errors:r.errors,isValid:!1}),u&&u.shouldFocus&&c&&c.focus&&c.focus()},nt=(t,i)=>z(t)?_.values.subscribe({next:u=>t(F(void 0,i),u)}):F(t,i,!0),xe=(t,i={})=>{for(const u of t?ge(t):v.mount)v.mount.delete(u),v.array.delete(u),i.keepValue||(k(l,u),k(a,u)),!i.keepError&&k(r.errors,u),!i.keepDirty&&k(r.dirtyFields,u),!i.keepTouched&&k(r.touchedFields,u),!i.keepIsValidating&&k(r.validatingFields,u),!s.shouldUnregister&&!i.keepDefaultValue&&k(n,u);_.values.next({values:{...a}}),_.state.next({...r,...i.keepDirty?{isDirty:h()}:{}}),!i.keepIsValid&&H()},Me=({disabled:t,name:i,field:u,fields:c,value:f})=>{if(W(t)&&g.mount||t){const o=t?void 0:w(f)?Se(u?u._f:d(c,i)._f):f;A(a,i,o),ee(i,o,!1,!1,!0)}},we=(t,i={})=>{let u=d(l,t);const c=W(i.disabled)||W(e.disabled);return A(l,t,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:t}},name:t,mount:!0,...i}}),v.mount.add(t),u?Me({field:u,disabled:W(i.disabled)?i.disabled:e.disabled,name:t,value:i.value}):m(t,!0,i.value),{...c?{disabled:i.disabled||e.disabled}:{},...s.progressive?{required:!!i.required,min:le(i.min),max:le(i.max),minLength:le(i.minLength),maxLength:le(i.maxLength),pattern:le(i.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:f=>{if(f){we(t,i),u=d(l,t);const o=w(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=kt(o),V=u._f.refs||[];if(y?V.find(S=>S===o):o===u._f.ref)return;A(l,t,{_f:{...u._f,...y?{refs:[...V.filter(ke),o,...Array.isArray(d(n,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),m(t,!1,void 0,o)}else u=d(l,t,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(_t(v.array,t)&&g.action)&&v.unMount.add(t)}}},Be=()=>s.shouldFocusError&&ne(l,ue,v.mount),ot=t=>{W(t)&&(_.state.next({disabled:t}),ne(l,(i,u)=>{const c=d(l,u);c&&(i.disabled=c._f.disabled||t,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||t}))},0,!1))},Pe=(t,i)=>async u=>{let c;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let f=M(a);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await X();r.errors=o,f=y}else await N(l);if(k(r.errors,"root"),C(r.errors)){_.state.next({errors:{}});try{await t(f,u)}catch(o){c=o}}else i&&await i({...r.errors},u),Be(),setTimeout(Be);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(r.errors)&&!c,submitCount:r.submitCount+1,errors:r.errors}),c)throw c},ft=(t,i={})=>{d(l,t)&&(w(i.defaultValue)?R(t,M(d(n,t))):(R(t,i.defaultValue),A(n,t,M(i.defaultValue))),i.keepTouched||k(r.touchedFields,t),i.keepDirty||(k(r.dirtyFields,t),r.isDirty=i.defaultValue?h(t,M(d(n,t))):h()),i.keepError||(k(r.errors,t),x.isValid&&H()),_.state.next({...r}))},Ie=(t,i={})=>{const u=t?M(t):n,c=M(u),f=C(t),o=f?n:c;if(i.keepDefaultValues||(n=u),!i.keepValues){if(i.keepDirtyValues)for(const y of v.mount)d(r.dirtyFields,y)?A(o,y,d(a,y)):R(y,d(o,y));else{if(Te&&w(t))for(const y of v.mount){const V=d(l,y);if(V&&V._f){const S=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(he(S)){const T=S.closest("form");if(T){T.reset();break}}}}l={}}a=e.shouldUnregister?i.keepDefaultValues?M(n):{}:M(o),_.array.next({values:{...o}}),_.values.next({values:{...o}})}v={mount:i.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!x.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:f?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!Q(t,n)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&a?ye(n,a):r.dirtyFields:i.keepDefaultValues&&t?ye(n,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},pe=(t,i)=>Ie(z(t)?t(a):t,i);return{control:{register:we,unregister:xe,getFieldState:Ne,handleSubmit:Pe,setError:Re,_executeSchema:X,_getWatch:F,_getDirty:h,_updateValid:H,_removeUnmounted:de,_updateFieldArray:b,_updateDisabledField:Me,_getFieldArray:E,_reset:Ie,_resetDefaultValues:()=>z(s.defaultValues)&&s.defaultValues().then(t=>{pe(t,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:ot,_subjects:_,_proxyFormState:x,_setErrors:K,get _fields(){return l},get _formValues(){return a},get _state(){return g},set _state(t){g=t},get _defaultValues(){return n},get _names(){return v},set _names(t){v=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ae,register:we,handleSubmit:Pe,watch:nt,setValue:R,getValues:Ue,reset:pe,resetField:ft,clearErrors:lt,unregister:xe,setError:Re,setFocus:(t,i={})=>{const u=d(l,t),c=u&&u._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ne}}function It(e={}){const s=B.useRef(),r=B.useRef(),[l,n]=B.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Nt(e),formState:l});const a=s.current.control;return a._options=e,At({subject:a._subjects.state,next:g=>{Vt(g,a._proxyFormState,a._updateFormState)&&n({...a._formState})}}),B.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),B.useEffect(()=>{if(a._proxyFormState.isDirty){const g=a._getDirty();g!==l.isDirty&&a._subjects.state.next({isDirty:g})}},[a,l.isDirty]),B.useEffect(()=>{e.values&&!Q(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,n(g=>({...g}))):a._resetDefaultValues()},[e.values,a]),B.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),B.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),B.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=Ft(l,a),s.current}const pt=({children:e,bgColor:s="bg-blue-600",textColor:r="text-white",className:l="",type:n="button",...a})=>gt.jsx("button",{className:`px-6 py-3 rounded-md ${l} ${r} ${s}`,...a,children:e});export{pt as B,It as u};
