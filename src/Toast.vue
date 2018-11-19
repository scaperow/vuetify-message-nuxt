<template>
  <v-snackbar
    v-model="active"
    class="application"
    :timeout="timeout"
    :color="color"
  >
    <v-icon
      v-if="icon.length"
      dark
      left
    >{{ icon }}</v-icon>
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'info',
    },
    timeout: {
      type: Number,
      default: 3000,
    },
    color: {
      type: String,
      default: 'info',
    },
    icon: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    active: false,
  }),

  watch: {
    active(newVal, oldVal) {
      if (!newVal && oldVal) {
        this.$destory();
      }
    },
  },
  destroyed() {
    document.body.removeChild(this.$el);
  },
  methods: {
    show() {
      this.active = true;
    },

    close() {
      this.active = false;
    },
  },
};

</script>
