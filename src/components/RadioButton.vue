<template>
  <div
    class="kaiui-radiobutton"
    v-bind:nav-selectable="true"
    tabindex="0"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-bind:ref="refId"
    v-on:click="onClick()"
  >
    <div class="kaiui-radiobutton-text-wrapper">
      <span class="kaiui-p_pri kaiui-radiobutton-primary-text">{{ primaryText }}</span>
      <span class="kaiui-p_sec kaiui-radiobutton-secondary-text">{{ secondaryText }}</span>
    </div>
    <span
      class="kaiui-radiobutton-icon"
      v-bind:class="[isChecked ? 'ion-android-radio-button-on' : 'ion-android-radio-button-off']"
    ></span>
  </div>
</template>

<script>
/**
 * The `<kaiui-radiobutton>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
import Utils from "../utils/Utils";

export default {
  name: "kaiui-radiobutton",
  props: {
    softkeys: {
      default: () => ({ center: "Select" }),
      type: Object,
      required: false
    },
    value: {
      type: String,
      required: true
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
      this.$parent.$emit("radiobutton-selected", this);
      this.$emit("softCenter", this);
    });
  },
  data: () => ({
    isChecked: false,
    refId: Utils.uuid()
  }),
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
.kaiui-radiobutton {
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
.kaiui-radiobutton[nav-selected="true"] {
  background-color: var(--checkbox-listitem-selected-background-color);
}

.kaiui-radiobutton .kaiui-radiobutton-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  flex: 1;
}

.kaiui-radiobutton .kaiui-radiobutton-text-wrapper span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kaiui-radiobutton[nav-selected="true"] .kaiui-radiobutton-primary-text {
  color: var(--checkbox-listitem-selected-text-color);
}
.kaiui-radiobutton[nav-selected="true"] .kaiui-radiobutton-secondary-text {
  color: var(--checkbox-listitem-selected-text-color);
}
.kaiui-radiobutton[nav-selected="true"]
  .kaiui-radiobutton-icon.ion-android-checkbox-outline-blank:before {
  color: var(--checkbox-listitem-icon-selected-color);
}
.kaiui-radiobutton[nav-selected="true"]
  .kaiui-radiobutton-icon.ion-android-checkbox-outline:before {
  color: var(--checkbox-listitem-icon-selected-checked-color);
}

.kaiui-radiobutton .kaiui-radiobutton-icon {
  display: flex;
  align-items: center;
  font-size: 20px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: 0;
  margin-left: 10px;
}
.kaiui-radiobutton .kaiui-radiobutton-icon.kai-icon-checkbox-unchecked:before {
  color: var(--checkbox-listitem-icon-color);
}
.kaiui-radiobutton .kaiui-radiobutton-icon.kai-icon-checkbox-checked:before {
  color: var(--checkbox-listitem-icon-color-checked);
}
</style>
