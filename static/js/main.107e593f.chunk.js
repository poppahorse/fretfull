(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(11),n(4)),l=n(1),u=function(e){var t=e.style,n=e.dots;return r.a.createElement("div",{className:"fret",style:t},1===n?r.a.createElement("span",{className:"dot single"}):null,2===n?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"dot double1"}),r.a.createElement("span",{className:"dot double2"})):null)},s=[["A"],["A#","Bb"],["B"],["C"],["C#","Db"],["D"],["D#","Eb"],["E"],["F"],["F#","Gb"],["G"],["G#","Ab"]],m=function(e){var t=e.includeInQuiz,n=e.rootNote,a=e.num,o=e.style,c=e.onToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:a,onClick:c,className:"note root-note "+(t?"included":"excluded"),style:{gridArea:"".concat(a+1," / 1")}},s[n][0]),r.a.createElement("div",{className:"string",style:o}))},d=(n(13),[7,2,10,5,0,7]),f=function(e,t){return s[(e.rootNote+t)%12]};function p(e){return Math.floor(Math.random()*Math.floor(e))}var g=function(e,t){var n=(e=e.filter(function(e){return e.includeInQuiz}))[p(e.length)],a=p(t.length);return{type:"note",answer:f(n,a),position:{string:n.num,fret:a}}},h=function(e){return e.string+1+" / "+(e.fret+1)},b=function(){var e=Object(a.useMemo)(function(){return function(e){for(var t=[],n=200,a=0;a<e;a++){var r=n/17.817;n-=r,t[a]={size:r,style:{gridArea:"1 / ".concat(a+2," / -1 / ").concat(a+2)},dots:0},2===a||4===a||6===a||8===a?t[a].dots=1:11===a&&(t[a].dots=2)}return t}(12)},[]),t=Object(a.useState)(d),n=Object(l.a)(t,2),o=n[0],c=(n[1],Object(a.useState)(Object(a.useMemo)(function(){return function(e){for(var t=[],n=0;n<e.length;n++)t[n]={rootNote:e[n],includeInQuiz:!0,num:n,style:{gridArea:"".concat(n+1," / 1 / ").concat(n+1," / -1"),height:"50%",borderBottom:"".concat(Math.max(1,Math.round((n+1)/e.length*3)),"px solid yellow")}};return t}(o)},[o]))),s=Object(l.a)(c,2),p=s[0],b=s[1],v=Object(a.useState)(!0),E=Object(l.a)(v,2),y=E[0],j=E[1],w=Object(a.useState)(null),N=Object(l.a)(w,2),O=N[0],A=N[1],k=Object(a.useMemo)(function(){for(var t=[],n=0;n<p.length;n++)for(var a=0;a<e.length+1;a++)t.push({position:{string:n,fret:a},name:f(p[n],a)[0]});return t},[o]),z=Object(a.useState)(""),I=Object(l.a)(z,2),M=I[0],S=I[1],x=Object(a.useState)(function(){return g(p,e)}),C=Object(l.a)(x,2),Q=C[0],D=C[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Guitar Quiz",r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:y,onChange:function(e){j(e.target.checked)}}),"Show all notes")),r.a.createElement("div",{className:"App-fretboard",style:{gridTemplateColumns:"".concat(100,"px ").concat(e.map(function(e){return e.size+"fr"}).join(" ")),gridTemplateRows:p.map(function(){return"1fr"}).join(" ")}},r.a.createElement("div",{className:"bridge",style:{gridArea:"1 / 1 / -1 / 2"}}),r.a.createElement("div",{className:"note question-note",style:{gridArea:h(Q.position)}},"?"),y?k.map(function(e,t){return r.a.createElement("div",{key:t,className:"note indicator-note",style:{gridArea:h(e.position)}},e.name)}):null,e.map(function(e,t){return r.a.createElement(u,Object.assign({key:t},e))}),p.map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,Object.assign({key:n,onToggle:function(){var n=p.map(function(e){return Object(i.a)({},e,{includeInQuiz:e==t?!e.includeInQuiz:e.includeInQuiz})});b(n),D(g(n,e))}},t)))})),r.a.createElement("form",{className:"App-question",onSubmit:function(t){return function(t){Q.answer.some(function(e){return e===M})?(D(g(p,e)),A({correct:!0,id:Date.now()})):A({correct:!1,id:Date.now()}),S(""),t.preventDefault()}(t)}},r.a.createElement("h1",null,"What is the higlighted note?"),r.a.createElement("input",{className:"App-answer-field",type:"text",value:M,onChange:function(e){return S(e.target.value)}}),O?r.a.createElement("div",{className:"App-judgement "+(O.correct?"correct":"incorrect"),key:O.id},O.correct?"Correct":"Incorrect"):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(15)}},[[5,2,1]]]);
//# sourceMappingURL=main.107e593f.chunk.js.map