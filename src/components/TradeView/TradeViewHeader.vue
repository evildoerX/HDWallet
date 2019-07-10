<template>
  <div class="TradeViewHeader">
    <!-- <text style="color:#fff">1asdasdasdasdasdasdasdasdasdasdadasd</text> -->
    <OHeader class="TradeViewHeader-content">
      <div slot="left" class="TradeViewHeader-content-left" @click="back()">
        <icon
          class="TradeViewHeader-content-icon"
          :eeui="{ content: 'ios-arrow-back', fontSize: 40, color:'#fff', }"
        ></icon>
      </div>
      <div slot="center">
        <text class="TradeViewHeader-title">{{`${marketInfo.stock} / ${marketInfo.money}`}}</text>
      </div>
      <div slot="right" class="TradeViewHeader-right">
        <icon
          class="TradeViewHeader-content-icon"
          :eeui="{ content: 'ios-notifications-outline', fontSize: 40, color:'#fff', }"
        ></icon>
        <icon
          class="TradeViewHeader-content-icon"
          :eeui="{ content: 'tb-share-light', fontSize: 40, color:'#fff', }"
        ></icon>
      </div>
    </OHeader>
  </div>
</template>

<script>
import OHeader from "../UI/NavBar/O-Header.vue";
const eeui = weex.requireModule("eeui");
const navigator = weex.requireModule("navigator");
export default {
  name: "TradeViewHeader",
  components: {
    OHeader
  },
  props: {
    marketInfo: Object
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    back() {
      navigator.pop();
    }
  }
};
</script>

<style scoped>
.TradeViewHeader {
  background-image: linear-gradient(to right, #041636, #183b77);
  padding-top: 50px;
}
.TradeViewHeader-content {
  flex-direction: row;
}
.TradeViewHeader-content-left {
  width: 100px;
  min-height: 50px;
}
.TradeViewHeader-content-icon {
  width: 60px;
  height: 60px;
}
.TradeViewHeader-right {
  flex-direction: row;
  align-items: center;
}

.TradeViewHeader-navbar {
  width: 750px;
  height: 100px;
}

.TradeViewHeader-title {
  font-size: 32px;
  color: #ffffff;
}

.TradeViewHeader-iconr {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
</style>
