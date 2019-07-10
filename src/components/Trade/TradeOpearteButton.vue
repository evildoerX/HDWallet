<template>
  <div class="tradeoperatebutton">
    <div class="tradeoperatebutton-content">
      <text
        class="tradeoperatebutton-item tradeoperatebutton-left"
        :class="[currValue==='buy'?'tradeoperatebutton-leftchedked':'']"
        @click="btnClick('buy')"
      >买入</text>
      <text
        class="tradeoperatebutton-item tradeoperatebutton-right"
        :class="[currValue==='sell'?'tradeoperatebutton-rightchedked':'']"
        @click="btnClick('sell')"
      >卖出</text>
    </div>
  </div>
</template>

<script>
export default {
  name: "TradeOpearteButton",
  data() {
    return {
      currValue: "buy"
    };
  },
  methods: {
    btnClick(data) {
      this.currValue = data;
      this.$emit("btnClick", this.currValue);
    }
  }
};
</script>

<style scoped>
.tradeoperatebutton {
  background-color: #fff;
}
.tradeoperatebutton-content {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f7f8fa;
  border-radius: 8px;
  width: 359px;
  flex: 1;
}
.tradeoperatebutton-item {
  flex: 1;
  padding: 12px 0;
  text-align: center;
}
.tradeoperatebutton-left {
  color: #4db872;
}
.tradeoperatebutton-right {
  color: #ee6560;
}
.tradeoperatebutton-leftchedked {
  background-color: #4db872;
  color: #fff;
}
.tradeoperatebutton-rightchedked {
  background-color: #ee6560;
  color: #fff;
}
</style>
