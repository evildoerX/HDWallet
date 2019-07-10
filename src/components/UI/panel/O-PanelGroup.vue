<template>
  <div class="o-panelgroup" :style="{'margin-top': rpx(spacing, true)}">
    <div class="o-panelgroup-header" :style="backgroundStyle">
      <text v-if="!$slots.left&&title" class="o-panelgroup-title" :style="colorStyle">{{title}}</text>
      <slot name="headerleft"></slot>
      <slot name="headerright"></slot>
    </div>
    <slot name="content"></slot>
    <div class="o-panelgroup-footer">
      <text v-if="footer" class="o-panelgroup-footer_text">{{footer}}</text>
      <text v-if="showArrow" class="o-panelgroup-arrow"></text>
      <slot name="footerleft"></slot>
      <slot name="footerright"></slot>
    </div>
  </div>
</template>
<script>
import Base from "../../../mixins/base.js";
export default {
  name: "OPanelGroup",

  mixins: [Base],

  props: {
    title: String,
    footer: String,
    showArrow: Boolean,
    titleColor: String,
    backgroundColor: {
      default: "#ffffff"
    },
    spacing: {
      default: "30"
    }
  },
  computed: {
    colorStyle() {
      return "color: " + this.titleColor;
    },
    backgroundStyle() {
      return "background-color: " + this.backgroundColor;
    }
  }
};
</script>
<style scoped>
.o-panelgroup {
  background-color: #fff;
  border-top-color: #e5e5e5;
  border-top-style: solid;
  border-top-width: 1px;
  border-bottom-color: #e5e5e5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.o-panelgroup-header {
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-color: #e5e5e5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 750px;
}
.o-panelgroup-title {
  color: #333333;
  font-size: 36px;
}
.o-panelgroup-text {
  color: #999999;
}
.o-panelgroup-footer {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-color: #e5e5e5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.o-panelgroup-footer_text {
  color: #586c94;
  font-size: 28px;
  padding-left: 10px;
}
.o-panelgroup-arrow {
  width: 15px;
  height: 15px;
  border-right-style: solid;
  border-right-width: 4px;
  border-right-color: #c8c8cd;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-bottom-color: #c8c8cd;
  transform: rotate(-45deg);
}
</style>
