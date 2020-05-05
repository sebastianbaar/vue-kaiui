<template>
  <transition name="fade">
    <div class="kaiui-notice" v-if="shouldShow">
      <div class="kaiui-notice-icon-wrapper">
        <span class="kaiui-notice-icon" v-bind:class="icon"></span>
      </div>
      <div class="kaiui-notice-text-wrapper">
        <span class="kaiui-p_pri kaiui-notice-title">{{ title }}</span>
        <span class="kaiui-p_sec kaiui-notice-subtitle">{{ subtitle }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * **PRIVATE: This component is automatically integrated as a global Mixin. Just use**
 *
 * `this.showNotice("ion-battery-empty", "Battery Full", "Battery is fully charged")`
 *
 * **in any of your components.**
 *
 * @author Sebastian Baar
 * @license MIT
 */
export default {
  name: "kaiui-notice",
  data: () => ({
    /**
     * The Icon CSS class
     * ***String*** (*required*)
     * `default: ''`
     */
    icon: "",
    /**
     * The Title
     * ***String*** (*required*)
     * `default: ''`
     */
    title: "",
    /**
     * The Subtitle
     * ***String*** (*required*)
     * `default: ''`
     */
    subtitle: "",
    /**
     * The Time in ms
     * ***Number*** (*optional*)
     * `default: 4000`
     */
    time: 4000,
    /**
     * @private
     */
    shouldShow: false,
  }),
  methods: {
    /**
     * @private
     */
    show(icon, title, subtitle, time) {
      if (this.shouldShow) return;
      if (icon == null || title == null || subtitle == null) return;
      this.icon = icon;
      this.title = title;
      this.subtitle = subtitle;
      this.shouldShow = true;
      setTimeout(
        () => {
          this.shouldShow = false;
        },
        time && !isNaN(time) ? time : 4000
      );
    },
  },
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
  background-color: var(--notice-background-color);
  min-height: 60px;
  max-height: 60px;
  -webkit-box-shadow: var(--notice-box-shadow);
  -moz-box-shadow: var(--notice-box-shadow);
  box-shadow: var(--notice-box-shadow);
}

.kaiui-notice .kaiui-notice-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  flex: 1;
  margin-left: 10px;
}

.kaiui-notice .kaiui-notice-text-wrapper span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kaiui-notice .kaiui-notice-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  height: 60px;
  flex-shrink: 0;
  background: var(--notice-icon-wrapper-color);
}

.kaiui-notice .kaiui-notice-icon-wrapper .kaiui-notice-icon {
  color: var(--notice-icon-color);
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
