<template>
  <transition name="fade">
    <div class="kaiui-dialog" v-if="show">
      <div class="kaiui-dialog-wrapper">
        <div class="kaiui-dialog-header">
          <span class="kaiui-dialog-header-title">{{ title }}</span>
        </div>
        <div class="kaiui-dialog-container">
          <!-- Use this slot to include other UI components. -->
          <slot></slot>
        </div>
      </div>
      <div class="kaiui-softkeys">
        <span class="kaiui-h5 kaiui-left">{{ softkeys.left }}</span>
        <span class="kaiui-p_link kaiui-center">{{ softkeys.center }}</span>
        <span class="kaiui-h5 kaiui-right">{{ softkeys.right }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * The `<kaiui-dialog>` component.
 *
 * @author Sebastian Baar
 * @license MIT
 */
import Utils from "../utils/Utils";
import Navigation from "../navigation/Navigation";

export default {
  name: "kaiui-dialog",
  props: {
    /**
     * Use `v-model` to define a reactive value to hide/show the dialog
     */
    shouldShow: {
      default: false,
      type: Boolean,
      required: true,
    },
    /**
     * The Softkeys Object
     * @type {{ left: String, center: String, right: String }}
     * @default { center: "Select" }
     */
    softkeys: {
      default: () => ({ left: "Cancel", right: "OK" }),
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
  },
  model: {
    prop: "shouldShow",
    event: "shouldShowChange",
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
      },
    },
  },
  watch: {
    /**
     * @private
     */
    show(value) {
      if (value) {
        this.lastActiveElement = Navigation.getCurrentElement();

        this.$nextTick(() => {
          this.$root.$emit("navigation-register", this.$el);
        });
      } else {
        this.$root.$emit("navigation-unregister", this.lastActiveElement);
      }
    },
  },
  data: () => ({
    /**
     * @private
     */
    lastActiveElement: null,
  }),
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown);
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);

    // intercept child softkey handler
    this.$root.$on("update-softkeys-register", (component) => {
      if (Navigation.getCurrentScope() !== this.$el) return;
      component.softkeys.left = this.softkeys.left;
      component.softkeys.right = this.softkeys.right;
    });
  },
  methods: {
    /**
     * @private
     */
    onKeyDown(event) {
      if (Navigation.getCurrentScope() !== this.$el) {
        return;
      }

      switch (event.key) {
        case "SoftLeft":
          event.preventDefault();
          if (!this.softkeys.left) return;
          /**
           * Emit the event `softLeft` when left softkey is selected
           */
          this.$emit("softLeft");
          this.show = false;
          break;
        case "SoftRight":
          event.preventDefault();
          if (!this.softkeys.right) return;
          /**
           * Emit the event `softRight` when right softkey is selected
           */
          this.$emit("softRight");
          this.show = false;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.kaiui-dialog {
  z-index: 1001;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: var(--dialog-backdrop-color);
}
.kaiui-dialog .kaiui-dialog-wrapper {
  max-height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background: var(--dialog-background-color);
}
.kaiui-dialog .kaiui-dialog-wrapper .kaiui-dialog-header {
  text-align: center;
  padding: 3px;
  height: 30px;
  background: var(--dialog-header-background-color);
}

.kaiui-dialog .kaiui-dialog-wrapper .kaiui-dialog-container {
  padding: 0;
  margin-bottom: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  max-height: 60vh;
}

.kaiui-dialog .kaiui-softkeys {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--secondary-dark-color);
  min-height: 30px;
  max-height: 30px;
  border-top: 2px var(--softkeys-border-color) solid;
  display: flex;
  flex-shrink: 0;
  white-space: nowrap;
  padding: 0 5px;
  line-height: 26px;
}

.kaiui-dialog .kaiui-softkeys .kaiui-left,
.kaiui-dialog .kaiui-softkeys .kaiui-right {
  color: var(--softkeys-text-color);
  overflow: hidden;
  width: 100%;
  letter-spacing: -0.5px;
  box-sizing: border-box;
  text-overflow: ellipsis;
}

.kaiui-dialog .kaiui-softkeys .kaiui-left {
  text-align: left;
  padding-right: 5px;
}

.kaiui-dialog .kaiui-softkeys .kaiui-center {
  color: var(--softkeys-text-color);
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  flex-shrink: 0;
}

.kaiui-dialog .kaiui-softkeys .kaiui-right {
  text-align: right;
  padding-left: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
