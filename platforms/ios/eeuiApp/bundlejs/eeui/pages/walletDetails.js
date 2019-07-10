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
/******/ 	return __webpack_require__(__webpack_require__.s = 166);
/******/ })
/************************************************************************/
/******/ ({

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(167)
)

/* script */
__vue_exports__ = __webpack_require__(168)

/* template */
var __vue_template__ = __webpack_require__(173)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/walletDetails.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1075c3b5"
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

/***/ 167:
/***/ (function(module, exports) {

module.exports = {
  "walletdetails": {
    "width": "750",
    "flex": 1
  },
  "walletdetails_statusbar": {
    "width": "750",
    "height": "60",
    "backgroundImage": "linear-gradient(to right, #72a1ff, #3176ee)"
  },
  "walletdetails-navbar": {
    "width": "750",
    "height": "100",
    "backgroundImage": "linear-gradient(to right, #72a1ff, #3176ee)"
  },
  "walletdetails-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "walletdetails-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "walletdetails-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "walletdetails-bg": {
    "marginTop": "-10",
    "width": "750",
    "height": "180",
    "backgroundImage": "linear-gradient(to right, #72a1ff, #3176ee)",
    "position": "absolute"
  },
  "walletdetails-content": {
    "width": "750",
    "flex": 1,
    "alignItems": "center"
  },
  "walletdetails-card": {
    "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.1)",
    "borderColor": "rgba(0,0,0,0.1)",
    "borderWidth": "1",
    "borderStyle": "solid"
  }
}

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WalletManageCard = __webpack_require__(25);

var _WalletManageCard2 = _interopRequireDefault(_WalletManageCard);

var _WalletManageItem = __webpack_require__(169);

var _WalletManageItem2 = _interopRequireDefault(_WalletManageItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var eeui = app.requireModule("eeui");

exports.default = {
  components: {
    WalletManageCard: _WalletManageCard2.default,
    WalletManageItem: _WalletManageItem2.default
  },
  data: function data() {
    return {
      asset: {},
      assetAddress: '0x58Df7EDadC0795519fdC7284A67547670F08C5E0'
    };
  },
  mounted: function mounted() {
    this.asset = app.config.params ? app.config.params : "error";
  },

  methods: {
    copyText: function copyText() {
      eeui.copyText(this.assetAddress);
      eeui.toast({
        message: "复制成功",
        gravity: "middle"
      });
    },
    cropyText: function cropyText(str) {
      var t = "";
      t = str.slice(0, 10) + "******" + str.substring(32);
      return t;
    }
  }
};

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(170)
)

/* script */
__vue_exports__ = __webpack_require__(171)

/* template */
var __vue_template__ = __webpack_require__(172)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Wallet/WalletManageItem/WalletManageItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-11990d2e"
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

/***/ 170:
/***/ (function(module, exports) {

module.exports = {
  "walletmanageitem": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginLeft": "32",
    "marginRight": "32",
    "paddingTop": "32",
    "paddingRight": 0,
    "paddingBottom": "32",
    "paddingLeft": 0,
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(0,0,0,0.1)",
    "borderBottomStyle": "solid"
  },
  "walletmanageitem_icon": {
    "width": "100",
    "height": "100"
  },
  "walletmanageitem-logo": {
    "width": "56",
    "height": "56"
  },
  "walletmanageitem-group": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginLeft": "32"
  },
  "walletmanageitem-group_info_name": {
    "fontSize": "32",
    "color": "#333333"
  },
  "walletmanageitem-group_info_label": {
    "fontSize": "28",
    "color": "#999999",
    "marginTop": "8"
  },
  "walletmanageitem-group_price_name": {
    "fontSize": "32",
    "color": "#333333",
    "textAlign": "right"
  },
  "walletmanageitem-group_price_label": {
    "fontSize": "28",
    "color": "#999999",
    "marginTop": "8"
  }
}

/***/ }),

/***/ 171:
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

exports.default = {
  props: {
    icon: {
      type: String
    },
    name: {
      type: String
    },
    tag: {
      type: String
    },
    amount: {
      type: String
    },
    value: {
      type: String
    }
  }
};

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["walletmanageitem"]
  }, [_c('icon', {
    staticClass: ["walletmanageitem_icon"],
    attrs: {
      "eeui": {
        content: _vm.icon
      }
    }
  }), _c('div', {
    staticClass: ["walletmanageitem-group"]
  }, [_c('div', {
    staticClass: ["walletmanageitem-group_info"]
  }, [_c('text', {
    staticClass: ["walletmanageitem-group_info_name"]
  }, [_vm._v(_vm._s(_vm.name))])]), _c('div', {
    staticClass: ["walletmanageitem-group_price"]
  }, [_c('icon', {
    staticClass: ["walletCard-content_btn"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-forward'
      }
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('icon', {
    staticClass: ["walletdetails"]
  }, [_c('div', {
    staticClass: ["walletdetails_statusbar"]
  }), _c('navbar', {
    staticClass: ["walletdetails-navbar"],
    attrs: {
      "eeui": {
        backgroundColor: '#72a1ff'
      }
    }
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["walletdetails-navbar-main"]
  }, [_c('text', {
    staticClass: ["walletdetails-navbar-title"]
  }, [_vm._v(_vm._s(_vm.asset.name) + "收款")])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('icon', {
    staticClass: ["walletdetails-navbar-right"],
    attrs: {
      "content": "tb-share"
    }
  })], 1)], 1), _c('div', {
    staticClass: ["walletdetails-content"]
  }, [_c('div', {
    staticClass: ["walletdetails-bg"]
  }), _c('WalletManageCard', {
    staticClass: ["walletdetails-card"]
  }), _c('WalletManageItem', {
    attrs: {
      "icon": "ios-wallet",
      "name": "修改钱包名称"
    }
  }), _c('WalletManageItem', {
    attrs: {
      "icon": "md-key",
      "name": "导出助记词"
    }
  }), _c('WalletManageItem', {
    attrs: {
      "icon": "md-key",
      "name": "开通EOS账户"
    }
  }), _c('WalletManageItem', {
    attrs: {
      "icon": "md-key",
      "name": "导出私钥地址"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(28)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Wallet/WalletManageCard/WalletManageCard.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-25cff9ee"
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

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
  "walletCard": {
    "borderRadius": "16",
    "height": "280",
    "width": "718",
    "paddingTop": "32",
    "paddingRight": "24",
    "paddingBottom": "32",
    "paddingLeft": "24",
    "marginLeft": "16",
    "marginRight": "16",
    "backgroundImage": "linear-gradient(to right, #72a1ff, #3176ee)"
  },
  "walletCard-header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "walletCard-header_left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "walletCard-header_lefttext": {
    "fontSize": "32",
    "fontWeight": "500",
    "color": "#ffffff"
  },
  "walletCard-header_right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "walletCard-header_righttext": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "walletCard-header_righticon": {
    "width": "48",
    "height": "48",
    "fontSize": "32"
  },
  "walletCard-content": {
    "marginTop": "64"
  },
  "walletCard-content_header": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "walletCard-content_header_text": {
    "fontSize": "28",
    "fontWeight": "500",
    "color": "#ffffff"
  },
  "walletCard-content_header_icon": {
    "marginLeft": "16",
    "width": "32",
    "height": "32",
    "fontSize": "32",
    "color": "#ffffff"
  },
  "walletCard-content_info": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "walletCard-content_info_money": {
    "marginTop": "16",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "walletCard-content_info_mt": {
    "color": "#ffffff",
    "fontSize": "32"
  },
  "walletCard-content_info_value": {
    "fontSize": "48",
    "color": "#ffffff"
  },
  "walletCard-content_btn": {
    "width": "64",
    "height": "64",
    "fontSize": "48",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 27:
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

exports.default = {
  props: {
    defaultWallet: {
      type: Boolean,
      default: true
    }
  }
};

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["walletCard"]
  }, [_c('div', {
    staticClass: ["walletCard-header"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["walletCard-header_right"]
  }, [_c('text', {
    staticClass: ["walletCard-header_righttext"]
  }, [_vm._v(_vm._s(_vm.defaultWallet ? '默认钱包' : '设置为默认钱吧'))]), _c('icon', {
    staticClass: ["walletCard-header_righticon"],
    style: {
      color: _vm.defaultWallet ? '#ffffff' : '#cccccc'
    },
    attrs: {
      "eeui": {
        content: 'ios-checkmark-circle'
      }
    }
  })], 1)]), _c('div', {
    staticClass: ["walletCard-content"]
  }, [_c('div', {
    staticClass: ["walletCard-content_header"]
  }, [_c('text', {
    staticClass: ["walletCard-content_header_text"]
  }, [_vm._v("多链钱包")]), _c('icon', {
    staticClass: ["walletCard-content_header_icon"],
    attrs: {
      "eeui": {
        content: 'ios-eye'
      }
    }
  })], 1), _c('div', {
    staticClass: ["walletCard-content_info"]
  }, [_vm._m(1), _c('icon', {
    staticClass: ["walletCard-content_btn"],
    attrs: {
      "eeui": {
        content: 'tb-more'
      }
    }
  })], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["walletCard-header_left"]
  }, [_c('text', {
    staticClass: ["walletCard-header_lefttext"]
  }, [_vm._v("币圈韭菜")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["walletCard-content_info_money"]
  }, [_c('text', {
    staticClass: ["walletCard-content_info_mt"]
  }, [_vm._v("$")]), _c('text', {
    staticClass: ["walletCard-content_info_value"]
  }, [_vm._v("123123123")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });