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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(63)
)

/* script */
__vue_exports__ = __webpack_require__(64)

/* template */
var __vue_template__ = __webpack_require__(65)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/receiptDetails.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42197124"
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

/***/ 63:
/***/ (function(module, exports) {

module.exports = {
  "receiptdetails": {
    "width": "750",
    "flex": 1
  },
  "receiptdetails-navbar": {
    "width": "750",
    "height": "100"
  },
  "receiptdetails-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "receiptdetails-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "receiptdetails-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "receiptdetails-content": {
    "marginTop": "200",
    "width": "750",
    "flex": 1,
    "alignItems": "center"
  },
  "receiptdetails-content_name": {
    "fontSize": "32",
    "fontWeight": "500"
  },
  "receiptdetails-content_address": {
    "marginTop": "64",
    "width": "480",
    "height": "80",
    "paddingTop": 0,
    "paddingRight": "32",
    "paddingBottom": 0,
    "paddingLeft": "32",
    "borderRadius": "40",
    "backgroundColor": "#eaf1fd",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "receiptdetails-content_address_label": {
    "color": "#6a6a6a",
    "fontSize": "26"
  },
  "receiptdetails-content_address_copy": {
    "width": "48",
    "height": "48",
    "fontSize": "32",
    "color": "#3177f2"
  },
  "receiptdetails-content-qr": {
    "width": "400",
    "height": "400",
    "marginTop": "64"
  },
  "receiptdetails-content_setmoney": {
    "marginTop": "32",
    "fontSize": "32",
    "color": "#3075ee"
  },
  "receiptdetails-content_button": {
    "fontSize": "24",
    "marginLeft": "38",
    "marginRight": "38",
    "marginTop": "64",
    "marginBottom": "20",
    "width": "300",
    "height": "80"
  },
  "receiptdetails-content_listitem": {
    "width": "750",
    "flexDirection": "row"
  }
}

/***/ }),

/***/ 64:
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

var eeui = app.requireModule("eeui");

exports.default = {
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

/***/ 65:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["receiptdetails"]
  }, [_c('navbar', {
    staticClass: ["receiptdetails-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["receiptdetails-navbar-main"]
  }, [_c('text', {
    staticClass: ["receiptdetails-navbar-title"]
  }, [_vm._v(_vm._s(_vm.asset.name) + "收款")])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('icon', {
    staticClass: ["receiptdetails-navbar-right"],
    attrs: {
      "content": "tb-share"
    }
  })], 1)], 1), _c('div', {
    staticClass: ["receiptdetails-content"]
  }, [_c('text', {
    staticClass: ["receiptdetails-content_name"]
  }, [_vm._v("收款地址：区块链韭菜")]), _c('div', {
    staticClass: ["receiptdetails-content_address"]
  }, [_c('text', {
    staticClass: ["receiptdetails-content_address_label"]
  }, [_vm._v(_vm._s(_vm.cropyText(_vm.assetAddress)))]), _c('icon', {
    staticClass: ["receiptdetails-content_address_copy"],
    attrs: {
      "content": "tb-copy"
    },
    on: {
      "click": _vm.copyText
    }
  })], 1), _c('image', {
    staticClass: ["receiptdetails-content-qr"],
    attrs: {
      "src": "https://c-ssl.duitang.com/uploads/people/201903/20/20190320123039_Ey8sc.png"
    }
  }), _c('div', {
    staticClass: ["receiptdetails-content_listitem"]
  }, [_c('button', {
    staticClass: ["receiptdetails-content_button"],
    attrs: {
      "eeui": {
        text: '更换收款钱包'
      }
    }
  }), _c('button', {
    staticClass: ["receiptdetails-content_button"],
    attrs: {
      "eeui": {
        text: '设置收款金额',
        model: 'green'
      }
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });