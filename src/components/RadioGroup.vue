<template>
  <div class="kaiui-radiogroup">
    <!-- Use this slot to set `<kaiui-radiobutton>` components. -->
    <slot>Add some &#60;kaiui-radiobutton&#62; items!</slot>
  </div>
</template>

<script>
/**
 * The `<kaiui-radiogroup>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */

export default {
  name: "kaiui-radiogroup",
  props: {
    /**
     * Use `v-model` to define a reactive value of the selected Radio Button
     * @type {String | Number | Boolean}
     */
    selectedValue: {
      default: null,
      type: String | Number | Boolean,
      required: true,
    },
  },
  model: {
    prop: "selectedValue",
    event: "selectedValueChange",
  },
  mounted() {
    this.$nextTick(() => {
      this.initChildren();
    });

    this.$on("radiobutton-selected", (component) => {
      this.$slots.default.forEach((vNode) => {
        if (vNode.componentInstance == component) {
          vNode.componentInstance.isChecked = true;
          /**
           * @private
           */
          this.$emit("selectedValueChange", vNode.componentInstance.value);
        } else {
          vNode.componentInstance.isChecked = false;
        }
      });
    });
  },
  methods: {
    /**
     * @private
     */
    initChildren() {
      this.$slots.default.forEach((vNode) => {
        vNode.componentInstance.isChecked =
          this.selectedValue &&
          vNode.componentInstance.value == this.selectedValue;
      });
    },
  },
};
</script>

<style>
.kaiui-radiogroup {
  display: flex;
  flex-direction: column;
}
</style>
