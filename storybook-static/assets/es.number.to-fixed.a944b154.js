import{v as I,x as O,y as x,_ as R,z as S,A as E,B as F}from"./iframe.c2dca790.js";var N=x,T=I,j=O,C=RangeError,q=function(i){var r=T(j(this)),e="",t=N(i);if(t<0||t==1/0)throw C("Wrong number of repetitions");for(;t>0;(t>>>=1)&&(r+=r))t&1&&(e+=r);return e},z=R,p=S,D=x,V=F,_=q,d=E,k=RangeError,m=String,y=Math.floor,$=p(_),w=p("".slice),l=p(1 .toFixed),f=function(n,i,r){return i===0?r:i%2===1?f(n,i-1,r*n):f(n*n,i/2,r)},A=function(n){for(var i=0,r=n;r>=4096;)i+=12,r/=4096;for(;r>=2;)i+=1,r/=2;return i},u=function(n,i,r){for(var e=-1,t=r;++e<6;)t+=i*n[e],n[e]=t%1e7,t=y(t/1e7)},h=function(n,i){for(var r=6,e=0;--r>=0;)e+=n[r],n[r]=y(e/i),e=e%i*1e7},b=function(n){for(var i=6,r="";--i>=0;)if(r!==""||i===0||n[i]!==0){var e=m(n[i]);r=r===""?e:r+$("0",7-e.length)+e}return r},B=d(function(){return l(8e-5,3)!=="0.000"||l(.9,0)!=="1"||l(1.255,2)!=="1.25"||l(0xde0b6b3a7640080,0)!=="1000000000000000128"})||!d(function(){l({})});z({target:"Number",proto:!0,forced:B},{toFixed:function(i){var r=V(this),e=D(i),t=[0,0,0,0,0,0],c="",a="0",o,g,v,s;if(e<0||e>20)throw k("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return m(r);if(r<0&&(c="-",r=-r),r>1e-21)if(o=A(r*f(2,69,1))-69,g=o<0?r*f(2,-o,1):r/f(2,o,1),g*=4503599627370496,o=52-o,o>0){for(u(t,0,g),v=e;v>=7;)u(t,1e7,0),v-=7;for(u(t,f(10,v,1),0),v=o-1;v>=23;)h(t,1<<23),v-=23;h(t,1<<v),u(t,1,1),h(t,2),a=b(t)}else u(t,0,g),u(t,1<<-o,0),a=b(t)+$("0",e);return e>0?(s=a.length,a=c+(s<=e?"0."+$("0",e-s)+a:w(a,0,s-e)+"."+w(a,s-e))):a=c+a,a}});export{q as s};
//# sourceMappingURL=es.number.to-fixed.a944b154.js.map
