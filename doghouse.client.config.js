module.exports = function modify (config) {
  const modifiedConfig = Object.assign({}, config, {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules(\/|\\)(?!(@feathersjs))/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env', 'babel-preset-react']
            }
          }
        }
      ]
    }
  })

  return modifiedConfig
}
