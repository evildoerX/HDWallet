<template>
  <div class="needlogin">
    <div class="needlogin-icons">
      <icon class="needlogin-icon" :eeui="{ content: 'ios-person', fontSize: 60,color:'#fff' }"></icon>
    </div>

    <text class="needlogin-text" @click="sigIn">登录 / 注册</text>
  </div>
</template>

<script>
const eeui = weex.requireModule("eeui");
export default {
  name: "NeedLogin",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    sigIn() {
      eeui.openPage({
        url: "SignIn.js",
        statusBarType: "immersion",
        backgroundColor: "#5ca8f7"
      });
    }
  }
};
</script>

<style scoped>
.needlogin {
  flex-direction: row;
  align-items: center;
  padding: 32px;
}
.needlogin-text {
  font-size: 40px;
  color: #fff;
}
.needlogin-icons {
  background-color: #4183ef;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-right: 32px;
}
.needlogin-icon {
  width: 40px;
  height: 40px;
  color: #fff;
  margin-right: 8px;
}
</style>
