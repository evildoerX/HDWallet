<template>
  <div class="transfer">
    <navbar class="transfer-navbar">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <div class="transfer-navbar-main">
          <text class="transfer-navbar-title">转账币种选择</text>
        </div>
      </navbar-item>
      <navbar-item type="right">
        <icon content="tb-search" class="transfer-navbar-right"></icon>
      </navbar-item>
    </navbar>
    <scroll-view
      ref="reflectName"
      class="wallet-list"
      :eeui="{ pullTips: true, }"
      @refreshListener="refreshListener"
    >
      <WalletItem
        v-for="(item, index) in walletList"
        :key="index"
        :icon="item.icon"
        :name="item.name"
        :tag="item.tag"
        :amount="item.amount"
        :value="item.value"
      />
    </scroll-view>
  </div>
</template>

<script>
import WalletItem from "../components/Wallet/WalletItem/WalletItem";
var eeui = app.requireModule("eeui");

export default {
  components: {
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
.transfer {
  width: 750px;
  flex: 1;
}
.transfer-navbar {
  width: 750px;
  height: 100px;
}

.transfer-navbar-main {
  flex-direction: row;
  align-items: center;
}

.transfer-navbar-title {
  font-size: 32px;
  color: #ffffff;
}
.transfer-navbar-right {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
</style>
