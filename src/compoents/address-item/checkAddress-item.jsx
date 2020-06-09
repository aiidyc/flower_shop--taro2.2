import {Image, Text, View} from "@tarojs/components";
import './checkAddress-item.scss'
import CheckedImg from './../../assets/checkAddress.png'

function CheckAddressItem (props) {
  const { checked,addressData } = props
  return(
    <View className='checkAddressItem'>
      <View className='checkAddressItem__left'>
        <Text style={{paddingLeft:'10px'}} className='checkAddressItem__left--address'>{addressData.address}</Text>
        <View style={{paddingLeft:'10px'}}>
          <Text>{addressData.name}</Text>
          <Text style={{marginLeft:'8px',color: '#808080'}}>{addressData.phoneNumber}</Text>
        </View>
      </View>
      <View className='checkAddressItem__right'>
        {
          checked ? (<Image style={{width:'100%',height:'60%'}} mode={'heightFix'} src={CheckedImg}/>):(<View></View>)
        }
      </View>
    </View>
  )
}

CheckAddressItem.defaultProps = {
  addressData: {
    phoneNumber:15203596284,
    name: '张永强',
    address: '成都市武侯区艺墅·花乡1522'
  },
  checked: true,
}
export default CheckAddressItem
