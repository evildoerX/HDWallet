<template>
  <div class="TradeviewButton">
    <div class="TradeviewButton-buy">
      <text class="TradeviewButton-text">买入</text>
    </div>
    <div class="TradeviewButton-sell">
      <text class="TradeviewButton-text">卖出</text>
    </div>
    <div class="TradeviewButton-add">
      <icon
        class="TradeviewButton-icon"
        :eeui="{ content: 'ios-heart-empty', fontSize: 40, color:'#fff', }"
      ></icon>
      <text class="TradeviewButton-addtext">加自选</text>
    </div>
  </div>
</template>

<script>
const eeui = weex.requireModule("eeui");
export default {
  name: "TradeviewButton",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.TradeviewButton {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.TradeviewButton-buy {
  background-color: #4db872;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.TradeviewButton-sell {
  background-color: #ee6560;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.TradeviewButton-add {
  background-color: #282e45;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
}
.TradeviewButton-icon {
  width: 40px;
  height: 40px;
}
.TradeviewButton-addtext {
  color: rgba(255, 255, 255, 0.85);
  font-size: 20px;
}
.TradeviewButton-text {
  color: rgba(255, 255, 255, 0.85);
  font-size: 30px;
}
</style>
