<template>
  <div
    class="kaiui-listitem"
    v-bind:nav-selectable="true"
    tabindex="0"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-bind:ref="refId"
    v-on:click="onClick()"
  >
    <span v-if="iconLeft && iconLeft!='none'" class="kaiui-listitem-icon" v-bind:class="iconLeft"></span>
    <div class="kaiui-listitem-text-wrapper">
      <span class="kaiui-p_pri kaiui-listitem-primary-text">{{ primaryText }}</span>
      <span class="kaiui-p_sec kaiui-listitem-secondary-text">{{ secondaryText }}</span>
      <span class="kaiui-p_thi kaiui-listitem-tertiary-text">{{ tertiaryText }}</span>
    </div>
    <span
      v-if="iconRight && iconRight!='none'"
      class="kaiui-listitem-icon right"
      v-bind:class="iconRight"
    ></span>
  </div>
</template>

<script>
import Utils from "../utils/Utils";

export default {
  name: "kaiui-list-item",
  props: {
    softkeys: {
      default: () => ({ center: "Select" }),
      type: Object,
      required: false
    },
    primaryText: {
      type: String,
      required: true
    },
    secondaryText: {
      type: String,
      required: false
    },
    tertiaryText: {
      type: String,
      required: false
    },
    iconLeft: {
      default: "none",
      type: String,
      required: false
    },
    iconRight: {
      default: "kai-icon-arrow",
      type: String,
      required: false
    }
  },
  mounted() {
    this.$on("softkey-left-pressed", () => {
      this.$emit("softLeft");
    });
    this.$on("softkey-right-pressed", () => {
      this.$emit("softRight");
    });
    this.$on("softkey-center-pressed", () => {
      this.$emit("softCenter");
    });
  },
  data: () => ({ refId: Utils.uuid() }),
  methods: {
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        this.$root.$emit("update-softkeys-register", this);
      } else {
        this.$root.$emit("update-softkeys-unregister");
      }
    },
    onClick() {
      this.handleFocusChange(true);
      this.$root.$emit("set-element-selected", this.$refs[this.refId]);
    }
  }
};
</script>

<style>
.kaiui-listitem {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 60px;
  max-height: 60px;
  padding: 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: 0;
}
.kaiui-listitem[nav-selected="true"] {
  background-color: var(--listitem-selected-background-color);
}

.kaiui-listitem .kaiui-listitem-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  flex: 1;
}

.kaiui-listitem .kaiui-listitem-text-wrapper span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kaiui-listitem[nav-selected="true"] .kaiui-listitem-primary-text {
  color: var(--listitem-selected-text-color);
}
.kaiui-listitem[nav-selected="true"] .kaiui-listitem-secondary-text {
  color: var(--listitem-selected-text-color);
}
.kaiui-listitem[nav-selected="true"] .kaiui-listitem-tertiary-text {
  color: var(--listitem-selected-text-color);
}
.kaiui-listitem[nav-selected="true"] .kaiui-listitem-icon:before {
  color: var(--listitem-selected-text-color);
}
.kaiui-listitem[nav-selected="true"] .kaiui-listitem-icon.right:before {
  color: var(--listitem-selected-text-color);
}

.kaiui-listitem .kaiui-listitem-icon {
  display: flex;
  align-items: center;
  font-size: 32px;
  margin-right: 10px;
  flex-shrink: 0;
}

.kaiui-listitem .kaiui-listitem-icon.right {
  margin-left: auto;
  margin-right: 0;
  font-size: 20px;
  flex-shrink: 0;
  margin-left: 10px;
}
.kaiui-listitem .kaiui-listitem-icon.right:before {
  color: var(--listitem-icon-right-color);
}
</style>
