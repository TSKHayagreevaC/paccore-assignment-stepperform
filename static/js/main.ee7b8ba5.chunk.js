(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),c=t.n(l);t(13);var o=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{height:"200px",width:"400px",src:"https://www.paccore.com/wp-content/uploads/2022/05/Group-1000000878.svg",alt:"paccore_logo"}),r.a.createElement("h1",{className:"text-center"},"Paccore Assignment"),r.a.createElement("h1",{className:"text-center"},"Stepper Form"),r.a.createElement("h1",{className:"text-center"},"Registration")))},s=t(2);var i=function(e){for(var a=e.formData,t=(e.setFormData,[]),n=0,l=Object.entries(a);n<l.length;n++){var c=l[n],o=Object(s.a)(c,2),i=o[0],m=o[1];t.push({key:i,value:m})}return r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("h1",null,"Review"),r.a.createElement("ul",null,t.map(function(e){if(!e.key.toLowerCase().includes("confirmpassword"))return r.a.createElement("li",{className:"review-list-item"},r.a.createElement("span",{className:"text-bold"},"".concat(e.key," : ")),r.a.createElement("span",null,e.value))})))},m=t(1);var u=function(e){var a=e.formData,t=e.setFormData;return r.a.createElement("div",{className:"personal-info-container"},r.a.createElement("label",{for:"firstName"},"First Name"),r.a.createElement("input",{id:"firstName",type:"text",placeholder:"First Name...",value:a.firstName,onChange:function(e){t(Object(m.a)({},a,{firstName:e.target.value}))}}),r.a.createElement("label",{for:"middleName"},"Middle Name(Optional)"),r.a.createElement("input",{id:"middleName",type:"text",placeholder:"Middle Name",value:a.Name,onChange:function(e){t(Object(m.a)({},a,{middleName:e.target.value}))}}),r.a.createElement("label",{for:"lastName"},"Last Name"),r.a.createElement("input",{id:"lastName",type:"text",placeholder:"Last Name",value:a.lastName,onChange:function(e){t(Object(m.a)({},a,{lastName:e.target.value}))}}))};var d=function(e){var a=e.formData,t=e.setFormData,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),E=d[0],p=d[1];return r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("label",{for:"userEmail"},"Email"),r.a.createElement("input",{id:"userEmail",type:"email",placeholder:"email",value:a.email,onChange:function(e){t(Object(m.a)({},a,{email:e.target.value}))},onBlur:function(e){return function(e){var a=e.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);i(a?"":"Please Enter Valid Email")}(e.target.value)}}),o.length>0&&r.a.createElement("span",{className:"validation-error"},"*".concat(o)),r.a.createElement("label",{for:"userMobile"},"Mobile Number"),r.a.createElement("input",{id:"userMobile",type:"text",placeholder:"Mobile Number",value:a.mobileNumber,onChange:function(e){return t(Object(m.a)({},a,{mobileNumber:e.target.value}))},onBlur:function(e){return function(e){var a=e.match(/^(\+\d{1,3}[- ]?)?\d{10}$/);p(a?"":"Please Enter Valid Mobile Number")}(e.target.value)}}),E.length>0&&r.a.createElement("span",{className:"validation-error"},"*".concat(E)),r.a.createElement("label",{for:"userAddress"},"Address"),r.a.createElement("input",{id:"userAddress",type:"text",placeholder:"Address",value:a.address,onChange:function(e){return t(Object(m.a)({},a,{address:e.target.value}))}}))};var E=function(e){var a=e.formData,t=e.setFormData;return r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("label",{for:"userGender"},"Gender"),r.a.createElement("select",{id:"userGender",type:"select",value:a.gender,onChange:function(e){t(Object(m.a)({},a,{gender:e.target.value}))}},r.a.createElement("option",null,"Select"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Transgender"},"Transgender"),r.a.createElement("option",{value:"Not willing to disclose"},"Not willing to disclose")),r.a.createElement("label",{for:"userEducation"},"Education"),r.a.createElement("select",{id:"userEducation",type:"select",value:a.education,onChange:function(e){t(Object(m.a)({},a,{education:e.target.value}))}},r.a.createElement("option",null,"Select"),r.a.createElement("option",{value:"Primary"},"Primary"),r.a.createElement("option",{value:"Intermediate"},"Intermediate"),r.a.createElement("option",{value:"UG"},"Under Graduate"),r.a.createElement("option",{value:"PG"},"PG"),r.a.createElement("option",{value:"PhD"},"PhD")),r.a.createElement("label",{for:"userNationality"},"Nationality"),r.a.createElement("input",{id:"userNationality",type:"text",placeholder:"Nationality",value:a.nationality,onChange:function(e){return t(Object(m.a)({},a,{nationality:e.target.value}))}}))};var p=function(e){var a=e.formData,t=e.setFormData,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),E=d[0],p=d[1],v=Object(n.useState)(""),f=Object(s.a)(v,2),b=f[0],g=f[1];return r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("label",{for:"userName"},"Username"),r.a.createElement("input",{id:"userName",type:"text",placeholder:"username",value:a.username,onChange:function(e){t(Object(m.a)({},a,{username:e.target.value}))},onBlur:function(e){return function(e){var a=e.match(/^[A-Za-z][A-Za-z0-9_]{7,29}$/g);i(a?"":"Please Enter Valid Username")}(e.target.value)}}),o.length>0&&r.a.createElement("span",{className:"validation-error"},"*".concat(o)),r.a.createElement("div",{class:"tooltip"},r.a.createElement("span",{class:"tooltiptext"},"Password need to have :",r.a.createElement("ol",null,r.a.createElement("li",null,"Atleast one lower case alphabet a-z."),r.a.createElement("li",null,"Atleast one upper alaphabet A-Z."),r.a.createElement("li",null,"Atleast one number 0-9."),r.a.createElement("li",null,"Atleast one special character @,$,%,etc."),r.a.createElement("li",null,"Length of 8 to 16 letters."))),r.a.createElement("label",{for:"userPassword"},"Password")),r.a.createElement("input",{id:"userPassword",type:"password",placeholder:"Password",value:a.password,onChange:function(e){return t(Object(m.a)({},a,{password:e.target.value}))},onBlur:function(e){return function(e){var a=e.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/g);p(a?"":"Please Enter Valid Password")}(e.target.value)}}),E.length>0&&r.a.createElement("span",{className:"validation-error"},"*".concat(E)),r.a.createElement("label",{for:"userPasswordCheck"},"Confirm Password"),r.a.createElement("input",{id:"userPasswordCheck",type:"password",placeholder:"Confirm Password",value:a.confirmPassword,onChange:function(e){return t(Object(m.a)({},a,{confirmPassword:e.target.value}))},onBlur:function(e){return t=a.password,n=e.target.value,void g(t!==n?"Password Does not Match":"");var t,n}}),b.length>0&&r.a.createElement("span",{className:"validation-error"},"*".concat(b)))};var v=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)({firstName:"",middleName:"",lastName:"",username:"",password:"",confirmPassword:"",email:"",mobileNumber:"",address:"",gender:"",education:"",nationality:""}),o=Object(s.a)(c,2),m=o[0],v=o[1],f=["Step One","Step Two","Step Three","Step Four","Step Five"];return r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"progressbar"},r.a.createElement("div",{style:{width:function(e){var a;switch(e){case 0:a="20%";break;case 1:a="40%";break;case 2:a="60%";break;case 3:a="80%";break;default:a="100%"}return a}(t)}})),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,f[t])),r.a.createElement("div",{className:"body"},0===t?r.a.createElement(u,{formData:m,setFormData:v}):1===t?r.a.createElement(p,{formData:m,setFormData:v}):2==t?r.a.createElement(d,{formData:m,setFormData:v}):3==t?r.a.createElement(E,{formData:m,setFormData:v}):r.a.createElement(i,{formData:m,setFormData:v})),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{disabled:0==t,onClick:function(){l(function(e){return e-1})}},"Prev"),r.a.createElement("button",{onClick:function(){t===f.length-1?(alert("FORM SUBMITTED"),console.log(m)):l(function(e){return e+1})}},t===f.length-1?"Submit":"Next"))))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"layout-div"},r.a.createElement("div",{className:"logo-component-container"},r.a.createElement(o,null)),r.a.createElement(v,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},5:function(e,a,t){e.exports=t(16)}},[[5,2,1]]]);
//# sourceMappingURL=main.ee7b8ba5.chunk.js.map