"use strict";(self.webpackChunkfngo=self.webpackChunkfngo||[]).push([[984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Templating"},i="Templating",l={unversionedId:"api/templating/index",id:"api/templating/index",title:"Templating",description:"In addition to being able to do things using shell scripts and commands, fn also allows any string field to first to be interpreted as a go txt/template first.",source:"@site/docs/api/200-templating/index.mdx",sourceDirName:"api/200-templating",slug:"/api/templating/",permalink:"/api/templating/",draft:!1,tags:[],version:"current",frontMatter:{title:"Templating"},sidebar:"defaultSidebar",previous:{title:"Steps",permalink:"/api/steps/"},next:{title:"CLI",permalink:"/cli/"}},p={},s=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=c("Alert"),m=c("AlertTitle"),d={toc:s};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"templating"},"Templating"),(0,a.kt)("p",null,"In addition to being able to do things using ",(0,a.kt)("inlineCode",{parentName:"p"},"shell")," scripts and commands, ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," also allows any string field to first to be interpreted as a ",(0,a.kt)("inlineCode",{parentName:"p"},"go txt/template")," first."),(0,a.kt)(u,{style:{marginBottom:"1em"},variant:"filled",severity:"success",mdxType:"Alert"},(0,a.kt)(m,{mdxType:"AlertTitle"},"A note about escaping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Use the following syntax to escape the Go txt/template mustache syntax:\n\n```Go\n{{`{{ foo }}`}}\n```\n\nNotice how we are encapsulating the actual value as a string literal inside the `{{ }}` block.\n"))))}f.isMDXComponent=!0}}]);