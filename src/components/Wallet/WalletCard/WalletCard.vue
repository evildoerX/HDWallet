<template>
  <div class="walletCard">
    <div class="walletCard-header">
      <text class="walletCard-header_text">币圈韭菜</text>
      <text class="walletCard-header_btn">未备份 ></text>
    </div>
    <div class="walletCard-content">
      <div class="walletCard-content_header">
        <text class="walletCard-content_header_text">多链钱包</text>
        <icon class="walletCard-content_header_icon" :eeui="{ content: 'ios-eye' }"></icon>
      </div>
      <div class="walletCard-content_info">
        <div class="walletCard-content_info_money">
          <text class="walletCard-content_info_mt">$</text>
          <text class="walletCard-content_info_value">123123123</text>
        </div>
        <icon class="walletCard-content_btn" :eeui="{ content: 'tb-add' }"></icon>
      </div>
    </div>
  </div>
</template>


<style scoped>
.walletCard {
  border-radius: 16px;
  height: 280px;
  width: 718px;
  padding: 32px 24px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 1px;
  border-style: solid;
}
.walletCard-header {
  flex-direction: row;
  align-items: center;
}
.walletCard-header_text {
  font-size: 32px;
  font-weight: 500;
  color: #333333;
}
.walletCard-header_btn {
  margin-left: 16px;
  border-color: #ffa50d;
  border-width: 1px;
  border-radius: 8px;
  padding: 4px 8px;
  color: #ffa50d;
}
.walletCard-content {
  margin-top: 64px;
}
.walletCard-content_header {
  flex-direction: row;
  align-items: center;
}
.walletCard-content_header_text {
  font-size: 28px;
  font-weight: 500;
  color: #999999;
}
.walletCard-content_header_icon {
  margin-left: 16px;
  width: 32px;
  height: 32px;
  font-size: 32px;
  color: #d7d7d8;
}
.walletCard-content_info {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.walletCard-content_info_money {
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
}
.walletCard-content_info_mt {
  color: #999999;
  font-size: 32px;
}
.walletCard-content_info_value {
  font-size: 48px;
  color: #333333;
}
.walletCard-content_btn {
  width: 64px;
  height: 64px;
  font-size: 48px;
  border-radius: 32px;
  border-color: #c6dafb;
  border-width: 2px;
  border-style: solid;
  color: #3eb4ff;
}
</style>
