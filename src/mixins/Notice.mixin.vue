<script>
export default {
  methods: {
    showNotice(icon, title, subtitle) {
      this.$root.$emit("showNotice", {
        icon: icon,
        title: title,
        subtitle: subtitle,
      });
    },
    hideNotice() {
      this.$root.$emit("hideNotice");
    },
  },
};
</script>
