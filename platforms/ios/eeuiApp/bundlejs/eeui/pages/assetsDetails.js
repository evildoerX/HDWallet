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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/assetsDetails.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-380969eb"
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

/***/ 20:
/***/ (function(module, exports) {

module.exports = {
  "assetsdetails": {
    "width": "750",
    "flex": 1
  },
  "assetsdetails-navbar": {
    "width": "750",
    "height": "100"
  },
  "assetsdetails-navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "assetsdetails-navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "assetsdetails-navbar-right": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "assetsdetails-content": {
    "marginTop": "64",
    "width": "750",
    "flex": 1,
    "alignItems": "center"
  },
  "assetsdetails-content-logo": {
    "width": "128",
    "height": "128"
  },
  "assetsdetails-content_asset": {
    "alignItems": "center",
    "marginTop": "32"
  },
  "assetsdetails-content_assetvalue": {
    "fontSize": "80",
    "fontWeight": "500",
    "color": "#333333"
  },
  "assetsdetails-content_assetusd": {
    "fontSize": "40",
    "fontWeight": "500",
    "color": "#666666"
  },
  "assetsdetails-content_line": {
    "backgroundColor": "#f8f9fa",
    "height": "32",
    "width": "750"
  },
  "assetsdetails-content_button": {
    "fontSize": "24",
    "marginLeft": "38",
    "marginRight": "38",
    "marginTop": "64",
    "marginBottom": "20",
    "width": "300",
    "height": "80"
  },
  "assetsdetails-content_listitem": {
    "width": "750",
    "flexDirection": "row",
    "marginBottom": "32"
  },
  "assetsdetails-content_tabs": {
    "flex": 1,
    "width": "750"
  }
}

/***/ }),

/***/ 21:
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

var eeui = app.requireModule("eeui");

exports.default = {
  data: function data() {
    return {
      tabsEeui: {
        tabType: 'top',
        tabBackgroundColor: '#ffffff',
        indicatorColor: '#3075ee',
        indicatorWidth: 160,
        underlineColor: '#e9e9e9',
        underlineHeight: 2,
        textSelectColor: '#3075ee',
        textUnselectColor: '#999999',
        textBold: 2
      },
      asset: {},
      assetAddress: '0x58Df7EDadC0795519fdC7284A67547670F08C5E0',
      tabPages: [{
        title: '全部',
        url: 'http://dotwe.org/raw/dist/b5fd96d8d790f0100bdfc20b93eedf09.bundle.wx'
      }, {
        title: '收款',
        url: 'http://dotwe.org/raw/dist/ba938c9aaebe41e5f60b98f90bd0bf61.bundle.wx',
        message: 9
      }, {
        title: '转账',
        url: 'http://dotwe.org/raw/dist/fb6f016b0116969b6b503e1d3a35285f.bundle.wx',
        message: 18
      }]
    };
  },
  mounted: function mounted() {
    this.asset = app.config.params ? app.config.params : "error";
  },

  methods: {
    receiptClick: function receiptClick() {
      eeui.openPage({
        url: 'receiptDetails',
        pageType: "app",
        params: this.asset
      });
    },
    transferClick: function transferClick() {
      eeui.openPage({
        url: 'transferDetails',
        pageType: "app",
        params: this.asset
      });
    },
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

/***/ 22:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["assetsdetails"]
  }, [_c('navbar', {
    staticClass: ["assetsdetails-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["assetsdetails-navbar-main"]
  }, [_c('text', {
    staticClass: ["assetsdetails-navbar-title"]
  }, [_vm._v(_vm._s(_vm.asset.name))])])])], 1), _c('div', {
    staticClass: ["assetsdetails-content"]
  }, [_c('image', {
    staticClass: ["assetsdetails-content-logo"],
    attrs: {
      "src": ("../assets/AssetLogo/" + (_vm.asset.name) + ".png")
    }
  }), _vm._m(0), _c('div', {
    staticClass: ["assetsdetails-content_listitem"]
  }, [_c('button', {
    staticClass: ["assetsdetails-content_button"],
    attrs: {
      "eeui": {
        text: '收款',
        model: 'green'
      }
    },
    on: {
      "click": _vm.receiptClick
    }
  }), _c('button', {
    staticClass: ["assetsdetails-content_button"],
    attrs: {
      "eeui": {
        text: '转账',
        model: 'blue'
      }
    },
    on: {
      "click": _vm.transferClick
    }
  })], 1), _c('div', {
    staticClass: ["assetsdetails-content_line"]
  }), _c('tabbar', {
    ref: "reflectName",
    staticClass: ["assetsdetails-content_tabs"],
    attrs: {
      "eeui": _vm.tabsEeui,
      "tabPages": _vm.tabPages
    }
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["assetsdetails-content_asset"]
  }, [_c('text', {
    staticClass: ["assetsdetails-content_assetvalue"]
  }, [_vm._v("0")]), _c('text', {
    staticClass: ["assetsdetails-content_assetusd"]
  }, [_vm._v("≈ 0.00 USD")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });