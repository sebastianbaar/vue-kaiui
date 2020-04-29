<template>
  <transition name="fade">
    <div class="kaiui-notice" v-show="shouldShow">
      <span class="kaiui-h1 kaiui-notice-text">{{ title }}</span>
    </div>
  </transition>
</template>

<script>
/**
 * **This component is automatically integrated as a Mixin. Just use `this.showNotice("Battery Full", "Battery is fully charged")` in your components.**
 *
 * @author Sebastian Baar
 * @license MIT
 */
export default {
  name: "kaiui-notice",
  data: () => ({
    /**
     * @private
     */
    title: "",
    /**
     * @private
     */
    shouldShow: false
  }),
  methods: {
    showToast(title, time) {
      if (this.shouldShow) return;
      if (title == null) return;

      this.title = title;
      this.shouldShow = true;
      setTimeout(
        () => {
          this.shouldShow = false;
        },
        time ? time : 4000
      );
    }
  }
};
</script>

<style scoped>
.kaiui-notice {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--toast-background-color);
  padding: 10px;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
}

.kaiui-notice-text {
  width: 100%;
  text-align: center;
  padding: 0 10px;
  color: var(--header-text-color);
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