import{r as t,j as h,c as _,T as Je,$ as me,e as H,U as Qe,_ as f,f as L,d as b,i as et,b as O,V as be,R as oe,W as tt,X as nt,h as xe,p as ot,y as ct,Y as rt}from"./index-MJGHllP9.js";import{$ as at}from"./index-Cn7fgSth.js";import{$ as ge,h as st,d as dt,e as ut,a as it,b as he,c as lt,f as ft}from"./Combination-CL-t6YwW.js";import{$ as X}from"./index-CFziChhZ.js";import{$ as ve,a as pt,b as $t}from"./index-CwKYaSrq.js";const mt=t.forwardRef(({className:e,fadedBelow:o=!1,fixedHeight:n=!1,...c},r)=>h.jsx("div",{ref:r,className:_("relative flex h-full w-full flex-col",o&&"after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:hidden after:h-32 after:w-full after:bg-[linear-gradient(180deg,_transparent_10%,_hsl(var(--background))_70%)] after:md:block",n&&"md:h-svh",e),...c}));mt.displayName="Layout";const bt=t.forwardRef(({className:e,...o},n)=>h.jsx("div",{ref:n,className:_("flex h-[var(--header-height)] flex-none items-center gap-4 bg-background p-4 md:px-8",e),...o}));bt.displayName="LayoutHeader";const xt=t.forwardRef(({className:e,fixedHeight:o,...n},c)=>h.jsx("div",{ref:c,className:_("flex-1 overflow-hidden px-4 py-6 md:px-8",o&&"h-[calc(100%-var(--header-height))]",e),...n}));xt.displayName="LayoutBody";const te=["Enter"," "],gt=["ArrowDown","PageUp","Home"],we=["ArrowUp","PageDown","End"],ht=[...gt,...we],vt={ltr:[...te,"ArrowRight"],rtl:[...te,"ArrowLeft"]},wt={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Z="Menu",[A,_t,Mt]=Je(Z),[P,_e]=me(Z,[Mt,ge,ve]),q=ge(),Me=ve(),[Ee,D]=P(Z),[Et,K]=P(Z),Ct=e=>{const{__scopeMenu:o,open:n=!1,children:c,dir:r,onOpenChange:a,modal:d=!0}=e,u=q(o),[p,m]=t.useState(null),l=t.useRef(!1),s=oe(a),$=at(r);return t.useEffect(()=>{const x=()=>{l.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},g=()=>l.current=!1;return document.addEventListener("keydown",x,{capture:!0}),()=>{document.removeEventListener("keydown",x,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),t.createElement(he,u,t.createElement(Ee,{scope:o,open:n,onOpenChange:s,content:p,onContentChange:m},t.createElement(Et,{scope:o,onClose:t.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:l,dir:$,modal:d},c)))},Ce=t.forwardRef((e,o)=>{const{__scopeMenu:n,...c}=e,r=q(n);return t.createElement(lt,f({},r,c,{ref:o}))}),Re="MenuPortal",[Rt,De]=P(Re,{forceMount:void 0}),Dt=e=>{const{__scopeMenu:o,forceMount:n,children:c,container:r}=e,a=D(Re,o);return t.createElement(Rt,{scope:o,forceMount:n},t.createElement(H,{present:n||a.open},t.createElement(Qe,{asChild:!0,container:r},c)))},C="MenuContent",[yt,ce]=P(C),Pt=t.forwardRef((e,o)=>{const n=De(C,e.__scopeMenu),{forceMount:c=n.forceMount,...r}=e,a=D(C,e.__scopeMenu),d=K(C,e.__scopeMenu);return t.createElement(A.Provider,{scope:e.__scopeMenu},t.createElement(H,{present:c||a.open},t.createElement(A.Slot,{scope:e.__scopeMenu},d.modal?t.createElement(St,f({},r,{ref:o})):t.createElement(It,f({},r,{ref:o})))))}),St=t.forwardRef((e,o)=>{const n=D(C,e.__scopeMenu),c=t.useRef(null),r=L(o,c);return t.useEffect(()=>{const a=c.current;if(a)return st(a)},[]),t.createElement(re,f({},e,{ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:b(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),It=t.forwardRef((e,o)=>{const n=D(C,e.__scopeMenu);return t.createElement(re,f({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),re=t.forwardRef((e,o)=>{const{__scopeMenu:n,loop:c=!1,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:d,disableOutsidePointerEvents:u,onEntryFocus:p,onEscapeKeyDown:m,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:$,onDismiss:x,disableOutsideScroll:g,...M}=e,S=D(C,n),T=K(C,n),G=q(n),j=Me(n),de=_t(n),[ze,ue]=t.useState(null),U=t.useRef(null),Xe=L(o,U,S.onContentChange),V=t.useRef(0),B=t.useRef(""),We=t.useRef(0),J=t.useRef(null),ie=t.useRef("right"),Q=t.useRef(0),He=g?ft:t.Fragment,Ze=g?{as:tt,allowPinchZoom:!0}:void 0,qe=i=>{var v,E;const y=B.current+i,N=de().filter(R=>!R.disabled),ee=document.activeElement,le=(v=N.find(R=>R.ref.current===ee))===null||v===void 0?void 0:v.textValue,Y=N.map(R=>R.textValue),k=Zt(Y,y,le),fe=(E=N.find(R=>R.textValue===k))===null||E===void 0?void 0:E.ref.current;(function R(pe){B.current=pe,window.clearTimeout(V.current),pe!==""&&(V.current=window.setTimeout(()=>R(""),1e3))})(y),fe&&setTimeout(()=>fe.focus())};t.useEffect(()=>()=>window.clearTimeout(V.current),[]),dt();const I=t.useCallback(i=>{var v,E;return ie.current===((v=J.current)===null||v===void 0?void 0:v.side)&&Jt(i,(E=J.current)===null||E===void 0?void 0:E.area)},[]);return t.createElement(yt,{scope:n,searchRef:B,onItemEnter:t.useCallback(i=>{I(i)&&i.preventDefault()},[I]),onItemLeave:t.useCallback(i=>{var v;I(i)||((v=U.current)===null||v===void 0||v.focus(),ue(null))},[I]),onTriggerLeave:t.useCallback(i=>{I(i)&&i.preventDefault()},[I]),pointerGraceTimerRef:We,onPointerGraceIntentChange:t.useCallback(i=>{J.current=i},[])},t.createElement(He,Ze,t.createElement(ut,{asChild:!0,trapped:r,onMountAutoFocus:b(a,i=>{var v;i.preventDefault(),(v=U.current)===null||v===void 0||v.focus()}),onUnmountAutoFocus:d},t.createElement(et,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:m,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:$,onDismiss:x},t.createElement(pt,f({asChild:!0},j,{dir:T.dir,orientation:"vertical",loop:c,currentTabStopId:ze,onCurrentTabStopIdChange:ue,onEntryFocus:b(p,i=>{T.isUsingKeyboardRef.current||i.preventDefault()})}),t.createElement(it,f({role:"menu","aria-orientation":"vertical","data-state":Ne(S.open),"data-radix-menu-content":"",dir:T.dir},G,M,{ref:Xe,style:{outline:"none",...M.style},onKeyDown:b(M.onKeyDown,i=>{const E=i.target.closest("[data-radix-menu-content]")===i.currentTarget,y=i.ctrlKey||i.altKey||i.metaKey,N=i.key.length===1;E&&(i.key==="Tab"&&i.preventDefault(),!y&&N&&qe(i.key));const ee=U.current;if(i.target!==ee||!ht.includes(i.key))return;i.preventDefault();const Y=de().filter(k=>!k.disabled).map(k=>k.ref.current);we.includes(i.key)&&Y.reverse(),Wt(Y)}),onBlur:b(e.onBlur,i=>{i.currentTarget.contains(i.target)||(window.clearTimeout(V.current),B.current="")}),onPointerMove:b(e.onPointerMove,F(i=>{const v=i.target,E=Q.current!==i.clientX;if(i.currentTarget.contains(v)&&E){const y=i.clientX>Q.current?"right":"left";ie.current=y,Q.current=i.clientX}}))})))))))}),ye=t.forwardRef((e,o)=>{const{__scopeMenu:n,...c}=e;return t.createElement(O.div,f({role:"group"},c,{ref:o}))}),Ot=t.forwardRef((e,o)=>{const{__scopeMenu:n,...c}=e;return t.createElement(O.div,f({},c,{ref:o}))}),ne="MenuItem",$e="menu.itemSelect",ae=t.forwardRef((e,o)=>{const{disabled:n=!1,onSelect:c,...r}=e,a=t.useRef(null),d=K(ne,e.__scopeMenu),u=ce(ne,e.__scopeMenu),p=L(o,a),m=t.useRef(!1),l=()=>{const s=a.current;if(!n&&s){const $=new CustomEvent($e,{bubbles:!0,cancelable:!0});s.addEventListener($e,x=>c==null?void 0:c(x),{once:!0}),nt(s,$),$.defaultPrevented?m.current=!1:d.onClose()}};return t.createElement(Pe,f({},r,{ref:p,disabled:n,onClick:b(e.onClick,l),onPointerDown:s=>{var $;($=e.onPointerDown)===null||$===void 0||$.call(e,s),m.current=!0},onPointerUp:b(e.onPointerUp,s=>{var $;m.current||($=s.currentTarget)===null||$===void 0||$.click()}),onKeyDown:b(e.onKeyDown,s=>{const $=u.searchRef.current!=="";n||$&&s.key===" "||te.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),Pe=t.forwardRef((e,o)=>{const{__scopeMenu:n,disabled:c=!1,textValue:r,...a}=e,d=ce(ne,n),u=Me(n),p=t.useRef(null),m=L(o,p),[l,s]=t.useState(!1),[$,x]=t.useState("");return t.useEffect(()=>{const g=p.current;if(g){var M;x(((M=g.textContent)!==null&&M!==void 0?M:"").trim())}},[a.children]),t.createElement(A.ItemSlot,{scope:n,disabled:c,textValue:r??$},t.createElement($t,f({asChild:!0},u,{focusable:!c}),t.createElement(O.div,f({role:"menuitem","data-highlighted":l?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0},a,{ref:m,onPointerMove:b(e.onPointerMove,F(g=>{c?d.onItemLeave(g):(d.onItemEnter(g),g.defaultPrevented||g.currentTarget.focus())})),onPointerLeave:b(e.onPointerLeave,F(g=>d.onItemLeave(g))),onFocus:b(e.onFocus,()=>s(!0)),onBlur:b(e.onBlur,()=>s(!1))}))))}),Tt=t.forwardRef((e,o)=>{const{checked:n=!1,onCheckedChange:c,...r}=e;return t.createElement(Ie,{scope:e.__scopeMenu,checked:n},t.createElement(ae,f({role:"menuitemcheckbox","aria-checked":W(n)?"mixed":n},r,{ref:o,"data-state":se(n),onSelect:b(r.onSelect,()=>c==null?void 0:c(W(n)?!0:!n),{checkForDefaultPrevented:!1})})))}),Nt="MenuRadioGroup",[kt,At]=P(Nt,{value:void 0,onValueChange:()=>{}}),Ft=t.forwardRef((e,o)=>{const{value:n,onValueChange:c,...r}=e,a=oe(c);return t.createElement(kt,{scope:e.__scopeMenu,value:n,onValueChange:a},t.createElement(ye,f({},r,{ref:o})))}),Lt="MenuRadioItem",Kt=t.forwardRef((e,o)=>{const{value:n,...c}=e,r=At(Lt,e.__scopeMenu),a=n===r.value;return t.createElement(Ie,{scope:e.__scopeMenu,checked:a},t.createElement(ae,f({role:"menuitemradio","aria-checked":a},c,{ref:o,"data-state":se(a),onSelect:b(c.onSelect,()=>{var d;return(d=r.onValueChange)===null||d===void 0?void 0:d.call(r,n)},{checkForDefaultPrevented:!1})})))}),Se="MenuItemIndicator",[Ie,Gt]=P(Se,{checked:!1}),jt=t.forwardRef((e,o)=>{const{__scopeMenu:n,forceMount:c,...r}=e,a=Gt(Se,n);return t.createElement(H,{present:c||W(a.checked)||a.checked===!0},t.createElement(O.span,f({},r,{ref:o,"data-state":se(a.checked)})))}),Ut=t.forwardRef((e,o)=>{const{__scopeMenu:n,...c}=e;return t.createElement(O.div,f({role:"separator","aria-orientation":"horizontal"},c,{ref:o}))}),Oe="MenuSub",[Vt,Te]=P(Oe),Bt=e=>{const{__scopeMenu:o,children:n,open:c=!1,onOpenChange:r}=e,a=D(Oe,o),d=q(o),[u,p]=t.useState(null),[m,l]=t.useState(null),s=oe(r);return t.useEffect(()=>(a.open===!1&&s(!1),()=>s(!1)),[a.open,s]),t.createElement(he,d,t.createElement(Ee,{scope:o,open:c,onOpenChange:s,content:m,onContentChange:l},t.createElement(Vt,{scope:o,contentId:X(),triggerId:X(),trigger:u,onTriggerChange:p},n)))},z="MenuSubTrigger",Yt=t.forwardRef((e,o)=>{const n=D(z,e.__scopeMenu),c=K(z,e.__scopeMenu),r=Te(z,e.__scopeMenu),a=ce(z,e.__scopeMenu),d=t.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:p}=a,m={__scopeMenu:e.__scopeMenu},l=t.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return t.useEffect(()=>l,[l]),t.useEffect(()=>{const s=u.current;return()=>{window.clearTimeout(s),p(null)}},[u,p]),t.createElement(Ce,f({asChild:!0},m),t.createElement(Pe,f({id:r.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":r.contentId,"data-state":Ne(n.open)},e,{ref:be(o,r.onTriggerChange),onClick:s=>{var $;($=e.onClick)===null||$===void 0||$.call(e,s),!(e.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:b(e.onPointerMove,F(s=>{a.onItemEnter(s),!s.defaultPrevented&&!e.disabled&&!n.open&&!d.current&&(a.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),l()},100))})),onPointerLeave:b(e.onPointerLeave,F(s=>{var $;l();const x=($=n.content)===null||$===void 0?void 0:$.getBoundingClientRect();if(x){var g;const M=(g=n.content)===null||g===void 0?void 0:g.dataset.side,S=M==="right",T=S?-5:5,G=x[S?"left":"right"],j=x[S?"right":"left"];a.onPointerGraceIntentChange({area:[{x:s.clientX+T,y:s.clientY},{x:G,y:x.top},{x:j,y:x.top},{x:j,y:x.bottom},{x:G,y:x.bottom}],side:M}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(s),s.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:b(e.onKeyDown,s=>{const $=a.searchRef.current!=="";if(!(e.disabled||$&&s.key===" ")&&vt[c.dir].includes(s.key)){var x;n.onOpenChange(!0),(x=n.content)===null||x===void 0||x.focus(),s.preventDefault()}})})))}),zt="MenuSubContent",Xt=t.forwardRef((e,o)=>{const n=De(C,e.__scopeMenu),{forceMount:c=n.forceMount,...r}=e,a=D(C,e.__scopeMenu),d=K(C,e.__scopeMenu),u=Te(zt,e.__scopeMenu),p=t.useRef(null),m=L(o,p);return t.createElement(A.Provider,{scope:e.__scopeMenu},t.createElement(H,{present:c||a.open},t.createElement(A.Slot,{scope:e.__scopeMenu},t.createElement(re,f({id:u.contentId,"aria-labelledby":u.triggerId},r,{ref:m,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:l=>{var s;d.isUsingKeyboardRef.current&&((s=p.current)===null||s===void 0||s.focus()),l.preventDefault()},onCloseAutoFocus:l=>l.preventDefault(),onFocusOutside:b(e.onFocusOutside,l=>{l.target!==u.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:b(e.onEscapeKeyDown,l=>{d.onClose(),l.preventDefault()}),onKeyDown:b(e.onKeyDown,l=>{const s=l.currentTarget.contains(l.target),$=wt[d.dir].includes(l.key);if(s&&$){var x;a.onOpenChange(!1),(x=u.trigger)===null||x===void 0||x.focus(),l.preventDefault()}})})))))});function Ne(e){return e?"open":"closed"}function W(e){return e==="indeterminate"}function se(e){return W(e)?"indeterminate":e?"checked":"unchecked"}function Wt(e){const o=document.activeElement;for(const n of e)if(n===o||(n.focus(),document.activeElement!==o))return}function Ht(e,o){return e.map((n,c)=>e[(o+c)%e.length])}function Zt(e,o,n){const r=o.length>1&&Array.from(o).every(m=>m===o[0])?o[0]:o,a=n?e.indexOf(n):-1;let d=Ht(e,Math.max(a,0));r.length===1&&(d=d.filter(m=>m!==n));const p=d.find(m=>m.toLowerCase().startsWith(r.toLowerCase()));return p!==n?p:void 0}function qt(e,o){const{x:n,y:c}=e;let r=!1;for(let a=0,d=o.length-1;a<o.length;d=a++){const u=o[a].x,p=o[a].y,m=o[d].x,l=o[d].y;p>c!=l>c&&n<(m-u)*(c-p)/(l-p)+u&&(r=!r)}return r}function Jt(e,o){if(!o)return!1;const n={x:e.clientX,y:e.clientY};return qt(n,o)}function F(e){return o=>o.pointerType==="mouse"?e(o):void 0}const Qt=Ct,en=Ce,tn=Dt,nn=Pt,on=ye,cn=Ot,rn=ae,an=Tt,sn=Ft,dn=Kt,un=jt,ln=Ut,fn=Bt,pn=Yt,$n=Xt,ke="DropdownMenu",[mn,eo]=me(ke,[_e]),w=_e(),[bn,Ae]=mn(ke),xn=e=>{const{__scopeDropdownMenu:o,children:n,dir:c,open:r,defaultOpen:a,onOpenChange:d,modal:u=!0}=e,p=w(o),m=t.useRef(null),[l=!1,s]=xe({prop:r,defaultProp:a,onChange:d});return t.createElement(bn,{scope:o,triggerId:X(),triggerRef:m,contentId:X(),open:l,onOpenChange:s,onOpenToggle:t.useCallback(()=>s($=>!$),[s]),modal:u},t.createElement(Qt,f({},p,{open:l,onOpenChange:s,dir:c,modal:u}),n))},gn="DropdownMenuTrigger",hn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,disabled:c=!1,...r}=e,a=Ae(gn,n),d=w(n);return t.createElement(en,f({asChild:!0},d),t.createElement(O.button,f({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":c?"":void 0,disabled:c},r,{ref:be(o,a.triggerRef),onPointerDown:b(e.onPointerDown,u=>{!c&&u.button===0&&u.ctrlKey===!1&&(a.onOpenToggle(),a.open||u.preventDefault())}),onKeyDown:b(e.onKeyDown,u=>{c||(["Enter"," "].includes(u.key)&&a.onOpenToggle(),u.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})))}),vn=e=>{const{__scopeDropdownMenu:o,...n}=e,c=w(o);return t.createElement(tn,f({},c,n))},wn="DropdownMenuContent",_n=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=Ae(wn,n),a=w(n),d=t.useRef(!1);return t.createElement(nn,f({id:r.contentId,"aria-labelledby":r.triggerId},a,c,{ref:o,onCloseAutoFocus:b(e.onCloseAutoFocus,u=>{var p;d.current||(p=r.triggerRef.current)===null||p===void 0||p.focus(),d.current=!1,u.preventDefault()}),onInteractOutside:b(e.onInteractOutside,u=>{const p=u.detail.originalEvent,m=p.button===0&&p.ctrlKey===!0,l=p.button===2||m;(!r.modal||l)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Mn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(on,f({},r,c,{ref:o}))}),En=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(cn,f({},r,c,{ref:o}))}),Cn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(rn,f({},r,c,{ref:o}))}),Rn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(an,f({},r,c,{ref:o}))}),Dn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(sn,f({},r,c,{ref:o}))}),yn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(dn,f({},r,c,{ref:o}))}),Pn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(un,f({},r,c,{ref:o}))}),Sn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(ln,f({},r,c,{ref:o}))}),In=e=>{const{__scopeDropdownMenu:o,children:n,open:c,onOpenChange:r,defaultOpen:a}=e,d=w(o),[u=!1,p]=xe({prop:c,defaultProp:a,onChange:r});return t.createElement(fn,f({},d,{open:u,onOpenChange:p}),n)},On=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement(pn,f({},r,c,{ref:o}))}),Tn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...c}=e,r=w(n);return t.createElement($n,f({},r,c,{ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Nn=xn,kn=hn,An=vn,Fe=_n,Fn=Mn,Le=En,Ke=Cn,Ge=Rn,Ln=Dn,je=yn,Ue=Pn,Ve=Sn,Kn=In,Be=On,Ye=Tn,to=Nn,no=kn,oo=Fn,co=Kn,ro=Ln,Gn=t.forwardRef(({className:e,inset:o,children:n,...c},r)=>h.jsxs(Be,{ref:r,className:_("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",o&&"pl-8",e),...c,children:[n,h.jsx(ot,{className:"ml-auto h-4 w-4"})]}));Gn.displayName=Be.displayName;const jn=t.forwardRef(({className:e,...o},n)=>h.jsx(Ye,{ref:n,className:_("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));jn.displayName=Ye.displayName;const Un=t.forwardRef(({className:e,sideOffset:o=4,...n},c)=>h.jsx(An,{children:h.jsx(Fe,{ref:c,sideOffset:o,className:_("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Un.displayName=Fe.displayName;const Vn=t.forwardRef(({className:e,inset:o,...n},c)=>h.jsx(Ke,{ref:c,className:_("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o&&"pl-8",e),...n}));Vn.displayName=Ke.displayName;const Bn=t.forwardRef(({className:e,children:o,checked:n,...c},r)=>h.jsxs(Ge,{ref:r,className:_("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...c,children:[h.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:h.jsx(Ue,{children:h.jsx(ct,{className:"h-4 w-4"})})}),o]}));Bn.displayName=Ge.displayName;const Yn=t.forwardRef(({className:e,children:o,...n},c)=>h.jsxs(je,{ref:c,className:_("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[h.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:h.jsx(Ue,{children:h.jsx(rt,{className:"h-4 w-4 fill-current"})})}),o]}));Yn.displayName=je.displayName;const zn=t.forwardRef(({className:e,inset:o,...n},c)=>h.jsx(Le,{ref:c,className:_("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",e),...n}));zn.displayName=Le.displayName;const Xn=t.forwardRef(({className:e,...o},n)=>h.jsx(Ve,{ref:n,className:_("-mx-1 my-1 h-px bg-muted",e),...o}));Xn.displayName=Ve.displayName;const Wn=({className:e,...o})=>h.jsx("span",{className:_("ml-auto text-xs tracking-widest opacity-60",e),...o});Wn.displayName="DropdownMenuShortcut";export{hn as $,to as D,mt as L,no as a,Un as b,zn as c,Xn as d,Vn as e,bt as f,xt as g,Bn as h,co as i,Gn as j,jn as k,ro as l,Yn as m,Wn as n,oo as o};
