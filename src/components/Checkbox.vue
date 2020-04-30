<template>
  <div
    class="kaiui-checkbox"
    v-bind:nav-selectable="true"
    tabindex="0"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-bind:ref="refId"
    v-on:click="onClick()"
  >
    <div class="kaiui-checkbox-text-wrapper">
      <span class="kaiui-p_pri kaiui-checkbox-primary-text">{{
        primaryText
      }}</span>
      <span class="kaiui-p_sec kaiui-checkbox-secondary-text">{{
        secondaryText
      }}</span>
    </div>
    <span
      class="kaiui-checkbox-icon"
      v-bind:class="[
        isChecked
          ? 'ion-android-checkbox-outline'
          : 'ion-android-checkbox-outline-blank',
      ]"
    ></span>
  </div>
</template>

<script>
/**
 * The `<kaiui-checkbox>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
import Utils from "../utils/Utils";

export default {
  name: "kaiui-checkbox",
  props: {
    /**
     * The Softkeys Object
     * @type {{ left: String, center: String, right: String }}
     * @default { center: "Select" }
     */
    softkeys: {
      default: () => ({ center: "Select" }),
      type: Object,
      required: false,
    },
    /**
     * The Primary Text
     */
    primaryText: {
      type: String,
      required: true,
    },
    /**
     * The Secondary Text
     */
    secondaryText: {
      type: String,
      required: false,
    },
  },
  mounted() {
    this.$on("softkey-left-pressed", () => {
      /**
       * Emit the event `softLeft` when left softkey is selected
       */
      this.$emit("softLeft");
    });
    this.$on("softkey-right-pressed", () => {
      /**
       * Emit the event `softRight` when right softkey is selected
       */
      this.$emit("softRight");
    });
    this.$on("softkey-center-pressed", () => {
      /**
       * Emit the event `softCenter` when center softkey is selected
       */
      this.$emit("softCenter");
      this.isChecked = !this.isChecked;
      if (
        this.softkeys.center == "Select" ||
        this.softkeys.center == "Deselect"
      ) {
        this.softkeys.center = this.isChecked ? "Deselect" : "Select";
      }
    });
  },
  data: () => ({
    /**
     * @private
     */
    isChecked: false,
    /**
     * @private
     */
    refId: Utils.uuid(),
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
    },
  },
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
  text-overflow: ellipsis;
  overflow: hidden;
  outline: 0;
}
.kaiui-checkbox[nav-selected="true"] {
  background-color: var(--checkbox-listitem-selected-background-color);
}

.kaiui-checkbox .kaiui-checkbox-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  flex: 1;
}

.kaiui-checkbox .kaiui-checkbox-text-wrapper span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kaiui-checkbox[nav-selected="true"] .kaiui-checkbox-primary-text {
  color: var(--checkbox-listitem-selected-text-color);
}
.kaiui-checkbox[nav-selected="true"] .kaiui-checkbox-secondary-text {
  color: var(--checkbox-listitem-selected-text-color);
}
.kaiui-checkbox[nav-selected="true"]
  .kaiui-checkbox-icon.ion-android-checkbox-outline-blank:before {
  color: var(--checkbox-listitem-icon-selected-color);
}
.kaiui-checkbox[nav-selected="true"]
  .kaiui-checkbox-icon.ion-android-checkbox-outline:before {
  color: var(--checkbox-listitem-icon-selected-checked-color);
}

.kaiui-checkbox .kaiui-checkbox-icon {
  display: flex;
  align-items: center;
  font-size: 20px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: 0;
  margin-left: 10px;
}
.kaiui-checkbox .kaiui-checkbox-icon.kai-icon-checkbox-unchecked:before {
  color: var(--checkbox-listitem-icon-color);
}
.kaiui-checkbox .kaiui-checkbox-icon.kai-icon-checkbox-checked:before {
  color: var(--checkbox-listitem-icon-color-checked);
}
</style>
