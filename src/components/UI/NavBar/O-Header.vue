<!-- 右侧icon相距20px -->
<template>
  <div class="o-header-content" :class="iOSstat" :style="{'background-color':bgcolor}">
    <div class="o-header-left">
      <slot name="left"></slot>
    </div>
    <div class="o-header-center">
      <text v-if="!$slots.center" class="o-header-title" :style="{color:titlecolor}">{{title}}</text>
      <slot name="center"></slot>
    </div>
    <div class="o-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "OHeader",
  props: {
    bgcolor: {
      type: String,
      default: ""
    },
    title: {
      default: ""
    },
    titlecolor: {
      default: "#000000"
    },
    bottomborder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iOSstat() {
      let type = WXEnvironment.platform;
      console.log(this.bottomborder);
      return [
        type === "iOS" ? `o-header-content-iOS` : `o-header-content-normal`,
        this.bottomborder ? `o-header-content-border` : ``
      ];
    }
  }
};
</script>
<style scoped>
.o-header-content {
  width: 750px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 36px;
}
.o-header-content-border {
  border-bottom-color: #e5e5e5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.o-header-content-normal {
  height: 93px;
}
.o-header-content-iOS {
  height: 133px;
  padding-top: 46px;
}
.o-header-left {
  flex-direction: row;
  flex: 1;
}
.o-header-right {
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
}
.o-header-title {
  flex: 3;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
}
</style>
