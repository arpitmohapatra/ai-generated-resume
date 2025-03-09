(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{285:(e,r,t)=>{"use strict";t.d(r,{Button:()=>i});var a=t(5155),n=t(2115),s=t(4624),o=t(2085),l=t(9434);let d=(0,o.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-blue-600 text-primary-foreground shadow hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",blue:"bg-blue-600 text-white shadow hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),i=n.forwardRef((e,r)=>{let{className:t,variant:n,size:o,asChild:i=!1,...c}=e,u=i?s.DX:"button";return(0,a.jsx)(u,{className:(0,l.cn)(d({variant:n,size:o,className:t})),ref:r,...c})});i.displayName="Button"},1690:(e,r,t)=>{"use strict";t.d(r,{ThemeToggle:()=>d});var a=t(5155);t(2115);var n=t(2098),s=t(3509),o=t(1362),l=t(285);function d(){let{theme:e,setTheme:r}=(0,o.D)();return(0,a.jsxs)(l.Button,{variant:"outline",size:"icon",onClick:()=>{r("dark"===e?"light":"dark")},className:"bg-blue-100/50 border-blue-200 hover:bg-blue-200/50 dark:bg-blue-900/30 dark:border-blue-800 dark:hover:bg-blue-800/50",children:[(0,a.jsx)(n.A,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-blue-600 dark:text-blue-400"}),(0,a.jsx)(s.A,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-600 dark:text-blue-400"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},2310:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>j});var a=t(5155),n=t(2115),s=t(5695),o=t(6874),l=t.n(o),d=t(2177),i=t(221),c=t(5594),u=t(7600),m=t(285),x=t(5937),b=t(9434);function h(e){let{className:r,type:t,...n}=e;return(0,a.jsx)("input",{type:t,"data-slot":"input",className:(0,b.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...n})}var f=t(6695),g=t(1690),v=t(3204);let p=c.z.object({username:c.z.string().min(1,"Username is required"),password:c.z.string().min(1,"Password is required")});function j(){let{login:e,isLoading:r}=(0,u.A)(),t=(0,s.useRouter)(),[o,c]=(0,n.useState)(null),b=(0,d.mN)({resolver:(0,i.u)(p),defaultValues:{username:"",password:""}}),j=async r=>{c(null),await e(r.username,r.password)&&t.push("/generator")};return(0,a.jsxs)("div",{className:"min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background",children:[(0,a.jsxs)("header",{className:"w-full p-4 flex justify-between",children:[(0,a.jsx)(l(),{href:"".concat(v.o2,"/"),children:(0,a.jsx)(m.Button,{variant:"ghost",className:"text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20",children:"← Back to Home"})}),(0,a.jsx)(g.ThemeToggle,{})]}),(0,a.jsx)("div",{className:"flex-1 flex items-center justify-center p-4",children:(0,a.jsxs)(f.Zp,{className:"w-full max-w-md shadow-lg border-blue-100 dark:border-blue-900/50",children:[(0,a.jsxs)(f.aR,{className:"space-y-1 bg-blue-600 text-white rounded-t-lg dark:bg-blue-700",children:[(0,a.jsx)(f.ZB,{className:"text-2xl font-bold text-center",children:"Sign In"}),(0,a.jsx)(f.BT,{className:"text-center text-blue-100",children:"Enter your credentials to access the AI Resume Generator"})]}),(0,a.jsxs)(f.Wu,{className:"pt-6",children:[(0,a.jsx)(x.lV,{...b,children:(0,a.jsxs)("form",{onSubmit:b.handleSubmit(j),className:"space-y-4",children:[(0,a.jsx)(x.zB,{control:b.control,name:"username",render:e=>{let{field:r}=e;return(0,a.jsxs)(x.eI,{children:[(0,a.jsx)(x.lR,{children:"Username"}),(0,a.jsx)(x.MJ,{children:(0,a.jsx)(h,{placeholder:"Enter your username",...r,className:"border-blue-200 dark:border-blue-900/50"})}),(0,a.jsx)(x.C5,{})]})}}),(0,a.jsx)(x.zB,{control:b.control,name:"password",render:e=>{let{field:r}=e;return(0,a.jsxs)(x.eI,{children:[(0,a.jsx)(x.lR,{children:"Password"}),(0,a.jsx)(x.MJ,{children:(0,a.jsx)(h,{type:"password",placeholder:"Enter your password",...r,className:"border-blue-200 dark:border-blue-900/50"})}),(0,a.jsx)(x.C5,{})]})}}),o&&(0,a.jsx)("p",{className:"text-sm text-destructive",children:o}),(0,a.jsx)(m.Button,{type:"submit",variant:"blue",className:"w-full",disabled:r,children:r?"Signing in...":"Sign In"})]})}),(0,a.jsx)("div",{className:"mt-4 text-center text-sm",children:(0,a.jsxs)("p",{children:["Don't have an account?"," ",(0,a.jsx)(l(),{href:"".concat(v.o2,"/"),className:"text-blue-600 hover:underline dark:text-blue-400",children:"Back to Home"})]})})]})]})})]})}},3009:(e,r,t)=>{Promise.resolve().then(t.bind(t,2310))},3204:(e,r,t)=>{"use strict";t.d(r,{H$:()=>a,o2:()=>n});let a=t(1890).env.NEXT_PUBLIC_API_URL||"https://ai-generated-resume.onrender.com",n="/ai-generated-resume"},5937:(e,r,t)=>{"use strict";t.d(r,{lV:()=>c,MJ:()=>g,zB:()=>m,eI:()=>h,lR:()=>f,C5:()=>v});var a=t(5155),n=t(2115),s=t(4624),o=t(2177),l=t(9434),d=t(7073);function i(e){let{className:r,...t}=e;return(0,a.jsx)(d.b,{"data-slot":"label",className:(0,l.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...t})}let c=o.Op,u=n.createContext({}),m=e=>{let{...r}=e;return(0,a.jsx)(u.Provider,{value:{name:r.name},children:(0,a.jsx)(o.xI,{...r})})},x=()=>{let e=n.useContext(u),r=n.useContext(b),{getFieldState:t}=(0,o.xW)(),a=(0,o.lN)({name:e.name}),s=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=r;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...s}},b=n.createContext({});function h(e){let{className:r,...t}=e,s=n.useId();return(0,a.jsx)(b.Provider,{value:{id:s},children:(0,a.jsx)("div",{"data-slot":"form-item",className:(0,l.cn)("grid gap-2",r),...t})})}function f(e){let{className:r,...t}=e,{error:n,formItemId:s}=x();return(0,a.jsx)(i,{"data-slot":"form-label","data-error":!!n,className:(0,l.cn)("data-[error=true]:text-destructive-foreground",r),htmlFor:s,...t})}function g(e){let{...r}=e,{error:t,formItemId:n,formDescriptionId:o,formMessageId:l}=x();return(0,a.jsx)(s.DX,{"data-slot":"form-control",id:n,"aria-describedby":t?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!t,...r})}function v(e){var r;let{className:t,...n}=e,{error:s,formMessageId:o}=x(),d=s?String(null!==(r=null==s?void 0:s.message)&&void 0!==r?r:""):n.children;return d?(0,a.jsx)("p",{"data-slot":"form-message",id:o,className:(0,l.cn)("text-destructive-foreground text-sm",t),...n,children:d}):null}},6695:(e,r,t)=>{"use strict";t.d(r,{BT:()=>d,Wu:()=>i,ZB:()=>l,Zp:()=>s,aR:()=>o});var a=t(5155);t(2115);var n=t(9434);function s(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card",className:(0,n.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r),...t})}function o(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-header",className:(0,n.cn)("flex flex-col gap-1.5 px-6",r),...t})}function l(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-title",className:(0,n.cn)("leading-none font-semibold",r),...t})}function d(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-description",className:(0,n.cn)("text-muted-foreground text-sm",r),...t})}function i(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-content",className:(0,n.cn)("px-6",r),...t})}},7600:(e,r,t)=>{"use strict";t.d(r,{A:()=>c,AuthProvider:()=>i});var a=t(5155),n=t(2115),s=t(5695),o=t(6671),l=t(3204);let d=(0,n.createContext)(void 0);function i(e){let{children:r}=e,[t,i]=(0,n.useState)(null),[c,u]=(0,n.useState)(null),[m,x]=(0,n.useState)(!0),b=(0,s.useRouter)();(0,n.useEffect)(()=>{let e=localStorage.getItem("token");e?(u(e),h(e)):x(!1)},[]);let h=async e=>{try{let r=await fetch("".concat(l.H$,"/api/auth/me"),{headers:{Authorization:"Bearer ".concat(e)}});if(r.ok){let e=await r.json();i(e)}else localStorage.removeItem("token"),u(null)}catch(e){console.error("Error fetching user info:",e),localStorage.removeItem("token"),u(null)}finally{x(!1)}},f=async(e,r)=>{x(!0);try{let t=new URLSearchParams;t.append("username",e),t.append("password",r);let a=await fetch("".concat(l.H$,"/api/auth/token"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t});if(!a.ok)return o.oR.error("Invalid username or password"),!1;let{access_token:n}=await a.json();return localStorage.setItem("token",n),u(n),await h(n),o.oR.success("Login successful"),!0}catch(e){return console.error("Login error:",e),o.oR.error("An error occurred during login"),!1}finally{x(!1)}};return(0,a.jsx)(d.Provider,{value:{user:t,token:c,isAuthenticated:!!t,isLoading:m,login:f,logout:()=>{localStorage.removeItem("token"),i(null),u(null),b.push("".concat(l.o2,"/login")),o.oR.success("Logged out successfully")}},children:r})}function c(){let e=(0,n.useContext)(d);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},9434:(e,r,t)=>{"use strict";t.d(r,{cn:()=>s});var a=t(2596),n=t(9688);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,a.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[237,753,46,441,684,358],()=>r(3009)),_N_E=e.O()}]);