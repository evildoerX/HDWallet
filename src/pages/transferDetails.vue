<template>
  <div class="transferdetails">
    <navbar class="transferdetails-navbar">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <div class="transferdetails-navbar-main">
          <text class="transferdetails-navbar-title">{{asset.name}}转账</text>
        </div>
      </navbar-item>
      <navbar-item type="right" @click="openScaner">
        <icon content="tb-scan" class="transferdetails-navbar-right"></icon>
      </navbar-item>
    </navbar>
    <div class="transferdetails-content">
      <div class="transferdetails-content_item">
        <div class="transferdetails-content_itemtitle">
          <text class="transferdetails-content_itemtitle_label">收款地址</text>
          <icon content="tb-people-list" class="transferdetails-content_itemtitle_right"></icon>
        </div>
        <input class="transferdetails-content_iteminput" type="text" placeholder="请输入转账地址"/>
      </div>
      <div class="transferdetails-content_item">
        <div class="transferdetails-content_itemtitle">
          <text class="transferdetails-content_itemtitle_label">地址备注(选填)</text>
        </div>
        <input class="transferdetails-content_iteminput" type="text" placeholder="设置地址备注"/>
      </div>
      <div class="transferdetails-content_item">
        <div class="transferdetails-content_itemtitle">
          <text class="transferdetails-content_itemtitle_label">转账金额</text>
        </div>
        <div class="transferdetails-content_transfermoney">
          <div class="transferdetails-content_transfermoney_item">
            <input class="transferdetails-content_transfermoney_input" type="number" :value="0"/>
            <text class="transferdetails-content_transfermoney_label">BTC</text>
          </div>
          <div>
            <text class="transferdetails-content_itemtitle_label">≈</text>
          </div>
          <div>
            <input class="transferdetails-content_transfermoney_input input-right" type="number" :value="0"/>
            <text class="transferdetails-content_transfermoney_label input-right">USDT</text>
          </div>
        </div>
      </div>
      <div class="transferdetails-content_item">
        <div class="transferdetails-content_itemtitle">
          <text class="transferdetails-content_itemtitle_label">付款地址</text>
          <div>
            <text style="color:#9a9a9a">更换 ></text>
          </div>
        </div>
        <div class="transferdetails-content_transferaddress">
          <div class="transferdetails-content_transferaddress_info">
            <text class="transferdetails-content_transferaddress_name">区块链大神</text>
            <div class="transferdetails-content_transferaddress_info">
              <text class="transferdetails-content_transferaddress_label">余额</text>
              <text class="transferdetails-content_transferaddress_money">0 BTC</text>
            </div>
          </div>
          <text class="transferdetails-content_transferaddress_tips">Df7EDadC0795519fdC7284A67547670F08C5E0</text>
        </div>
      </div>
      <div class="transferdetails-content_item">
        <div class="transferdetails-content_itemtitle">
          <text class="transferdetails-content_itemtitle_label">旷工费用</text>
          <div>
            <text style="color:#9a9a9a">修改 ></text>
          </div>
        </div>
        <text class="transferdetails-content_iteminfo">0.000045 BTC ≈ 0.52 USDT</text>
      </div>
      <button class="transferdetails-content_button" :eeui="{text:'确认转账'}"></button>
    </div>
  </div>
</template>

<script>
var eeui = app.requireModule("eeui");

export default {
  data() {
    return {
      asset: {},
      assetAddress: "0x58Df7EDadC0795519fdC7284A67547670F08C5E0"
    };
  },
  mounted() {
    this.asset = app.config.params ? app.config.params : "error";
  },
  methods: {
    openScaner() {
      eeui.openScaner(null, res => {
        switch (res.status) {
          case "success":
            eeui.toast("识别成功：" + res.text);
            break;

          case "failed":
            eeui.toast("识别失败");
            break;
        }
      });
    },
    copyText() {
      eeui.copyText(this.assetAddress);
      eeui.toast({
        message: "复制成功",
        gravity: "middle"
      });
    },
    cropyText(str) {
      let t = "";
      t = str.slice(0, 10) + "******" + str.substring(32);
      return t;
    }
  }
};
</script>

<style scoped>
.transferdetails {
  width: 750px;
  flex: 1;
}
.transferdetails-navbar {
  width: 750px;
  height: 100px;
}

.transferdetails-navbar-main {
  flex-direction: row;
  align-items: center;
}

.transferdetails-navbar-title {
  font-size: 32px;
  color: #ffffff;
}
.transferdetails-navbar-right {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
.transferdetails-content {
  margin-top: 64px;
  width: 750px;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
}
.transferdetails-content_item {
  width: 750px;
  padding: 0 32px;
  margin-top: 40px;
}
.transferdetails-content_itemtitle {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.transferdetails-content_itemtitle_right {
  width: 64px;
  height: 64px;
  font-size: 40px;
}
.transferdetails-content_iteminput {
  background-color: #f8f9fa;
  padding: 16px 32px;
  height: 80px;
  font-size: 30px;
  border-radius: 10px;
}
.transferdetails-content_button {
  font-size: 24px;
  margin-left: 38px;
  margin-right: 38px;
  margin-top: 64px;
  margin-bottom: 20px;
  width: 300px;
  height: 80px;
}
.transferdetails-content_transfermoney {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 16px 32px;
}
.transferdetails-content_transfermoney_item {

}
.transferdetails-content_transfermoney_input {
  padding-left: 10px;
  height: 80px;
  font-size: 30px;
  border-radius: 10px;
  width: 300px;
}
.transferdetails-content_transfermoney_label {
  color: #999999;
  font-size: 24px;
}
.input-right {
  text-align: right;
}

.transferdetails-content_transferaddress {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 16px 32px;
}
.transferdetails-content_transferaddress_info {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.transferdetails-content_transferaddress_name {
  font-size: 32px;
}
.transferdetails-content_transferaddress_label {
  color: #a2a2a2;
  font-size: 28px;
}
.transferdetails-content_transferaddress_money {
  margin-left: 26px;
  font-size: 28px;
  color: #3075ee;
}
.transferdetails-content_transferaddress_tips {
  color: #a2a2a2;
  font-size: 24px;
  margin-top: 8px;
}
.transferdetails-content_iteminfo {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 16px 32px;
  height: 80px;
  line-height: 50px;
}
</style>
