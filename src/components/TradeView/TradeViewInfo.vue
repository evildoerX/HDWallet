<template>
  <div class="TradeViewInfo">
    <div class="TradeViewInfo-market">
      <div class="TradeViewInfo-market_left">
        <text class="TradeViewInfo-market_left_price">{{marketInfo.price}}</text>
        <div class="TradeViewInfo-market_left_info">
          <text class="TradeViewInfo-market_left_inc">{{`${marketInfo.increase} %`}}</text>
          <text class="TradeViewInfo-market_left_incnum">{{marketInfo.increase * marketInfo.price}}</text>
          <text class="TradeViewInfo-market_text">{{`$ ${marketInfo.price}`}}</text>
        </div>
      </div>
      <div>
        <div class="TradeViewInfo-market_right_info">
          <text class="TradeViewInfo-market_titletext">24H最高</text>
          <text class="TradeViewInfo-market_text">{{marketInfo.highest}}</text>
        </div>
        <div class="TradeViewInfo-market_right_info">
          <text class="TradeViewInfo-market_titletext">24H最低</text>
          <text class="TradeViewInfo-market_text">{{marketInfo.lowest}}</text>
        </div>
        <div class="TradeViewInfo-market_right_info">
          <text class="TradeViewInfo-market_titletext">24H成交量</text>
          <text class="TradeViewInfo-market_text">{{marketInfo.volume}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TradeViewInfo",
  props: {
    marketInfo: Object
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style scoped>
.TradeViewInfo {
  background-image: linear-gradient(to right, #72a1ff, #3176ee);
  width: 750px;
  padding-bottom: 8px;
  margin-top: -5px;
}
.TradeViewInfo-market {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 36px;
  padding-right: 36px;
}
.TradeViewInfo-market_left_price {
  color: #46e47d;
  font-size: 64px;
}
.TradeViewInfo-market_left_info {
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
}
.TradeViewInfo-market_right_info {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  margin-top: 8px;
}
.TradeViewInfo-market_left_inc {
  background-color: rgb(44, 148, 80);
  padding: 4px 8px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.85);
}
.TradeViewInfo-market_left_incnum {
  color: #5be08a;
  margin-left: 8px;
}
.TradeViewInfo-market_text {
  color: rgba(255, 255, 255, 1);
  margin-left: 8px;
}
.TradeViewInfo-market_titletext {
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
}
</style>
