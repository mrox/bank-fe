import{T as Ue,$ as ze,r as e,h as we,f as B,_ as I,b as A,d as P,g as U,U as qe,a0 as Ie,W as Ge,i as Ye,a1 as Xe,R as Ze,j as E,c as z,E as Je,a2 as Qe,a3 as et,y as tt}from"./index-CigCxgFi.js";import{$ as ot}from"./index-OA8KlxUs.js";import{$ as Te,b as nt,c as ct,h as rt,d as at,f as st,e as lt,a as it}from"./Combination-emcfCXyF.js";import{$ as _e}from"./index-ByI2KpZn.js";import{$ as dt}from"./index-BBzuvsRp.js";function Se(o,[n,t]){return Math.min(t,Math.max(n,o))}const ft=[" ","Enter","ArrowUp","ArrowDown"],ut=[" ","Enter"],le="Select",[ie,de,pt]=Ue(le),[te,ro]=ze(le,[pt,Te]),ve=Te(),[mt,Y]=te(le),[$t,ht]=te(le),gt=o=>{const{__scopeSelect:n,children:t,open:r,defaultOpen:l,onOpenChange:f,value:a,defaultValue:c,onValueChange:s,dir:i,name:$,autoComplete:C,disabled:T,required:y}=o,p=ve(n),[h,w]=e.useState(null),[m,d]=e.useState(null),[g,oe]=e.useState(!1),D=ot(i),[ne=!1,R]=we({prop:r,defaultProp:l,onChange:f}),[O,q]=we({prop:a,defaultProp:c,onChange:s}),Z=e.useRef(null),G=h?!!h.closest("form"):!0,[L,W]=e.useState(new Set),F=Array.from(L).map(_=>_.props.value).join(";");return e.createElement(nt,p,e.createElement(mt,{required:y,scope:n,trigger:h,onTriggerChange:w,valueNode:m,onValueNodeChange:d,valueNodeHasChildren:g,onValueNodeHasChildrenChange:oe,contentId:_e(),value:O,onValueChange:q,open:ne,onOpenChange:R,dir:D,triggerPointerDownPosRef:Z,disabled:T},e.createElement(ie.Provider,{scope:n},e.createElement($t,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(_=>{W(V=>new Set(V).add(_))},[]),onNativeOptionRemove:e.useCallback(_=>{W(V=>{const H=new Set(V);return H.delete(_),H})},[])},t)),G?e.createElement(De,{key:F,"aria-hidden":!0,required:y,tabIndex:-1,name:$,autoComplete:C,value:O,onChange:_=>q(_.target.value),disabled:T},O===void 0?e.createElement("option",{value:""}):null,Array.from(L)):null))},vt="SelectTrigger",xt=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:r=!1,...l}=o,f=ve(t),a=Y(vt,t),c=a.disabled||r,s=B(n,a.onTriggerChange),i=de(t),[$,C,T]=Me(p=>{const h=i().filter(d=>!d.disabled),w=h.find(d=>d.value===a.value),m=ke(h,p,w);m!==void 0&&a.onValueChange(m.value)}),y=()=>{c||(a.onOpenChange(!0),T())};return e.createElement(ct,I({asChild:!0},f),e.createElement(A.button,I({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Oe(a.value)?"":void 0},l,{ref:s,onClick:P(l.onClick,p=>{p.currentTarget.focus()}),onPointerDown:P(l.onPointerDown,p=>{const h=p.target;h.hasPointerCapture(p.pointerId)&&h.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(y(),a.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:P(l.onKeyDown,p=>{const h=$.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&C(p.key),!(h&&p.key===" ")&&ft.includes(p.key)&&(y(),p.preventDefault())})})))}),wt="SelectValue",St=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,children:f,placeholder:a="",...c}=o,s=Y(wt,t),{onValueNodeHasChildrenChange:i}=s,$=f!==void 0,C=B(n,s.onValueNodeChange);return U(()=>{i($)},[i,$]),e.createElement(A.span,I({},c,{ref:C,style:{pointerEvents:"none"}}),Oe(s.value)?e.createElement(e.Fragment,null,a):f)}),bt=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:r,...l}=o;return e.createElement(A.span,I({"aria-hidden":!0},l,{ref:n}),r||"▼")}),Ct=o=>e.createElement(qe,I({asChild:!0},o)),ee="SelectContent",yt=e.forwardRef((o,n)=>{const t=Y(ee,o.__scopeSelect),[r,l]=e.useState();if(U(()=>{l(new DocumentFragment)},[]),!t.open){const f=r;return f?Ie.createPortal(e.createElement(Pe,{scope:o.__scopeSelect},e.createElement(ie.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),f):null}return e.createElement(Et,I({},o,{ref:n}))}),j=10,[Pe,X]=te(ee),Et=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:f,onPointerDownOutside:a,side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:T,collisionPadding:y,sticky:p,hideWhenDetached:h,avoidCollisions:w,...m}=o,d=Y(ee,t),[g,oe]=e.useState(null),[D,ne]=e.useState(null),R=B(n,u=>oe(u)),[O,q]=e.useState(null),[Z,G]=e.useState(null),L=de(t),[W,F]=e.useState(!1),_=e.useRef(!1);e.useEffect(()=>{if(g)return rt(g)},[g]),at();const V=e.useCallback(u=>{const[S,...N]=L().map(x=>x.ref.current),[b]=N.slice(-1),v=document.activeElement;for(const x of u)if(x===v||(x==null||x.scrollIntoView({block:"nearest"}),x===S&&D&&(D.scrollTop=0),x===b&&D&&(D.scrollTop=D.scrollHeight),x==null||x.focus(),document.activeElement!==v))return},[L,D]),H=e.useCallback(()=>V([O,g]),[V,O,g]);e.useEffect(()=>{W&&H()},[W,H]);const{onOpenChange:J,triggerPointerDownPosRef:K}=d;e.useEffect(()=>{if(g){let u={x:0,y:0};const S=b=>{var v,x,M,k;u={x:Math.abs(Math.round(b.pageX)-((v=(x=K.current)===null||x===void 0?void 0:x.x)!==null&&v!==void 0?v:0)),y:Math.abs(Math.round(b.pageY)-((M=(k=K.current)===null||k===void 0?void 0:k.y)!==null&&M!==void 0?M:0))}},N=b=>{u.x<=10&&u.y<=10?b.preventDefault():g.contains(b.target)||J(!1),document.removeEventListener("pointermove",S),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",S),document.addEventListener("pointerup",N,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",N,{capture:!0})}}},[g,J,K]),e.useEffect(()=>{const u=()=>J(!1);return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[J]);const[fe,re]=Me(u=>{const S=L().filter(v=>!v.disabled),N=S.find(v=>v.ref.current===document.activeElement),b=ke(S,u,N);b&&setTimeout(()=>b.ref.current.focus())}),ue=e.useCallback((u,S,N)=>{const b=!_.current&&!N;(d.value!==void 0&&d.value===S||b)&&(q(u),b&&(_.current=!0))},[d.value]),pe=e.useCallback(()=>g==null?void 0:g.focus(),[g]),Q=e.useCallback((u,S,N)=>{const b=!_.current&&!N;(d.value!==void 0&&d.value===S||b)&&G(u)},[d.value]),ae=r==="popper"?be:It,ce=ae===be?{side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:T,collisionPadding:y,sticky:p,hideWhenDetached:h,avoidCollisions:w}:{};return e.createElement(Pe,{scope:t,content:g,viewport:D,onViewportChange:ne,itemRefCallback:ue,selectedItem:O,onItemLeave:pe,itemTextRefCallback:Q,focusSelectedItem:H,selectedItemText:Z,position:r,isPositioned:W,searchRef:fe},e.createElement(st,{as:Ge,allowPinchZoom:!0},e.createElement(lt,{asChild:!0,trapped:d.open,onMountAutoFocus:u=>{u.preventDefault()},onUnmountAutoFocus:P(l,u=>{var S;(S=d.trigger)===null||S===void 0||S.focus({preventScroll:!0}),u.preventDefault()})},e.createElement(Ye,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:a,onFocusOutside:u=>u.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ae,I({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:u=>u.preventDefault()},m,ce,{onPlaced:()=>F(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:P(m.onKeyDown,u=>{const S=u.ctrlKey||u.altKey||u.metaKey;if(u.key==="Tab"&&u.preventDefault(),!S&&u.key.length===1&&re(u.key),["ArrowUp","ArrowDown","Home","End"].includes(u.key)){let b=L().filter(v=>!v.disabled).map(v=>v.ref.current);if(["ArrowUp","End"].includes(u.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const v=u.target,x=b.indexOf(v);b=b.slice(x+1)}setTimeout(()=>V(b)),u.preventDefault()}})}))))))}),It=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:r,...l}=o,f=Y(ee,t),a=X(ee,t),[c,s]=e.useState(null),[i,$]=e.useState(null),C=B(n,R=>$(R)),T=de(t),y=e.useRef(!1),p=e.useRef(!0),{viewport:h,selectedItem:w,selectedItemText:m,focusSelectedItem:d}=a,g=e.useCallback(()=>{if(f.trigger&&f.valueNode&&c&&i&&h&&w&&m){const R=f.trigger.getBoundingClientRect(),O=i.getBoundingClientRect(),q=f.valueNode.getBoundingClientRect(),Z=m.getBoundingClientRect();if(f.dir!=="rtl"){const v=Z.left-O.left,x=q.left-v,M=R.left-x,k=R.width+M,me=Math.max(k,O.width),$e=window.innerWidth-j,he=Se(x,[j,$e-me]);c.style.minWidth=k+"px",c.style.left=he+"px"}else{const v=O.right-Z.right,x=window.innerWidth-q.right-v,M=window.innerWidth-R.right-x,k=R.width+M,me=Math.max(k,O.width),$e=window.innerWidth-j,he=Se(x,[j,$e-me]);c.style.minWidth=k+"px",c.style.right=he+"px"}const G=T(),L=window.innerHeight-j*2,W=h.scrollHeight,F=window.getComputedStyle(i),_=parseInt(F.borderTopWidth,10),V=parseInt(F.paddingTop,10),H=parseInt(F.borderBottomWidth,10),J=parseInt(F.paddingBottom,10),K=_+V+W+J+H,fe=Math.min(w.offsetHeight*5,K),re=window.getComputedStyle(h),ue=parseInt(re.paddingTop,10),pe=parseInt(re.paddingBottom,10),Q=R.top+R.height/2-j,ae=L-Q,ce=w.offsetHeight/2,u=w.offsetTop+ce,S=_+V+u,N=K-S;if(S<=Q){const v=w===G[G.length-1].ref.current;c.style.bottom="0px";const x=i.clientHeight-h.offsetTop-h.offsetHeight,M=Math.max(ae,ce+(v?pe:0)+x+H),k=S+M;c.style.height=k+"px"}else{const v=w===G[0].ref.current;c.style.top="0px";const M=Math.max(Q,_+h.offsetTop+(v?ue:0)+ce)+N;c.style.height=M+"px",h.scrollTop=S-Q+h.offsetTop}c.style.margin=`${j}px 0`,c.style.minHeight=fe+"px",c.style.maxHeight=L+"px",r==null||r(),requestAnimationFrame(()=>y.current=!0)}},[T,f.trigger,f.valueNode,c,i,h,w,m,f.dir,r]);U(()=>g(),[g]);const[oe,D]=e.useState();U(()=>{i&&D(window.getComputedStyle(i).zIndex)},[i]);const ne=e.useCallback(R=>{R&&p.current===!0&&(g(),d==null||d(),p.current=!1)},[g,d]);return e.createElement(Tt,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:y,onScrollButtonChange:ne},e.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:oe}},e.createElement(A.div,I({},l,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}}))))}),be=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:r="start",collisionPadding:l=j,...f}=o,a=ve(t);return e.createElement(it,I({},a,f,{ref:n,align:r,collisionPadding:l,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Tt,xe]=te(ee,{}),Ce="SelectViewport",_t=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=X(Ce,t),f=xe(Ce,t),a=B(n,l.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(ie.Slot,{scope:t},e.createElement(A.div,I({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:P(r.onScroll,s=>{const i=s.currentTarget,{contentWrapper:$,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&$){const T=Math.abs(c.current-i.scrollTop);if(T>0){const y=window.innerHeight-j*2,p=parseFloat($.style.minHeight),h=parseFloat($.style.height),w=Math.max(p,h);if(w<y){const m=w+T,d=Math.min(y,m),g=m-d;$.style.height=d+"px",$.style.bottom==="0px"&&(i.scrollTop=g>0?g:0,$.style.justifyContent="flex-end")}}}c.current=i.scrollTop})}))))}),Pt="SelectGroup",[ao,Rt]=te(Pt),Nt="SelectLabel",Ot=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=Rt(Nt,t);return e.createElement(A.div,I({id:l.id},r,{ref:n}))}),ge="SelectItem",[Dt,Re]=te(ge),Mt=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:r,disabled:l=!1,textValue:f,...a}=o,c=Y(ge,t),s=X(ge,t),i=c.value===r,[$,C]=e.useState(f??""),[T,y]=e.useState(!1),p=B(n,m=>{var d;return(d=s.itemRefCallback)===null||d===void 0?void 0:d.call(s,m,r,l)}),h=_e(),w=()=>{l||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(Dt,{scope:t,value:r,disabled:l,textId:h,isSelected:i,onItemTextChange:e.useCallback(m=>{C(d=>{var g;return d||((g=m==null?void 0:m.textContent)!==null&&g!==void 0?g:"").trim()})},[])},e.createElement(ie.ItemSlot,{scope:t,value:r,disabled:l,textValue:$},e.createElement(A.div,I({role:"option","aria-labelledby":h,"data-highlighted":T?"":void 0,"aria-selected":i&&T,"data-state":i?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1},a,{ref:p,onFocus:P(a.onFocus,()=>y(!0)),onBlur:P(a.onBlur,()=>y(!1)),onPointerUp:P(a.onPointerUp,w),onPointerMove:P(a.onPointerMove,m=>{if(l){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(a.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}}),onKeyDown:P(a.onKeyDown,m=>{var d;((d=s.searchRef)===null||d===void 0?void 0:d.current)!==""&&m.key===" "||(ut.includes(m.key)&&w(),m.key===" "&&m.preventDefault())})}))))}),se="SelectItemText",kt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,...f}=o,a=Y(se,t),c=X(se,t),s=Re(se,t),i=ht(se,t),[$,C]=e.useState(null),T=B(n,m=>C(m),s.onItemTextChange,m=>{var d;return(d=c.itemTextRefCallback)===null||d===void 0?void 0:d.call(c,m,s.value,s.disabled)}),y=$==null?void 0:$.textContent,p=e.useMemo(()=>e.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},y),[s.disabled,s.value,y]),{onNativeOptionAdd:h,onNativeOptionRemove:w}=i;return U(()=>(h(p),()=>w(p)),[h,w,p]),e.createElement(e.Fragment,null,e.createElement(A.span,I({id:s.textId},f,{ref:T})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Ie.createPortal(f.children,a.valueNode):null)}),At="SelectItemIndicator",Lt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return Re(At,t).isSelected?e.createElement(A.span,I({"aria-hidden":!0},r,{ref:n})):null}),ye="SelectScrollUpButton",Vt=e.forwardRef((o,n)=>{const t=X(ye,o.__scopeSelect),r=xe(ye,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollTop>0;f(i)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Ne,I({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop-s.offsetHeight)}})):null}),Ee="SelectScrollDownButton",Bt=e.forwardRef((o,n)=>{const t=X(Ee,o.__scopeSelect),r=xe(Ee,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollHeight-c.clientHeight,$=Math.ceil(c.scrollTop)<i;f($)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Ne,I({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop+s.offsetHeight)}})):null}),Ne=e.forwardRef((o,n)=>{const{__scopeSelect:t,onAutoScroll:r,...l}=o,f=X("SelectScrollButton",t),a=e.useRef(null),c=de(t),s=e.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return e.useEffect(()=>()=>s(),[s]),U(()=>{var i;const $=c().find(C=>C.ref.current===document.activeElement);$==null||(i=$.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[c]),e.createElement(A.div,I({"aria-hidden":!0},l,{ref:n,style:{flexShrink:0,...l.style},onPointerDown:P(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:P(l.onPointerMove,()=>{var i;(i=f.onItemLeave)===null||i===void 0||i.call(f),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:P(l.onPointerLeave,()=>{s()})}))}),Ht=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return e.createElement(A.div,I({"aria-hidden":!0},r,{ref:n}))});function Oe(o){return o===""||o===void 0}const De=e.forwardRef((o,n)=>{const{value:t,...r}=o,l=e.useRef(null),f=B(n,l),a=dt(t);return e.useEffect(()=>{const c=l.current,s=window.HTMLSelectElement.prototype,$=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&$){const C=new Event("change",{bubbles:!0});$.call(c,t),c.dispatchEvent(C)}},[a,t]),e.createElement(Xe,{asChild:!0},e.createElement("select",I({},r,{ref:f,defaultValue:t})))});De.displayName="BubbleSelect";function Me(o){const n=Ze(o),t=e.useRef(""),r=e.useRef(0),l=e.useCallback(a=>{const c=t.current+a;n(c),function s(i){t.current=i,window.clearTimeout(r.current),i!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(c)},[n]),f=e.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,l,f]}function ke(o,n,t){const l=n.length>1&&Array.from(n).every(i=>i===n[0])?n[0]:n,f=t?o.indexOf(t):-1;let a=jt(o,Math.max(f,0));l.length===1&&(a=a.filter(i=>i!==t));const s=a.find(i=>i.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==t?s:void 0}function jt(o,n){return o.map((t,r)=>o[(n+r)%o.length])}const Wt=gt,Ae=xt,Ft=St,Kt=bt,Ut=Ct,Le=yt,zt=_t,Ve=Ot,Be=Mt,qt=kt,Gt=Lt,He=Vt,je=Bt,We=Ht,so=Wt,lo=Ft,Yt=e.forwardRef(({className:o,children:n,...t},r)=>E.jsxs(Ae,{ref:r,className:z("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...t,children:[n,E.jsx(Kt,{asChild:!0,children:E.jsx(Je,{className:"h-4 w-4 opacity-50"})})]}));Yt.displayName=Ae.displayName;const Fe=e.forwardRef(({className:o,...n},t)=>E.jsx(He,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:E.jsx(Qe,{})}));Fe.displayName=He.displayName;const Ke=e.forwardRef(({className:o,...n},t)=>E.jsx(je,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:E.jsx(et,{})}));Ke.displayName=je.displayName;const Xt=e.forwardRef(({className:o,children:n,position:t="popper",...r},l)=>E.jsx(Ut,{children:E.jsxs(Le,{ref:l,className:z("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...r,children:[E.jsx(Fe,{}),E.jsx(zt,{className:z("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),E.jsx(Ke,{})]})}));Xt.displayName=Le.displayName;const Zt=e.forwardRef(({className:o,...n},t)=>E.jsx(Ve,{ref:t,className:z("px-2 py-1.5 text-sm font-semibold",o),...n}));Zt.displayName=Ve.displayName;const Jt=e.forwardRef(({className:o,children:n,...t},r)=>E.jsxs(Be,{ref:r,className:z("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...t,children:[E.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:E.jsx(Gt,{children:E.jsx(tt,{className:"h-4 w-4"})})}),E.jsx(qt,{children:n})]}));Jt.displayName=Be.displayName;const Qt=e.forwardRef(({className:o,...n},t)=>E.jsx(We,{ref:t,className:z("-mx-1 my-1 h-px bg-muted",o),...n}));Qt.displayName=We.displayName;export{so as S,Yt as a,lo as b,Xt as c,Jt as d};
