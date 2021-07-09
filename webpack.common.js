const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const { default: ImageminWebpackPlugin } = require('imagemin-webpack-plugin');
const path = require('path');
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 80,
          progressive: true,
        }),
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/service-worker.js'),
    }),
    new WebpackPwaManifest({
      name: 'EeatenIt',
      short_name: 'EeatenIt',
      description: 'Best resto in the world!',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#fde428',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-32x32.png'),
          sizes: '32x32',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-64x64.png'),
          sizes: '64x64',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-128x128.png'),
          sizes: '128x128',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-256x256.png'),
          sizes: '256x256',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-512x512.png'),
          sizes: '512x512',
          purpose: 'any maskable',
        },
      ],
    }),
  ],
};
