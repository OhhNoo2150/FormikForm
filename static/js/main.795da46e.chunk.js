(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[0],{22:function(e,i,l){"use strict";l.r(i);var r=l(0),n=l.n(r),a=l(10),d=l.n(a),t=l(13),s=l(2),o=function(e){var i={};return e.nameField||(i.name="Field required"),e.pswField||(i.password="Field required"),e.emailField?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.emailField)||(i.email="Username should be an email"):i.email="Field required",i};var c=function(){var e=Object(t.a)({initialValues:{emailField:"",pswField:""},validate:o,onSubmit:function(e){alert("Login Successful!"),console.log("form:",e)}}),i={color:"red"};return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:"Name"}),Object(s.jsx)("input",{id:"nameField",type:"name",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.nameField}),e.touched.nameField&&e.errors.name?Object(s.jsx)("div",{id:"nameError",style:i,children:e.errors.email}):null,Object(s.jsx)("div",{children:"Email"}),Object(s.jsx)("input",{id:"emailField",type:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.emailField}),e.touched.emailField&&e.errors.email?Object(s.jsx)("div",{id:"emailError",style:i,children:e.errors.email}):null,Object(s.jsx)("div",{children:"Password"}),Object(s.jsx)("input",{id:"pswField",type:"password",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.pswField}),e.touched.pswField&&e.errors.password?Object(s.jsx)("div",{id:"pswError",style:i,children:e.errors.password}):null,Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",id:"submitBtn",children:"Submit"})]})})};d.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(c,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.795da46e.chunk.js.map