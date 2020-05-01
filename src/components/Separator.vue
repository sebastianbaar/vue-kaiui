<template>
  <div class="kaiui-separator">
    <span class="kaiui-h4 kaiui-separator-text">{{ title }}</span>
  </div>
</template>

<script>
/**
 * The `<kaiui-separator>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
export default {
  name: "kaiui-separator",
  props: {
    /**
     * The Title
     */
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.kaiui-separator {
  min-height: 24px;
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--separator-background-color);
}

.kaiui-separator .kaiui-separator-text {
  margin: 0 10px;
  text-align: center;
  color: var(--separator-text-color);
}
</style>
