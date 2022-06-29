"use strict";(self.webpackChunkfngo=self.webpackChunkfngo||[]).push([[947],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return t?a.createElement(f,r(r({ref:n},m),{},{components:t})):a.createElement(f,r({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1361:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),r=["components"],o={title:"Variables"},s=void 0,p={unversionedId:"tutorials/convert/make/variables",id:"tutorials/convert/make/variables",title:"Variables",description:"Flavors",source:"@site/content/tutorials/400-convert/100-make/200-variables.mdx",sourceDirName:"tutorials/400-convert/100-make",slug:"/tutorials/convert/make/variables",permalink:"/tutorials/convert/make/variables",draft:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Variables"},sidebar:"defaultSidebar",previous:{title:"Rules",permalink:"/tutorials/convert/make/rules"},next:{title:"API",permalink:"/api/"}},m={},u=[{value:"Flavors",id:"flavors",level:2},{value:"Static (Unconditional) / Simply Expanded",id:"static-unconditional--simply-expanded",level:3},{value:"Conditional (FromEnv)",id:"conditional-fromenv",level:3},{value:"Recursive Expansion / Lazy",id:"recursive-expansion--lazy",level:3}],c={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"flavors"},"Flavors"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Make")," has several ways in which a variable can be declared and how it's value is defined."),(0,l.kt)("h3",{id:"static-unconditional--simply-expanded"},"Static (Unconditional) / Simply Expanded"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Makefile"',title:'"Makefile"'},"BINARY      := superdo\nVET_REPORT  := vet.report\nTEST_REPORT := tests.xml\nGOARCH      := amd64\n\nGITHUB_USERNAME  := turtlemonvh\nGITHUB_REPO_LONG := github.com/${GITHUB_USERNAME}/${BINARY}\n")),(0,l.kt)("p",null,"What we are seeing here are explicitly defined values, thus any ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," variable set in the environment of the same name (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"BINARY"),") have no effect on this Makefile."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The value of a simply expanded variable is scanned once and for all, expanding any references to other variables and functions, when the variable is defined. The actual value of the simply expanded variable is the result of expanding the text that you write. It does not contain any references to other variables; it contains their values as of the time this variable was defined.")),(0,l.kt)("p",null,"Similarly, a ",(0,l.kt)("inlineCode",{parentName:"p"},"fnfile.yml")," allows for explicitly defined values. ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," uses golang txt templating to provide access to other variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'vars:\n  BINARY: superdo\n  VET_REPORT: vet.report\n  TEST_REPORT: tests.xml\n  GOARCH: amd64\n\n  GITHUB_USERNAME: turtlemonvh\n  GITHUB_REPO_LONG: github.com/{{ .V "GITHUB_USERNAME" }}/{{ .V "BINARY" }}\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you need to store a string that ",(0,l.kt)("em",{parentName:"p"},"looks")," like a go txt template, you can escape the ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ }}")," syntax as follows. Once a variable is evaluated, it will not be evaluated again, so you don't need to worry about any funny business."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},"vars:\n  FOO: '{{`{{FOO}}`}}'\nfns:\n  foo:\n    do:\n    - sh:\n        run: echo '{{.V \"FOO\" }}'\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ fn foo\n{{FOO}}\n")))),(0,l.kt)("h3",{id:"conditional-fromenv"},"Conditional (FromEnv)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Variables in ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," can come from the environment in which ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," is run. Every environment variable that ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," sees when it starts up is transformed into a ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," variable with the same name and value. However, an explicit assignment in the Makefile, or with a command argument, overrides the environment.")),(0,l.kt)("p",null,"In the example below, ",(0,l.kt)("inlineCode",{parentName:"p"},"FOO")," will have the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," only if ",(0,l.kt)("inlineCode",{parentName:"p"},"FOO")," isn't defined in the environment in which ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," is run, whereas, ",(0,l.kt)("inlineCode",{parentName:"p"},"BAZ")," will always have the value ",(0,l.kt)("inlineCode",{parentName:"p"},"qux")," regardless if ",(0,l.kt)("inlineCode",{parentName:"p"},"BAZ")," is defined in the environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Makefile"',title:'"Makefile"'},"FOO ?= bar\nBAZ := qux\n")),(0,l.kt)("p",null,"The default behavior of ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," is more similar to ",(0,l.kt)("inlineCode",{parentName:"p"},":="),", thus, to make a variable conditional, you can use golang txt templating. For more information on templating, see the ",(0,l.kt)("a",{parentName:"p",href:"./api/templating"},"templating api"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'vars:\n  FOO: \'{{env "FOO" | default "bar"}}\'\n  BAZ: qux\n')),(0,l.kt)("p",null,"An alternative syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},"vars:\n  FOO:\n    fromEnv: true\n    default: bar\n  BAZ: qux\n")),(0,l.kt)("h3",{id:"recursive-expansion--lazy"},"Recursive Expansion / Lazy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Make"),' describes "recursively expanded" as a variable flavor. Variables in ',(0,l.kt)("inlineCode",{parentName:"p"},"fn"),' aren\'t "expanded" like they would be in Bash or Make. Instead, they operate very much like variables would in a typical programming language.'),(0,l.kt)("p",null,"In this example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Makefile"',title:'"Makefile"'},"foo = $(bar)\nbar = $(ugh)\nugh = Huh?\n\nall :\n    echo $(foo)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Result"',title:'"Result"'},"$ make all\nHuh?\n")),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"fn"),", when you reference another variable, the value of that variable also must be evaluated."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Variables in ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," are also ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"lazily"))," evaluated. Unless a variable is used during the course of the run of a ",(0,l.kt)("inlineCode",{parentName:"p"},"fn"),", it won't be evaluated at all. It also means that there's no need to declare global variables in any specific order in your ",(0,l.kt)("inlineCode",{parentName:"p"},"fnfile.yml"),"."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'vars:\n  foo: \'{{.V "bar"}}\'\n  bar: \'{{.V "ugh"}}\'\n  ugh: Huh?\n\nfns:\n  all:\n    do:\n    - sh:\n        run: echo {{.V "ugh"}}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Result"',title:'"Result"'},"$ fn all\nHuh?\n")),(0,l.kt)("p",null,"Make has a limitation in variable scoping though, which means that this example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Makefile"',title:'"Makefile"'},"CFLAGS = $(CFLAGS) -O\n")),(0,l.kt)("p",null,"will cause an infinite loop, which ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," detects and reports as an error."),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"fn"),", things are a little different, in that you can reference a variable (and reassign it's) value if the variable was previously declared."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'vars:\n  foo: \'hello\'\n\nfns:\n  all:\n    do:\n    - with:\n        foo: \'{{ printf "%s %s" (.V "foo") "world" }}\'\n    - sh:\n        run: echo {{.V "foo"}}\n')),(0,l.kt)("p",null,"Notice that in the above example, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," has been declared previously in the global scope, which is why there's no infinite loop. Note that this method, only affects the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," for subsequent and child steps of ",(0,l.kt)("inlineCode",{parentName:"p"},"with"),". Below is a demonstration of how ",(0,l.kt)("inlineCode",{parentName:"p"},"with")," acts kind of like `context.WithValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},'vars:\n  foo: \'hello\'\n\nfns:\n  all:\n    do:\n    - sh:\n        run: echo {{.V "foo"}}\n    - with:\n        foo: \'{{ printf "%s %s" (.V "foo") "world" }}\'\n    - sh:\n        run: echo {{.V "foo"}}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Result"',title:'"Result"'},"$ fn all\nhello\nhello world\n")))}d.isMDXComponent=!0}}]);