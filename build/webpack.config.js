import webpack from 'webpack'
import cssnano from 'cssnano'
import neat from 'node-neat'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const {__DEV__, __PROD__, __TEST__} = config.globals

debug('Create configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.base(config.dir_client),
    extensions: ['', '.js', '.jsx']
  },
  module: {}
}
// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY_PATH = paths.base(config.dir_client) + '/main.js'

webpackConfig.entry = {
  app: __DEV__
    ? [APP_ENTRY_PATH, `webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`]
    : [APP_ENTRY_PATH],
  vendor: config.compiler_vendor
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: paths.base(config.dir_dist),
  publicPath: config.compiler_public_path
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    template: paths.client('index.html'),
    hash: false,
    favicon: paths.base('src/assets/static/favicon.ico'),
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  })
]

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
} else if (__PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

// ------------------------------------
// Pre-Loaders
// ------------------------------------
webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  loader: 'eslint',
  exclude: /node_modules/
}]

webpackConfig.eslint = {
  configFile: paths.base('.eslintrc'),
  emitWarning: __DEV__
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime'],
    presets: __DEV__
      ? ['es2015', 'react', 'stage-0']
      : ['es2015', 'react', 'stage-0']
  }
},
{
  test: /\.json$/,
  loader: 'json'
}]

// Styles
const cssLoader = !config.compiler_css_modules
  ? 'css?sourceMap'
  : [
    'css?modules',
    'sourceMap',
    'importLoaders=1',
    'localIdentName=[local]'
  ].join('&')

webpackConfig.module.loaders.push({
  test: /sinon\.js$/,
  loader: 'imports?define=>false,require=>false',
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon'
    }
  }
})

webpackConfig.module.loaders.push({
  test: /\.woff$/,
  loader: "url-loader?limit=10000&minetype=application/font-woff"
})

webpackConfig.module.loaders.push({
  test: /\.woff2$/,
  loader: "url-loader?limit=10000&minetype=application/font-woff2"
})

webpackConfig.module.loaders.push({
  test: /\.ttf$/,
  loader: "file-loader"
})

webpackConfig.module.loaders.push({
  test: /\.eot$/,
  loader: "file-loader"
})

webpackConfig.module.loaders.push({
  test: /\.svg$/,
  loader: "file-loader"
})

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  include: /src/,
  loaders: [
    'style',
    cssLoader,
    'postcss',
    'sass?sourceMap'
  ]
})

webpackConfig.module.loaders.push({
  test: /\.css$/,
  include: /src/,
  loaders: [
    'style',
    cssLoader,
    'postcss'
  ]
})

webpackConfig.module.loaders.push({
     test: /\.(png|jpg)$/,
     loader: 'file-loader'
})

// Don't treat global SCSS as modules
webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: /src/,
  loaders: [
    'style',
    'css?sourceMap',
    'postcss',
    'sass?sourceMap'
  ]
})

// Don't treat global, third-party CSS as modules
webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: /src/,
  loaders: [
    'style',
    'css?sourceMap',
    'postcss'
  ]
})

webpackConfig.sassLoader = {
  includePaths: paths.client('styles')
}

// Include Neat libs
webpackConfig.sassLoader = {
  includePaths: neat.includePaths
}

webpackConfig.postcss = [
  cssnano({
    autoprefixer: {
      add: true,
      remove: true,
      browsers: ['last 2 versions']
    },
    discardComments: {
      removeAll: true
    },
    safe: true,
    sourcemap: true
  })
]

// File loaders
/* eslint-disable */

/* eslint-enable */

// ------------------------------------
// Finalize Configuration
// ------------------------------------
// when we don't know the public path (we know it only when HMR is enabled [in development]) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  debug('Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.loaders.filter(loader =>
    loader.loaders && loader.loaders.find(name => /css/.test(name.split('?')[0]))
  ).forEach(loader => {
    const [first, ...rest] = loader.loaders
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    delete loader.loaders
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  )
}


export default webpackConfig
