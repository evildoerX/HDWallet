import Http from '../utils/network/Http.js';

const APIS = {
  HOME: '/news/home',
  ADS: '/news/ads',
  ARTICLES: '/news/articles',
  ARTICLES_DETAIL: '/news/article/detail'
}

class NewsAPI {
  /**
   * 获取所有广告
   * packagesparam params
   */
  newsHome() {
    Http.get(APIS.HOME, {}).then(function (res) {
      console.log('res', res);
      return res
    })
  }

}
export default NewsAPI