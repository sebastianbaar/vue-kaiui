<template>
  <div class="kaiui-softkeys">
    <span class="kaiui-h5 kaiui-left">{{ softkeys.left }}</span>
    <span class="kaiui-p_link kaiui-center">{{ softkeys.center }}</span>
    <span class="kaiui-h5 kaiui-right">{{ softkeys.right }}</span>
  </div>
</template>

<script>
// import EventBus from "../navigation/Softkeys";

export default {
  name: "kaiui-softkeys",
  props: {
    softkeys: {
      left: String,
      center: String,
      right: String
    },
    component: null
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown);
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    onKeyDown(event) {
      switch (event.key) {        
        case ("SoftLeft", "F13", "7"):          
          if (!this.softkeys.left || !this.component) return;
          this.component.$emit("softkey-left-pressed");
          break;
        case ("SoftRight", "F15", "9"):
          if (!this.softkeys.right || !this.component) return;
          this.component.$emit("softkey-right-pressed");
          break;
        case ("Enter"):
          if (!this.softkeys.center || !this.component) return;
          this.component.$emit("softkey-center-pressed");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.kaiui-softkeys {
  z-index: 1000;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #cccccc !important;
  min-height: 30px;
  max-height: 30px;
  background: white;
  border-top: 2px #cbcbcb solid;
  display: flex;
  flex-shrink: 0;
  white-space: nowrap;
  padding: 0 5px;
  line-height: 26px;
}

.kaiui-left,
.kaiui-right {
  color: #242424;
  overflow: hidden;
  width: 100%;
  letter-spacing: -0.5px;
  box-sizing: border-box;
  text-overflow: ellipsis;
}

.kaiui-left {
  text-align: left;
  padding-right: 5px;
}

.kaiui-center {
  color: #242424;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  flex-shrink: 0;
}

.kaiui-right {
  text-align: right;
  padding-left: 5px;
}
</style>
