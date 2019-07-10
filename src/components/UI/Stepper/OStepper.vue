<template>
  <div class="wxc-stepper">
    <div class="stepper-minus" @click="minusClicked" aria-label="减数" :accessible="true">
      <text class="stepper-icon" :style="{ color: isLess?'#cccccc':'#666666' }">-</text>
    </div>
    <input
      class="stepper-input"
      type="number"
      :value="valueString"
      :placeholder="inputPlaceholder"
      @input="onInput"
      @blur="onBlur"
      :style="disableStyle"
      :disabled="disabled||readOnly"
    >
    <div class="stepper-plus" @click="plusClicked" aria-label="加数" :accessible="true">
      <text class="stepper-icon" :style="{ color: isOver ? '#cccccc': '#666666' }">+</text>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100000000000
    },
    step: {
      type: [String, Number],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Number],
      default: 0
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    inputPlaceholder: {
      type: String
    }
  },
  computed: {
    disableStyle() {
      if (this.disabled) {
        return {
          color: "#cccccc"
        };
      }
    },
    valueString() {
      if (this.value === 0) {
        return null;
      } else {
        return this.value.toString();
      }
    }
  },
  data: () => ({
    value: 0,
    isLess: false,
    isOver: false
  }),
  watch: {
    defaultValue(newNum) {
      this.value = newNum;
    }
  },
  created() {
    this.value = this.defaultValue;
    if (this.disabled) {
      this.isLess = true;
      this.isOver = true;
    }
  },
  methods: {
    minusClicked() {
      if (this.disabled) {
        return;
      }
      const isMinOver = this.value <= this.min;
      if (this.value > this.min) {
        this.value = this.value - this.step;
      }
      this.$emit("wxcStepperValueChanged", { value: this.value });
    },
    plusClicked() {
      if (this.disabled) {
        return;
      }
      const isMaxOver = this.value >= this.max;
      if (this.value < this.max) {
        this.value = this.value + this.step;
      }
      this.$emit("wxcStepperValueChanged", { value: this.value });
    },
    onInput(e) {
      this.correctInputValue(e.value);
    },
    onBlur(e) {
      this.correctInputValue(e.value);
    },
    correctInputValue(v) {
      const lastValue = this.value;
      if (/^[1-9]\d{0,}$/.test(v) && v >= this.min && v <= this.max) {
        this.value = v;
      } else {
        // this.value = "";
        // setTimeout(() => {
        //   this.value = lastValue;
        // }, 1);
      }
      this.$emit("wxcStepperValueChanged", { value: this.value });
    },
    resetDisabledStyle() {
      this.isLess = false;
      this.isOver = false;
    }
  }
};
</script>

<style scoped>
.wxc-stepper {
  flex-direction: row;
  justify-content: space-between;
  width: 343px;
  border-style: solid;
  border-width: 2px;
  border-color: #ededed;
  border-radius: 6px;
}
.stepper-plus,
.stepper-minus {
  width: 56px;
  height: 56px;
  background-color: #ededed;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
.stepper-input {
  border-width: 0;
  text-align: center;
  color: #3d3d3d;
  font-size: 30px;
  line-height: 56px;
  height: 56px;
  width: 150px;
}
.stepper-icon {
  font-size: 36px;
  color: #666666;
  margin-top: -4px;
}
</style>