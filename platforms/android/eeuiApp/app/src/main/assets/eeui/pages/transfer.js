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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Wallet/WalletItem/WalletItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5eed5fee"
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "walletitem": {
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
  "walletitem-logo": {
    "width": "56",
    "height": "56"
  },
  "walletitem-group": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginLeft": "32"
  },
  "walletitem-group_info_name": {
    "fontSize": "32",
    "color": "#333333"
  },
  "walletitem-group_info_label": {
    "fontSize": "28",
    "color": "#999999",
    "marginTop": "8"
  },
  "walletitem-group_price_name": {
    "fontSize": "32",
    "color": "#333333",
    "textAlign": "right"
  },
  "walletitem-group_price_label": {
    "fontSize": "28",
    "color": "#999999",
    "marginTop": "8"
  }
}

/***/ }),

/***/ 2:
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

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["walletitem"]
  }, [_c('image', {
    staticClass: ["walletitem-logo"],
    attrs: {
      "src": ("../assets/AssetLogo/" + _vm.name + ".png")
    }
  }), _c('div', {
    staticClass: ["walletitem-group"]
  }, [_c('div', {
    staticClass: ["walletitem-group_info"]
  }, [_c('text', {
    staticClass: ["walletitem-group_info_name"]
  }, [_vm._v(_vm._s(_vm.name))]), _c('text', {
    staticClass: ["walletitem-group_info_label"]
  }, [_vm._v(_vm._s(_vm.tag))])]), _c('div', {
    staticClass: ["walletitem-group_price"]
  }, [_c('text', {
    staticClass: ["walletitem-group_price_name"]
  }, [_vm._v(_vm._s(_vm.amount))]), _c('text', {
    staticClass: ["walletitem-group_price_label"]
  }, [_vm._v("≈$" + _vm._s(_vm.value))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/transfer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-093fe222"
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

/***/ 39:
/***/ (function(module, exports) {

module.exports = {
  "transfer": {
    "width": "750",
    "flex": 1
  },
  "transfer-navbar": {
    "width": "750",
    "height": "100"
  },
  "transfer-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "transfer-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "transfer-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WalletItem = __webpack_require__(0);

var _WalletItem2 = _interopRequireDefault(_WalletItem);

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
//

exports.default = {
  components: {
    WalletItem: _WalletItem2.default
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
      eeui.toast("点击了" + params);
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

/***/ 41:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["transfer"]
  }, [_c('navbar', {
    staticClass: ["transfer-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["transfer-navbar-main"]
  }, [_c('text', {
    staticClass: ["transfer-navbar-title"]
  }, [_vm._v("转账币种选择")])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('icon', {
    staticClass: ["transfer-navbar-right"],
    attrs: {
      "content": "tb-search"
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
      "itemClick": _vm.itemClick,
      "refreshListener": _vm.refreshListener
    }
  }, _vm._l((_vm.walletList), function(item, index) {
    return _c('WalletItem', {
      key: index,
      attrs: {
        "icon": item.icon,
        "name": item.name,
        "tag": item.tag,
        "amount": item.amount,
        "value": item.value
      }
    })
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });