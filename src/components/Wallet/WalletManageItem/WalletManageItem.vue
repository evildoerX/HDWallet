<template>
  <div class="walletmanageitem" >
    <icon class="walletmanageitem_icon" :eeui="{ content: icon }"></icon>
    <div class="walletmanageitem-group">
      <div class="walletmanageitem-group_info">
        <text class="walletmanageitem-group_info_name">{{name}}</text>
      </div>
      <div class="walletmanageitem-group_price">
        <icon class="walletCard-content_btn" :eeui="{ content: 'ios-arrow-forward' }"></icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    icon:{
      type:String
    },
    name:{
      type:String
    },
    tag:{
      type:String
    },
    amount:{
      type:String
    },
    value:{
      type:String
    }
  }
}
</script>



<style scoped>
.walletmanageitem {
  flex-direction: row;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
  padding: 32px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
}
.walletmanageitem_icon {
  width: 100px;
  height: 100px;
}
.walletmanageitem-logo {
  width: 56px;
  height: 56px;
}
.walletmanageitem-group {
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 32px;
}
.walletmanageitem-group_info_name {
  font-size: 32px;
  color: #333333;
}
.walletmanageitem-group_info_label {
  font-size: 28px;
  color: #999999;
  margin-top: 8px;
}
.walletmanageitem-group_price_name {
  font-size: 32px;
  color: #333333;
  text-align: right;
}
.walletmanageitem-group_price_label {
  font-size: 28px;
  color: #999999;
  margin-top: 8px;
}
</style>

