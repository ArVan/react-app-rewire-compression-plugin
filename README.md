# react-app-rewire-compression-plugin

Add webpack [`CompressionPlugin`](https://webpack.js.org/plugins/compression-webpack-plugin/) to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');

// Compress generated js files 
config = rewireCompressionPlugin(config, env, {
  test: /\.js(\?.*)?$/i,
  cache: true
})
```
