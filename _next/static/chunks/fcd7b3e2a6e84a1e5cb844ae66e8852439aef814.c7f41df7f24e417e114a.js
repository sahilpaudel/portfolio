(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9jPY":function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),l=t("q1tI"),n=(t("17x9"),t("iuhU")),c=t("5AJ6"),i=Object(c.a)(l.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=t("H2TA"),s=t("ye/S"),p=t("bfFb"),u=t("NqtD"),m=t("VD++");function b(e){return"Backspace"===e.key||"Delete"===e.key}var g=l.forwardRef((function(e,a){var t=e.avatar,c=e.classes,d=e.className,s=e.clickable,g=e.color,h=void 0===g?"default":g,f=e.component,v=e.deleteIcon,y=e.disabled,C=void 0!==y&&y,k=e.icon,O=e.label,w=e.onClick,S=e.onDelete,j=e.onKeyDown,x=e.onKeyUp,T=e.size,I=void 0===T?"medium":T,R=e.variant,N=void 0===R?"default":R,E=Object(r.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),M=l.useRef(null),$=Object(p.a)(M,a),P=function(e){e.stopPropagation(),S&&S(e)},L=!(!1===s||!w)||s,z="small"===I,q=f||(L?m.a:"div"),A=q===m.a?{component:"div"}:{},D=null;if(S){var V=Object(n.a)("default"!==h&&("default"===N?c["deleteIconColor".concat(Object(u.a)(h))]:c["deleteIconOutlinedColor".concat(Object(u.a)(h))]),z&&c.deleteIconSmall);D=v&&l.isValidElement(v)?l.cloneElement(v,{className:Object(n.a)(v.props.className,c.deleteIcon,V),onClick:P}):l.createElement(i,{className:Object(n.a)(c.deleteIcon,V),onClick:P})}var J=null;t&&l.isValidElement(t)&&(J=l.cloneElement(t,{className:Object(n.a)(c.avatar,t.props.className,z&&c.avatarSmall,"default"!==h&&c["avatarColor".concat(Object(u.a)(h))])}));var _=null;return k&&l.isValidElement(k)&&(_=l.cloneElement(k,{className:Object(n.a)(c.icon,k.props.className,z&&c.iconSmall,"default"!==h&&c["iconColor".concat(Object(u.a)(h))])})),l.createElement(q,Object(o.a)({role:L||S?"button":void 0,className:Object(n.a)(c.root,d,"default"!==h&&[c["color".concat(Object(u.a)(h))],L&&c["clickableColor".concat(Object(u.a)(h))],S&&c["deletableColor".concat(Object(u.a)(h))]],"default"!==N&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[h]],C&&c.disabled,z&&c.sizeSmall,L&&c.clickable,S&&c.deletable),"aria-disabled":!!C||void 0,tabIndex:L||S?0:void 0,onClick:w,onKeyDown:function(e){e.currentTarget===e.target&&b(e)&&e.preventDefault(),j&&j(e)},onKeyUp:function(e){e.currentTarget===e.target&&(S&&b(e)?S(e):"Escape"===e.key&&M.current&&M.current.blur()),x&&x(e)},ref:$},A,E),J||_,l.createElement("span",{className:Object(n.a)(c.label,z&&c.labelSmall)},O),D)}));a.a=Object(d.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(s.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(s.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(s.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(s.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(s.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(s.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(s.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g)},LXLv:function(e,a,t){"use strict";var o=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=o(t("q1tI")),l=(0,o(t("8/g6")).default)(r.default.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");a.default=l},RwSH:function(e,a,t){"use strict";var o=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=o(t("q1tI")),l=(0,o(t("8/g6")).default)(r.default.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");a.default=l},U5GE:function(e,a,t){"use strict";var o=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=o(t("q1tI")),l=(0,o(t("8/g6")).default)(r.default.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");a.default=l},sLVg:function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),r=t.n(o),l=t("R/WZ"),n=t("ofer"),c=t("9jPY"),i=["Java","Spring Boot","JavaScript","React","Elixir","Phoenix","ExpressJS","Go"],d=t("RwSH"),s=t.n(d),p=t("U5GE"),u=t.n(p),m=t("uJt2"),b=t.n(m),g=t("LXLv"),h=t.n(g),f=[{name:"Github",url:"https://github.com/sahilpaudel",icon:s.a},{name:"Instagram",url:"https://www.instagram.com/thehighpaudel",icon:u.a},{name:"Facebook",url:"https://www.facebook.com/sahil.paudel",icon:b.a},{name:"Twitter",url:"https://twitter.com/sahil_paudel",icon:h.a}],v=t("5Yp1"),y=r.a.createElement,C=Object(l.a)((function(e){return{root:{"& a":{textDecoration:"none",color:"#fff"}},aboutMeText:{margin:10},aboutMeContainer:{width:"75%",marginLeft:10},aboutMeContent:{margin:10,textAlign:"center",wordBreak:"break-word"},heart:{color:"red",fontSize:20},skillsText:{margin:10,fontWeight:"bold"},chip:{margin:5},profile:{textAlign:"center"},profileContainer:{margin:10}}}));a.default=function(){var e=C();return y(v.a,null,y("div",{className:e.root},y(n.a,{variant:"h6",className:e.aboutMeText},y("b",null,"About Me")),y("div",{className:e.aboutMeContainer},y(n.a,{variant:"caption",className:e.aboutMeContent},"Backend Engineer building scalable web applications. With enthusiasm to learn everything possible in the field, currently exploring frontend development with React. My passion is to contribute in any way possible for the growth of engineering culture around me (mostly within me).")),y(n.a,{variant:"caption",className:e.aboutMeContent},"I ",y("span",{className:e.heart},"\u2764")," Java, Spring Boot, NodeJS, React & Elixir."),y(n.a,{variant:"h6",className:e.skillsText},"Skills:"),y("div",null,i.map((function(a){return y(c.a,{key:a,className:e.chip,label:a})}))),y(n.a,{variant:"h6",className:e.skillsText},"Profiles:"),y("div",{className:e.profileContainer},f.map((function(a){return y("a",{href:a.url,key:a.name,target:"_blank",rel:"noreferrer noopener"},y("span",{className:e.profile},y(a.icon,null)," ",a.name," |"," "))})))))}},uJt2:function(e,a,t){"use strict";var o=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=o(t("q1tI")),l=(0,o(t("8/g6")).default)(r.default.createElement("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");a.default=l}}]);