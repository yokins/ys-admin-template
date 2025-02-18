import{e as B,r as R,n as z,w as Z,v as q,h as t,Y as G,d as y,l as ie,a as f,Z as ne,b as w,m as N,$ as se,a0 as ae,a1 as le,a2 as H,T as ce,a3 as de,a4 as ue,a5 as pe,u as V,f as M,a6 as fe,a7 as ge,z as me,a8 as K,A as Y,B as X,a9 as he,aa as ve,ab as be,ac as xe,p as ye,c as we,i as _e,ad as $e,ae as Q,af as J,ag as ee,ah as te,ai as re,q as I,aj as ke,D as W,E as D,F as r,_ as Ce,L as b,M as x,R as ze,P as j,N as Se,ak as Pe,U as Be,X as Re,al as Ne,am as Oe,an as De,Q as L,ao as Ie,V as je}from"./index-ZOvGLoOe.js";import{T as Te,A as We}from"./TrashOutline-CWd4Ew8o.js";import{N as Me}from"./Input-Cr2YQOt0.js";import{_ as Ee}from"./Checkbox-_j8kl608.js";const F=B({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const i=R(null),o=R(e.value),m=R(e.value),a=R("up"),n=R(!1),c=z(()=>n.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),d=z(()=>n.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);Z(q(e,"value"),(u,p)=>{o.value=p,m.value=u,G(s)});function s(){const u=e.newOriginalNumber,p=e.oldOriginalNumber;p===void 0||u===void 0||(u>p?h("up"):p>u&&h("down"))}function h(u){a.value=u,n.value=!1,G(()=>{var p;(p=i.value)===null||p===void 0||p.offsetWidth,n.value=!0})}return()=>{const{clsPrefix:u}=e;return t("span",{ref:i,class:`${u}-base-slot-machine-number`},o.value!==null?t("span",{class:[`${u}-base-slot-machine-old-number ${u}-base-slot-machine-old-number--top`,d.value]},o.value):null,t("span",{class:[`${u}-base-slot-machine-current-number`,c.value]},t("span",{ref:"numberWrapper",class:[`${u}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${u}-base-slot-machine-current-number__inner--not-number`]},m.value)),o.value!==null?t("span",{class:[`${u}-base-slot-machine-old-number ${u}-base-slot-machine-old-number--bottom`,d.value]},o.value):null)}}}),{cubicBezierEaseOut:T}=ie;function qe({duration:e=".2s"}={}){return[y("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${T},
 max-width ${e} ${T},
 transform ${e} ${T}
 `}),y("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${T},
 max-width ${e} ${T},
 transform ${e} ${T}
 `}),y("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),y("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),y("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),y("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Ae=y([y("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),y("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),y("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),y("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),f("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[f("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[qe({duration:".2s"}),ne({duration:".2s",delay:"0s"}),f("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[w("top",{transform:"translateY(-100%)"}),w("bottom",{transform:"translateY(100%)"}),w("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),w("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),f("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[w("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),w("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),N("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[w("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Le=B({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){se("-base-slot-machine",Ae,q(e,"clsPrefix"));const i=R(),o=R(),m=z(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const a=[];let n=e.value;for(e.max!==void 0&&(n=Math.min(e.max,n));n>=1;)a.push(n%10),n/=10,n=Math.floor(n);return a.reverse(),a});return Z(q(e,"value"),(a,n)=>{typeof a=="string"?(o.value=void 0,i.value=void 0):typeof n=="string"?(o.value=a,i.value=void 0):(o.value=a,i.value=n)}),()=>{const{value:a,clsPrefix:n}=e;return typeof a=="number"?t("span",{class:`${n}-base-slot-machine`},t(ae,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>m.value.map((c,d)=>t(F,{clsPrefix:n,key:m.value.length-d-1,oldOriginalNumber:i.value,newOriginalNumber:o.value,value:c}))}),t(le,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<a?t(F,{clsPrefix:n,value:"+"}):null})):t("span",{class:`${n}-base-slot-machine`},a)}}}),Ye=y([y("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),f("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[w("as-is",[f("badge-sup",{position:"static",transform:"translateX(0)"},[H({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),w("dot",[f("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[y("::before","border-radius: 4px;")])]),f("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 2;
 display: flex;
 align-items: center;
 `,[H({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),f("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),y("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Ve=Object.assign(Object.assign({},M.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),Xe=B({name:"Badge",props:Ve,setup(e,{slots:i}){const{mergedClsPrefixRef:o,inlineThemeDisabled:m,mergedRtlRef:a}=V(e),n=M("Badge","-badge",Ye,fe,e,o),c=R(!1),d=()=>{c.value=!0},s=()=>{c.value=!1},h=z(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!ge(i.value)));me(()=>{h.value&&(c.value=!0)});const u=K("Badge",a,o),p=z(()=>{const{type:l,color:g}=e,{common:{cubicBezierEaseInOut:$,cubicBezierEaseOut:S},self:{[Y("color",l)]:k,fontFamily:P,fontSize:C}}=n.value;return{"--n-font-size":C,"--n-font-family":P,"--n-color":g||k,"--n-ripple-color":g||k,"--n-bezier":$,"--n-ripple-bezier":S}}),v=m?X("badge",z(()=>{let l="";const{type:g,color:$}=e;return g&&(l+=g[0]),$&&(l+=he($)),l}),p,e):void 0,_=z(()=>{const{offset:l}=e;if(!l)return;const[g,$]=l,S=typeof g=="number"?`${g}px`:g,k=typeof $=="number"?`${$}px`:$;return{transform:`translate(calc(${u!=null&&u.value?"50%":"-50%"} + ${S}), ${k})`}});return{rtlEnabled:u,mergedClsPrefix:o,appeared:c,showBadge:h,handleAfterEnter:d,handleAfterLeave:s,cssVars:m?void 0:p,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender,offsetStyle:_}},render(){var e;const{mergedClsPrefix:i,onRender:o,themeClass:m,$slots:a}=this;o==null||o();const n=(e=a.default)===null||e===void 0?void 0:e.call(a);return t("div",{class:[`${i}-badge`,this.rtlEnabled&&`${i}-badge--rtl`,m,{[`${i}-badge--dot`]:this.dot,[`${i}-badge--as-is`]:!n}],style:this.cssVars},n,t(ce,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?t("sup",{class:`${i}-badge-sup`,title:de(this.value),style:this.offsetStyle},ue(a.value,()=>[this.dot?null:t(Le,{clsPrefix:i,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?t(pe,{clsPrefix:i}):null):null}))}}),Ge=y([f("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[w("show-divider",[f("list-item",[y("&:not(:last-child)",[N("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),w("clickable",[f("list-item",`
 cursor: pointer;
 `)]),w("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),w("hoverable",[f("list-item",`
 border-radius: var(--n-border-radius);
 `,[y("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[N("divider",`
 background-color: transparent;
 `)])])]),w("bordered, hoverable",[f("list-item",`
 padding: 12px 20px;
 `),N("header, footer",`
 padding: 12px 20px;
 `)]),N("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[y("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),f("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[N("prefix",`
 margin-right: 20px;
 flex: 0;
 `),N("suffix",`
 margin-left: 20px;
 flex: 0;
 `),N("main",`
 flex: 1;
 `),N("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),ve(f("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),be(f("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),He=Object.assign(Object.assign({},M.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),oe=we("n-list"),Fe=B({name:"List",props:He,slots:Object,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o,mergedRtlRef:m}=V(e),a=K("List",m,i),n=M("List","-list",Ge,xe,e,i);ye(oe,{showDividerRef:q(e,"showDivider"),mergedClsPrefixRef:i});const c=z(()=>{const{common:{cubicBezierEaseInOut:s},self:{fontSize:h,textColor:u,color:p,colorModal:v,colorPopover:_,borderColor:l,borderColorModal:g,borderColorPopover:$,borderRadius:S,colorHover:k,colorHoverModal:P,colorHoverPopover:C}}=n.value;return{"--n-font-size":h,"--n-bezier":s,"--n-text-color":u,"--n-color":p,"--n-border-radius":S,"--n-border-color":l,"--n-border-color-modal":g,"--n-border-color-popover":$,"--n-color-modal":v,"--n-color-popover":_,"--n-color-hover":k,"--n-color-hover-modal":P,"--n-color-hover-popover":C}}),d=o?X("list",void 0,c,e):void 0;return{mergedClsPrefix:i,rtlEnabled:a,cssVars:o?void 0:c,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{$slots:i,mergedClsPrefix:o,onRender:m}=this;return m==null||m(),t("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},i.header?t("div",{class:`${o}-list__header`},i.header()):null,(e=i.default)===null||e===void 0?void 0:e.call(i),i.footer?t("div",{class:`${o}-list__footer`},i.footer()):null)}}),Ue=B({name:"ListItem",slots:Object,setup(){const e=_e(oe,null);return e||$e("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:i}=this;return t("li",{class:`${i}-list-item`},e.prefix?t("div",{class:`${i}-list-item__prefix`},e.prefix()):null,e.default?t("div",{class:`${i}-list-item__main`},e):null,e.suffix?t("div",{class:`${i}-list-item__suffix`},e.suffix()):null,this.showDivider&&t("div",{class:`${i}-list-item__divider`}))}}),Ze={success:t(re,null),error:t(te,null),warning:t(ee,null),info:t(J,null)},Ke=B({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:i}){function o(a,n,c,d){const{gapDegree:s,viewBoxWidth:h,strokeWidth:u}=e,p=50,v=0,_=p,l=0,g=2*p,$=50+u/2,S=`M ${$},${$} m ${v},${_}
      a ${p},${p} 0 1 1 ${l},-100
      a ${p},${p} 0 1 1 0,${g}`,k=Math.PI*2*p,P={stroke:d==="rail"?c:typeof e.fillColor=="object"?"url(#gradient)":c,strokeDasharray:`${a/100*(k-s)}px ${h*8}px`,strokeDashoffset:`-${s/2}px`,transformOrigin:n?"center":void 0,transform:n?`rotate(${n}deg)`:void 0};return{pathString:S,pathStyle:P}}const m=()=>{const a=typeof e.fillColor=="object",n=a?e.fillColor.stops[0]:"",c=a?e.fillColor.stops[1]:"";return a&&t("defs",null,t("linearGradient",{id:"gradient",x1:"0%",y1:"100%",x2:"100%",y2:"0%"},t("stop",{offset:"0%","stop-color":n}),t("stop",{offset:"100%","stop-color":c})))};return()=>{const{fillColor:a,railColor:n,strokeWidth:c,offsetDegree:d,status:s,percentage:h,showIndicator:u,indicatorTextColor:p,unit:v,gapOffsetDegree:_,clsPrefix:l}=e,{pathString:g,pathStyle:$}=o(100,0,n,"rail"),{pathString:S,pathStyle:k}=o(h,d,a,"fill"),P=100+c;return t("div",{class:`${l}-progress-content`,role:"none"},t("div",{class:`${l}-progress-graph`,"aria-hidden":!0},t("div",{class:`${l}-progress-graph-circle`,style:{transform:_?`rotate(${_}deg)`:void 0}},t("svg",{viewBox:`0 0 ${P} ${P}`},m(),t("g",null,t("path",{class:`${l}-progress-graph-circle-rail`,d:g,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:$})),t("g",null,t("path",{class:[`${l}-progress-graph-circle-fill`,h===0&&`${l}-progress-graph-circle-fill--empty`],d:S,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:k}))))),u?t("div",null,i.default?t("div",{class:`${l}-progress-custom-content`,role:"none"},i.default()):s!=="default"?t("div",{class:`${l}-progress-icon`,"aria-hidden":!0},t(Q,{clsPrefix:l},{default:()=>Ze[s]})):t("div",{class:`${l}-progress-text`,style:{color:p},role:"none"},t("span",{class:`${l}-progress-text__percentage`},h),t("span",{class:`${l}-progress-text__unit`},v))):null)}}}),Qe={success:t(re,null),error:t(te,null),warning:t(ee,null),info:t(J,null)},Je=B({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:i}){const o=z(()=>I(e.height)),m=z(()=>{var c,d;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(c=e.fillColor)===null||c===void 0?void 0:c.stops[0]} , ${(d=e.fillColor)===null||d===void 0?void 0:d.stops[1]})`:e.fillColor}),a=z(()=>e.railBorderRadius!==void 0?I(e.railBorderRadius):e.height!==void 0?I(e.height,{c:.5}):""),n=z(()=>e.fillBorderRadius!==void 0?I(e.fillBorderRadius):e.railBorderRadius!==void 0?I(e.railBorderRadius):e.height!==void 0?I(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:c,railColor:d,railStyle:s,percentage:h,unit:u,indicatorTextColor:p,status:v,showIndicator:_,processing:l,clsPrefix:g}=e;return t("div",{class:`${g}-progress-content`,role:"none"},t("div",{class:`${g}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${g}-progress-graph-line`,{[`${g}-progress-graph-line--indicator-${c}`]:!0}]},t("div",{class:`${g}-progress-graph-line-rail`,style:[{backgroundColor:d,height:o.value,borderRadius:a.value},s]},t("div",{class:[`${g}-progress-graph-line-fill`,l&&`${g}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:m.value,height:o.value,lineHeight:o.value,borderRadius:n.value}},c==="inside"?t("div",{class:`${g}-progress-graph-line-indicator`,style:{color:p}},i.default?i.default():`${h}${u}`):null)))),_&&c==="outside"?t("div",null,i.default?t("div",{class:`${g}-progress-custom-content`,style:{color:p},role:"none"},i.default()):v==="default"?t("div",{role:"none",class:`${g}-progress-icon ${g}-progress-icon--as-text`,style:{color:p}},h,u):t("div",{class:`${g}-progress-icon`,"aria-hidden":!0},t(Q,{clsPrefix:g},{default:()=>Qe[v]}))):null)}}});function U(e,i,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const et=B({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:i}){const o=z(()=>e.percentage.map((n,c)=>`${Math.PI*n/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*c)-e.circleGap*c)*2}, ${e.viewBoxWidth*8}`)),m=(a,n)=>{const c=e.fillColor[n],d=typeof c=="object"?c.stops[0]:"",s=typeof c=="object"?c.stops[1]:"";return typeof e.fillColor[n]=="object"&&t("linearGradient",{id:`gradient-${n}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},t("stop",{offset:"0%","stop-color":d}),t("stop",{offset:"100%","stop-color":s}))};return()=>{const{viewBoxWidth:a,strokeWidth:n,circleGap:c,showIndicator:d,fillColor:s,railColor:h,railStyle:u,percentage:p,clsPrefix:v}=e;return t("div",{class:`${v}-progress-content`,role:"none"},t("div",{class:`${v}-progress-graph`,"aria-hidden":!0},t("div",{class:`${v}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${a} ${a}`},t("defs",null,p.map((_,l)=>m(_,l))),p.map((_,l)=>t("g",{key:l},t("path",{class:`${v}-progress-graph-circle-rail`,d:U(a/2-n/2*(1+2*l)-c*l,n,a),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:h[l]},u[l]]}),t("path",{class:[`${v}-progress-graph-circle-fill`,_===0&&`${v}-progress-graph-circle-fill--empty`],d:U(a/2-n/2*(1+2*l)-c*l,n,a),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[l],strokeDashoffset:0,stroke:typeof s[l]=="object"?`url(#gradient-${l})`:s[l]}})))))),d&&i.default?t("div",null,t("div",{class:`${v}-progress-text`},i.default())):null)}}}),tt=y([f("progress",{display:"inline-block"},[f("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),w("line",`
 width: 100%;
 display: block;
 `,[f("progress-content",`
 display: flex;
 align-items: center;
 `,[f("progress-graph",{flex:1})]),f("progress-custom-content",{marginLeft:"14px"}),f("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[w("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),w("circle, dashboard",{width:"120px"},[f("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),f("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),f("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),w("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[f("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),f("progress-content",{position:"relative"}),f("progress-graph",{position:"relative"},[f("progress-graph-circle",[y("svg",{verticalAlign:"bottom"}),f("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[w("empty",{opacity:0})]),f("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),f("progress-graph-line",[w("indicator-inside",[f("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[f("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),f("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),w("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[f("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),f("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),f("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[f("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[w("processing",[y("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),y("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),rt=Object.assign(Object.assign({},M.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ot=B({name:"Progress",props:rt,setup(e){const i=z(()=>e.indicatorPlacement||e.indicatorPosition),o=z(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:m,inlineThemeDisabled:a}=V(e),n=M("Progress","-progress",tt,ke,e,m),c=z(()=>{const{status:s}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:u,fontSizeCircle:p,railColor:v,railHeight:_,iconSizeCircle:l,iconSizeLine:g,textColorCircle:$,textColorLineInner:S,textColorLineOuter:k,lineBgProcessing:P,fontWeightCircle:C,[Y("iconColor",s)]:O,[Y("fillColor",s)]:E}}=n.value;return{"--n-bezier":h,"--n-fill-color":E,"--n-font-size":u,"--n-font-size-circle":p,"--n-font-weight-circle":C,"--n-icon-color":O,"--n-icon-size-circle":l,"--n-icon-size-line":g,"--n-line-bg-processing":P,"--n-rail-color":v,"--n-rail-height":_,"--n-text-color-circle":$,"--n-text-color-line-inner":S,"--n-text-color-line-outer":k}}),d=a?X("progress",z(()=>e.status[0]),c,e):void 0;return{mergedClsPrefix:m,mergedIndicatorPlacement:i,gapDeg:o,cssVars:a?void 0:c,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{type:e,cssVars:i,indicatorTextColor:o,showIndicator:m,status:a,railColor:n,railStyle:c,color:d,percentage:s,viewBoxWidth:h,strokeWidth:u,mergedIndicatorPlacement:p,unit:v,borderRadius:_,fillBorderRadius:l,height:g,processing:$,circleGap:S,mergedClsPrefix:k,gapDeg:P,gapOffsetDegree:C,themeClass:O,$slots:E,onRender:A}=this;return A==null||A(),t("div",{class:[O,`${k}-progress`,`${k}-progress--${e}`,`${k}-progress--${a}`],style:i,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":s,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(Ke,{clsPrefix:k,status:a,showIndicator:m,indicatorTextColor:o,railColor:n,fillColor:d,railStyle:c,offsetDegree:this.offsetDegree,percentage:s,viewBoxWidth:h,strokeWidth:u,gapDegree:P===void 0?e==="dashboard"?75:0:P,gapOffsetDegree:C,unit:v},E):e==="line"?t(Je,{clsPrefix:k,status:a,showIndicator:m,indicatorTextColor:o,railColor:n,fillColor:d,railStyle:c,percentage:s,processing:$,indicatorPlacement:p,unit:v,fillBorderRadius:l,railBorderRadius:_,height:g},E):e==="multiple-circle"?t(et,{clsPrefix:k,strokeWidth:u,railColor:n,fillColor:d,railStyle:c,viewBoxWidth:h,percentage:s,showIndicator:m,circleGap:S},E):null)}}),it={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},nt=B({name:"ChatboxEllipsesOutline",render:function(i,o){return D(),W("svg",it,o[0]||(o[0]=[r("path",{d:"M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),r("circle",{cx:"160",cy:"216",r:"32",fill:"currentColor"},null,-1),r("circle",{cx:"256",cy:"216",r:"32",fill:"currentColor"},null,-1),r("circle",{cx:"352",cy:"216",r:"32",fill:"currentColor"},null,-1)]))}}),st={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},at=B({name:"PeopleOutline",render:function(i,o){return D(),W("svg",st,o[0]||(o[0]=[r("path",{d:"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),r("path",{d:"M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),r("path",{d:"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),r("path",{d:"M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1)]))}}),lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ct=B({name:"SendOutline",render:function(i,o){return D(),W("svg",lt,o[0]||(o[0]=[r("path",{d:"M470.3 271.15L43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ut=B({name:"ShieldCheckmarkOutline",render:function(i,o){return D(),W("svg",dt,o[0]||(o[0]=[r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M336 176L225.2 304L176 255.8"},null,-1),r("path",{d:"M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),pt={class:"dashboard-container"},ft={class:"stats-section"},gt={class:"card-header"},mt={class:"stats-chart"},ht={class:"card-header"},vt={class:"role-distribution"},bt={class:"distribution-item"},xt={class:"distribution-item"},yt={class:"distribution-item"},wt={class:"interactive-section"},_t={class:"card-header"},$t={class:"chat-container"},kt={class:"chat-messages"},Ct={class:"message received"},zt={class:"message sent"},St={class:"chat-input"},Pt={class:"card-header"},Bt={class:"tasks-container"},Rt={class:"task-item"},Nt={class:"task-content"},Ot={class:"task-meta"},Dt={class:"task-date"},It={__name:"Index",setup(e){const i=R(""),o=()=>{i.value.trim()&&(i.value="")},m=R([{id:1,title:"完成控制面板设计",completed:!1,priority:"error",priorityText:"高",dueDate:"2023-12-25"},{id:2,title:"用户反馈处理",completed:!0,priority:"warning",priorityText:"中",dueDate:"2023-12-26"},{id:3,title:"系统性能优化",completed:!1,priority:"info",priorityText:"低",dueDate:"2023-12-27"}]),a=()=>{},n=d=>{d.completed=!d.completed},c=d=>{const s=m.value.findIndex(h=>h.id===d.id);s>-1&&m.value.splice(s,1)};return(d,s)=>{const h=ze,u=ot,p=Se,v=Xe,_=Pe,l=Be,g=Me,$=Ee,S=Ie,k=Ue,P=Fe;return D(),W("div",pt,[r("div",ft,[b(p,{class:"stats-card user-stats"},{header:x(()=>[r("div",gt,[s[1]||(s[1]=r("h3",{class:"card-title"},"用户统计",-1)),b(h,{size:"20",class:"header-icon"},{default:x(()=>[b(j(at))]),_:1})])]),default:x(()=>[s[3]||(s[3]=r("div",{class:"stats-content"},[r("div",{class:"stats-item"},[r("div",{class:"stats-value"},"128"),r("div",{class:"stats-label"},"总用户数")]),r("div",{class:"stats-item"},[r("div",{class:"stats-value"},"24"),r("div",{class:"stats-label"},"今日活跃")]),r("div",{class:"stats-item"},[r("div",{class:"stats-value"},"8"),r("div",{class:"stats-label"},"新增用户")])],-1)),r("div",mt,[b(u,{type:"line",percentage:75,height:6,"border-radius":4,color:"#36ad6a"}),s[2]||(s[2]=r("div",{class:"chart-label"},"用户增长趋势",-1))])]),_:1}),b(p,{class:"stats-card role-stats"},{header:x(()=>[r("div",ht,[s[4]||(s[4]=r("h3",{class:"card-title"},"角色统计",-1)),b(h,{size:"20",class:"header-icon"},{default:x(()=>[b(j(ut))]),_:1})])]),default:x(()=>[s[8]||(s[8]=r("div",{class:"stats-content"},[r("div",{class:"stats-item"},[r("div",{class:"stats-value"},"5"),r("div",{class:"stats-label"},"角色类型")]),r("div",{class:"stats-item"},[r("div",{class:"stats-value"},"12"),r("div",{class:"stats-label"},"权限组")]),r("div",{class:"stats-item"},[r("div",{class:"stats-value"},"86"),r("div",{class:"stats-label"},"已分配")])],-1)),r("div",vt,[r("div",bt,[s[5]||(s[5]=r("span",{class:"label"},"管理员",-1)),b(u,{type:"line",percentage:20,height:4,"border-radius":4,color:"#2080f0"})]),r("div",xt,[s[6]||(s[6]=r("span",{class:"label"},"编辑者",-1)),b(u,{type:"line",percentage:35,height:4,"border-radius":4,color:"#36ad6a"})]),r("div",yt,[s[7]||(s[7]=r("span",{class:"label"},"访客",-1)),b(u,{type:"line",percentage:45,height:4,"border-radius":4,color:"#f0a020"})])])]),_:1})]),r("div",wt,[b(p,{class:"chat-card"},{header:x(()=>[r("div",_t,[s[9]||(s[9]=r("h3",{class:"card-title"},"在线聊天",-1)),b(v,{value:3,max:99,type:"success"},{default:x(()=>[b(h,{size:"20",class:"header-icon"},{default:x(()=>[b(j(nt))]),_:1})]),_:1})])]),default:x(()=>[r("div",$t,[r("div",kt,[r("div",Ct,[b(_,{size:"small",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),s[10]||(s[10]=r("div",{class:"message-content"},[r("div",{class:"message-info"},[r("span",{class:"sender"},"张三"),r("span",{class:"time"},"10:30")]),r("div",{class:"message-text"},"早上好！今天的会议准备得怎么样了？")],-1))]),r("div",zt,[s[11]||(s[11]=r("div",{class:"message-content"},[r("div",{class:"message-info"},[r("span",{class:"time"},"10:32"),r("span",{class:"sender"},"我")]),r("div",{class:"message-text"},"材料都已经准备好了，可以开始了。")],-1)),b(_,{size:"small",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"})])]),r("div",St,[b(g,{value:i.value,"onUpdate:value":s[0]||(s[0]=C=>i.value=C),type:"text",placeholder:"输入消息...",round:""},{suffix:x(()=>[b(l,{quaternary:"",circle:"",type:"primary",onClick:o},{icon:x(()=>[b(h,null,{default:x(()=>[b(j(ct))]),_:1})]),_:1})]),_:1},8,["value"])])])]),_:1}),b(p,{class:"tasks-card"},{header:x(()=>[r("div",Pt,[s[12]||(s[12]=r("h3",{class:"card-title"},"任务列表",-1)),b(l,{quaternary:"",circle:"",type:"primary",onClick:a},{icon:x(()=>[b(h,null,{default:x(()=>[b(j(We))]),_:1})]),_:1})])]),default:x(()=>[r("div",Bt,[b(P,null,{default:x(()=>[(D(!0),W(Re,null,Ne(m.value,C=>(D(),Oe(k,{key:C.id},{default:x(()=>[r("div",Rt,[r("div",Nt,[b($,{checked:C.completed,"onUpdate:checked":[O=>C.completed=O,O=>n(C)]},{default:x(()=>[r("span",{class:De({completed:C.completed})},L(C.title),3)]),_:2},1032,["checked","onUpdate:checked"]),b(S,{type:C.priority,size:"small",round:""},{default:x(()=>[je(L(C.priorityText),1)]),_:2},1032,["type"])]),r("div",Ot,[r("span",Dt,L(C.dueDate),1),b(l,{quaternary:"",circle:"",type:"error",size:"small",onClick:O=>c(C)},{icon:x(()=>[b(h,null,{default:x(()=>[b(j(Te))]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024))),128))]),_:1})])]),_:1})])])}}},Et=Ce(It,[["__scopeId","data-v-a7f85dc4"]]);export{Et as default};
