import{r as n,g as a}from"./index-MJGHllP9.js";function z(r){const[h,e]=n.useState(void 0);return a(()=>{if(r){e({width:r.offsetWidth,height:r.offsetHeight});const f=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const b=i[0];let t,o;if("borderBoxSize"in b){const s=b.borderBoxSize,d=Array.isArray(s)?s[0]:s;t=d.inlineSize,o=d.blockSize}else t=r.offsetWidth,o=r.offsetHeight;e({width:t,height:o})});return f.observe(r,{box:"border-box"}),()=>f.unobserve(r)}else e(void 0)},[r]),h}export{z as $};