<template>
  <div class="wallet">
    <div class="walletbg"></div>
    <WalletCard />
    <scroll-view class="walletlist">
      <WalletItem
        v-for="(item, index) in walletList"
        :key="index"
        :icon="item.icon"
        :name="item.name"
        :tag="item.tag"
        :amount="item.amount"
        :value="item.value"
      />
      <text class="walletlist-tips">基于BIP44协议</text>
    </scroll-view>
  </div>
</template>

<script>
import WalletCard from "./WalletCard/WalletCard";
import WalletItem from "./WalletItem/WalletItem";
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
          icon: "https://vuejs.org/images/logo.png",
          name: "LTC",
          tag: "Litecoin",
          amount: "9999",
          value: "999999"
        },
        {
          icon: "https://vuejs.org/images/logo.png",
          name: "ETC",
          tag: "Ethereum Classic",
          amount: "9999",
          value: "999999"
        },
        {
          icon: "https://vuejs.org/images/logo.png",
          name: "ZEC",
          tag: "Zcash",
          amount: "9999",
          value: "999999"
        },
        {
          icon: "https://vuejs.org/images/logo.png",
          name: "DASH",
          tag: "Dash",
          amount: "9999",
          value: "999999"
        },
        {
          icon: "https://vuejs.org/images/logo.png",
          name: "TRX",
          tag: "TRON",
          amount: "9999",
          value: "999999"
        }
      ]
    };
  }
};
</script>

<style scoped>
.wallet {
  width: 750px;
  flex: 1;
}
.walletbg {
  width: 750px;
  height: 130px;
  background-color: #3eb4ff;
  position: absolute;
}
.walletlist {
  width: 750px;
  flex: 1;
}
.walletlist-tips {
  text-align: center;
  font-size: 24px;
  padding: 32px 0;
  color: #999999;
}
</style>

