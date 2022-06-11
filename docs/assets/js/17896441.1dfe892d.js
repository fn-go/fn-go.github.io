"use strict";(self.webpackChunkgofn=self.webpackChunkgofn||[]).push([[918],{2159:function(e,t,a){a.r(t),a.d(t,{default:function(){return pe}});var n=a(7294),l=a(6010),r=a(1944),s=a(7524),i=a(5281),c=a(7462),o=a(5999),d=a(9960);function m(e){var t=e.permalink,a=e.title,r=e.subLabel,s=e.isNext;return n.createElement(d.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function u(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(m,(0,c.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(m,(0,c.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var v=a(2263),b=a(143),p=a(373),E=a(4477);var h={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=h[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function N(e){var t,a=e.className,r=e.versionMetadata,s=(0,v.Z)().siteConfig.title,c=(0,b.gA)({failfast:!0}).pluginId,o=(0,p.J)(c).savePreferredVersionName,d=(0,b.Jo)(c),m=d.latestDocSuggestion,u=d.latestVersionSuggestion,E=null!=m?m:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:u.label,to:E.path,onClick:function(){return o(u.name)}})))}function Z(e){var t=e.className,a=(0,E.E)();return a.banner?n.createElement(N,{className:t,versionMetadata:a}):null}function _(e){var t=e.className,a=(0,E.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function L(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function T(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:i.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var U=a(3366),w="iconEdit_eYIM",C=["className"];function y(e){var t=e.className,a=(0,U.Z)(e,C);return n.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(w,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function A(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},n.createElement(y,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var x="tag_zVej",B="tagRegular_sFm0",I="tagWithCount_h2kH";function M(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(d.Z,{href:t,className:(0,l.Z)(x,r?I:B)},a,r&&n.createElement("span",null,r))}var V="tags_jXut",H="tag_QGVx";function P(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(V,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:H},n.createElement(M,{label:t,permalink:a}))}))))}var D="lastUpdated_vbeJ";function S(e){return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(P,e)))}function F(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(A,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",D)},(a||r)&&n.createElement(T,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function z(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||r||c);return d||m?n.createElement("footer",{className:(0,l.Z)(i.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(S,{tags:o}),m&&n.createElement(F,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:c,formattedLastUpdatedAt:s})):null}var O=a(9407),R=a(6043),j=a(3743),G="tocCollapsibleButton_TO0P",J="tocCollapsibleButtonExpanded_MG3E",q=["collapsed"];function Q(e){var t=e.collapsed,a=(0,U.Z)(e,q);return n.createElement("button",(0,c.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",G,!t&&J,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var W="tocCollapsible_ETCw",X="tocCollapsibleContent_vkbj",Y="tocCollapsibleExpanded_sAul";function K(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,R.u)({initialState:!0}),c=i.collapsed,o=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(W,!c&&Y,a)},n.createElement(Q,{collapsed:c,onClick:o}),n.createElement(R.z,{lazy:!0,className:X,collapsed:c},n.createElement(j.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var $=a(2503),ee=a(8425),te=a(8596),ae=a(4996);function ne(e){return n.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function re(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(d.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function se(e){var t=e.children,a=e.active,r=e.index,s=e.addMicrodata;return n.createElement("li",(0,c.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function ie(){var e=(0,ae.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},n.createElement(ne,{className:le.breadcrumbHomeIcon})))}function ce(){var e=(0,ee.s1)(),t=(0,te.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ie,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(se,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(re,{href:t.href,isLast:l},t.label))})))):null}var oe=a(3548),de="docItemContainer_Adtb",me="docItemCol_GujU",ue="tocMobile_aoJ5";function ve(e){var t,a=e.content,l=a.metadata,s=a.frontMatter,i=a.assets,c=s.keywords,o=l.description,d=l.title,m=null!=(t=i.image)?t:s.image;return n.createElement(r.d,{title:d,description:o,keywords:c,image:m})}function be(e){var t=e.content,a=t.metadata,r=t.frontMatter,c=r.hide_title,o=r.hide_table_of_contents,d=r.toc_min_heading_level,m=r.toc_max_heading_level,v=a.title,b=!c&&void 0===t.contentTitle,p=(0,s.i)(),E=!o&&t.toc&&t.toc.length>0,h=E&&("desktop"===p||"ssr"===p);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!o&&me)},n.createElement(Z,null),n.createElement("div",{className:de},n.createElement("article",null,n.createElement(ce,null),n.createElement(_,null),E&&n.createElement(K,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:(0,l.Z)(i.k.docs.docTocMobile,ue)}),n.createElement("div",{className:(0,l.Z)(i.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement($.Z,{as:"h1"},v)),n.createElement(oe.Z,null,n.createElement(t,null))),n.createElement(z,e)),n.createElement(u,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(O.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:i.k.docs.docTocDesktop})))}function pe(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(ve,e),n.createElement(be,e))}},4477:function(e,t,a){a.d(t,{E:function(){return i},q:function(){return s}});var n=a(7294),l=a(9688),r=n.createContext(null);function s(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);