(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(6),i=n.n(a),s=n(7),r=n(5),u=n(0);function l(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",placeholder:"Add a Task",name:"input",className:"input",onChange:t.onChange,value:t.value}),Object(u.jsx)("button",{type:"submit",onClick:t.onClick,className:"add-btn",children:"+"})]})}function o(t){return Object(u.jsx)("div",{className:"list-output",children:Object(u.jsx)("ul",{children:t.listItem})})}function j(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),j=Object(r.a)(i,2),b=j[0],d=j[1];function p(t){var e=t.target.id;d((function(t){return t.filter((function(t,n){return n!==Number(e)}))})),console.log(t.target.id)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:" Task App"}),Object(u.jsx)(l,{onClick:function(t){t.preventDefault(),d((function(t){return[].concat(Object(s.a)(t),[n])})),a("")},onChange:function(t){var e=t.target.value;a(e)},value:n}),Object(u.jsx)(o,{listItem:b.map((function(t,e){return Object(u.jsx)("li",{id:e,onClick:p,children:t},e)}))})]})}i.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.58d61704.chunk.js.map