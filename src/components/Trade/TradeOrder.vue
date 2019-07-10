<template>
  <div class="tradeheader">
    <div class="tradeheader-left">
      <text class="tradeheader-left-market">BTC/USDT</text>
      <icon
        class="tradeheader-icon"
        :eeui="{ content: 'ios-arrow-down', fontSize: 32,color:'#b3b3b3' }"
        @click="menuToggle"
      ></icon>
    </div>
    <div class="tradeheader-right">
      <text class="tradeheader-right-price">8585.5</text>
      <text class="tradeheader-right-dao">$8585.5</text>
      <icon
        class="tradeheader-right-icon"
        :eeui="{ content: 'ios-stats', fontSize: 50,color:'#3075ef' }"
        @click="menuToggle"
      ></icon>
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
.tradeheader {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
.tradeheader-left {
  flex-direction: row;
  align-items: center;
  height: 64px;
}
.tradeheader-left-market {
  font-size: 32px;
  margin-right: 8px;
}
.tradeheader-right-price {
  font-size: 32px;
  margin-right: 16px;
}
.tradeheader-right-dao {
  font-size: 24px;
  color: #b3b3b3;
  margin-right: 16px;
}
.tradeheader-right-icon {
  width: 50px;
  height: 50px;
}
.tradeheader-right {
  flex-direction: row;
  align-items: center;
  height: 64px;
}
.tradeheader-icon {
  width: 32px;
  height: 32px;
}
</style>
