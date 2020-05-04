<script>
export default {
  methods: {
    showToast(title, time) {
      this.$root.$emit("showToast", { title: title, time: time });
    },
  },
};
</script>
