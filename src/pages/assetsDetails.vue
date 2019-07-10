<template>
  <div class="assetsdetails">
    <navbar class="assetsdetails-navbar" >
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <div class="assetsdetails-navbar-main">
          <text class="assetsdetails-navbar-title">{{asset.name}}</text>
        </div>
      </navbar-item>
    </navbar>
    <div class="assetsdetails-content">
      <image class="assetsdetails-content-logo" :src="`../assets/AssetLogo/${asset.name}.png`" ></image>
      <div class="assetsdetails-content_asset">
        <text class="assetsdetails-content_assetvalue">0</text>
        <text class="assetsdetails-content_assetusd">≈ 0.00 USD</text>
      </div>
      <div class="assetsdetails-content_listitem">
        <button class="assetsdetails-content_button" :eeui="{text:'收款',  model:'green'}" @click="receiptClick"></button>
        <button class="assetsdetails-content_button" :eeui="{text:'转账',  model:'blue'}" @click="transferClick"></button>
      </div>
      <div class="assetsdetails-content_line"></div>
      <tabbar
        ref="reflectName"
        class="assetsdetails-content_tabs"
        :eeui="tabsEeui"
        :tabPages="tabPages"></tabbar>
    </div>
  </div>
</template>

<script>
var eeui = app.requireModule("eeui");

export default {
  data() {
    return {
      tabsEeui:{ 
        tabType: 'top',
        tabBackgroundColor: '#ffffff',
        indicatorColor: '#3075ee',
        indicatorWidth: 160,
        underlineColor: '#e9e9e9',
        underlineHeight: 2,
        textSelectColor: '#3075ee',
        textUnselectColor: '#999999',
        textBold:2 
      },
      asset: {},
      assetAddress:'0x58Df7EDadC0795519fdC7284A67547670F08C5E0',
      tabPages: [
        {
            title: '全部',
            url: 'http://dotwe.org/raw/dist/b5fd96d8d790f0100bdfc20b93eedf09.bundle.wx',
        },
        {
            title: '收款',
            url: 'http://dotwe.org/raw/dist/ba938c9aaebe41e5f60b98f90bd0bf61.bundle.wx',
            message: 9
        },
        {
            title: '转账',
            url: 'http://dotwe.org/raw/dist/fb6f016b0116969b6b503e1d3a35285f.bundle.wx',
            message: 18
        },
      ],
    };
  },
  mounted() {
    this.asset = app.config.params ? app.config.params : "error";
  },
  methods: {
    receiptClick() {
      eeui.openPage({
        url: 'receiptDetails',
        pageType: "app",
        params: this.asset,
      });
    },
    transferClick() {
      eeui.openPage({
        url: 'transferDetails',
        pageType: "app",
        params: this.asset,
      });
    },
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
.assetsdetails {
  width: 750px;
  flex: 1;
}
.assetsdetails-navbar {
  width: 750px;
  height: 100px;
}

.assetsdetails-navbar-main {
  flex-direction: row;
  align-items: center;
}

.assetsdetails-navbar-title {
  font-size: 32px;
  color: #ffffff;
}
.assetsdetails-navbar-right {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
.assetsdetails-content {
  margin-top: 64px;
  width: 750px;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
}
.assetsdetails-content-logo {
  width: 128px;
  height: 128px;
}
.assetsdetails-content_asset {
  align-items: center;
  margin-top: 32px;
}
.assetsdetails-content_assetvalue {
  font-size: 80px;
  font-weight: 500;
  color: #333333;
}
.assetsdetails-content_assetusd {
  font-size: 40px;
  font-weight: 500;
  color: #666666;
}
.assetsdetails-content_line {
  background-color: #f8f9fa;
  height: 32px;
  width: 750px;
}

.assetsdetails-content_button {
  font-size: 24px;
  margin-left: 38px;
  margin-right: 38px;
  margin-top: 64px;
  margin-bottom: 20px;
  width: 300px;
  height: 80px;
}
.assetsdetails-content_listitem {
  width: 750px;
  flex-direction: row;
  margin-bottom: 32px;
}

.assetsdetails-content_tabs {
  flex: 1;
  width: 750px;
}
</style>
