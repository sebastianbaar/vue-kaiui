<template>
  <div class="kaiui-input">
    <label class="kaiui-p_sec kaiui-input-label">{{ label }}</label>
    <input
      class="kaiui-p_btn kaiui-input-input"
      type="text"
      v-bind:placeholder="placeholder"
      v-on:keydown.enter="onEnter"
      v-model="value"
      v-bind:nav-selectable="true"
    />
  </div>
</template>

<script>
export default {
  name: "kaiui-input",
  props: {
    placeholder: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({ value: "" }),
  methods: {
    onEnter() {
      const isFocused = this.$refs.input.getAttribute("nav-selected");
      if (!this.value.length || !isFocused) return;
      this.$emit("onEnter", this.value);
      this.value = "";
    }
  }
};
</script>

<style scoped>
.kaiui-input {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  position: relative;
  font: inherit;
}

.kaiui-input .kaiui-input-input {
  width: 100%;
  border: 1px solid var(--input-border-color);
  padding: 10px;
  outline: 0;
  box-sizing: border-box;
}

.kaiui-input .kaiui-input-label {
  color: var(--input-placeholder-color);
  margin-bottom: 5px;
}

.kaiui-input .kaiui-input-input::placeholder {
  color: var(--input-placeholder-color);
}

.kaiui-input .kaiui-input-input[nav-selected="true"] {
  border: 1px solid var(--input-selected-color);
  text-shadow: 0 0 0 rgba(0, 0, 0, 1);
}
</style>