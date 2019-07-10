<template>
  <div class="marketfollowdata">
    <div v-if="needLogin" class="marketfollowdata-login">
      <button class="marketfollowdata-login_button" :eeui="{text:'登录查看自选信息'}" @click="sigIn"></button>
    </div>

    <div v-else class="marketfollowdata-content">
      <MarketListTitle/>
      <scroll-view class="marketfollowdata-content_list">
        <MarketItem v-for="(item,index) in marketData" :key="index" :itemData="item"></MarketItem>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import MarketItem from "../components/Market/MarketItem.vue";
import MarketListTitle from "../components/Market/MarketListTitle.vue";
import Http from "../utils/network/Http";
const eeui = weex.requireModule("eeui");
export default {
  components: {
    MarketItem,
    MarketListTitle
  },
  data() {
    return {
      followData: [],
      needLogin: true,
      accountInfo: {}
    };
  },
  created() {
    this.accountInfo = eeui.getCachesString("account", "");
    if (this.accountInfo.token) {
      this.needLogin = false;
      this.getFollowtData();
    }
  },
  methods: {
    sigIn() {
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    },
    getFollowtData() {
      const postData = {
        page: "1",
        page_limit: "10",
        order_by: "price",
        order: "desc"
      };
      Http.postData("/market/follow/list", postData).then(res => {
        this.followData = res.items;
      });
    }
  }
};
</script>

<style scoped>
.marketdata {
  flex: 1;
}
.marketfollowdata-login {
  width: 750px;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.marketfollowdata-login_button {
  font-size: 24px;
  margin-left: 37.5px;
  margin-right: 37.5px;
  margin-bottom: 20px;
  width: 300px;
  height: 80px;
}
.marketfollowdata-content {
  flex: 1;
}
.marketfollowdata-content_list {
  width: 750px;
  flex: 1;
}
</style>
