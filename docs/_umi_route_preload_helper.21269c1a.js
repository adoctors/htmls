!function(){"use strict";var t="/htmls".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"kl_doc","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.982c444d.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.1359a769.async.js",65],["docs__d.md.63fc55ed.chunk.css",342],["docs__d.md.9b467e42.async.js",342],["514.047a4725.chunk.css",514],["514.163dbcf9.async.js",514],["nm__dumi__theme-default__layouts__DocLayout__index.7f956783.async.js",519],["792.e5c18777.async.js",792],["dumi__tmp-production__dumi__theme__ContextWrapper.d83d1600.async.js",923],["docs__index.md.63fc55ed.chunk.css",935],["docs__index.md.8204597d.async.js",935],["docs__guide.md.63fc55ed.chunk.css",937],["docs__guide.md.6d4f8701.async.js",937]],"r":{"/*":[2,3,6,7,8,10],"/":[9,11,12,6,7,8,10],"/guide":[9,13,14,6,7,8,10],"/d":[4,5,9,6,7,8,10],"/~demos/:id":[0,1,10]}},{publicPath:"/htmls/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();