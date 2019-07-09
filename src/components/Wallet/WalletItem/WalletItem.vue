<template>
  <div class="walletitem">
    <image class="walletitem-logo" :src="`../assets/AssetLogo/${name}.png`" ></image>
    <div class="walletitem-group">
      <div class="walletitem-group_info">
        <text class="walletitem-group_info_name">{{name}}</text>
        <text class="walletitem-group_info_label">{{tag}}</text>
      </div>
      <div class="walletitem-group_price">
        <text class="walletitem-group_price_name">{{amount}}</text>
        <text class="walletitem-group_price_label">≈${{value}}</text>
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
.walletitem {
  flex-direction: row;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
  padding: 32px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;

}
.walletitem-logo {
  width: 56px;
  height: 56px;
}
.walletitem-group {
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 32px;
}
.walletitem-group_info_name {
  font-size: 32px;
  color: #333333;
}
.walletitem-group_info_label {
  font-size: 28px;
  color: #999999;
  margin-top: 8px;
}
.walletitem-group_price_name {
  font-size: 32px;
  color: #333333;
  text-align: right;
}
.walletitem-group_price_label {
  font-size: 28px;
  color: #999999;
  margin-top: 8px;
}
</style>

