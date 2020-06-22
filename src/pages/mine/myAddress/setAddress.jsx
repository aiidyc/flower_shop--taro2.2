import Taro from '@tarojs/taro'
import {connect} from "@tarojs/redux";
import {ADDRESS} from "../../../reducers/reducersType";

import { View, Text } from '@tarojs/components'
import AddressItem from '../../../components/address-item/address-item'
import './setAddress.scss'


const MyAddress = (props) => {
  const {cart: { allAddress, checkedAddress },checkAddressFun} = props

  return (
   <View className='myAddress'>
     <View className='addAddress' onClick={()=>{
       Taro.navigateTo({url:'/pages/mine/myAddress/editAddress/editAddress'})
     }}>
       <Text>+添加新地址</Text>
     </View>
     {
       allAddress.map((item,index)=>{
         return (
           <View className='AddressItemBox'key={item.id}  taroKey={item.id} onClick={()=>{
             Taro.navigateTo({url:'/pages/mine/myAddress/editAddress/editAddress?index='+index})
           }}>
             <AddressItem addressData={item} defaultAddress={item.default}/>
           </View>
         )
       })
     }
   </View>
  )
}
MyAddress.config = {
  navigationBarTitleText: '地址管理'
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
    checkAddressFun (item) {
      dispatch({ type: ADDRESS.CHECK, data: item })
    }
  }
}
export default connect(stateP,dispatchP)(MyAddress)
