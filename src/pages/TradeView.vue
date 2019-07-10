<template>
  <div class="tradeview">
    <div class="tradeview-statusbar"></div>
    <navbar class="tradeview-navbar">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <div class="tradeview-navbar-main">
          <text class="tradeview-navbar-title">{{`${marketInfo.stock} / ${marketInfo.money}`}}</text>
        </div>
      </navbar-item>
      <navbar-item type="right">
        <icon content="tb-share" class="tradeview-navbar-right"></icon>
      </navbar-item>
    </navbar>
    <TradeViewInfo :marketInfo="marketInfo"/>
    <scroll-view class="tradeview-list">
      <web-view :progressbarVisibility="false" ref="reflectName" class="webview"></web-view>
    </scroll-view>
    <TradeviewButton/>
  </div>
</template>

<script>
import TradeViewInfo from "../components/TradeView/TradeViewInfo.vue";
import TradeviewButton from "../components/TradeView/TradeviewButton.vue";
export default {
  components: {
    TradeViewInfo,
    TradeviewButton
  },
  data() {
    return {
      marketInfo: {}
    };
  },
  created() {
    this.marketInfo = weex.config.params;
  },
  mounted() {
    this.$refs.reflectName.setUrl(
      "http://ws-5cdaa3ce34590.dev.oneitfarm.com/tradeview/"
    );
  },
  methods: {}
};
</script>

<style scoped>
.tradeview {
  flex: 1;
  width: 750px;
  background-color: #171b30;
}
.tradeview-statusbar {
  width: 750px;
  height: 60px;
  background-image: linear-gradient(to right, #72a1ff, #3176ee);
}
.tradeview-navbar {
  width: 750px;
  height: 100px;
  background-image: linear-gradient(to right, #72a1ff, #3176ee);
}

.tradeview-navbar-main {
  flex-direction: row;
  align-items: center;
}

.tradeview-navbar-title {
  font-size: 32px;
  color: #ffffff;
}
.tradeview-navbar-right {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
.tradeview-list {
  width: 750px;
  flex: 1;
}
.webview {
  flex: 1;
}
</style>
