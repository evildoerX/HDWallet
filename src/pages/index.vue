<template>
  <div class="app">
    <tabbar ref="reflectName" class="tabbar" :eeui="{ tabType: 'bottom' }" :tabPages="tabPages"></tabbar>
  </div>
</template>

<style>
.app {
  flex: 1;
}

.tabbar {
  flex: 1;
  width: 750px;
}
</style>

<script>
export default {
  data() {
    return {
      tabPages: [
        {
          title: "资产",
          selectedIcon: "tb-home",
          url: "assets",
        },
        {
          title: "财富",
          selectedIcon: "tb-recharge",
          url:"market",
        },
        {
          title: "朋友",
          selectedIcon: "tb-group",
          url:"http://dotwe.org/raw/dist/fb6f016b0116969b6b503e1d3a35285f.bundle.wx",
        },
        {
          title: "我的",
          selectedIcon: "tb-my",
          url:"Ucenter",
        }
      ]
    };
  }
};
</script>
