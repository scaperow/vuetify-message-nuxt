<template>
  <v-snackbar
    v-model="active"
    class="application"
    :timeout="timeout"
    :color="color"
    @click="dismiss"
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

  data() {
    return {
      active: false,
      text: '',
      icon: '',
      color: 'info',
      timeout: 1000,
      dismissible: true,
    };
  },

  watch: {
    active(newVal, oldVal) {
      console.log(newVal, oldVal); // eslint-disable-line no-console
      console.log(this); // eslint-disable-line no-console
      if (!newVal && oldVal) {
        this.$destory();
        // this.clos
      }
    },
  },

  methods: {
    show() {
      // if (this.active) {
      //   this.$nextTick(() => this.show(options));
      //   return;
      // }

      // Object.keys(options).forEach(field => (this[field] = options[field]));

      this.active = true;
    },

    close() {
      this.active = false;
      // this.$destroy();
    },
    //
    // destroy() {
    //   this.$destory();
    // },

    dismiss() {
      if (this.dismissible) {
        this.active = false;
      }
    },
  },

};

</script>
