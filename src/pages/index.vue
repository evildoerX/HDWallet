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
          selectedIcon: "tb-hoe",
          url: "./assets",
        },
        {
          title: "财富",
          selectedIcon: "https://eeui.app/assets/images/cartoon/m7.png",
          unSelectedIcon: "https://eeui.app/assets/images/cartoon/m8.png",
          url:"./test",
          message: 9,
          
        },
        {
          title: "朋友",
          selectedIcon: "md-aperture",
          url:
            "http://dotwe.org/raw/dist/fb6f016b0116969b6b503e1d3a35285f.bundle.wx",
          message: 18
        },
        {
          title: "我的",
          selectedIcon: "md-settings",
          unSelectedIcon: "md-settings",
          url:
            "http://dotwe.org/raw/dist/ad0045a7cff0b3a680d9de6dd4806e81.bundle.wx",
          dot: true
        }
      ]
    };
  }
};
</script>
