(this["webpackJsonphome-library"]=this["webpackJsonphome-library"]||[]).push([[0],{149:function(e,t,n){},153:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(0),c=n.n(r),a=n(45),i=n.n(a),s=(n(149),n(106)),l=n(107),u=n(118),m=n(117),b=n(20),d=n(65),j=(n(153),n(66)),f=n(109);function h(){var e=Object(d.a)(["animation: 1s ",";"]);return h=function(){return e},e}function p(){var e=Object(d.a)(["",""]);return p=function(){return e},e}var O=Object(j.b)(p(),f.fadeInDown),x=j.a.div(h(),O),v=function(e){var t=e.books,n=t.books.map((function(e){return Object(o.jsx)(x,{className:"".concat(t.books.length<=1?"col-12 mb-3 mt-3":(t.books.length,"col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12 mb-3 mt-3")," "),children:Object(o.jsx)("div",{className:"cardWrapper card row no-gutters ".concat(t.inputValue.length>=1&&t.books.length>=1?"show":"d-none"," "),children:Object(o.jsx)("div",{className:"offset-md-1 col-md-10 d-flex justify-content-between",children:Object(o.jsx)("a",{href:"".concat(e.volumeInfo.infoLink),target:"_blank",children:Object(o.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("img",{src:"".concat(e.volumeInfo?e.volumeInfo.imageLinks.thumbnail:null),alt:""})}),Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsxs)("div",{className:"cardColumn pb-2",children:[Object(o.jsx)("p",{className:"card-title text-success p-0 m-0",children:"Author Name:"}),Object(o.jsx)("p",{className:"card-title text-primary p-0 m-0",children:e.volumeInfo?e.volumeInfo.authors:null})]}),Object(o.jsxs)("div",{className:"cardColumn pb-2",children:[Object(o.jsx)("p",{className:"card-text text-success p-0 m-0",children:"Book Title: "}),Object(o.jsx)("p",{className:"card-text text-primary",children:e.volumeInfo?e.volumeInfo.title:null})]})]})]})})})})},e.id)}));return Object(o.jsx)("div",{className:"row no-gutters",children:n.length>=1&&t.formSubmited?n:t.inputValue.length>=1?null:Object(o.jsx)("div",{className:"col-12 d-flex justify-content-center my-3",children:"Just try to search some books"})})},g=(n(231),n(232),n(104)),k=function(e){return e?void 0:"Field is required"},y=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," characters"):void 0}},N=y(50),S=(y(4),n(11)),w=n(71),T=n(103),F=(n(233),function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=e.children,a=(Object(w.a)(e,["input","meta","children"]),n&&r);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"position-relative formControl my-1 d-flex flex-column "+(a?"error":""),children:[a&&Object(o.jsx)("span",{className:"error-message position-absolute text-danger",children:r}),c]})})}),B=function(e){var t=e.input,n=(e.meta,e.child,Object(w.a)(e,["input","meta","child"]));return Object(o.jsxs)(F,Object(S.a)(Object(S.a)({},e),{},{children:[" ",Object(o.jsx)("input",Object(S.a)(Object(S.a)({},t),n))]}))},I=function(e,t,n,r,c,a,i,s){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(T.a,{type:e,placeholder:t,name:n,component:c,validate:r,className:a,value:i,onChange:function(e){s(e)}})})},C=Object(g.a)({form:"searchBookForm"})((function(e){var t=e.books,n=e.handleSubmit,r=e.valueSender;return Object(o.jsx)("form",{action:"",onSubmit:n,children:Object(o.jsxs)("div",{className:"mb-3 d-flex flex-column position-relative",children:[Object(o.jsxs)("div",{className:"d-flex flex-row",children:[Object(o.jsx)(o.Fragment,{children:I("text","Provide a book title","bookTitle",[k,N],B,"col-12 form-control booktitle","".concat(t.inputValue),r)}),Object(o.jsx)("button",{className:"btn btn-primary searchBTN my-1 mx-2",type:"submit",children:"Search"})]}),Object(o.jsx)("div",{className:"dropdown-menu searchResults ".concat(t.inputValue.length>=1&&t.books.length>=1&&!1===t.formSubmited?"show":"d-none"),children:t.books.length>=1?t.books.map((function(e){return Object(o.jsx)("a",{className:"dropdown-item",href:"/",onClick:n,children:e.volumeInfo?e.volumeInfo.title:null},e.id)})):null})]})})})),V=n(69),R=n.n(V),A=n(114),K=n(115),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="https://www.googleapis.com/books/v1/volumes?q=",n="AIzaSyBQ9_JjFfomoe0KWRfPTMbdRFku293uPu8";return K.get("".concat(t).concat(e,"&projection=lite&key=").concat(n)).then((function(e){return e.data}))},_="SET_BOOKS",E="SEARCH_BOOK",H="FORM_SUBMITED",J={inputValue:"",formSubmited:!1,books:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(S.a)(Object(S.a)({},e),{},{books:t.books.filter((function(t){return t.volumeInfo.title.toLowerCase().substring(0,e.inputValue.length)===e.inputValue.toLowerCase()}))});case H:return Object(S.a)(Object(S.a)({},e),{},{formSubmited:t.formStatus});case E:return Object(S.a)(Object(S.a)({},e),{},{inputValue:t.inputValue});default:return e}},P=n(31),W=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={typingTimeout:0},e.onFormSubmit=function(t){e.state.typingTimeout&&clearTimeout(e.state.typingTimeout),e.props.isFormSubmited(!0),e.props.getBooks(t.bookTitle),e.props.resetForm()},e.valueSender=function(t){e.props.searchBook(t.target.value),""!==t.target.value&&void 0!==t.target.value&&(e.state.typingTimeout&&clearTimeout(e.state.typingTimeout),e.setState({typingTimeout:setTimeout((function(){e.props.getBooks(t.target.value),e.props.isFormSubmited(!1)}),2e3)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"bookHandlerContainer container",children:[Object(o.jsx)(C,{books:this.props.books,valueSender:this.valueSender,onSubmit:this.onFormSubmit}),Object(o.jsx)(v,{books:this.props.books})]})}}]),n}(c.a.Component),q=Object(b.b)((function(e){return{books:e.bookHandlerReducer}}),(function(e){return{searchBook:function(t){return e({type:E,inputValue:t})},getBooks:function(t){return e(function(e){return function(){var t=Object(A.a)(R.a.mark((function t(n){var o;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:o=t.sent,n((r=o.items,{type:_,books:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},isFormSubmited:function(t){return e(function(e){return{type:H,formStatus:e}}(t))},resetForm:function(){return e(Object(P.a)("formCreateNewBook"))}}}))(W),D=(n(348),function(e){return Object(o.jsx)("footer",{className:"footer container-fluid",children:Object(o.jsx)("p",{className:"m-1",children:"Krobirow dev. Copyright \xa9 all right reserved."})})}),z=(n(349),function(e){return Object(o.jsx)("header",{className:"header container-fluid",children:Object(o.jsx)("h4",{className:"mt-2 mb-2",children:"Welcome on Krobirow's home library"})})}),Q=(n(350),n(8)),U=n(105),G=n(116),X=Object(Q.c)({bookHandlerReducer:L,form:U.a}),Y=Object(Q.d)(X,Object(Q.a)(G.a)),Z=function(e){return Object(o.jsx)(b.a,{store:Y,children:Object(o.jsxs)("div",{className:"App d-flex justify-content-center row",children:[Object(o.jsx)(z,{}),Object(o.jsx)(q,{}),Object(o.jsx)(D,{})]})})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Z,{})}),document.getElementById("root"))}},[[351,1,2]]]);
//# sourceMappingURL=main.bf3f1862.chunk.js.map