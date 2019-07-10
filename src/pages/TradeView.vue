<template>
  <div class="tradeview">
    <TradeViewHeader :marketInfo="marketInfo"/>
    <TradeViewInfo :marketInfo="marketInfo"/>
    <scroll-view class="tradeview-list">
      <web-view :progressbarVisibility="false" ref="reflectName" class="webview"></web-view>
    </scroll-view>
    <TradeviewButton/>
  </div>
</template>

<script>
import TradeViewHeader from "../components/TradeView/TradeViewHeader.vue";
import TradeViewInfo from "../components/TradeView/TradeViewInfo.vue";
import TradeviewButton from "../components/TradeView/TradeviewButton.vue";
export default {
  components: {
    TradeViewHeader,
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
  background-color: #171b30;
}
.tradeview-list {
  width: 750px;
  flex: 1;
}
.webview {
  flex: 1;
}
</style>
