<template>
  <div v-bind:nav-selectable="true" class="kaiui-text" tabindex="0">
    <p>{{ text }}</p>
  </div>
</template>

<script>
/**
 * The `<kaiui-text>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
export default {
  name: "kaiui-text",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.kaiui-text {
  padding: 10px;
  outline: 0;
}
.kaiui-text p {
  margin: 0;
}
</style>