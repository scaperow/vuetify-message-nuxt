import Message from './Message.vue';

const colors = ['success', 'info', 'warning', 'error'];

function Install(Vue, options) {
  const property = (options && options.property) || '$message';

  function createMessageCmp(opts) {
    const cmp = new Vue(Message);
    Object.assign(cmp, Vue.prototype[property].options || {}, opts);
    document.querySelector('#app').appendChild(cmp.$mount().$el);
    cmp.open();
    return cmp.$el;
  }

  function show(opts = {}) {
    return createMessageCmp(opts);
  }

  colors.forEach((color) => {
    show[color] = (text, opts) => show({ text, color, ...opts });
  });

  Vue.prototype[property] = show; // eslint-disable-line no-param-reassign
  Vue.prototype[property].options = options; // eslint-disable-line no-param-reassign
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Install);
}

export default Install;
