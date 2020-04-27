<template>
  <div class="kaiui-tabs-wrapper">
    <div class="kaiui-tabs-header">
      <div
        class="kaiui-tabs-header-tab"
        tabindex="0"
        v-bind:tab-selectable="true"
        v-for="(tab, index) in tabs"
        v-bind:key="index"
        v-on:focus="selectTab(tab)"
      >
        <span class="kaiui-tabs-header-tab-text">{{ tab.name }}</span>
      </div>
    </div>
    <div class="kaiui-tabs-slot-content">
      <slot>Add some &#60;kaiui-tab-item&#62; items!</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "kaiui-tabs",
  props: {},
  mounted() {
    this.tabs = this.$children;
  },
  data: () => ({
    tabs: []
  }),
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
};
</script>

<style>
.kaiui-tabs-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.kaiui-tabs-wrapper .kaiui-tabs-slot-content {
  display: flex;
  flex-direction: row;
  min-height: 0;
  flex: 1;
  overflow: hidden;
}

.kaiui-tabs-wrapper .kaiui-tabs-header {
  min-height: 30px;
  max-height: 30px;
  padding: 3px 5px 2px 5px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  background-color: var(--tabbar-tabs-background-color);
}
.kaiui-tabs-wrapper .kaiui-tabs-header::-webkit-scrollbar {
  display: none;
}
.kaiui-tabs-wrapper .kaiui-tabs-header {
  overflow: hidden;
}
.kaiui-tabs-wrapper .kaiui-tabs-header .kaiui-tabs-header-tab {
  border-bottom: none;
  margin: 0 5px;
  outline: 0;
}

.kaiui-tabs-wrapper
  .kaiui-tabs-header
  .kaiui-tabs-header-tab[tab-selected="true"] {
  border-bottom: 2px solid var(--tabbar-tabs-selected-color);
  outline: 0;
}

.kaiui-tabs-wrapper
  .kaiui-tabs-header
  .kaiui-tabs-header-tab
  .kaiui-tabs-header-tab-text {
  padding: 0 5px;
}
</style>
