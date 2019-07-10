<template>
  <div class="tradeheader">
    <div class="tradeheader-content">
      <div class="tradeheader-left" @click="minibarRightButtonClick">
        <text class="tradeheader-left-market">BTC/USDT</text>
        <icon
          class="tradeheader-icon"
          :eeui="{ content: 'ios-arrow-down', fontSize: 32,color:'#b3b3b3' }"
          @click="menuToggle"
        ></icon>
      </div>
      <div class="tradeheader-right">
        <text class="tradeheader-right-price">8585.5</text>
        <text class="tradeheader-right-dao">$8585.5</text>
        <icon
          class="tradeheader-right-icon"
          :eeui="{ content: 'ios-stats', fontSize: 50,color:'#3075ef' }"
          @click="menuToggle"
        ></icon>
      </div>
    </div>

    <OPopup
      ref="wxc-popover"
      :buttons="btns"
      :position="popoverPosition"
      :arrowPosition="popoverArrowPosition"
      @wxcPopoverButtonClicked="popoverButtonClicked"
    >
      <div class="selectmarket">
        <Market :showHeader="false"/>
      </div>
    </OPopup>
  </div>
</template>

<script>
import OPopup from "../UI/Popup/OPopup.vue";
import Market from "../../pages/Market.vue";
import Http from "../../utils/network/Http";
const eeui = weex.requireModule("eeui");
export default {
  components: {
    OPopup,
    Market
  },
  data() {
    return {
      isBottomShow: false,
      height: 400,
      btns: [
        {
          text: "一位小数",
          key: "1"
        },
        {
          text: "零位小数",
          key: "0"
        },
        {
          text: "十位整数",
          key: "10"
        }
      ],
      popoverPosition: { x: 0, y: 160 },
      popoverArrowPosition: { pos: "top", x: 0 }
    };
  },
  created() {},
  methods: {
    minibarRightButtonClick() {
      this.$refs["wxc-popover"].wxcPopoverShow();
    },
    popoverButtonClicked(obj) {
      this.curTransferMode.title = obj.item.text;
      this.curTransferMode.key = obj.item.key;
    },
    openBottomPopup() {
      this.isBottomShow = true;
    },
    popupOverlayBottomClick() {
      this.isBottomShow = false;
    }
  }
};
</script>

<style scoped>
.tradeheader {
  padding: 16px;
  border-bottom-color: #f0f1f3;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  background-color: #fff;
  width: 750px;
}
.tradeheader-content {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.tradeheader-left {
  flex-direction: row;
  align-items: center;
  height: 64px;
  z-index: 99999;
}
.tradeheader-left-market {
  font-size: 32px;
  margin-right: 8px;
}
.tradeheader-right-price {
  font-size: 32px;
  margin-right: 16px;
}
.tradeheader-right-dao {
  font-size: 24px;
  color: #b3b3b3;
  margin-right: 16px;
}
.tradeheader-right-icon {
  width: 50px;
  height: 50px;
}
.tradeheader-right {
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 64px;
}
.tradeheader-icon {
  width: 32px;
  height: 32px;
}
.selectmarket {
  width: 750px;
  height: 600px;
}
</style>
