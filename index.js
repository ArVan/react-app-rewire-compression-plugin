const CompressionPlugin = require('compression-webpack-plugin')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 * @param env
 * @param compressionPluginOptions
 */
function rewireCompressionPlugin(config, env, compressionPluginOptions = {}) {
  // Add the CompressionPlugin plugin to the list of plugins
  config.plugins = (config.plugins || []).concat([
    new CompressionPlugin(compressionPluginOptions)
  ])

  return config
}

module.exports = rewireCompressionPlugin;
