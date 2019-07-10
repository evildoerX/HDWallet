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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eeui = weex.requireModule("eeui"); /**
                                        * Created by zhangyi on 2017/8/14.
                                        * Desc: network for ajax post/get
                                        */

var Http = {
  apiToUrl: function apiToUrl(api) {

    var url = _app2.default.HTTP_HOST_PREPROD + api;
    // eeui.toast(`"修正url :${url}`);
    return url;
  },
  checkAppkey: function checkAppkey(params) {
    var p = params || {};

    if (!p.hasOwnProperty('appkey')) {
      p['appkey'] = _app2.default.APPKEY;
    }
    if (!p.hasOwnProperty('channel')) {
      p['channel'] = _app2.default.CHANNEL;
    }

    return p;
  },
  getData: function getData(api, params) {
    var url = this.apiToUrl(api);
    var paramsData = this.checkAppkey(params);
    return new Promise(function (resolve, reject) {
      eeui.ajax({
        url: url,
        data: paramsData
      }, function (res) {
        if (res.status === "success") {
          if (res.result.ret === 1) {
            resolve(res.result.data);
          } else {
            reject({
              code: res.result.code,
              msg: res.result.msg
            });
          }
        } else {}
        // eeui.toast(`"请求失败", ${JSON.stringify(res)}`);

        // this.adsData = res.result.data.ads;
        // this.tipsData = res.result.data.tips;
      });
    });
  },
  postData: function postData(api, params) {
    var url = this.apiToUrl(api);
    var paramsData = this.checkAppkey(params);
    // eeui.toast(`"开始请求", ${url}，${JSON.stringify(paramsData)}`);
    return new Promise(function (resolve, reject) {
      eeui.ajax({
        url: url,
        data: paramsData,
        method: 'post'
      }, function (res) {
        if (res.status === "success") {
          if (res.result.ret === 1) {
            // eeui.toast(`"请求成功", ${JSON.stringify(res)}`);
            resolve(res.result.data);
          } else {
            // eeui.toast(`"请求成功:but ret = -1", ${JSON.stringify(res.result.msg)}`);
            reject({
              code: res.result.code,
              msg: res.result.msg
            });
          }
        } else {}
        // eeui.toast(`"请求失败", ${JSON.stringify(res)}`);

        // this.adsData = res.result.data.ads;
        // this.tipsData = res.result.data.tips;
      });
    });
  }
};

exports.default = Http;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var appConfig = {
  APPNAME: 'Exchange',
  APPKEY: '5yupjrc7tbhwufl8oandzidjyrmg6blc',
  CHANNEL: 0,
  HTTP_HOST_PREPROD: 'https://exchange-test2.oneitfarm.com/server'
};

exports.default = appConfig;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "market": {
    "flex": 1
  },
  "market-tabbar": {
    "flex": 1,
    "width": "750"
  },
  "market-header": {
    "position": "relative"
  },
  "market-search": {
    "width": "50",
    "height": "50",
    "position": "absolute",
    "right": "16",
    "top": "16"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MarketButton = __webpack_require__(8);

var _MarketButton2 = _interopRequireDefault(_MarketButton);

var _Http = __webpack_require__(0);

var _Http2 = _interopRequireDefault(_Http);

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

var eeui = app.requireModule("eeui");
exports.default = {
  components: {
    MarketButton: _MarketButton2.default
  },
  props: {
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      tabData: [],
      eeuiStyle: {
        tabType: "top",
        tabBackgroundColor: "#ffffff",
        indicatorColor: "#2C97DE",
        indicatorWidth: "120",
        textSelectColor: "#2C97DE",
        textUnselectColor: "#5b5b5b",
        underlineColor: "#2d8cf0"
      },
      tabPages: [{
        title: "自选",
        url: "MarketFollowData.js"
      }, {
        title: "USDT",
        url: "MarketData.js",
        params: { type: "USDT" }
      }, {
        title: "BTC",
        url: "MarketData.js",
        params: { type: "BTC" }
      }, {
        title: "ETH",
        url: "MarketData.js",
        params: { type: "ETH" }
      }]
    };
  },
  created: function created() {},

  methods: {}
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Market/MarketButton.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3fd2db21"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "MarketButton": {
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "paddingTop": "14"
  },
  "MarketButton-content": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderColor": "#2d8cf0",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderRadius": "8",
    "width": "400"
  },
  "MarketButton-item": {
    "width": "200",
    "paddingTop": "14",
    "paddingRight": 0,
    "paddingBottom": "14",
    "paddingLeft": 0,
    "textAlign": "center",
    "color": "#2d8cf0"
  },
  "MarketButton-left": {
    "borderRightColor": "#2d8cf0",
    "borderRightStyle": "solid",
    "borderRightWidth": "1"
  },
  "MarketButton-leftchedked": {
    "backgroundColor": "#2d8cf0",
    "borderTopLeftRadius": "8",
    "borderBottomLeftRadius": "8",
    "color": "#ffffff"
  },
  "MarketButton-rightchedked": {
    "backgroundColor": "#2d8cf0",
    "borderTopRightRadius": "8",
    "borderBottomRightRadius": "8",
    "color": "#ffffff"
  }
}

/***/ }),
/* 10 */
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

exports.default = {
  name: 'MarketButton',
  data: function data() {
    return {
      ORadioButton: [{
        label: 'Exchange',
        value: 'exchange'
      }, {
        label: 'Global',
        value: 'global'
      }],
      currValue: 'exchange'
    };
  },

  methods: {
    btnClick: function btnClick(data) {
      this.currValue = data;
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["MarketButton"]
  }, [_c('div', {
    staticClass: ["MarketButton-content"]
  }, [_c('text', {
    staticClass: ["MarketButton-item", "MarketButton-left"],
    class: [_vm.currValue === 'exchange' ? 'MarketButton-leftchedked' : ''],
    on: {
      "click": function($event) {
        _vm.btnClick('exchange')
      }
    }
  }, [_vm._v("Exchange")]), _c('text', {
    staticClass: ["MarketButton-item"],
    class: [_vm.currValue === 'global' ? 'MarketButton-rightchedked' : ''],
    on: {
      "click": function($event) {
        _vm.btnClick('global')
      }
    }
  }, [_vm._v("Global")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["market"]
  }, [(_vm.showHeader) ? _c('div', {
    staticClass: ["market-header"]
  }, [_c('MarketButton'), _c('icon', {
    staticClass: ["market-search"],
    attrs: {
      "eeui": {
        content: 'ios-search',
        fontSize: 50,
        color: '#b3b3b3'
      }
    }
  })], 1) : _vm._e(), _c('tabbar', {
    ref: "refMarket",
    staticClass: ["market-tabbar"],
    attrs: {
      "eeui": _vm.eeuiStyle,
      "tabPages": _vm.tabPages
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/Market.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4620c1e0"
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


/***/ })
/******/ ]);