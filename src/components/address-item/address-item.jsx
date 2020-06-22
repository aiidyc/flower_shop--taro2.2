import {Image, Text, View} from "@tarojs/components";
import { useState } from '@tarojs/taro'
import './address-item.scss'
function AddressItem (props) {
  const { addressData, defaultAddress } = props
  const [ count, setCount ] = useState(0)
  return(
    <View className='AddressItem'>
      <View className='AddressItem__left'>
        <Text className='AddressItem__left--address'>{addressData.address}</Text>
        <View>
          <Text>{addressData.name}</Text>
          <Text style={{marginLeft:'8px',color: '#808080'}}>{addressData.phoneNumber}</Text>
        </View>
      </View>
          <View className='AddressItem__right'>
            <Text style={{marginRight:'8px',marginLeft:'10px'}}>编辑</Text>
            {
              defaultAddress ? (<Text>默认</Text>) : (<Text>设为默认</Text>)
            }
          </View>
    </View>
  )
}
AddressItem.defaultProps = {
  addressData: {
    phoneNumber:15203596284,
    name: '张永强',
    address: '成都市武侯区艺墅·花乡1522'
  },
  defaultAddress: true,
}
export default AddressItem
