import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
// import './index.scss'

class Icons extends Component {

    static defaultProps = {
      swiperList: []
    }
    state = {
      
    }
    render() {
      return (
        <View className='components-page'>
            <Icon size='60' type='success' />
            <Icon size='60' type='info' />
            <Icon size='60' type='warn' color='#ccc' />
            <Icon size='60' type='warn' />
            {/* <Icon size='60' type='waiting' /> */}
            <Icon size='20' type='success_no_circle' />
            <Icon size='20' type='warn' />
            <Icon size='20' type='success' />
            <Icon size='20' type='download' />
            <Icon size='20' type='clear' color='red' />
            <Icon size='20' type='search' />
        </View>
      )
    }
}

export default Icons