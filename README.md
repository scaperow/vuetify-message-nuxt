# Vuetify Message

> Simple toast service based on [vuetify](https://github.com/vuetifyjs/vuetify) snackbar component.

> Demo: https://aguegu.github.io/vuetify-message/

> Inspired by
- [vuetify-toast](https://github.com/pzs/vuetify-toast)
- [vuetify-confirm](https://github.com/yariksav/vuetify-confirm)
- [element/message](https://github.com/ElemeFE/element/tree/master/packages/message)

## Installation

```bash
npm install --save vuetify-message
```

## Usage

### Bundler (Webpack, Rollup)

```js
import VuetifyMessage from 'vuetify-message';
Vue.use(VuetifyMessage, [defaultOptions]);
```
or
```
Vue.use(VuetifyMessage, {
  timeout: 1000,
  property: '$message',
});
```
property: '$message' will create property with this name in Vue prototype

## Documentation

### Methods

- `this.$message.show([options])`
- `this.$message.success(text, [options])`
- `this.$message.info(text, [options])`
- `this.$message.warning(text, [options])`
- `this.$message.error(text, [options])`

### Options

- `text` (String) The text to show in the snackbar
- `icon` (String) If you want to use an icon to the left in the snackbar
- `color` (String) Color of the snackbar, you can use any valid [vuetify class](https://vuetifyjs.com/style/colors). Default `'info'`
- `timeout` (Number) Timeout in milliseconds, default: `3000`
- `x` (String), as [snackbar usage](https://vuetifyjs.com/en/components/snackbars#usage), `left` , `right` or `''`, default `'right'`
- `y` (String), as [snackbar usage](https://vuetifyjs.com/en/components/snackbars#usage), `top`, `bottom` or `''`, default `'top'`
- `mode` (String), as [snackbar usage](https://vuetifyjs.com/en/components/snackbars#usage), `multi-line`, `vertical` or `''`, default `''`

## Development

### Build

Bundle the js of to the `dist` folder:

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
