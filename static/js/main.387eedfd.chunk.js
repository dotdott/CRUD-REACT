(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),r=n.n(s),i=n(5),j=n(2),o=n(0),l=function(e){var t=e.overlay,n=e.setOverlay,c=e.updateData,s=Object(a.useState)(""),r=Object(j.a)(s,2),i=r[0],l=r[1],u=Object(a.useState)(""),d=Object(j.a)(u,2),b=d[0],p=d[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:t?"overlay active":"overlay",children:Object(o.jsxs)("div",{className:"edit-overlay",children:[Object(o.jsx)("input",{type:"text",id:"new-name",name:"new-name",placeholder:"Enter the new name",onChange:function(e){l(e.target.value)}}),Object(o.jsx)("input",{type:"tel",id:"new-phone",name:"new-phone",placeholder:"Enter the new number",onChange:function(e){p(e.target.value)}}),Object(o.jsxs)("div",{className:"overlay-buttons",children:[Object(o.jsx)("button",{type:"submit",id:"save-edit",onClick:function(){c(i,b),n(!1)},children:"Save"}),Object(o.jsx)("button",{type:"submit",id:"cancel-edit",onClick:function(){n(!1)},children:"Cancel"})]})]})})})},u=function(e){var t=e.name,n=e.phone,c=e.id,s=e.Datas,r=e.setDatas,u=Object(a.useState)(!1),d=Object(j.a)(u,2),b=d[0],p=d[1],O=Object(a.useState)(!1),h=Object(j.a)(O,2),m=h[0],f=h[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("small",{children:n}),Object(o.jsx)("a",{children:Object(o.jsx)("i",{className:"fas fa-edit",onClick:function(){return p(!0)}})}),Object(o.jsx)("a",{children:Object(o.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return function(e){var t=s.filter((function(t){return t.id!==e}));r(t)}(c)}})})]}),Object(o.jsx)(l,{setOverlay:p,overlay:b,updateData:function(e,t){s.map((function(n){n.id===c&&(n.name=e,n.phone=t)})),r(Object(i.a)(s))},isUpdated:m,setIsUpdated:f})]})},d=function(e){var t=e.dataList,n=Object(a.useState)(""),c=Object(j.a)(n,2),s=c[0],r=c[1],i=t.filter((function(e){if((e.props.name.toUpperCase()||e.props.phone.toUpperCase()).includes(s))return e}));return Object(o.jsxs)("div",{className:"users-datas",children:[Object(o.jsx)("input",{type:"text",id:"search-name",name:"search-name",placeholder:"Buscar",onChange:function(e){r(e.target.value.toUpperCase())}}),i||t]})},b=function(e){var t=e.newName,n=Object(a.useState)(""),c=Object(j.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)(""),b=Object(j.a)(l,2),p=b[0],O=b[1],h=Object(a.useState)([]),m=Object(j.a)(h,2),f=m[0],x=m[1],v=Object(a.useState)(!1),y=Object(j.a)(v,2),C=y[0],g=y[1];function N(e,t,n){if(""!==e&&""!==t){var a={name:e,phone:t,id:e+t};x([].concat(Object(i.a)(f),[a])),document.getElementById("form").reset(),O(""),r(""),g(!1)}else g(!0)}var S=f.map((function(e){return Object(o.jsx)(u,{id:e.id,name:e.name,phone:e.phone,setDatas:x,Datas:f},e.id)}));return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsxs)("form",{onSubmit:t,id:"form",children:[Object(o.jsx)("h1",{children:"CRUD"}),Object(o.jsxs)("label",{htmlFor:"username",children:["Name",Object(o.jsx)("input",{type:"text",name:"name",id:"username",placeholder:"Ex: Gabriel Jodas",onChange:function(e){r(e.target.value)}})]}),Object(o.jsx)("input",{type:"tel",name:"cellphone",id:"userphone",placeholder:"Note",pattern:"[0-9]*$",onChange:function(e){O(e.target.value)}}),C&&Object(o.jsx)("span",{className:"error",children:"You need to fill both fields!"}),Object(o.jsx)("button",{id:"submitBtn",type:"submit",onClick:function(){return N(s,p)},children:"Confirm"})]}),Object(o.jsx)(d,{Datas:f,dataList:S})]})};n(13);var p=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(b,{newName:function(e){e.preventDefault()}}),Object(o.jsx)(l,{})]})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.387eedfd.chunk.js.map