<template>
  <icon class="walletdetails">
    <div class="walletdetails_statusbar"></div>
    <navbar class="walletdetails-navbar" :eeui="{backgroundColor:'#72a1ff'}">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <div class="walletdetails-navbar-main">
          <text class="walletdetails-navbar-title">{{asset.name}}收款</text>
        </div>
      </navbar-item>
      <navbar-item type="right">
        <icon content="tb-share" class="walletdetails-navbar-right"></icon>
      </navbar-item>
    </navbar>
    <div class="walletdetails-content">
      <div class="walletdetails-bg"></div>
      <WalletManageCard class="walletdetails-card"/>
      <WalletManageItem icon="ios-wallet" name="修改钱包名称"/>
      <WalletManageItem icon="md-key" name="导出助记词"/>
      <WalletManageItem icon="md-key" name="开通EOS账户"/>
      <WalletManageItem icon="md-key" name="导出私钥地址"/>
    </div>
  </icon>
</template>

<script>
import WalletManageCard from "../components/Wallet/WalletManageCard/WalletManageCard";
import WalletManageItem from "../components/Wallet/WalletManageItem/WalletManageItem"
var eeui = app.requireModule("eeui");

export default {
  components: {
    WalletManageCard,
    WalletManageItem
  },
  data() {
    return {
      asset: {},
      assetAddress:'0x58Df7EDadC0795519fdC7284A67547670F08C5E0'
    };
  },
  mounted() {
    this.asset = app.config.params ? app.config.params : "error";
  },
  methods: {
    copyText() {
      eeui.copyText(this.assetAddress);
      eeui.toast({
          message: "复制成功",
          gravity: "middle"
        });
    },
    cropyText(str){
      let t = ""
      t = str.slice(0,10) + "******" + str.substring(32)
      return t
    }
  }
};
</script>

<style scoped>
.walletdetails {
  width: 750px;
  flex: 1;
}
.walletdetails_statusbar {
  width: 750px;
  height: 60px;
  background-image: linear-gradient(to right, #72a1ff, #3176ee);
}
.walletdetails-navbar {
  width: 750px;
  height: 100px;
  background-image: linear-gradient(to right, #72a1ff, #3176ee);
}

.walletdetails-navbar-main {
  flex-direction: row;
  align-items: center;
}

.walletdetails-navbar-title {
  font-size: 32px;
  color: #ffffff;
}
.walletdetails-navbar-right {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
.walletdetails-bg {
  margin-top: -10px;
  width: 750px;
  height: 180px;
  background-image: linear-gradient(to right, #72a1ff, #3176ee);
  position: absolute;
}
.walletdetails-content {
  width: 750px;
  flex: 1;
  align-items: center;
}
.walletdetails-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 1px;
  border-style: solid;
}
</style>
