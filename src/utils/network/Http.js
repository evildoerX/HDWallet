/**
 * Created by zhangyi on 2017/8/14.
 * Desc: network for ajax post/get
 */

import appConfig from '../../config/app.config'
const eeui = weex.requireModule("eeui");
const Http = {
  apiToUrl(api) {

    const url = appConfig.HTTP_HOST_PREPROD + api
    // eeui.toast(`"修正url :${url}`);
    return url
  },

  checkAppkey(params) {
    let p = params || {}

    if (!p.hasOwnProperty('appkey')) {
      p['appkey'] = appConfig.APPKEY
    }
    if (!p.hasOwnProperty('channel')) {
      p['channel'] = appConfig.CHANNEL
    }

    return p
  },
  getData(api, params) {
    const url = this.apiToUrl(api)
    const paramsData = this.checkAppkey(params)
    return new Promise(function (resolve, reject) {
      eeui.ajax({
          url: url,
          data: paramsData
        },
        res => {
          if (res.status === "success") {
            if (res.result.ret === 1) {
              resolve(res.result.data)
            } else {
              reject({
                code: res.result.code,
                msg: res.result.msg
              })
            }
          } else {
            // eeui.toast(`"请求失败", ${JSON.stringify(res)}`);
          }
          // this.adsData = res.result.data.ads;
          // this.tipsData = res.result.data.tips;
        }
      );
    })
  },
  postData(api, params) {
    const url = this.apiToUrl(api)
    const paramsData = this.checkAppkey(params)
    // eeui.toast(`"开始请求", ${url}，${JSON.stringify(paramsData)}`);
    return new Promise(function (resolve, reject) {
      eeui.ajax({
          url: url,
          data: paramsData,
          method: 'post'
        },
        res => {
          if (res.status === "success") {
            if (res.result.ret === 1) {
              // eeui.toast(`"请求成功", ${JSON.stringify(res)}`);
              resolve(res.result.data)
            } else {
              // eeui.toast(`"请求成功:but ret = -1", ${JSON.stringify(res.result.msg)}`);
              reject({
                code: res.result.code,
                msg: res.result.msg
              })
            }
          } else {
            // eeui.toast(`"请求失败", ${JSON.stringify(res)}`);
          }
          // this.adsData = res.result.data.ads;
          // this.tipsData = res.result.data.tips;
        }
      );
    })
  }
}

export default Http