<template>
  <div
    v-bind:nav-selectable="true"
    tabindex="0"
    type="SLIDER"
    class="kaiui-slider"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-bind:ref="refId"
    v-on:click="onClick()"
  >
    <div class="kaiui-slider-text-container">
      <span class="kaiui-p_pri kaiui-slider-title">{{ title }}</span>
      <span class="kaiui-p_sec kaiui-slider-values">{{value}}/{{maxValue}}</span>
    </div>

    <div class="kaiui-slider-slide-container">
      <input
        type="range"
        v-bind:min="minValue"
        v-bind:max="maxValue"
        v-bind:step="step"
        v-bind:value="value"
        v-on:input="onInputChanged($event.target.value)"
        class="kaiui-slider-slider"
      />
    </div>
  </div>
</template>

<script>
/**
 * The `<kaiui-slider>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
import Utils from "../utils/Utils";

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
    startValue: {
      default: 0,
      type: Number
    },
    step: {
      default: 1,
      type: Number,
      required: true
    },
    minValue: {
      default: 1,
      type: Number,
      required: true
    },
    maxValue: {
      default: 10,
      type: Number,
      required: true
    }
  },
  mounted() {
    this.value = this.startValue;

    this.$on("softkey-left-pressed", () => {
      this.$emit("softLeft");
      const newValue =
        this.value > this.minValue ? this.value - this.step : this.value;
      this.onInputChanged(newValue);
    });
    this.$on("softkey-right-pressed", () => {
      this.$emit("softRight");
      const newValue =
        this.value < this.maxValue ? this.value + this.step : this.maxValue;
      this.onInputChanged(newValue);
    });
    this.$on("softkey-center-pressed", () => {
      this.$emit("softCenter");
    });
  },
  data: () => ({
    value: 0,
    refId: Utils.uuid()
  }),
  methods: {
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        this.$root.$emit("update-softkeys-register", this);
      } else {
        this.$root.$emit("update-softkeys-unregister");
      }
    },
    onInputChanged(newValue) {
      this.value = newValue;
      this.$emit("change", newValue);
    },
    onClick() {
      this.handleFocusChange(true);
      this.$root.$emit("set-element-selected", this.$refs[this.refId]);
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
  outline: 0;
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
  outline: 0;
  margin: 0;
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