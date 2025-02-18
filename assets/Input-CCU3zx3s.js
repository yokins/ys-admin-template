import{e as Z,h as a,c as ir,a as m,m as l,b as z,aC as H,d as C,r as w,w as ue,i as lr,n as _,bk as sr,t as q,aW as cr,X as ur,b1 as dr,a4 as se,u as hr,f as Se,bw as fr,$ as vr,aE as pr,v as ge,aF as gr,aJ as br,aK as be,z as mr,g as xr,aG as me,p as wr,a8 as yr,A as ce,bx as Cr,B as zr,by as xe,bz as Ar,bA as Sr,Y as we,aY as ye,av as y,aX as Ce,ae as ze}from"./index-DIU70qs1.js";const Rr=Z({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Fr=Z({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Re=ir("n-input"),_r=m("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[l("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),l("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),l("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),C("&:-webkit-autofill ~",[l("placeholder","display: none;")])]),z("round",[H("textarea","border-radius: calc(var(--n-height) / 2);")]),l("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),z("textarea",[l("placeholder","overflow: visible;")]),H("autosize","width: 100%;"),z("autosize",[l("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),m("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),l("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),l("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("&[type=password]::-ms-reveal","display: none;"),C("+",[l("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),H("textarea",[l("placeholder","white-space: nowrap;")]),l("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[m("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[m("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),l("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),l("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[l("input-el, placeholder","text-align: center;"),l("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[m("icon",`
 color: var(--n-icon-color);
 `),m("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[l("border","border: var(--n-border-disabled);"),l("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),l("placeholder","color: var(--n-placeholder-color-disabled);"),l("separator","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),m("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),l("suffix, prefix","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),H("disabled",[l("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[l("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[l("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),l("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),l("state-border",`
 border-color: #0000;
 z-index: 1;
 `),l("prefix","margin-right: 4px;"),l("suffix",`
 margin-left: 4px;
 `),l("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[m("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),m("base-clear",`
 font-size: var(--n-icon-size);
 `,[l("placeholder",[m("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[m("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),m("base-icon",`
 font-size: var(--n-icon-size);
 `)]),m("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>z(`${r}-status`,[H("disabled",[m("base-loading",`
 color: var(--n-loading-color-${r})
 `),l("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),l("state-border",`
 border: var(--n-border-${r});
 `),C("&:hover",[l("state-border",`
 border: var(--n-border-hover-${r});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${r});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),Br=m("input",[z("disabled",[l("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function Er(r){let x=0;for(const n of r)x++;return x}function Q(r){return r===""||r==null}function $r(r){const x=w(null);function n(){const{value:b}=r;if(!(b!=null&&b.focus)){R();return}const{selectionStart:h,selectionEnd:s,value:u}=b;if(h==null||s==null){R();return}x.value={start:h,end:s,beforeText:u.slice(0,h),afterText:u.slice(s)}}function S(){var b;const{value:h}=x,{value:s}=r;if(!h||!s)return;const{value:u}=s,{start:c,beforeText:i,afterText:p}=h;let g=u.length;if(u.endsWith(p))g=u.length-p.length;else if(u.startsWith(i))g=i.length;else{const T=i[c-1],A=u.indexOf(T,c-1);A!==-1&&(g=A+1)}(b=s.setSelectionRange)===null||b===void 0||b.call(s,g,g)}function R(){x.value=null}return ue(r,R),{recordCursor:n,restoreCursor:S}}const Ae=Z({name:"InputWordCount",setup(r,{slots:x}){const{mergedValueRef:n,maxlengthRef:S,mergedClsPrefixRef:R,countGraphemesRef:b}=lr(Re),h=_(()=>{const{value:s}=n;return s===null||Array.isArray(s)?0:(b.value||Er)(s)});return()=>{const{value:s}=S,{value:u}=n;return a("span",{class:`${R.value}-input-word-count`},sr(x.default,{value:u===null||Array.isArray(u)?"":u},()=>[s===void 0?h.value:`${h.value} / ${s}`]))}}}),Pr=Object.assign(Object.assign({},Se.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Ir=Z({name:"Input",props:Pr,slots:Object,setup(r){const{mergedClsPrefixRef:x,mergedBorderedRef:n,inlineThemeDisabled:S,mergedRtlRef:R}=hr(r),b=Se("Input","-input",_r,Sr,r,x);fr&&vr("-input-safari",Br,x);const h=w(null),s=w(null),u=w(null),c=w(null),i=w(null),p=w(null),g=w(null),T=$r(g),A=w(null),{localeRef:Fe}=pr("Input"),j=w(r.defaultValue),_e=ge(r,"value"),F=gr(_e,j),V=br(r),{mergedSizeRef:ee,mergedDisabledRef:I,mergedStatusRef:Be}=V,k=w(!1),W=w(!1),B=w(!1),D=w(!1);let oe=null;const re=_(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[Fe.value.placeholder]:[e]}),Ee=_(()=>{const{value:e}=B,{value:o}=F,{value:t}=re;return!e&&(Q(o)||Array.isArray(o)&&Q(o[0]))&&t[0]}),$e=_(()=>{const{value:e}=B,{value:o}=F,{value:t}=re;return!e&&t[1]&&(Q(o)||Array.isArray(o)&&Q(o[1]))}),te=be(()=>r.internalForceFocus||k.value),Pe=be(()=>{if(I.value||r.readonly||!r.clearable||!te.value&&!W.value)return!1;const{value:e}=F,{value:o}=te;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(W.value||o):!!e&&(W.value||o)}),ne=_(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),O=w(!1),Te=_(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),de=w(void 0),Ie=()=>{var e,o;if(r.type==="textarea"){const{autosize:t}=r;if(t&&(de.value=(o=(e=A.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!s.value||typeof t=="boolean")return;const{paddingTop:f,paddingBottom:v,lineHeight:d}=window.getComputedStyle(s.value),E=Number(f.slice(0,-2)),$=Number(v.slice(0,-2)),P=Number(d.slice(0,-2)),{value:N}=u;if(!N)return;if(t.minRows){const K=Math.max(t.minRows,1),le=`${E+$+P*K}px`;N.style.minHeight=le}if(t.maxRows){const K=`${E+$+P*t.maxRows}px`;N.style.maxHeight=K}}},ke=_(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});mr(()=>{const{value:e}=F;Array.isArray(e)||ie(e)});const Me=xr().proxy;function U(e,o){const{onUpdateValue:t,"onUpdate:value":f,onInput:v}=r,{nTriggerFormInput:d}=V;t&&y(t,e,o),f&&y(f,e,o),v&&y(v,e,o),j.value=e,d()}function L(e,o){const{onChange:t}=r,{nTriggerFormChange:f}=V;t&&y(t,e,o),j.value=e,f()}function Ve(e){const{onBlur:o}=r,{nTriggerFormBlur:t}=V;o&&y(o,e),t()}function We(e){const{onFocus:o}=r,{nTriggerFormFocus:t}=V;o&&y(o,e),t()}function De(e){const{onClear:o}=r;o&&y(o,e)}function Oe(e){const{onInputBlur:o}=r;o&&y(o,e)}function Ne(e){const{onInputFocus:o}=r;o&&y(o,e)}function Ke(){const{onDeactivate:e}=r;e&&y(e)}function He(){const{onActivate:e}=r;e&&y(e)}function je(e){const{onClick:o}=r;o&&y(o,e)}function Ue(e){const{onWrapperFocus:o}=r;o&&y(o,e)}function Le(e){const{onWrapperBlur:o}=r;o&&y(o,e)}function Ge(){B.value=!0}function Xe(e){B.value=!1,e.target===p.value?G(e,1):G(e,0)}function G(e,o=0,t="input"){const f=e.target.value;if(ie(f),e instanceof InputEvent&&!e.isComposing&&(B.value=!1),r.type==="textarea"){const{value:d}=A;d&&d.syncUnifiedContainer()}if(oe=f,B.value)return;T.recordCursor();const v=Ye(f);if(v)if(!r.pair)t==="input"?U(f,{source:o}):L(f,{source:o});else{let{value:d}=F;Array.isArray(d)?d=[d[0],d[1]]:d=["",""],d[o]=f,t==="input"?U(d,{source:o}):L(d,{source:o})}Me.$forceUpdate(),v||we(T.restoreCursor)}function Ye(e){const{countGraphemes:o,maxlength:t,minlength:f}=r;if(o){let d;if(t!==void 0&&(d===void 0&&(d=o(e)),d>Number(t))||f!==void 0&&(d===void 0&&(d=o(e)),d<Number(t)))return!1}const{allowInput:v}=r;return typeof v=="function"?v(e):!0}function Je(e){Oe(e),e.relatedTarget===h.value&&Ke(),e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===p.value||e.relatedTarget===s.value)||(D.value=!1),X(e,"blur"),g.value=null}function qe(e,o){Ne(e),k.value=!0,D.value=!0,He(),X(e,"focus"),o===0?g.value=i.value:o===1?g.value=p.value:o===2&&(g.value=s.value)}function Qe(e){r.passivelyActivated&&(Le(e),X(e,"blur"))}function Ze(e){r.passivelyActivated&&(k.value=!0,Ue(e),X(e,"focus"))}function X(e,o){e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===p.value||e.relatedTarget===s.value||e.relatedTarget===h.value)||(o==="focus"?(We(e),k.value=!0):o==="blur"&&(Ve(e),k.value=!1))}function eo(e,o){G(e,o,"change")}function oo(e){je(e)}function ro(e){De(e),he()}function he(){r.pair?(U(["",""],{source:"clear"}),L(["",""],{source:"clear"})):(U("",{source:"clear"}),L("",{source:"clear"}))}function to(e){const{onMousedown:o}=r;o&&o(e);const{tagName:t}=e.target;if(t!=="INPUT"&&t!=="TEXTAREA"){if(r.resizable){const{value:f}=h;if(f){const{left:v,top:d,width:E,height:$}=f.getBoundingClientRect(),P=14;if(v+E-P<e.clientX&&e.clientX<v+E&&d+$-P<e.clientY&&e.clientY<d+$)return}}e.preventDefault(),k.value||fe()}}function no(){var e;W.value=!0,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseEnterWrapper())}function ao(){var e;W.value=!1,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function io(){I.value||ne.value==="click"&&(O.value=!O.value)}function lo(e){if(I.value)return;e.preventDefault();const o=f=>{f.preventDefault(),Ce("mouseup",document,o)};if(ye("mouseup",document,o),ne.value!=="mousedown")return;O.value=!0;const t=()=>{O.value=!1,Ce("mouseup",document,t)};ye("mouseup",document,t)}function so(e){r.onKeyup&&y(r.onKeyup,e)}function co(e){switch(r.onKeydown&&y(r.onKeydown,e),e.key){case"Escape":ae();break;case"Enter":uo(e);break}}function uo(e){var o,t;if(r.passivelyActivated){const{value:f}=D;if(f){r.internalDeactivateOnEnter&&ae();return}e.preventDefault(),r.type==="textarea"?(o=s.value)===null||o===void 0||o.focus():(t=i.value)===null||t===void 0||t.focus()}}function ae(){r.passivelyActivated&&(D.value=!1,we(()=>{var e;(e=h.value)===null||e===void 0||e.focus()}))}function fe(){var e,o,t;I.value||(r.passivelyActivated?(e=h.value)===null||e===void 0||e.focus():((o=s.value)===null||o===void 0||o.focus(),(t=i.value)===null||t===void 0||t.focus()))}function ho(){var e;!((e=h.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function fo(){var e,o;(e=s.value)===null||e===void 0||e.select(),(o=i.value)===null||o===void 0||o.select()}function vo(){I.value||(s.value?s.value.focus():i.value&&i.value.focus())}function po(){const{value:e}=h;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ae()}function go(e){if(r.type==="textarea"){const{value:o}=s;o==null||o.scrollTo(e)}else{const{value:o}=i;o==null||o.scrollTo(e)}}function ie(e){const{type:o,pair:t,autosize:f}=r;if(!t&&f)if(o==="textarea"){const{value:v}=u;v&&(v.textContent=`${e??""}\r
`)}else{const{value:v}=c;v&&(e?v.textContent=e:v.innerHTML="&nbsp;")}}function bo(){Ie()}const ve=w({top:"0"});function mo(e){var o;const{scrollTop:t}=e.target;ve.value.top=`${-t}px`,(o=A.value)===null||o===void 0||o.syncUnifiedContainer()}let Y=null;me(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?Y=ue(F,t=>{!Array.isArray(t)&&t!==oe&&ie(t)}):Y==null||Y()});let J=null;me(()=>{r.type==="textarea"?J=ue(F,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=A.value)===null||o===void 0||o.syncUnifiedContainer())}):J==null||J()}),wr(Re,{mergedValueRef:F,maxlengthRef:ke,mergedClsPrefixRef:x,countGraphemesRef:ge(r,"countGraphemes")});const xo={wrapperElRef:h,inputElRef:i,textareaElRef:s,isCompositing:B,clear:he,focus:fe,blur:ho,select:fo,deactivate:po,activate:vo,scrollTo:go},wo=yr("Input",R,x),pe=_(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:t,borderRadius:f,textColor:v,caretColor:d,caretColorError:E,caretColorWarning:$,textDecorationColor:P,border:N,borderDisabled:K,borderHover:le,borderFocus:yo,placeholderColor:Co,placeholderColorDisabled:zo,lineHeightTextarea:Ao,colorDisabled:So,colorFocus:Ro,textColorDisabled:Fo,boxShadowFocus:_o,iconSize:Bo,colorFocusWarning:Eo,boxShadowFocusWarning:$o,borderWarning:Po,borderFocusWarning:To,borderHoverWarning:Io,colorFocusError:ko,boxShadowFocusError:Mo,borderError:Vo,borderFocusError:Wo,borderHoverError:Do,clearSize:Oo,clearColor:No,clearColorHover:Ko,clearColorPressed:Ho,iconColor:jo,iconColorDisabled:Uo,suffixTextColor:Lo,countTextColor:Go,countTextColorDisabled:Xo,iconColorHover:Yo,iconColorPressed:Jo,loadingColor:qo,loadingColorError:Qo,loadingColorWarning:Zo,fontWeight:er,[ce("padding",e)]:or,[ce("fontSize",e)]:rr,[ce("height",e)]:tr}}=b.value,{left:nr,right:ar}=Cr(or);return{"--n-bezier":o,"--n-count-text-color":Go,"--n-count-text-color-disabled":Xo,"--n-color":t,"--n-font-size":rr,"--n-font-weight":er,"--n-border-radius":f,"--n-height":tr,"--n-padding-left":nr,"--n-padding-right":ar,"--n-text-color":v,"--n-caret-color":d,"--n-text-decoration-color":P,"--n-border":N,"--n-border-disabled":K,"--n-border-hover":le,"--n-border-focus":yo,"--n-placeholder-color":Co,"--n-placeholder-color-disabled":zo,"--n-icon-size":Bo,"--n-line-height-textarea":Ao,"--n-color-disabled":So,"--n-color-focus":Ro,"--n-text-color-disabled":Fo,"--n-box-shadow-focus":_o,"--n-loading-color":qo,"--n-caret-color-warning":$,"--n-color-focus-warning":Eo,"--n-box-shadow-focus-warning":$o,"--n-border-warning":Po,"--n-border-focus-warning":To,"--n-border-hover-warning":Io,"--n-loading-color-warning":Zo,"--n-caret-color-error":E,"--n-color-focus-error":ko,"--n-box-shadow-focus-error":Mo,"--n-border-error":Vo,"--n-border-focus-error":Wo,"--n-border-hover-error":Do,"--n-loading-color-error":Qo,"--n-clear-color":No,"--n-clear-size":Oo,"--n-clear-color-hover":Ko,"--n-clear-color-pressed":Ho,"--n-icon-color":jo,"--n-icon-color-hover":Yo,"--n-icon-color-pressed":Jo,"--n-icon-color-disabled":Uo,"--n-suffix-text-color":Lo}}),M=S?zr("input",_(()=>{const{value:e}=ee;return e[0]}),pe,r):void 0;return Object.assign(Object.assign({},xo),{wrapperElRef:h,inputElRef:i,inputMirrorElRef:c,inputEl2Ref:p,textareaElRef:s,textareaMirrorElRef:u,textareaScrollbarInstRef:A,rtlEnabled:wo,uncontrolledValue:j,mergedValue:F,passwordVisible:O,mergedPlaceholder:re,showPlaceholder1:Ee,showPlaceholder2:$e,mergedFocus:te,isComposing:B,activated:D,showClearButton:Pe,mergedSize:ee,mergedDisabled:I,textDecorationStyle:Te,mergedClsPrefix:x,mergedBordered:n,mergedShowPasswordOn:ne,placeholderStyle:ve,mergedStatus:Be,textAreaScrollContainerWidth:de,handleTextAreaScroll:mo,handleCompositionStart:Ge,handleCompositionEnd:Xe,handleInput:G,handleInputBlur:Je,handleInputFocus:qe,handleWrapperBlur:Qe,handleWrapperFocus:Ze,handleMouseEnter:no,handleMouseLeave:ao,handleMouseDown:to,handleChange:eo,handleClick:oo,handleClear:ro,handlePasswordToggleClick:io,handlePasswordToggleMousedown:lo,handleWrapperKeydown:co,handleWrapperKeyup:so,handleTextAreaMirrorResize:bo,getTextareaScrollContainer:()=>s.value,mergedTheme:b,cssVars:S?void 0:pe,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender})},render(){var r,x;const{mergedClsPrefix:n,mergedStatus:S,themeClass:R,type:b,countGraphemes:h,onRender:s}=this,u=this.$slots;return s==null||s(),a("div",{ref:"wrapperElRef",class:[`${n}-input`,R,S&&`${n}-input--${S}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:b==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&b!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${n}-input-wrapper`},q(u.prefix,c=>c&&a("div",{class:`${n}-input__prefix`},c)),b==="textarea"?a(cr,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,i;const{textAreaScrollContainerWidth:p}=this,g={width:this.autosize&&p&&`${p}px`};return a(ur,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:h?void 0:this.maxlength,minlength:h?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style,g],onBlur:this.handleInputBlur,onFocus:T=>{this.handleInputFocus(T,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,g],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(dr,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${n}-input__input`},a("input",Object.assign({type:b==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":b},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(x=this.inputProps)===null||x===void 0?void 0:x.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:h?void 0:this.maxlength,minlength:h?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&q(u.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${n}-input__suffix`},[q(u["clear-icon-placeholder"],i=>(this.clearable||i)&&a(xe,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>i,icon:()=>{var p,g;return(g=(p=this.$slots)["clear-icon"])===null||g===void 0?void 0:g.call(p)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?a(Ar,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?a(Ae,null,{default:i=>{var p;const{renderCount:g}=this;return g?g(i):(p=u.count)===null||p===void 0?void 0:p.call(u,i)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?se(u["password-visible-icon"],()=>[a(ze,{clsPrefix:n},{default:()=>a(Rr,null)})]):se(u["password-invisible-icon"],()=>[a(ze,{clsPrefix:n},{default:()=>a(Fr,null)})])):null]):null)),this.pair?a("span",{class:`${n}-input__separator`},se(u.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${n}-input-wrapper`},a("div",{class:`${n}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:h?void 0:this.maxlength,minlength:h?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),q(u.suffix,c=>(this.clearable||c)&&a("div",{class:`${n}-input__suffix`},[this.clearable&&a(xe,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var i;return(i=u["clear-icon"])===null||i===void 0?void 0:i.call(u)},placeholder:()=>{var i;return(i=u["clear-icon-placeholder"])===null||i===void 0?void 0:i.call(u)}}),c]))):null,this.mergedBordered?a("div",{class:`${n}-input__border`}):null,this.mergedBordered?a("div",{class:`${n}-input__state-border`}):null,this.showCount&&b==="textarea"?a(Ae,null,{default:c=>{var i;const{renderCount:p}=this;return p?p(c):(i=u.count)===null||i===void 0?void 0:i.call(u,c)}}):null)}});export{Ir as N};
