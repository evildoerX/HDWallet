import appConfig from "../config/app.config";

const APIS = {
  HOME: '/news/home',
  ADS: '/news/ads',
  ARTICLES: '/news/articles',
  ARTICLES_DETAIL: '/news/article/detail'
}
const eeui = weex.requireModule('eeui');
const API = {
  APIS_HOME: appConfig.HTTP_HOST_PREPROD + APIS.HOME,
  getData() {
    eeui.ajax({
        url: this.url,
        data: {
          appkey: appConfig.APPKEY,
          channel: appConfig.CHANNEL
        }
      },
      res => {
        console.log('res', res);
        if (res.status === "success") {
          eeui.setCachesString("ADS", res.result.data.ads, 0);
          eeui.setCachesString("Tips", res.result.data.ads, 0);
        }
      }
    );
  }
}

export default API