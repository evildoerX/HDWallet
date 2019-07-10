<template>
  <div class="tradedeeplist">
    <div class="tradedeeplist-header">
      <text class="tradedeeplist-header_text">价格(USDT)</text>
      <text class="tradedeeplist-header_text">价格(BTC)</text>
    </div>
    <div class="tradedeeplist-item" v-for="i in 5" :key="i">
      <text class="tradedeeplist-item_sell">8730</text>
      <text class="tradedeeplist-item_sell">57.2</text>
    </div>
    <div class="tradedeeplist-item" v-for="i in 5" :key="i">
      <text class="tradedeeplist-item_buy">8730</text>
      <text class="tradedeeplist-item_buy">57.2</text>
    </div>
  </div>
</template>

<script>
import Http from "../../utils/network/Http";
const eeui = weex.requireModule("eeui");
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.tradedeeplist {
  padding: 16px;
}
.tradedeeplist-header {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 324px;
  margin-bottom: 8px;
}
.tradedeeplist-header_text {
  color: #b3b3b3;
}
.tradedeeplist-item {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  margin-bottom: 4px;
}
.tradedeeplist-item_buy {
  color: #ee6560;
}
.tradedeeplist-item_sell {
  color: #4db872;
}
</style>
