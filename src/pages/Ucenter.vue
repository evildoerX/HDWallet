<template>
  <div class="ucenter">
    <UcenterHeader/>
    <scroll-view class="ucenter-list">
      <OCell
        v-if="isLogin"
        class="ucenter-line"
        title="点卡余额"
        value="0.0000"
        :showArrow="false"
        :bottomborder="false"
      />
      <OCell class="ucenter-line" title="在线客服"/>
      <OCell title="帮助中心"/>
      <OCell v-if="isLogin" title="问题反馈"/>
      <OCell title="版本号" value="0.0.1" :bottomborder="false"/>
      <OCell class="ucenter-line" title="加入社群"/>
      <OCell v-if="isLogin" title="推荐给好友" :bottomborder="false"/>
      <OCell class="ucenter-line" title="切换计价货币" value="美元"/>
      <OCell title="汇率概览"/>
      <OCell title="费率详情"/>
      <OCell title="选择语言"/>
      <OCell title="夜间模式" value="未开启" :bottomborder="false"/>
      <button v-if="isLogin" class="ucenter-button" :eeui="{text:'退出当前账户'}" @click="signOut"></button>
      <div v-if="!isLogin" class="block"></div>
    </scroll-view>
  </div>
</template>

<script>
import OCell from "../components/UI/Cell/Cell.vue";
import UcenterHeader from "../components/Ucenter/UcenterHeader.vue";
import Http from "../utils/network/Http";
const eeui = weex.requireModule("eeui");
export default {
  components: {
    OCell,
    UcenterHeader
  },
  data() {
    return {
      isLogin: false,
      accountData: {},
      balance: "0.00000",
      dao: "0.00"
    };
  },
  created() {
    this.accountData = JSON.parse(eeui.getVariate("accountData", {}));
    if (this.accountData.account_token !== undefined) {
      this.isLogin = true;
    }
  },
  methods: {
    signOut() {
      eeui.setVariate("accountData", null);
      eeui.openPage({
        url: "index.js"
      });
    }
  }
};
</script>

<style scoped>
.ucenter {
  flex: 1;
  width: 750px;
  background-color: #f5f5f9;
}
.ucenter-list {
  width: 750px;
  flex: 1;
}
.ucenter-line {
  margin-top: 32px;
}
.ucenter-button {
  font-size: 24px;
  margin-left: 37.5px;
  margin-right: 37.5px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 674px;
  height: 80px;
}
.block {
  height: 300px;
}
</style>
