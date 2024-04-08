import{j as e,c as h,m as x,a3 as p,B as u,Z as j}from"./index-eTfknw9m.js";import{t as g}from"./zod-LvmegbVR.js";import{u as f,F as b,a as n,b as r,c as d,d as t,g as o,e as c}from"./form-DDA3I4qO.js";import{z as l}from"./index-dIKOytT1.js";import{R as v,a as i}from"./radio-group-BN1_KJY0.js";import{S as N}from"./separator-COA-KgF4.js";import"./index-x3sitWSt.js";import"./index-D9gq-J7X.js";import"./index-DEzFy8sb.js";import"./index-BIZPrqii.js";import"./index-CEHlJCoO.js";const w=l.object({theme:l.enum(["light","dark"],{required_error:"Please select a theme."}),font:l.enum(["inter","manrope","system"],{invalid_type_error:"Select a font",required_error:"Please select a font."})}),y={theme:"light"};function F(){const a=f({resolver:g(w),defaultValues:y});function m(s){j({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(s,null,2)})})})}return e.jsx(b,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(m),className:"space-y-8",children:[e.jsx(n,{control:a.control,name:"font",render:({field:s})=>e.jsxs(r,{children:[e.jsx(d,{children:"Font"}),e.jsxs("div",{className:"relative w-max",children:[e.jsx(t,{children:e.jsxs("select",{className:h(x({variant:"outline"}),"w-[200px] appearance-none font-normal"),...s,children:[e.jsx("option",{value:"inter",children:"Inter"}),e.jsx("option",{value:"manrope",children:"Manrope"}),e.jsx("option",{value:"system",children:"System"})]})}),e.jsx(p,{className:"absolute right-3 top-2.5 h-4 w-4 opacity-50"})]}),e.jsx(o,{children:"Set the font you want to use in the dashboard."}),e.jsx(c,{})]})}),e.jsx(n,{control:a.control,name:"theme",render:({field:s})=>e.jsxs(r,{className:"space-y-1",children:[e.jsx(d,{children:"Theme"}),e.jsx(o,{children:"Select the theme for the dashboard."}),e.jsx(c,{}),e.jsxs(v,{onValueChange:s.onChange,defaultValue:s.value,className:"grid max-w-md grid-cols-2 gap-8 pt-2",children:[e.jsx(r,{children:e.jsxs(d,{className:"[&:has([data-state=checked])>div]:border-primary",children:[e.jsx(t,{children:e.jsx(i,{value:"light",className:"sr-only"})}),e.jsx("div",{className:"items-center rounded-md border-2 border-muted p-1 hover:border-accent",children:e.jsxs("div",{className:"space-y-2 rounded-sm bg-[#ecedef] p-2",children:[e.jsxs("div",{className:"space-y-2 rounded-md bg-white p-2 shadow-sm",children:[e.jsx("div",{className:"h-2 w-[80px] rounded-lg bg-[#ecedef]"}),e.jsx("div",{className:"h-2 w-[100px] rounded-lg bg-[#ecedef]"})]}),e.jsxs("div",{className:"flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm",children:[e.jsx("div",{className:"h-4 w-4 rounded-full bg-[#ecedef]"}),e.jsx("div",{className:"h-2 w-[100px] rounded-lg bg-[#ecedef]"})]}),e.jsxs("div",{className:"flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm",children:[e.jsx("div",{className:"h-4 w-4 rounded-full bg-[#ecedef]"}),e.jsx("div",{className:"h-2 w-[100px] rounded-lg bg-[#ecedef]"})]})]})}),e.jsx("span",{className:"block w-full p-2 text-center font-normal",children:"Light"})]})}),e.jsx(r,{children:e.jsxs(d,{className:"[&:has([data-state=checked])>div]:border-primary",children:[e.jsx(t,{children:e.jsx(i,{value:"dark",className:"sr-only"})}),e.jsx("div",{className:"items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground",children:e.jsxs("div",{className:"space-y-2 rounded-sm bg-slate-950 p-2",children:[e.jsxs("div",{className:"space-y-2 rounded-md bg-slate-800 p-2 shadow-sm",children:[e.jsx("div",{className:"h-2 w-[80px] rounded-lg bg-slate-400"}),e.jsx("div",{className:"h-2 w-[100px] rounded-lg bg-slate-400"})]}),e.jsxs("div",{className:"flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm",children:[e.jsx("div",{className:"h-4 w-4 rounded-full bg-slate-400"}),e.jsx("div",{className:"h-2 w-[100px] rounded-lg bg-slate-400"})]}),e.jsxs("div",{className:"flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm",children:[e.jsx("div",{className:"h-4 w-4 rounded-full bg-slate-400"}),e.jsx("div",{className:"h-2 w-[100px] rounded-lg bg-slate-400"})]})]})}),e.jsx("span",{className:"block w-full p-2 text-center font-normal",children:"Dark"})]})})]})]})}),e.jsx(u,{type:"submit",children:"Update preferences"})]})})}function B(){return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium",children:"Appearance"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Customize the appearance of the app. Automatically switch between day and night themes."})]}),e.jsx(N,{}),e.jsx(F,{})]})}export{B as default};
