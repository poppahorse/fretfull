(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(13),n(2)),u=n(1),i=(n(15),function(e){var t=e.num,n=(e.style,e.dots);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"Fret-number",style:{gridArea:"top / f".concat(t)}},t+1),r.a.createElement("div",{className:"Fret",style:{gridArea:"top-edge / f".concat(t," / bottom-edge / f").concat(t+1)}},1===n?r.a.createElement("span",{className:"dot single"}):null,2===n?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"dot double1"}),r.a.createElement("span",{className:"dot double2"})):null))}),s=function(e){var t=e.includeInQuiz,n=e.rootNote,a=e.num,o=e.count,c=e.onToggle,l=Math.max(1,Math.round((o-(a+1))/o*3));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:a,onClick:c,className:"root-note "+(t?"included":"excluded"),style:{gridArea:"s".concat(a+1," / fretboard-end")}},n.letter),r.a.createElement("div",{className:"string",style:{height:"50%",gridArea:"s".concat(a," / head / s").concat(a+1," / fretboard-end"),borderBottom:"".concat(l,"px solid yellow")}}))},m=(n(17),n(3)),d=n(4),p={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},f=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],g=function(){function e(t,n){Object(m.a)(this,e),this.letter=t,this.octave=n}return Object(d.a)(e,[{key:"toString",value:function(){return this.letter}},{key:"toSpn",value:function(){return this.letter+this.octave}}]),e}();function h(e){return"string"!==typeof e?e:3===e.length?new g(e[0]+e[1],parseInt(e[2])):new g(e[0],parseInt(e[1]))}function E(e,t){var n=p[e.letter],a=e.octave,r=n+t%12;return r<0?(r+=12,a--):r>=12&&(r-=12,a++),a+=t/12|0,new g(f[r],a)}var v=function e(t,n){Object(m.a)(this,e),this.name=t,this.notes=n.map(h)},b=[new v("Standard",["E2","A2","D3","G3","B3","E4"]),new v("Open A",["E2","A2","C#3","E3","A3","E4"]),new v("Open B",["B2","F#2","B3","F#3","B3","D#4"]),new v("Open C",["C2","G2","C3","G3","C4","E4"]),new v("Open D",["D2","A2","D3","F#3","A3","D4"]),new v("Open E",["E2","B2","E3","G#3","B3","E4"]),new v("Open F",["F2","A2","C3","F3","C4","F4"]),new v("Open F#",["F#2","A#2","C#3","F#3","C#4","F#4"]),new v("Open G",["D2","G2","D3","G3","B3","D4"])];function A(e){return Math.floor(Math.random()*Math.floor(e))}function O(e,t){var n=e.length;return e.map(function(e,a){return t(e,a,{first:0===a,last:a===n-1,length:n})})}n(19);var w=100,y=function(e,t){return"s".concat(e+1," / span 1 / s").concat(e+1," / f").concat(t)};var j=function(e){var t=e.children,n=e.frets,a=e.tuning;return r.a.createElement("div",{className:"Fretboard",style:{gridTemplateColumns:function(e){return"[start] auto [head] "+w+"px "+O(e,function(e,t,n){var a=n.first,r=n.last;return(a?"[nut f0] ":"")+e.size+"fr [f"+(t+1)+(r?" fretboard-end]":"]")}).join(" ")+" auto [end]"}(n),gridTemplateRows:function(e){var t=e.notes.length;return"[top] auto "+O(e.notes,function(e,n,a){return(a.first?"[top-edge ":"[")+"s"+(t-n)+"] 40px"}).join(" ")+" [bottom-edge s0]"}(a)}},r.a.createElement("div",{className:"Fretboard-head",style:{gridArea:"top-edge / head / bottom-edge / nut"}}),r.a.createElement("div",{className:"Fretboard-fingerboard",style:{gridArea:"top-edge / nut / bottom-edge / fretboard-end"}}),t,n.map(function(e,t){return r.a.createElement(i,Object.assign({key:t},e))}))},N=(n(21),{quiz:"Note-quiz",indicator:"Note-indicator"}),C=function(e){var t,n=e.note,a=e.type,o=e.showOctave,c=e.gridArea;return t="quiz"===(a=a||"indicator")?"?":r.a.createElement("span",null,n.letter,o?r.a.createElement("sub",null,n.octave):null),r.a.createElement("div",{className:"Note "+N[a],style:{gridArea:c}},t)},F=function(){var e=Object(a.useMemo)(function(){return function(e){for(var t=[],n=10,a=0;a<e;a++){var r=n/17.817;n-=r,t[a]={size:r,num:a,dots:0},2===a||4===a||6===a||8===a?t[a].dots=1:11===a&&(t[a].dots=2)}return t}(12)},[]),t=Object(a.useState)("explore"),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(b[0]),m=Object(u.a)(i,2),d=m[0],f=m[1],g=Object(a.useState)(null),h=Object(u.a)(g,2),v=h[0],O=h[1],w=Object(a.useState)(""),N=Object(u.a)(w,2),F=N[0],k=N[1],D=Object(a.useState)("A"),z=Object(u.a)(D,2),B=z[0],S=z[1],x=Object(a.useState)("Major"),G=Object(u.a)(x,2),q=G[0],M=G[1],I=Object(a.useState)(!0),T=Object(u.a)(I,2),Q=T[0],W=T[1],J=Object(a.useState)(function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],a=0;a<e;a++)n.push(t);return n}(d.notes.length)),P=Object(u.a)(J,2),R=P[0],$=P[1],H=function(t){var n=t.reduce(function(e,t,n){return t&&e.push(n),e},[]);return{type:"note",string:n[A(n.length)],fret:A(e.length)}},K=function(e,t){return E(d.notes[e],t)},L=Object(a.useState)(function(){return H(R)}),U=Object(u.a)(L,2),V=U[0],X=U[1],Y=Object(a.useMemo)(function(){for(var t=[],n=0;n<d.notes.length;n++)for(var a=0;a<e.length+1;a++)t.push({type:"indicator",note:K(n,a),gridArea:y(n,a)});return t},[d,Q]),Z=[];"quiz"===o?Z.push({note:K(V.string,V.fret),type:"quiz",gridArea:y(V.string,V.fret)}):Z=Y;var _=function(e){var t,n,a=K(V.string,V.fret);t=F,n=a,p.hasOwnProperty(t)&&p.hasOwnProperty(n)&&p[t]===p[n]?(X(H(R)),O({correct:!0,id:Date.now()})):O({correct:!1,id:Date.now()}),k(""),e.preventDefault()};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Guitar Quiz"),r.a.createElement("div",{className:"App-options"},r.a.createElement("label",null,"Mode"),r.a.createElement("label",{className:"App-explore"},r.a.createElement("input",{type:"radio",value:"explore",checked:"explore"===o,onChange:function(){return c("explore")}}),"Explore"),r.a.createElement("label",{className:"App-quiz"},r.a.createElement("input",{type:"radio",value:"quiz",checked:"quiz"===o,onChange:function(){return c("quiz")}}),"Quiz"),r.a.createElement("label",{className:"App-tuning"},"Tuning"),r.a.createElement("select",{className:"App-tuning",value:d.name,onChange:function(e){f(b.find(function(t){return t.name===e.target.value})||d)}},b.map(function(e,t){return r.a.createElement("option",{key:t},e.name)})),r.a.createElement("label",{className:"App-show-octave"},r.a.createElement("input",{type:"checkbox",checked:Q,onChange:function(){return W(!Q)}})," Show octave")),r.a.createElement(j,{frets:e,tuning:d},Z.map(function(e,t){return r.a.createElement(C,Object.assign({key:t,showOctave:Q},e))}),d.notes.map(function(e,t,n){var a=n.length;return r.a.createElement(s,{key:t,num:t,count:a,onToggle:function(){return function(e){var t=Object(l.a)(R);t[e]=!t[e],$(t),V.string===e&&X(H(t))}(t)},includeInQuiz:R[t],rootNote:e})})),"quiz"===o?r.a.createElement("form",{className:"App-question",onSubmit:function(e){return _(e)}},r.a.createElement("h1",null,"What is the higlighted note?"),r.a.createElement("input",{className:"App-answer-field",type:"text",value:F,onChange:function(e){return k(e.target.value)}}),v?r.a.createElement("div",{className:"App-judgement "+(v.correct?"correct":"incorrect"),key:v.id},v.correct?"Correct":"Incorrect"):null):r.a.createElement("div",{className:"chordSelector"},r.a.createElement("select",{className:"App-chord-root",value:B,onChange:function(e){return S(e.target.value)}},r.a.createElement("option",null,"A"),r.a.createElement("option",null,"Bb"),r.a.createElement("option",null,"B"),r.a.createElement("option",null,"C")),r.a.createElement("select",{className:"App-chord-type",value:q,onChange:function(e){return M(e.target.value)}},r.a.createElement("option",null,"Major"),r.a.createElement("option",null,"Minor"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,2,1]]]);
//# sourceMappingURL=main.165934e4.chunk.js.map