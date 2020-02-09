const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    backend: './src/index.ts',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'webpack-graphql-loader',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      }
    ],
  },
  externals: ['fsevents'],
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.mjs', '.js', '.json'],
  },
  output: {
    path: path.join(__dirname, 'bundled'),
    library: 'handler',
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
            '@nestjs/microservices',
            'cache-manager',
            '@nestjs/microservices/microservices-module',
            '@nestjs/websockets/socket-module',
            'class-transformer',
            'apollo-server-fastify',
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
  ],
};
