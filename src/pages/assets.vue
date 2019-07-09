<template>
  <div class="asset">
    <navbar class="asset-navbar">
      <navbar-item type="title">
        <div class="asset-navbar-main">
          <text class="asset-navbar-title">资产</text>
        </div>
      </navbar-item>
    </navbar>
    <Tool />
    <Wallet />
  </div>
</template>

<script>
import Tool from '../components/Tool/Tool'
import Wallet from '../components/Wallet/Wallet'
const eeui = app.requireModule("eeui");
export default {
  components:{
    Tool,
    Wallet
  },
  data() {
    return {};
  },

  mounted() {
    eeui.setPageBackPressed(null, function() {
      eeui.confirm(
        {
          title: "温馨提示",
          message: "你确定要退出hdwallet吗？",
          buttons: ["取消", "确定"]
        },
        result => {
          if (result.status === "click" && result.title === "确定") {
            eeui.closePage(null);
          }
        }
      );
    });
  },

  methods: {
  }
};
</script>

<style scoped>
.asset {
  flex: 1;
}

.asset-navbar {
  width: 750px;
  height: 100px;
}

.asset-navbar-main {
  flex-direction: row;
  align-items: center;
}

.asset-navbar-title {
  font-size: 32px;
  color: #ffffff;
}

</style>