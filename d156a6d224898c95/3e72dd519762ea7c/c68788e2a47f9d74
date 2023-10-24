const { merge } = require('webpack-merge')
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
  const { dependencies } = require("../../package.json");

module.exports = (config) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins:[
      ...config.plugins,
      new ModuleFederationPlugin({
        name: "bp-host",
        remotes: {
          company360: `company360@https://company360dev.gic.com.sg/_next/static/chunks/remoteEntry.js`
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      })
    
    ]
  })
}
