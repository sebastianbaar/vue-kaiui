<template>
  <div class="kaiui-tabitem-wrapper" v-if="isActive">
    <div class="kaiui-tabitem-slot-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "kaiui-tab-item",
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.isActive = this.selected;
  },
  data: () => ({
    isActive: false
  }),
  methods: {}
};
</script>

<style>
.kaiui-tabitem-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  min-width: 0;
}
.kaiui-tabitem-wrapper .kaiui-tabitem-slot-content {
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  overflow: hidden;
}
</style>
