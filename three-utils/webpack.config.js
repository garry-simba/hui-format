const path = require('path');

 module.exports = {
   entry: './src/HuiManager.ts',
  // devtool: 'inline-source-map',
   module: {
     rules: [
       {
         test: /\.tsx?$/,
         use: 'awesome-typescript-loader',
         exclude: /node_modules/
       }
     ]
   },
   resolve: {
     extensions: [ '.tsx', '.ts', '.js' ],
     modules: [path.resolve(__dirname, "src"), "node_modules"]
   },
   output: {
     filename: 'HuiManager.js',
     path: path.resolve(__dirname, './test/')
   },
   node: {
      fs: 'empty'
    },
   externals: {
       "three": "THREE"
   }
 };
