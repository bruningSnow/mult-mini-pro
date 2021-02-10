const isH5 = process.env.CLIENT_ENV === 'h5';
const HOST = '"https://xxx"';

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    HOST: isH5 ? '"/api"' : HOST,
    NOCONSOLE: false,
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/api/': '/',
          },
          changeOrigin: true,
        },
      },
    },
  },
};
