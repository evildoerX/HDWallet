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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/transferDetails.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d72080fa"
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

/***/ 43:
/***/ (function(module, exports) {

module.exports = {
  "transferdetails": {
    "width": "750",
    "flex": 1
  },
  "transferdetails-navbar": {
    "width": "750",
    "height": "100"
  },
  "transferdetails-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "transferdetails-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "transferdetails-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "transferdetails-content": {
    "marginTop": "64",
    "width": "750",
    "flex": 1,
    "alignItems": "center"
  },
  "transferdetails-content_item": {
    "width": "750",
    "paddingTop": 0,
    "paddingRight": "32",
    "paddingBottom": 0,
    "paddingLeft": "32",
    "marginTop": "40"
  },
  "transferdetails-content_itemtitle": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginBottom": "16"
  },
  "transferdetails-content_itemtitle_right": {
    "width": "64",
    "height": "64",
    "fontSize": "40"
  },
  "transferdetails-content_iteminput": {
    "backgroundColor": "#f8f9fa",
    "paddingTop": "16",
    "paddingRight": "32",
    "paddingBottom": "16",
    "paddingLeft": "32",
    "height": "80",
    "fontSize": "30",
    "borderRadius": "10"
  },
  "transferdetails-content_button": {
    "fontSize": "24",
    "marginLeft": "38",
    "marginRight": "38",
    "marginTop": "64",
    "marginBottom": "20",
    "width": "300",
    "height": "80"
  },
  "transferdetails-content_transfermoney": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#f8f9fa",
    "borderRadius": "10",
    "paddingTop": "16",
    "paddingRight": "32",
    "paddingBottom": "16",
    "paddingLeft": "32"
  },
  "transferdetails-content_transfermoney_input": {
    "paddingLeft": "10",
    "height": "80",
    "fontSize": "30",
    "borderRadius": "10",
    "width": "300"
  },
  "transferdetails-content_transfermoney_label": {
    "color": "#999999",
    "fontSize": "24"
  },
  "input-right": {
    "textAlign": "right"
  },
  "transferdetails-content_transferaddress": {
    "backgroundColor": "#f8f9fa",
    "borderRadius": "10",
    "paddingTop": "16",
    "paddingRight": "32",
    "paddingBottom": "16",
    "paddingLeft": "32"
  },
  "transferdetails-content_transferaddress_info": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "transferdetails-content_transferaddress_name": {
    "fontSize": "32"
  },
  "transferdetails-content_transferaddress_label": {
    "color": "#a2a2a2",
    "fontSize": "28"
  },
  "transferdetails-content_transferaddress_money": {
    "marginLeft": "26",
    "fontSize": "28",
    "color": "#3075ee"
  },
  "transferdetails-content_transferaddress_tips": {
    "color": "#a2a2a2",
    "fontSize": "24",
    "marginTop": "8"
  },
  "transferdetails-content_iteminfo": {
    "backgroundColor": "#f8f9fa",
    "borderRadius": "10",
    "paddingTop": "16",
    "paddingRight": "32",
    "paddingBottom": "16",
    "paddingLeft": "32",
    "height": "80",
    "lineHeight": "50"
  }
}

/***/ }),

/***/ 44:
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
  data: function data() {
    return {
      asset: {},
      assetAddress: "0x58Df7EDadC0795519fdC7284A67547670F08C5E0"
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

/***/ 45:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["transferdetails"]
  }, [_c('navbar', {
    staticClass: ["transferdetails-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["transferdetails-navbar-main"]
  }, [_c('text', {
    staticClass: ["transferdetails-navbar-title"]
  }, [_vm._v(_vm._s(_vm.asset.name) + "转账")])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('icon', {
    staticClass: ["transferdetails-navbar-right"],
    attrs: {
      "content": "tb-scan"
    }
  })], 1)], 1), _c('div', {
    staticClass: ["transferdetails-content"]
  }, [_c('div', {
    staticClass: ["transferdetails-content_item"]
  }, [_c('div', {
    staticClass: ["transferdetails-content_itemtitle"]
  }, [_c('text', {
    staticClass: ["transferdetails-content_itemtitle_label"]
  }, [_vm._v("收款地址")]), _c('icon', {
    staticClass: ["transferdetails-content_itemtitle_right"],
    attrs: {
      "content": "tb-scan"
    }
  })], 1), _c('input', {
    staticClass: ["transferdetails-content_iteminput"],
    attrs: {
      "type": "text",
      "placeholder": "请输入转账地址"
    }
  })]), _vm._m(0), _c('div', {
    staticClass: ["transferdetails-content_item"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["transferdetails-content_transfermoney"]
  }, [_c('div', {
    staticClass: ["transferdetails-content_transfermoney_item"]
  }, [_c('input', {
    staticClass: ["transferdetails-content_transfermoney_input"],
    attrs: {
      "type": "number",
      "value": 0
    }
  }), _c('text', {
    staticClass: ["transferdetails-content_transfermoney_label"]
  }, [_vm._v("BTC")])]), _vm._m(2), _c('div', [_c('input', {
    staticClass: ["transferdetails-content_transfermoney_input", "input-right"],
    attrs: {
      "type": "number",
      "value": 0
    }
  }), _c('text', {
    staticClass: ["transferdetails-content_transfermoney_label", "input-right"]
  }, [_vm._v("USDT")])])])]), _vm._m(3), _vm._m(4), _c('button', {
    staticClass: ["transferdetails-content_button"],
    attrs: {
      "eeui": {
        text: '确认转账'
      }
    }
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["transferdetails-content_item"]
  }, [_c('div', {
    staticClass: ["transferdetails-content_itemtitle"]
  }, [_c('text', {
    staticClass: ["transferdetails-content_itemtitle_label"]
  }, [_vm._v("地址备注(选填)")])]), _c('input', {
    staticClass: ["transferdetails-content_iteminput"],
    attrs: {
      "type": "text",
      "placeholder": "设置地址备注"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["transferdetails-content_itemtitle"]
  }, [_c('text', {
    staticClass: ["transferdetails-content_itemtitle_label"]
  }, [_vm._v("转账金额")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["transferdetails-content_itemtitle_label"]
  }, [_vm._v("≈")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["transferdetails-content_item"]
  }, [_c('div', {
    staticClass: ["transferdetails-content_itemtitle"]
  }, [_c('text', {
    staticClass: ["transferdetails-content_itemtitle_label"]
  }, [_vm._v("付款地址")]), _c('div', [_c('text', {
    staticStyle: {
      color: "#9a9a9a"
    }
  }, [_vm._v("更换 >")])])]), _c('div', {
    staticClass: ["transferdetails-content_transferaddress"]
  }, [_c('div', {
    staticClass: ["transferdetails-content_transferaddress_info"]
  }, [_c('text', {
    staticClass: ["transferdetails-content_transferaddress_name"]
  }, [_vm._v("区块链大神")]), _c('div', {
    staticClass: ["transferdetails-content_transferaddress_info"]
  }, [_c('text', {
    staticClass: ["transferdetails-content_transferaddress_label"]
  }, [_vm._v("余额")]), _c('text', {
    staticClass: ["transferdetails-content_transferaddress_money"]
  }, [_vm._v("0 BTC")])])]), _c('text', {
    staticClass: ["transferdetails-content_transferaddress_tips"]
  }, [_vm._v("Df7EDadC0795519fdC7284A67547670F08C5E0")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["transferdetails-content_item"]
  }, [_c('div', {
    staticClass: ["transferdetails-content_itemtitle"]
  }, [_c('text', {
    staticClass: ["transferdetails-content_itemtitle_label"]
  }, [_vm._v("旷工费用")]), _c('div', [_c('text', {
    staticStyle: {
      color: "#9a9a9a"
    }
  }, [_vm._v("修改 >")])])]), _c('text', {
    staticClass: ["transferdetails-content_iteminfo"]
  }, [_vm._v("0.000045 BTC ≈ 0.52 USDT")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });