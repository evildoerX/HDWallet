<template>
  <div class="wxc-demo">
    <text @click="minibarRightButtonClick">show</text>
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
// import { WxcMinibar, WxcPopover } from "weex-ui";
import OPopover from "../UI/Popover/OPopover.vue";
const modal = weex.requireModule("modal");
export const WEEXUI_ICON =
  "https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png";
export const RETURN_ICON =
  "https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png";
export const SCAN_ICON =
  "https://gw.alicdn.com/tfs/TB1Vm3abuuSBuNjy1XcXXcYjFXa-64-64.png";
export const QRCODE_ICON =
  "https://gw.alicdn.com/tfs/TB1U93abuuSBuNjy1XcXXcYjFXa-64-64.png";
export const QUESTION_ICON =
  "https://gw.alicdn.com/tfs/TB1MWDTbwmTBuNjy1XbXXaMrVXa-64-64.png";
export default {
  components: { OPopover },
  data: () => ({
    leftButton: RETURN_ICON,
    btns: [
      {
        icon: SCAN_ICON,
        text: "Scan",
        key: "key-scan"
      },
      {
        icon: QRCODE_ICON,
        text: "My Qrcode",
        key: "key-qrcode"
      },
      {
        icon: QUESTION_ICON,
        text: "Help",
        key: "key-help"
      }
    ],
    popoverPosition: { x: -14, y: 380 },
    popoverArrowPosition: { pos: "top", x: -15 }
  }),
  methods: {
    minibarRightButtonClick() {
      this.$refs["wxc-popover"].wxcPopoverShow();
    },
    popoverButtonClicked(obj) {
      modal.toast({
        message: `key:${obj.key}, index:${obj.index}`,
        duration: 1
      });
    }
  }
};
</script>