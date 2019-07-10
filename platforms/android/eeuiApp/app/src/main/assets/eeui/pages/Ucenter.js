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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(24)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/UI/NavBar/O-Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42ac0a1f"
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
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "o-header-content": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingRight": "36"
  },
  "o-header-content-border": {
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "o-header-content-normal": {
    "height": "93"
  },
  "o-header-content-iOS": {
    "height": "133",
    "paddingTop": "46"
  },
  "o-header-left": {
    "flexDirection": "row",
    "flex": 1
  },
  "o-header-right": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "flex": 1
  },
  "o-header-title": {
    "flex": 3,
    "fontSize": "36",
    "fontWeight": "400",
    "textAlign": "center"
  }
}

/***/ }),
/* 23 */
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

exports.default = {
  name: "OHeader",
  props: {
    bgcolor: {
      type: String,
      default: ""
    },
    title: {
      default: ""
    },
    titlecolor: {
      default: "#000000"
    },
    bottomborder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iOSstat: function iOSstat() {
      var type = WXEnvironment.platform;
      console.log(this.bottomborder);
      return [type === "iOS" ? "o-header-content-iOS" : "o-header-content-normal", this.bottomborder ? "o-header-content-border" : ""];
    }
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["o-header-content"],
    class: _vm.iOSstat,
    style: {
      'background-color': _vm.bgcolor
    }
  }, [_c('div', {
    staticClass: ["o-header-left"]
  }, [_vm._t("left")], 2), _c('div', {
    staticClass: ["o-header-center"]
  }, [(!_vm.$slots.center) ? _c('text', {
    staticClass: ["o-header-title"],
    style: {
      color: _vm.titlecolor
    }
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._t("center")], 2), _c('div', {
    staticClass: ["o-header-right"]
  }, [_vm._t("right")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(96)
)

/* script */
__vue_exports__ = __webpack_require__(97)

/* template */
var __vue_template__ = __webpack_require__(114)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/Ucenter.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7d47b1d4"
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
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  "ucenter": {
    "flex": 1,
    "width": "750",
    "backgroundColor": "#f5f5f9"
  },
  "ucenter-list": {
    "width": "750",
    "flex": 1
  },
  "ucenter-line": {
    "marginTop": "32"
  },
  "ucenter-button": {
    "fontSize": "24",
    "marginLeft": "37.5",
    "marginRight": "37.5",
    "marginTop": "32",
    "marginBottom": "32",
    "width": "674",
    "height": "80"
  },
  "block": {
    "height": "300"
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = __webpack_require__(98);

var _Cell2 = _interopRequireDefault(_Cell);

var _UcenterHeader = __webpack_require__(102);

var _UcenterHeader2 = _interopRequireDefault(_UcenterHeader);

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

exports.default = {
  components: {
    OCell: _Cell2.default,
    UcenterHeader: _UcenterHeader2.default
  },
  data: function data() {
    return {
      isLogin: false,
      accountData: {},
      balance: "0.00000",
      dao: "0.00"
    };
  },
  created: function created() {
    this.accountData = JSON.parse(eeui.getVariate("accountData", {}));
    if (this.accountData.account_token !== undefined) {
      this.isLogin = true;
    }
  },

  methods: {
    signOut: function signOut() {
      eeui.setVariate("accountData", null);
      eeui.openPage({
        url: "index.js"
      });
    }
  }
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(99)
)

/* script */
__vue_exports__ = __webpack_require__(100)

/* template */
var __vue_template__ = __webpack_require__(101)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/UI/Cell/Cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3d95a378"
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
/* 99 */
/***/ (function(module, exports) {

module.exports = {
  "o-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "paddingTop": "32",
    "paddingRight": "32",
    "paddingBottom": "32",
    "paddingLeft": "32"
  },
  "o-cell-border": {
    "borderBottomColor": "#e4e4e4",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid"
  },
  "o-cell-left": {
    "flexDirection": "row"
  },
  "o-cell-right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "o-cell-icon": {
    "width": "40",
    "height": "40",
    "marginRight": "16"
  },
  "o-cell-title": {
    "color": "#000000",
    "fontSize": "32"
  },
  "o-cell-value": {
    "color": "#b3b3b3",
    "fontSize": "28",
    "marginRight": "16"
  }
}

/***/ }),
/* 100 */
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
  name: "Cell",
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    bottomborder: {
      type: Boolean,
      default: true
    }
  },
  computed: {}
};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["o-cell"],
    class: [_vm.bottomborder ? 'o-cell-border' : '']
  }, [_c('div', {
    staticClass: ["o-cell-left"]
  }, [_c('icon', {
    staticClass: ["o-cell-icon"],
    attrs: {
      "eeui": {
        content: 'ios-settings',
        fontSize: 40,
        color: '#b3b3b3'
      }
    }
  }), _c('text', {
    staticClass: ["o-cell-title"]
  }, [_vm._v(_vm._s(_vm.title))])], 1), _c('div', {
    staticClass: ["o-cell-right"]
  }, [_c('text', {
    staticClass: ["o-cell-value"]
  }, [_vm._v(_vm._s(_vm.value))]), (_vm.showArrow) ? _c('icon', {
    staticClass: ["o-cell-icon"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-forward',
        fontSize: 40,
        color: '#b3b3b3'
      }
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(103)
)

/* script */
__vue_exports__ = __webpack_require__(104)

/* template */
var __vue_template__ = __webpack_require__(113)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Ucenter/UcenterHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eb32c25c"
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
/* 103 */
/***/ (function(module, exports) {

module.exports = {
  "ucenterheader": {
    "width": "750",
    "backgroundImage": "linear-gradient(to right, #2d8cf0, #569ffa)",
    "paddingBottom": "32",
    "borderBottomRightRadius": "32",
    "borderBottomLeftRadius": "32"
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
  },
  "ucenterheader-back": {
    "width": "100",
    "height": "100"
  },
  "ucenterheader-data": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "homeheader-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "ucenterheader-text": {
    "fontSize": "28",
    "color": "#9a9a9a"
  },
  "ucenterheader-icon": {
    "width": "40",
    "height": "40",
    "color": "#9a9a9a",
    "marginRight": "8"
  },
  "ucenterheader-coin": {
    "fontSize": "30",
    "marginRight": "8"
  },
  "ucenterheader-dao": {
    "color": "#9a9a9a"
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OHeader = __webpack_require__(21);

var _OHeader2 = _interopRequireDefault(_OHeader);

var _NeedLogin = __webpack_require__(105);

var _NeedLogin2 = _interopRequireDefault(_NeedLogin);

var _UcenterLoginInfo = __webpack_require__(109);

var _UcenterLoginInfo2 = _interopRequireDefault(_UcenterLoginInfo);

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

var navigator = weex.requireModule("navigator");
exports.default = {
  name: "UcenterHeader",
  components: {
    OHeader: _OHeader2.default,
    NeedLogin: _NeedLogin2.default,
    UcenterLoginInfo: _UcenterLoginInfo2.default
  },
  data: function data() {
    return {
      needLogin: true,
      accountData: {},
      balance: "0.00000",
      dao: "0.00"
    };
  },
  created: function created() {
    this.accountData = JSON.parse(eeui.getVariate("accountData", {}));
    if (this.accountData.account_token !== undefined) {
      this.needLogin = false;
    }
  },

  methods: {
    back: function back() {
      navigator.pop();
    },
    sigIn: function sigIn() {
      eeui.toast("\"\u5F00\u59CB\u8BF7\u6C42 login\"");
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    }
  }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(107)

/* template */
var __vue_template__ = __webpack_require__(108)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Ucenter/NeedLogin.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5e307e8e"
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
/* 106 */
/***/ (function(module, exports) {

module.exports = {
  "needlogin": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "32",
    "paddingRight": "32",
    "paddingBottom": "32",
    "paddingLeft": "32"
  },
  "needlogin-text": {
    "fontSize": "40",
    "color": "#ffffff"
  },
  "needlogin-icons": {
    "backgroundColor": "#4183ef",
    "height": "100",
    "width": "100",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "50",
    "marginRight": "32"
  },
  "needlogin-icon": {
    "width": "40",
    "height": "40",
    "color": "#ffffff",
    "marginRight": "8"
  }
}

/***/ }),
/* 107 */
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

var eeui = weex.requireModule("eeui");
exports.default = {
  name: "NeedLogin",
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {
    sigIn: function sigIn() {
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    }
  }
};

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["needlogin"]
  }, [_c('div', {
    staticClass: ["needlogin-icons"]
  }, [_c('icon', {
    staticClass: ["needlogin-icon"],
    attrs: {
      "eeui": {
        content: 'ios-person',
        fontSize: 60,
        color: '#fff'
      }
    }
  })], 1), _c('text', {
    staticClass: ["needlogin-text"],
    on: {
      "click": _vm.sigIn
    }
  }, [_vm._v("登录 / 注册")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(110)
)

/* script */
__vue_exports__ = __webpack_require__(111)

/* template */
var __vue_template__ = __webpack_require__(112)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/components/Ucenter/UcenterLoginInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-51fd70fc"
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
/* 110 */
/***/ (function(module, exports) {

module.exports = {
  "ucenterlogininfo": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "718",
    "paddingTop": "32",
    "paddingRight": 0,
    "paddingBottom": "32",
    "paddingLeft": "32"
  },
  "ucenterlogininfo-left": {
    "flexDirection": "row"
  },
  "ucenterlogininfo-otherbox": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "16"
  },
  "ucenterlogininfo-otherinfo": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginRight": "16",
    "backgroundColor": "#5d97f1",
    "height": "40",
    "borderRadius": "20"
  },
  "ucenterlogininfo-otherinfo-bg": {
    "width": "32",
    "height": "32",
    "lineHeight": "32",
    "borderRadius": "16",
    "backgroundColor": "#afccf8",
    "textAlign": "center"
  },
  "ucenterlogininfo-otherinfo-bgt": {
    "width": "32",
    "height": "32",
    "lineHeight": "32",
    "borderRadius": "16",
    "backgroundColor": "#4db872",
    "textAlign": "center"
  },
  "ucenterlogininfo-otherinfo-text": {
    "fontSize": "16",
    "marginRight": "16",
    "color": "#ffffff"
  },
  "ucenterlogininfo-text": {
    "fontSize": "40",
    "color": "#ffffff"
  },
  "ucenterlogininfo-icons": {
    "backgroundColor": "#4183ef",
    "height": "100",
    "width": "100",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "50",
    "marginRight": "32"
  },
  "ucenterlogininfo-icon": {
    "width": "40",
    "height": "40",
    "color": "#ffffff",
    "marginRight": "8"
  },
  "ucenter-qh": {
    "color": "#9fc0f8",
    "fontSize": "32"
  }
}

/***/ }),
/* 111 */
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

var eeui = weex.requireModule("eeui");
exports.default = {
  name: "NeedLogin",
  components: {},
  props: {
    userName: {
      type: String
    }
  },
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {
    sigIn: function sigIn() {
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    }
  }
};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ucenterlogininfo"]
  }, [_c('div', {
    staticClass: ["ucenterlogininfo-left"]
  }, [_c('div', {
    staticClass: ["ucenterlogininfo-icons"]
  }, [_c('icon', {
    staticClass: ["ucenterlogininfo-icon"],
    attrs: {
      "eeui": {
        content: 'ios-person',
        fontSize: 60,
        color: '#fff'
      }
    }
  })], 1), _c('div', [_c('text', {
    staticClass: ["ucenterlogininfo-text"],
    on: {
      "click": _vm.sigIn
    }
  }, [_vm._v(_vm._s(_vm.userName))]), _vm._m(0)])]), _c('text', {
    staticClass: ["ucenter-qh"]
  }, [_vm._v("切换账户")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ucenterlogininfo-otherbox"]
  }, [_c('div', {
    staticClass: ["ucenterlogininfo-otherinfo"]
  }, [_c('text', {
    staticClass: ["ucenterlogininfo-otherinfo-text", "ucenterlogininfo-otherinfo-bg"]
  }, [_vm._v("v0")]), _c('text', {
    staticClass: ["ucenterlogininfo-otherinfo-text"]
  }, [_vm._v("实名登记")])]), _c('div', {
    staticClass: ["ucenterlogininfo-otherinfo"]
  }, [_c('text', {
    staticClass: ["ucenterlogininfo-otherinfo-text", "ucenterlogininfo-otherinfo-bgt"]
  }, [_vm._v("v1")]), _c('text', {
    staticClass: ["ucenterlogininfo-otherinfo-text"]
  }, [_vm._v("手续费登记 >")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ucenterheader"]
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
  }, [_vm._v("资产")])])])], 1), (_vm.needLogin) ? _c('NeedLogin') : _c('UcenterLoginInfo', {
    attrs: {
      "userName": _vm.accountData.username
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ucenter"]
  }, [_c('UcenterHeader'), _c('scroll-view', {
    staticClass: ["ucenter-list"]
  }, [(_vm.isLogin) ? _c('OCell', {
    staticClass: ["ucenter-line"],
    attrs: {
      "title": "点卡余额",
      "value": "0.0000",
      "showArrow": false,
      "bottomborder": false
    }
  }) : _vm._e(), _c('OCell', {
    staticClass: ["ucenter-line"],
    attrs: {
      "title": "在线客服"
    }
  }), _c('OCell', {
    attrs: {
      "title": "帮助中心"
    }
  }), (_vm.isLogin) ? _c('OCell', {
    attrs: {
      "title": "问题反馈"
    }
  }) : _vm._e(), _c('OCell', {
    attrs: {
      "title": "版本号",
      "value": "0.0.1",
      "bottomborder": false
    }
  }), _c('OCell', {
    staticClass: ["ucenter-line"],
    attrs: {
      "title": "加入社群"
    }
  }), (_vm.isLogin) ? _c('OCell', {
    attrs: {
      "title": "推荐给好友",
      "bottomborder": false
    }
  }) : _vm._e(), _c('OCell', {
    staticClass: ["ucenter-line"],
    attrs: {
      "title": "切换计价货币",
      "value": "美元"
    }
  }), _c('OCell', {
    attrs: {
      "title": "汇率概览"
    }
  }), _c('OCell', {
    attrs: {
      "title": "费率详情"
    }
  }), _c('OCell', {
    attrs: {
      "title": "选择语言"
    }
  }), _c('OCell', {
    attrs: {
      "title": "夜间模式",
      "value": "未开启",
      "bottomborder": false
    }
  }), (_vm.isLogin) ? _c('button', {
    staticClass: ["ucenter-button"],
    attrs: {
      "eeui": {
        text: '退出当前账户'
      }
    },
    on: {
      "click": _vm.signOut
    }
  }) : _vm._e(), (!_vm.isLogin) ? _c('div', {
    staticClass: ["block"]
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);