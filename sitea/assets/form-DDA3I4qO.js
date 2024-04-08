import{I as b,r as W,b as Pr,_ as jr,j as se,c as ve,H as qr,W as Wr}from"./index-eTfknw9m.js";var be=e=>e.type==="checkbox",oe=e=>e instanceof Date,B=e=>e==null;const gr=e=>typeof e=="object";var U=e=>!B(e)&&!Array.isArray(e)&&gr(e)&&!oe(e),_r=e=>U(e)&&e.target?be(e.target)?e.target.checked:e.target.value:e,Hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,mr=(e,t)=>e.has(Hr(t)),Kr=e=>{const t=e.constructor&&e.constructor.prototype;return U(t)&&t.hasOwnProperty("isPrototypeOf")},ze=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(ze&&(e instanceof Blob||e instanceof FileList))&&(r||U(e)))if(t=r?[]:{},!r&&!Kr(e))t=e;else for(const i in e)e.hasOwnProperty(i)&&(t[i]=M(e[i]));else return e;return t}var de=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,c=(e,t,r)=>{if(!t||!U(e))return r;const i=de(t.split(/[,[\].]+?/)).reduce((n,u)=>B(n)?n:n[u],e);return E(i)||i===e?E(e[t])?r:e[t]:i},Y=e=>typeof e=="boolean";const pe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},te={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},hr=b.createContext(null),Fe=()=>b.useContext(hr),Gr=e=>{const{children:t,...r}=e;return b.createElement(hr.Provider,{value:r},t)};var vr=(e,t,r,i=!0)=>{const n={defaultValues:t._defaultValues};for(const u in e)Object.defineProperty(n,u,{get:()=>{const f=u;return t._proxyFormState[f]!==z.all&&(t._proxyFormState[f]=!i||z.all),r&&(r[f]=!0),e[f]}});return n},P=e=>U(e)&&!Object.keys(e).length,br=(e,t,r,i)=>{r(e);const{name:n,...u}=e;return P(u)||Object.keys(u).length>=Object.keys(t).length||Object.keys(u).find(f=>t[f]===(!i||z.all))},q=e=>Array.isArray(e)?e:[e],Fr=(e,t,r)=>!e||!t||e===t||q(e).some(i=>i&&(r?i===t:i.startsWith(t)||t.startsWith(i)));function Ee(e){const t=b.useRef(e);t.current=e,b.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function zr(e){const t=Fe(),{control:r=t.control,disabled:i,name:n,exact:u}=e||{},[f,_]=b.useState(r._formState),F=b.useRef(!0),R=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),x=b.useRef(n);return x.current=n,Ee({disabled:i,next:v=>F.current&&Fr(x.current,v.name,u)&&br(v,R.current,r._updateFormState)&&_({...r._formState,...v}),subject:r._subjects.state}),b.useEffect(()=>(F.current=!0,R.current.isValid&&r._updateValid(!0),()=>{F.current=!1}),[r]),vr(f,r,R.current,!1)}var re=e=>typeof e=="string",xr=(e,t,r,i,n)=>re(e)?(i&&t.watch.add(e),c(r,e,n)):Array.isArray(e)?e.map(u=>(i&&t.watch.add(u),c(r,u))):(i&&(t.watchAll=!0),r);function Jr(e){const t=Fe(),{control:r=t.control,name:i,defaultValue:n,disabled:u,exact:f}=e||{},_=b.useRef(i);_.current=i,Ee({disabled:u,subject:r._subjects.values,next:x=>{Fr(_.current,x.name,f)&&R(M(xr(_.current,r._names,x.values||r._formValues,!1,n)))}});const[F,R]=b.useState(r._getWatch(i,n));return b.useEffect(()=>r._removeUnmounted()),F}var Je=e=>/^\w*$/.test(e),Ar=e=>de(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,t,r)=>{let i=-1;const n=Je(t)?[t]:Ar(t),u=n.length,f=u-1;for(;++i<u;){const _=n[i];let F=r;if(i!==f){const R=e[_];F=U(R)||Array.isArray(R)?R:isNaN(+n[i+1])?{}:[]}e[_]=F,e=e[_]}return e};function Qr(e){const t=Fe(),{name:r,disabled:i,control:n=t.control,shouldUnregister:u}=e,f=mr(n._names.array,r),_=Jr({control:n,name:r,defaultValue:c(n._formValues,r,c(n._defaultValues,r,e.defaultValue)),exact:!0}),F=zr({control:n,name:r}),R=b.useRef(n.register(r,{...e.rules,value:_,...Y(e.disabled)?{disabled:e.disabled}:{}}));return b.useEffect(()=>{const x=n._options.shouldUnregister||u,v=(S,H)=>{const O=c(n._fields,S);O&&(O._f.mount=H)};if(v(r,!0),x){const S=M(c(n._options.defaultValues,r));k(n._defaultValues,r,S),E(c(n._formValues,r))&&k(n._formValues,r,S)}return()=>{(f?x&&!n._state.action:x)?n.unregister(r):v(r,!1)}},[r,n,f,u]),b.useEffect(()=>{c(n._fields,r)&&n._updateDisabledField({disabled:i,fields:n._fields,name:r,value:c(n._fields,r)._f.value})},[i,r,n]),{field:{name:r,value:_,...Y(i)||F.disabled?{disabled:F.disabled||i}:{},onChange:b.useCallback(x=>R.current.onChange({target:{value:_r(x),name:r},type:pe.CHANGE}),[r]),onBlur:b.useCallback(()=>R.current.onBlur({target:{value:c(n._formValues,r),name:r},type:pe.BLUR}),[r,n]),ref:x=>{const v=c(n._fields,r);v&&x&&(v._f.ref={focus:()=>x.focus(),select:()=>x.select(),setCustomValidity:S=>x.setCustomValidity(S),reportValidity:()=>x.reportValidity()})}},formState:F,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(F.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(F.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(F.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!c(F.validatingFields,r)},error:{enumerable:!0,get:()=>c(F.errors,r)}})}}const Xr=e=>e.render(Qr(e));var Yr=(e,t,r,i,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:n||!0}}:{},ie=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})},Ue=(e,t,r={})=>r.shouldFocus||E(r.shouldFocus)?r.focusName||`${e}.${E(r.focusIndex)?t:r.focusIndex}.`:"",he=e=>({isOnSubmit:!e||e===z.onSubmit,isOnBlur:e===z.onBlur,isOnChange:e===z.onChange,isOnAll:e===z.all,isOnTouch:e===z.onTouched}),Ke=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const ce=(e,t,r,i)=>{for(const n of r||Object.keys(e)){const u=c(e,n);if(u){const{_f:f,..._}=u;if(f){if(f.refs&&f.refs[0]&&t(f.refs[0],n)&&!i)break;if(f.ref&&t(f.ref,f.name)&&!i)break;ce(_,t)}else U(_)&&ce(_,t)}}};var Vr=(e,t,r)=>{const i=de(c(e,r));return k(i,"root",t[r]),k(e,r,i),e},Qe=e=>e.type==="file",ae=e=>typeof e=="function",we=e=>{if(!ze)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ve=e=>re(e),Xe=e=>e.type==="radio",De=e=>e instanceof RegExp;const lr={value:!1,isValid:!1},or={value:!0,isValid:!0};var pr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?or:{value:e[0].value,isValid:!0}:or:lr}return lr};const cr={isValid:!1,value:null};var wr=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,cr):cr;function dr(e,t,r="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||Y(e)&&!e)return{type:r,message:Ve(e)?e:"",ref:t}}var le=e=>U(e)&&!De(e)?e:{value:e,message:""},Ge=async(e,t,r,i,n)=>{const{ref:u,refs:f,required:_,maxLength:F,minLength:R,min:x,max:v,pattern:S,validate:H,name:O,valueAsNumber:fe,mount:Z,disabled:ee}=e._f,p=c(t,O);if(!Z||ee)return{};const J=f?f[0]:u,Q=V=>{i&&J.reportValidity&&(J.setCustomValidity(Y(V)?"":V||""),J.reportValidity())},g={},h=Xe(u),A=be(u),C=h||A,K=(fe||Qe(u))&&E(u.value)&&E(p)||we(u)&&u.value===""||p===""||Array.isArray(p)&&!p.length,$=Yr.bind(null,O,r,g),xe=(V,w,L,T=te.maxLength,X=te.minLength)=>{const G=V?w:L;g[O]={type:V?T:X,message:G,ref:u,...$(V?T:X,G)}};if(n?!Array.isArray(p)||!p.length:_&&(!C&&(K||B(p))||Y(p)&&!p||A&&!pr(f).isValid||h&&!wr(f).isValid)){const{value:V,message:w}=Ve(_)?{value:!!_,message:_}:le(_);if(V&&(g[O]={type:te.required,message:w,ref:J,...$(te.required,w)},!r))return Q(w),g}if(!K&&(!B(x)||!B(v))){let V,w;const L=le(v),T=le(x);if(!B(p)&&!isNaN(p)){const X=u.valueAsNumber||p&&+p;B(L.value)||(V=X>L.value),B(T.value)||(w=X<T.value)}else{const X=u.valueAsDate||new Date(p),G=_e=>new Date(new Date().toDateString()+" "+_e),ye=u.type=="time",ge=u.type=="week";re(L.value)&&p&&(V=ye?G(p)>G(L.value):ge?p>L.value:X>new Date(L.value)),re(T.value)&&p&&(w=ye?G(p)<G(T.value):ge?p<T.value:X<new Date(T.value))}if((V||w)&&(xe(!!V,L.message,T.message,te.max,te.min),!r))return Q(g[O].message),g}if((F||R)&&!K&&(re(p)||n&&Array.isArray(p))){const V=le(F),w=le(R),L=!B(V.value)&&p.length>+V.value,T=!B(w.value)&&p.length<+w.value;if((L||T)&&(xe(L,V.message,w.message),!r))return Q(g[O].message),g}if(S&&!K&&re(p)){const{value:V,message:w}=le(S);if(De(V)&&!p.match(V)&&(g[O]={type:te.pattern,message:w,ref:u,...$(te.pattern,w)},!r))return Q(w),g}if(H){if(ae(H)){const V=await H(p,t),w=dr(V,J);if(w&&(g[O]={...w,...$(te.validate,w.message)},!r))return Q(w.message),g}else if(U(H)){let V={};for(const w in H){if(!P(V)&&!r)break;const L=dr(await H[w](p,t),J,w);L&&(V={...L,...$(w,L.message)},Q(L.message),r&&(g[O]=V))}if(!P(V)&&(g[O]={ref:J,...V},!r))return g}}return Q(!0),g},Oe=(e,t)=>[...e,...q(t)],Ne=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Te(e,t,r){return[...e.slice(0,t),...q(r),...e.slice(t)]}var $e=(e,t,r)=>Array.isArray(e)?(E(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[],Be=(e,t)=>[...q(t),...q(e)];function Zr(e,t){let r=0;const i=[...e];for(const n of t)i.splice(n-r,1),r++;return de(i).length?i:[]}var Pe=(e,t)=>E(t)?[]:Zr(e,q(t).sort((r,i)=>r-i)),je=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]};function et(e,t){const r=t.slice(0,-1).length;let i=0;for(;i<r;)e=E(e)?i++:e[t[i++]];return e}function rt(e){for(const t in e)if(e.hasOwnProperty(t)&&!E(e[t]))return!1;return!0}function I(e,t){const r=Array.isArray(t)?t:Je(t)?[t]:Ar(t),i=r.length===1?e:et(e,r),n=r.length-1,u=r[n];return i&&delete i[u],n!==0&&(U(i)&&P(i)||Array.isArray(i)&&rt(i))&&I(e,r.slice(0,-1)),e}var fr=(e,t,r)=>(e[t]=r,e);function Ft(e){const t=Fe(),{control:r=t.control,name:i,keyName:n="id",shouldUnregister:u}=e,[f,_]=b.useState(r._getFieldArray(i)),F=b.useRef(r._getFieldArray(i).map(ie)),R=b.useRef(f),x=b.useRef(i),v=b.useRef(!1);x.current=i,R.current=f,r._names.array.add(i),e.rules&&r.register(i,e.rules),Ee({next:({values:g,name:h})=>{if(h===x.current||!h){const A=c(g,x.current);Array.isArray(A)&&(_(A),F.current=A.map(ie))}},subject:r._subjects.array});const S=b.useCallback(g=>{v.current=!0,r._updateFieldArray(i,g)},[r,i]),H=(g,h)=>{const A=q(M(g)),C=Oe(r._getFieldArray(i),A);r._names.focus=Ue(i,C.length-1,h),F.current=Oe(F.current,A.map(ie)),S(C),_(C),r._updateFieldArray(i,C,Oe,{argA:Ne(g)})},O=(g,h)=>{const A=q(M(g)),C=Be(r._getFieldArray(i),A);r._names.focus=Ue(i,0,h),F.current=Be(F.current,A.map(ie)),S(C),_(C),r._updateFieldArray(i,C,Be,{argA:Ne(g)})},fe=g=>{const h=Pe(r._getFieldArray(i),g);F.current=Pe(F.current,g),S(h),_(h),r._updateFieldArray(i,h,Pe,{argA:g})},Z=(g,h,A)=>{const C=q(M(h)),K=Te(r._getFieldArray(i),g,C);r._names.focus=Ue(i,g,A),F.current=Te(F.current,g,C.map(ie)),S(K),_(K),r._updateFieldArray(i,K,Te,{argA:g,argB:Ne(h)})},ee=(g,h)=>{const A=r._getFieldArray(i);je(A,g,h),je(F.current,g,h),S(A),_(A),r._updateFieldArray(i,A,je,{argA:g,argB:h},!1)},p=(g,h)=>{const A=r._getFieldArray(i);$e(A,g,h),$e(F.current,g,h),S(A),_(A),r._updateFieldArray(i,A,$e,{argA:g,argB:h},!1)},J=(g,h)=>{const A=M(h),C=fr(r._getFieldArray(i),g,A);F.current=[...C].map((K,$)=>!K||$===g?ie():F.current[$]),S(C),_([...C]),r._updateFieldArray(i,C,fr,{argA:g,argB:A},!0,!1)},Q=g=>{const h=q(M(g));F.current=h.map(ie),S([...h]),_([...h]),r._updateFieldArray(i,[...h],A=>A,{},!0,!1)};return b.useEffect(()=>{if(r._state.action=!1,Ke(i,r._names)&&r._subjects.state.next({...r._formState}),v.current&&(!he(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([i]).then(g=>{const h=c(g.errors,i),A=c(r._formState.errors,i);(A?!h&&A.type||h&&(A.type!==h.type||A.message!==h.message):h&&h.type)&&(h?k(r._formState.errors,i,h):I(r._formState.errors,i),r._subjects.state.next({errors:r._formState.errors}))});else{const g=c(r._fields,i);g&&g._f&&!(he(r._options.reValidateMode).isOnSubmit&&he(r._options.mode).isOnSubmit)&&Ge(g,r._formValues,r._options.criteriaMode===z.all,r._options.shouldUseNativeValidation,!0).then(h=>!P(h)&&r._subjects.state.next({errors:Vr(r._formState.errors,h,i)}))}r._subjects.values.next({name:i,values:{...r._formValues}}),r._names.focus&&ce(r._fields,(g,h)=>{if(r._names.focus&&h.startsWith(r._names.focus)&&g.focus)return g.focus(),1}),r._names.focus="",r._updateValid(),v.current=!1},[f,i,r]),b.useEffect(()=>(!c(r._formValues,i)&&r._updateFieldArray(i),()=>{(r._options.shouldUnregister||u)&&r.unregister(i)}),[i,r,n,u]),{swap:b.useCallback(ee,[S,i,r]),move:b.useCallback(p,[S,i,r]),prepend:b.useCallback(O,[S,i,r]),append:b.useCallback(H,[S,i,r]),remove:b.useCallback(fe,[S,i,r]),insert:b.useCallback(Z,[S,i,r]),update:b.useCallback(J,[S,i,r]),replace:b.useCallback(Q,[S,i,r]),fields:b.useMemo(()=>f.map((g,h)=>({...g,[n]:F.current[h]||ie()})),[f,n])}}var qe=()=>{let e=[];return{get observers(){return e},next:n=>{for(const u of e)u.next&&u.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(u=>u!==n)}}),unsubscribe:()=>{e=[]}}},Se=e=>B(e)||!gr(e);function ne(e,t){if(Se(e)||Se(t))return e===t;if(oe(e)&&oe(t))return e.getTime()===t.getTime();const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(const n of r){const u=e[n];if(!i.includes(n))return!1;if(n!=="ref"){const f=t[n];if(oe(u)&&oe(f)||U(u)&&U(f)||Array.isArray(u)&&Array.isArray(f)?!ne(u,f):u!==f)return!1}}return!0}var Dr=e=>e.type==="select-multiple",tt=e=>Xe(e)||be(e),We=e=>we(e)&&e.isConnected,Sr=e=>{for(const t in e)if(ae(e[t]))return!0;return!1};function ke(e,t={}){const r=Array.isArray(e);if(U(e)||r)for(const i in e)Array.isArray(e[i])||U(e[i])&&!Sr(e[i])?(t[i]=Array.isArray(e[i])?[]:{},ke(e[i],t[i])):B(e[i])||(t[i]=!0);return t}function kr(e,t,r){const i=Array.isArray(e);if(U(e)||i)for(const n in e)Array.isArray(e[n])||U(e[n])&&!Sr(e[n])?E(t)||Se(r[n])?r[n]=Array.isArray(e[n])?ke(e[n],[]):{...ke(e[n])}:kr(e[n],B(t)?{}:t[n],r[n]):r[n]=!ne(e[n],t[n]);return r}var Ae=(e,t)=>kr(e,t,ke(t)),Er=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>E(e)?e:t?e===""?NaN:e&&+e:r&&re(e)?new Date(e):i?i(e):e;function He(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return Qe(t)?t.files:Xe(t)?wr(e.refs).value:Dr(t)?[...t.selectedOptions].map(({value:r})=>r):be(t)?pr(e.refs).value:Er(E(t.value)?e.ref.value:t.value,e)}var st=(e,t,r,i)=>{const n={};for(const u of e){const f=c(t,u);f&&k(n,u,f._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:i}},me=e=>E(e)?e:De(e)?e.source:U(e)?De(e.value)?e.value.source:e.value:e,it=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function yr(e,t,r){const i=c(e,r);if(i||Je(r))return{error:i,name:r};const n=r.split(".");for(;n.length;){const u=n.join("."),f=c(t,u),_=c(e,u);if(f&&!Array.isArray(f)&&r!==u)return{name:r};if(_&&_.type)return{name:u,error:_};n.pop()}return{name:r}}var at=(e,t,r,i,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(t||e):(r?i.isOnBlur:n.isOnBlur)?!e:(r?i.isOnChange:n.isOnChange)?e:!0,nt=(e,t)=>!de(c(e,t)).length&&I(e,t);const ut={mode:z.onSubmit,reValidateMode:z.onChange,shouldFocusError:!0};function lt(e={}){let t={...ut,...e},r={submitCount:0,isDirty:!1,isLoading:ae(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},i={},n=U(t.defaultValues)||U(t.values)?M(t.defaultValues||t.values)||{}:{},u=t.shouldUnregister?{}:M(n),f={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F,R=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:qe(),array:qe(),state:qe()},S=he(t.mode),H=he(t.reValidateMode),O=t.criteriaMode===z.all,fe=s=>a=>{clearTimeout(R),R=setTimeout(s,a)},Z=async s=>{if(x.isValid||s){const a=t.resolver?P((await C()).errors):await $(i,!0);a!==r.isValid&&v.state.next({isValid:a})}},ee=(s,a)=>{(x.isValidating||x.validatingFields)&&((s||Array.from(_.mount)).forEach(l=>{l&&(a?k(r.validatingFields,l,a):I(r.validatingFields,l))}),v.state.next({validatingFields:r.validatingFields,isValidating:!P(r.validatingFields)}))},p=(s,a=[],l,y,d=!0,o=!0)=>{if(y&&l){if(f.action=!0,o&&Array.isArray(c(i,s))){const m=l(c(i,s),y.argA,y.argB);d&&k(i,s,m)}if(o&&Array.isArray(c(r.errors,s))){const m=l(c(r.errors,s),y.argA,y.argB);d&&k(r.errors,s,m),nt(r.errors,s)}if(x.touchedFields&&o&&Array.isArray(c(r.touchedFields,s))){const m=l(c(r.touchedFields,s),y.argA,y.argB);d&&k(r.touchedFields,s,m)}x.dirtyFields&&(r.dirtyFields=Ae(n,u)),v.state.next({name:s,isDirty:V(s,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else k(u,s,a)},J=(s,a)=>{k(r.errors,s,a),v.state.next({errors:r.errors})},Q=s=>{r.errors=s,v.state.next({errors:r.errors,isValid:!1})},g=(s,a,l,y)=>{const d=c(i,s);if(d){const o=c(u,s,E(l)?c(n,s):l);E(o)||y&&y.defaultChecked||a?k(u,s,a?o:He(d._f)):T(s,o),f.mount&&Z()}},h=(s,a,l,y,d)=>{let o=!1,m=!1;const D={name:s},N=!!(c(i,s)&&c(i,s)._f.disabled);if(!l||y){x.isDirty&&(m=r.isDirty,r.isDirty=D.isDirty=V(),o=m!==D.isDirty);const j=N||ne(c(n,s),a);m=!!(!N&&c(r.dirtyFields,s)),j||N?I(r.dirtyFields,s):k(r.dirtyFields,s,!0),D.dirtyFields=r.dirtyFields,o=o||x.dirtyFields&&m!==!j}if(l){const j=c(r.touchedFields,s);j||(k(r.touchedFields,s,l),D.touchedFields=r.touchedFields,o=o||x.touchedFields&&j!==l)}return o&&d&&v.state.next(D),o?D:{}},A=(s,a,l,y)=>{const d=c(r.errors,s),o=x.isValid&&Y(a)&&r.isValid!==a;if(e.delayError&&l?(F=fe(()=>J(s,l)),F(e.delayError)):(clearTimeout(R),F=null,l?k(r.errors,s,l):I(r.errors,s)),(l?!ne(d,l):d)||!P(y)||o){const m={...y,...o&&Y(a)?{isValid:a}:{},errors:r.errors,name:s};r={...r,...m},v.state.next(m)}},C=async s=>{ee(s,!0);const a=await t.resolver(u,t.context,st(s||_.mount,i,t.criteriaMode,t.shouldUseNativeValidation));return ee(s),a},K=async s=>{const{errors:a}=await C(s);if(s)for(const l of s){const y=c(a,l);y?k(r.errors,l,y):I(r.errors,l)}else r.errors=a;return a},$=async(s,a,l={valid:!0})=>{for(const y in s){const d=s[y];if(d){const{_f:o,...m}=d;if(o){const D=_.array.has(o.name);ee([y],!0);const N=await Ge(d,u,O,t.shouldUseNativeValidation&&!a,D);if(ee([y]),N[o.name]&&(l.valid=!1,a))break;!a&&(c(N,o.name)?D?Vr(r.errors,N,o.name):k(r.errors,o.name,N[o.name]):I(r.errors,o.name))}m&&await $(m,a,l)}}return l.valid},xe=()=>{for(const s of _.unMount){const a=c(i,s);a&&(a._f.refs?a._f.refs.every(l=>!We(l)):!We(a._f.ref))&&Re(s)}_.unMount=new Set},V=(s,a)=>(s&&a&&k(u,s,a),!ne(Ye(),n)),w=(s,a,l)=>xr(s,_,{...f.mount?u:E(a)?n:re(s)?{[s]:a}:a},l,a),L=s=>de(c(f.mount?u:n,s,e.shouldUnregister?c(n,s,[]):[])),T=(s,a,l={})=>{const y=c(i,s);let d=a;if(y){const o=y._f;o&&(!o.disabled&&k(u,s,Er(a,o)),d=we(o.ref)&&B(a)?"":a,Dr(o.ref)?[...o.ref.options].forEach(m=>m.selected=d.includes(m.value)):o.refs?be(o.ref)?o.refs.length>1?o.refs.forEach(m=>(!m.defaultChecked||!m.disabled)&&(m.checked=Array.isArray(d)?!!d.find(D=>D===m.value):d===m.value)):o.refs[0]&&(o.refs[0].checked=!!d):o.refs.forEach(m=>m.checked=m.value===d):Qe(o.ref)?o.ref.value="":(o.ref.value=d,o.ref.type||v.values.next({name:s,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&h(s,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&_e(s)},X=(s,a,l)=>{for(const y in a){const d=a[y],o=`${s}.${y}`,m=c(i,o);(_.array.has(s)||!Se(d)||m&&!m._f)&&!oe(d)?X(o,d,l):T(o,d,l)}},G=(s,a,l={})=>{const y=c(i,s),d=_.array.has(s),o=M(a);k(u,s,o),d?(v.array.next({name:s,values:{...u}}),(x.isDirty||x.dirtyFields)&&l.shouldDirty&&v.state.next({name:s,dirtyFields:Ae(n,u),isDirty:V(s,o)})):y&&!y._f&&!B(o)?X(s,o,l):T(s,o,l),Ke(s,_)&&v.state.next({...r}),v.values.next({name:f.mount?s:void 0,values:{...u}})},ye=async s=>{const a=s.target;let l=a.name,y=!0;const d=c(i,l),o=()=>a.type?He(d._f):_r(s),m=D=>{y=Number.isNaN(D)||D===c(u,l,D)};if(d){let D,N;const j=o(),ue=s.type===pe.BLUR||s.type===pe.FOCUS_OUT,Tr=!it(d._f)&&!t.resolver&&!c(r.errors,l)&&!d._f.deps||at(ue,c(r.touchedFields,l),r.isSubmitted,H,S),Le=Ke(l,_,ue);k(u,l,j),ue?(d._f.onBlur&&d._f.onBlur(s),F&&F(0)):d._f.onChange&&d._f.onChange(s);const Me=h(l,j,ue,!1),$r=!P(Me)||Le;if(!ue&&v.values.next({name:l,type:s.type,values:{...u}}),Tr)return x.isValid&&Z(),$r&&v.state.next({name:l,...Le?{}:Me});if(!ue&&Le&&v.state.next({...r}),t.resolver){const{errors:nr}=await C([l]);if(m(j),y){const Br=yr(r.errors,i,l),ur=yr(nr,i,Br.name||l);D=ur.error,l=ur.name,N=P(nr)}}else ee([l],!0),D=(await Ge(d,u,O,t.shouldUseNativeValidation))[l],ee([l]),m(j),y&&(D?N=!1:x.isValid&&(N=await $(i,!0)));y&&(d._f.deps&&_e(d._f.deps),A(l,N,D,Me))}},ge=(s,a)=>{if(c(r.errors,a)&&s.focus)return s.focus(),1},_e=async(s,a={})=>{let l,y;const d=q(s);if(t.resolver){const o=await K(E(s)?s:d);l=P(o),y=s?!d.some(m=>c(o,m)):l}else s?(y=(await Promise.all(d.map(async o=>{const m=c(i,o);return await $(m&&m._f?{[o]:m}:m)}))).every(Boolean),!(!y&&!r.isValid)&&Z()):y=l=await $(i);return v.state.next({...!re(s)||x.isValid&&l!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:l}:{},errors:r.errors}),a.shouldFocus&&!y&&ce(i,ge,s?d:_.mount),y},Ye=s=>{const a={...n,...f.mount?u:{}};return E(s)?a:re(s)?c(a,s):s.map(l=>c(a,l))},Ze=(s,a)=>({invalid:!!c((a||r).errors,s),isDirty:!!c((a||r).dirtyFields,s),isTouched:!!c((a||r).touchedFields,s),isValidating:!!c((a||r).validatingFields,s),error:c((a||r).errors,s)}),Mr=s=>{s&&q(s).forEach(a=>I(r.errors,a)),v.state.next({errors:s?r.errors:{}})},er=(s,a,l)=>{const y=(c(i,s,{_f:{}})._f||{}).ref;k(r.errors,s,{...a,ref:y}),v.state.next({name:s,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},Ur=(s,a)=>ae(s)?v.values.subscribe({next:l=>s(w(void 0,a),l)}):w(s,a,!0),Re=(s,a={})=>{for(const l of s?q(s):_.mount)_.mount.delete(l),_.array.delete(l),a.keepValue||(I(i,l),I(u,l)),!a.keepError&&I(r.errors,l),!a.keepDirty&&I(r.dirtyFields,l),!a.keepTouched&&I(r.touchedFields,l),!a.keepIsValidating&&I(r.validatingFields,l),!t.shouldUnregister&&!a.keepDefaultValue&&I(n,l);v.values.next({values:{...u}}),v.state.next({...r,...a.keepDirty?{isDirty:V()}:{}}),!a.keepIsValid&&Z()},rr=({disabled:s,name:a,field:l,fields:y,value:d})=>{if(Y(s)){const o=s?void 0:E(d)?He(l?l._f:c(y,a)._f):d;k(u,a,o),h(a,o,!1,!1,!0)}},Ie=(s,a={})=>{let l=c(i,s);const y=Y(a.disabled);return k(i,s,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:s}},name:s,mount:!0,...a}}),_.mount.add(s),l?rr({field:l,disabled:a.disabled,name:s,value:a.value}):g(s,!0,a.value),{...y?{disabled:a.disabled}:{},...t.progressive?{required:!!a.required,min:me(a.min),max:me(a.max),minLength:me(a.minLength),maxLength:me(a.maxLength),pattern:me(a.pattern)}:{},name:s,onChange:ye,onBlur:ye,ref:d=>{if(d){Ie(s,a),l=c(i,s);const o=E(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,m=tt(o),D=l._f.refs||[];if(m?D.find(N=>N===o):o===l._f.ref)return;k(i,s,{_f:{...l._f,...m?{refs:[...D.filter(We),o,...Array.isArray(c(n,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),g(s,!1,void 0,o)}else l=c(i,s,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||a.shouldUnregister)&&!(mr(_.array,s)&&f.action)&&_.unMount.add(s)}}},tr=()=>t.shouldFocusError&&ce(i,ge,_.mount),Or=s=>{Y(s)&&(v.state.next({disabled:s}),ce(i,(a,l)=>{let y=s;const d=c(i,l);d&&Y(d._f.disabled)&&(y||(y=d._f.disabled)),a.disabled=y},0,!1))},sr=(s,a)=>async l=>{let y;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=M(u);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:o,values:m}=await C();r.errors=o,d=m}else await $(i);if(I(r.errors,"root"),P(r.errors)){v.state.next({errors:{}});try{await s(d,l)}catch(o){y=o}}else a&&await a({...r.errors},l),tr(),setTimeout(tr);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(r.errors)&&!y,submitCount:r.submitCount+1,errors:r.errors}),y)throw y},Nr=(s,a={})=>{c(i,s)&&(E(a.defaultValue)?G(s,M(c(n,s))):(G(s,a.defaultValue),k(n,s,M(a.defaultValue))),a.keepTouched||I(r.touchedFields,s),a.keepDirty||(I(r.dirtyFields,s),r.isDirty=a.defaultValue?V(s,M(c(n,s))):V()),a.keepError||(I(r.errors,s),x.isValid&&Z()),v.state.next({...r}))},ir=(s,a={})=>{const l=s?M(s):n,y=M(l),d=P(s),o=d?n:y;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues)for(const m of _.mount)c(r.dirtyFields,m)?k(o,m,c(u,m)):G(m,c(o,m));else{if(ze&&E(s))for(const m of _.mount){const D=c(i,m);if(D&&D._f){const N=Array.isArray(D._f.refs)?D._f.refs[0]:D._f.ref;if(we(N)){const j=N.closest("form");if(j){j.reset();break}}}}i={}}u=e.shouldUnregister?a.keepDefaultValues?M(n):{}:M(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}_={mount:a.keepDirtyValues?_.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!x.isValid||!!a.keepIsValid||!!a.keepDirtyValues,f.watch=!!e.shouldUnregister,v.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:d?!1:a.keepDirty?r.isDirty:!!(a.keepDefaultValues&&!ne(s,n)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?[]:a.keepDirtyValues?a.keepDefaultValues&&u?Ae(n,u):r.dirtyFields:a.keepDefaultValues&&s?Ae(n,s):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ar=(s,a)=>ir(ae(s)?s(u):s,a);return{control:{register:Ie,unregister:Re,getFieldState:Ze,handleSubmit:sr,setError:er,_executeSchema:C,_getWatch:w,_getDirty:V,_updateValid:Z,_removeUnmounted:xe,_updateFieldArray:p,_updateDisabledField:rr,_getFieldArray:L,_reset:ir,_resetDefaultValues:()=>ae(t.defaultValues)&&t.defaultValues().then(s=>{ar(s,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{r={...r,...s}},_disableForm:Or,_subjects:v,_proxyFormState:x,_setErrors:Q,get _fields(){return i},get _formValues(){return u},get _state(){return f},set _state(s){f=s},get _defaultValues(){return n},get _names(){return _},set _names(s){_=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:_e,register:Ie,handleSubmit:sr,watch:Ur,setValue:G,getValues:Ye,reset:ar,resetField:Nr,clearErrors:Mr,unregister:Re,setError:er,setFocus:(s,a={})=>{const l=c(i,s),y=l&&l._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Ze}}function xt(e={}){const t=b.useRef(),r=b.useRef(),[i,n]=b.useState({isDirty:!1,isValidating:!1,isLoading:ae(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ae(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...lt(e),formState:i});const u=t.current.control;return u._options=e,Ee({subject:u._subjects.state,next:f=>{br(f,u._proxyFormState,u._updateFormState,!0)&&n({...u._formState})}}),b.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),b.useEffect(()=>{if(u._proxyFormState.isDirty){const f=u._getDirty();f!==i.isDirty&&u._subjects.state.next({isDirty:f})}},[u,i.isDirty]),b.useEffect(()=>{e.values&&!ne(e.values,r.current)?(u._reset(e.values,u._options.resetOptions),r.current=e.values,n(f=>({...f}))):u._resetDefaultValues()},[e.values,u]),b.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),b.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),b.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),t.current.formState=vr(i,u),t.current}const ot=W.forwardRef((e,t)=>W.createElement(Pr.label,jr({},e,{ref:t,onMouseDown:r=>{var i;(i=e.onMouseDown)===null||i===void 0||i.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}}))),Cr=ot,ct=qr("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Rr=W.forwardRef(({className:e,...t},r)=>se.jsx(Cr,{ref:r,className:ve(ct(),e),...t}));Rr.displayName=Cr.displayName;const At=Gr,Ir=W.createContext({}),Vt=({...e})=>se.jsx(Ir.Provider,{value:{name:e.name},children:se.jsx(Xr,{...e})}),Ce=()=>{const e=W.useContext(Ir),t=W.useContext(Lr),{getFieldState:r,formState:i}=Fe(),n=r(e.name,i);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:u}=t;return{id:u,name:e.name,formItemId:`${u}-form-item`,formDescriptionId:`${u}-form-item-description`,formMessageId:`${u}-form-item-message`,...n}},Lr=W.createContext({}),dt=W.forwardRef(({className:e,...t},r)=>{const i=W.useId();return se.jsx(Lr.Provider,{value:{id:i},children:se.jsx("div",{ref:r,className:ve("space-y-2",e),...t})})});dt.displayName="FormItem";const ft=W.forwardRef(({className:e,...t},r)=>{const{error:i,formItemId:n}=Ce();return se.jsx(Rr,{ref:r,className:ve(i&&"text-destructive",e),htmlFor:n,...t})});ft.displayName="FormLabel";const yt=W.forwardRef(({...e},t)=>{const{error:r,formItemId:i,formDescriptionId:n,formMessageId:u}=Ce();return se.jsx(Wr,{ref:t,id:i,"aria-describedby":r?`${n} ${u}`:`${n}`,"aria-invalid":!!r,...e})});yt.displayName="FormControl";const gt=W.forwardRef(({className:e,...t},r)=>{const{formDescriptionId:i}=Ce();return se.jsx("p",{ref:r,id:i,className:ve("text-[0.8rem] text-muted-foreground",e),...t})});gt.displayName="FormDescription";const _t=W.forwardRef(({className:e,children:t,...r},i)=>{const{error:n,formMessageId:u}=Ce(),f=n?String(n==null?void 0:n.message):t;return f?se.jsx("p",{ref:i,id:u,className:ve("text-[0.8rem] font-medium text-destructive",e),...r,children:f}):null});_t.displayName="FormMessage";export{At as F,Vt as a,dt as b,ft as c,yt as d,_t as e,Ft as f,gt as g,c as h,Yr as i,k as s,xt as u};