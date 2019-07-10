<template>
  <div class="trade">
    <side-panel
      ref="reflectName"
      class="side_panel"
      :eeui="{width: '380px',scrollbar: false, backgroundColor: '#fff'}"
      @itemClick="itemClick"
      @switchListener="switchListener"
    >
      <!--侧滑菜单部分-->
      <side-panel-menu class="panel_menu" name="菜单1">
        <text>资金划转</text>
      </side-panel-menu>
      <side-panel-menu class="panel_menu" name="菜单1">
        <text>未成交委托</text>
      </side-panel-menu>
      <side-panel-menu class="panel_menu" name="菜单2">
        <text>历史委托</text>
      </side-panel-menu>
      <side-panel-menu class="panel_menu" name="菜单1">
        <text>币币账单</text>
      </side-panel-menu>
      <side-panel-menu class="panel_menu" name="菜单1">
        <text>杠杆规则</text>
      </side-panel-menu>
      <side-panel-menu class="panel_menu" name="菜单1">
        <text>强平订单</text>
      </side-panel-menu>
      <side-panel-menu class="panel_menu" name="菜单1">
        <text>优惠券</text>
      </side-panel-menu>
      <!--正文内容部分-->
      <div class="content">
        <!--正文标题栏-->
        <div class="trade-header">
          <icon
            class="trade-header-icon"
            :eeui="{ content: 'ios-list', fontSize: 50,color:'#b3b3b3' }"
            @click="menuToggle"
          ></icon>
          <TradeTypeButton/>
          <icon
            class="trade-header-icon"
            :eeui="{ content: 'ios-search', fontSize: 50,color:'#b3b3b3' }"
          ></icon>
        </div>
        <TradeHeader/>
        <div class="trade-content">
          <TradeOperate/>
          <TradeDeep/>
        </div>
        <!--正文内容-->
        <scroller class="trade-order">
          <text class="trade-order-title">限价单</text>
          <div class="trade-order-content">
            <div class="trade-order-content_guide">
              <text class="trade-order-content_guide_text">本币暂无挂单</text>
              <text class="trade-order-content_guide_btc" @click="signIn">查看全部</text>
            </div>
          </div>
        </scroller>
      </div>
    </side-panel>
  </div>
</template>

<script>
import TradeTypeButton from "../components/Trade/TradeTypeButton.vue";
import TradeHeader from "../components/Trade/TradeHeader.vue";
import TradeOperate from "../components/Trade/TradeOperate.vue";
import TradeDeep from "../components/Trade/TradeDeep.vue";
const eeui = weex.requireModule("eeui");

export default {
  components: {
    TradeTypeButton,
    TradeHeader,
    TradeOperate,
    TradeDeep
  },
  methods: {
    itemClick(params) {
      // eeui.toast(
      //   "点击了" + (params.position + 1) + "项，name：" + params.name
      // );
    },
    switchListener(params) {
      // eeui.toast("侧边栏：" + (params.show ? "显示了" : "隐藏了"));
    },
    menuToggle() {
      this.$refs.reflectName.menuToggle();
    },
    signIn() {
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    }
  }
};
</script>

<style scoped>
.trade {
  flex: 1;
}

.side_panel {
  width: 750px;
  flex: 1;
}

.panel_menu {
  width: 380px;
  padding-top: 26px;
  padding-bottom: 26px;
  padding-right: 20px;
  padding-left: 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ffffff;
}
.content {
  width: 750px;
}
.content-navbar {
  width: 750px;
  height: 100px;
}
.content-navbar-icon {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
.content-navbar-title {
  color: #ffffff;
}
.content-body {
  width: 750px;
  margin-top: 200px;
  justify-content: center;
  align-items: center;
}
.content-body-toggle {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  color: #ffffff;
  background-color: #00b4ff;
}

.trade-header {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #fff;
}
.trade-header-icon {
  width: 50px;
  height: 50px;
}
.trade-content {
  background-color: #fff;
  width: 750px;
  padding-top: 16px;
  flex-direction: row;
  justify-content: space-between;
}
.trade-order {
  width: 750px;
  margin-top: 16px;
}
.trade-order-title {
  margin-left: 16px;
  margin-bottom: 16px;
  color: #b3b3b3;
  font-size: 28px;
}
.trade-order-content {
  width: 750px;
  flex: 1;
  background-color: #fff;
}
.trade-order-content_guide {
  padding-top: 100px;
  align-items: center;
  justify-content: center;
}
.trade-order-content_guide_text {
  color: #b3b3b3;
  font-size: 24px;
  margin-bottom: 8px;
}
.trade-order-content_guide_btc {
  color: #3075ee;
}
</style>