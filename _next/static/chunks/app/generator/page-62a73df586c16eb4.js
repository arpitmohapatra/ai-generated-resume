(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{285:(e,r,t)=>{"use strict";t.d(r,{$:()=>i});var a=t(5155);t(2115);var s=t(4624),l=t(2085),o=t(9434);let n=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",blue:"bg-blue-600 text-white shadow-xs hover:bg-blue-700 focus-visible:ring-blue-400/20 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus-visible:ring-blue-400/40"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function i(e){let{className:r,variant:t,size:l,asChild:i=!1,...d}=e,c=i?s.DX:"button";return(0,a.jsx)(c,{"data-slot":"button",className:(0,o.cn)(n({variant:t,size:l,className:r})),...d})}},1690:(e,r,t)=>{"use strict";t.d(r,{ThemeToggle:()=>i});var a=t(5155);t(2115);var s=t(2098),l=t(3509),o=t(1362),n=t(285);function i(){let{theme:e,setTheme:r}=(0,o.D)();return(0,a.jsxs)(n.$,{variant:"outline",size:"icon",onClick:()=>{r("dark"===e?"light":"dark")},className:"bg-blue-100/50 border-blue-200 hover:bg-blue-200/50 dark:bg-blue-900/30 dark:border-blue-800 dark:hover:bg-blue-800/50",children:[(0,a.jsx)(s.A,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-blue-600 dark:text-blue-400"}),(0,a.jsx)(l.A,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-600 dark:text-blue-400"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},1985:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>F});var a=t(5155),s=t(2115),l=t(6874),o=t.n(l),n=t(2177),i=t(221),d=t(5594),c=t(6671),u=t(7550),m=t(4835),b=t(9869),x=t(285),h=t(5937),p=t(9434);function g(e){let{className:r,...t}=e;return(0,a.jsx)("textarea",{"data-slot":"textarea",className:(0,p.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),...t})}var f=t(6695),v=t(6710),j=t(7434),N=t(4416);function k(e){let{onFileUpload:r,isLoading:t}=e,[l,o]=(0,s.useState)(null),n=(0,s.useCallback)(e=>{if(e.length>0){let t=e[0];o(t),r(t)}},[r]),{getRootProps:i,getInputProps:d,isDragActive:c}=(0,v.VB)({onDrop:n,accept:{"application/pdf":[".pdf"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"text/plain":[".txt"],"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"]},maxFiles:1,disabled:t});return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{...i(),className:"border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors ".concat(c?"border-primary bg-primary/5":"border-border hover:border-primary"," ").concat(t?"opacity-50 cursor-not-allowed":""),children:[(0,a.jsx)("input",{...d()}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2",children:[(0,a.jsx)(b.A,{className:"h-8 w-8 text-primary"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:c?"Drop the file here":"Drag and drop your resume, or click to select"}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground/70",children:"Supports PDF, Word, TXT, and image files"})]})]}),l&&(0,a.jsxs)("div",{className:"flex items-center justify-between p-3 bg-muted/50 rounded-md border border-border",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(j.A,{className:"h-5 w-5 text-primary"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium truncate max-w-[200px]",children:l.name}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground",children:[(l.size/1024).toFixed(1)," KB"]})]})]}),!t&&(0,a.jsx)(x.$,{variant:"ghost",size:"icon",onClick:()=>{o(null)},className:"h-8 w-8 text-muted-foreground hover:text-foreground",children:(0,a.jsx)(N.A,{className:"h-4 w-4"})})]})]})}var w=t(4357),y=t(1788);function R(e){let{content:r,type:t,isLoading:s}=e;return s?(0,a.jsx)("div",{className:"flex flex-col items-center justify-center h-full py-12",children:(0,a.jsxs)("div",{className:"animate-pulse flex flex-col items-center gap-4",children:[(0,a.jsx)("div",{className:"h-8 w-8 bg-blue-200 rounded-full dark:bg-blue-800/50"}),(0,a.jsx)("div",{className:"h-4 w-48 bg-blue-200 rounded dark:bg-blue-800/50"}),(0,a.jsx)("div",{className:"h-3 w-36 bg-blue-200 rounded dark:bg-blue-800/50"})]})}):r?(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,a.jsxs)(x.$,{variant:"outline",size:"sm",onClick:()=>{navigator.clipboard.writeText(r),c.oR.success("Content copied to clipboard")},className:"border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 dark:border-blue-800 dark:bg-blue-900/20 dark:hover:bg-blue-900/30",children:[(0,a.jsx)(w.A,{className:"h-4 w-4 mr-2 text-blue-600 dark:text-blue-400"}),"Copy"]}),(0,a.jsxs)(x.$,{variant:"outline",size:"sm",onClick:()=>{let e=document.createElement("a"),a=new Blob([r],{type:"text/plain"});e.href=URL.createObjectURL(a),e.download="resume"===t?"tailored-resume.txt":"cover-letter.txt",document.body.appendChild(e),e.click(),document.body.removeChild(e)},className:"border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 dark:border-blue-800 dark:bg-blue-900/20 dark:hover:bg-blue-900/30",children:[(0,a.jsx)(y.A,{className:"h-4 w-4 mr-2 text-blue-600 dark:text-blue-400"}),"Download"]})]}),(0,a.jsx)("div",{className:"bg-white border border-blue-100 rounded-md p-6 whitespace-pre-wrap font-mono text-sm shadow-sm dark:bg-slate-900 dark:border-blue-900/50",children:r})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center h-full py-12 text-center",children:[(0,a.jsx)(j.A,{className:"h-12 w-12 text-blue-300 mb-4 dark:text-blue-700"}),(0,a.jsx)("h3",{className:"text-lg font-medium text-slate-700 mb-2 dark:text-slate-300",children:"resume"===t?"No Resume Generated Yet":"No Cover Letter Generated Yet"}),(0,a.jsxs)("p",{className:"text-sm text-slate-500 max-w-md dark:text-slate-400",children:['Fill out the form and click "Generate" to create your tailored ',"resume"===t?"resume":"cover letter","."]})]})}var C=t(5695),I=t(7600);function z(e){let{children:r}=e,{isAuthenticated:t,isLoading:l}=(0,I.A)(),o=(0,C.useRouter)();return((0,s.useEffect)(()=>{l||t||o.push("/login")},[t,l,o]),l)?(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:(0,a.jsxs)("div",{className:"animate-pulse flex flex-col items-center gap-4",children:[(0,a.jsx)("div",{className:"h-12 w-12 bg-slate-200 rounded-full"}),(0,a.jsx)("div",{className:"h-4 w-48 bg-slate-200 rounded"})]})}):t?(0,a.jsx)(a.Fragment,{children:r}):null}var A=t(1690),S=t(3204);let T=d.z.object({resumeText:d.z.string().min(1,"Resume text is required"),jobDescription:d.z.string().min(1,"Job description is required"),additionalInfo:d.z.string().optional()});function _(){let{user:e,logout:r}=(0,I.A)(),[t,l]=(0,s.useState)(!1),[d,p]=(0,s.useState)(""),[v,j]=(0,s.useState)(""),[N,w]=(0,s.useState)("resume"),y=(0,n.mN)({resolver:(0,i.u)(T),defaultValues:{resumeText:"",jobDescription:"",additionalInfo:""}}),C=async e=>{l(!0);let r=new FormData;r.append("file",e);try{let e=localStorage.getItem("token"),t=await fetch("".concat(S.H$,"/api/upload-resume"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)},body:r});if(!t.ok)throw Error("Failed to upload resume");let a=await t.json();y.setValue("resumeText",a.resume_text),c.oR.success("Resume uploaded and parsed successfully")}catch(e){console.error("Error uploading resume:",e),c.oR.error("Failed to upload resume. Please try again.")}finally{l(!1)}},z=async e=>{l(!0);try{let r=localStorage.getItem("token"),t=new FormData;t.append("resume_text",e.resumeText),t.append("job_description",e.jobDescription),e.additionalInfo&&t.append("additional_info",e.additionalInfo);let a=await fetch("".concat(S.H$,"/api/generate-resume"),{method:"POST",headers:{Authorization:"Bearer ".concat(r)},body:t});if(!a.ok)throw Error("Failed to generate resume");let s=await a.json();p(s.tailored_resume);let l=new FormData;l.append("resume_text",e.resumeText),l.append("job_description",e.jobDescription),e.additionalInfo&&l.append("additional_info",e.additionalInfo);let o=await fetch("".concat(S.H$,"/api/generate-cover-letter"),{method:"POST",headers:{Authorization:"Bearer ".concat(r)},body:l});if(!o.ok)throw Error("Failed to generate cover letter");let n=await o.json();j(n.cover_letter),c.oR.success("Resume and cover letter generated successfully")}catch(e){console.error("Error generating content:",e),c.oR.error("Failed to generate content. Please try again.")}finally{l(!1)}};return(0,a.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background",children:[(0,a.jsx)("header",{className:"bg-blue-600 text-white shadow-md dark:bg-blue-700",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)(x.$,{variant:"ghost",size:"icon",className:"text-white hover:bg-blue-500/80 dark:hover:bg-blue-600/80",children:(0,a.jsx)(u.A,{className:"h-5 w-5"})})}),(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"AI Resume Generator"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("span",{className:"text-sm",children:["Welcome, ",null==e?void 0:e.username]}),(0,a.jsx)(A.ThemeToggle,{}),(0,a.jsxs)(x.$,{variant:"secondary",size:"sm",onClick:r,className:"bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800",children:[(0,a.jsx)(m.A,{className:"h-4 w-4 mr-2"}),"Sign Out"]})]})]})}),(0,a.jsx)("div",{className:"container mx-auto px-4 py-8",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,a.jsx)("div",{children:(0,a.jsxs)(f.Zp,{className:"border-blue-100 shadow-md dark:border-blue-900/50",children:[(0,a.jsxs)(f.aR,{className:"bg-blue-50 border-b border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/50",children:[(0,a.jsx)(f.ZB,{className:"text-blue-600 dark:text-blue-400",children:"Resume & Job Details"}),(0,a.jsx)(f.BT,{children:"Upload your resume and provide job details to generate tailored content"})]}),(0,a.jsx)(f.Wu,{className:"pt-6",children:(0,a.jsx)(h.lV,{...y,children:(0,a.jsxs)("form",{onSubmit:y.handleSubmit(z),className:"space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"border rounded-lg p-4 bg-blue-50/50 border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/30",children:[(0,a.jsxs)("h3",{className:"font-medium mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400",children:[(0,a.jsx)(b.A,{className:"h-4 w-4"}),"Upload Resume"]}),(0,a.jsx)(k,{onFileUpload:C,isLoading:t})]}),(0,a.jsx)(h.zB,{control:y.control,name:"resumeText",render:e=>{let{field:r}=e;return(0,a.jsxs)(h.eI,{children:[(0,a.jsx)(h.lR,{children:"Resume Text"}),(0,a.jsx)(h.MJ,{children:(0,a.jsx)(g,{placeholder:"Paste your resume text or upload a file above",className:"min-h-[200px] border-blue-200 dark:border-blue-900/50",...r})}),(0,a.jsx)(h.C5,{})]})}}),(0,a.jsx)(h.zB,{control:y.control,name:"jobDescription",render:e=>{let{field:r}=e;return(0,a.jsxs)(h.eI,{children:[(0,a.jsx)(h.lR,{children:"Job Description"}),(0,a.jsx)(h.MJ,{children:(0,a.jsx)(g,{placeholder:"Paste the job description here",className:"min-h-[200px] border-blue-200 dark:border-blue-900/50",...r})}),(0,a.jsx)(h.C5,{})]})}}),(0,a.jsx)(h.zB,{control:y.control,name:"additionalInfo",render:e=>{let{field:r}=e;return(0,a.jsxs)(h.eI,{children:[(0,a.jsx)(h.lR,{children:"Additional Information (Optional)"}),(0,a.jsx)(h.MJ,{children:(0,a.jsx)(g,{placeholder:"Add any additional information or specific instructions",className:"min-h-[100px] border-blue-200 dark:border-blue-900/50",...r})}),(0,a.jsx)(h.C5,{})]})}})]}),(0,a.jsx)(x.$,{type:"submit",variant:"blue",className:"w-full",disabled:t,children:t?"Generating...":"Generate Resume & Cover Letter"})]})})})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)(f.Zp,{className:"h-full flex flex-col border-blue-100 shadow-md dark:border-blue-900/50",children:[(0,a.jsxs)(f.aR,{className:"bg-blue-50 border-b border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/50",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)(f.ZB,{className:"text-blue-600 dark:text-blue-400",children:"Generated Content"}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(x.$,{variant:"resume"===N?"blue":"outline",size:"sm",onClick:()=>w("resume"),className:"resume"!==N?"border-blue-200 dark:border-blue-900/50":"",children:"Resume"}),(0,a.jsx)(x.$,{variant:"coverLetter"===N?"blue":"outline",size:"sm",onClick:()=>w("coverLetter"),className:"coverLetter"!==N?"border-blue-200 dark:border-blue-900/50":"",children:"Cover Letter"})]})]}),(0,a.jsx)(f.BT,{children:"resume"===N?"Your tailored resume based on the job description":"Your personalized cover letter"})]}),(0,a.jsx)(f.Wu,{className:"flex-1 overflow-auto pt-6",children:(0,a.jsx)(R,{content:"resume"===N?d:v,type:N,isLoading:t})})]})})]})})]})}function F(){return(0,a.jsx)(z,{children:(0,a.jsx)(_,{})})}},3204:(e,r,t)=>{"use strict";t.d(r,{H$:()=>a});let a=t(1890).env.NEXT_PUBLIC_API_URL||"https://ai-generated-resume.onrender.com"},3737:(e,r,t)=>{Promise.resolve().then(t.bind(t,1985))},5937:(e,r,t)=>{"use strict";t.d(r,{lV:()=>c,MJ:()=>g,zB:()=>m,eI:()=>h,lR:()=>p,C5:()=>f});var a=t(5155),s=t(2115),l=t(4624),o=t(2177),n=t(9434),i=t(7073);function d(e){let{className:r,...t}=e;return(0,a.jsx)(i.b,{"data-slot":"label",className:(0,n.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...t})}let c=o.Op,u=s.createContext({}),m=e=>{let{...r}=e;return(0,a.jsx)(u.Provider,{value:{name:r.name},children:(0,a.jsx)(o.xI,{...r})})},b=()=>{let e=s.useContext(u),r=s.useContext(x),{getFieldState:t}=(0,o.xW)(),a=(0,o.lN)({name:e.name}),l=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=r;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...l}},x=s.createContext({});function h(e){let{className:r,...t}=e,l=s.useId();return(0,a.jsx)(x.Provider,{value:{id:l},children:(0,a.jsx)("div",{"data-slot":"form-item",className:(0,n.cn)("grid gap-2",r),...t})})}function p(e){let{className:r,...t}=e,{error:s,formItemId:l}=b();return(0,a.jsx)(d,{"data-slot":"form-label","data-error":!!s,className:(0,n.cn)("data-[error=true]:text-destructive-foreground",r),htmlFor:l,...t})}function g(e){let{...r}=e,{error:t,formItemId:s,formDescriptionId:o,formMessageId:n}=b();return(0,a.jsx)(l.DX,{"data-slot":"form-control",id:s,"aria-describedby":t?"".concat(o," ").concat(n):"".concat(o),"aria-invalid":!!t,...r})}function f(e){var r;let{className:t,...s}=e,{error:l,formMessageId:o}=b(),i=l?String(null!==(r=null==l?void 0:l.message)&&void 0!==r?r:""):s.children;return i?(0,a.jsx)("p",{"data-slot":"form-message",id:o,className:(0,n.cn)("text-destructive-foreground text-sm",t),...s,children:i}):null}},6695:(e,r,t)=>{"use strict";t.d(r,{BT:()=>i,Wu:()=>d,ZB:()=>n,Zp:()=>l,aR:()=>o});var a=t(5155);t(2115);var s=t(9434);function l(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card",className:(0,s.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r),...t})}function o(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-header",className:(0,s.cn)("flex flex-col gap-1.5 px-6",r),...t})}function n(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-title",className:(0,s.cn)("leading-none font-semibold",r),...t})}function i(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-description",className:(0,s.cn)("text-muted-foreground text-sm",r),...t})}function d(e){let{className:r,...t}=e;return(0,a.jsx)("div",{"data-slot":"card-content",className:(0,s.cn)("px-6",r),...t})}},7600:(e,r,t)=>{"use strict";t.d(r,{A:()=>c,AuthProvider:()=>d});var a=t(5155),s=t(2115),l=t(5695),o=t(6671),n=t(3204);let i=(0,s.createContext)(void 0);function d(e){let{children:r}=e,[t,d]=(0,s.useState)(null),[c,u]=(0,s.useState)(null),[m,b]=(0,s.useState)(!0),x=(0,l.useRouter)();(0,s.useEffect)(()=>{let e=localStorage.getItem("token");e?(u(e),h(e)):b(!1)},[]);let h=async e=>{try{let r=await fetch("".concat(n.H$,"/api/auth/me"),{headers:{Authorization:"Bearer ".concat(e)}});if(r.ok){let e=await r.json();d(e)}else localStorage.removeItem("token"),u(null)}catch(e){console.error("Error fetching user info:",e),localStorage.removeItem("token"),u(null)}finally{b(!1)}},p=async(e,r)=>{b(!0);try{let t=new URLSearchParams;t.append("username",e),t.append("password",r);let a=await fetch("".concat(n.H$,"/api/auth/token"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t});if(!a.ok)return o.oR.error("Invalid username or password"),!1;let{access_token:s}=await a.json();return localStorage.setItem("token",s),u(s),await h(s),o.oR.success("Login successful"),!0}catch(e){return console.error("Login error:",e),o.oR.error("An error occurred during login"),!1}finally{b(!1)}};return(0,a.jsx)(i.Provider,{value:{user:t,token:c,isAuthenticated:!!t,isLoading:m,login:p,logout:()=>{localStorage.removeItem("token"),d(null),u(null),x.push("/login"),o.oR.success("Logged out successfully")}},children:r})}function c(){let e=(0,s.useContext)(i);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},9434:(e,r,t)=>{"use strict";t.d(r,{cn:()=>l});var a=t(2596),s=t(9688);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.QP)((0,a.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[237,753,46,557,441,684,358],()=>r(3737)),_N_E=e.O()}]);