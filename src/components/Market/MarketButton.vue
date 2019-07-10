<template>
  <div class="MarketButton">
    <div class="MarketButton-content">
      <text
        class="MarketButton-item MarketButton-left"
        :class="[currValue==='exchange'?'MarketButton-leftchedked':'']"
        @click="btnClick('exchange')"
      >Exchange</text>
      <text
        class="MarketButton-item"
        :class="[currValue==='global'?'MarketButton-rightchedked':'']"
        @click="btnClick('global')"
      >Global</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarketButton',
  data () {
    return {
      ORadioButton: [
        {
          label: 'Exchange',
          value: 'exchange'
        },
        {
          label: 'Global',
          value: 'global'
        }
      ],
      currValue: 'exchange'
    };
  },
  methods: {
    btnClick (data) {
      this.currValue = data;
    }
  }
};
</script>

<style scoped>
.MarketButton {
  align-items: center;
  background-color: #fff;
  padding-top: 14px;
}
.MarketButton-content {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: #2d8cf0;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  width: 400px;
}
.MarketButton-item {
  width: 200px;
  padding: 14px 0;
  text-align: center;
  color: #2d8cf0;
}
.MarketButton-left {
  border-right-color: #2d8cf0;
  border-right-style: solid;
  border-right-width: 1px;
}
.MarketButton-leftchedked {
  background-color: #2d8cf0;
  border-top-left-radius: 8px;
  border-bottom-left-radius:8px;
  color: #fff;
}
.MarketButton-rightchedked {
  background-color: #2d8cf0;
  border-top-right-radius: 8px;
  border-bottom-right-radius:8px;
  color: #fff;
}
</style>
