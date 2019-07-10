<template>
  <div class="marketdata">
    <MarketListTitle/>
    <scroll-view class="marketdata-list">
      <MarketItem v-for="(item,index) in marketData" :key="index" :itemData="item"></MarketItem>
    </scroll-view>
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
      marketData: [],
      asset: ""
    };
  },
  created() {
    this.asset = weex.config.params.type;
    this.getMarketData();
  },
  methods: {
    refresh() {
      eeui.reloadPage();
    },
    getMarketData(type) {
      const postData = {
        asset: this.asset,
        order: "desc",
        order_by: "increase" // increase
      };
      Http.postData("/market/item", postData).then(res => {
        this.marketData = res.items;
      });
    }
  }
};
</script>

<style scoped>
.marketdata {
  flex: 1;
}
.marketdata-list {
  width: 750px;
  flex: 1;
}
</style>
