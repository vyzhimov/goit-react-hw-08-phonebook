"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{793:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,a,i=t(9434),s=t(4270),o=t(9439),l=t(2791),c=function(e){return e.contacts.items},u=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},d=function(e){return e.filter},x=function(e){var n=c(e),t=d(e);return n.filter((function(e){var n=e.name,r=e.number;return n.toLowerCase().includes(t.toLowerCase())||r.includes(t)}))},f=t(3634),p=t(5218),h=t(4554),g=t(1889),j=t(6659),v=t(6151),y=t(184),b=function(){var e=(0,l.useState)(""),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(""),s=(0,o.Z)(a,2),u=s[0],m=s[1],d=(0,i.I0)(),x=(0,i.v9)(c);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(h.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,y.jsx)(h.Z,{component:"form",noValidate:!0,sx:{mt:3},style:{width:"100%"},onSubmit:function(e){e.preventDefault();var n=new FormData(e.currentTarget);x.find((function(e){return e.name.toLowerCase()===n.get("name").toLowerCase()}))?p.Am.error("".concat(n.get("name")," is already in contacts")):(d((0,f.uK)({name:n.get("name"),number:n.get("number")})),r(""),m(""))},children:(0,y.jsxs)(g.ZP,{container:!0,spacing:3,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,y.jsx)(g.ZP,{item:!0,xs:8,sm:5,children:(0,y.jsx)(j.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0,onChange:function(e){return r(e.target.value)},value:t})}),(0,y.jsx)(g.ZP,{item:!0,xs:8,sm:5,children:(0,y.jsx)(j.Z,{required:!0,fullWidth:!0,id:"number",label:"Number",name:"number",autoComplete:"number",onChange:function(e){return m(e.target.value)},value:u})}),(0,y.jsx)(g.ZP,{item:!0,xs:12,sm:2,children:(0,y.jsx)(v.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{height:"53px",marginTop:"0",marginBottom:"0"},children:"Add contact"})})]})})})})},Z=t(4808),C=function(){var e=(0,i.v9)(d),n=(0,i.I0)();return(0,y.jsx)(j.Z,{autoComplete:"given-name",name:"filter",required:!0,fullWidth:!0,id:"filter",label:"Search contact by name or number",autoFocus:!0,value:e,onChange:function(e){n((0,Z.T)(e.target.value))},style:{marginTop:"30px"}})},w=t(9126),k=t(8014),I=t(9606),P=t(168),T=t(6088),F=T.Z.div(r||(r=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 100px;\n  color: #fff;\n  font-size: 20px;\n"]))),W=T.Z.img(a||(a=(0,P.Z)(["\n  display: block;\n  width: 100px;\n"]))),q=t.p+"static/media/Warning.c9e1ed1b959a2b410eca.png",L=function(e){e.message;return(0,y.jsxs)(F,{children:[(0,y.jsx)(W,{src:q,alt:"warning"}),(0,y.jsx)("div",{children:(0,y.jsx)("p",{children:"Sorry there was an error. Please, reload the page! "})})]})},S=t(493),_=t(4852),D=t(6259);function A(){var e=(0,i.I0)(),n=(0,i.v9)(x),t=(0,i.v9)(u),r=(0,i.v9)(m);(0,l.useEffect)((function(){e((0,f.yF)())}),[e]);return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)(I.Z,{}),r&&(0,y.jsx)(L,{}),!t&&!r&&(0,y.jsx)(S.Z,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:500,"& ul":{padding:0}},subheader:(0,y.jsx)("li",{}),children:(0,y.jsx)("ul",{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,y.jsxs)(_.ZP,{style:{display:"flex",justifyContent:"flex-end",alignItems:"flex-start",marginTop:"30px"},children:[(0,y.jsx)(D.Z,{primary:(0,y.jsx)(w._Tb,{}),secondary:"".concat(r),style:{display:"flex",gap:"15px",justifyContent:"flex-start",alignItems:"baseline",width:"150px"}}),(0,y.jsx)(D.Z,{primary:(0,y.jsx)(k.Cvl,{}),secondary:"".concat(a),style:{display:"flex",gap:"15px",justifyContent:"flex-start",alignItems:"baseline",width:"300px"}}),(0,y.jsx)(v.Z,{onClick:function(){return function(n){e((0,f.GK)(n))}(t)},children:"Delete"})]},t)}))})})]})}var B=t(1614),K=t(890),N=function(){return(0,y.jsxs)(B.Z,{component:"main",maxWidth:"lg",style:{overflowY:"hidden"},children:[(0,y.jsx)(K.Z,{component:"h1",variant:"h3",style:{textAlign:"center",marginTop:"90px",textTransform:"uppercase"},children:"Phone Book"}),(0,y.jsx)(b,{}),(0,y.jsx)(C,{}),(0,y.jsx)(A,{})]})},z=function(){var e=(0,i.v9)(u);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.q,{children:(0,y.jsx)("title",{children:"Phonebook"})}),(0,y.jsx)("div",{children:e&&"Request in progress..."}),(0,y.jsx)(N,{})]})}}}]);
//# sourceMappingURL=436.2c0da3bb.chunk.js.map