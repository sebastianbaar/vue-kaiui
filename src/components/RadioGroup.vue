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
import Utils from "../utils/Utils";

export default {
  name: "kaiui-radiogroup",
  props: {
    selectedValue: {
      default: null,
      type: String|Number|Boolean,
      required: true
    }
  },
  model: {
    prop: "selectedValue",
    event: "selectedValueChange"
  },
  mounted() {
    if (this.selectedValue) {
      this.$slots.default.forEach(vNode => {
        if (vNode.componentInstance.value == this.selectedValue) {
          vNode.componentInstance.isChecked = true;
        } else {
          vNode.componentInstance.isChecked = false;
        }
      });
    }

    this.$on("radiobutton-selected", component => {
      this.$slots.default.forEach(vNode => {
        if (vNode.componentInstance == component) {
          vNode.componentInstance.isChecked = true;
          this.$emit("selectedValueChange", vNode.componentInstance.value);
        } else {
          vNode.componentInstance.isChecked = false;
        }
      });
    });
  },
};
</script>

<style>
.kaiui-radiogroup {
  display: flex;
  flex-direction: column;
}
</style>
