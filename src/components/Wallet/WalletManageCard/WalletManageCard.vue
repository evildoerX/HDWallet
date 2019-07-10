<template>
  <div class="walletCard">
    <div class="walletCard-header">
      <div class="walletCard-header_left">
        <text class="walletCard-header_lefttext">币圈韭菜</text>
      </div>
      <div class="walletCard-header_right">
        <text class="walletCard-header_righttext">{{defaultWallet?'默认钱包':'设置为默认钱吧'}}</text>
        <icon class="walletCard-header_righticon" :style="{color: defaultWallet? '#ffffff': '#cccccc'}" :eeui="{ content: 'ios-checkmark-circle' }"></icon>
      </div>
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
        <icon class="walletCard-content_btn" :eeui="{ content: 'tb-more' }"></icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    defaultWallet:{
      type: Boolean,
      default: true
    },
  }
}
</script>


<style scoped>
.walletCard {
  border-radius: 16px;
  height: 280px;
  width: 718px;
  padding: 32px 24px;
  margin-left: 16px;
  margin-right: 16px;
  background-image: linear-gradient(to right, #72a1ff, #3176ee);
}
.walletCard-header {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.walletCard-header_left {
  flex-direction: row;
  align-items: center;
}
.walletCard-header_lefttext {
  font-size: 32px;
  font-weight: 500;
  color: #ffffff;
}
.walletCard-header_right{
  flex-direction: row;
  align-items: center;
}
.walletCard-header_righttext {
  font-size: 28px;
  color: #ffffff;
}
.walletCard-header_righticon {
  width: 48px;
  height: 48px;
  font-size: 32px;
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
  color: #ffffff;
}
.walletCard-content_header_icon {
  margin-left: 16px;
  width: 32px;
  height: 32px;
  font-size: 32px;
  color: #ffffff;
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
  color: #ffffff;
  font-size: 32px;
}
.walletCard-content_info_value {
  font-size: 48px;
  color: #ffffff;
}
.walletCard-content_btn {
  width: 64px;
  height: 64px;
  font-size: 48px;
  color: #ffffff;
}
</style>
