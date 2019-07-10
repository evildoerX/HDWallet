<template>
  <div class="tradeoperate">
    <TradeOpearteButton @btnClick="btnClick"/>
    <div class="tradeoperate-type" @click="minibarRightButtonClick">
      <text class="tradeoperate-type_text">{{curTransferMode.title}}</text>
      <icon
        class="tradeoperate-type_icon"
        :eeui="{ content: 'ios-arrow-down', fontSize: 32,color:'#b3b3b3' }"
        @click="menuToggle"
      ></icon>
    </div>
    <OStepper inputPlaceholder="价格" :max="10000000"/>
    <text class="tradeoperate-info_text">估值：-</text>
    <OStepper inputPlaceholder="数量(BTC)" :max="10000000"/>
    <div>
      <text class="tradeoperate-info_text">可用USDT:</text>
    </div>
    <button class="tradeoperate-button" :eeui="{text:'购买'}"></button>
    <OPopover
      ref="wxc-popover"
      :buttons="btns"
      :position="popoverPosition"
      :arrowPosition="popoverArrowPosition"
      @wxcPopoverButtonClicked="popoverButtonClicked"
    ></OPopover>
  </div>
</template>

<script>
import OPopover from "../UI/Popover/OPopover.vue";
import OStepper from "../UI/Stepper/OStepper.vue";
import TradeOpearteButton from "./TradeOpearteButton.vue";
import Http from "../../utils/network/Http";
const eeui = weex.requireModule("eeui");
export default {
  components: {
    OStepper,
    OPopover,
    TradeOpearteButton
  },
  data() {
    return {
      curTransferype: "buy",
      curTransferMode: {
        title: "限价买入",
        key: "0"
      },
      popoverPosition: { x: 0, y: 300 },
      popoverArrowPosition: { pos: "top", x: 0 }
    };
  },
  created() {},
  computed: {
    btns: function() {
      const str = this.curTransferype === "buy" ? "买入" : "卖出";
      const bdata = [
        {
          text: `限价${str}`,
          key: "0"
        },
        {
          text: `市价${str}`,
          key: "1"
        }
      ];
      return bdata;
    }
  },
  methods: {
    stepperValueChange(e) {
      console.log(e.value);
    },
    minibarRightButtonClick() {
      this.$refs["wxc-popover"].wxcPopoverShow();
    },
    popoverButtonClicked(obj) {
      this.curTransferMode.title = obj.item.text;
      this.curTransferMode.key = obj.item.key;
    },
    btnClick(type) {
      this.curTransferype = type;
    }
  }
};
</script>

<style scoped>
.tradeoperate {
  padding: 16px;
}
.tradeoperate-type {
  flex-direction: row;
  align-items: center;
}
.tradeoperate-type_text {
  font-size: 28px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.tradeoperate-info_text {
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #999999;
}
.tradeoperate-type_icon {
  width: 30px;
  height: 30px;
}
.tradeoperate-right-price {
  font-size: 32px;
  margin-right: 16px;
}
.tradeoperate-right-dao {
  font-size: 24px;
  color: #b3b3b3;
  margin-right: 16px;
}
.tradeoperate-right-icon {
  width: 50px;
  height: 50px;
}
.tradeoperate-right {
  flex-direction: row;
  align-items: center;
  height: 64px;
}
.tradeoperate-icon {
  width: 32px;
  height: 32px;
}
.tradeoperate-type {
  flex-direction: row;
}
.tradeoperate-step {
  width: 359px;
}
.tradeoperate-button {
  width: 359px;
  height: 60px;
}
</style>
