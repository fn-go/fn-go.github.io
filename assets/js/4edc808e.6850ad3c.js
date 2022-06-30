"use strict";(self.webpackChunkfngo=self.webpackChunkfngo||[]).push([[173],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={slug:"/",sidebar_position:0,title:"Introduction"},l="About `fn`",r={unversionedId:"index",id:"index",title:"Introduction",description:"fn is a function-oriented general purpose automation tool that aims to be simpler and more flexible than similar tools such as Make, Task, and Rake.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0,title:"Introduction"},sidebar:"defaultSidebar",next:{title:"Tutorials",permalink:"/tutorials/"}},s={},p=[{value:"Design Philosophy",id:"design-philosophy",level:2},{value:"What is a function?",id:"what-is-a-function",level:2},{value:"Basics",id:"basics",level:2},{value:"Understanding the <code>fnfile</code>",id:"understanding-the-fnfile",level:2},{value:"<code>fn</code> - Function Definition",id:"fn---function-definition",level:3},{value:"Common Steps",id:"common-steps",level:3},{value:"<code>do</code>",id:"do",level:4},{value:"<code>parallel</code>",id:"parallel",level:4},{value:"<code>sh</code>",id:"sh",level:4},{value:"Flexible Nature",id:"flexible-nature",level:3},{value:"Why is this important?",id:"why-is-this-important",level:3}],u=(d="Alert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const c={toc:p};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-fn"},"About ",(0,o.kt)("inlineCode",{parentName:"h1"},"fn")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fn")," is a function-oriented general purpose automation tool that aims to be simpler and more flexible than similar tools such as Make, Task, and Rake."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fn")," is a commandline program that runs ",(0,o.kt)("inlineCode",{parentName:"p"},"functions")," (shortened to ",(0,o.kt)("inlineCode",{parentName:"p"},"fns"),") defined in a ",(0,o.kt)("inlineCode",{parentName:"p"},"fnfile.yml"),", similar to how you use ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," to run targets in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile"),"."),(0,o.kt)("h2",{id:"design-philosophy"},"Design Philosophy"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fn")," aims to have a human-centered design, with emphasis on usability and aesthetics."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Even the smartest among us can feel inept as we fail to figure out which light switch or oven burner to turn on, or whether to push, pull, or slide a door.\nThe fault lies not in ourselves, but in product design that ignores the needs of users and the principles of cognitive psychology."),(0,o.kt)("p",{parentName:"blockquote"},"The problems range from ambiguous and hidden controls to arbitrary relationships between controls and functions, coupled with a lack of feedback or other assistance and unreasonable demands on memorization."),(0,o.kt)("p",{parentName:"blockquote"},"The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints."),(0,o.kt)("p",{parentName:"blockquote"},"The goal: guide the user effortlessly to the right action on the right control at the right time.")),(0,o.kt)("p",null,"-- ",(0,o.kt)("cite",null,(0,o.kt)("a",{parentName:"p",href:"https://www.uxmatters.com/mt/archives/2021/03/book-review-the-design-of-everyday-things.php"},"The Design of Everyday Things"))),(0,o.kt)("h2",{id:"what-is-a-function"},"What is a function?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Functions are "self-contained" modules of code that accomplish a specific task. Functions usually "take in" data, process it, and "return" a result.\nOnce a function is written, it can be used over and over and over again. Functions can be "called" from the inside of other functions.')),(0,o.kt)("p",null,'The very basic concept of "taking in" data and "returning a result" is lost by other tools, and indeed, I found myself constantly wanting to do this exact thing all the time.'),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("p",null,"An example to get you started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fnfile.yml"',title:'"fnfile.yml"'},"version: '0.1'\nfns:\n  hello: echo \"Hello, World!\"\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f fn hello\nHello, World\n")),(0,o.kt)("h2",{id:"understanding-the-fnfile"},"Understanding the ",(0,o.kt)("inlineCode",{parentName:"h2"},"fnfile")),(0,o.kt)("p",null,"The top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"fns")," is a map of defined functions. With the key being the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"fn"),", and the value being one of several types, allowing you to express intent without requiring excessive syntax."),(0,o.kt)("h3",{id:"fn---function-definition"},(0,o.kt)("inlineCode",{parentName:"h3"},"fn")," - Function Definition"),(0,o.kt)("p",null,"The common fields of an ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," are:"),(0,o.kt)(u,{style:{marginBottom:"1em"},variant:"filled",severity:"info",mdxType:"Alert"},"Check out the ",(0,o.kt)("a",{href:"/api/steps"},"Steps API Reference")," for a complete list of fields for a function definition, as well as available steps usable within."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"do")," - The ",(0,o.kt)("a",{href:"./api/steps/#do"},(0,o.kt)("inlineCode",{parentName:"li"},"do"))," step. ",(0,o.kt)("em",{parentName:"li"},"required**")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dir")," - The working directory when running shell steps. The ",(0,o.kt)("em",{parentName:"li"},"default")," is same directory as the ",(0,o.kt)("inlineCode",{parentName:"li"},"fnfile.yml"),".")),(0,o.kt)("h3",{id:"common-steps"},"Common Steps"),(0,o.kt)("h4",{id:"do"},(0,o.kt)("inlineCode",{parentName:"h4"},"do")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Do")," performs the given steps serially."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"do:\n  steps: [ <STEP> ]\n")),(0,o.kt)("h4",{id:"parallel"},(0,o.kt)("inlineCode",{parentName:"h4"},"parallel")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Parallel")," performs the given steps in parallel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"parallel:\n  steps: [ <STEP> ]\n")),(0,o.kt)("h4",{id:"sh"},(0,o.kt)("inlineCode",{parentName:"h4"},"sh")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Sh")," runs a shell command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sh:\n  run: <string>\n")),(0,o.kt)("h3",{id:"flexible-nature"},"Flexible Nature"),(0,o.kt)("p",null,"The following tasks are all the same. The resolve to a single ",(0,o.kt)("inlineCode",{parentName:"p"},"sh")," step, which runs a shell command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'fns:\n  hello: echo "hello"\n  foo:\n  - echo "foo"\n  bar:\n    do: echo "bar"\n  baz:\n    do:\n    - echo "baz"\n  biz:\n    do:\n    - sh: echo "biz"\n  qux:\n    do:\n      steps:\n      - echo "qux"\n  ipsum:\n    do:\n      steps:\n      - sh: echo "ipsum"\n  amet:\n    do:\n      steps:\n      - sh:\n-         run: echo "amet"\n')),(0,o.kt)("h3",{id:"why-is-this-important"},"Why is this important?"),(0,o.kt)("p",null,"The design of ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," is to get out of your way as quickly as possible. Meaning if you don't need certain functionality, you don't need to declare it or even make room for it."),(0,o.kt)("p",null,"Let's take a ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," as an example of how we can some liberties without affecting functionality, requiring you to write a bunch of code, or affecting readability."),(0,o.kt)("p",null,"The definition of a ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," is that of a function definition, declaring among other things, what steps should take place. ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," gives you a ",(0,o.kt)("inlineCode",{parentName:"p"},"do"),' as your "entrypoint" to declaring those steps.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'fns:\n  my-function:\n    do:\n      steps:\n      - sh:\n          run: echo "hello"\n')),(0,o.kt)("p",null,"Here we are declaring a ",(0,o.kt)("inlineCode",{parentName:"p"},"do")," with 1 step, that of an ",(0,o.kt)("inlineCode",{parentName:"p"},"sh")," step when runs the shell command: ",(0,o.kt)("inlineCode",{parentName:"p"},'echo "hello"'),"."),(0,o.kt)("p",null,"The first shortcut, is that for ",(0,o.kt)("inlineCode",{parentName:"p"},"sh"),"."),(0,o.kt)("p",null,"The definition of a ",(0,o.kt)("inlineCode",{parentName:"p"},"sh")," step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# VALID\nsh:\n  run: <string>\n  dir: <string, optional>\n")),(0,o.kt)("p",null,"Given that ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," is the only required field, you can shortcut this by simply using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sh: <string>\n")),(0,o.kt)("p",null,"Furthermore, since ",(0,o.kt)("inlineCode",{parentName:"p"},"sh")," is very likely the most common thing you will likely be writing (since it is the step type that actually executes work), in many cases, we can shortcut this entirely to just:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"<string>\n")),(0,o.kt)("p",null,"So the first step is to reduce ",(0,o.kt)("inlineCode",{parentName:"p"},"sh")," to just ",(0,o.kt)("inlineCode",{parentName:"p"},"sh: <string>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  fns:\n    my-function:\n      do:\n        steps:\n+       - sh: echo "hello"\n-       - sh:\n-           run: echo "hello"\n')),(0,o.kt)("p",null,"Furthermore, ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," makes an assumption, that if it sees just a string in a place that would accept a ",(0,o.kt)("inlineCode",{parentName:"p"},"step"),", that string is ",(0,o.kt)("em",{parentName:"p"},"assumed")," to be a ",(0,o.kt)("inlineCode",{parentName:"p"},"sh")," step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  fns:\n    my-function:\n      do:\n        steps:\n+       - echo "hello"\n-       - sh: echo "hello"\n')),(0,o.kt)("p",null,"But there's a few more optimizations to make. For one, you aren't using any other functionality of ",(0,o.kt)("inlineCode",{parentName:"p"},"do"),", just the ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," field. The ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," field is also the most important part of a ",(0,o.kt)("inlineCode",{parentName:"p"},"do")," step. So we can shortcut the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"do")," into ",(0,o.kt)("em",{parentName:"p"},"just")," an array, and not require you explicitly declare ",(0,o.kt)("inlineCode",{parentName:"p"},"steps"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  fns:\n    my-function:\n      do:\n+     - echo "hello"\n-       steps:\n-       - echo "hello"\n')),(0,o.kt)("p",null,"Furthermore, if you have only 1 step, why should I force you to use an array?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  fns:\n    my-function:\n+     do: echo "hello"\n-     do:\n-     - echo "hello"\n')),(0,o.kt)("p",null,"We can apply the same logic one more time, to declare an entire ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," definition as that of a single ",(0,o.kt)("inlineCode",{parentName:"p"},"sh")," step, with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  fns:\n+   my-function: echo "hello"\n-   my-function:\n-     do: echo "hello"\n')),(0,o.kt)("p",null,"So for the simplest of things, there's really not much to write."))}h.isMDXComponent=!0}}]);