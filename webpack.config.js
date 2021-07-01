const WorkerPlugin = require('worker-plugin');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    plugins: [...config.plugins, new WorkerPlugin()],
  };
};
