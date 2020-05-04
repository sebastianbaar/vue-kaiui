<template>
  <div class="kaiui-softkeys">
    <span class="kaiui-h5 kaiui-left">{{ softkeys.left }}</span>
    <span class="kaiui-p_link kaiui-center">{{ softkeys.center }}</span>
    <span class="kaiui-h5 kaiui-right">{{ softkeys.right }}</span>
  </div>
</template>

<script>
/**
 * **This component is automatically integrated in the `<kaiui-content>` component.**
 *
 * @author Sebastian Baar
 * @license MIT
 */
export default {
  name: "kaiui-softkeys",
  props: {
    /**
     * @private
     */
    softkeys: {
      left: String,
      center: String,
      right: String,
    },
    /**
     * @private
     */
    component: {
      default: null,
      type: Object,
      required: true,
    },
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown);
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    /**
     * @private
     */
    onKeyDown(event) {
      switch (event.key) {
        case "SoftLeft":
          event.preventDefault();
          if (!this.softkeys.left || !this.component) return;
          /**
           * @private
           */
          this.component.$emit("softkey-left-pressed");
          break;
        case "SoftRight":
          event.preventDefault();
          if (!this.softkeys.right || !this.component) return;
          /**
           * @private
           */
          this.component.$emit("softkey-right-pressed");
          break;
        case "Enter":
          event.preventDefault();
          if (!this.softkeys.center || !this.component) return;
          /**
           * @private
           */
          this.component.$emit("softkey-center-pressed");
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.kaiui-softkeys {
  z-index: 9990;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--softkeys-background-color);
  min-height: 30px;
  max-height: 30px;
  border-top: 2px var(--softkeys-border-color) solid;
  display: flex;
  flex-shrink: 0;
  white-space: nowrap;
  padding: 0 5px;
  line-height: 26px;
}

.kaiui-softkeys .kaiui-left,
.kaiui-softkeys .kaiui-right {
  color: var(--softkeys-text-color);
  overflow: hidden;
  width: 100%;
  letter-spacing: -0.5px;
  box-sizing: border-box;
  text-overflow: ellipsis;
}

.kaiui-softkeys .kaiui-left {
  text-align: left;
  padding-right: 5px;
}

.kaiui-softkeys .kaiui-center {
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

.kaiui-softkeys .kaiui-right {
  text-align: right;
  padding-left: 5px;
}
</style>
