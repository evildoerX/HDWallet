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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Market/MarketItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9e8fff7c"
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "MarketItem": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "750",
    "justifyContent": "space-between",
    "paddingTop": "24",
    "paddingRight": "16",
    "paddingBottom": "24",
    "paddingLeft": "16",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "backgroundColor": "#ffffff",
    "borderBottom:last-child": "none"
  },
  "MarketItem-market_item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "MarketItem-marke_bottom": {
    "marginBottom": "8"
  },
  "MarketItem-inc": {
    "backgroundColor": "rgb(77,184,114)",
    "paddingTop": "8",
    "paddingRight": "32",
    "paddingBottom": "8",
    "paddingLeft": "32",
    "minWidth": "120",
    "borderRadius": "8"
  },
  "MarketItem-inc_text": {
    "color": "#ffffff",
    "textAlign": "center"
  },
  "MarketItem-stcok": {
    "color": "rgba(0,0,0,0.65)",
    "fontSize": "32"
  },
  "MarketItem-g": {
    "color": "rgba(0,0,0,0.45)",
    "fontSize": "24",
    "marginTop": 0,
    "marginRight": "8",
    "marginBottom": 0,
    "marginLeft": "8"
  },
  "MarketItem-money": {
    "fontSize": "24",
    "color": "rgba(0,0,0,0.45)"
  },
  "MarketItem-price_text": {
    "fontSize": "32",
    "marginLeft": "8",
    "color": "rgba(0,0,0,0.65)"
  },
  "MarketItem-price_desc": {
    "color": "rgba(0,0,0,0.45)",
    "marginTop": 0,
    "marginRight": "8",
    "marginBottom": 0,
    "marginLeft": "8"
  }
}

/***/ }),
/* 15 */
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

var eeui = weex.requireModule("eeui");
exports.default = {
  name: "MarketItem",
  props: {
    itemData: Object
  },
  data: function data() {
    return {};
  },

  methods: {
    marketClick: function marketClick() {
      eeui.openPage({
        url: "TradeView.js",
        statusBarType: "immersion",
        params: this.itemData,
        backgroundColor: "#171b30"
      });
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["MarketItem"],
    on: {
      "click": _vm.marketClick
    }
  }, [_c('div', {
    staticClass: ["MarketItem-market"]
  }, [_c('div', {
    staticClass: ["MarketItem-market_item", "MarketItem-marke_bottom"]
  }, [_c('text', {
    staticClass: ["MarketItem-stcok"]
  }, [_vm._v(_vm._s(_vm.itemData.stock))]), _c('text', {
    staticClass: ["MarketItem-g"]
  }, [_vm._v("/")]), _c('text', {
    staticClass: ["MarketItem-money"]
  }, [_vm._v(_vm._s(_vm.itemData.money))])]), _c('div', {
    staticClass: ["MarketItem-market_item"]
  }, [_c('text', {
    staticClass: ["MarketItem-money"]
  }, [_vm._v("成交量：")]), _c('text', {
    staticClass: ["MarketItem-money"]
  }, [_vm._v(_vm._s(_vm.itemData.volume))])])]), _c('div', {
    staticClass: ["MarketItem-price"]
  }, [_c('text', {
    staticClass: ["MarketItem-price_text"]
  }, [_vm._v(_vm._s(_vm.itemData.price))]), _c('text', {
    staticClass: ["MarketItem-price_desc"]
  }, [_vm._v("$0.01")])]), _c('div', {
    staticClass: ["MarketItem-inc"]
  }, [_c('text', {
    staticClass: ["MarketItem-inc_text"]
  }, [_vm._v(_vm._s(((_vm.itemData.increase) + " %")))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Market/MarketListTitle.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54bd8c3b"
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "MarketListTitle": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  },
  "MarketListTitle_text": {
    "color": "rgba(0,0,0,0.45)"
  }
}

/***/ }),
/* 19 */
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

exports.default = {
  name: 'MarketListTitle',
  components: {},
  props: {},
  data: function data() {
    return {};
  },

  methods: {}
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["MarketListTitle"]
  }, [_c('text', {
    staticClass: ["MarketListTitle_text"]
  }, [_vm._v("币种")]), _c('text', {
    staticClass: ["MarketListTitle_text"]
  }, [_vm._v("最新价")]), _c('text', {
    staticClass: ["MarketListTitle_text"]
  }, [_vm._v("24H涨跌")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/MarketFollowData.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e969050a"
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
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "marketdata": {
    "flex": 1
  },
  "marketfollowdata-login": {
    "width": "750",
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "marketfollowdata-login_button": {
    "fontSize": "24",
    "marginLeft": "37.5",
    "marginRight": "37.5",
    "marginBottom": "20",
    "width": "300",
    "height": "80"
  },
  "marketfollowdata-content": {
    "flex": 1
  },
  "marketfollowdata-content_list": {
    "width": "750",
    "flex": 1
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MarketItem = __webpack_require__(13);

var _MarketItem2 = _interopRequireDefault(_MarketItem);

var _MarketListTitle = __webpack_require__(17);

var _MarketListTitle2 = _interopRequireDefault(_MarketListTitle);

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

exports.default = {
  components: {
    MarketItem: _MarketItem2.default,
    MarketListTitle: _MarketListTitle2.default
  },
  data: function data() {
    return {
      followData: [],
      needLogin: true,
      accountInfo: {}
    };
  },
  created: function created() {
    this.accountInfo = eeui.getCachesString("account", "");
    if (this.accountInfo.token) {
      this.needLogin = false;
      this.getFollowtData();
    }
  },

  methods: {
    sigIn: function sigIn() {
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    },
    getFollowtData: function getFollowtData() {
      var _this = this;

      var postData = {
        page: "1",
        page_limit: "10",
        order_by: "price",
        order: "desc"
      };
      _Http2.default.postData("/market/follow/list", postData).then(function (res) {
        _this.followData = res.items;
      });
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["marketfollowdata"]
  }, [(_vm.needLogin) ? _c('div', {
    staticClass: ["marketfollowdata-login"]
  }, [_c('button', {
    staticClass: ["marketfollowdata-login_button"],
    attrs: {
      "eeui": {
        text: '登录查看自选信息'
      }
    },
    on: {
      "click": _vm.sigIn
    }
  })], 1) : _c('div', {
    staticClass: ["marketfollowdata-content"]
  }, [_c('MarketListTitle'), _c('scroll-view', {
    staticClass: ["marketfollowdata-content_list"]
  }, _vm._l((_vm.marketData), function(item, index) {
    return _c('MarketItem', {
      key: index,
      attrs: {
        "itemData": item
      }
    })
  }))], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);