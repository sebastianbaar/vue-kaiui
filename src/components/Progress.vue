<template>
  <div v-bind:nav-selectable="true" class="progress-container" tabindex="0">
    <label class="kaiui-p_pr progress-container-label"> {{ text }} </label>
    <progress
      class="focusable progress-container-progress"
    ></progress>
  </div>
</template>

<script>
export default {
  name: "kaiui-progress",
   props: {
    /**
     * The Progress Text
     */
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.progress-container {
  box-sizing: border-box;
  padding: 1rem;
  height: 6rem;
}

.progress-container-label {
    overflow: hidden;
    margin: 0;
    display: block;
}

.progress-container-progress {
  -webkit-appearance: none;
  margin: 1rem 1rem 0 0;
  height: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  grid-area: slider;
  background: var(--progress-color);
  animation: indeterminateAnimation 1.5s infinite linear;
  transform-origin: 0% 50%;
}

@keyframes indeterminateAnimation {
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
}

.progress-container-progress::-moz-progress-bar {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background: var(--progress-color-selected);
  border-right: 0.3rem solid var(--light-color);
  height: 0.5rem;
}

.progress-container:focus > .progress-container-progress {
  background: var(--progress-focused-color);
}

.progress-container:focus > .progress-container-progress::-moz-progress-bar {
  background: var(--progress-focused-selected);
  border-right-color: var(--primary-color);
}
</style>