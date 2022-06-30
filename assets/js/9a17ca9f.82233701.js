"use strict";(self.webpackChunkfngo=self.webpackChunkfngo||[]).push([[177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Rules"},r=void 0,o={unversionedId:"tutorials/convert/make/rules",id:"tutorials/convert/make/rules",title:"Rules",description:"Make uses the term rule:",source:"@site/docs/tutorials/400-convert/100-make/100-rules.mdx",sourceDirName:"tutorials/400-convert/100-make",slug:"/tutorials/convert/make/rules",permalink:"/tutorials/convert/make/rules",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Rules"},sidebar:"defaultSidebar",previous:{title:"Makefile",permalink:"/tutorials/convert/make/"},next:{title:"Variables",permalink:"/tutorials/convert/make/variables"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Out of date behavior",id:"out-of-date-behavior",level:3},{value:"Memoization",id:"memoization",level:3},{value:"Caching",id:"caching",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Make")," uses the term ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/make/manual/make.html#Introduction"},(0,i.kt)("inlineCode",{parentName:"a"},"rule")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Makefile"',title:'"Makefile"'},"target \u2026 : prerequisites \u2026\n    recipe\n    \u2026\n    \u2026\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Fn")," uses the term... well ",(0,i.kt)("inlineCode",{parentName:"p"},"fn"),", which is short for ",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},"fns:\n  <fn>:\n    do: <steps>\n")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," includes an ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," rule."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Makefile"',title:'"Makefile"'},'build :\n    echo "building..."\n\ntest :\n    echo "testing..."\n\nall : build test\n    echo "completed all"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Result"',title:'"Result"'},"$ make all\nbuilding...\ntesting...\ncompleted all\n")),(0,i.kt)("p",null,"You can see that ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", thus those run before ",(0,i.kt)("inlineCode",{parentName:"p"},'echo "completed all"')," runs."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," there's no distinction between dependencies and other steps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'fns:\n  build:\n    do:\n    - sh:\n        run: echo "building..."\n\n  test:\n    do:\n    - sh:\n        run: echo "testing..."\n\n  all:\n   do:\n   - fn:\n       name: build\n   - fn:\n       name: test\n   - sh:\n       run: echo "completed all"\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are syntactic shortcuts that can be made in ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," that can make definitions quite concise. For these tutorials, we'll be sticking with the full & explicit syntax in order to prevent possible confusion. You can find more information in the ","[./api/steps#shortcuts]","(steps API)."))),(0,i.kt)("h3",{id:"out-of-date-behavior"},"Out of date behavior"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The criterion for being out of date is specified in terms of the prerequisites, which consist of file names separated by spaces."),(0,i.kt)("p",{parentName:"blockquote"},"A target is out of date if it does not exist or if it is older than any of the prerequisites (by comparison of last-modification times). The idea is that the contents of the target file are computed based on information in the prerequisites, so if any of the prerequisites changes, the contents of the existing target file are no longer necessarily valid."),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/manual/make.html#Rule-Syntax"},"Make Manual")))),(0,i.kt)("p",null,"This is where ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," begin to differ significantly, mostly because of goals. ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," was designed as a tool to help simplify building of ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),' programs. Thus it makes a lot of sense to be "file" oriented (for targets), and to use last-modification timestamps to skip steps when its unnecessary to rerun something.'),(0,i.kt)("p",null,"There is no default behavior in ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," to skip ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," runs. But there are ways of optimizing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'fns:\n  first:\n    do:\n    - sh:\n        run: echo "first..."\n\n  build:\n    do:\n    - fn:\n        name: first\n    - sh:\n        run: echo "building..."\n\n  test:\n    do:\n    - fn:\n        name: first\n    - fn:\n        name: build\n    - echo "testing..."\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Result"',title:'"Result"'},"$ fn test\nfirst...\nfirst...\nbuilding...\ntesting...\n")),(0,i.kt)("p",null,"How can we avoid running ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," multiple times? Introducing..."),(0,i.kt)("h3",{id:"memoization"},"Memoization"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," is smart enough to know that it will ",(0,i.kt)("em",{parentName:"p"},"never")," need to run multiple times, then it can control it's own destiny with..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'  fns:  \n    first:  \n+     memoize: true\n      do:  \n      - sh:  \n          run: echo "first..."  \n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memoization"},(0,i.kt)("inlineCode",{parentName:"a"},"memoized")," function")," (not to be confused with ",(0,i.kt)("inlineCode",{parentName:"p"},"memorize"),') "remembers" the results corresponding to some set of specific inputs. Subsequent calls with remembered inputs return the remembered result rather than recalculating it, thus eliminating the primary cost of a call with given parameters from all but the first call made to the function with those parameters.'),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Wikipedia"))),(0,i.kt)("p",null,"We'll go over ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," inputs and outputs later. This example in particular has no inputs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Result"',title:'"Result"'},"$ fn test\nfirst...\nbuilding...\ntesting...\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"p"},"TODO")," Look at memoization + dependency injection as a dynamic way to control this behavior..."))),(0,i.kt)("h3",{id:"caching"},"Caching"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")," doesn't natively perform any caching or checking for changes/timestamps like ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," does. But that doesn't mean this functionality is out of reach."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"go"),', aims to provide a "standard library" of tools and step types that are general purpose enough to allow you to express yourself, while still being simple, explicit, and intuitive in nature. The following example is a bit more advanced, so make sure you\'ve had a chance to visit the ',(0,i.kt)("a",{parentName:"p",href:"./tutorials/advanced"},"advanced tutorials")," first. Please also consult the ",(0,i.kt)("a",{parentName:"p",href:"./api/steps"},"steps API"),", and ",(0,i.kt)("a",{parentName:"p",href:"./api/templating"},"templating API")," for additional information."),(0,i.kt)("p",null,"Below is an example of how you can implement caching behavior:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'fns:\n  hello:\n    do:\n    - with:\n        cacheKey: \'{{ "hello.txt" | Hash1 }}\'\n        cacheFilename: \'.fn-cache/cache.json\'\n        cacheAll:\n          type: map\n          value: |-\n            {{- if (io.FileExists (.V "cacheFilename")) }}\n              {{- os.ReadFile (.V "cacheFilename") }}\n            {{- end }}\n        cacheHit:\n          type: bool\n          value: \'{{ mapHas (.V "cacheAll") (.V "cacheKey") }}\'\n    - return:\n        if:\n          cond: \'{{ .V "cacheHit" }}\'\n    - sh:\n        run: sleep 10\n    - sh:\n        run: echo "test" > hello.txt\n    - must: |-\n        {{- mapSet (.V "cacheAll") (.V "cacheKey") emptyStruct }}\n        {{- (.V "cacheAll") | encoding.toJson | os.WriteFile (.V "cacheFilename") }}\n\n  repeat:\n    do:\n    - fn:\n        name: hello\n    - fn:\n        name: hello\n')),(0,i.kt)("p",null,"Of course, you don't need to repeat this for every ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," you write. Here's an example of the decorator pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'fns:\n  with-cache:\n    inputs:\n      pattern:\n        type: string\n        default: \'**/*\'\n      do:\n        type: step\n        required: true\n    do:\n    - with:\n        filename: \'.fn-cache/cache.json\'\n        key: \'{{ os.GlobPath (.V "pattern") | LHash1 }}\'\n        all:\n          type: map\n          value: |-\n            {{- if (io.FileExists (.V "filename")) }}\n              {{- os.ReadFile (.V "filename") }}\n            {{- end }}\n        hit:\n          type: bool\n          value: \'{{ mapHas (.V "all") (.V "key") }}\'\n    - return:\n        if: \'{{ .V "hit" }}\'\n    - tmpl: \'{{ .V "do" }}\'\n    - must: |-\n        {{- mapSet (.V "all") (.V "key") emptyStruct }}\n        {{- (.V "all") | encoding.toJson | os.WriteFile (.V "filename") }}\n\n  hello:\n    do:\n    - with:\n        filename: hello.txt\n    - fn:\n        name: with-cache\n        inputs:\n          pattern: \'{{ .V "filename" }}\'\n          do:\n          - sh:\n              run: sleep 10\n          - sh:\n              run: echo "test" > \'{{ .V "filename" }}\'\n\n  repeat:\n    do:\n    - fn:\n        name: hello\n    - fn:\n        name: hello\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Anytime you see a field that accepts one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"step"),"'s, you can also use a ",(0,i.kt)("inlineCode",{parentName:"p"},"sh")," step to get down to a go text-templated shell script."))))}c.isMDXComponent=!0}}]);