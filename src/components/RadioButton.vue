<template>
  <div
    class="kaiui-radiobutton"
    v-bind:nav-selectable="true"
    tabindex="0"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-on:click="onClick"
  >
    <div class="kaiui-radiobutton-text-wrapper">
      <span class="kaiui-p_pri kaiui-radiobutton-primary-text">{{
        primaryText
      }}</span>
      <span class="kaiui-p_sec kaiui-radiobutton-secondary-text">{{
        secondaryText
      }}</span>
    </div>
    <span
      class="kaiui-radiobutton-icon"
      v-bind:class="[
        isChecked
          ? 'ion-android-radio-button-on'
          : 'ion-android-radio-button-off',
      ]"
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

export default {
  name: "kaiui-radiobutton",
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
     * The Value
     */
    value: {
      type: String,
      required: true,
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
    /**
     * @private
     */
    this.$parent.$emit("radiobutton-mounted", this);

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
       * @private
       */
      this.$parent.$emit("radiobutton-selected", this);
      /**
       * Emit the event `softCenter` when center softkey is selected
       */
      this.$emit("softCenter", this);
    });
  },
  data: () => ({
    /**
     * @private
     */
    isChecked: false,
  }),
  methods: {
    /**
     * @private
     */
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        /**
         * @private
         */
        this.$root.$emit("update-softkeys-register", this);
      } else {
        /**
         * @private
         */
        this.$root.$emit("update-softkeys-unregister");
      }
    },
    /**
     * @private
     */
    onClick() {
      this.handleFocusChange(true);
      /**
       * @private
       */
      this.$root.$emit("set-element-selected", this.$el);
    },
  },
};
</script>

<style>
.kaiui-radiobutton {
  cursor: pointer;
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
  background-color: var(--radio-button-selected-background-color);
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
  color: var(--radio-button-selected-text-color);
}
.kaiui-radiobutton[nav-selected="true"] .kaiui-radiobutton-secondary-text {
  color: var(--radio-button-selected-text-color);
}
.kaiui-radiobutton[nav-selected="true"]
  .kaiui-radiobutton-icon.ion-android-radiobutton-outline-blank:before {
  color: var(--radio-button-icon-selected-color);
}
.kaiui-radiobutton[nav-selected="true"]
  .kaiui-radiobutton-icon.ion-android-radiobutton-outline:before {
  color: var(--radio-button-icon-selected-checked-color);
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
.kaiui-radiobutton
  .kaiui-radiobutton-icon.kai-icon-radiobutton-unchecked:before {
  color: var(--radio-button-icon-color);
}
.kaiui-radiobutton .kaiui-radiobutton-icon.kai-icon-radiobutton-checked:before {
  color: var(--radio-button-icon-color-checked);
}
</style>
