<template>
  <div class="MarketItem" @click="marketClick">
    <div class="MarketItem-market">
      <div class="MarketItem-market_item MarketItem-marke_bottom">
        <text class="MarketItem-stcok">{{itemData.stock}}</text>
        <text class="MarketItem-g">/</text>
        <text class="MarketItem-money">{{itemData.money}}</text>
      </div>
      <div class="MarketItem-market_item">
        <text class="MarketItem-money">成交量：</text>
        <text class="MarketItem-money">{{itemData.volume}}</text>
      </div>
    </div>
    <div class="MarketItem-price">
      <text class="MarketItem-price_text">{{itemData.price}}</text>
      <text class="MarketItem-price_desc">$0.01</text>
    </div>
    <div class="MarketItem-inc">
      <text class="MarketItem-inc_text">{{`${itemData.increase} %`}}</text>
    </div>
  </div>
</template>

<script>
const eeui = weex.requireModule("eeui");
export default {
  name: "MarketItem",
  props: {
    itemData: Object
  },
  data() {
    return {};
  },
  methods: {
    marketClick() {
      eeui.openPage({
        url: "TradeView.js",
        statusBarType: "immersion",
        params: this.itemData,
        backgroundColor: "#171b30"
      });
    }
  }
};
</script>

<style scoped>
.MarketItem {
  flex-direction: row;
  align-items: center;
  width: 750px;
  justify-content: space-between;
  padding: 24px 16px;
  border-bottom-color: #e5e5e5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: #fff;
}
.MarketItem:last-child {
  border-bottom: none;
}
.MarketItem-market_item {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.MarketItem-marke_bottom {
  margin-bottom: 8px;
}
.MarketItem-inc {
  background-color: rgb(77, 184, 114);
  padding: 8px 32px;
  min-width: 120px;
  border-radius: 8px;
}
.MarketItem-inc_text {
  color: #fff;
  text-align: center;
}
.MarketItem-stcok {
  color: rgba(0, 0, 0, 0.65);
  font-size: 32px;
}
.MarketItem-g {
  color: rgba(0, 0, 0, 0.45);
  font-size: 24px;
  margin: 0 8px;
}
.MarketItem-money {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.45);
}
.MarketItem-price_text {
  font-size: 32px;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.65);
}
.MarketItem-price_desc {
  color: rgba(0, 0, 0, 0.45);
  margin: 0 8px;
}
</style>
