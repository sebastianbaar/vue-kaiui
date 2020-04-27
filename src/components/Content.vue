<template>
  <div class="kaiui-content-wrapper">
    <div
      class="kaiui-content-slot-content"
      v-bind:class="[{'kaiui-has-header': hasHeader}, {'kaiui-has-softkeys': showSoftkeys}]"
    >
      <slot></slot>

      <kaiui-toast ref="toast" />

      <kaiui-softkeys
        ref="softkeys"
        v-if="withSoftkeys && showSoftkeys"
        v-bind:softkeys="softkeys"
        v-bind:component="currentSoftkeyComponent"
      />
    </div>
  </div>
</template>

<script>
import Navigation from "../navigation/Navigation";

export default {
  name: "kaiui-content",
  props: {
    withSoftkeys: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data: () => ({
    softkeys: {
      left: "Left Key",
      center: "Select",
      right: "Right Key"
    },
    currentSoftkeyComponent: null,
    hasHeader: false,
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
    this.$on("update-header-registered", isHeaderShown => {
      this.hasHeader = isHeaderShown;
    });

    // softkey handler
    this.$on("update-softkeys-register", component => {
      this.handleUpdateSoftkeyText(component.softkeys);
      this.currentSoftkeyComponent = component;
    });
    this.$on("update-softkeys-unregister", () => {
      this.handleUpdateSoftkeyUnregister();
      this.currentSoftkeyComponent = null;
    });
  },
  methods: {
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
    handleUpdateSoftkeyText(softkeys) {
      if (this.withSoftkeys) {
        this.showSoftkeys = true;
        this.softkeys = softkeys;
      }
    },
    handleUpdateSoftkeyUnregister() {
      if (this.withSoftkeys) {
        this.showSoftkeys = false;
      }
    },
    showToast(title, time) {
      this.$refs.toast.show(title, time);
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
</style>
