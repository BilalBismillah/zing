/*! For license information please see add-directory.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="C:\\Users\\User\\Documents\\add-directory\\public",__webpack_require__(__webpack_require__.s=4)}([function(e,t){e.exports=React},function(e,t){let r=window.Twilio.Flex;window.Twilio&&window.Twilio.FlexProxy&&window.Twilio.FlexProxy["add-directory"]&&(r=window.Twilio.FlexProxy["add-directory"]),e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadCSS=t.loadJS=t.getRuntimeUrl=t.getAssetsUrl=t.FlexPlugin=t.loadPlugin=void 0;var n=r(5);Object.defineProperty(t,"loadPlugin",{enumerable:!0,get:function(){return n.loadPlugin}}),Object.defineProperty(t,"FlexPlugin",{enumerable:!0,get:function(){return n.FlexPlugin}});var o=r(6);Object.defineProperty(t,"getAssetsUrl",{enumerable:!0,get:function(){return o.getAssetsUrl}}),Object.defineProperty(t,"getRuntimeUrl",{enumerable:!0,get:function(){return o.getRuntimeUrl}});var i=r(7);Object.defineProperty(t,"loadJS",{enumerable:!0,get:function(){return i.loadJS}});var a=r(8);Object.defineProperty(t,"loadCSS",{enumerable:!0,get:function(){return a.loadCSS}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return Math.random().toString(26).slice(2)}},function(e,t,r){e.exports=r(9)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPlugin=t.FlexPlugin=void 0;var n=function n(e){this.uniqueName="add-directory",this.version="0.0.0",this.dependencies={"@twilio/flex-plugin-scripts":"5.1.2","@twilio/flex-plugin":"5.1.2","flex-ui":"2.0.0-beta.1",react:"16.14.0","react-dom":"16.14.0"},this.name=e,console.log("loading "+this.name+"@"+this.version+" plugin")};t.FlexPlugin=n;t.loadPlugin=function(e){Twilio&&Twilio.Flex&&Twilio.Flex.Plugins?Twilio.Flex.Plugins.init(e):console.warn("This version of Flex does not appear to support plugins.")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAssetsUrl=t.getRuntimeUrl=void 0;t.getRuntimeUrl=function(){if(document&&document.currentScript){var e=document.currentScript;if("string"===typeof e.src){var t=e.src;return t.substr(0,t.lastIndexOf("/"))}}return""};t.getAssetsUrl=function(){return t.getRuntimeUrl()+"/assets"}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadJS=void 0;var o=n(r(3));t.loadJS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("script");t.id="external-js-"+o.default(),t.type="text/javascript",t.src=e,document.body.appendChild(t)}))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadCSS=void 0;var o=n(r(3));t.loadCSS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("link");t.id="external-css-"+o.default(),t.rel="stylesheet",t.type="text/css",t.media="all",t.href=e,document.head.appendChild(t)}))}},function(e,t,r){"use strict";r.r(t);var n=r(2);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function define(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(d){define=function define(e,t,r){return e[t]=r}}function wrap(e,t,r,n){var o=t&&t.prototype instanceof Generator?t:Generator,i=Object.create(o.prototype),a=new Context(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return doneResult()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=maybeInvokeDelegate(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=tryCatch(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function tryCatch(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(d){return{type:"throw",arg:d}}}e.wrap=wrap;var u={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var c={};define(c,o,(function(){return this}));var l=Object.getPrototypeOf,f=l&&l(l(values([])));f&&f!==t&&r.call(f,o)&&(c=f);var s=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function defineIteratorMethods(e){["next","throw","return"].forEach((function(t){define(e,t,(function(e){return this._invoke(t,e)}))}))}function AsyncIterator(e,t){var n;this._invoke=function(o,i){function callInvokeWithMethodAndArg(){return new t((function(n,a){!function invoke(n,o,i,a){var u=tryCatch(e[n],e,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==_typeof(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){invoke("next",e,i,a)}),(function(e){invoke("throw",e,i,a)})):t.resolve(l).then((function(e){c.value=e,i(c)}),(function(e){return invoke("throw",e,i,a)}))}a(u.arg)}(o,i,n,a)}))}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,maybeInvokeDelegate(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=tryCatch(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function next(){for(;++n<e.length;)if(r.call(e,n))return next.value=e[n],next.done=!1,next;return next.value=void 0,next.done=!0,next};return i.next=i}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(s,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,a,"GeneratorFunction")),e.prototype=Object.create(s),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,i,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},defineIteratorMethods(s),define(s,a,"Generator"),define(s,o,(function(){return this})),define(s,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function next(){for(;t.length;){var r=t.pop();if(r in e)return next.value=r,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function stop(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var t=this;function handle(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var a=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function abrupt(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function complete(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function finish(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),u}},catch:function _catch(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,t,r){return this.delegate={iterator:values(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function asyncGeneratorStep(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}var o=r(0),i=r.n(o),a=r(1);var u=function Directory(){return i.a.createElement("div",null)},c=function(e){!function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}(AddDirectoryPlugin,e);var t=_createSuper(AddDirectoryPlugin);function AddDirectoryPlugin(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AddDirectoryPlugin),t.call(this,"AddDirectoryPlugin")}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(AddDirectoryPlugin,[{key:"init",value:function(){var e=function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,n,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(e,t){return _regeneratorRuntime().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:({sortOrder:-1}),e.ViewCollection.Content.add(i.a.createElement(a.View,{name:"my-custom-page",key:"my-custom-page-key"},i.a.createElement(u,{key:"abc"}))),a.SideNav.Content.add(i.a.createElement(a.SideLink,{showLabel:!0,icon:"Directory",isActive:!0,onClick:function onClick(){a.Actions.invokeAction("HistoryPush","/my-custom-page")},key:"MyCustomPageSideLink"}));case 3:case"end":return t.stop()}}),_callee)})));return function init(t,r){return e.apply(this,arguments)}}()}]),AddDirectoryPlugin}(n.FlexPlugin);n.loadPlugin(c)}]);
//# sourceMappingURL=bundle.js.map