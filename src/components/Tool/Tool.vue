<template>
  <div class="tool">
    <div class="tool-item" @click="openScaner">
      <icon class="tool-item_icon" :eeui="{ content: 'tb-scan' }"></icon>
      <text class="tool-item_text">扫一扫</text>
    </div>
    <div class="tool-item">
      <icon class="tool-item_icon" :eeui="{ content: 'tb-qrcode' }"></icon>
      <text class="tool-item_text">收款</text>
    </div>
    <div class="tool-item">
      <icon class="tool-item_icon" :eeui="{ content: 'tb-refund' }"></icon>
      <text class="tool-item_text">转账</text>
    </div>
    <div class="tool-item">
      <icon class="tool-item_icon" :eeui="{ content: 'tb-text' }"></icon>
      <text class="tool-item_text">交易明细</text>
    </div>
  </div>
</template>

<script>
const eeui = app.requireModule("eeui");
export default {
  methods: {
    openScaner() {
      eeui.openScaner(null, res => {
        switch (res.status) {
          case "success":
            eeui.toast("识别成功：" + res.text);
            break;

          case "failed":
            eeui.toast("识别失败");
            break;
        }
      });
    }
  }
};
</script>

<style scoped>
.tool {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background-color: #3eb4ff;
}
.tool-item {
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
}
.tool-item_icon {
  width: 48px;
  height: 48px;
  font-size: 48px;
  color: #fff;
}
.tool-item_text {
  margin-top: 16px;
  color: #fff;
  font-size: 24px;
}
</style>
