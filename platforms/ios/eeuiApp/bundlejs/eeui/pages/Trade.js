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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(58)
)

/* script */
__vue_exports__ = __webpack_require__(59)

/* template */
var __vue_template__ = __webpack_require__(60)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/UI/Popover/OPopover.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7f46cb4a"
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(78)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/Trade.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ae67f120"
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
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "trade": {
    "flex": 1
  },
  "side_panel": {
    "width": "750",
    "flex": 1
  },
  "panel_menu": {
    "width": "380",
    "paddingTop": "26",
    "paddingBottom": "26",
    "paddingRight": "20",
    "paddingLeft": "20",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#ffffff"
  },
  "content": {
    "width": "750"
  },
  "content-navbar": {
    "width": "750",
    "height": "100"
  },
  "content-navbar-icon": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "content-navbar-title": {
    "color": "#ffffff"
  },
  "content-body": {
    "width": "750",
    "marginTop": "200",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content-body-toggle": {
    "textAlign": "center",
    "marginTop": "20",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "paddingRight": "30",
    "color": "#ffffff",
    "backgroundColor": "#00b4ff"
  },
  "trade-header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": 0,
    "paddingRight": "16",
    "paddingBottom": 0,
    "paddingLeft": "16",
    "backgroundColor": "#ffffff"
  },
  "trade-header-icon": {
    "width": "50",
    "height": "50"
  },
  "trade-content": {
    "backgroundColor": "#ffffff",
    "width": "750",
    "paddingTop": "16",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "trade-order": {
    "width": "750",
    "marginTop": "16"
  },
  "trade-order-title": {
    "marginLeft": "16",
    "marginBottom": "16",
    "color": "#b3b3b3",
    "fontSize": "28"
  },
  "trade-order-content": {
    "width": "750",
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  "trade-order-content_guide": {
    "paddingTop": "100",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "trade-order-content_guide_text": {
    "color": "#b3b3b3",
    "fontSize": "24",
    "marginBottom": "8"
  },
  "trade-order-content_guide_btc": {
    "color": "#3075ee"
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TradeTypeButton = __webpack_require__(42);

var _TradeTypeButton2 = _interopRequireDefault(_TradeTypeButton);

var _TradeHeader = __webpack_require__(46);

var _TradeHeader2 = _interopRequireDefault(_TradeHeader);

var _TradeOperate = __webpack_require__(55);

var _TradeOperate2 = _interopRequireDefault(_TradeOperate);

var _TradeDeep = __webpack_require__(70);

var _TradeDeep2 = _interopRequireDefault(_TradeDeep);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TradeTypeButton: _TradeTypeButton2.default,
    TradeHeader: _TradeHeader2.default,
    TradeOperate: _TradeOperate2.default,
    TradeDeep: _TradeDeep2.default
  },
  methods: {
    itemClick: function itemClick(params) {
      // eeui.toast(
      //   "点击了" + (params.position + 1) + "项，name：" + params.name
      // );
    },
    switchListener: function switchListener(params) {
      // eeui.toast("侧边栏：" + (params.show ? "显示了" : "隐藏了"));
    },
    menuToggle: function menuToggle() {
      this.$refs.reflectName.menuToggle();
    },
    signIn: function signIn() {
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    }
  }
};

/***/ }),
/* 42 */
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Trade/TradeTypeButton.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-34fd0376"
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
  }, [_vm._v("币币")]), _c('text', {
    staticClass: ["MarketButton-item"],
    class: [_vm.currValue === 'global' ? 'MarketButton-rightchedked' : ''],
    on: {
      "click": function($event) {
        _vm.btnClick('global')
      }
    }
  }, [_vm._v("杠杆")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(54)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Trade/TradeHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-616361c6"
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
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "tradeheader": {
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16",
    "borderBottomColor": "#f0f1f3",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "tradeheader-content": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "tradeheader-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "64",
    "zIndex": 99999
  },
  "tradeheader-left-market": {
    "fontSize": "32",
    "marginRight": "8"
  },
  "tradeheader-right-price": {
    "fontSize": "32",
    "marginRight": "16"
  },
  "tradeheader-right-dao": {
    "fontSize": "24",
    "color": "#b3b3b3",
    "marginRight": "16"
  },
  "tradeheader-right-icon": {
    "width": "50",
    "height": "50"
  },
  "tradeheader-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "height": "64"
  },
  "tradeheader-icon": {
    "width": "32",
    "height": "32"
  },
  "selectmarket": {
    "width": "750",
    "height": "600"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OPopup = __webpack_require__(49);

var _OPopup2 = _interopRequireDefault(_OPopup);

var _Market = __webpack_require__(53);

var _Market2 = _interopRequireDefault(_Market);

var _Http = __webpack_require__(0);

var _Http2 = _interopRequireDefault(_Http);

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
//
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
    OPopup: _OPopup2.default,
    Market: _Market2.default
  },
  data: function data() {
    return {
      isBottomShow: false,
      height: 400,
      btns: [{
        text: "一位小数",
        key: "1"
      }, {
        text: "零位小数",
        key: "0"
      }, {
        text: "十位整数",
        key: "10"
      }],
      popoverPosition: { x: 0, y: 160 },
      popoverArrowPosition: { pos: "top", x: 0 }
    };
  },
  created: function created() {},

  methods: {
    minibarRightButtonClick: function minibarRightButtonClick() {
      this.$refs["wxc-popover"].wxcPopoverShow();
    },
    popoverButtonClicked: function popoverButtonClicked(obj) {
      this.curTransferMode.title = obj.item.text;
      this.curTransferMode.key = obj.item.key;
    },
    openBottomPopup: function openBottomPopup() {
      this.isBottomShow = true;
    },
    popupOverlayBottomClick: function popupOverlayBottomClick() {
      this.isBottomShow = false;
    }
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)

/* script */
__vue_exports__ = __webpack_require__(51)

/* template */
var __vue_template__ = __webpack_require__(52)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/UI/Popup/OPopup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fbc58e8a"
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
/* 50 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "zIndex": 999
  },
  "g-cover": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "zIndex": 1
  },
  "g-popover": {
    "position": "fixed",
    "paddingTop": "15",
    "zIndex": 10
  },
  "u-popover-arrow": {
    "position": "absolute",
    "borderRadius": "4",
    "width": "30",
    "height": "30",
    "backgroundColor": "#ffffff"
  },
  "u-popover-inner": {
    "backgroundColor": "#ffffff"
  },
  "i-btn": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginLeft": "20",
    "marginRight": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderBottomColor": "#dddddd"
  },
  "i-btn-noborder": {
    "borderBottomColor": "#ffffff"
  },
  "btn-icon": {
    "width": "32",
    "height": "32",
    "marginRight": "16"
  },
  "btn-text": {
    "flex": 1,
    "height": "80",
    "fontSize": "30",
    "lineHeight": "80"
  },
  "text-align-center": {
    "textAlign": "center"
  }
}

/***/ }),
/* 51 */
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

var animation = weex.requireModule("animation");
exports.default = {
  props: {
    buttons: {
      type: Array,
      default: []
    },
    position: {
      type: Object,
      default: function _default() {
        return {
          x: 0,
          y: 0
        };
      }
    },
    arrowPosition: {
      type: Object,
      default: function _default() {
        return {
          pos: "top",
          x: 0,
          y: 0
        };
      }
    },
    coverColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)"
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    textStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      show: false,
      showIn: false
    };
  },
  computed: {
    coverStyle: function coverStyle() {
      return this.coverColor ? {
        backgroundColor: this.coverColor,
        opacity: this.hasAnimation || !this.showIn ? "0" : "1"
      } : "";
    },
    transformOrigin: function transformOrigin() {
      var _arrowPosition = this.arrowPosition,
          _arrowPosition$x = _arrowPosition.x,
          x = _arrowPosition$x === undefined ? 0 : _arrowPosition$x,
          _arrowPosition$y = _arrowPosition.y,
          y = _arrowPosition$y === undefined ? 0 : _arrowPosition$y,
          _arrowPosition$pos = _arrowPosition.pos,
          pos = _arrowPosition$pos === undefined ? "top" : _arrowPosition$pos;

      var _origins = [];
      switch (pos) {
        case "top":
        case "bottom":
          _origins = [x < 0 ? "right" : "left", pos];
          break;
        case "left":
        case "right":
          _origins = [pos, y < 0 ? "bottom" : "top"];
          break;
      }
      return _origins.join(" ");
    },
    contentTransform: function contentTransform() {
      var _arrowPosition$pos2 = this.arrowPosition.pos,
          pos = _arrowPosition$pos2 === undefined ? "top" : _arrowPosition$pos2;
      var _arrowPosition2 = this.arrowPosition,
          _arrowPosition2$x = _arrowPosition2.x,
          x = _arrowPosition2$x === undefined ? 0 : _arrowPosition2$x,
          _arrowPosition2$y = _arrowPosition2.y,
          y = _arrowPosition2$y === undefined ? 0 : _arrowPosition2$y;

      var _translates = ["scale(0)"];
      if (x >= 0 && x < 22) {
        x = 22;
      } else if (x < 0 && x > -22) {
        x = -22;
      }
      if (y >= 0 && y < 22) {
        y = 22;
      } else if (y < 0 && y > -22) {
        y = -22;
      }
      switch (pos) {
        case "top":
        case "bottom":
          _translates[1] = "translateX(" + (x < 0 ? x - 15 : x + 15) + "px)";
          break;
        case "left":
        case "right":
          _translates[1] = "translateY(" + (y < 0 ? y - 15 : y + 15) + "px)";
          break;
      }
      return _translates.join(" ");
    },
    contentStyle: function contentStyle() {
      var _position = this.position,
          _position$x = _position.x,
          x = _position$x === undefined ? 0 : _position$x,
          _position$y = _position.y,
          y = _position$y === undefined ? 0 : _position$y;

      var style = {};
      x < 0 ? style.right = -x + "px" : style.left = x + "px";
      y < 0 ? style.bottom = -y + "px" : style.top = y + "px";
      style.opacity = this.hasAnimation || !this.showIn ? "0" : "1";
      style.transform = this.hasAnimation || !this.showIn ? this.contentTransform : "scale(1)";
      style.transformOrigin = this.transformOrigin;
      return style;
    },
    arrowStyle: function arrowStyle() {
      var _arrowPosition3 = this.arrowPosition,
          _arrowPosition3$x = _arrowPosition3.x,
          x = _arrowPosition3$x === undefined ? 0 : _arrowPosition3$x,
          _arrowPosition3$y = _arrowPosition3.y,
          y = _arrowPosition3$y === undefined ? 0 : _arrowPosition3$y;
      var _arrowPosition$pos3 = this.arrowPosition.pos,
          pos = _arrowPosition$pos3 === undefined ? "top" : _arrowPosition$pos3;

      var style = {};
      switch (pos) {
        case "top":
          style.top = "6px";
        case "bottom":
          //eslint-disable-line
          !style.top && (style.bottom = "6px");
          style.transform = "scaleX(0.8) rotate(45deg)";
          if (x >= 0 && x < 22) {
            x = 22;
          } else if (x < 0 && x > -22) {
            x = -22;
          }
          x < 0 ? style.right = -x + "px" : style.left = x + "px";
          break;
        case "left":
          style.left = "6px";
        case "right":
          //eslint-disable-line
          !style.left && (style.right = "6px");
          style.transform = "scaleY(0.8) rotate(45deg)";
          if (y >= 0 && y < 22) {
            y = 22;
          } else if (y < 0 && y > -22) {
            y = -22;
          }
          y < 0 ? style.bottom = -y + "px" : style.top = y + "px";
          break;
        default:
          break;
      }
      return style;
    }
  },
  methods: {
    wxcPopoverShow: function wxcPopoverShow() {
      var _this = this;

      if (this.animationLock) {
        return;
      }
      this.show = true;
      if (this.hasAnimation) {
        setTimeout(function () {
          return _this.wxcPopoverAnimationShow();
        }, 40);
      } else {
        setTimeout(function () {
          return _this.showIn = true;
        }, 40);
      }
    },

    /**
     * smooth in
     **/
    wxcPopoverAnimationShow: function wxcPopoverAnimationShow() {
      var _this2 = this;

      var popoverEl = this.$refs["wxc-popover"];
      var coverEl = this.$refs["wxc-cover"];
      if (!coverEl || !popoverEl) {
        return;
      }
      this.setAnimationLock();
      var a1End = false;
      var a2End = false;
      animation.transition(popoverEl, {
        styles: {
          opacity: 1,
          transform: "scale(1)",
          transformOrigin: this.transformOrigin
        },
        delay: 0,
        duration: 250,
        timingFunction: "ease-out"
      }, function (e) {
        a1End = true;
        if (a1End && a2End) {
          _this2.animationLock = false;
        }
      });
      animation.transition(coverEl, {
        styles: {
          opacity: 1
        },
        delay: 0,
        duration: 250,
        timingFunction: "ease-in"
      }, function (e) {
        a2End = true;
        if (a1End && a2End) {
          _this2.animationLock = false;
        }
      });
    },
    wxcButtonClicked: function wxcButtonClicked(index, item) {
      if (this.animationLock) {
        return;
      }
      this.$emit("wxcPopoverButtonClicked", { item: item, index: index });
      this.hideAction();
    },

    /**
     * 隐藏操作
     */
    hideAction: function hideAction() {
      var _this3 = this;

      if (this.animationLock) {
        return;
      }
      if (this.hasAnimation) {
        this.setAnimationLock();
        var popoverEl = this.$refs["wxc-popover"];
        var coverEl = this.$refs["wxc-cover"];
        if (!popoverEl || !coverEl) {
          return;
        }
        var a1End = false;
        var a2End = false;
        animation.transition(popoverEl, {
          styles: {
            opacity: 0,
            transform: this.contentTransform,
            transformOrigin: this.transformOrigin
          },
          duration: 250
        }, function () {
          a1End = true;
          if (a1End && a2End) {
            _this3.show = false;
            _this3.showIn = false;
            _this3.animationLock = false;
          }
        });
        animation.transition(coverEl, {
          styles: {
            opacity: 0
          },
          duration: 250
        }, function () {
          a2End = true;
          if (a1End && a2End) {
            _this3.show = false;
            _this3.showIn = false;
            _this3.animationLock = false;
          }
        });
      } else {
        this.show = false;
        this.showIn = false;
      }
    },

    /**
     * 设置动画锁
     */
    setAnimationLock: function setAnimationLock() {
      this.animationLock = true;
    }
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.show) ? _c('div', {
    ref: "wxc-cover",
    staticClass: ["g-cover"],
    style: _vm.coverStyle,
    on: {
      "click": _vm.hideAction
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    ref: "wxc-popover",
    staticClass: ["g-popover"],
    style: _vm.contentStyle
  }, [_c('div', {
    staticClass: ["u-popover-arrow"],
    style: _vm.arrowStyle
  }), _c('div', {
    staticClass: ["u-popover-inner"]
  }, [_vm._t("default")], 2)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 53 */
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


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tradeheader"]
  }, [_c('div', {
    staticClass: ["tradeheader-content"]
  }, [_c('div', {
    staticClass: ["tradeheader-left"],
    on: {
      "click": _vm.minibarRightButtonClick
    }
  }, [_c('text', {
    staticClass: ["tradeheader-left-market"]
  }, [_vm._v("BTC/USDT")]), _c('icon', {
    staticClass: ["tradeheader-icon"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-down',
        fontSize: 32,
        color: '#b3b3b3'
      }
    },
    on: {
      "click": _vm.menuToggle
    }
  })], 1), _c('div', {
    staticClass: ["tradeheader-right"]
  }, [_c('text', {
    staticClass: ["tradeheader-right-price"]
  }, [_vm._v("8585.5")]), _c('text', {
    staticClass: ["tradeheader-right-dao"]
  }, [_vm._v("$8585.5")]), _c('icon', {
    staticClass: ["tradeheader-right-icon"],
    attrs: {
      "eeui": {
        content: 'ios-stats',
        fontSize: 50,
        color: '#3075ef'
      }
    },
    on: {
      "click": _vm.menuToggle
    }
  })], 1)]), _c('OPopup', {
    ref: "wxc-popover",
    attrs: {
      "buttons": _vm.btns,
      "position": _vm.popoverPosition,
      "arrowPosition": _vm.popoverArrowPosition
    },
    on: {
      "wxcPopoverButtonClicked": _vm.popoverButtonClicked
    }
  }, [_c('div', {
    staticClass: ["selectmarket"]
  }, [_c('Market', {
    attrs: {
      "showHeader": false
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(56)
)

/* script */
__vue_exports__ = __webpack_require__(57)

/* template */
var __vue_template__ = __webpack_require__(69)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Trade/TradeOperate.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e2ea39ca"
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
/* 56 */
/***/ (function(module, exports) {

module.exports = {
  "tradeoperate": {
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  },
  "tradeoperate-type": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "tradeoperate-type_text": {
    "fontSize": "28",
    "marginTop": "16",
    "marginBottom": "16"
  },
  "tradeoperate-info_text": {
    "fontSize": "24",
    "marginTop": "16",
    "marginBottom": "16",
    "color": "#999999"
  },
  "tradeoperate-type_icon": {
    "width": "30",
    "height": "30"
  },
  "tradeoperate-right-price": {
    "fontSize": "32",
    "marginRight": "16"
  },
  "tradeoperate-right-dao": {
    "fontSize": "24",
    "color": "#b3b3b3",
    "marginRight": "16"
  },
  "tradeoperate-right-icon": {
    "width": "50",
    "height": "50"
  },
  "tradeoperate-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "64"
  },
  "tradeoperate-icon": {
    "width": "32",
    "height": "32"
  },
  "tradeoperate-step": {
    "width": "359"
  },
  "tradeoperate-button": {
    "width": "359",
    "height": "60"
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OPopover = __webpack_require__(29);

var _OPopover2 = _interopRequireDefault(_OPopover);

var _OStepper = __webpack_require__(61);

var _OStepper2 = _interopRequireDefault(_OStepper);

var _TradeOpearteButton = __webpack_require__(65);

var _TradeOpearteButton2 = _interopRequireDefault(_TradeOpearteButton);

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
//
//
//
//
//
//
//
//
//
//
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
  components: {
    OStepper: _OStepper2.default,
    OPopover: _OPopover2.default,
    TradeOpearteButton: _TradeOpearteButton2.default
  },
  data: function data() {
    return {
      curTransferype: "buy",
      curTransferMode: {
        title: "限价买入",
        key: "0"
      },
      popoverPosition: { x: 0, y: 300 },
      popoverArrowPosition: { pos: "top", x: 0 }
    };
  },
  created: function created() {},

  computed: {
    btns: function btns() {
      var str = this.curTransferype === "buy" ? "买入" : "卖出";
      var bdata = [{
        text: "\u9650\u4EF7" + str,
        key: "0"
      }, {
        text: "\u5E02\u4EF7" + str,
        key: "1"
      }];
      return bdata;
    }
  },
  methods: {
    stepperValueChange: function stepperValueChange(e) {
      console.log(e.value);
    },
    minibarRightButtonClick: function minibarRightButtonClick() {
      this.$refs["wxc-popover"].wxcPopoverShow();
    },
    popoverButtonClicked: function popoverButtonClicked(obj) {
      this.curTransferMode.title = obj.item.text;
      this.curTransferMode.key = obj.item.key;
    },
    btnClick: function btnClick(type) {
      this.curTransferype = type;
    }
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "zIndex": 999
  },
  "g-cover": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "zIndex": 1
  },
  "g-popover": {
    "position": "fixed",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "zIndex": 10
  },
  "u-popover-arrow": {
    "position": "absolute",
    "borderRadius": "4",
    "width": "30",
    "height": "30",
    "backgroundColor": "#ffffff"
  },
  "u-popover-inner": {
    "borderRadius": "10",
    "backgroundColor": "#ffffff"
  },
  "i-btn": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginLeft": "20",
    "marginRight": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderBottomColor": "#dddddd"
  },
  "i-btn-noborder": {
    "borderBottomColor": "#ffffff"
  },
  "btn-icon": {
    "width": "32",
    "height": "32",
    "marginRight": "16"
  },
  "btn-text": {
    "flex": 1,
    "height": "80",
    "fontSize": "30",
    "lineHeight": "80"
  },
  "text-align-center": {
    "textAlign": "center"
  }
}

/***/ }),
/* 59 */
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

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    buttons: {
      type: Array,
      default: []
    },
    position: {
      type: Object,
      default: function _default() {
        return {
          x: 0,
          y: 0
        };
      }
    },
    arrowPosition: {
      type: Object,
      default: function _default() {
        return {
          pos: 'top',
          x: 0,
          y: 0
        };
      }
    },
    coverColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    textStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      show: false,
      showIn: false
    };
  },
  computed: {
    coverStyle: function coverStyle() {
      return this.coverColor ? { backgroundColor: this.coverColor, opacity: this.hasAnimation || !this.showIn ? '0' : '1' } : '';
    },
    transformOrigin: function transformOrigin() {
      var _arrowPosition = this.arrowPosition,
          _arrowPosition$x = _arrowPosition.x,
          x = _arrowPosition$x === undefined ? 0 : _arrowPosition$x,
          _arrowPosition$y = _arrowPosition.y,
          y = _arrowPosition$y === undefined ? 0 : _arrowPosition$y,
          _arrowPosition$pos = _arrowPosition.pos,
          pos = _arrowPosition$pos === undefined ? 'top' : _arrowPosition$pos;

      var _origins = [];
      switch (pos) {
        case 'top':
        case 'bottom':
          _origins = [x < 0 ? 'right' : 'left', pos];
          break;
        case 'left':
        case 'right':
          _origins = [pos, y < 0 ? 'bottom' : 'top'];
          break;
      }
      return _origins.join(' ');
    },
    contentTransform: function contentTransform() {
      var _arrowPosition$pos2 = this.arrowPosition.pos,
          pos = _arrowPosition$pos2 === undefined ? 'top' : _arrowPosition$pos2;
      var _arrowPosition2 = this.arrowPosition,
          _arrowPosition2$x = _arrowPosition2.x,
          x = _arrowPosition2$x === undefined ? 0 : _arrowPosition2$x,
          _arrowPosition2$y = _arrowPosition2.y,
          y = _arrowPosition2$y === undefined ? 0 : _arrowPosition2$y;

      var _translates = ['scale(0)'];
      if (x >= 0 && x < 22) {
        x = 22;
      } else if (x < 0 && x > -22) {
        x = -22;
      }
      if (y >= 0 && y < 22) {
        y = 22;
      } else if (y < 0 && y > -22) {
        y = -22;
      }
      switch (pos) {
        case 'top':
        case 'bottom':
          _translates[1] = 'translateX(' + (x < 0 ? x - 15 : x + 15) + 'px)';
          break;
        case 'left':
        case 'right':
          _translates[1] = 'translateY(' + (y < 0 ? y - 15 : y + 15) + 'px)';
          break;
      }
      return _translates.join(' ');
    },
    contentStyle: function contentStyle() {
      var _position = this.position,
          _position$x = _position.x,
          x = _position$x === undefined ? 0 : _position$x,
          _position$y = _position.y,
          y = _position$y === undefined ? 0 : _position$y;

      var style = {};
      x < 0 ? style.right = -x + 'px' : style.left = x + 'px';
      y < 0 ? style.bottom = -y + 'px' : style.top = y + 'px';
      style.opacity = this.hasAnimation || !this.showIn ? '0' : '1';
      style.transform = this.hasAnimation || !this.showIn ? this.contentTransform : 'scale(1)';
      style.transformOrigin = this.transformOrigin;
      return style;
    },
    arrowStyle: function arrowStyle() {
      var _arrowPosition3 = this.arrowPosition,
          _arrowPosition3$x = _arrowPosition3.x,
          x = _arrowPosition3$x === undefined ? 0 : _arrowPosition3$x,
          _arrowPosition3$y = _arrowPosition3.y,
          y = _arrowPosition3$y === undefined ? 0 : _arrowPosition3$y;
      var _arrowPosition$pos3 = this.arrowPosition.pos,
          pos = _arrowPosition$pos3 === undefined ? 'top' : _arrowPosition$pos3;

      var style = {};
      switch (pos) {
        case 'top':
          style.top = '6px';
        case 'bottom':
          //eslint-disable-line
          !style.top && (style.bottom = '6px');
          style.transform = 'scaleX(0.8) rotate(45deg)';
          if (x >= 0 && x < 22) {
            x = 22;
          } else if (x < 0 && x > -22) {
            x = -22;
          }
          x < 0 ? style.right = -x + 'px' : style.left = x + 'px';
          break;
        case 'left':
          style.left = '6px';
        case 'right':
          //eslint-disable-line
          !style.left && (style.right = '6px');
          style.transform = 'scaleY(0.8) rotate(45deg)';
          if (y >= 0 && y < 22) {
            y = 22;
          } else if (y < 0 && y > -22) {
            y = -22;
          }
          y < 0 ? style.bottom = -y + 'px' : style.top = y + 'px';
          break;
        default:
          break;
      }
      return style;
    }
  },
  methods: {
    wxcPopoverShow: function wxcPopoverShow() {
      var _this = this;

      if (this.animationLock) {
        return;
      }
      this.show = true;
      if (this.hasAnimation) {
        setTimeout(function () {
          return _this.wxcPopoverAnimationShow();
        }, 40);
      } else {
        setTimeout(function () {
          return _this.showIn = true;
        }, 40);
      }
    },

    /**
    * smooth in
    **/
    wxcPopoverAnimationShow: function wxcPopoverAnimationShow() {
      var _this2 = this;

      var popoverEl = this.$refs['wxc-popover'];
      var coverEl = this.$refs['wxc-cover'];
      if (!coverEl || !popoverEl) {
        return;
      }
      this.setAnimationLock();
      var a1End = false;
      var a2End = false;
      animation.transition(popoverEl, {
        styles: {
          opacity: 1,
          transform: 'scale(1)',
          transformOrigin: this.transformOrigin
        },
        delay: 0,
        duration: 250,
        timingFunction: 'ease-out'
      }, function (e) {
        a1End = true;
        if (a1End && a2End) {
          _this2.animationLock = false;
        }
      });
      animation.transition(coverEl, {
        styles: {
          opacity: 1
        },
        delay: 0,
        duration: 250,
        timingFunction: 'ease-in'
      }, function (e) {
        a2End = true;
        if (a1End && a2End) {
          _this2.animationLock = false;
        }
      });
    },
    wxcButtonClicked: function wxcButtonClicked(index, item) {
      if (this.animationLock) {
        return;
      }
      this.$emit('wxcPopoverButtonClicked', { item: item, index: index });
      this.hideAction();
    },

    /**
       * 隐藏操作
       */
    hideAction: function hideAction() {
      var _this3 = this;

      if (this.animationLock) {
        return;
      }
      if (this.hasAnimation) {
        this.setAnimationLock();
        var popoverEl = this.$refs['wxc-popover'];
        var coverEl = this.$refs['wxc-cover'];
        if (!popoverEl || !coverEl) {
          return;
        }
        var a1End = false;
        var a2End = false;
        animation.transition(popoverEl, {
          styles: {
            opacity: 0,
            transform: this.contentTransform,
            transformOrigin: this.transformOrigin
          },
          duration: 250
        }, function () {
          a1End = true;
          if (a1End && a2End) {
            _this3.show = false;
            _this3.showIn = false;
            _this3.animationLock = false;
          }
        });
        animation.transition(coverEl, {
          styles: {
            opacity: 0
          },
          duration: 250
        }, function () {
          a2End = true;
          if (a1End && a2End) {
            _this3.show = false;
            _this3.showIn = false;
            _this3.animationLock = false;
          }
        });
      } else {
        this.show = false;
        this.showIn = false;
      }
    },

    /**
       * 设置动画锁
       */
    setAnimationLock: function setAnimationLock() {
      this.animationLock = true;
    }
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.show) ? _c('div', {
    ref: "wxc-cover",
    staticClass: ["g-cover"],
    style: _vm.coverStyle,
    on: {
      "click": _vm.hideAction
    }
  }) : _vm._e(), (_vm.show && _vm.buttons.length) ? _c('div', {
    ref: "wxc-popover",
    staticClass: ["g-popover"],
    style: _vm.contentStyle
  }, [_c('div', {
    staticClass: ["u-popover-arrow"],
    style: _vm.arrowStyle
  }), _c('div', {
    staticClass: ["u-popover-inner"]
  }, _vm._l((_vm.buttons), function(item, i) {
    return _c('div', {
      key: i,
      class: ['i-btn', i === _vm.buttons.length - 1 ? 'i-btn-noborder' : ''],
      on: {
        "click": function($event) {
          _vm.wxcButtonClicked(i, item)
        }
      }
    }, [(item.icon) ? _c('image', {
      staticClass: ["btn-icon"],
      attrs: {
        "src": item.icon
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["btn-text"],
      style: _vm.textStyle
    }, [_vm._v(_vm._s(item.text))])])
  }))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(62)
)

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(64)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/UI/Stepper/OStepper.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-60384bdb"
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
/* 62 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-stepper": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "343",
    "borderStyle": "solid",
    "borderWidth": "2",
    "borderColor": "#ededed",
    "borderRadius": "6"
  },
  "stepper-plus": {
    "width": "56",
    "height": "56",
    "backgroundColor": "#ededed",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6"
  },
  "stepper-minus": {
    "width": "56",
    "height": "56",
    "backgroundColor": "#ededed",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6"
  },
  "stepper-input": {
    "borderWidth": 0,
    "textAlign": "center",
    "color": "#3d3d3d",
    "fontSize": "30",
    "lineHeight": "56",
    "height": "56",
    "width": "150"
  },
  "stepper-icon": {
    "fontSize": "36",
    "color": "#666666",
    "marginTop": "-4"
  }
}

/***/ }),
/* 63 */
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

exports.default = {
  props: {
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100000000000
    },
    step: {
      type: [String, Number],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Number],
      default: 0
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    inputPlaceholder: {
      type: String
    }
  },
  computed: {
    disableStyle: function disableStyle() {
      if (this.disabled) {
        return {
          color: "#cccccc"
        };
      }
    },
    valueString: function valueString() {
      if (this.value === 0) {
        return null;
      } else {
        return this.value.toString();
      }
    }
  },
  data: function data() {
    return {
      value: 0,
      isLess: false,
      isOver: false
    };
  },
  watch: {
    defaultValue: function defaultValue(newNum) {
      this.value = newNum;
    }
  },
  created: function created() {
    this.value = this.defaultValue;
    if (this.disabled) {
      this.isLess = true;
      this.isOver = true;
    }
  },

  methods: {
    minusClicked: function minusClicked() {
      if (this.disabled) {
        return;
      }
      var isMinOver = this.value <= this.min;
      if (this.value > this.min) {
        this.value = this.value - this.step;
      }
      this.$emit("wxcStepperValueChanged", { value: this.value });
    },
    plusClicked: function plusClicked() {
      if (this.disabled) {
        return;
      }
      var isMaxOver = this.value >= this.max;
      if (this.value < this.max) {
        this.value = this.value + this.step;
      }
      this.$emit("wxcStepperValueChanged", { value: this.value });
    },
    onInput: function onInput(e) {
      this.correctInputValue(e.value);
    },
    onBlur: function onBlur(e) {
      this.correctInputValue(e.value);
    },
    correctInputValue: function correctInputValue(v) {
      var lastValue = this.value;
      if (/^[1-9]\d{0,}$/.test(v) && v >= this.min && v <= this.max) {
        this.value = v;
      } else {
        // this.value = "";
        // setTimeout(() => {
        //   this.value = lastValue;
        // }, 1);
      }
      this.$emit("wxcStepperValueChanged", { value: this.value });
    },
    resetDisabledStyle: function resetDisabledStyle() {
      this.isLess = false;
      this.isOver = false;
    }
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-stepper"]
  }, [_c('div', {
    staticClass: ["stepper-minus"],
    attrs: {
      "ariaLabel": "减数",
      "accessible": true
    },
    on: {
      "click": _vm.minusClicked
    }
  }, [_c('text', {
    staticClass: ["stepper-icon"],
    style: {
      color: _vm.isLess ? '#cccccc' : '#666666'
    }
  }, [_vm._v("-")])]), _c('input', {
    staticClass: ["stepper-input"],
    style: _vm.disableStyle,
    attrs: {
      "type": "number",
      "value": _vm.valueString,
      "placeholder": _vm.inputPlaceholder,
      "disabled": _vm.disabled || _vm.readOnly
    },
    on: {
      "input": _vm.onInput,
      "blur": _vm.onBlur
    }
  }), _c('div', {
    staticClass: ["stepper-plus"],
    attrs: {
      "ariaLabel": "加数",
      "accessible": true
    },
    on: {
      "click": _vm.plusClicked
    }
  }, [_c('text', {
    staticClass: ["stepper-icon"],
    style: {
      color: _vm.isOver ? '#cccccc' : '#666666'
    }
  }, [_vm._v("+")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(68)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Trade/TradeOpearteButton.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f10d4ba2"
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
/* 66 */
/***/ (function(module, exports) {

module.exports = {
  "tradeoperatebutton": {
    "backgroundColor": "#ffffff"
  },
  "tradeoperatebutton-content": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#f7f8fa",
    "borderRadius": "8",
    "width": "359",
    "flex": 1
  },
  "tradeoperatebutton-item": {
    "flex": 1,
    "paddingTop": "12",
    "paddingRight": 0,
    "paddingBottom": "12",
    "paddingLeft": 0,
    "textAlign": "center"
  },
  "tradeoperatebutton-left": {
    "color": "#4db872"
  },
  "tradeoperatebutton-right": {
    "color": "#ee6560"
  },
  "tradeoperatebutton-leftchedked": {
    "backgroundColor": "#4db872",
    "color": "#ffffff"
  },
  "tradeoperatebutton-rightchedked": {
    "backgroundColor": "#ee6560",
    "color": "#ffffff"
  }
}

/***/ }),
/* 67 */
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
  name: "TradeOpearteButton",
  data: function data() {
    return {
      currValue: "buy"
    };
  },

  methods: {
    btnClick: function btnClick(data) {
      this.currValue = data;
      this.$emit("btnClick", this.currValue);
    }
  }
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tradeoperatebutton"]
  }, [_c('div', {
    staticClass: ["tradeoperatebutton-content"]
  }, [_c('text', {
    staticClass: ["tradeoperatebutton-item", "tradeoperatebutton-left"],
    class: [_vm.currValue === 'buy' ? 'tradeoperatebutton-leftchedked' : ''],
    on: {
      "click": function($event) {
        _vm.btnClick('buy')
      }
    }
  }, [_vm._v("买入")]), _c('text', {
    staticClass: ["tradeoperatebutton-item", "tradeoperatebutton-right"],
    class: [_vm.currValue === 'sell' ? 'tradeoperatebutton-rightchedked' : ''],
    on: {
      "click": function($event) {
        _vm.btnClick('sell')
      }
    }
  }, [_vm._v("卖出")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tradeoperate"]
  }, [_c('TradeOpearteButton', {
    on: {
      "btnClick": _vm.btnClick
    }
  }), _c('div', {
    staticClass: ["tradeoperate-type"],
    on: {
      "click": _vm.minibarRightButtonClick
    }
  }, [_c('text', {
    staticClass: ["tradeoperate-type_text"]
  }, [_vm._v(_vm._s(_vm.curTransferMode.title))]), _c('icon', {
    staticClass: ["tradeoperate-type_icon"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-down',
        fontSize: 32,
        color: '#b3b3b3'
      }
    },
    on: {
      "click": _vm.menuToggle
    }
  })], 1), _c('OStepper', {
    attrs: {
      "inputPlaceholder": "价格",
      "max": 10000000
    }
  }), _c('text', {
    staticClass: ["tradeoperate-info_text"]
  }, [_vm._v("估值：-")]), _c('OStepper', {
    attrs: {
      "inputPlaceholder": "数量(BTC)",
      "max": 10000000
    }
  }), _vm._m(0), _c('button', {
    staticClass: ["tradeoperate-button"],
    attrs: {
      "eeui": {
        text: '购买'
      }
    }
  }), _c('OPopover', {
    ref: "wxc-popover",
    attrs: {
      "buttons": _vm.btns,
      "position": _vm.popoverPosition,
      "arrowPosition": _vm.popoverArrowPosition
    },
    on: {
      "wxcPopoverButtonClicked": _vm.popoverButtonClicked
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["tradeoperate-info_text"]
  }, [_vm._v("可用USDT:")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(77)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Trade/TradeDeep.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-794988e5"
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
/* 71 */
/***/ (function(module, exports) {

module.exports = {
  "tradedeep-type": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "tradedeep-type_text": {
    "fontSize": "28",
    "marginTop": "16",
    "marginBottom": "16"
  },
  "tradedeep-info_text": {
    "fontSize": "24",
    "marginTop": "16",
    "marginBottom": "16",
    "color": "#999999"
  },
  "tradedeep-type_icon": {
    "width": "30",
    "height": "30"
  },
  "tradedeep-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "64"
  },
  "tradedeep-left-market": {
    "fontSize": "32",
    "marginRight": "8"
  },
  "tradedeep-right-price": {
    "fontSize": "32",
    "marginRight": "16"
  },
  "tradedeep-right-dao": {
    "fontSize": "24",
    "color": "#b3b3b3",
    "marginRight": "16"
  },
  "tradedeep-right-icon": {
    "width": "50",
    "height": "50"
  },
  "tradedeep-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "64"
  },
  "tradedeep-icon": {
    "width": "32",
    "height": "32"
  },
  "tradedeep-step": {
    "width": "359"
  },
  "tradedeep-button": {
    "width": "359",
    "height": "60"
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OPopover = __webpack_require__(29);

var _OPopover2 = _interopRequireDefault(_OPopover);

var _Http = __webpack_require__(0);

var _Http2 = _interopRequireDefault(_Http);

var _TradeDeepList = __webpack_require__(73);

var _TradeDeepList2 = _interopRequireDefault(_TradeDeepList);

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

exports.default = {
  components: {
    TradeDeepList: _TradeDeepList2.default,
    OPopover: _OPopover2.default
  },
  data: function data() {
    return {
      curTransferype: "buy",
      curTransferMode: {
        title: "十位整数",
        key: "10"
      },
      btns: [{
        text: "一位小数",
        key: "1"
      }, {
        text: "零位小数",
        key: "0"
      }, {
        text: "十位整数",
        key: "10"
      }],
      popoverPosition: { x: 330, y: 250 },
      popoverArrowPosition: { pos: "top", x: -15 }
    };
  },
  created: function created() {},

  computed: {},
  methods: {
    stepperValueChange: function stepperValueChange(e) {
      console.log(e.value);
    },
    minibarRightButtonClick: function minibarRightButtonClick() {
      this.$refs["wxc-popover"].wxcPopoverShow();
    },
    popoverButtonClicked: function popoverButtonClicked(obj) {
      this.curTransferMode.title = obj.item.text;
      this.curTransferMode.key = obj.item.key;
    },
    btnClick: function btnClick(type) {
      this.curTransferype = type;
    }
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(74)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(76)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Trade/TradeDeepList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9fd99fba"
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
/* 74 */
/***/ (function(module, exports) {

module.exports = {
  "tradedeeplist": {
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  },
  "tradedeeplist-header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "324",
    "marginBottom": "8"
  },
  "tradedeeplist-header_text": {
    "color": "#b3b3b3"
  },
  "tradedeeplist-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": "4",
    "marginBottom": "4"
  },
  "tradedeeplist-item_buy": {
    "color": "#ee6560"
  },
  "tradedeeplist-item_sell": {
    "color": "#4db872"
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Http = __webpack_require__(0);

var _Http2 = _interopRequireDefault(_Http);

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

exports.default = {
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {}
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tradedeeplist"]
  }, [_vm._m(0), _vm._l((5), function(i) {
    return _c('div', {
      key: i,
      staticClass: ["tradedeeplist-item"]
    }, [_c('text', {
      staticClass: ["tradedeeplist-item_sell"]
    }, [_vm._v("8730")]), _c('text', {
      staticClass: ["tradedeeplist-item_sell"]
    }, [_vm._v("57.2")])])
  }), _vm._l((5), function(i) {
    return _c('div', {
      key: i,
      staticClass: ["tradedeeplist-item"]
    }, [_c('text', {
      staticClass: ["tradedeeplist-item_buy"]
    }, [_vm._v("8730")]), _c('text', {
      staticClass: ["tradedeeplist-item_buy"]
    }, [_vm._v("57.2")])])
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tradedeeplist-header"]
  }, [_c('text', {
    staticClass: ["tradedeeplist-header_text"]
  }, [_vm._v("价格(USDT)")]), _c('text', {
    staticClass: ["tradedeeplist-header_text"]
  }, [_vm._v("价格(BTC)")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tradedeep"]
  }, [_c('div', {
    staticClass: ["tradedeep-type"],
    on: {
      "click": _vm.minibarRightButtonClick
    }
  }, [_c('text', {
    staticClass: ["tradedeep-type_text"]
  }, [_vm._v(_vm._s(_vm.curTransferMode.title))]), _c('icon', {
    staticClass: ["tradedeep-type_icon"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-down',
        fontSize: 32,
        color: '#b3b3b3'
      }
    },
    on: {
      "click": _vm.menuToggle
    }
  })], 1), _c('TradeDeepList'), _c('OPopover', {
    ref: "wxc-popover",
    attrs: {
      "buttons": _vm.btns,
      "position": _vm.popoverPosition,
      "arrowPosition": _vm.popoverArrowPosition
    },
    on: {
      "wxcPopoverButtonClicked": _vm.popoverButtonClicked
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["trade"]
  }, [_c('side-panel', {
    ref: "reflectName",
    staticClass: ["side_panel"],
    attrs: {
      "eeui": {
        width: '380px',
        scrollbar: false,
        backgroundColor: '#fff'
      }
    },
    on: {
      "itemClick": _vm.itemClick,
      "switchListener": _vm.switchListener
    }
  }, [_c('side-panel-menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单1"
    }
  }, [_c('text', [_vm._v("资金划转")])]), _c('side-panel-menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单1"
    }
  }, [_c('text', [_vm._v("未成交委托")])]), _c('side-panel-menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单2"
    }
  }, [_c('text', [_vm._v("历史委托")])]), _c('side-panel-menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单1"
    }
  }, [_c('text', [_vm._v("币币账单")])]), _c('side-panel-menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单1"
    }
  }, [_c('text', [_vm._v("杠杆规则")])]), _c('side-panel-menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单1"
    }
  }, [_c('text', [_vm._v("强平订单")])]), _c('side-panel-menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单1"
    }
  }, [_c('text', [_vm._v("优惠券")])]), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["trade-header"]
  }, [_c('icon', {
    staticClass: ["trade-header-icon"],
    attrs: {
      "eeui": {
        content: 'ios-list',
        fontSize: 50,
        color: '#b3b3b3'
      }
    },
    on: {
      "click": _vm.menuToggle
    }
  }), _c('TradeTypeButton'), _c('icon', {
    staticClass: ["trade-header-icon"],
    attrs: {
      "eeui": {
        content: 'ios-search',
        fontSize: 50,
        color: '#b3b3b3'
      }
    }
  })], 1), _c('TradeHeader'), _c('div', {
    staticClass: ["trade-content"]
  }, [_c('TradeOperate'), _c('TradeDeep')], 1), _c('scroller', {
    staticClass: ["trade-order"]
  }, [_c('text', {
    staticClass: ["trade-order-title"]
  }, [_vm._v("限价单")]), _c('div', {
    staticClass: ["trade-order-content"]
  }, [_c('div', {
    staticClass: ["trade-order-content_guide"]
  }, [_c('text', {
    staticClass: ["trade-order-content_guide_text"]
  }, [_vm._v("本币暂无挂单")]), _c('text', {
    staticClass: ["trade-order-content_guide_btc"],
    on: {
      "click": _vm.signIn
    }
  }, [_vm._v("查看全部")])])])])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);