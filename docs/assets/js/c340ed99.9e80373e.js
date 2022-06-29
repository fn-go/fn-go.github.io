"use strict";(self.webpackChunkfngo=self.webpackChunkfngo||[]).push([[237],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Templating"},p="Templating",c={unversionedId:"api/templating/index",id:"api/templating/index",title:"Templating",description:"In addition to being able to do things using shell scripts and commands, fn also allows any string field to first to be interpreted as a go txt/template first.",source:"@site/content/api/200-templating/index.mdx",sourceDirName:"api/200-templating",slug:"/api/templating/",permalink:"/api/templating/",draft:!1,tags:[],version:"current",frontMatter:{title:"Templating"},sidebar:"defaultSidebar",previous:{title:"Steps",permalink:"/api/steps/"},next:{title:"CLI",permalink:"/cli/"}},s={},u=[],f=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=f("Alert"),d=f("AlertTitle"),g={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"templating"},"Templating"),(0,i.kt)("p",null,"In addition to being able to do things using ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," scripts and commands, ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," also allows any string field to first to be interpreted as a ",(0,i.kt)("inlineCode",{parentName:"p"},"go txt/template")," first."),(0,i.kt)(m,{style:{marginBottom:"1em"},variant:"filled",severity:"success",mdxType:"Alert"},(0,i.kt)(d,{mdxType:"AlertTitle"},"A note about escaping"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Use the following syntax to escape the Go txt/template mustache syntax:\n\n```Go\n{{`{{ foo }}`}}\n```\n\nNotice how we are encapsulating the actual value as a string literal inside the `{{ }}` block.\n"))))}y.isMDXComponent=!0}}]);