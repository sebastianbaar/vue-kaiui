<template>
  <div
    v-bind:nav-selectable="true"
    tabindex="0"
    type="kaiui-slider"
    class="kaiui-slider"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-on:click="onClick"
  >
    <div class="kaiui-slider-text-container">
      <span class="kaiui-p_pri kaiui-slider-title">{{ title }}</span>
      <span class="kaiui-p_sec kaiui-slider-values"
        >{{ value }}/{{ maxValue }}</span
      >
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

export default {
  name: "kaiui-slider",
  props: {
    /**
     * The Softkeys Object
     * @type {{ left: String, center: String, right: String }}
     * @default { center: "Select" }
     */
    softkeys: {
      default: () => ({ left: "Less", center: "", right: "More" }),
      type: Object,
      required: false,
    },
    /**
     * The Title
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * The Start Value
     */
    startValue: {
      default: 0,
      type: Number,
    },
    /**
     * The Step Value
     */
    step: {
      default: 1,
      type: Number,
      required: true,
    },
    /**
     * The Minimum Value
     */
    minValue: {
      default: 1,
      type: Number,
      required: true,
    },
    /**
     * The Maximum Value
     */
    maxValue: {
      default: 10,
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.value = this.startValue;

    this.$on("softkey-left-pressed", () => {
      /**
       * Emit the event `softLeft` when left softkey is selected
       */
      this.$emit("softLeft");
      const newValue =
        this.value > this.minValue ? this.value - this.step : this.value;
      this.onInputChanged(newValue);
    });
    this.$on("softkey-right-pressed", () => {
      /**
       * Emit the event `softRight` when right softkey is selected
       */
      this.$emit("softRight");
      const newValue =
        this.value < this.maxValue ? this.value + this.step : this.maxValue;
      this.onInputChanged(newValue);
    });
    this.$on("softkey-center-pressed", () => {
      /**
       * Emit the event `softCenter` when center softkey is selected
       */
      this.$emit("softCenter");
    });
  },
  data: () => ({
    /**
     * @private
     */
    value: 0,
  }),
  methods: {
    /**
     * @private
     */
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        /**
         * @private
         */
        this.$root.$emit("update-softkeys-register", this);
      } else {
        /**
         * @private
         */
        this.$root.$emit("update-softkeys-unregister");
      }
    },
    /**
     * @private
     */
    onInputChanged(newValue) {
      this.value = newValue;
      /**
       * Emit the event `change` with `value` when the Slider input value changes
       */
      this.$emit("change", newValue);
    },
    /**
     * @private
     */
    onClick() {
      this.handleFocusChange(true);
      /**
       * @private
       */
      this.$root.$emit("set-element-selected", this.$el);
    },
  },
};
</script>

<style scoped>
.kaiui-slider {
  cursor: pointer;
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
