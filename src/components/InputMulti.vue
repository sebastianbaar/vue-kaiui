<template>
  <div class="kaiui-input-multi">
    <label class="kaiui-p_sec kaiui-input-multi-label">{{ label }}</label>
    <textarea
      class="kaiui-p_btn kaiui-input-multi-textarea"
      rows="5"
      v-bind:placeholder="placeholder"
      v-on:focus="handleFocusChange(true)"
      v-on:blur="handleFocusChange(false)"
      v-model="value"
      v-on:input="onInput"
      v-bind:nav-selectable="true"
      v-on:click="onClick"
    ></textarea>
  </div>
</template>

<script>
/**
 * The `<kaiui-input-multi>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */

export default {
  name: "kaiui-input-multi",
  props: {
    /**
     * The Softkeys Object
     * @type {{ left: String, center: String, right: String }}
     * @default { center: "Select" }
     */
    softkeys: {
      default: () => ({ center: "Enter" }),
      type: Object,
      required: false,
    },
    /**
     * The Placeholder
     */
    placeholder: {
      type: String,
      required: false,
    },
    /**
     * The Input Label
     */
    label: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    value: "",
  }),
  mounted() {
    this.$on("softkey-left-pressed", () => {
      /**
       * Emit the event `softLeft` when left softkey is selected
       */
      this.$emit("softLeft");
    });
    this.$on("softkey-right-pressed", () => {
      /**
       * Emit the event `softRight` when right softkey is selected
       */
      this.$emit("softRight");
    });
    this.$on("softkey-center-pressed", () => {
      /**
       * Add line break & Emit the event `softCenter` when center softkey is selected
       */
      this.$emit("softCenter");
      this.value = this.value + "\r";
    });
  },
  methods: {
    /**
     * @private
     */
    onInput() {
      /**
       * Emit the event `input` with `value` when the input value changes
       */
      this.$emit("input", this.value);
    },
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
.kaiui-input-multi {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  position: relative;
  font: inherit;
}

.kaiui-input-multi .kaiui-input-multi-textarea {
  width: 100%;
  border: 1px solid var(--input-border-color);
  padding: 10px;
  outline: 0;
}

.kaiui-input-multi .kaiui-input-multi-label {
  color: var(--input-placeholder-color);
  margin-bottom: 5px;
}

.kaiui-input-multi .kaiui-input-multi-textarea::placeholder {
  color: var(--input-placeholder-color);
}

.kaiui-input-multi .kaiui-input-multi-textarea[nav-selected="true"] {
  border: 1px solid var(--input-selected-color);
  text-shadow: var(--input-text-shadow-color);
}
</style>
