(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),r=n(5),j=n(2),o=n(0),l=function(e){var t=e.overlay,n=e.setOverlay,c=e.updateData,s=Object(a.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1],u=Object(a.useState)(""),d=Object(j.a)(u,2),b=d[0],O=d[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:t?"overlay active":"overlay",children:Object(o.jsxs)("div",{className:"edit-overlay",children:[Object(o.jsx)("input",{type:"text",id:"new-name",name:"new-name",placeholder:"Digite o novo nome",onChange:function(e){l(e.target.value)}}),Object(o.jsx)("input",{type:"tel",id:"new-phone",name:"new-phone",placeholder:"Digite o novo n\xfamero",onChange:function(e){O(e.target.value)}}),Object(o.jsxs)("div",{className:"overlay-buttons",children:[Object(o.jsx)("button",{type:"submit",id:"save-edit",onClick:function(){c(r,b),n(!1)},children:"Salvar"}),Object(o.jsx)("button",{type:"submit",id:"cancel-edit",onClick:function(){n(!1)},children:"Cancelar"})]})]})})})},u=function(e){var t=e.name,n=e.phone,c=e.id,s=e.Datas,i=e.setDatas,u=Object(a.useState)(!1),d=Object(j.a)(u,2),b=d[0],O=d[1],h=Object(a.useState)(!1),m=Object(j.a)(h,2),p=m[0],x=m[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("small",{children:n}),Object(o.jsx)("a",{children:Object(o.jsx)("i",{className:"fas fa-edit",onClick:function(){return O(!0)}})}),Object(o.jsx)("a",{children:Object(o.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return function(e){var t=s.filter((function(t){return t.id!==e}));i(t)}(c)}})})]}),Object(o.jsx)(l,{setOverlay:O,overlay:b,updateData:function(e,t){s.map((function(n){n.id===c&&(n.name=e,n.phone=t)})),i(Object(r.a)(s))},isUpdated:p,setIsUpdated:x})]})},d=function(e){var t=e.newName,n=Object(a.useState)(""),c=Object(j.a)(n,2),s=c[0],i=c[1],l=Object(a.useState)(""),d=Object(j.a)(l,2),b=d[0],O=d[1],h=Object(a.useState)([]),m=Object(j.a)(h,2),p=m[0],x=m[1];function v(e,t){var n={name:e,phone:t,id:e+t};x([].concat(Object(r.a)(p),[n])),O(""),i("")}var f=p.map((function(e){return Object(o.jsx)(u,{id:e.id,name:e.name,phone:e.phone,setDatas:x,Datas:p},e.id)}));return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("h1",{children:"CRUD"}),Object(o.jsxs)("label",{htmlFor:"username",children:["Nome",Object(o.jsx)("input",{type:"text",name:"name",id:"username",placeholder:"Ex: Gabriel Jodas",onChange:function(e){i(e.target.value)}})]}),Object(o.jsx)("input",{type:"tel",name:"cellphone",id:"userphone",placeholder:"Ex: 11 98765-4321",onChange:function(e){O(e.target.value)}}),Object(o.jsx)("button",{id:"submitBtn",type:"submit",onClick:function(){return v(s,b)},children:"Cadastrar"})]}),Object(o.jsxs)("div",{className:"users-datas",children:[Object(o.jsx)("input",{type:"text",id:"search-name",name:"search-name",placeholder:"Buscar"}),f]})]})};n(13);var b=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(d,{newName:function(e){e.preventDefault(),e.target.reset()}}),Object(o.jsx)(l,{})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1ac53a49.chunk.js.map