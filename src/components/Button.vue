<template>
  <div
    v-bind:nav-selectable="true"
    class="kaiui-button"
    tabindex="0"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-bind:ref="refId"
    v-on:click="onClick()"
    v-bind:class="{ 'kaiui-button-reversed-icon': iconRight }"
  >
    <span v-if="icon" class="kaiui-button-icon" v-bind:class="icon"></span>
    <span
      class="kaiui-p_btn kaiui-button-title"
      v-bind:style="[
        icon
          ? iconRight
            ? { 'margin-left': '40px' }
            : { 'margin-right': '40px' }
          : {},
      ]"
      >{{ title }}</span
    >
  </div>
</template>

<script>
/**
 * The `<kaiui-button>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
import Utils from "../utils/Utils";

export default {
  name: "kaiui-button",
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
     * The Title
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * The Icon CSS class
     */
    icon: {
      type: String,
      required: false,
    },
    /**
     * If the Icon should be displayed on the right side
     */
    iconRight: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    /**
     * @private
     */
    refId: Utils.uuid(),
  }),
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
    });
  },
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

<style scoped>
.kaiui-button {
  min-height: 36px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--button-background-color);
  flex-direction: row;
  outline: 0;
}
.kaiui-button.kaiui-button-reversed-icon {
  flex-direction: row-reverse;
}
.kaiui-button[nav-selected="true"] {
  background-color: var(--button-selected-background-color);
}

.kaiui-button .kaiui-button-title {
  text-align: center;
  width: 100%;
  padding: 5px;
  color: var(--button-text-color);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.kaiui-button[nav-selected="true"] .kaiui-button-title {
  color: var(--button-selected-text-color);
}

.kaiui-button .kaiui-button-icon {
  padding: 0 10px;
}
.kaiui-button .kaiui-button-icon:before {
  color: var(--button-icon-color);
}
.kaiui-button[nav-selected="true"] .kaiui-button-icon:before {
  color: var(--button-selected-icon-color);
}
</style>
