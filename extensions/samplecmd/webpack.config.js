//@ts-check

'use strict';

const path = require('path');

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

/** @type WebpackConfig */
const extensionConfig = {
  // vscode extensions run in webworker context for VS Code web 📖 -> https://webpack.js.org/configuration/target/#target
  // The target indicates which context your extension will run. We recommend using webworker so that your extension will work both in VS Code for web and VS Code desktop versions.
  // target: 'webworker',

  // VS Code extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
  target: 'node',

	mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')

  // node: {
  //   global: true
  // },

  // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  entry: './src/extension.ts',
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    globalObject: 'self'
  },
  externals: {
    // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
    vscode: 'commonjs vscode'
    // modules added here also need to be added in the .vscodeignore file
  },
  resolve: {
    // look for `browser` entry point in imported node modules
    mainFields: ['browser', 'module', 'main'],
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  devtool: 'nosources-source-map',
  infrastructureLogging: {
    level: "log", // enables logging required for problem matchers
  },
};
module.exports = [ extensionConfig ];
