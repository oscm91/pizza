const path = require('path');
const deps = require("./package.json").dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    module: {
      ...config.module,
      rules: [...config.module.rules, {
        test: /\.worker\.ts$/,
        use: { loader: "worker-loader" },
      }],
    },
    plugins: [...config.plugins,
    new ModuleFederationPlugin({
      name: "app_enterprise",
      filename: "remoteEntry.js",
      exposes: {
        "./store": path.resolve(__dirname, "./libs/store/src/index"),
        "./logo": path.resolve(__dirname, "./libs/ui/src/lib/logo/index")
      },
      shared: [
        {
          ...deps,
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            // eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      ],
    })],
  };
};
