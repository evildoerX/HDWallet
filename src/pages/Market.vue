<template>
  <div class="market">
    <div v-if="showHeader" class="market-header">
      <MarketButton/>
      <icon class="market-search" :eeui="{ content: 'ios-search', fontSize: 50,color:'#b3b3b3' }"></icon>
    </div>
    <tabbar ref="refMarket" class="market-tabbar" :eeui="eeuiStyle" :tabPages="tabPages"></tabbar>
  </div>
</template>
<script>
import MarketButton from "../components/Market/MarketButton.vue";
import Http from "../utils/network/Http";
const eeui = app.requireModule("eeui");
export default {
  components: {
    MarketButton
  },
  props: {
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  data() {
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
      tabPages: [
        {
          title: "自选",
          url: "MarketFollowData.js"
        },
        {
          title: "USDT",
          url: "MarketData.js",
          params: { type: "USDT" }
        },
        {
          title: "BTC",
          url: "MarketData.js",
          params: { type: "BTC" }
        },
        {
          title: "ETH",
          url: "MarketData.js",
          params: { type: "ETH" }
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style>
.market {
  flex: 1;
}

.market-tabbar {
  flex: 1;
  width: 750px;
}
.market-header {
  position: relative;
}
.market-search {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>