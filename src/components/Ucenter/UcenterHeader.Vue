<template>
  <div class="ucenterheader">
    <OHeader>
      <div slot="left" @click="back()">
        <icon
          class="ucenterheader-back"
          :eeui="{ content: 'ios-arrow-back', fontSize: 40, color:'#fff', }"
        ></icon>
      </div>
    </OHeader>
    <NeedLogin v-if="needLogin"/>
    <UcenterLoginInfo v-else :userName="accountData.username"/>
  </div>
</template>

<script>
import OHeader from "../UI/NavBar/O-Header.vue";
import NeedLogin from "./NeedLogin.vue";
import UcenterLoginInfo from "./UcenterLoginInfo.vue";
const eeui = weex.requireModule("eeui");
const navigator = weex.requireModule("navigator");
export default {
  name: "UcenterHeader",
  components: {
    OHeader,
    NeedLogin,
    UcenterLoginInfo
  },
  data() {
    return {
      needLogin: true,
      accountData: {},
      balance: "0.00000",
      dao: "0.00"
    };
  },
  created() {
    this.accountData = JSON.parse(eeui.getVariate("accountData", {}));
    if (this.accountData.account_token !== undefined) {
      this.needLogin = false;
    }
  },
  methods: {
    back() {
      navigator.pop();
    },
    sigIn() {
      eeui.toast(`"开始请求 login"`);
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
.ucenterheader {
  width: 750px;
  background-image: linear-gradient(to right, #2d8cf0, #569ffa);
  padding-top: 50px;
  padding-bottom: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
}
.ucenterheader-back {
  width: 100px;
  height: 100px;
}
.ucenterheader-data {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.homeheader-right {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.ucenterheader-text {
  font-size: 28px;
  color: #9a9a9a;
}
.ucenterheader-icon {
  width: 40px;
  height: 40px;
  color: #9a9a9a;
  margin-right: 8px;
}
.ucenterheader-coin {
  font-size: 30px;
  margin-right: 8px;
}
.ucenterheader-dao {
  color: #9a9a9a;
}
</style>
