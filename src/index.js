import Toast from './Toast.vue';

// const colors = ['success', 'info', 'error'];

// const defaultOptions = {
//   text: '',
//   icon: '',
//   color: 'info',
//   timeout: 3000,
//   dismissible: true,
// };
//
// let toastCmp = null;


function Install(Vue, options) {
  const property = (options && options.property) || '$message';

  function createMessageCmp(opts) {
    return new Promise((resolve) => {
      const cmp = new Vue(Object.assign(Toast, {
        destroyed: () => {
          document.body.removeChild(cmp.$el);
          resolve(cmp.value);
        },
      }));
      // cmp.$watch('active', (newVal, oldVal) => {
      //   console.log(newVal, oldVal); // eslint-disable-line no-console
      //   .$destory();
      // });
      Object.assign(cmp, Vue.prototype[property].options || {}, opts);
      document.body.appendChild(cmp.$mount().$el);
      cmp.show();
    });
  }

  function show(text, opts = {}) {
    opts.text = text; // eslint-disable-line no-param-reassign
    return createMessageCmp(opts);
  }

  Vue.prototype[property] = show; // eslint-disable-line no-param-reassign
  Vue.prototype[property].options = options || { // eslint-disable-line no-param-reassign
    text: '',
    icon: '',
    color: 'info',
    timeout: 3000,
    dismissible: true,
  };
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Install);
}

export default Install;


// function createToastCmp() {
//   const cmp = new Vue(Toast);
//
//   document.body.appendChild(cmp.$mount().$el);
//
//   return cmp;
// }
//
//
// function getToastCmp() {
//   if (!toastCmp) {
//     toastCmp = createToastCmp();
//   }
//
//   return toastCmp;
// }
//
//
// function show(options = {}) {
//   getToastCmp().show({ ...defaultOptions, ...options });
// }
//
//
// function close() {
//   getToastCmp().close();
// }


// function createShorthands() {
//   const shorthands = {};
//
//   colors.forEach(color => (shorthands[color] = (text, options = {}) => show({ color, text, ...options })));
//
//   return shorthands;
// }


// export default {
//   show,
//   close,
//   getToastCmp,
//   defaultOptions,
//  ...createShorthands(),
// };
