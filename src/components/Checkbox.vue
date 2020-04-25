<template>
  <div
    class="kaiui-checkbox"
    v-bind:nav-selectable="true"
    tabindex="0"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
  >
    <div class="kaiui-checkbox-text-wrapper">
      <span class="kaiui-p_pri kaiui-checkbox-primary-text">{{ primaryText }}</span>
      <span class="kaiui-p_sec kaiui-checkbox-secondary-text">{{ secondaryText }}</span>
    </div>
    <span
      class="kaiui-checkbox-icon"
      v-bind:class="[isChecked ? 'kai-icon-checkbox-unchecked' : 'kai-icon-checkbox-checked']"
    ></span>
  </div>
</template>

<script>
export default {
  name: "kaiui-checkbox",
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
      this.isChecked = !this.isChecked
    });
  },
  data: () => ({ isChecked: false }),
  methods: {
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        this.$parent.$emit("update-softkeys-register", this);
      } else {
        this.$parent.$emit("update-softkeys-unregister");
      }
    }
  }
};
</script>

<style>
.kaiui-checkbox {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 60px;
  max-height: 60px;
  padding: 0 10px;
}
.kaiui-checkbox[nav-selected="true"] {
  background-color: var(--checkbox-listitem-selected-background-color);
}

.kaiui-checkbox .kaiui-checkbox-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.kaiui-checkbox[nav-selected="true"]
  .kaiui-checkbox-primary-text {
  color: var(--checkbox-listitem-selected-text-color);
}
.kaiui-checkbox[nav-selected="true"]
  .kaiui-checkbox-secondary-text {
  color: var(--checkbox-listitem-selected-text-color);
}
.kaiui-checkbox[nav-selected="true"]
  .kaiui-checkbox-icon.kai-icon-checkbox-unchecked:before {
  color: var(--checkbox-listitem-icon-selected-color);
}
.kaiui-checkbox[nav-selected="true"]
  .kaiui-checkbox-icon.kai-icon-checkbox-checked:before {
  color: var(--checkbox-listitem-icon-selected-checked-color);
}

.kaiui-checkbox .kaiui-checkbox-icon {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
}
.kaiui-checkbox
  .kaiui-checkbox-icon.kai-icon-checkbox-unchecked:before {
  color: var(--checkbox-listitem-icon-color);
}
.kaiui-checkbox
  .kaiui-checkbox-icon.kai-icon-checkbox-checked:before {
  color: var(--checkbox-listitem-icon-color-checked);
}
</style>
