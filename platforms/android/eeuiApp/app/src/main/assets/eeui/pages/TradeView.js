// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/UI/NavBar/O-Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42ac0a1f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = {
  "o-header-content": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingRight": "36"
  },
  "o-header-content-border": {
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "o-header-content-normal": {
    "height": "93"
  },
  "o-header-content-iOS": {
    "height": "133",
    "paddingTop": "46"
  },
  "o-header-left": {
    "flexDirection": "row",
    "flex": 1
  },
  "o-header-right": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "flex": 1
  },
  "o-header-title": {
    "flex": 3,
    "fontSize": "36",
    "fontWeight": "400",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "OHeader",
  props: {
    bgcolor: {
      type: String,
      default: ""
    },
    title: {
      default: ""
    },
    titlecolor: {
      default: "#000000"
    },
    bottomborder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iOSstat: function iOSstat() {
      var type = WXEnvironment.platform;
      console.log(this.bottomborder);
      return [type === "iOS" ? "o-header-content-iOS" : "o-header-content-normal", this.bottomborder ? "o-header-content-border" : ""];
    }
  }
};

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["o-header-content"],
    class: _vm.iOSstat,
    style: {
      'background-color': _vm.bgcolor
    }
  }, [_c('div', {
    staticClass: ["o-header-left"]
  }, [_vm._t("left")], 2), _c('div', {
    staticClass: ["o-header-center"]
  }, [(!_vm.$slots.center) ? _c('text', {
    staticClass: ["o-header-title"],
    style: {
      color: _vm.titlecolor
    }
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._t("center")], 2), _c('div', {
    staticClass: ["o-header-right"]
  }, [_vm._t("right")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(80)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(94)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/TradeView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3cdf9fb5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = {
  "tradeview": {
    "flex": 1,
    "width": "750",
    "backgroundColor": "#171b30"
  },
  "tradeview-statusbar": {
    "width": "750",
    "height": "60",
    "backgroundImage": "linear-gradient(to right, #72a1ff, #3176ee)"
  },
  "tradeview-navbar": {
    "width": "750",
    "height": "100",
    "backgroundImage": "linear-gradient(to right, #72a1ff, #3176ee)"
  },
  "tradeview-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "tradeview-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "tradeview-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "tradeview-list": {
    "width": "750",
    "flex": 1
  },
  "webview": {
    "flex": 1
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TradeViewHeader = __webpack_require__(82);

var _TradeViewHeader2 = _interopRequireDefault(_TradeViewHeader);

var _TradeViewInfo = __webpack_require__(86);

var _TradeViewInfo2 = _interopRequireDefault(_TradeViewInfo);

var _TradeviewButton = __webpack_require__(90);

var _TradeviewButton2 = _interopRequireDefault(_TradeviewButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    TradeViewHeader: _TradeViewHeader2.default,
    TradeViewInfo: _TradeViewInfo2.default,
    TradeviewButton: _TradeviewButton2.default
  },
  data: function data() {
    return {
      marketInfo: {}
    };
  },
  created: function created() {
    this.marketInfo = weex.config.params;
  },
  mounted: function mounted() {
    this.$refs.reflectName.setUrl("http://ws-5cdaa3ce34590.dev.oneitfarm.com/tradeview/");
  },

  methods: {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/TradeView/TradeViewHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-68940a10"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = {
  "TradeViewHeader": {
    "paddingTop": "50"
  },
  "TradeViewHeader-content": {
    "flexDirection": "row"
  },
  "TradeViewHeader-content-left": {
    "width": "100",
    "minHeight": "50"
  },
  "TradeViewHeader-content-icon": {
    "width": "60",
    "height": "60"
  },
  "TradeViewHeader-right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "TradeViewHeader-navbar": {
    "width": "750",
    "height": "100"
  },
  "TradeViewHeader-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "TradeViewHeader-iconr": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OHeader = __webpack_require__(21);

var _OHeader2 = _interopRequireDefault(_OHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eeui = weex.requireModule("eeui"); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule("navigator");
exports.default = {
  name: "TradeViewHeader",
  components: {
    OHeader: _OHeader2.default
  },
  props: {
    marketInfo: Object
  },
  data: function data() {
    return {};
  },

  computed: {},
  methods: {
    back: function back() {
      navigator.pop();
    }
  }
};

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["TradeViewHeader"]
  }, [_c('OHeader', {
    staticClass: ["TradeViewHeader-content"]
  }, [_c('div', {
    staticClass: ["TradeViewHeader-content-left"],
    attrs: {
      "slot": "left"
    },
    on: {
      "click": function($event) {
        _vm.back()
      }
    },
    slot: "left"
  }, [_c('icon', {
    staticClass: ["TradeViewHeader-content-icon"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-back',
        fontSize: 40,
        color: '#fff',
      }
    }
  })], 1), _c('div', {
    attrs: {
      "slot": "center"
    },
    slot: "center"
  }, [_c('text', {
    staticClass: ["TradeViewHeader-title"]
  }, [_vm._v(_vm._s(((_vm.marketInfo.stock) + " / " + (_vm.marketInfo.money))))])]), _c('div', {
    staticClass: ["TradeViewHeader-right"],
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('icon', {
    staticClass: ["TradeViewHeader-content-icon"],
    attrs: {
      "eeui": {
        content: 'ios-notifications-outline',
        fontSize: 40,
        color: '#fff',
      }
    }
  }), _c('icon', {
    staticClass: ["TradeViewHeader-content-icon"],
    attrs: {
      "eeui": {
        content: 'tb-share-light',
        fontSize: 40,
        color: '#fff',
      }
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(87)
)

/* script */
__vue_exports__ = __webpack_require__(88)

/* template */
var __vue_template__ = __webpack_require__(89)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/TradeView/TradeViewInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-59607271"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = {
  "TradeViewInfo": {
    "backgroundImage": "linear-gradient(to right, #72a1ff, #3176ee)",
    "width": "750",
    "paddingBottom": "8",
    "marginTop": "-5"
  },
  "TradeViewInfo-market": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "TradeViewInfo-market_left_price": {
    "color": "#46e47d",
    "fontSize": "64"
  },
  "TradeViewInfo-market_left_info": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "8"
  },
  "TradeViewInfo-market_right_info": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "minWidth": "200",
    "marginTop": "8"
  },
  "TradeViewInfo-market_left_inc": {
    "backgroundColor": "rgb(44,148,80)",
    "paddingTop": "4",
    "paddingRight": "8",
    "paddingBottom": "4",
    "paddingLeft": "8",
    "borderRadius": "8",
    "color": "rgba(255,255,255,0.85)"
  },
  "TradeViewInfo-market_left_incnum": {
    "color": "#5be08a",
    "marginLeft": "8"
  },
  "TradeViewInfo-market_text": {
    "color": "rgba(255,255,255,1)",
    "marginLeft": "8"
  },
  "TradeViewInfo-market_titletext": {
    "color": "rgba(255,255,255,1)",
    "fontSize": "24"
  }
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "TradeViewInfo",
  props: {
    marketInfo: Object
  },
  data: function data() {
    return {};
  },

  computed: {}
};

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["TradeViewInfo"]
  }, [_c('div', {
    staticClass: ["TradeViewInfo-market"]
  }, [_c('div', {
    staticClass: ["TradeViewInfo-market_left"]
  }, [_c('text', {
    staticClass: ["TradeViewInfo-market_left_price"]
  }, [_vm._v(_vm._s(_vm.marketInfo.price))]), _c('div', {
    staticClass: ["TradeViewInfo-market_left_info"]
  }, [_c('text', {
    staticClass: ["TradeViewInfo-market_left_inc"]
  }, [_vm._v(_vm._s(((_vm.marketInfo.increase) + " %")))]), _c('text', {
    staticClass: ["TradeViewInfo-market_left_incnum"]
  }, [_vm._v(_vm._s(_vm.marketInfo.increase * _vm.marketInfo.price))]), _c('text', {
    staticClass: ["TradeViewInfo-market_text"]
  }, [_vm._v(_vm._s(("$ " + (_vm.marketInfo.price))))])])]), _c('div', [_c('div', {
    staticClass: ["TradeViewInfo-market_right_info"]
  }, [_c('text', {
    staticClass: ["TradeViewInfo-market_titletext"]
  }, [_vm._v("24H最高")]), _c('text', {
    staticClass: ["TradeViewInfo-market_text"]
  }, [_vm._v(_vm._s(_vm.marketInfo.highest))])]), _c('div', {
    staticClass: ["TradeViewInfo-market_right_info"]
  }, [_c('text', {
    staticClass: ["TradeViewInfo-market_titletext"]
  }, [_vm._v("24H最低")]), _c('text', {
    staticClass: ["TradeViewInfo-market_text"]
  }, [_vm._v(_vm._s(_vm.marketInfo.lowest))])]), _c('div', {
    staticClass: ["TradeViewInfo-market_right_info"]
  }, [_c('text', {
    staticClass: ["TradeViewInfo-market_titletext"]
  }, [_vm._v("24H成交量")]), _c('text', {
    staticClass: ["TradeViewInfo-market_text"]
  }, [_vm._v(_vm._s(_vm.marketInfo.volume))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(91)
)

/* script */
__vue_exports__ = __webpack_require__(92)

/* template */
var __vue_template__ = __webpack_require__(93)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/TradeView/TradeviewButton.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43cda815"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = {
  "TradeviewButton": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "TradeviewButton-buy": {
    "backgroundColor": "#4db872",
    "height": "100",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1
  },
  "TradeviewButton-sell": {
    "backgroundColor": "#ee6560",
    "height": "100",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1
  },
  "TradeviewButton-add": {
    "backgroundColor": "#282e45",
    "height": "100",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingLeft": "60",
    "paddingRight": "60"
  },
  "TradeviewButton-icon": {
    "width": "40",
    "height": "40"
  },
  "TradeviewButton-addtext": {
    "color": "rgba(255,255,255,0.85)",
    "fontSize": "20"
  },
  "TradeviewButton-text": {
    "color": "rgba(255,255,255,0.85)",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var eeui = weex.requireModule("eeui");
exports.default = {
  name: "TradeviewButton",
  components: {},
  props: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {}
};

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["TradeviewButton"]
  }, [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: ["TradeviewButton-add"]
  }, [_c('icon', {
    staticClass: ["TradeviewButton-icon"],
    attrs: {
      "eeui": {
        content: 'ios-heart-empty',
        fontSize: 40,
        color: '#fff',
      }
    }
  }), _c('text', {
    staticClass: ["TradeviewButton-addtext"]
  }, [_vm._v("加自选")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["TradeviewButton-buy"]
  }, [_c('text', {
    staticClass: ["TradeviewButton-text"]
  }, [_vm._v("买入")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["TradeviewButton-sell"]
  }, [_c('text', {
    staticClass: ["TradeviewButton-text"]
  }, [_vm._v("卖出")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tradeview"]
  }, [_c('div', {
    staticClass: ["tradeview-statusbar"]
  }), _c('navbar', {
    staticClass: ["tradeview-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["tradeview-navbar-main"]
  }, [_c('text', {
    staticClass: ["tradeview-navbar-title"]
  }, [_vm._v(_vm._s(((_vm.marketInfo.stock) + " / " + (_vm.marketInfo.money))))])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('icon', {
    staticClass: ["tradeview-navbar-right"],
    attrs: {
      "content": "tb-share"
    }
  })], 1)], 1), _c('TradeViewInfo', {
    attrs: {
      "marketInfo": _vm.marketInfo
    }
  }), _c('scroll-view', {
    staticClass: ["tradeview-list"]
  }, [_c('web-view', {
    ref: "reflectName",
    staticClass: ["webview"],
    attrs: {
      "progressbarVisibility": false
    }
  })], 1), _c('TradeviewButton')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });