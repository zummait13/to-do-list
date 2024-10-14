(()=>{"use strict";var n={9:(n,e,t)=>{t.d(e,{A:()=>r});var o=t(354),A=t.n(o),i=t(314),a=t.n(i)()(A());a.push([n.id,"dialog {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #ccc;\n    background-color: #e6e6e6;\n    padding: 20px;\n    margin: auto;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\ndialog.newTask {\n    width: 512px;\n    height: 600px;\n}\n\ndialog.newProject {\n    gap: 16px;\n}\n\ndialog:not([open]) {\n    display: none;\n}\n\n/* for task window */\ndialog form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\nform .row, \n.newProject .row {\n    display: flex;\n    flex-direction: column;\n}\n\ndialog button {\n    padding: 8px;\n}\n\ndialog button.close {\n    align-self: flex-end;\n    padding: 0 4px;\n}","",{version:3,sources:["webpack://./src/dialog_style.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA,oBAAoB;AACpB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,cAAc;AAClB",sourcesContent:["dialog {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #ccc;\n    background-color: #e6e6e6;\n    padding: 20px;\n    margin: auto;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\ndialog.newTask {\n    width: 512px;\n    height: 600px;\n}\n\ndialog.newProject {\n    gap: 16px;\n}\n\ndialog:not([open]) {\n    display: none;\n}\n\n/* for task window */\ndialog form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\nform .row, \n.newProject .row {\n    display: flex;\n    flex-direction: column;\n}\n\ndialog button {\n    padding: 8px;\n}\n\ndialog button.close {\n    align-self: flex-end;\n    padding: 0 4px;\n}"],sourceRoot:""}]);const r=a},380:(n,e,t)=>{t.d(e,{A:()=>r});var o=t(354),A=t.n(o),i=t(314),a=t.n(i)()(A());a.push([n.id,'/* sporce: https://www.joshwcomeau.com/css/custom-css-reset/ */\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  /* source : https://mattbrictson.com/blog/css-normalize-and-reset */\n\n  /* Remove default list styling */\n\n  ol[role="list"], ul[role="list"] {\n    list-style: none;\n    padding-inline: 0;\n  }\n\n  button {\n    padding: 0;\n  }',"",{version:3,sources:["webpack://./src/style_reset.css"],names:[],mappings:"AAAA,8DAA8D;;AAE9D;;CAEC;AACD;IACI,sBAAsB;EACxB;EACA;;GAEC;EACD;IACE,SAAS;EACX;EACA;;;;GAIC;EACD;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;;GAEC;EACD;IACE,cAAc;IACd,eAAe;EACjB;EACA;;GAEC;EACD;IACE,aAAa;EACf;EACA;;GAEC;EACD;IACE,yBAAyB;EAC3B;EACA;;GAEC;EACD;IACE,kBAAkB;EACpB;;EAEA,mEAAmE;;EAEnE,gCAAgC;;EAEhC;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,UAAU;EACZ",sourcesContent:['/* sporce: https://www.joshwcomeau.com/css/custom-css-reset/ */\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  /* source : https://mattbrictson.com/blog/css-normalize-and-reset */\n\n  /* Remove default list styling */\n\n  ol[role="list"], ul[role="list"] {\n    list-style: none;\n    padding-inline: 0;\n  }\n\n  button {\n    padding: 0;\n  }'],sourceRoot:""}]);const r=a},365:(n,e,t)=>{t.d(e,{A:()=>r});var o=t(354),A=t.n(o),i=t(314),a=t.n(i)()(A());a.push([n.id,":root {\n    font-size: 18px;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content {\n    width: 752px;\n    height: 512px;\n\n    display: flex;\n    gap: 32px;\n\n    /* background-color: lightblue; */\n}\n\n.projects.section {\n    flex: 1;\n}\n\n.tasks.section {\n    flex: 3;\n}\n\n.section {\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n\n    background-color: lightgrey;\n}\n\n.list {\n    height: 100%;\n}\n\n.task, .project {\n    display: flex;\n    padding: 8px;\n    gap: 8px;\n}\n\n.project-name, .task-text {\n    width: 100%;\n}\n\n.title {\n    margin: 16px 8px;\n    font-size: 1.5rem\n}\n\nbutton.openProjectWindow,\nbutton.openTaskWindow {\n    padding: 8px;\n    margin: 8px 8px 8px auto;\n}\n\nimg {\n    width: 16px;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,SAAS;;IAET,iCAAiC;AACrC;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;;IAEtB,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB;AACJ;;AAEA;;IAEI,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,WAAW;AACf",sourcesContent:[":root {\n    font-size: 18px;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content {\n    width: 752px;\n    height: 512px;\n\n    display: flex;\n    gap: 32px;\n\n    /* background-color: lightblue; */\n}\n\n.projects.section {\n    flex: 1;\n}\n\n.tasks.section {\n    flex: 3;\n}\n\n.section {\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n\n    background-color: lightgrey;\n}\n\n.list {\n    height: 100%;\n}\n\n.task, .project {\n    display: flex;\n    padding: 8px;\n    gap: 8px;\n}\n\n.project-name, .task-text {\n    width: 100%;\n}\n\n.title {\n    margin: 16px 8px;\n    font-size: 1.5rem\n}\n\nbutton.openProjectWindow,\nbutton.openTaskWindow {\n    padding: 8px;\n    margin: 8px 8px 8px auto;\n}\n\nimg {\n    width: 16px;\n}"],sourceRoot:""}]);const r=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,A,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),A&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=A):l[4]="".concat(A)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(A," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],r=0;r<n.length;r++){var s=n[r],c=o.base?s[0]+o.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var d=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var f=A(u,o);o.byIndex=r,e.splice(r,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function A(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,A){var i=o(n=n||[],A=A||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var r=t(i[a]);e[r].references--}for(var s=o(n,A),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,A&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var A=e[o];if(void 0!==A)return A.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),A=t.n(o),i=t(825),a=t.n(i),r=t(659),s=t.n(r),c=t(56),l=t.n(c),p=t(540),d=t.n(p),u=t(113),f=t.n(u),g=t(380),C={};C.styleTagTransform=f(),C.setAttributes=l(),C.insert=s().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=d(),A()(g.A,C),g.A&&g.A.locals&&g.A.locals;var m=t(365),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),A()(m.A,h),m.A&&m.A.locals&&m.A.locals;var x=t(9),I={};I.styleTagTransform=f(),I.setAttributes=l(),I.insert=s().bind(null,"head"),I.domAPI=a(),I.insertStyleElement=d(),A()(x.A,I),x.A&&x.A.locals&&x.A.locals})();
//# sourceMappingURL=app.bundle.js.map