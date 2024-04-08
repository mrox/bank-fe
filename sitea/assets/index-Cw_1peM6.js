import{j as e,B as o,D as V,C as G,p as H,q as z,M as B,Q as W,s as O,S as E,t as X,v as q,A as f,w as Y,x as T,P as Q,c as y,y as J,z as $,r as g,E as _,F as Z,G as ee}from"./index-eTfknw9m.js";import{S as te,T as ie,U as ae}from"./user-nav-BYRQd5F-.js";import{D as j,$ as se,b as A,c as le,d as w,h as re,a as D,e as d,i as oe,j as ne,k as de,l as ce,m as he,n as ue,L as me,f as pe,g as ge}from"./dropdown-menu-DZn8LuMW.js";import{B as x,u as be,f as C,g as xe,a as ye,b as we,c as Se,d as fe,e as Te}from"./badge-DDPfMRvo.js";import{T as je,b as Ae,c as S,d as ve,e as Ce,f as K}from"./table-DmLZpfZF.js";import{S as Ke,a as Ie,b as Ne,c as ke,d as Pe}from"./select-DGY_nVm9.js";import{I as De}from"./input-BOi8soOy.js";import{P as Me,a as Re,b as Fe,C as Ue,c as Le,d as Ve,e as Ge,f as I,g as N,h as He}from"./popover-MqbjW-JC.js";import{S as ze}from"./separator-COA-KgF4.js";import{C as k}from"./checkbox-BChxkKh8.js";import{z as h}from"./index-dIKOytT1.js";import"./avatar-CvJi4imI.js";import"./index-DEzFy8sb.js";import"./Combination-BCCZAf6I.js";import"./index-BIZPrqii.js";import"./index-D9gq-J7X.js";import"./index-x3sitWSt.js";import"./index-CEHlJCoO.js";function Be({table:t}){return e.jsxs("div",{className:"flex items-center justify-between overflow-auto px-2",children:[e.jsxs("div",{className:"hidden flex-1 text-sm text-muted-foreground sm:block",children:[t.getFilteredSelectedRowModel().rows.length," of"," ",t.getFilteredRowModel().rows.length," row(s) selected."]}),e.jsxs("div",{className:"flex items-center sm:space-x-6 lg:space-x-8",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("p",{className:"hidden text-sm font-medium sm:block",children:"Rows per page"}),e.jsxs(Ke,{value:`${t.getState().pagination.pageSize}`,onValueChange:i=>{t.setPageSize(Number(i))},children:[e.jsx(Ie,{className:"h-8 w-[70px]",children:e.jsx(Ne,{placeholder:t.getState().pagination.pageSize})}),e.jsx(ke,{side:"top",children:[10,20,30,40,50].map(i=>e.jsx(Pe,{value:`${i}`,children:i},i))})]})]}),e.jsxs("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",t.getState().pagination.pageIndex+1," of"," ",t.getPageCount()]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs(o,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>t.setPageIndex(0),disabled:!t.getCanPreviousPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to first page"}),e.jsx(V,{className:"h-4 w-4"})]}),e.jsxs(o,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>t.previousPage(),disabled:!t.getCanPreviousPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to previous page"}),e.jsx(G,{className:"h-4 w-4"})]}),e.jsxs(o,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>t.nextPage(),disabled:!t.getCanNextPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to next page"}),e.jsx(H,{className:"h-4 w-4"})]}),e.jsxs(o,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>t.setPageIndex(t.getPageCount()-1),disabled:!t.getCanNextPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to last page"}),e.jsx(z,{className:"h-4 w-4"})]})]})]})]})}function We({table:t}){return e.jsxs(j,{children:[e.jsx(se,{asChild:!0,children:e.jsxs(o,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[e.jsx(B,{className:"mr-2 h-4 w-4"}),"View"]})}),e.jsxs(A,{align:"end",className:"w-[150px]",children:[e.jsx(le,{children:"Toggle columns"}),e.jsx(w,{}),t.getAllColumns().filter(i=>typeof i.accessorFn<"u"&&i.getCanHide()).map(i=>e.jsx(re,{className:"capitalize",checked:i.getIsVisible(),onCheckedChange:a=>i.toggleVisibility(!!a),children:i.id},i.id))]})]})}const M=[{value:"bug",label:"Bug"},{value:"feature",label:"Feature"},{value:"documentation",label:"Documentation"}],R=[{value:"backlog",label:"Backlog",icon:W},{value:"todo",label:"Todo",icon:O},{value:"in progress",label:"In Progress",icon:E},{value:"done",label:"Done",icon:X},{value:"canceled",label:"Canceled",icon:q}],F=[{label:"Low",value:"low",icon:f},{label:"Medium",value:"medium",icon:Y},{label:"High",value:"high",icon:T}];function P({column:t,title:i,options:a}){const n=t==null?void 0:t.getFacetedUniqueValues(),s=new Set(t==null?void 0:t.getFilterValue());return e.jsxs(Me,{children:[e.jsx(Re,{asChild:!0,children:e.jsxs(o,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[e.jsx(Q,{className:"mr-2 h-4 w-4"}),i,(s==null?void 0:s.size)>0&&e.jsxs(e.Fragment,{children:[e.jsx(ze,{orientation:"vertical",className:"mx-2 h-4"}),e.jsx(x,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:s.size}),e.jsx("div",{className:"hidden space-x-1 lg:flex",children:s.size>2?e.jsxs(x,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[s.size," selected"]}):a.filter(l=>s.has(l.value)).map(l=>e.jsx(x,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:l.label},l.value))})]})]})}),e.jsx(Fe,{className:"w-[200px] p-0",align:"start",children:e.jsxs(Ue,{children:[e.jsx(Le,{placeholder:i}),e.jsxs(Ve,{children:[e.jsx(Ge,{children:"No results found."}),e.jsx(I,{children:a.map(l=>{const m=s.has(l.value);return e.jsxs(N,{onSelect:()=>{m?s.delete(l.value):s.add(l.value);const p=Array.from(s);t==null||t.setFilterValue(p.length?p:void 0)},children:[e.jsx("div",{className:y("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",m?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:e.jsx(J,{className:y("h-4 w-4")})}),l.icon&&e.jsx(l.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),e.jsx("span",{children:l.label}),(n==null?void 0:n.get(l.value))&&e.jsx("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:n.get(l.value)})]},l.value)})}),s.size>0&&e.jsxs(e.Fragment,{children:[e.jsx(He,{}),e.jsx(I,{children:e.jsx(N,{onSelect:()=>t==null?void 0:t.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}function Oe({table:t}){var a;const i=t.getState().columnFilters.length>0;return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2",children:[e.jsx(De,{placeholder:"Filter tasks...",value:((a=t.getColumn("title"))==null?void 0:a.getFilterValue())??"",onChange:n=>{var s;return(s=t.getColumn("title"))==null?void 0:s.setFilterValue(n.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),e.jsxs("div",{className:"flex gap-x-2",children:[t.getColumn("status")&&e.jsx(P,{column:t.getColumn("status"),title:"Status",options:R}),t.getColumn("priority")&&e.jsx(P,{column:t.getColumn("priority"),title:"Priority",options:F})]}),i&&e.jsxs(o,{variant:"ghost",onClick:()=>t.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Reset",e.jsx($,{className:"ml-2 h-4 w-4"})]})]}),e.jsx(We,{table:t})]})}function Ee({columns:t,data:i}){var v;const[a,n]=g.useState({}),[s,l]=g.useState({}),[m,p]=g.useState([]),[U,L]=g.useState([]),u=be({data:i,columns:t,state:{sorting:U,columnVisibility:s,rowSelection:a,columnFilters:m},enableRowSelection:!0,onRowSelectionChange:n,onSortingChange:L,onColumnFiltersChange:p,onColumnVisibilityChange:l,getCoreRowModel:xe(),getFilteredRowModel:ye(),getPaginationRowModel:we(),getSortedRowModel:Se(),getFacetedRowModel:fe(),getFacetedUniqueValues:Te()});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(Oe,{table:u}),e.jsx("div",{className:"rounded-md border",children:e.jsxs(je,{children:[e.jsx(Ae,{children:u.getHeaderGroups().map(c=>e.jsx(S,{children:c.headers.map(r=>e.jsx(ve,{colSpan:r.colSpan,children:r.isPlaceholder?null:C(r.column.columnDef.header,r.getContext())},r.id))},c.id))}),e.jsx(Ce,{children:(v=u.getRowModel().rows)!=null&&v.length?u.getRowModel().rows.map(c=>e.jsx(S,{"data-state":c.getIsSelected()&&"selected",children:c.getVisibleCells().map(r=>e.jsx(K,{children:C(r.column.columnDef.cell,r.getContext())},r.id))},c.id)):e.jsx(S,{children:e.jsx(K,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]})}),e.jsx(Be,{table:u})]})}function b({column:t,title:i,className:a}){return t.getCanSort()?e.jsx("div",{className:y("flex items-center space-x-2",a),children:e.jsxs(j,{children:[e.jsx(D,{asChild:!0,children:e.jsxs(o,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[e.jsx("span",{children:i}),t.getIsSorted()==="desc"?e.jsx(f,{className:"ml-2 h-4 w-4"}):t.getIsSorted()==="asc"?e.jsx(T,{className:"ml-2 h-4 w-4"}):e.jsx(_,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(A,{align:"start",children:[e.jsxs(d,{onClick:()=>t.toggleSorting(!1),children:[e.jsx(T,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),e.jsxs(d,{onClick:()=>t.toggleSorting(!0),children:[e.jsx(f,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),e.jsx(w,{}),e.jsxs(d,{onClick:()=>t.toggleVisibility(!1),children:[e.jsx(Z,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})}):e.jsx("div",{className:y(a),children:i})}const Xe=h.object({id:h.string(),title:h.string(),status:h.string(),label:h.string(),priority:h.string()});function qe({row:t}){const i=Xe.parse(t.original);return e.jsxs(j,{children:[e.jsx(D,{asChild:!0,children:e.jsxs(o,{variant:"ghost",className:"flex h-8 w-8 p-0 data-[state=open]:bg-muted",children:[e.jsx(ee,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Open menu"})]})}),e.jsxs(A,{align:"end",className:"w-[160px]",children:[e.jsx(d,{children:"Edit"}),e.jsx(d,{children:"Make a copy"}),e.jsx(d,{children:"Favorite"}),e.jsx(w,{}),e.jsxs(oe,{children:[e.jsx(ne,{children:"Labels"}),e.jsx(de,{children:e.jsx(ce,{value:i.label,children:M.map(a=>e.jsx(he,{value:a.value,children:a.label},a.value))})})]}),e.jsx(w,{}),e.jsxs(d,{children:["Delete",e.jsx(ue,{children:"⌘⌫"})]})]})]})}const Ye=[{id:"select",header:({table:t})=>e.jsx(k,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:i=>t.toggleAllPageRowsSelected(!!i),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:t})=>e.jsx(k,{checked:t.getIsSelected(),onCheckedChange:i=>t.toggleSelected(!!i),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"id",header:({column:t})=>e.jsx(b,{column:t,title:"Task"}),cell:({row:t})=>e.jsx("div",{className:"w-[80px]",children:t.getValue("id")}),enableSorting:!1,enableHiding:!1},{accessorKey:"title",header:({column:t})=>e.jsx(b,{column:t,title:"Title"}),cell:({row:t})=>{const i=M.find(a=>a.value===t.original.label);return e.jsxs("div",{className:"flex space-x-2",children:[i&&e.jsx(x,{variant:"outline",children:i.label}),e.jsx("span",{className:"max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]",children:t.getValue("title")})]})}},{accessorKey:"status",header:({column:t})=>e.jsx(b,{column:t,title:"Status"}),cell:({row:t})=>{const i=R.find(a=>a.value===t.getValue("status"));return i?e.jsxs("div",{className:"flex w-[100px] items-center",children:[i.icon&&e.jsx(i.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),e.jsx("span",{children:i.label})]}):null},filterFn:(t,i,a)=>a.includes(t.getValue(i))},{accessorKey:"priority",header:({column:t})=>e.jsx(b,{column:t,title:"Priority"}),cell:({row:t})=>{const i=F.find(a=>a.value===t.getValue("priority"));return i?e.jsxs("div",{className:"flex items-center",children:[i.icon&&e.jsx(i.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),e.jsx("span",{children:i.label})]}):null},filterFn:(t,i,a)=>a.includes(t.getValue(i))},{id:"actions",cell:({row:t})=>e.jsx(qe,{row:t})}],Qe=[{id:"TASK-8782",title:"You can't compress the program without quantifying the open-source SSD pixel!",status:"in progress",label:"documentation",priority:"medium"},{id:"TASK-7878",title:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"backlog",label:"documentation",priority:"medium"},{id:"TASK-7839",title:"We need to bypass the neural TCP card!",status:"todo",label:"bug",priority:"high"},{id:"TASK-5562",title:"The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",status:"backlog",label:"feature",priority:"medium"},{id:"TASK-8686",title:"I'll parse the wireless SSL protocol, that should driver the API panel!",status:"canceled",label:"feature",priority:"medium"},{id:"TASK-1280",title:"Use the digital TLS panel, then you can transmit the haptic system!",status:"done",label:"bug",priority:"high"},{id:"TASK-7262",title:"The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",status:"done",label:"feature",priority:"high"},{id:"TASK-1138",title:"Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",status:"in progress",label:"feature",priority:"medium"},{id:"TASK-7184",title:"We need to program the back-end THX pixel!",status:"todo",label:"feature",priority:"low"},{id:"TASK-5160",title:"Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",status:"in progress",label:"documentation",priority:"high"},{id:"TASK-5618",title:"Generating the driver won't do anything, we need to index the online SSL application!",status:"done",label:"documentation",priority:"medium"},{id:"TASK-6699",title:"I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",status:"backlog",label:"documentation",priority:"medium"},{id:"TASK-2858",title:"We need to override the online UDP bus!",status:"backlog",label:"bug",priority:"medium"},{id:"TASK-9864",title:"I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",status:"done",label:"bug",priority:"high"},{id:"TASK-8404",title:"We need to generate the virtual HEX alarm!",status:"in progress",label:"bug",priority:"low"},{id:"TASK-5365",title:"Backing up the pixel won't do anything, we need to transmit the primary IB array!",status:"in progress",label:"documentation",priority:"low"},{id:"TASK-1780",title:"The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!",status:"todo",label:"documentation",priority:"high"},{id:"TASK-6938",title:"Use the redundant SCSI application, then you can hack the optical alarm!",status:"todo",label:"documentation",priority:"high"},{id:"TASK-9885",title:"We need to compress the auxiliary VGA driver!",status:"backlog",label:"bug",priority:"high"},{id:"TASK-3216",title:"Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",status:"backlog",label:"documentation",priority:"medium"},{id:"TASK-9285",title:"The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!",status:"todo",label:"bug",priority:"high"},{id:"TASK-1024",title:"Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",status:"in progress",label:"documentation",priority:"low"},{id:"TASK-7068",title:"You can't generate the capacitor without indexing the wireless HEX pixel!",status:"canceled",label:"bug",priority:"low"},{id:"TASK-6502",title:"Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!",status:"todo",label:"bug",priority:"high"},{id:"TASK-5326",title:"We need to hack the redundant UTF8 transmitter!",status:"todo",label:"bug",priority:"low"},{id:"TASK-6274",title:"Use the virtual PCI circuit, then you can parse the bluetooth alarm!",status:"canceled",label:"documentation",priority:"low"},{id:"TASK-1571",title:"I'll input the neural DRAM circuit, that should protocol the SMTP interface!",status:"in progress",label:"feature",priority:"medium"},{id:"TASK-9518",title:"Compressing the interface won't do anything, we need to compress the online SDD matrix!",status:"canceled",label:"documentation",priority:"medium"},{id:"TASK-5581",title:"I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!",status:"backlog",label:"documentation",priority:"high"},{id:"TASK-2197",title:"Parsing the feed won't do anything, we need to copy the bluetooth DRAM bus!",status:"todo",label:"documentation",priority:"low"},{id:"TASK-8484",title:"We need to parse the solid state UDP firewall!",status:"in progress",label:"bug",priority:"low"},{id:"TASK-9892",title:"If we back up the application, we can get to the UDP application through the multi-byte THX capacitor!",status:"done",label:"documentation",priority:"high"},{id:"TASK-9616",title:"We need to synthesize the cross-platform ASCII pixel!",status:"in progress",label:"feature",priority:"medium"},{id:"TASK-9744",title:"Use the back-end IP card, then you can input the solid state hard drive!",status:"done",label:"documentation",priority:"low"},{id:"TASK-1376",title:"Generating the alarm won't do anything, we need to generate the mobile IP capacitor!",status:"backlog",label:"documentation",priority:"low"},{id:"TASK-7382",title:"If we back up the firewall, we can get to the RAM alarm through the primary UTF8 pixel!",status:"todo",label:"feature",priority:"low"},{id:"TASK-2290",title:"I'll compress the virtual JSON panel, that should application the UTF8 bus!",status:"canceled",label:"documentation",priority:"high"},{id:"TASK-1533",title:"You can't input the firewall without overriding the wireless TCP firewall!",status:"done",label:"bug",priority:"high"},{id:"TASK-4920",title:"Bypassing the hard drive won't do anything, we need to input the bluetooth JSON program!",status:"in progress",label:"bug",priority:"high"},{id:"TASK-5168",title:"If we synthesize the bus, we can get to the IP panel through the virtual TLS array!",status:"in progress",label:"feature",priority:"low"},{id:"TASK-7103",title:"We need to parse the multi-byte EXE bandwidth!",status:"canceled",label:"feature",priority:"low"},{id:"TASK-4314",title:"If we compress the program, we can get to the XML alarm through the multi-byte COM matrix!",status:"in progress",label:"bug",priority:"high"},{id:"TASK-3415",title:"Use the cross-platform XML application, then you can quantify the solid state feed!",status:"todo",label:"feature",priority:"high"},{id:"TASK-8339",title:"Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!",status:"in progress",label:"feature",priority:"low"},{id:"TASK-6995",title:"Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!",status:"todo",label:"feature",priority:"high"},{id:"TASK-8053",title:"If we connect the program, we can get to the UTF8 matrix through the digital UDP protocol!",status:"todo",label:"feature",priority:"medium"},{id:"TASK-4336",title:"If we synthesize the microchip, we can get to the SAS sensor through the optical UDP program!",status:"todo",label:"documentation",priority:"low"},{id:"TASK-8790",title:"I'll back up the optical COM alarm, that should alarm the RSS capacitor!",status:"done",label:"bug",priority:"medium"},{id:"TASK-8980",title:"Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!",status:"canceled",label:"bug",priority:"low"},{id:"TASK-7342",title:"Use the neural CLI card, then you can parse the online port!",status:"backlog",label:"documentation",priority:"low"},{id:"TASK-5608",title:"I'll hack the haptic SSL program, that should bus the UDP transmitter!",status:"canceled",label:"documentation",priority:"low"},{id:"TASK-1606",title:"I'll generate the bluetooth PNG firewall, that should pixel the SSL driver!",status:"done",label:"feature",priority:"medium"},{id:"TASK-7872",title:"Transmitting the circuit won't do anything, we need to reboot the 1080p RSS monitor!",status:"canceled",label:"feature",priority:"medium"},{id:"TASK-4167",title:"Use the cross-platform SMS circuit, then you can synthesize the optical feed!",status:"canceled",label:"bug",priority:"medium"},{id:"TASK-9581",title:"You can't index the port without hacking the cross-platform XSS monitor!",status:"backlog",label:"documentation",priority:"low"},{id:"TASK-8806",title:"We need to bypass the back-end SSL panel!",status:"done",label:"bug",priority:"medium"},{id:"TASK-6542",title:"Try to quantify the RSS firewall, maybe it will quantify the open-source system!",status:"done",label:"feature",priority:"low"},{id:"TASK-6806",title:"The VGA protocol is down, reboot the back-end matrix so we can parse the CSS panel!",status:"canceled",label:"documentation",priority:"low"},{id:"TASK-9549",title:"You can't bypass the bus without connecting the neural JBOD bus!",status:"todo",label:"feature",priority:"high"},{id:"TASK-1075",title:"Backing up the driver won't do anything, we need to parse the redundant RAM pixel!",status:"done",label:"feature",priority:"medium"},{id:"TASK-1427",title:"Use the auxiliary PCI circuit, then you can calculate the cross-platform interface!",status:"done",label:"documentation",priority:"high"},{id:"TASK-1907",title:"Hacking the circuit won't do anything, we need to back up the online DRAM system!",status:"todo",label:"documentation",priority:"high"},{id:"TASK-4309",title:"If we generate the system, we can get to the TCP sensor through the optical GB pixel!",status:"backlog",label:"bug",priority:"medium"},{id:"TASK-3973",title:"I'll parse the back-end ADP array, that should bandwidth the RSS bandwidth!",status:"todo",label:"feature",priority:"medium"},{id:"TASK-7962",title:"Use the wireless RAM program, then you can hack the cross-platform feed!",status:"canceled",label:"bug",priority:"low"},{id:"TASK-3360",title:"You can't quantify the program without synthesizing the neural OCR interface!",status:"done",label:"feature",priority:"medium"},{id:"TASK-9887",title:"Use the auxiliary ASCII sensor, then you can connect the solid state port!",status:"backlog",label:"bug",priority:"medium"},{id:"TASK-3649",title:"I'll input the virtual USB system, that should circuit the DNS monitor!",status:"in progress",label:"feature",priority:"medium"},{id:"TASK-3586",title:"If we quantify the circuit, we can get to the CLI feed through the mobile SMS hard drive!",status:"in progress",label:"bug",priority:"low"},{id:"TASK-5150",title:"I'll hack the wireless XSS port, that should transmitter the IP interface!",status:"canceled",label:"feature",priority:"medium"},{id:"TASK-3652",title:"The SQL interface is down, override the optical bus so we can program the ASCII interface!",status:"backlog",label:"feature",priority:"low"},{id:"TASK-6884",title:"Use the digital PCI circuit, then you can synthesize the multi-byte microchip!",status:"canceled",label:"feature",priority:"high"},{id:"TASK-1591",title:"We need to connect the mobile XSS driver!",status:"in progress",label:"feature",priority:"high"},{id:"TASK-3802",title:"Try to override the ASCII protocol, maybe it will parse the virtual matrix!",status:"in progress",label:"feature",priority:"low"},{id:"TASK-7253",title:"Programming the capacitor won't do anything, we need to bypass the neural IB hard drive!",status:"backlog",label:"bug",priority:"high"},{id:"TASK-9739",title:"We need to hack the multi-byte HDD bus!",status:"done",label:"documentation",priority:"medium"},{id:"TASK-4424",title:"Try to hack the HEX alarm, maybe it will connect the optical pixel!",status:"in progress",label:"documentation",priority:"medium"},{id:"TASK-3922",title:"You can't back up the capacitor without generating the wireless PCI program!",status:"backlog",label:"bug",priority:"low"},{id:"TASK-4921",title:"I'll index the open-source IP feed, that should system the GB application!",status:"canceled",label:"bug",priority:"low"},{id:"TASK-5814",title:"We need to calculate the 1080p AGP feed!",status:"backlog",label:"bug",priority:"high"},{id:"TASK-2645",title:"Synthesizing the system won't do anything, we need to navigate the multi-byte HDD firewall!",status:"todo",label:"documentation",priority:"medium"},{id:"TASK-4535",title:"Try to copy the JSON circuit, maybe it will connect the wireless feed!",status:"in progress",label:"feature",priority:"low"},{id:"TASK-4463",title:"We need to copy the solid state AGP monitor!",status:"done",label:"documentation",priority:"low"},{id:"TASK-9745",title:"If we connect the protocol, we can get to the GB system through the bluetooth PCI microchip!",status:"canceled",label:"feature",priority:"high"},{id:"TASK-2080",title:"If we input the bus, we can get to the RAM matrix through the auxiliary RAM card!",status:"todo",label:"bug",priority:"medium"},{id:"TASK-3838",title:"I'll bypass the online TCP application, that should panel the AGP system!",status:"backlog",label:"bug",priority:"high"},{id:"TASK-1340",title:"We need to navigate the virtual PNG circuit!",status:"todo",label:"bug",priority:"medium"},{id:"TASK-6665",title:"If we parse the monitor, we can get to the SSD hard drive through the cross-platform AGP alarm!",status:"canceled",label:"feature",priority:"low"},{id:"TASK-7585",title:"If we calculate the hard drive, we can get to the SSL program through the multi-byte CSS microchip!",status:"backlog",label:"feature",priority:"low"},{id:"TASK-6319",title:"We need to copy the multi-byte SCSI program!",status:"backlog",label:"bug",priority:"high"},{id:"TASK-4369",title:"Try to input the SCSI bus, maybe it will generate the 1080p pixel!",status:"backlog",label:"bug",priority:"high"},{id:"TASK-9035",title:"We need to override the solid state PNG array!",status:"canceled",label:"documentation",priority:"low"},{id:"TASK-3970",title:"You can't index the transmitter without quantifying the haptic ASCII card!",status:"todo",label:"documentation",priority:"medium"},{id:"TASK-4473",title:"You can't bypass the protocol without overriding the neural RSS program!",status:"todo",label:"documentation",priority:"low"},{id:"TASK-4136",title:"You can't hack the hard drive without hacking the primary JSON program!",status:"canceled",label:"bug",priority:"medium"},{id:"TASK-3939",title:"Use the back-end SQL firewall, then you can connect the neural hard drive!",status:"done",label:"feature",priority:"low"},{id:"TASK-2007",title:"I'll input the back-end USB protocol, that should bandwidth the PCI system!",status:"backlog",label:"bug",priority:"high"},{id:"TASK-7516",title:"Use the primary SQL program, then you can generate the auxiliary transmitter!",status:"done",label:"documentation",priority:"medium"},{id:"TASK-6906",title:"Try to back up the DRAM system, maybe it will reboot the online transmitter!",status:"done",label:"feature",priority:"high"},{id:"TASK-5207",title:"The SMS interface is down, copy the bluetooth bus so we can quantify the VGA card!",status:"in progress",label:"bug",priority:"low"}];function pt(){return e.jsxs(me,{children:[e.jsxs(pe,{children:[e.jsx(te,{}),e.jsxs("div",{className:"ml-auto flex items-center space-x-4",children:[e.jsx(ie,{}),e.jsx(ae,{})]})]}),e.jsxs(ge,{className:"flex flex-col",fixedHeight:!0,children:[e.jsx("div",{className:"mb-2 flex items-center justify-between space-y-2",children:e.jsx("div",{children:e.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:"Danh sách yêu cầu"})})}),e.jsx("div",{className:"-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0",children:e.jsx(Ee,{data:Qe,columns:Ye})})]})]})}export{pt as default};
