(this.webpackJsonpsimple=this.webpackJsonpsimple||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),d=n(9),r=n.n(d),c=(n(14),n(7)),o=n(3),s=n(4),l=n(2),u=n(6),b=n(5),j=(n(15),n(16),n(0)),m=function(){return Object(j.jsx)("h1",{children:"ToDoList"})},f=(n(18),function(e){var t="item-name";return e.important&&(t+=" important"),e.like&&(t+=" like"),e.done&&(t+=" done"),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("span",{className:t,children:e.name}),Object(j.jsxs)("div",{className:"button-bar",children:[Object(j.jsx)("i",{className:"item-done-button material-icons",onClick:e.doneHandler,children:"done"}),Object(j.jsx)("i",{className:"item-delete-button material-icons",onClick:e.deleteHandler,children:"delete"})]})]})}),h=(n(19),function(e){var t=e.info,n=e.deleteHandler,a=e.doneHandler,i=t.map((function(e){return Object(j.jsx)(f,{name:e.name,important:e.important,like:e.like,done:e.done,deleteHandler:function(){return n(e.id)},doneHandler:function(){return a(e.id)}})}));return Object(j.jsx)("div",{className:"item-list",children:i})}),O=(n(20),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(l.a)(a)),a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a.state={text:""},a}return Object(s.a)(n,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.add(e,this.state.text),this.setState((function(e){e.text;return{text:""}}))}},{key:"render",value:function(){return Object(j.jsxs)("form",{className:"add-panel",onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{className:"add-info",type:"text",onChange:this.onChange,value:this.state.text}),Object(j.jsx)("button",{className:"add-button",type:"submit",children:"ADD"})]})}}]),n}(i.a.Component)),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={data:[{name:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",important:!1,like:!1,id:1,done:!1},{name:"\u0412\u044b\u0433\u0443\u043b\u044f\u0442\u044c \u043f\u0441\u0430",important:!1,like:!1,id:2,done:!1},{name:"\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0443",important:!1,like:!1,id:3,done:!1}]},a.deleteHandler=a.deleteHandler.bind(Object(l.a)(a)),a.addHandler=a.addHandler.bind(Object(l.a)(a)),a.doneHandler=a.doneHandler.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"deleteHandler",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e}));return{data:[].concat(Object(c.a)(n.slice(0,a)),Object(c.a)(n.slice(a+1)))}}))}},{key:"addHandler",value:function(e,t){e.preventDefault(),this.setState((function(e){var n=e.data;return{data:[].concat(Object(c.a)(n),[{name:t,important:!1,like:!1,id:n[n.length-1].id+1,done:!1}])}}))}},{key:"doneHandler",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),i=JSON.parse(JSON.stringify(n));return i[a].done=!0,{data:i}}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m,{}),Object(j.jsx)(O,{add:this.addHandler}),Object(j.jsx)(h,{info:this.state.data,deleteHandler:this.deleteHandler,doneHandler:this.doneHandler})]})}}]),n}(i.a.Component);r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.1d79a010.chunk.js.map