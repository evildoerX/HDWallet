<template>
  <div class="wallet">
    <div class="walletbg"></div>
    <WalletCard />
  </div>
</template>

<script>
import WalletCard from './WalletCard/WalletCard'
export default {
  components:{
    WalletCard
  }
  
}
</script>

<style scoped>
.walletbg {
  width: 750px;
  height: 130px;
  background-color: #3eb4ff;
  position: absolute;
}
</style>

