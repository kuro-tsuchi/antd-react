# antd-react

## 下载并使用该工程

* 下载
git clone https://github.com/wqjiao/antd-react.git

* 安装依赖包

yarn 或 yarn install

* yarn 命令

- 新增相依套件

yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

yarn add [package] --dev <!-- devDependencies -->
yarn add [package] --peer <!-- peerDependencies -->
yarn add [package] --optional <!-- optionalDependencies -->

- 升级相应的依赖包

yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

- 移除相应依赖包

yarn remove [package]

## 项目主结构

|-- src
| |-- assets -- 公共资产
| | |-- less // 公共样式
| | |-- images // 公共本地图片
| |-- components -- 公共 UI 组件
| |-- constants -- 公共常量
| |-- layouts -- 页面布局组件
| | |-- LeftBar
| | |-- Header
| | |-- Footer
| | |-- index.js
| | |-- index.less
| |-- pages -- 页面组件
| | |-- Home
| | | |-- index.js
| | | |-- index.less
| | | |-- constants.js -- Home 内常量
| | | |-- components -- Home 拆分组件
| | | |-- images -- Home 内图片
| |-- routes -- 是否进行 -- immutable 代码分割 || 按需加载
| | |-- routeClass -- 路由分类
| | | |-- class1.js
| | |-- index.js
| |-- redux
| | |-- home
| | | |-- actionType.js -- Action Type
| | | |-- action.js -- Action Creator
| | | |-- reducer.js -- Reducer
| | |-- rootReducer.js -- Reducer 汇总
| | |-- store.js -- store
| |-- utils -- 公共工具 || 方法
| | |-- asyncComponent.jsx
| | |-- http.js -- axios 封装
| |-- index.js

## 项目技术栈

react -- ^16.8.4
redux -- ^4.0.1
react-redux -- ^6.0.1
react-router-dom -- ^4.3.1
redux-logger -- ^3.0.6
redux-thunk -- ^2.3.0

<!-- css 工具 -->
less -- ^3.9.0
less-loader -- ^4.1.0

antd -- ^3.15.0
moment -- ^2.24.0
axios -- ^0.18.0
webpack -- 4.28.3

<!-- 代码格式化 -->
eslint
prettier

<!-- socket 消息通知 -->
socket.io
<!-- DuelJS 通信 -->
dueljs

<!-- 代码分析工具 -->
webpack-bundle-analyzer -- ^3.1.0


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
