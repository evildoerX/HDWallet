<template>
  <div class="MarketList">
    <MarketItem v-for="(item,index) in marketList" :key="index" :itemData="item"></MarketItem>
  </div>
</template>

<script>
import MarketItem from "./MarketItem.vue";
import Http from "../../utils/network/Http";
const eeui = weex.requireModule("eeui");
export default {
  name: "MarketList",
  components: {
    MarketItem
  },
  props: {
    marketType: {
      type: String,
      default: "creat_time"
    }
  },
  data() {
    return {
      marketList: []
    };
  },
  created() {
    this.getMarketList();
  },
  computed: {
    // marketList: function() {
    //   return this.$store.getters.getMarketList;
    // }
  },
  // watch: {
  //   marketType: function(newValue, oldValue) {
  //     // eeui.toast({
  //     //   message: "newValue:" + newValue,
  //     //   gravity: "middle"
  //     // });
  //     this.getMarketList(newValue);
  //   }
  // },
  methods: {
    getMarketList(type) {
      const postData = {
        order: "desc",
        order_by: this.marketType // increase
      };
      Http.postData("/market/list", postData).then(res => {
        this.marketList = res.items.slice(0, 11);
      });
    }
  }
};
</script>

<style scoped>
.MarketList {
  background-color: #fff;
}
</style>
