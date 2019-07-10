<template>
  <div class="o-panel-container">
    <div
      class="o-panel-content"
      :style="{'background-color': backgroundColor}"
      :class="panelcontentheight"
    >
      <image
        v-if="src"
        :src="src"
        class="o-panel-contentl-image"></image>
      <div class="o-panel-content-text-content">
        <text
          v-if="title"
          :style="{color:titleColor}"
          class="o-panel-content-titletext">{{title}}</text>
        <text
          v-if="disc"
          :class="disctext"> {{disc}}</text>
        <div class="o-panel-content-textfooter"
          v-if=" footer">
          <text class="o-panel-content-textfrom">{{textFrom}}</text>
          <text class="o-panel-content-textother">{{otherInfo}}</text>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OPanel",
  components: {},
  data() {
    return {};
  },
  props: {
    //  背景色
    backgroundColor: {
      default: "white"
    },
    //  左侧按钮图片
    src: {
      default: ""
    },
    //  左侧按钮标题
    title: {
      default: ""
    },
    //  左侧tips
    disc: {
      default: ""
    },
    //  左侧按钮颜色
    titleColor: {
      default: "black"
    },
    //  右侧值
    value: {
      default: ""
    },
    //  右侧值颜色
    valueColor: {
      default: "#999999"
    },
    showArrow: Boolean,
    disabled: Boolean,
    footer: Boolean,
    textFrom: {
      default: ""
    },
    otherInfo: {
      default: ""
    }
  },
  methods: {
    // click(e) {
    //   this.$emit(EVENT.CLICK, e);
    // },
    // longpress(e) {
    //   this.$emit(EVENT.LONGPRESS, e);
    // }
  },
  computed: {
    panelcontentheight() {
      return [
        !this.Src && this.footer
          ? `o-panel-content_heightA`
          : `o-panel-content_height`
      ];
    },
    disctext() {
      return [
        this.Src ? `o-panel-content-disc-text` : `o-panel-content-disc-textA`
      ];
    }
  }
};
</script>

<style scoped>
.o-panel-container {
  flex-direction: row;
  width: 750px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
}
.o-panel-content_height {
  /* height: 150px; */
}
.o-panel-content_heightA {
  /* height: 196px; */
}
.o-panel-container:active {
  background-color: #ffffff;
}
.o-panel-content {
  position: relative;
  flex-direction: row;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  width: 690px;
  border-bottom-color: #d9d9d9;
  padding-bottom: 30px;
}
.o-panel-contentl-image {
  width: 130px;
  height: 130px;
  margin-right: 25px;
}
.o-panel-content-text-content {
  flex-direction: column;
  justify-content: center;
}
.o-panel-content-titletext {
  margin-bottom: 10px;
  font-size: 30px;
  overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
}
.o-panel-content-disc-text {
  width: 550px;
  color: #999999;
  text-overflow: ellipsis;
  word-wrap: break-word;
  margin-bottom: 8px;
}
.o-panel-content-disc-textA {
  width: 660px;
  color: #999999;
  text-overflow: ellipsis;
  word-wrap: break-word;
  margin-bottom: 8px;
}
.o-panel-content-textfooter {
  flex-direction: row;
  /* margin-top: 30px; */
}

.o-panel-content-textfrom {
  font-size: 26px;
  color: #999999;
  padding-right: 26px;
}
.o-panel-content-textother {
  font-size: 26px;
  color: #999999;
}
</style>
