import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

class Slide extends Component {

    static defaultProps = {
      swiperList: []
    }
    state = {
      
    }
    clickSwiper(){
      // this.props.onList() //也可以使用父组件方法
      console.log(1)
    }

    render() {
      const {swiperList} = this.props
      console.log(swiperList)
      return (
        <View>
          <Swiper
            className='test-h slide'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical={false}
            indicatorDots={true}
            circular={true}
            autoplay={true}>
            {
              swiperList && swiperList.map((item,index)=>{
                // 一定不要忘了指定key
                return <SwiperItem  key={index}  onClick={this.clickSwiper.bind(this)}> 
                          <View className='slide-text'>{item+1}</View>
                      </SwiperItem>
              })
            }
          </Swiper>
        </View>
      )
    }
}

export default Slide