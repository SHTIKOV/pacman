!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t){window._configCanvas={w:window.innerWidth,h:window.innerHeight}},function(e,t,n){"use strict";n.r(t);n(0),n(1);(()=>{let e=document.getElementById("game");e.width=window.innerWidth,e.height=window.innerHeight;let t=e.getContext("2d"),n=[[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[3,2,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[2,2,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[2,2,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[3,2,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]],i=_configCanvas.w/n[0].length,r=_configCanvas.h/n.length;function o(){let e=function(){let e=i/5,n=r/5,o=i/2-e/2,l=r/2-n/2;return(i,r)=>{t.fillStyle="#ffb8ae",t.fillRect(i+o,r+l,e,n)}}(),o=function(){let e=r/2,n=e/4;return(r,o)=>{t.strokeStyle="#1b1bcd",t.lineWidth=2,t.moveTo(r,o+e-n),t.lineTo(r+i,o+e-n),t.moveTo(r,o+e+n),t.lineTo(r+i,o+e+n),t.stroke(),t.lineWidth=1}}(),l=function(){let e=i/2,n=e/4;return(i,o)=>{t.strokeStyle="#1b1bcd",t.lineWidth=3,t.moveTo(i+e-n,o),t.lineTo(i+e-n,o+r),t.moveTo(i+e+n,o),t.lineTo(i+e+n,o+r),t.stroke(),t.lineWidth=1}}(),u=function(){let e=i/2,o=r/2,l=o/4,u=e/4;return(c,a,d,f)=>{let s=[];t.strokeStyle="#1b1bcd",t.lineWidth=2,d+1==n.length||2!==n[d+1][f]&&4!==n[d+1][f]||s.push([c+e,a+r]),0==d||2!==n[d-1][f]&&4!==n[d-1][f]||s.push([c+e,a]),f+1==n[d].length||2!==n[d][f+1]&&4!==n[d][f+1]||s.push([c+i,a+o]),0==f||2!==n[d][f-1]&&4!==n[d][f-1]||s.push([c,a+o]);let[h,g]=s,p=h[0],w=h[1],b=g[0],v=g[1],m=p<b?v>w?-1:1:v>w?1:-1,y=p<b?-1:1;[-1,1].map(n=>{t.moveTo(p+u*n,w),t.quadraticCurveTo(b+e*y+u*n,v+l*n*m,b,v+l*n*m)}),t.stroke(),t.lineWidth=1}}();n.map((n,c)=>{n.map((n,a)=>{let d=i*a,f=r*c;switch(t.beginPath(),n){case 0:break;case 1:return e(d,f);case 2:return o(d,f);case 3:return u(d,f,c,a);case 4:return l(d,f)}})})}o(),window.onresize=()=>{let t=window.innerWidth,n=window.innerHeight;_configCanvas.w=t,_configCanvas.h=n,e.width=t,e.height=n,o()}})()}]);