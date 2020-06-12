import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import CheckAddressItem from './../../../compoents/address-item/checkAddress-item'
import './checkAddress.scss'
import { ADDRESS } from "../../../reducers/reducersType";

const CheckAddress = (props) => {
  const {cart: { allAddress, checkedAddress },checkAddress} = props
  const checkedIndex = checkedAddress.index
  return (
   <View className='checkMyAddress'>
     <View className='addAddress'>
       <Text>+添加新地址</Text>
     </View>
     {
       allAddress.map((item, index)=>(
         <View className='CheckAddressItem__Box' taroKey={item.id} key={item.id} onClick={()=>{
           console.log(item, index)
           const checkData = {
             index: index,
             data: item
           }
           checkAddress(checkData)
         }}>
           <CheckAddressItem  addressData={item} checked={index===checkedIndex}/>
         </View>
       ))
     }
   </View>
  )
}
CheckAddress.config = {
  navigationBarTitleText: '选择地址'
}
// 获取全局状态变量和方法 放入props
const stateP = (state)=>{
  return {
    // cart:{cart对象} 赋值给props
    cart: state.cart
  }
}
const dispatchP = (dispatch) => {
  return {
    checkAddress (item) {
      dispatch({ type: ADDRESS.CHECK, data: item })
    }
  }
}
export default connect(stateP,dispatchP)(CheckAddress)
