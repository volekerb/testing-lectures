(this["webpackJsonpstart-rtl"]=this["webpackJsonpstart-rtl"]||[]).push([[0],{13:function(e,t,a){},28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(26),r=a.n(c),l=(a(33),a(9)),i=a(1),s=(a(13),a(8)),m=a(11),d=a.n(m),u=a(16),p=o.a.createContext({}),h=function(e){var t=e.children,a=o.a.useReducer((function(e,t){switch(t.type){case"LOAD_TODOLIST":return Object(u.a)({},e,{todoList:t.todoList});case"LOAD_SINGLE_TODO":return Object(u.a)({},e,{activeToDoItem:t.todo});default:return e}}),{todoList:[],activeToDoItem:{id:0}}),n=Object(s.a)(a,2),c=n[0],r=n[1];return o.a.createElement(p.Provider,{value:{appData:c,appDispatch:r}},t)},E=function(){var e=o.a.useState(!0),t=Object(s.a)(e,2),a=t[0],n=t[1],c=o.a.useContext(p),r=c.appData,i=c.appDispatch;return o.a.useEffect((function(){d.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){var t=e.data;i({type:"LOAD_TODOLIST",todoList:t}),n(!1)}))}),[i,n]),o.a.createElement("div",null,a?o.a.createElement("p",null,"Fetching todos"):o.a.createElement("ul",null,r.todoList.slice(0,15).map((function(e){var t=e.id,a=e.title;return o.a.createElement("li",{key:t},o.a.createElement(l.b,{to:"/item/".concat(t),"data-testid":t},a))}))))},v=function(){var e=Object(i.e)().id,t=o.a.useState(!0),a=Object(s.a)(t,2),n=a[0],c=a[1],r=o.a.useContext(p),l=r.appData.activeToDoItem,m=r.appDispatch,u=l.title,h=l.completed,E=l.userId;return o.a.useEffect((function(){d.a.get("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(e){var t=e.data;m({type:"LOAD_SINGLE_TODO",todo:t}),c(!1)}))}),[e,m]),o.a.createElement("div",{className:"single-todo-item"},n?o.a.createElement("p",null,"Fetching todo item ",e):o.a.createElement("div",null,o.a.createElement("h2",{className:"todo-title"},u),o.a.createElement("h4",null,"Added by: ",E),h?o.a.createElement("p",{className:"completed"},"This item has been completed"):o.a.createElement("p",{className:"not-completed"},"This item is yet to be completed")))};var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h2",null,"Getting started with React testing library")),o.a.createElement("div",{className:"App-body"},o.a.createElement(l.a,null,o.a.createElement(i.a,{path:"/item/:id",component:v}),o.a.createElement(i.a,{exact:!0,path:"/",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null,o.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6150cc2b.chunk.js.map