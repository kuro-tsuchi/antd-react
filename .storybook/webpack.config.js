const path = require('path');
const getLessVariables = require('../config/get-less-variables');

module.exports = {
    resolve: {
		alias: {
			// Support React Native Web
			// https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
			'react-native': 'react-native-web',
			'@': path.resolve('src'),
		}
	},
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            // modify-var会将所传入的参数写入所有less文件的底部，我们自己定义的变量会被覆盖
                            // 覆盖变量
                            modifyVars: {
                                'primary-color': '#1DA57A'
                            },
                            // global-var 会将所传入的参数写入所有的less文件的顶部，我们可以在less文件中重写这些参数的值
                            // 变量前置
                            globalVars: getLessVariables('./src/assets/less/theme.less'),
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'url-loader?limit=1024&name=images/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            }
        ]
    }
}
