<template>
  <div
    v-bind:nav-selectable="true"
    tabindex="0"
    type="SLIDER"
    class="kaiui-slider"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
  >
    <div class="kaiui-slider-text-container">
      <span class="kaiui-p_pri kaiui-slider-title">{{ title }}</span>
      <span class="kaiui-p_sec kaiui-slider-values">{{value}}/{{maxValue}}</span>
    </div>

    <div class="kaiui-slider-slide-container">
      <input type="range" min="1" max="10" v-bind:value="value" class="kaiui-slider-slider" />
    </div>
  </div>
</template>

<script>
export default {
  name: "kaiui-slider",
  props: {
    softkeys: {
      default: () => ({ left: "Less", center: "", right: "More" }),
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    maxValue: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.$on("softkey-left-pressed", () => {
      this.$emit("softLeft");
      this.value = this.value > 0 ? this.value - 1 : this.value
    });
    this.$on("softkey-right-pressed", () => {
      this.$emit("softRight");
      this.value = this.value < this.maxValue ? this.value + 1 : this.maxValue
    });
    this.$on("softkey-center-pressed", () => {
      this.$emit("softCenter");
    });
  },
  data: () => ({
    value: 2//parseInt(this.maxValue / 2)
  }),
  methods: {
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        this.$parent.$emit("update-softkeys-register", this);
      } else {
        this.$parent.$emit("update-softkeys-unregister");
      }
    }
  }
};
</script>

<style scoped>
.kaiui-slider {
  min-height: 60px;
  max-height: 60px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.kaiui-slider[nav-selected="true"] {
  background-color: var(--slider-selected-background-color);
}

.kaiui-slider .kaiui-slider-text-container {
  width: 100%;
  display: flex;
  align-items: center;
}
.kaiui-slider.kaiui-slider-text-container .kaiui-slider-title {
  color: var(--slider-text-color);
}
.kaiui-slider[nav-selected="true"]
  .kaiui-slider-text-container
  .kaiui-slider-title {
  color: var(--slider-selected-text-color);
}

.kaiui-slider .kaiui-slider-text-container .kaiui-slider-values {
  margin-left: auto;
}
.kaiui-slider.kaiui-slider-text-container .kaiui-slider-values {
  color: var(--slider-text-color);
}
.kaiui-slider[nav-selected="true"]
  .kaiui-slider-text-container
  .kaiui-slider-values {
  color: var(--slider-selected-text-color);
}

.kaiui-slider .kaiui-slider-slide-container {
  width: 100%;
}

.kaiui-slider .kaiui-slider-slide-container .kaiui-slider-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  border-radius: 5px;
  outline: none;
}

.kaiui-slider
  .kaiui-slider-slide-container
  .kaiui-slider-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--slider-slider-thumb-color);
  border: 3px solid var(--slider-selected-slider-thumb-color);
  cursor: pointer;
}
.kaiui-slider[nav-selected="true"]
  .kaiui-slider-slide-container
  .kaiui-slider-slider::-webkit-slider-thumb {
  background: var(--slider-selected-slider-thumb-color);
  border: 3px solid var(--slider-slider-thumb-color);
}
.kaiui-slider
  .kaiui-slider-slide-container
  .kaiui-slider-slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--slider-slider-thumb-color);
  border: 3px solid var(--slider-selected-slider-thumb-color);
  cursor: pointer;
}
.kaiui-slider[nav-selected="true"]
  .kaiui-slider-slide-container
  .kaiui-slider-slider::-moz-range-thumb {
  background: var(--slider-selected-slider-thumb-color);
  border: 3px solid var(--slider-slider-thumb-color);
}

.kaiui-slider .kaiui-slider-slide-container .kaiui-slider-slider {
  background-color: var(--slider-slider-color);
}
.kaiui-slider[nav-selected="true"]
  .kaiui-slider-slide-container
  .kaiui-slider-slider {
  background-color: var(--slider-selected-slider-color);
}

.kaiui-slider
  .kaiui-slider-slide-container
  .kaiui-slider-slider::-moz-range-progress {
  background-color: var(--slider-slider-color);
}
.kaiui-slider
  .kaiui-slider-slide-container
  .kaiui-slider-slider::-moz-range-track {
  background-color: var(--slider-slider-color);
}
</style>