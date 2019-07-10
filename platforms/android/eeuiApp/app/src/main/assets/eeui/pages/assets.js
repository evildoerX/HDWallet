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
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
/******/ })
/************************************************************************/
/******/ ({

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(116)
)

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(129)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/assets.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0cb3c987"
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

/***/ 116:
/***/ (function(module, exports) {

module.exports = {
  "asset": {
    "flex": 1
  },
  "asset-navbar": {
    "width": "750",
    "height": "100"
  },
  "asset-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "asset-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "asset-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tool = __webpack_require__(118);

var _Tool2 = _interopRequireDefault(_Tool);

var _Wallet = __webpack_require__(122);

var _Wallet2 = _interopRequireDefault(_Wallet);

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

var eeui = app.requireModule("eeui");
exports.default = {
  components: {
    Tool: _Tool2.default,
    Wallet: _Wallet2.default
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    eeui.setPageBackPressed(null, function () {
      eeui.confirm({
        title: "温馨提示",
        message: "你确定要退出hdwallet吗？",
        buttons: ["取消", "确定"]
      }, function (result) {
        if (result.status === "click" && result.title === "确定") {
          eeui.closePage(null);
        }
      });
    });
  },


  methods: {
    WMClick: function WMClick() {
      eeui.openPage({
        url: 'wallet',
        pageType: "app"
      });
    }
  }
};

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(119)
)

/* script */
__vue_exports__ = __webpack_require__(120)

/* template */
var __vue_template__ = __webpack_require__(121)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Tool/Tool.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-44df0762"
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

/***/ 119:
/***/ (function(module, exports) {

module.exports = {
  "tool": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": 0,
    "paddingRight": "32",
    "paddingBottom": 0,
    "paddingLeft": "32",
    "backgroundColor": "#3eb4ff"
  },
  "tool-item": {
    "alignItems": "center",
    "justifyContent": "center",
    "width": "110",
    "height": "110"
  },
  "tool-item_icon": {
    "width": "48",
    "height": "48",
    "fontSize": "48",
    "color": "#ffffff"
  },
  "tool-item_text": {
    "marginTop": "16",
    "color": "#ffffff",
    "fontSize": "24"
  }
}

/***/ }),

/***/ 120:
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

var eeui = app.requireModule("eeui");
exports.default = {
  methods: {
    openScaner: function openScaner() {
      eeui.openScaner(null, function (res) {
        switch (res.status) {
          case "success":
            eeui.toast("识别成功：" + res.text);
            break;

          case "failed":
            eeui.toast("识别失败");
            break;
        }
      });
    },
    openUrl: function openUrl(url) {
      eeui.openPage({
        url: url,
        pageType: "app"
      });
    }
  }
};

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tool"]
  }, [_c('div', {
    staticClass: ["tool-item"],
    on: {
      "click": _vm.openScaner
    }
  }, [_c('icon', {
    staticClass: ["tool-item_icon"],
    attrs: {
      "eeui": {
        content: 'tb-scan'
      }
    }
  }), _c('text', {
    staticClass: ["tool-item_text"]
  }, [_vm._v("扫一扫")])], 1), _c('div', {
    staticClass: ["tool-item"],
    on: {
      "click": function($event) {
        _vm.openUrl('receipt')
      }
    }
  }, [_c('icon', {
    staticClass: ["tool-item_icon"],
    attrs: {
      "eeui": {
        content: 'tb-qrcode'
      }
    }
  }), _c('text', {
    staticClass: ["tool-item_text"]
  }, [_vm._v("收款")])], 1), _c('div', {
    staticClass: ["tool-item"],
    on: {
      "click": function($event) {
        _vm.openUrl('transfer')
      }
    }
  }, [_c('icon', {
    staticClass: ["tool-item_icon"],
    attrs: {
      "eeui": {
        content: 'tb-refund'
      }
    }
  }), _c('text', {
    staticClass: ["tool-item_text"]
  }, [_vm._v("转账")])], 1), _c('div', {
    staticClass: ["tool-item"],
    on: {
      "click": function($event) {
        _vm.openUrl('transactionLog')
      }
    }
  }, [_c('icon', {
    staticClass: ["tool-item_icon"],
    attrs: {
      "eeui": {
        content: 'tb-text'
      }
    }
  }), _c('text', {
    staticClass: ["tool-item_text"]
  }, [_vm._v("交易明细")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(123)
)

/* script */
__vue_exports__ = __webpack_require__(124)

/* template */
var __vue_template__ = __webpack_require__(128)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Wallet/Wallet.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8087f122"
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

/***/ 123:
/***/ (function(module, exports) {

module.exports = {
  "wallet": {
    "width": "750",
    "flex": 1
  },
  "wallet-bg": {
    "width": "750",
    "height": "150",
    "backgroundColor": "#3eb4ff",
    "position": "absolute"
  },
  "wallet-card": {
    "marginTop": "16"
  },
  "wallet-list": {
    "width": "750",
    "flex": 1
  },
  "wallet-tips": {
    "textAlign": "center",
    "fontSize": "24",
    "paddingTop": "32",
    "paddingRight": 0,
    "paddingBottom": "32",
    "paddingLeft": 0,
    "color": "#999999"
  }
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WalletCard = __webpack_require__(125);

var _WalletCard2 = _interopRequireDefault(_WalletCard);

var _WalletItem = __webpack_require__(2);

var _WalletItem2 = _interopRequireDefault(_WalletItem);

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
//

var eeui = app.requireModule("eeui");

exports.default = {
  components: {
    WalletCard: _WalletCard2.default,
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
      eeui.openPage({
        url: 'assetsDetails',
        pageType: "app",
        params: params
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(126)
)

/* template */
var __vue_template__ = __webpack_require__(127)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Wallet/WalletCard/WalletCard.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4b896fe9"
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

/***/ 126:
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
    "backgroundColor": "#ffffff",
    "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.1)",
    "borderColor": "rgba(0,0,0,0.1)",
    "borderWidth": "1",
    "borderStyle": "solid"
  },
  "walletCard-header": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "walletCard-header_text": {
    "fontSize": "32",
    "fontWeight": "500",
    "color": "#333333"
  },
  "walletCard-header_btn": {
    "marginLeft": "16",
    "borderColor": "#ffa50d",
    "borderWidth": "1",
    "borderRadius": "8",
    "paddingTop": "4",
    "paddingRight": "8",
    "paddingBottom": "4",
    "paddingLeft": "8",
    "color": "#ffa50d"
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
    "color": "#999999"
  },
  "walletCard-content_header_icon": {
    "marginLeft": "16",
    "width": "32",
    "height": "32",
    "fontSize": "32",
    "color": "#d7d7d8"
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
    "color": "#999999",
    "fontSize": "32"
  },
  "walletCard-content_info_value": {
    "fontSize": "48",
    "color": "#333333"
  },
  "walletCard-content_btn": {
    "width": "64",
    "height": "64",
    "fontSize": "48",
    "borderRadius": "32",
    "borderColor": "#c6dafb",
    "borderWidth": "2",
    "borderStyle": "solid",
    "color": "#3eb4ff"
  }
}

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["walletCard"]
  }, [_vm._m(0), _c('div', {
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
        content: 'tb-add'
      }
    }
  })], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["walletCard-header"]
  }, [_c('text', {
    staticClass: ["walletCard-header_text"]
  }, [_vm._v("币圈韭菜")]), _c('text', {
    staticClass: ["walletCard-header_btn"]
  }, [_vm._v("未备份 >")])])
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

/***/ 128:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wallet"]
  }, [_c('div', {
    staticClass: ["wallet-bg"]
  }), _c('WalletCard', {
    staticClass: ["wallet-card"],
    attrs: {
      "showWalletSet": false
    }
  }), _c('scroll-view', {
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
  }, [_vm._l((_vm.walletList), function(item, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function($event) {
          _vm.itemClick(item)
        }
      }
    }, [_c('WalletItem', {
      attrs: {
        "icon": item.icon,
        "name": item.name,
        "tag": item.tag,
        "amount": item.amount,
        "value": item.value
      }
    })], 1)
  }), _c('text', {
    staticClass: ["wallet-tips"]
  }, [_vm._v("基于BIP44协议")])], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["asset"]
  }, [_c('navbar', {
    staticClass: ["asset-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["asset-navbar-main"]
  }, [_c('text', {
    staticClass: ["asset-navbar-title"]
  }, [_vm._v("资产")])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": _vm.WMClick
    }
  }, [_c('icon', {
    staticClass: ["asset-navbar-right"],
    attrs: {
      "content": "ios-wallet"
    }
  })], 1)], 1), _c('Tool'), _c('Wallet')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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

/***/ 3:
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

/***/ 4:
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

/***/ 5:
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

/***/ })

/******/ });