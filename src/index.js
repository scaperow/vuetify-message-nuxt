import Toast from './Toast.vue';

const colors = ['success', 'info', 'warning', 'error'];

function Install(Vue, options) {
  const property = (options && options.property) || '$message';

  function createMessageCmp(opts) {
    const cmp = new Vue(Toast);
    Object.assign(cmp, Vue.prototype[property].options || {}, opts);
    document.body.appendChild(cmp.$mount().$el);
    cmp.show();
    return cmp.$el;
  }

  function show(text, opts = {}) {
    opts.text = text; // eslint-disable-line no-param-reassign
    return createMessageCmp(opts);
  }

  colors.forEach((color) => {
    show[color] = (text, opts) => show(text, { color, ...opts });
  });

  Vue.prototype[property] = show; // eslint-disable-line no-param-reassign
  Vue.prototype[property].options = options || { // eslint-disable-line no-param-reassign
    text: '',
    icon: '',
    color: 'info',
    timeout: 3000,
  };
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Install);
}

export default Install;
