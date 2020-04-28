<template>
  <div
    v-bind:nav-selectable="true"
    class="kaiui-button"
    tabindex="0"
    v-on:focus="handleFocusChange(true)"
    v-on:blur="handleFocusChange(false)"
    v-bind:ref="refId"
    v-on:click="onClick()"
    v-bind:class="{'kaiui-button-reversed-icon': iconRight}"
  >
    <span v-if="icon" class="kaiui-button-icon" v-bind:class="icon"></span>
    <span class="kaiui-p_btn kaiui-button-title">{{ title }}</span>
  </div>
</template>

<script>
import Utils from "../utils/Utils";

export default {
  name: "kaiui-button",
  props: {
    softkeys: {
      default: () => ({ center: "Select" }),
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    iconRight: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({ refId: Utils.uuid() }),
  mounted() {
    this.$on("softkey-left-pressed", () => {
      this.$emit("softLeft");
    });
    this.$on("softkey-right-pressed", () => {
      this.$emit("softRight");
    });
    this.$on("softkey-center-pressed", () => {
      this.$emit("softCenter");
    });
  },
  methods: {
    handleFocusChange(isNowFocused) {
      if (isNowFocused) {
        this.$root.$emit("update-softkeys-register", this);
      } else {
        this.$root.$emit("update-softkeys-unregister");
      }
    },
    onClick() {
      this.handleFocusChange(true);
      this.$root.$emit("set-element-selected", this.$refs[this.refId]);
    }
  }
};
</script>

<style scoped>
.kaiui-button {
  min-height: 36px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--button-background-color);
  flex-direction: row;
  outline: 0;
}
.kaiui-button.kaiui-button-reversed-icon {
  flex-direction: row-reverse;
}
.kaiui-button[nav-selected="true"] {
  background-color: var(--button-selected-background-color);
}

.kaiui-button .kaiui-button-title {
  text-align: center;
  padding: 5px;
  color: var(--button-text-color);
}
.kaiui-button[nav-selected="true"] .kaiui-button-title {
  color: var(--button-selected-text-color);
}

.kaiui-button .kaiui-button-icon:before {
  color: var(--button-icon-color);
}
.kaiui-button[nav-selected="true"] .kaiui-button-icon:before {
  color: var(--button-selected-icon-color);
}
</style>