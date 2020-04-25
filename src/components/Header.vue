<template>
  <div class="kaiui-header">
    <span class="kaiui-h1 kaiui-header-text">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "kaiui-header",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$parent.$emit("update-header-registered", true);
    });
  },
  beforeDestroy() {
    this.$parent.$emit("update-header-registered", false);
  }
};
</script>

<style scoped>
.kaiui-header {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--header-background-color);
}

.kaiui-header-text {
  width: 100%;
  text-align: center;
  padding: 0 10px;
  color: var(--header-text-color);
}
</style>