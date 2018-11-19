# Vuetify Message

> Simple toast service based on [vuetify](https://github.com/vuetifyjs/vuetify) snackbar component.

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
Vue.use(VuetifyMessage);
```

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

### Default options

You can override the default options at any time:

```js
vuetifyToast.defaultOptions.timeout = 5000;
```

## Development

### Build

Bundle the js of to the `dist` folder:

```bash
npm run build
```

## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
