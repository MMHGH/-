import Taro from '@tarojs/taro'

const utils = {
    setSession(key,value) {
        return Taro.setStorageSync(key, value)
    },
    getSession (key) {
        return Taro.getStorageSync(key)
    },
}

export default utils