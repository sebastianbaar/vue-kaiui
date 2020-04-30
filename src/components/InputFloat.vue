<template>
  <div class="kaiui-input-float">
    <input
      class="kaiui-input-float-input"
      type="text"
      v-on:input="onInput"
      v-model="value"
      v-bind:nav-selectable="true"
      v-bind:ref="refId"
      v-on:click="onClick()"
    />
    <label class="kaiui-input-float-label">{{ label }}</label>
  </div>
</template>

<script>
/**
 * The `<kaiui-input-float>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
import Utils from "../utils/Utils";

export default {
  name: "kaiui-input-float",
  props: {
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
    /**
     * @private
     */
    refId: Utils.uuid(),
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
      this.$root.$emit("set-element-selected", this.$refs[this.refId]);
    },
  },
};
</script>

<style scoped>
.kaiui-input-float {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  position: relative;
  padding-top: 7px;
}

.kaiui-input-float .kaiui-input-float-input {
  font: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid var(--input-border-color);
  color: transparent;
  padding: 10px 0;
  background: transparent;
  transition: border-color 0.2s;
  outline: 0;
}

.kaiui-input-float .kaiui-input-float-label {
  position: absolute;
  bottom: 0;
  color: var(--input-placeholder-color);
}

.kaiui-input-float .kaiui-input-float-input::placeholder {
  color: transparent;
}

.kaiui-input-float .kaiui-input-float-input:placeholder-shown ~ label {
  font-size: 16px;
  cursor: text;
  top: 20px;
}

.kaiui-input-float .kaiui-input-float-input[nav-selected="true"] ~ label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: var(--input-placeholder-color);
}

.kaiui-input-float .kaiui-input-float-input[nav-selected="true"] ~ label {
  color: var(--input-selected-color);
}

.kaiui-input-float .kaiui-input-float-input[nav-selected="true"] {
  padding-bottom: 6px;
  border-bottom: 2px solid var(--input-selected-color);
  text-shadow: 0 0 0 rgba(0, 0, 0, 1);
}
</style>
