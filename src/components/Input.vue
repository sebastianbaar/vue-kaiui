<template>
  <div class="kaiui-input">
    <label class="kaiui-p_sec kaiui-input-label">{{ label }}</label>
    <input
      class="kaiui-p_btn kaiui-input-input"
      type="text"
      v-bind:placeholder="placeholder"
      v-on:input="onInput"
      v-model="value"
      v-bind:nav-selectable="true"
      v-on:click="onClick"
    />
  </div>
</template>

<script>
/**
 * The `<kaiui-input>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */

export default {
  name: "kaiui-input",
  props: {
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
    onClick() {
      /**
       * @private
       */
      this.$root.$emit("set-element-selected", this.$el);
    },
  },
};
</script>

<style scoped>
.kaiui-input {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  position: relative;
  font: inherit;
}

.kaiui-input .kaiui-input-input {
  width: 100%;
  border: 1px solid var(--input-border-color);
  padding: 10px;
  outline: 0;
  box-sizing: border-box;
}

.kaiui-input .kaiui-input-label {
  color: var(--input-placeholder-color);
  margin-bottom: 5px;
}

.kaiui-input .kaiui-input-input::placeholder {
  color: var(--input-placeholder-color);
}

.kaiui-input .kaiui-input-input[nav-selected="true"] {
  border: 1px solid var(--input-selected-color);
  text-shadow: var(--input-text-shadow-color);
}
</style>
