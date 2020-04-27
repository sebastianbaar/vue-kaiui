<template>
  <div class="kaiui-input-multi">
    <label class="kaiui-p_sec kaiui-input-multi-label">{{ label }}</label>
    <textarea
      class="kaiui-p_btn kaiui-input-multi-textarea"
      rows="5"
      v-bind:placeholder="placeholder"
      v-on:focus="handleFocusChange(true)"
      v-on:blur="handleFocusChange(false)"
      v-model="value"
      v-bind:nav-selectable="true"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "kaiui-input-multi",
  props: {
    softkeys: {
      default: () => ({ center: "Enter" }),
      type: Object,
      required: false
    },
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
  mounted() {
    this.$on("softkey-left-pressed", () => {
      this.$emit("softLeft");
    });
    this.$on("softkey-right-pressed", () => {
      this.$emit("softRight");
    });
    this.$on("softkey-center-pressed", () => {
      this.$emit("softCenter");
      this.value += "\n";
    });
  },
  methods: {
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        this.$root.$emit("update-softkeys-register", this);
      } else {
        this.$root.$emit("update-softkeys-unregister");
      }
    }
  }
};
</script>

<style scoped>
.kaiui-input-multi {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  position: relative;
  font: inherit;
}

.kaiui-input-multi .kaiui-input-multi-textarea {
  width: 100%;
  border: 1px solid var(--input-border-color);
  padding: 10px;
  outline: 0;
}

.kaiui-input-multi .kaiui-input-multi-label {
  color: var(--input-placeholder-color);
  margin-bottom: 5px;
}

.kaiui-input-multi .kaiui-input-multi-textarea::placeholder {
  color: var(--input-placeholder-color);
}

.kaiui-input-multi .kaiui-input-multi-textarea[nav-selected="true"] {
  border: 1px solid var(--input-selected-color);
  text-shadow: 0 0 0 rgba(0, 0, 0, 1);
}
</style>