<template>
  <transition name="fade">
    <div class="kaiui-toast" v-show="shouldShow">
      <span class="kaiui-h1 kaiui-toast-text">{{ title }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "kaiui-toast",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    shouldShow: false
  }),
  methods: {
    show(time) {
      if (this.shouldShow) return;
      this.shouldShow = true;
      setTimeout(() => {
        this.shouldShow = false;
      }, time ? time : 4000);
    }
  }
};
</script>

<style scoped>
.kaiui-toast {
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

.kaiui-toast-text {
  width: 100%;
  text-align: center;
  padding: 0 10px;
  color: var(--header-text-color);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>