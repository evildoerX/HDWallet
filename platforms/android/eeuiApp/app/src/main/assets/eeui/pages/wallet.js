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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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

/***/ 15:
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

/***/ 16:
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

/***/ 17:
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

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(82)
)

/* script */
__vue_exports__ = __webpack_require__(83)

/* template */
var __vue_template__ = __webpack_require__(84)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/wallet.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1fcc7efd"
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

/***/ 82:
/***/ (function(module, exports) {

module.exports = {
  "wallet": {
    "width": "750",
    "flex": 1
  },
  "wallet-navbar": {
    "width": "750",
    "height": "100"
  },
  "wallet-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wallet-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "wallet-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "wallet-name": {
    "backgroundColor": "#f7f8fa",
    "color": "#333333",
    "paddingTop": "16",
    "paddingRight": "32",
    "paddingBottom": "16",
    "paddingLeft": "32",
    "fontSize": "28"
  },
  "wallet-list": {
    "width": "750",
    "flex": 1,
    "marginBottom": "64"
  },
  "wallet-carditem": {
    "marginTop": "32"
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WalletManageCard = __webpack_require__(14);

var _WalletManageCard2 = _interopRequireDefault(_WalletManageCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eeui = app.requireModule("eeui"); //
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
//
//

exports.default = {
  components: {
    WalletManageCard: _WalletManageCard2.default
  },

  data: function data() {
    return {
      walletList: [{
        name: "BTC",
        tag: "Bitcoin",
        amount: "9999",
        value: "999999"
      }, {
        name: "ETH",
        tag: "Ethereum",
        amount: "9999",
        value: "999999"
      }, {
        name: "EOS",
        tag: "Enterprise Operation System",
        amount: "9999",
        value: "999999"
      }, {
        name: "BCH",
        tag: "Bitcoin Cash",
        amount: "9999",
        value: "999999"
      }, {
        name: "BSV",
        tag: "Bitcoin SV",
        amount: "9999",
        value: "999999"
      }, {
        name: "LTC",
        tag: "Litecoin",
        amount: "9999",
        value: "999999"
      }, {
        name: "ETC",
        tag: "Ethereum Classic",
        amount: "9999",
        value: "999999"
      }, {
        name: "ZEC",
        tag: "Zcash",
        amount: "9999",
        value: "999999"
      }, {
        name: "DASH",
        tag: "Dash",
        amount: "9999",
        value: "999999"
      }, {
        name: "TRX",
        tag: "TRON",
        amount: "9999",
        value: "999999"
      }]
    };
  },

  methods: {
    itemClick: function itemClick(params) {
      eeui.openPage({
        url: 'walletDetails',
        pageType: "app",
        params: params,
        statusBarType: 'immersion'
      });
    },
    refreshListener: function refreshListener() {
      var _this = this;

      setTimeout(function () {
        _this.$refs.reflectName.setHasMore(true);
        _this.$refs.reflectName.refreshed();
        eeui.toast({
          message: "刷新成功",
          gravity: "middle"
        });
      }, 1000);
    }
  }
};

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wallet"]
  }, [_c('navbar', {
    staticClass: ["wallet-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["wallet-navbar-main"]
  }, [_c('text', {
    staticClass: ["wallet-navbar-title"]
  }, [_vm._v("钱包管理")])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('icon', {
    staticClass: ["wallet-navbar-right"],
    attrs: {
      "content": "tb-add"
    }
  })], 1)], 1), _c('scroll-view', {
    ref: "reflectName",
    staticClass: ["wallet-list"],
    attrs: {
      "eeui": {
        pullTips: true,
      }
    },
    on: {
      "refreshListener": _vm.refreshListener
    }
  }, _vm._l((_vm.walletList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["wallet-carditem"],
      on: {
        "click": function($event) {
          _vm.itemClick(item)
        }
      }
    }, [_c('WalletManageCard', {
      attrs: {
        "icon": item.icon,
        "name": item.name,
        "tag": item.tag,
        "amount": item.amount,
        "value": item.value
      }
    })], 1)
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });