<template>
  <div class="wallet">
    <div class="wallet-bg"></div>
    <WalletCard class="wallet-card"/>
    <scroll-view
      ref="reflectName"
      class="wallet-list"
      :eeui="{ pullTips: true, }"
      @refreshListener="refreshListener"
    >
      <div v-for="(item, index) in walletList" :key="index" @click="itemClick(item)">
        <WalletItem
          :icon="item.icon"
          :name="item.name"
          :tag="item.tag"
          :amount="item.amount"
          :value="item.value"
        />
      </div>
      <text class="wallet-tips">基于BIP44协议</text>
    </scroll-view>
  </div>
</template>

<script>
import WalletCard from "./WalletCard/WalletCard";
import WalletItem from "./WalletItem/WalletItem";
var eeui = app.requireModule("eeui");

export default {
  components: {
    WalletCard,
    WalletItem
  },

  data() {
    return {
      walletList: [
        {
          name: "BTC",
          tag: "Bitcoin",
          amount: "9999",
          value: "999999"
        },
        {
          name: "ETH",
          tag: "Ethereum",
          amount: "9999",
          value: "999999"
        },
        {
          name: "EOS",
          tag: "Enterprise Operation System",
          amount: "9999",
          value: "999999"
        },
        {
          name: "BCH",
          tag: "Bitcoin Cash",
          amount: "9999",
          value: "999999"
        },
        {
          name: "BSV",
          tag: "Bitcoin SV",
          amount: "9999",
          value: "999999"
        },
        {
          name: "LTC",
          tag: "Litecoin",
          amount: "9999",
          value: "999999"
        },
        {
          name: "ETC",
          tag: "Ethereum Classic",
          amount: "9999",
          value: "999999"
        },
        {
          name: "ZEC",
          tag: "Zcash",
          amount: "9999",
          value: "999999"
        },
        {
          name: "DASH",
          tag: "Dash",
          amount: "9999",
          value: "999999"
        },
        {
          name: "TRX",
          tag: "TRON",
          amount: "9999",
          value: "999999"
        }
      ]
    };
  },
  methods: {
    itemClick(params) {
      eeui.openPage({
        url: 'assetsDetails',
        pageType: "app",
        params: params,
      });
    },
    refreshListener() {
      setTimeout(() => {
        this.$refs.reflectName.setHasMore(true);
        this.$refs.reflectName.refreshed();
        eeui.toast({
          message: "刷新成功",
          gravity: "middle"
        });
      }, 1000);
    }
  }
};
</script>

<style scoped>
.wallet {
  width: 750px;
  flex: 1;
}
.wallet-bg {
  width: 750px;
  height: 150px;
  background-color: #3eb4ff;
  position: absolute;
}
.wallet-card {
  margin-top: 16px;
}
.wallet-list {
  width: 750px;
  flex: 1;
}
.wallet-tips {
  text-align: center;
  font-size: 24px;
  padding: 32px 0;
  color: #999999;
}
</style>

