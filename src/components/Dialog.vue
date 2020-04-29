<template>
  <div class="kaiui-dialog" v-show="show">
    <div class="kaiui-dialog-wrapper">
      <div class="kaiui-dialog-header">
        <span class="kaiui-dialog-header-title">{{ title }}</span>
      </div>
      <div class="kaiui-dialog-container">
        <span v-if="text" class="kaiui-dialog-container-text">{{ text }}</span>

        <!-- TODO: Use this slot to include other UI components. -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * The `<kaiui-dialog>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
import Utils from "../utils/Utils";

export default {
  name: "kaiui-dialog",
  props: {
    shouldShow: {
      default: false,
      type: Boolean,
      required: true
    },
    softkeys: {
      default: () => ({ left: "Cancel", right: "OK" }),
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    }
  },
  model: {
    prop: "shouldShow",
    event: "shouldShowChange"
  },
  computed: {
    /**
     * @private
     */
    show: {
      get() {
        return this.shouldShow;
      },
      set(value) {
        this.$emit("shouldShowChange", value);
      }
    }
  },
  watch: {
    /**
     * @private
     */
    show(value) {
      if (value) {
        this.$root.$emit("update-softkeys-register", this);
        this.$root.$emit("navigation-register", false);
      } else {
        this.$root.$emit("update-softkeys-unregister");
        this.$root.$emit("navigation-register", true);
      }
    }
  },
  mounted() {
    this.$on("softkey-left-pressed", () => {
      this.show = false;
      this.$emit("softLeft");
    });
    this.$on("softkey-right-pressed", () => {
      this.show = false;
      this.$emit("softRight");
    });
    this.$on("softkey-center-pressed", () => {
      this.show = false;
      this.$emit("softCenter");
    });
  }
};
</script>

<style scoped>
.kaiui-dialog {
  z-index: 1001;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  background: rgba(0, 0, 0, 0.9);
}
.kaiui-dialog .kaiui-dialog-wrapper {
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--dialog-background-color);
}
.kaiui-dialog .kaiui-dialog-wrapper .kaiui-dialog-header {
  text-align: center;
  padding: 3px;
  height: 30px;
  background: var(--dialog-header-background-color);
}
.kaiui-dialog
  .kaiui-dialog-wrapper
  .kaiui-dialog-header
  .kaiui-dialog-header-title {
}

.kaiui-dialog .kaiui-dialog-wrapper .kaiui-dialog-container {
  padding: 10px 10px 0 10px;
  margin-bottom: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.kaiui-dialog
  .kaiui-dialog-wrapper
  .kaiui-dialog-container
  .kaiui-dialog-container-text {
}
</style>