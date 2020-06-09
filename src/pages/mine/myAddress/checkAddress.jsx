import { View, Text } from '@tarojs/components'

import CheckAddressItem from './../../../compoents/address-item/checkAddress-item'
import './index.scss'

const CheckAddress = (props) => {
  return (
   <View className='myAddress'>
     <View className='addAddress'>
       <Text>+添加新地址</Text>
     </View>
     <View className='CheckAddressItem__Box '>
       <CheckAddressItem/>
     </View>
     <View className='CheckAddressItem__Box'>
         <CheckAddressItem checked={false}/>
     </View>
     <View className='CheckAddressItem__Box'>
       <CheckAddressItem checked={false}/>
     </View>
     <View className='CheckAddressItem__Box'>
       <CheckAddressItem checked={false}/>
     </View>
   </View>
  )
}
CheckAddress.config = {
  navigationBarTitleText: '选择地址'
}
export default CheckAddress
