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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(35)
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
__vue_options__.__file = "/Users/ch/BlockChain/HDWallet/src/pages/test.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2f56c616"
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

/***/ 32:
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1
  },
  "list": {
    "flex": 1,
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "immersion": {
    "width": "750"
  },
  "swiper": {
    "width": "750",
    "height": "420",
    "selectedIndicatorColor": "#ffffff"
  },
  "swiper-frame": {
    "width": "750",
    "height": "420"
  },
  "swiper-image": {
    "width": "750",
    "height": "420"
  },
  "notice": {
    "height": "88",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "notice-image": {
    "marginLeft": "22",
    "width": "128",
    "height": "30"
  },
  "notice-icon": {
    "fontSize": "32",
    "width": "62",
    "height": "62",
    "color": "#642C2E",
    "content": "'tb-notification'"
  },
  "notice-lists": {
    "flex": 1
  },
  "title": {
    "position": "relative",
    "backgroundColor": "#f4f8f9"
  },
  "title-text": {
    "height": "86",
    "lineHeight": "86",
    "fontWeight": "300",
    "paddingTop": 0,
    "paddingRight": "28",
    "paddingBottom": 0,
    "paddingLeft": "28",
    "fontSize": "32"
  },
  "title-tabs": {
    "flexDirection": "row",
    "position": "absolute",
    "bottom": 0,
    "right": "28"
  },
  "title-tabs-text": {
    "paddingTop": 0,
    "paddingRight": "24",
    "paddingBottom": 0,
    "paddingLeft": "24",
    "marginTop": 0,
    "marginRight": "2",
    "marginBottom": 0,
    "marginLeft": "2",
    "height": "68",
    "lineHeight": "68",
    "fontSize": "26",
    "textAlign": "center"
  },
  "title-tabs-text-active": {
    "paddingTop": 0,
    "paddingRight": "24",
    "paddingBottom": 0,
    "paddingLeft": "24",
    "marginTop": 0,
    "marginRight": "2",
    "marginBottom": 0,
    "marginLeft": "2",
    "height": "68",
    "lineHeight": "68",
    "fontSize": "26",
    "textAlign": "center",
    "color": "#E31D1A",
    "backgroundColor": "#ffffff"
  },
  "list-tabbar": {
    "width": "750",
    "tabHeight": 0
  }
}

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _global = __webpack_require__(34);

// import ScrollNotice from "../components/scrollNotice.vue";

var weiui = weex.requireModule('weiui'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import {apiAjax, getToken, onCustomListener, platform, serverUrl, setCustomListener} from "../app";
exports.default = {
    // components: {ScrollNotice},
    mixins: [{
        methods: {
            getStatusBarHeightPx: function getStatusBarHeightPx() {
                return weiui.getStatusBarHeightPx();
            }
        }
    }],

    filters: {
        twoNum: function twoNum(s) {
            return (0, _global.runNum)(s, 2);
        }
    },

    data: function data() {
        return {
            loadIng: 0,

            isIPhoneXType: weiui.isIPhoneXType(),

            swiperShow: true,
            swiperLists: [],

            categoryid: 0,
            categoryShow: true,
            categoryLists: [],

            tabPages: [],
            tabHeight: {},

            noticeLists: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        setCustomListener('indexHomeTabHeight', 'index-home', function (params) {
            var data = (0, _global.jsonParse)(params);
            _this.$set(_this.tabHeight, data.categoryid, data.height);
        });
        setCustomListener('indexHomeTabHasMore', 'index-home', function (params) {
            var data = (0, _global.jsonParse)(params);
            (0, _global.each)(_this.tabPages, function (index, item) {
                if (item.params.id === data.id) {
                    _this.$set(_this.tabPages[index], 'hasMore', data.hasMore);
                    return false;
                }
            });
            _this.resetHasMore();
        });
        onCustomListener('index', 'index-home-mounted');
    },


    watch: {
        loadIng: function loadIng(val) {
            if (val === 0) {
                this.$refs.myLists.refreshed();
            }
        },
        categoryid: function categoryid(val) {
            var _this2 = this;

            setTimeout(function () {
                _this2.$refs.listTabbar.setCurrentItem("listTabbar_" + val);
                _this2.resetHasMore();
            }, 50);
        }
    },

    computed: {
        tabbarStyle: function tabbarStyle() {
            var customStyle = {};
            if ((0, _global.count)(this.tabHeight[this.categoryid]) > 0) {
                customStyle.height = this.tabHeight[this.categoryid];
            }
            return customStyle;
        }
    },

    methods: {
        refresh: function refresh() {
            if (this.loadIng > 0) {
                return;
            }
            this.getSwiper();
            this.getCategory();
            this.getNotice();
            this.$refs.myLists.setHasMore(false);
        },
        pullLoad: function pullLoad() {
            onCustomListener('indexHomeTabPullLoad', this.categoryid);
        },
        clickSwiper: function clickSwiper(data) {
            var item = this.swiperLists[data.position];
            if (!(0, _global.isObject)(item)) {
                return;
            }
            if (!(0, _global.isObject)(item.paramet)) {
                return;
            }
            //
            switch (item.action) {
                case "toast":
                    if ((0, _global.count)(item.paramet.toast) > 0) {
                        weiui.toast(item.paramet.toast);
                    }
                    break;

                case "product":
                    if ((0, _global.runNum)(item.paramet.productid) > 0) {
                        weiui.openPage({
                            url: 'product.js',
                            pageType: 'weex',
                            statusBarType: "immersion",
                            params: { id: item.paramet.productid }
                        });
                    }
                    break;

                case "web":
                    if ((0, _global.count)(item.paramet.url) > 5) {
                        weiui.openPage({
                            url: 'assets.js',
                            pageType: 'weex',
                            statusBarColor: "#E31D1A",
                            backgroundColor: "#FFFFFF",
                            params: {
                                title: item.paramet.title,
                                url: item.paramet.url
                            }
                        });
                    }
                    break;
            }
        },
        noticeClick: function noticeClick(index, item) {
            var url = serverUrl('mobile#/notice?id=' + item.id + '&platform=' + platform() + '&token=' + getToken());
            weiui.openPage({
                url: 'assets.js',
                pageType: 'weex',
                statusBarColor: "#E31D1A",
                backgroundColor: "#FFFFFF",
                params: {
                    title: '轩妈快报',
                    url: url
                }
            });
        },
        initTabPages: function initTabPages() {
            var _this3 = this;

            var tabs = [];
            this.tabPages = [];
            (0, _global.each)(this.categoryLists, function (index, item) {
                tabs.push({
                    tabName: "listTabbar_" + item.id,
                    title: item.title,
                    url: 'index-home-page.js',
                    params: item,
                    hasMore: false
                });
            });
            this.$nextTick(function () {
                _this3.tabPages = tabs;
            });
        },
        resetHasMore: function resetHasMore() {
            var _this4 = this;

            (0, _global.each)(this.tabPages, function (index, item) {
                if (item.params.id === _this4.categoryid) {
                    _this4.$refs.myLists.setHasMore(item.hasMore);
                    return false;
                }
            });
        },
        pageSelected: function pageSelected(params) {
            this.categoryid = (0, _global.getObject)(this.categoryLists[params.position], 'id');
        }
    }
};

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var global = {
    isNullOrUndefined: function isNullOrUndefined(obj) {
        return typeof obj === "undefined" || obj === null;
    },
    isFunction: function isFunction(obj) {
        return global.isNullOrUndefined(obj) ? false : typeof obj === "function";
    },
    isObject: function isObject(obj) {
        return global.isNullOrUndefined(obj) ? false : (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
    },
    likeArray: function likeArray(obj) {
        return global.isNullOrUndefined(obj) ? false : typeof obj.length === 'number';
    },
    isJson: function isJson(obj) {
        return global.isObject(obj) && !global.likeArray(obj);
    },
    getObject: function getObject(obj, keys) {
        var object = obj;
        if (global.count(obj) === 0 || global.count(keys) === 0) {
            return "";
        }
        var arr = keys.replace(/,/g, "|").replace(/\./g, "|").split("|");
        global.each(arr, function (index, key) {
            object = typeof object[key] === "undefined" ? "" : object[key];
        });
        return object;
    },


    /**
     * 遍历数组、对象
     * @param elements
     * @param callback
     * @returns {*}
     */
    each: function each(elements, callback) {
        var i = void 0,
            key = void 0;
        if (global.likeArray(elements)) {
            if (typeof elements.length === "number") {
                for (i = 0; i < elements.length; i++) {
                    if (callback.call(elements[i], i, elements[i]) === false) return elements;
                }
            }
        } else {
            for (key in elements) {
                if (!elements.hasOwnProperty(key)) continue;
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }

        return elements;
    },


    /**
     * 获取数组最后一个值
     * @param array
     * @returns {*}
     */
    last: function last(array) {
        var str = false;
        if ((typeof array === "undefined" ? "undefined" : _typeof(array)) === 'object' && array.length > 0) {
            str = array[array.length - 1];
        }
        return str;
    },


    /**
     * 删除数组最后一个值
     * @param array
     * @returns {Array}
     */
    delLast: function delLast(array) {
        var newArray = [];
        if ((typeof array === "undefined" ? "undefined" : _typeof(array)) === 'object' && array.length > 0) {
            global.each(array, function (index, item) {
                if (index < array.length - 1) {
                    newArray.push(item);
                }
            });
        }
        return newArray;
    },


    /**
     * 字符串是否包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    strExists: function strExists(string, find) {
        string += "";
        find += "";
        return string.indexOf(find) !== -1;
    },


    /**
     * 字符串是否左边包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    leftExists: function leftExists(string, find) {
        string += "";
        find += "";
        return string.substring(0, find.length) === find;
    },


    /**
     * 字符串是否右边包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    rightExists: function rightExists(string, find) {
        string += "";
        find += "";
        return string.substring(string.length - find.length) === find;
    },


    /**
     * 取字符串中间
     * @param string
     * @param start
     * @param end
     * @returns {*}
     */
    getMiddle: function getMiddle(string, start, end) {
        string += "";
        if (global.ishave(start) && global.strExists(string, start)) {
            string = string.substring(string.indexOf(start) + start.length);
        }
        if (global.ishave(end) && global.strExists(string, end)) {
            string = string.substring(0, string.indexOf(end));
        }
        return string;
    },


    /**
     * 截取字符串
     * @param string
     * @param start
     * @param end
     * @returns {string}
     */
    subString: function subString(string, start, end) {
        string += "";
        if (!global.ishave(end)) {
            end = string.length;
        }
        return string.substring(start, end);
    },


    /**
     * 随机字符
     * @param len
     * @returns {string}
     */
    randomString: function randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },


    /**
     * 判断是否有
     * @param set
     * @returns {boolean}
     */
    ishave: function ishave(set) {
        return !!(set !== null && set !== "null" && set !== undefined && set !== "undefined" && set);
    },


    /**
     * 补零
     * @param str
     * @param length
     * @param after
     * @returns {*}
     */
    zeroFill: function zeroFill(str, length, after) {
        str += "";
        if (str.length >= length) {
            return str;
        }
        var _str = '',
            _ret = '';
        for (var i = 0; i < length; i++) {
            _str += '0';
        }
        if (after || typeof after === 'undefined') {
            _ret = (_str + "" + str).substr(length * -1);
        } else {
            _ret = (str + "" + _str).substr(0, length);
        }
        return _ret;
    },


    /**
     * 时间戳转时间格式
     * @param format
     * @param v
     * @returns {string}
     */
    formatDate: function formatDate(format, v) {
        if (format === '') {
            format = 'Y-m-d H:i:s';
        }
        if (typeof v === 'undefined') {
            v = new Date().getTime();
        } else if (/^(-)?\d{1,10}$/.test(v)) {
            v = v * 1000;
        } else if (/^(-)?\d{1,13}$/.test(v)) {
            v = v * 1000;
        } else if (/^(-)?\d{1,14}$/.test(v)) {
            v = v * 100;
        } else if (/^(-)?\d{1,15}$/.test(v)) {
            v = v * 10;
        } else if (/^(-)?\d{1,16}$/.test(v)) {
            v = v * 1;
        } else {
            return v;
        }
        var dateObj = new Date(v);
        if (parseInt(dateObj.getFullYear()) + "" === "NaN") {
            return v;
        }
        //
        format = format.replace(/Y/g, dateObj.getFullYear());
        format = format.replace(/m/g, global.zeroFill(dateObj.getMonth() + 1, 2));
        format = format.replace(/d/g, global.zeroFill(dateObj.getDate(), 2));
        format = format.replace(/H/g, global.zeroFill(dateObj.getHours(), 2));
        format = format.replace(/i/g, global.zeroFill(dateObj.getMinutes(), 2));
        format = format.replace(/s/g, global.zeroFill(dateObj.getSeconds(), 2));
        return format;
    },


    /**
     * 是否日期格式
     * @returns {boolean}
     */
    isDate: function isDate(string) {
        var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
        var str = string + "";
        if (str === "") return false;
        return !(!reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31);
    },


    /**
     * 检测手机号码格式
     * @param str
     * @returns {boolean}
     */
    isMobile: function isMobile(str) {
        return (/^1(3|4|5|7|8)\d{9}$/.test(str)
        );
    },


    /**
     * 手机号码中间换成****
     * @param phone
     * @returns {string}
     */
    formatMobile: function formatMobile(phone) {
        if (global.count(phone) === 0) {
            return "";
        }
        return phone.substring(0, 3) + "****" + phone.substring(phone.length - 4);
    },


    /**
     * 克隆对象
     * @param myObj
     * @returns {*}
     */
    clone: function clone(myObj) {
        if ((typeof myObj === "undefined" ? "undefined" : _typeof(myObj)) !== 'object') return myObj;
        if (myObj === null) return myObj;
        //
        if (global.likeArray(myObj)) {
            var _myObj = _toArray(myObj),
                myNewObj = _myObj.slice(0);

            return myNewObj;
        } else {
            var _myNewObj = _objectWithoutProperties(myObj, []);

            return _myNewObj;
        }
    },


    /**
     * 统计数组或对象长度
     * @param obj
     * @returns {number}
     */
    count: function count(obj) {
        try {
            if (typeof obj === "undefined") {
                return 0;
            }
            if (typeof obj === "number") {
                obj += "";
            }
            if (typeof obj.length === 'number') {
                return obj.length;
            } else {
                var i = 0,
                    key = void 0;
                for (key in obj) {
                    i++;
                }
                return i;
            }
        } catch (e) {
            return 0;
        }
    },


    /**
     * 相当于 intval
     * @param str
     * @param fixed
     * @returns {number}
     */
    runNum: function runNum(str, fixed) {
        var _s = Number(str);
        if (_s + "" === "NaN") {
            _s = 0;
        }
        if (/^[0-9]*[1-9][0-9]*$/.test(fixed)) {
            _s = _s.toFixed(fixed);
            var rs = _s.indexOf('.');
            if (rs < 0) {
                _s += ".";
                for (var i = 0; i < fixed; i++) {
                    _s += "0";
                }
            }
        }
        return _s;
    },


    /**
     * 秒转化为天小时分秒字符串
     * @param value
     * @returns {string}
     */
    formatSeconds: function formatSeconds(value) {
        var theTime = parseInt(value); // 秒
        var theTime1 = 0; // 分
        var theTime2 = 0; // 小时
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
            }
        }
        var result = global.zeroFill(parseInt(theTime), 2) + "秒";
        if (theTime1 > 0) {
            result = global.zeroFill(parseInt(theTime1), 2) + "分" + result;
        }
        if (theTime2 > 0) {
            if (theTime2 > 72) {
                var day = parseInt(theTime2 / 24);
                theTime2 -= parseInt(day * 24);
                result = day + "天" + global.zeroFill(parseInt(theTime2), 2) + "小时" + result;
            } else {
                result = global.zeroFill(parseInt(theTime2), 2) + "小时" + result;
            }
        }
        if (theTime1 === 0 && theTime2 === 0) {
            result = "00分" + result;
        }
        return result;
    },


    /**
     * 将一个 JSON 字符串转换为对象（已try）
     * @param str
     * @param defaultVal
     * @returns {*}
     */
    jsonParse: function jsonParse(str, defaultVal) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return defaultVal ? defaultVal : {};
        }
    },


    /**
     * 将 JavaScript 值转换为 JSON 字符串（已try）
     * @param json
     * @param defaultVal
     * @returns {string}
     */
    jsonStringify: function jsonStringify(json, defaultVal) {
        try {
            return JSON.stringify(json);
        } catch (e) {
            return defaultVal ? defaultVal : "";
        }
    },


    /**
     * 去除数组中的非数字项
     * @param value
     * @returns {Array}
     */
    removerNumberNaN: function removerNumberNaN() {
        var array = [];

        for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
            value[_key] = arguments[_key];
        }

        value.forEach(function (ele) {
            if (!isNaN(Number(ele))) {
                array.push(ele);
            }
        });
        return array;
    },


    /**
     * Math.max 过滤NaN
     * @param value
     * @returns {number}
     */
    runMax: function runMax() {
        return Math.max.apply(Math, _toConsumableArray(global.removerNumberNaN.apply(global, arguments)));
    },


    /**
     * Math.min 过滤NaN
     * @param value
     * @returns {number}
     */
    runMin: function runMin() {
        return Math.min.apply(Math, _toConsumableArray(global.removerNumberNaN.apply(global, arguments)));
    },


    /**
     * 链接字符串
     * @param value 第一个参数为连接符
     * @returns {string}
     */
    stringConnect: function stringConnect() {
        var s = null;
        var text = "";

        for (var _len2 = arguments.length, value = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            value[_key2] = arguments[_key2];
        }

        value.forEach(function (val) {
            if (s === null) {
                s = val;
            } else if (val) {
                if (val && text) text += s;
                text += val;
            }
        });
        return text;
    },


    /**
     * 字节转换
     * @param bytes
     * @returns {string}
     */
    bytesToSize: function bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        var k = 1024;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        if (typeof sizes[i] === "undefined") {
            return '0 B';
        }
        return global.runNum(bytes / Math.pow(k, i), 2) + ' ' + sizes[i];
    },


    /**
     * 数组是否包含
     * @param value
     * @param array
     * @returns {boolean}
     */
    inArray: function inArray(value, array) {
        if (global.likeArray(array)) {
            for (var i = 0; i < array.length; i++) {
                if (value === array[i]) {
                    return true;
                }
            }
        }
        return false;
    }
};

module.exports = global;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [(_vm.isIPhoneXType) ? _c('div', {
    staticClass: ["immersion"],
    style: {
      height: _vm.getStatusBarHeightPx()
    }
  }) : _vm._e(), _c('scroll-view', {
    ref: "myLists",
    staticClass: ["list"],
    attrs: {
      "refreshAuto": "true",
      "weiui": {
        pullTipsNo: ''
      }
    },
    on: {
      "refreshListener": _vm.refresh,
      "pullLoadListener": _vm.pullLoad
    }
  }, [(_vm.swiperShow) ? _c('banner', {
    staticClass: ["swiper"],
    on: {
      "itemClick": _vm.clickSwiper
    }
  }, _vm._l((_vm.swiperLists), function(item) {
    return _c('div', {
      staticClass: ["swiper-frame"]
    }, [_c('image', {
      staticClass: ["swiper-image"],
      attrs: {
        "resize": "cover",
        "src": item.picture
      }
    })])
  })) : _vm._e(), (_vm.noticeLists.length > 0) ? _c('div', {
    staticClass: ["notice"]
  }, [_c('image', {
    staticClass: ["notice-image"],
    attrs: {
      "src": "./images/index-notice.png"
    }
  }), _c('icon', {
    staticClass: ["notice-icon"]
  }), _c('scroll-notice', {
    staticClass: ["notice-lists"],
    attrs: {
      "lists": _vm.noticeLists,
      "height": "80",
      "fontSize": "28",
      "interval": "5000"
    },
    on: {
      "itemClick": _vm.noticeClick
    }
  })], 1) : _vm._e(), (_vm.categoryShow) ? _c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["title-text"]
  }, [_vm._v("热卖商品")]), _c('div', {
    staticClass: ["title-tabs"]
  }, _vm._l((_vm.categoryLists), function(item, index) {
    return _c('text', {
      key: index,
      class: [item.id === _vm.categoryid ? 'title-tabs-text-active' : 'title-tabs-text'],
      on: {
        "click": function($event) {
          _vm.categoryid = item.id
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  }))]) : _vm._e(), (_vm.tabPages.length > 0) ? _c('tabbar', {
    ref: "listTabbar",
    staticClass: ["list-tabbar"],
    style: _vm.tabbarStyle,
    attrs: {
      "tabPages": _vm.tabPages
    },
    on: {
      "pageSelected": _vm.pageSelected
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });