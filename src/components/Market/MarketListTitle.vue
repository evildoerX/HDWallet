<template>
  <div class="MarketListTitle">
    <text class="MarketListTitle_text">币种</text>
    <text class="MarketListTitle_text">最新价</text>
    <text class="MarketListTitle_text">24H涨跌</text>
  </div>
</template>

<script>
export default {
  name: 'MarketListTitle',
  components: {},
  props: {},
  data () {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.MarketListTitle {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
.MarketListTitle_text {
  color: rgba(0, 0, 0, 0.45);
}
</style>
