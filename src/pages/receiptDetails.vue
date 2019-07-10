<template>
  <div class="receiptdetails">
    <navbar class="receiptdetails-navbar" >
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <div class="receiptdetails-navbar-main">
          <text class="receiptdetails-navbar-title">{{asset.name}}收款</text>
        </div>
      </navbar-item>
      <navbar-item type="right">
        <icon content="tb-share" class="receiptdetails-navbar-right"></icon>
      </navbar-item>
    </navbar>
    <div class="receiptdetails-content">
      <text class="receiptdetails-content_name">收款地址：区块链韭菜</text>
      <div class="receiptdetails-content_address">
        <text class="receiptdetails-content_address_label">{{cropyText(assetAddress)}}</text>
        <icon content="tb-copy" class="receiptdetails-content_address_copy" @click="copyText"></icon>
      </div>
      <image class="receiptdetails-content-qr" src="https://c-ssl.duitang.com/uploads/people/201903/20/20190320123039_Ey8sc.png" ></image>
      <div class="receiptdetails-content_listitem">
        <button class="receiptdetails-content_button" :eeui="{text:'更换收款钱包'}"></button>
        <button class="receiptdetails-content_button" :eeui="{text:'设置收款金额', model:'green'}"></button>
      </div>
    </div>
  </div>
</template>

<script>
var eeui = app.requireModule("eeui");

export default {
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
.receiptdetails {
  width: 750px;
  flex: 1;
}
.receiptdetails-navbar {
  width: 750px;
  height: 100px;
}

.receiptdetails-navbar-main {
  flex-direction: row;
  align-items: center;
}

.receiptdetails-navbar-title {
  font-size: 32px;
  color: #ffffff;
}
.receiptdetails-navbar-right {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
.receiptdetails-content {
  margin-top: 200px;
  width: 750px;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
}
.receiptdetails-content_name {
  font-size: 32px;
  font-weight: 500;
}
.receiptdetails-content_address {
  margin-top: 64px;
  width: 480px;
  height: 80px;
  padding: 0 32px;
  border-radius: 40px;
  background-color: #eaf1fd;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.receiptdetails-content_address_label {
  color: #6a6a6a;
  font-size: 26px;
}
.receiptdetails-content_address_copy {
  width:48px;
  height: 48px;
  font-size: 32px;
  color: #3177f2;
}
.receiptdetails-content-qr {
  width: 400px;
  height: 400px;
  margin-top: 64px;
}
.receiptdetails-content_setmoney {
  margin-top: 32px;
  font-size: 32px;
  color: #3075ee;
}

.receiptdetails-content_button {
  font-size: 24px;
  margin-left: 38px;
  margin-right: 38px;
  margin-top: 64px;
  margin-bottom: 20px;
  width: 300px;
  height: 80px;
}
.receiptdetails-content_listitem {
  width: 750px;
  flex-direction: row;
}
</style>
