<template>
  <div class="wallet">
    <div class="walletbg"></div>
    <WalletCard />
    <tabbar
      ref="reflectName"
      class="tabbar"
      :eeui="{ tabType: 'top', tabHeight:0 }"
      @pageSelected="pageSelected"
      @tabReselect="tabReselect"
      @refreshListener="refreshListener"
    >
      <tabbar-page :eeui="{ tabName: 'name_1', title:'首页', selectedIcon:'md-home'}">
        <div class="page-content">
          <WalletItem
            v-for="(item, index) in walletList"
            :key="index"
            :icon="item.icon"
            :name="item.name"
            :tag="item.tag"
            :amount="item.amount"
            :value="item.value"
          />
        </div>
      </tabbar-page>
    </tabbar>
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

.tabbar {
  width: 750px;
  flex: 1;
}

.page-content {
  width: 750px;
  flex: 1;
}
</style>

