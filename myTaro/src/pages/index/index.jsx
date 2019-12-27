import Taro, { Component } from '@tarojs/taro'
import { View, Text, RichText, Button, RadioGroup, Radio, Label, Picker, Ad, OfficialAccount  } from '@tarojs/components'
import Utils from '../../utils/utils'
import Slide from '../../components/slide'
import Icons from '../../components/icons'
import { AtButton } from 'taro-ui'
// 解析富文本
import WxParse from '../../components/wxParse/wxParse'
import './index.scss'
const app = Taro.getApp()

export default class Index extends Component {

  // 构造器
  // constructor(props){
  //   super(props);
    state = {
      showTipsInfo: false,
      load: false,
      tips: "谢谢 你已经帮我积攒过能量啦1！",
      tips2: this.props,
      key: '',
      showDialogs: false,
      infoFirst: true,
      newUser: '',
      oldUser: '',
      showPullUp: false,
      pull: true,
      swiperList:[1,2,3],
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国',
    }
    // 异步函数需要在constructor中指定this
    // this.setInfoByParams04 = this.setInfoByParams04.bind(this)
  // }


  // 存在父子组件传参最好定义 defaultProps
  static defaultProps = {
    isEnable: true,
  }

  config = {
    navigationBarTitleText: '我的Taro框架项目'
  }

  
  componentWillMount () { 
    // 这里获取参数
    console.log(11,this.state.tips)  
    console.log(22,app.globalData.pages)  
    Utils.setSession('userName','明天慧更好1314')
  }

  componentDidMount () {
    this.state.swiperList.forEach((item)=>{
      console.log(item)
    })
    // const article = '<div style="color: red">我是HTML代码</div>'
    // WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('触发了')
    this.setState ({
      selectorChecked : '美国'
    })
  }

  componentDidHide () { }

  goList(val){
    Taro.navigateTo({
      url: `/pages/list/list?id=2&test=${val}`
    })
    // 此方式不可传参，可使用全局变量
    // Taro.switchTab({
    //   url: `/pages/list/list`
    // })
    app.globalData.pages = val
    console.log(val)
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  render () {
    // 推荐使用对象解构的方式来使用 state、props
    const { tips,swiperList,contentDetail = '' } = this.state
    const { isEnable } = this.props

    // jsx语法注意：在map里面不能使用if，可以使用三元运算符代替！只能使用map操作数组！
    return (
      <View className='main'>
        <Text className='main-title'>{tips}</Text>
        <View>
          <Slide swiperList={swiperList} />
        </View>
        <View>
          <Icons/>
        </View>
        {/* <View>
          <import src='../../components/wxParse/wxParse.wxml' />
          <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
        </View> */}
        <Button className='btn-max-w' plain type='primary'>按钮</Button>
        <RadioGroup>
          <Label className='example-body__label' for='1' key='1'>
            <Radio value='USA'>USA</Radio>
          </Label>
          <Label className='example-body__label' for='2' key='2'>
            <Radio value='CHN' checked>
            CHN
            </Radio>
          </Label>
        </RadioGroup>
        <View className='page-section'>
          <Text>地区选择器</Text>
          <View>
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <View className='picker'>
                当前选择：{this.state.selectorChecked}
              </View>
            </Picker>
          </View>
        </View>
        <View className='index'>
          {/* <AtButton type='primary'>按钮文案</AtButton> */}
        </View>
        {/* { isEnable && <View className='main-list' hoverClass="active" onClick={this.goList.bind(this,'list')}>列表页面</View> } */}
        { isEnable && <View className='main-list' hoverClass="active" onClick={ () => this.goList('list') }>列表页面</View> }
      </View>
    )
  }
}
