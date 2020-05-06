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
  data: () => ({
    /**
     * @private
     */
    radioButtons: [],
  }),
  model: {
    prop: "selectedValue",
    event: "selectedValueChange",
  },
  created() {
    /**
     * @private
     */
    this.$on("radiobutton-mounted", (component) => {
      this.radioButtons.push(component);

      component.isChecked =
        this.selectedValue && component.value == this.selectedValue;
    });

    this.$on("radiobutton-selected", (component) => {
      const selectedValue = component.value;

      /**
       * @private
       */
      this.$emit("selectedValueChange", selectedValue);

      this.radioButtons.forEach((component) => {
        component.isChecked = selectedValue && component.value == selectedValue;
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
