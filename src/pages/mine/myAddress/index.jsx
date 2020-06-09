import Taro from '@tarojs/taro'

import { View, Text } from '@tarojs/components'
import AddressItem from './../../../compoents/address-item/address-item'
import './index.scss'

const MyAddress = (props) => {
  return (
   <View className='myAddress'>
     <View className='addAddress'>
       <Text>+添加新地址</Text>
     </View>
     <View className='AddressItemBox'>
       <AddressItem/>
     </View>
     <View className='AddressItemBox'>
       <AddressItem defaultAddress={false}/>
     </View>
   </View>
  )
}
MyAddress.config = {
  navigationBarTitleText: '地址管理'
}
export default MyAddress
