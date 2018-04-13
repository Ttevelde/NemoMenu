// webpack.config.js




module.exports = {
    output: {
      filename: 'core.js',
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: [
              ['latest', { modules: false }],
            ],
          },
        },
      ],
    },
  };