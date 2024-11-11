"use strict";(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[6179],{36179:(e,t,n)=>{n.d(t,{T2:()=>te,Z8:()=>$,w2:()=>C,KM:()=>ge,Xp:()=>ne,ss:()=>fe,gN:()=>x,Lu:()=>ke,rN:()=>ue,s8:()=>v,Yw:()=>F,yR:()=>f,yA:()=>K,mp:()=>Q,in:()=>Y});var s=n(6293),i=n(64893),a=n(95122),r=n(31511),o=n(94184),l=n.n(o),c=n(92819),d=n(9576);function h({id:e,isVisible:t,children:n}){return(0,s.createElement)("div",{className:"itsec-site-scan__details",id:e,style:{display:t?"block":"none"}},(0,s.createElement)("ul",null,n))}function m({type:e,status:t,description:n,children:r}){const o=(0,d.useInstanceId)(m),[p,u]=(0,s.useState)(!1);let g;switch(t){case"clean":g=(0,a.__)("Clean","better-wp-security");break;case"warn":g=(0,a.__)("Warn","better-wp-security");break;case"error":g=(0,a.__)("Error","better-wp-security");break;default:g=t}const b=(0,s.createElement)("span",{className:`itsec-site-scan__status itsec-site-scan__status--${t}`},g);return(0,s.createElement)("div",{className:l()("itsec-site-scan-results-section",`itsec-site-scan-results-${e}-section`)},(0,c.isEmpty)(r)?(0,s.createElement)("p",null,b," ",n):(0,s.createElement)(s.Fragment,null,(0,s.createElement)("p",null,b,n,(0,s.createElement)(i.Button,{variant:"link",className:"itsec-site-scan-toggle-details",onClick:()=>u(!p),"aria-expanded":p,"aria-controls":`itsec-site-scan__details--${o}`},p?(0,a.__)("Hide Details","better-wp-security"):(0,a.__)("Show Details","better-wp-security"))),(0,s.createElement)(h,{id:`itsec-site-scan__details--${o}`,isVisible:p},r)))}const p=function({results:e,showErrorDetails:t=!1}){const n=e;return(0,s.createElement)(m,{status:"error",description:(0,a.__)("The scan failed to properly scan the site.","better-wp-security")},(0,s.createElement)("p",null,(0,a.sprintf)((0,a.__)("Error Message: %s","better-wp-security"),n.getErrorMessage())),(0,s.createElement)("p",null,(0,a.sprintf)((0,a.__)("Error Code: %s","better-wp-security"),n.getErrorCode())),t&&n.getErrorData()&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)("p",null,(0,a.__)("If you contact support about this error, please provide the following debug details:","better-wp-security")),(0,s.createElement)("pre",null,JSON.stringify({code:n.getErrorCode(),data:n.getErrorData()},null,2))))};function u({status:e,children:t}){return(0,s.createElement)("li",{className:`itsec-site-scan__detail itsec-site-scan__detail--${e}`},(0,s.createElement)("span",null,t))}const g=function({results:e}){return e.errors.length>0&&(0,s.createElement)(m,{type:"system-error",status:"error",description:(0,a.__)("The scan failed to properly scan the site.","better-wp-security")},e.errors.map(((e,t)=>(0,s.createElement)(u,{key:t,status:"error"},e.message))))},b=function({results:e,entry:t}){let n=(0,c.get)(e,["_embedded","ithemes-security:site-scan-issues",0],[]);return(0,c.isArray)(n)||(n=[]),(0,s.createElement)(m,{type:"malware",status:t.status,description:t.title},n.filter((e=>e.entry===t.slug)).map(((e,t)=>(0,s.createElement)(u,{key:t,status:e.status},(0,s.createElement)("a",{href:e.link},e.description)))))},f=function({results:e,showSiteUrl:t=!0,showErrorDetails:n=!0}){const i=e.url;let o;return(0,r.ZE)(e)?o=(0,r.NC)(e):"error"===e.code&&(o=(0,r.NC)(e.errors[0])),(0,s.createElement)("div",{className:"itsec-site-scan-results"},t&&i&&(0,s.createElement)("h4",null,(0,a.sprintf)((0,a.__)("Site: %s","better-wp-security"),i)),o?(0,s.createElement)(p,{results:o,showErrorDetails:n}):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(g,{results:e}),e.entries.map(((t,n)=>(0,s.createElement)(b,{results:e,entry:t,key:n})))))};function v({json:e}){return(0,s.createElement)("pre",{className:"itsec-component-print-r"},E((0,c.cloneDeep)(e)))}function E(e,t=10,n=0,i=!0){if((0,c.isString)(e))return 0===e.length?(0,s.createElement)("strong",null,"[empty string]"):e;if((0,c.isNumber)(e))return(0,s.createElement)("strong",null,`[number] ${e}`);if((0,c.isBoolean)(e))return(0,s.createElement)("strong",null,e?"[boolean] true":"[boolean] false");if(null==e)return(0,s.createElement)("strong",null,"null");if((0,c.isArray)(e)||(0,c.isPlainObject)(e)){const a=[];if(i&&a.push((0,s.createElement)("strong",{key:"header"},"Array")),0===(0,c.size)(e))return a.push("()"),a;if(n===t)return a.push(`(${e.length})`),a;let r=0;for(const t of(0,c.keys)(e))t.length>r&&(r=t.length);const o=y(n);return(0,c.forEach)(e,((e,i)=>{a.push((0,s.createElement)(s.Fragment,{key:i},"\n",o,i,y(r-(0,c.toString)(i).length," "),"  ",(0,s.createElement)("strong",null,"=>")," ",E(e,t,n+1)))})),a}return(0,s.createElement)("strong",null,"[*]")}function y(e,t="    "){let n="";for(let s=0;s<=e;s++)n+=t;return n}var _=n(4942);const N=()=>{};class k extends s.Component{constructor(e){super(e),this.state={isHovering:!1},this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.setIsHovering=this.setIsHovering.bind(this),this.unsetIsHovering=this.unsetIsHovering.bind(this),this.componentWillUnmount=this.componentWillUnmount.bind(this),this.timerIds=[]}onMouseEnter(e){this.props.onMouseEnter({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}onMouseLeave(e){this.props.onMouseLeave({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}onMouseOver(e){this.props.onMouseOver({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}onMouseOut(e){this.props.onMouseOut({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}componentWillUnmount(){this.clearTimers()}setIsHovering(){this.clearTimers();const e=setTimeout((()=>{const e={isHovering:!0};this.setState(e,(()=>{this.props.onHoverChanged(e)}))}),this.props.hoverDelayInMs);this.timerIds.push(e)}unsetIsHovering(){this.clearTimers();const e=setTimeout((()=>{const e={isHovering:!1};this.setState(e,(()=>{this.props.onHoverChanged(e)}))}),this.props.hoverOffDelayInMs);this.timerIds.push(e)}clearTimers(){const e=this.timerIds;for(;e.length;)clearTimeout(e.pop())}render(){const{children:e,className:t}=this.props;return(0,s.createElement)("div",{className:t,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},e)}}(0,_.Z)(k,"displayName","HoverDetector"),(0,_.Z)(k,"defaultProps",{hoverDelayInMs:0,hoverOffDelayInMs:0,onHoverChanged:N,onMouseEnter:({setIsHovering:e})=>e(),onMouseLeave:({unsetIsHovering:e})=>e(),onMouseOver:N,onMouseOut:N,shouldDecorateChildren:!0}),n(60976);var I=n(87462);function C({value:e,onChange:t,options:n,label:a,help:r,disabled:o,readOnly:d,className:h,style:m,hideLabelFromVision:p}){let u,g;return(0,c.isArray)(e)?(u=t=>e.includes(t.value),g=n=>s=>t(s?[...e,n.value]:e.filter((e=>e!==n.value)))):(u=t=>e[t.value]||!1,g=n=>s=>t({...e,[n.value]:s})),(0,s.createElement)("fieldset",{className:l()("components-base-control",h,m&&`itsec-components-checkbox-group-control--style-${m}`)},(0,s.createElement)("div",{className:"components-base-control__field"},p&&(0,s.createElement)(i.VisuallyHidden,null,a),!p&&(0,s.createElement)("legend",{className:"components-base-control__label"},a),r&&(0,s.createElement)("p",{className:"components-base-control__help"},r),(0,s.createElement)("div",{className:"itsec-components-checkbox-group-control__options"},n.map((e=>(0,s.createElement)(i.CheckboxControl,(0,I.Z)({},(0,c.omit)(e,["value","disabled","readOnly"]),{key:e.value,checked:u(e),onChange:g(e),disabled:o||e.disabled,readOnly:d||e.readOnly,className:u(e)&&"itsec-components-checkbox-group-control__option--is-checked",__nextHasNoMarginBottom:!0})))))))}var w=n(59588),T=n.n(w);let S,L;S=Symbol.iterator;class M{constructor(e,t,n,s=null,i=[]){(0,_.Z)(this,"tree",void 0),(0,_.Z)(this,"name",void 0),(0,_.Z)(this,"data",void 0),(0,_.Z)(this,"parent",void 0),(0,_.Z)(this,"children",void 0),this.tree=e,this.name=t,this.data=n,this.parent=s,this.children=i}getParent(){return this.parent?this.tree.nodes[this.parent]:null}getAllParents(){const e=[];let t=this.getParent();for(;t;)e.push(t.name),t=t.getParent();return e}hasChildren(){return this.children.length>0}getAllChildren(){const e=[];if(!this.hasChildren())return e;for(const t of this)e.push(t.name,...t.getAllChildren());return e}*[S](){for(let e=0;e<this.children.length;e++){const t=this.children[e];yield this.tree.nodes[t]}}}L=Symbol.iterator;class H{constructor(){(0,_.Z)(this,"nodes",{}),(0,_.Z)(this,"ordered",[])}add(e,t,n=null){this.ordered.push(e),this.nodes[e]?(this.nodes[e].data=t,this.nodes[e].parent=n):this.nodes[e]=new M(this,e,t,n),n&&(this.nodes[n]?this.nodes[n].children.push(e):this.nodes[n]=new M(this,n))}*[L](){for(let e=0;e<this.ordered.length;e++){const t=this.ordered[e];this.nodes[t].parent||(yield this.nodes[t])}}}const D=T()((e=>{const t=new H;for(const n of e)t.add(n.value,n,n.parent);return t}));class O extends s.Component{constructor(){super(...arguments),(0,_.Z)(this,"props",void 0),this.renderOption=this.renderOption.bind(this),this.isChecked=this.isChecked.bind(this),this.isIndeterminate=this.isIndeterminate.bind(this),this.onChange=this.onChange.bind(this)}indeterminate(e){e.indeterminate=!0}isChecked(e){return!!e&&((0,c.isArray)(this.props.value)?this.props.value.includes(e.name)||this.isChecked(e.getParent()):this.props.value[e.name]||this.isChecked(e.getParent()))}isIndeterminate(e){if(!e.hasChildren())return!1;for(const t of e){if(this.isChecked(t))return!0;if(this.isIndeterminate(t))return!0}return!1}onChange(e,t){const n=[e.name,...e.getAllChildren()],s=t?[]:e.getAllParents();if((0,c.isArray)(this.props.value)){let e;e=t?[...this.props.value,...n]:this.props.value.filter((e=>!n.includes(e)&&!s.includes(e))),this.props.onChange(e)}else this.props.onChange({...this.props.value,...n.reduce(((e,n)=>e[n]=t),{}),...s.reduce(((e,t)=>e[t]=!1),{})})}render(){const{label:e,help:t,options:n}=this.props,i=D(n);return(0,s.createElement)("div",{className:"components-base-control"},(0,s.createElement)("div",{className:"components-base-control__field"},(0,s.createElement)("div",{className:"components-base-control__label"},e),t&&(0,s.createElement)("p",{className:"components-base-control__help"},t)),(0,s.createElement)("ul",{className:"components-hierarchical-checkbox-control__group"},Array.from(i,this.renderOption)))}renderOption(e){const{value:t,selectable:n=!0,...a}=e.data,r=this.isChecked(e),o=!r&&this.isIndeterminate(e);return(0,s.createElement)("li",{key:t,className:l()("components-hierarchical-checkbox-control__option",{"components-hierarchical-checkbox-control__option--has-children":e.hasChildren()})},(0,s.createElement)(i.CheckboxControl,(0,I.Z)({},a,{checked:!!n&&r,disabled:!n||this.props.disabled,indeterminate:o,onChange:t=>this.onChange(e,t)})),e.hasChildren()&&(0,s.createElement)("ul",{className:"components-hierarchical-checkbox-control__group"},Array.from(e,this.renderOption)))}}const x=O;var P=n(48015);(0,d.compose)([(0,P.withSelect)(((e,{context:t="ithemes-security"})=>({notices:e("core/notices").getNotices(t)}))),(0,P.withDispatch)(((e,{context:t="ithemes-security"})=>({onRemove:n=>e("core/notices").removeNotice(n,t)})))])((function({notices:e,onRemove:t}){const n=(0,c.filter)(e,(e=>e.isDismissible&&(!e.type||"default"===e.type))),a=(0,c.filter)(e,(e=>!(e.isDismissible||e.type&&"default"!==e.type))),r=(0,c.filter)(e,{type:"snackbar"});return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(i.NoticeList,{notices:a,className:"components-editor-notices__pinned"}),(0,s.createElement)(i.NoticeList,{notices:n,className:"components-editor-notices__dismissible",onRemove:t}),i.SnackbarList&&(0,s.createElement)(i.SnackbarList,{notices:r,className:"components-editor-notices__snackbar",onRemove:t}))}));const Z=function({className:e,status:t,children:n,onRemove:r=c.noop,isDismissible:o=!0,actions:d=[]}){const h=l()(e,"notice","notice-alt","notice-"+t,{"is-dismissible":o});return(0,s.createElement)("div",{className:h},(0,s.createElement)("p",null,n,d.map((({className:e,label:t,onClick:n,url:a,isLink:o=!1},c)=>(0,s.createElement)(i.Button,{key:c,href:a,isSmall:!o&&!a,variant:(a||o)&&"link",onClick:a?void 0:()=>{r(),n()},className:l()("notice__action",e)},t)))),o&&(0,s.createElement)("button",{type:"button",className:"notice-dismiss",onClick:r},(0,s.createElement)("span",{className:"screen-reader-text"},(0,a.__)("Dismiss this notice","better-wp-security"))))};(0,d.compose)([(0,P.withSelect)(((e,{context:t="ithemes-security"})=>({notices:e("core/notices").getNotices(t)}))),(0,P.withDispatch)(((e,{context:t="ithemes-security"})=>({onRemove:n=>e("core/notices").removeNotice(n,t)})))])((function({notices:e,onRemove:t}){const n=function(e){if(!i.SnackbarList)return e.length;let t=0;for(const n of e)"snackbar"!==n.type&&t++;return t}(e),a=function(e){const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=e})),t.current}(n);(0,s.useEffect)((()=>{n>a&&window.itsecSettingsPage&&window.itsecSettingsPage.scrollTop()}),[n,a]);const r=i.SnackbarList?(0,c.filter)(e,{type:"snackbar"}):[];return(0,s.createElement)(s.Fragment,null,(0,s.createElement)("div",{className:"itsec-module-settings-notice-list"},e.map((e=>{return"snackbar"===e.type&&i.SnackbarList?null:(0,s.createElement)(Z,(0,I.Z)({},(0,c.omit)(e,["content"]),{key:e.id,onRemove:(n=e.id,()=>t(n))}),e.content);var n}))),i.SnackbarList&&(0,s.createElement)(i.SnackbarList,{notices:r,className:"components-editor-notices__snackbar",onRemove:t}))}));var A=n(11984),R=n(28184),B=n(79526);function $({id:e,label:t,hideLabelFromVision:n,className:a,heading:r,checked:o,help:c,onChange:h,indeterminate:m,...p}){const u=(0,d.useInstanceId)($);return e=e||`itsec-inspector-checkbox-control-${u}`,(0,s.createElement)(i.BaseControl,{label:r,id:e,help:c,className:l()("components-checkbox-control",a)},(0,s.createElement)("span",{className:"components-checkbox-control__input-container"},(0,s.createElement)("input",(0,I.Z)({id:e,className:l()("components-checkbox-control__input",{"components-checkbox-control__input--indeterminate":m}),type:"checkbox",value:"1",onChange:e=>h(e.target.checked),checked:o,"aria-describedby":c?e+"__help":void 0},p,{ref:e=>e&&(e.indeterminate=m)})),o&&(0,s.createElement)(A.Z,{icon:R.Z,className:"components-checkbox-control__checked",role:"presentation"}),m&&(0,s.createElement)(A.Z,{icon:B.Z,className:"components-checkbox-control__checked",role:"presentation"})),t&&(n?(0,s.createElement)(i.VisuallyHidden,{as:"label",htmlFor:e},t):(0,s.createElement)("label",{className:"components-checkbox-control__label",htmlFor:e},t)))}function F({help:e,label:t,multiple:n=!1,onChange:a,options:r=[],className:o,hideLabelFromVision:l,__nextHasNoMarginBottom:h,...m}){const p=`inspector-select-control-${(0,d.useInstanceId)(F)}`,u=(0,c.groupBy)(r,"optgroup");return!(0,c.isEmpty)(r)&&(0,s.createElement)(i.BaseControl,{label:t,hideLabelFromVision:l,id:p,help:e,className:o,__nextHasNoMarginBottom:h},(0,s.createElement)("select",(0,I.Z)({id:p,className:"components-select-control__input",onChange:e=>{if(n){const t=[...e.target.options].filter((({selected:e})=>e)).map((({value:e})=>e));a(t)}else a(e.target.value)},"aria-describedby":e?`${p}__help`:void 0,multiple:n},m),(0,c.map)(u,((e,t)=>{const n=e.map(((e,t)=>(0,s.createElement)("option",{key:`${e.label}-${e.value}-${t}`,value:e.value,disabled:e.disabled},e.label)));return"undefined"===t?n:(0,s.createElement)("optgroup",{label:t,key:t},n)}))))}function K({value:e,onChange:t,...n}){(0,c.isArray)(e)||(e=(0,c.isString)(e)?[e]:[]);const[a,r]=(0,s.useState)(e.join("\n"));return e.join("\n").trim()!==a.trim()&&r(e.join("\n")),(0,s.createElement)(i.TextareaControl,(0,I.Z)({value:a,onChange:e=>{r(e),t(e.split("\n").map((e=>e.trim())).filter((e=>e.length>0)))}},n))}function V({tabId:e,onClick:t,children:n,selected:a,...r}){return(0,s.createElement)(i.Button,(0,I.Z)({role:"tab",tabIndex:a?null:-1,"aria-selected":a,id:e,onClick:t},r),n)}class U extends s.Component{constructor(){super(...arguments),this.handleClick=this.handleClick.bind(this),this.onNavigate=this.onNavigate.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}handleClick(e){const{onSelect:t=c.noop}=this.props;t(e)}onNavigate(e,t){const n=this.event;n&&"tab"===n.target.getAttribute("role")&&n.preventDefault(),t.click()}onKeyDown(e){this.event=e}render(){const{activeClass:e="is-active",className:t,instanceId:n,orientation:a="horizontal",tabs:r,selected:o,isStyled:d}=this.props,h=(0,c.find)(r,{name:o})||r[0],m=n+"-"+h.name;return(0,s.createElement)("div",{className:l()("itsec-tab-panel",t,{"itsec-tab-panel--styled":d})},(0,s.createElement)(i.NavigableMenu,{role:"tablist",orientation:a,onNavigate:this.onNavigate,onKeyDown:this.onKeyDown,className:"components-tab-panel__tabs"},r.map((t=>(0,s.createElement)(V,{className:l()("itsec-tab-panel__tab",t.className,{[e]:t.name===h.name}),tabId:n+"-"+t.name,"aria-controls":n+"-"+t.name+"-view",selected:t.name===h.name,key:t.name,onClick:(0,c.partial)(this.handleClick,t.name)},t.title)))),h&&(0,s.createElement)("div",{"aria-labelledby":m,role:"tabpanel",id:m+"-view",className:"components-tab-panel__tab-content",tabIndex:"0"},this.props.children(h)))}}(0,d.withInstanceId)(U);var z=n(81834),W=n.n(z),j=n(65813);class G extends s.Component{constructor(){super(...arguments),this.handleClick=this.handleClick.bind(this),this.onNavigate=this.onNavigate.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.toggleTab=this.toggleTab.bind(this),this.getSelectedTabs=this.getSelectedTabs.bind(this),this.isSelected=this.isSelected.bind(this),this.getSelectedId=this.getSelectedId.bind(this),this.getLabelledBy=this.getLabelledBy.bind(this),this.getTabId=this.getTabId.bind(this),this.getTabPanelId=this.getTabPanelId.bind(this),this.isTabDisabled=this.isTabDisabled.bind(this),this.isNonMultiSelectableTabSelected=this.isNonMultiSelectableTabSelected.bind(this)}handleClick(e,t){t.metaKey||t.ctrlKey?this.toggleTab(e):this.props.onSelect([e])}onNavigate(e,t){const n=this.event;if(n){if("tab"===n.target.getAttribute("role")&&n.preventDefault(),n.ctrlKey)return;if(n.shiftKey){if(this.isTabDisabled(this.props.tabs[e]))return;const t=this.props.tabs[e].name;return void this.toggleTab(t)}}t.click()}onKeyDown(e){if(!e.nativeEvent&&(this.event=e,e.ctrlKey&&("Space"===e.code||32===e.keyCode))){e.preventDefault();const t=e.target.dataset.tabname;t&&this.toggleTab(t)}}toggleTab(e){const t=(0,c.find)(this.props.tabs,{name:e});t&&!1===t.allowMultiple||(this.props.selected.includes(e)?this.props.onSelect(this.props.selected.filter((t=>t!==e))):this.props.onSelect([...this.props.selected,e]))}getSelectedTabs(){const e=this.props.selected;!e.length&&this.props.initialTab&&e.push(this.props.initialTab);const t=[];return this.props.tabs.forEach((e=>{this.props.selected.includes(e.name)&&t.push(e)})),t}isSelected(e,t){return e.some((e=>e.name===t.name))}isTabDisabled(e){const{pressedModifierKeys:t}=this.props;if(this.props.selected.includes(e.name))return!1;if(!1!==e.allowMultiple&&!this.isNonMultiSelectableTabSelected())return!1;if(t.meta||t.ctrl)return!0;if(t.shift){const{activeElement:e}=document;if(e.parentElement&&e.parentElement.id===`components-tab-panel__tabs-${this.props.instanceId}`)return!0}return!1}isNonMultiSelectableTabSelected(){if(1!==this.props.selected.length)return!1;const e=(0,c.find)(this.props.tabs,{name:this.props.selected[0]});return e&&!1===e.allowMultiple}getSelectedId(e){return 1===e.length?this.getTabPanelId(e[0].name):`components-tab-panel__panel-${this.props.instanceId}-${(0,c.map)(e,"name").join("-")}`}getLabelledBy(e){return e.map((e=>this.getTabId(e.name))).join(",")}getTabId(e){return`components-tab-panel__tab-${this.props.instanceId}-${e}`}getTabPanelId(e){return`components-tab-panel__panel-${this.props.instanceId}-${e}`}componentDidUpdate(e){if(1!==this.props.selected.length)return;if(!W()(this.props.selected,e.selected))return;const t=this.props.selected[0];if((0,c.find)(this.props.tabs,{name:t}))return;const n=(0,c.findIndex)(e.tabs,{name:t});if(-1===n)return;const s=Math.max(n-1,0),i=this.props.tabs[s];i&&this.props.onSelect([i.name])}render(){const{tabs:e,className:t,activeClass:n="is-active",orientation:a="horizontal"}=this.props,r=this.getSelectedTabs(),o=this.getSelectedId(r);return(0,s.createElement)("div",{className:t},(0,s.createElement)(i.NavigableMenu,{role:"tablist","aria-multiselectable":!0,orientation:a,onNavigate:this.onNavigate,onKeyDown:this.onKeyDown,className:"components-tab-panel__tabs",id:`components-tab-panel__tabs-${this.props.instanceId}`},e.map((e=>{const t=this.isSelected(r,e),i=t&&r.length>1?o:this.getTabPanelId(e.name);return(0,s.createElement)(V,{className:l()(e.className,{[n]:t}),tabId:this.getTabId(e.name),"aria-controls":i,selected:t,disabled:this.isTabDisabled(e),key:e.name,onClick:(0,c.partial)(this.handleClick,e.name),"data-tabname":e.name},e.title)}))),r.length>0&&(0,s.createElement)("div",{"aria-labelledby":this.getLabelledBy(r),role:"tabpanel",id:o,className:"components-tab-panel__tab-content",tabIndex:"0"},this.props.children(r)))}}(0,d.compose)([d.withInstanceId,j.lo])(G);var q=n(64239),J=n(81019);function Y(e,t,n=void 0){for(let s=0;s<e.length;s++){const i=t(e[s],n,s);if(i!==Y.skip){if(i===Y.halt)return i;if((0,c.isArray)(e[s].children)&&Y.halt===Y(e[s].children,t,e[s]))return Y.halt}}}function Q({id:e,tree:t,active:n,setActive:a,onActivate:r,onLoad:o,label:l,help:c,...d}){const h=(0,s.useRef)(),m=(0,s.useMemo)((()=>{const e={};return Y(t,((t,n,s)=>{e[t.id]={item:t,index:s,parent:n?.id}})),e}),[t]),[p,u]=(0,s.useState)([]),[g,b]=(0,s.useState)([]),f=e+"__item__",v=async e=>{!0===e.children&&o&&(b((t=>[...t,e.id])),await o(e.id),b((t=>t.filter((t=>t!==e.id))))),u((t=>t.includes(e.id)?t.filter((t=>t!==e.id)):[...t,e.id]))};return(0,s.createElement)(i.BaseControl,{help:c,className:"itsec-tree"},(0,s.createElement)("span",{className:"components-base-control__label",id:e+"__tree_label"},l),(0,s.createElement)("ul",(0,I.Z)({ref:h,id:e,role:"tree",tabIndex:0,onKeyDown:async e=>{d.onKeyDown&&d.onKeyDown(e);const{keyCode:s}=e;if(r&&[J.ENTER,J.SPACE].includes(s)&&r(n),![J.UP,J.DOWN,J.RIGHT,J.LEFT].includes(s))return;e.stopPropagation(),e.preventDefault();const i=m[n];if(!i)return void a(t[0].id);const{item:o,parent:l}=i;let c;switch(s){case J.UP:c=function(e,t,n){let s;return Y(e,(e=>e.id===t?Y.halt:(s=e,!1===e.children||n.includes(e.id)?void 0:Y.skip))),s}(t,o.id,p)?.id;break;case J.DOWN:c=function(e,t,n){let s,i=!1;return Y(e,(e=>(s=e,i?Y.halt:(e.id===t&&(i=!0),!1===e.children||n.includes(e.id)?void 0:Y.skip)))),s}(t,o.id,p)?.id;break;case J.RIGHT:o.children&&(p.includes(o.id)?c=o.children?.[0].id:await v(o));break;case J.LEFT:o.children&&p.includes(o.id)?await v(o):c=l}if(c&&(a(c),h.current)){const e=h.current.ownerDocument.getElementById(f+c);e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded():(0,q.Z)(e,{scrollMode:"if-needed"})}},onFocus:n?void 0:()=>a(t[0].id),"aria-activedescendant":n?f+n:void 0,"aria-labelledby":e+"__tree_label"},d),t.map((e=>(0,s.createElement)(X,{key:e.id,idBase:f,active:n,setActive:a,expandedIds:p,onToggle:v,loadingIds:g,item:e})))))}function X(e){const{idBase:t,item:n,expandedIds:i,loadingIds:a,onToggle:r,active:o,setActive:c}=e,d=!!n.children,h=i.includes(n.id);return(0,s.createElement)("li",{id:t+n.id,role:"treeitem","aria-selected":o===n.id?"true":void 0,"aria-expanded":d?h:void 0,className:l()("itsec-tree__item",{"itsec-tree__item--loading":a.includes(n.id)})},(0,s.createElement)("span",{onClick:async()=>{await r(n),c(n.id)},"aria-label":n.label},n.label),d&&n.children.length>0&&(0,s.createElement)("ul",{role:"group"},n.children.map((t=>(0,s.createElement)(X,(0,I.Z)({key:t.id},e,{item:t}))))))}Y.halt=Symbol("halt"),Y.skip=Symbol("skip");const ee=["group","treeitem","option","menuitem","tab"].join(" "),te=(0,s.forwardRef)((function({active:e,onKeyDown:t=c.noop,onNavigate:n,orientation:i="vertical",cycle:a=!0,descendantRoles:r=ee,as:o="div",children:l,...d},h){const m=(0,s.useRef)();return(0,s.useImperativeHandle)(h,(()=>({focus(){m.current.focus()}}))),(0,s.createElement)(o,(0,I.Z)({ref:m,tabIndex:0,"aria-activedescendant":e,"aria-orientation":i,onKeyDown:s=>{const o=function(e,t){let n=[J.DOWN],s=[J.UP];return"horizontal"===t&&(n=[J.RIGHT],s=[J.LEFT]),"both"===t&&(n=[J.RIGHT,J.DOWN],s=[J.LEFT,J.UP]),(0,c.includes)(n,e)?1:(0,c.includes)(s,e)?-1:(0,c.includes)([J.DOWN,J.UP,J.LEFT,J.RIGHT],e)?0:void 0}(s.keyCode,i);if(t(s,o),void 0===o)return;s.stopPropagation(),s.preventDefault();const l=function(e,t){const n=t.split(" ").map((e=>`[role="${e}"]`)).join(", ");return e.querySelectorAll(n)}(m.current,r),d=(0,c.findIndex)(l,{id:e}),h=a?function(e,t,n){const s=e+n;return s<0?t+s:s>=t?s-t:s}(d,l.length,o):d+o;if(h>=0&&h<l.length){const e=l[h];!function(e,t){if(t.scrollIntoViewIfNeeded)return void t.scrollIntoViewIfNeeded();const n=e.ownerDocument.defaultView.getComputedStyle(e),s=parseInt(n.getPropertyValue("border-top-width")),i=t.offsetTop-e.offsetTop<e.scrollTop,a=t.offsetTop-e.offsetTop+t.clientHeight-s>e.scrollTop+e.clientHeight;(i||a)&&(e.scrollTop=t.offsetTop-e.offsetTop-e.clientHeight/2-s+t.clientHeight/2,e.scrollLeft=0)}(m.current,e),n(e.id)}}},d),l)}));function ne(){return(0,s.createElement)("div",{style:{flexGrow:1},"aria-hidden":!0,className:"itsec-component-flex-spacer"})}var se=n(52117);const ie=(0,se.Z)(i.Dashicon,{shouldForwardProp:e=>"size"!==e&&"padding"!==e,target:"e18ui1vf0"})("border-radius:50%;font-size:calc(",(({size:e})=>e)," - (",(({padding:e})=>e)," * 2));padding:",(({padding:e})=>e),";padding-left:calc(",(({padding:e})=>e)," + 0.5px);background:",(({theme:e})=>e.colors.primary.base),";color:#ffffff;");function ae({size:e=20,className:t}){const n=`var(--itsec-recommended-icon-size, ${"number"==typeof e?`${e}px`:e})`,i=`calc(${n} / 5)`;return(0,s.createElement)(ie,{className:t,icon:"star-filled",size:n,padding:i})}const re={error:{primary:"#551515",secondary:"#F7ABAB",icon:"warning"},info:{primary:"#005169",secondary:"#ecfaff",icon:"info"},warning:{primary:"#a9582e",secondary:"#fdddcd",icon:"flag"},success:{primary:"#237739",secondary:"#ddf1e2",icon:"yes-alt"}},oe=(0,se.Z)("div",{target:"emrfwy26"})("display:flex;padding:.75rem .5rem;border-radius:4px;margin-bottom:",(({noMargins:e})=>!e&&"1rem"),";background:",(({type:e})=>re[e].secondary),";border:",(({type:e,hasBorder:t})=>t&&`1px solid ${re[e].primary}`),";"),le=(0,se.Z)("h3",{target:"emrfwy25"})("font-size:1.25rem;margin:0 0 0.5rem 0;color:",(({type:e})=>re[e].primary),";"),ce=(0,se.Z)(i.Dashicon,{shouldForwardProp:e=>"type"!==e,target:"emrfwy24"})("color:",(({type:e})=>re[e].primary),";margin-right:0.5rem;"),de=(0,se.Z)(ae,{target:"emrfwy23"})({name:"u7ytkp",styles:"margin-right:0.5rem"}),he=(0,se.Z)("ul",{target:"emrfwy22"})({name:"ti75j2",styles:"margin:0"}),me=(0,se.Z)("li",{target:"emrfwy21"})("margin:0 0 0.25rem 0;color:",(({type:e})=>re[e].primary),";&:last-child{margin-bottom:0;}"),pe=(0,se.Z)(i.Button,{shouldForwardProp:e=>"type"!==e,target:"emrfwy20"})("margin-left:auto;padding:0!important;min-width:0!important;min-height:0!important;height:min-content!important;&:hover{color:",(({theme:e})=>e.colors.primary.base),";}.dashicon{color:",(({type:e})=>re[e].primary),";margin-left:0;margin-right:0;&:hover{color:",(({theme:e})=>e.colors.primary.base),";}}");function ue({type:e="info",title:t,messages:n=[],className:i,onDismiss:a,hasBorder:r,recommended:o,noMargins:d}){return(n=(0,c.castArray)(n)).length?(0,s.createElement)(oe,{type:e,hasBorder:r,recommended:o,noMargins:d,className:l()("itsec-message-list",`itsec-message-list--type-${e}`,i)},o?(0,s.createElement)(de,null):(0,s.createElement)(ce,{icon:re[e].icon,type:e}),(0,s.createElement)("div",null,t&&(0,s.createElement)(le,null,t),(0,s.createElement)(he,null,n.map(((t,n)=>(0,s.createElement)(me,{key:n,type:e},t))))),a&&(0,s.createElement)(pe,{icon:"dismiss",type:e,onClick:a})):null}function ge({errors:e,apiError:t,schemaError:n,title:i,className:a,hasBorder:o,noMargins:l}){const c=[...e||[],...(0,r.Y3)(t),...(n||[]).map((e=>e.stack))];return c.length?(0,s.createElement)(ue,{messages:c,title:i,className:a,hasBorder:o,noMargins:l,type:"error"}):null}var be=n(31600);function fe({topic:e,fallback:t}){const n=(0,P.useSelect)((e=>e(be.HELP_STORE_NAME).isEnabled()));return void 0===n?null:n?(0,s.createElement)(Ee,{topic:e,fallback:t}):(0,s.createElement)(ve,null)}function ve(){const[e,t]=(0,s.useState)(!0),[n,r]=(0,s.useState)(!1),{enableHelp:o}=(0,P.useDispatch)(be.HELP_STORE_NAME);return e&&(0,s.createElement)(i.Modal,{title:(0,a.__)("Privacy Notice","better-wp-security"),onRequestClose:()=>t(!1),className:"itsec-help-list__enable-modal"},(0,s.createElement)("p",null,(0,a.__)("Loading help remotely requires making an API request to iThemes.com. Only the requested help topic is transmitted.","better-wp-security")),(0,s.createElement)("footer",null,(0,s.createElement)("a",{href:"https://go.solidwp.com/privacy-policy"},(0,a.__)("Privacy Policy","better-wp-security")),(0,s.createElement)(i.Button,{isBusy:n,onClick:async()=>{r(!0),await o(),r(!1)},variant:"primary"},(0,a.__)("Continue","better-wp-security"))))}function Ee({topic:e,fallback:t}){const{help:n,isLoaded:i,fallbackHelp:r,fallbackLoaded:o}=(0,P.useSelect)((n=>({help:n(be.HELP_STORE_NAME).getHelp(e),isLoaded:n(be.HELP_STORE_NAME).hasFinishedResolution("getHelp",[e]),fallbackHelp:t?n(be.HELP_STORE_NAME).getHelp(t):[],fallbackLoaded:!t||n(be.HELP_STORE_NAME).hasFinishedResolution("getHelp",[t])})));if(!i||!o)return null;const l=(0,c.groupBy)([...n,...r],"type");return(0,s.createElement)(React.Fragment,null,(0,s.createElement)(ye,{title:(0,a.__)("Help Center","better-wp-security"),icon:"sos",link:"https://help.ithemes.com/hc/en-us/categories/200147050/",items:l.hc}),(0,s.createElement)(ye,{title:(0,a.__)("Blog","better-wp-security"),icon:"book-alt",link:"https://ithemes.com/blog/",items:l.post}),(0,s.createElement)(ye,{title:(0,a.__)("Video","better-wp-security"),icon:"youtube",link:"https://www.youtube.com/channel/UCYSDQEcxAppePTn5E7iNpFg",items:l.video}))}function ye({title:e,icon:t,link:n,items:r}){return(0,s.createElement)(i.Card,{className:l()("itsec-help-list-section",{"itsec-help-list-section--has-content":!!r})},(0,s.createElement)("header",null,(0,s.createElement)("a",{href:n},(0,s.createElement)(i.Dashicon,{icon:t,className:"itsec-help-list-section__icon"}),(0,s.createElement)("h3",null,e),(0,s.createElement)(i.Dashicon,{icon:"arrow-right-alt",className:"itsec-help-list-section__more"}))),(0,s.createElement)("section",null,r?r.map((e=>(0,s.createElement)("article",{key:e.title},(0,s.createElement)("a",{href:e.link},(0,s.createElement)("h4",null,e.title),(0,s.createElement)(ke,{content:e.description,tagName:"p"}))))):(0,s.createElement)("p",null,(0,a.__)("No relevant content at this time.","better-wp-security"))))}var _e=n(63108),Ne=n(73727);function ke({transform:e,...t}){return(0,s.createElement)(_e.Lu,(0,I.Z)({},t,{transform:(n,i)=>{if(e){const t=e(n,i);if(void 0!==t)return t}if("a"===n.tagName.toLowerCase()&&n.dataset.itsecPath&&!t.noHtml)return(0,s.createElement)(Ne.rU,{to:n.dataset.itsecPath},i)}}))}}}]);