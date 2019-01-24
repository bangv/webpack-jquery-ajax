const HtmlWebpackPlugin = require('html-webpack-plugin');  //引入插件，不可漏掉！！！
const path = require('path');
const webpack = require('webpack')
module.exports = {
	module:
	{
    rules: [
      {  test: require.resolve('jquery'),
   use: [{
      loader: 'expose-loader',
      options: 'jQuery'
   },{
      loader: 'expose-loader',
      options: '$'
   }]
      }
    ]
  },
    entry: {
        page1 : __dirname + '/src/page1/index.js',// page1的入口文件，webpack是以js为入口文件的
        page2 : __dirname + '/src/page2/index.js',
    },
    output : {
        path : __dirname + '/dist',//产出路径，一般放在dist目录下
        filename:'js/[name]-[chunkhash].js',
        //把为入口文件放在dist目录的js文件夹下，
        //name是文件名，chunkhash是每次打包文件的hash值，
        //目的是如果哪个文件修改，chunkhash会改变，可以只上线修改过的文件
        // publicPath: 'http://cdn.com/' //如果上线，可以改为线上地址
    },
     devServer: { 
        host : '127.0.0.1', 
        port : 8088 ,
        inline : true,
        open :true,   //自动打开浏览器
        hot : false,   //慎用！打开热更新，会导致修改样式可能不支持。关闭热更新，页面会强刷
        contentBase : path.join(__dirname, "dist"),
		 proxy: {
		  '/test': {
			target: 'http://40.125.170.251:5006',
			pathRewrite: {'^/test' : '/'},
			changeOrigin: true,     // target是域名的话，需要这个参数，
			secure: false,          // 设置支持https协议的代理
		  }

		 }
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename : 'page1.html',//入口html
            template : './src/page1/index.html',
            minify : {
                // removeComments:true,   //删除注释
                // collapseWhitespace: true      //删除空格，压缩
            },
            chunks: ['page1']  //对应entry的入口js.这样可以按需加载js
        }),
        new HtmlWebpackPlugin({
            filename : 'page2.html',
            template : './src/page2/index.html',
            minify : {
                // removeComments:true,   //删除注释
                // collapseWhitespace: true      //删除空格，压缩
            },
            chunks: ['page2']
        }),
		 new webpack.ProvidePlugin({
		  $: "jquery",
		  jQuery: "jquery",
		  jquery: "jquery",
		  "window.jQuery": "jquery"
    }),
    ],
	
}
