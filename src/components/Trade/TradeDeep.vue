<template>
  <div class="tradedeep">
    <div class="tradedeep-type" @click="minibarRightButtonClick">
      <text class="tradedeep-type_text">{{curTransferMode.title}}</text>
      <icon
        class="tradedeep-type_icon"
        :eeui="{ content: 'ios-arrow-down', fontSize: 32,color:'#b3b3b3' }"
        @click="menuToggle"
      ></icon>
    </div>
    <TradeDeepList/>
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
import Http from "../../utils/network/Http";
import TradeDeepList from "./TradeDeepList.vue";
const eeui = weex.requireModule("eeui");
export default {
  components: {
    TradeDeepList,
    OPopover
  },
  data() {
    return {
      curTransferype: "buy",
      curTransferMode: {
        title: "十位整数",
        key: "10"
      },
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
      popoverPosition: { x: 330, y: 250 },
      popoverArrowPosition: { pos: "top", x: -15 }
    };
  },
  created() {},
  computed: {},
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
.tradedeep {
}
.tradedeep-type {
  flex-direction: row;
  align-items: center;
}
.tradedeep-type_text {
  font-size: 28px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.tradedeep-info_text {
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #999999;
}
.tradedeep-type_icon {
  width: 30px;
  height: 30px;
}
.tradedeep-left {
  flex-direction: row;
  align-items: center;
  height: 64px;
}
.tradedeep-left-market {
  font-size: 32px;
  margin-right: 8px;
}
.tradedeep-right-price {
  font-size: 32px;
  margin-right: 16px;
}
.tradedeep-right-dao {
  font-size: 24px;
  color: #b3b3b3;
  margin-right: 16px;
}
.tradedeep-right-icon {
  width: 50px;
  height: 50px;
}
.tradedeep-right {
  flex-direction: row;
  align-items: center;
  height: 64px;
}
.tradedeep-icon {
  width: 32px;
  height: 32px;
}
.tradedeep-type {
  flex-direction: row;
}
.tradedeep-step {
  width: 359px;
}
.tradedeep-button {
  width: 359px;
  height: 60px;
}
</style>
