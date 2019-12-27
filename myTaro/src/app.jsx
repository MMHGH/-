import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index/index'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  
  globalData = {
    pages: 'index',
    userInfo: {}
  }
  config = {
    pages: [
      'pages/index/index',
      'pages/list/list'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#999",
      selectedColor: "#474646",
      backgroundColor: "#ffffff",
      borderStyle: 'white',
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/image/tabBar/one.png",
          selectedIconPath: "./assets/image/tabBar/one.png",
          // text: '发现' //一定要有
        },{
          pagePath: "pages/index/index",
          iconPath: "./assets/image/tabBar/two.png",
          selectedIconPath: "./assets/image/tabBar/two.png",
          // text: '好物'
        }, {
          pagePath: "pages/index/index",
          iconPath: "./assets/image/tabBar/three.png",
          selectedIconPath: "./assets/image/tabBar/three.png",
          // text: '品类'
        }, {
          pagePath: "pages/index/index",
          iconPath: "./assets/image/tabBar/four.png",
          selectedIconPath: "./assets/image/tabBar/four.png",
          // text: '我的'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
