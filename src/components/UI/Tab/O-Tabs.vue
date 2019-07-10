<template>
  <div>
    <div class="o-Tabs-header">
      <scroller class="o-Tabs-nav" ref="tabs" scroll-direction="horizontal" show-scrollbar="false">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="o-Tabs-tab"
          :ref="'tab'+index"
          :style="tabWidth"
          @click="selectTab(index, tabs)"
        >
          <text
            class="o-Tabs-text"
            :style="{ color: tab.value===value? activecolor : defaultcolor }"
          >{{tab.label}}</text>
        </div>
        <div
          class="o-Tabs-line"
          ref="line"
          :style="{width: rpx(lineWidth)+'px', backgroundColor: activecolor }"
        ></div>
      </scroller>
    </div>
    <div class="o-Tabs-container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Base from "../../../mixins/base.js";
const dom = weex.requireModule("dom");
export default {
  name: "OTabs",
  mixins: [Base],
  components: {
    OIcon
  },
  props: {
    // 图标大小的值
    iconsize: {
      type: [String, Number],
      default: 28
    },
    // 属性值
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: 0
    },
    // 图标
    icon: {
      type: [String, Number, Boolean, Object, Array],
      default: ""
    },
    // 默认颜色
    defaultcolor: {
      default: "#666"
    },
    // 选中时的默认颜色
    activecolor: {
      default: "#2d8cf0"
    },
    // tab的位置
    tabIndex: {
      default: 0
    }
  },
  data() {
    return {
      tabs: [],
      lineWidth: 0,
      color: this.defaultcolor,
      refreshing: false,
      showLoading: "hide",
      tabWidth: ""
    };
  },
  computed: {
    activeIndex() {
      let index = this.tabs.map(tab => tab.value).indexOf(this.value);
      if (index < 0) index = 0;
      return index;
    }
  },
  watch: {
    tabIndex() {
      this.$nextTick(() => {
        dom.getComponentRect(this.$refs.tabs, option => {
          if (!option || option.result === false) {
            return;
          }
          this.lineWidth =
            option.size.width / this.tabs.length > 250
              ? option.size.width / this.tabs.length
              : 250;
          this.animateLine();
          if (this.tabIndex === 0) {
            this.animateTab(Number(this.tabIndex));
          } else {
            this.animateTab(Number(this.tabIndex) - 1);
          }
        });
      });
      this.selectTab(this.tabIndex, this.tabs);
    },
    value(val) {
      this.$nextTick(() => {
        this.animateLine();
      });
    },
    tabs() {
      this.$nextTick(() => {
        dom.getComponentRect(this.$refs.tabs, option => {
          if (!option || option.result === false) {
            return;
          }
          this.tabWidth = {
            width: this.rpx(option.size.width / this.tabs.length) + "px"
          };
          this.lineWidth =
            option.size.width / this.tabs.length > 250
              ? option.size.width / this.tabs.length
              : 250;
          this.animateLine();
        });
      });
      this.selectTab(this.tabIndex, this.tabs);
    }
  },
  methods: {
    addTab(tab) {
      this.tabs.push(tab);
    },
    removeTab(tab) {
      this.tabs.splice(this.tabs.indexOf(tab), 1);
    },
    selectTab(index = 0, tabs = undefined) {
      // this.$emit(event.INPUT, index, tabs);
      // this.$emit(event.CHANGE, tabs[index].value);
    },
    animateLine() {
      const animation = weex.requireModule("animation");
      animation.transition(this.$refs.line, {
        duration: 300,
        timingFunction: "ease-in-out",
        styles: {
          transform: `translateX(${this.activeIndex * this.lineWidth}px)`
        }
      });
    },
    animateTab(index) {
      const el = this.$refs["tab" + index][0];
      dom.scrollToElement(el, {});
    }
  },
  created() {
    this.$nextTick(() => {
      dom.getComponentRect(this.$refs.tabs, option => {
        if (!option || option.result === false) {
          return;
        }
        this.tabWidth = {
          width: this.rpx(option.size.width / this.tabs.length) + "px"
        };
        this.lineWidth =
          option.size.width / this.tabs.length > 250
            ? option.size.width / this.tabs.length
            : 250;
        this.animateLine();
      });
    });
  }
};
</script>
<style lang="sass" scoped>
  @import '../../styles/widget/o-tab/o-tabs.scss'
</style>
