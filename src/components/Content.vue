<template>
  <div class="kaiui-content-wrapper">
    <div
      class="kaiui-content-slot-content"
      v-bind:class="[{'kaiui-has-header': hasHeader}, {'kaiui-has-softkeys': showSoftkeys}]"
    >
      <!-- Use this slot to include all of your UI components. -->
      <slot></slot>

      <kaiui-toast ref="toast" />
      <transition name="fade">
        <kaiui-softkeys
          ref="softkeys"
          v-if="withSoftkeys && showSoftkeys"
          v-bind:softkeys="softkeys"
          v-bind:component="currentSoftkeyComponent"
        />
      </transition>
    </div>
  </div>
</template>

<script>
/**
 * The `<kaiui-content>` component.
 * 
 * **This is the root component of all other UI components. You HAVE TO put all other components inside of it.**
 *
 * @author Sebastian Baar
 * @license MIT
 */

import Navigation from "../navigation/Navigation";

export default {
  name: "kaiui-content",
  props: {
    /**
     * @private
     */
    withSoftkeys: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data: () => ({
    /**
     * @private
     */
    softkeys: {
      left: "Left Key",
      center: "Select",
      right: "Right Key"
    },
    /**
     * @private
     */
    currentSoftkeyComponent: null,
    /**
     * @private
     */
    hasHeader: false,
    /**
     * @private
     */
    showSoftkeys: false
  }),
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown);
  },
  mounted() {
    this.$nextTick(() => {
      Navigation.init();
    });
    document.addEventListener("keydown", this.onKeyDown);

    // header handler
    this.$root.$on("update-header-registered", isHeaderShown => {
      this.hasHeader = isHeaderShown;
    });

    // element onclick selection
    this.$root.$on("set-tab-element-selected", element => {
      Navigation.selectTabElement(element);
    });
    this.$root.$on("set-element-selected", element => {
      Navigation.selectElement(element);
    });

    // softkey handler
    this.$root.$on("update-softkeys-register", component => {
      this.handleUpdateSoftkeyText(component.softkeys);
      this.currentSoftkeyComponent = component;
    });
    this.$root.$on("update-softkeys-unregister", () => {
      this.handleUpdateSoftkeyUnregister();
      this.currentSoftkeyComponent = null;
    });
  },
  methods: {
    /**
     * @private
     */
    onKeyDown(event) {
      switch (event.key) {
        case "ArrowDown":
          Navigation.Down();
          break;
        case "ArrowUp":
          Navigation.Up();
          break;
        case "ArrowRight":
          Navigation.Right(() => {
            this.$nextTick(() => {
              Navigation.initElements();
            });
          });
          break;
        case "ArrowLeft":
          Navigation.Left(() => {
            this.$nextTick(() => {
              Navigation.initElements();
            });
          });
          break;
        default:
          break;
      }
    },
    /**
     * @private
     */
    handleUpdateSoftkeyText(softkeys) {
      if (this.withSoftkeys) {
        this.showSoftkeys = true;
        this.softkeys = softkeys;
      }
    },
    /**
     * @private
     */
    handleUpdateSoftkeyUnregister() {
      if (this.withSoftkeys) {
        this.showSoftkeys = false;
      }
    },
    /**
     * @private
     */
    showToast(title, time) {
      this.$refs.toast.showToast(title, time);
    }
  }
};
</script>

<style>
.kaiui-content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.kaiui-content-slot-content {
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  overflow: hidden;
}

.kaiui-content-slot-content.kaiui-has-header {
  margin-top: 30px;
}
.kaiui-content-slot-content.kaiui-has-softkeys {
  margin-bottom: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
