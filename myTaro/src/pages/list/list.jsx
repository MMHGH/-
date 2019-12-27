import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './list.scss'
const app = Taro.getApp()

export default class Index extends Component {

  config = {
    navigationBarTitleText: '列表页面'
  }

  componentWillMount () { 
    // 这里即可获取参数
    console.log(33,this.$router.params)
    console.log(44,app.globalData.pages)  
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goIndex(){
    Taro.switchTab({
      url: `/pages/index/index`
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button className='btn-max-w' plain type='primary' onClick={this.goIndex}>返回主页</Button>
      </View>
    )
  }
}
