!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vstxModal",[],e):"object"==typeof exports?exports.vstxModal=e():t.vstxModal=e()}(this,function(){return function(t){function e(s){if(o[s])return o[s].exports;var n=o[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var s=o(1)(o(2),o(3),null,null);t.exports=s.exports},function(t,e){t.exports=function(t,e,o,s){var n,a=t=t||{},i=typeof t["default"];"object"!==i&&"function"!==i||(n=t,a=t["default"]);var l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),o&&(l._scopeId=o),s){var r=Object.create(l.computed||null);Object.keys(s).forEach(function(t){var e=s[t];r[t]=function(){return e}}),l.computed=r}return{esModule:n,exports:a,options:l}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"VModal",props:{modalType:{type:String,required:!1,"default":"default"},isVisible:{type:Boolean,required:!1,"default":!1},title:{type:String,required:!1,"default":""}},data:function(){return{}},methods:{toggleIsVisible:function(){this.$emit("toggleIsVisible")}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal","class":{"is-active":t.isVisible}},["default"===t.modalType?[o("div",{staticClass:"modal-background",on:{"&click":function(e){return t.toggleIsVisible(e)}}}),o("div",{staticClass:"modal-content box is-scrollable-y"},[t._t("default")],2),o("button",{staticClass:"modal-close is-large",on:{"&click":function(e){return t.toggleIsVisible(e)}}})]:"card"===t.modalType?[o("div",{staticClass:"modal-background",on:{"&click":function(e){return t.toggleIsVisible(e)}}}),o("div",{staticClass:"modal-card"},[o("header",{staticClass:"modal-card-head"},[t._t("header",[o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.title))]),o("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{"&click":function(e){return t.toggleIsVisible(e)}}})])],2),o("section",{staticClass:"modal-card-body"},[t._t("body")],2),o("footer",{staticClass:"modal-card-foot"},[t._t("footer",[o("button",{staticClass:"button is-success",on:{"&click":function(e){t.$emit("modalSaveChanges")}}},[t._v("Save Changes")]),o("button",{staticClass:"button",on:{"&click":function(e){return t.toggleIsVisible(e)}}},[t._v("Cancel")])])],2)])]:t._e()],2)},staticRenderFns:[]}}])});