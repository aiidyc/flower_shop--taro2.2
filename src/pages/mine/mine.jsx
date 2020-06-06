import { View, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './mine.scss'
const Mine = (props) => {
    return (
    <View className='mine'>
      <View className='mine__header'>
        <View className='mine__header_avatar'>
          <AtAvatar className='mine__header_avatar--img' size={"large"} circle={true} text='妮妮Yan_ni'></AtAvatar>
          <View className='mine__header_avatar--text'>
            <Text style={{color:"#FFFFFF",fontSize:'15px'}}>Yanni233</Text>
            <Text style={{color:"#BAE2D5",fontSize:'13px'}}>181*****9902</Text>
          </View>
        </View>
      </View>
      <View className='mine__content'>
        <View className='mine__content__top'>

        </View>
        <View className='mine__content__middle'>

        </View>
        内容区
      </View>
    </View>
    )
}
Mine.config = {
  navigationBarTitleText: '我的'
}
export default Mine
