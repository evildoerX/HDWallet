<template>
  <div class="o-cell" :class="[bottomborder? 'o-cell-border' : '']">
    <div class="o-cell-left">
      <icon class="o-cell-icon" :eeui="{ content: 'ios-settings', fontSize: 40,color:'#b3b3b3' }"></icon>
      <text class="o-cell-title">{{title}}</text>
    </div>
    <div class="o-cell-right">
      <text class="o-cell-value">{{value}}</text>
      <icon
        v-if="showArrow"
        class="o-cell-icon"
        :eeui="{ content: 'ios-arrow-forward', fontSize: 40,color:'#b3b3b3' }"
      ></icon>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cell",
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    bottomborder: {
      type: Boolean,
      default: true
    }
  },
  computed: {}
};
</script>
<style scoped>
.o-cell {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 32px;
}
.o-cell-border {
  border-bottom-color: #e4e4e4;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.o-cell-left {
  flex-direction: row;
}
.o-cell-right {
  flex-direction: row;
  align-items: center;
}
.o-cell-icon {
  width: 40px;
  height: 40px;
  margin-right: 16px;
}
.o-cell-title {
  color: #000;
  font-size: 32px;
}
.o-cell-value {
  color: #b3b3b3;
  font-size: 28px;
  margin-right: 16px;
}
</style>
