<template>
  <div class="ucenterlogininfo">
    <div class="ucenterlogininfo-left">
      <div class="ucenterlogininfo-icons">
        <icon
          class="ucenterlogininfo-icon"
          :eeui="{ content: 'ios-person', fontSize: 60,color:'#fff' }"
        ></icon>
      </div>
      <div>
        <text class="ucenterlogininfo-text" @click="sigIn">{{userName}}</text>
        <div class="ucenterlogininfo-otherbox">
          <div class="ucenterlogininfo-otherinfo">
            <text class="ucenterlogininfo-otherinfo-text ucenterlogininfo-otherinfo-bg">v0</text>
            <text class="ucenterlogininfo-otherinfo-text">实名登记</text>
          </div>
          <div class="ucenterlogininfo-otherinfo">
            <text class="ucenterlogininfo-otherinfo-text ucenterlogininfo-otherinfo-bgt">v1</text>
            <text class="ucenterlogininfo-otherinfo-text">手续费登记 ></text>
          </div>
        </div>
      </div>
    </div>
    <text class="ucenter-qh">切换账户</text>
  </div>
</template>

<script>
const eeui = weex.requireModule("eeui");
export default {
  name: "NeedLogin",
  components: {},
  props: {
    userName: {
      type: String
    }
  },
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
.ucenterlogininfo {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 718px;
  padding: 32px 0 32px 32px;
}
.ucenterlogininfo-left {
  flex-direction: row;
  /* align-items: center; */
}
.ucenterlogininfo-otherbox {
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
}
.ucenterlogininfo-otherinfo {
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  background-color: #5d97f1;
  height: 40px;
  border-radius: 20px;
}
.ucenterlogininfo-otherinfo-bg {
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 16px;
  background-color: #afccf8;
  text-align: center;
}
.ucenterlogininfo-otherinfo-bgt {
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 16px;
  background-color: #4db872;
  text-align: center;
}
.ucenterlogininfo-otherinfo-text {
  font-size: 16px;
  margin-right: 16px;
  color: #fff;
}
.ucenterlogininfo-text {
  font-size: 40px;
  color: #fff;
}
.ucenterlogininfo-icons {
  background-color: #4183ef;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-right: 32px;
}
.ucenterlogininfo-icon {
  width: 40px;
  height: 40px;
  color: #fff;
  margin-right: 8px;
}
.ucenter-qh {
  color: #9fc0f8;
  font-size: 32px;
}
</style>
