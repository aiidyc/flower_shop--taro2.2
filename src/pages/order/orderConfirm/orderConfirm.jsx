import Taro, { useState, useEffect } from '@tarojs/taro'
import {AtButton} from "taro-ui";
import {View, Text, Image, Picker} from '@tarojs/components'
import {connect} from "@tarojs/redux";

import OrderItem from '../../../components/order-item/order-item'
import rightArrow from './../../../assets/right-arrow.png'
import coordinate from './../../../assets/coordinate.png'
import './OrderConfirm.scss'


function OrderConfirm (props) {
  const { cart: { allAddress } } = props
  const [time, setTime] = useState('选择时间')
  const [addressText, setAddressText] = useState({
    name:'点击选择收货地址',
    phoneNumber: '',
    address: '',
  })
  useEffect(() => {
    // 初始化地址
    const index = this.$router.params.index
    if (!index) return
    const currentAddress = allAddress[index]
    console.log(currentAddress)
    setAddressText(currentAddress)
  }, [])
  return (
    <View className='OrderConfirm'>
      <View className='OrderConfirm--top'>
        <View className='OrderConfirm--top__address'>
          <View className='OrderConfirm--top__address--top' onClick={()=>{
            Taro.navigateTo({url:'/pages/mine/myAddress/checkAddress'})
          }}>
            <View className='OrderConfirm--top__address--top__item1'>
              <Image style={{width:'22px',height:'22px'}} src={coordinate}/>
            </View>
              {
                addressText.name==='点击选择收货地址'?
                  (
                  <View className='OrderConfirm--top__address--top__item2' >
                  <Text className='OrderConfirm--top__address--top__item2-text0'>{addressText.name}</Text>
                  </View>
                  ) :
                  (
                  <View className='OrderConfirm--top__address--top__item2' >
                  <Text className='OrderConfirm--top__address--top__item2-text1'>{addressText.name}：{addressText.phoneNumber}</Text>
                  <Text className='OrderConfirm--top__address--top__item2-text2'> {addressText.address}</Text>
                  </View>
                  )
              }
            <View className='OrderConfirm--top__address--top__item3'>
              <Image style={{width:'22px',height:'22px'}} src={rightArrow}/>
            </View>
          </View>
          <View className='OrderConfirm--top__address--footer'>
            <Text style={{color:'#626262',fontSize:'33rpx'}}>送达时间</Text>
            <Picker mode='date' start="2020-06-15" onChange={(e)=>{setTime(e.target.value)}}><Text style={{color:'#D7B285',marginRight:'5px',fontSize:'33rpx'}}>
              {time}
            </Text></Picker>
          </View>
        </View>
        <View className='OrderConfirm--top__orderInfo'>
          <OrderItem orderType={'4'}/>
        </View>
      </View>
      <View className='OrderConfirm--footer'>
        <View className='OrderConfirm--footer__price'>
          <Text className='OrderConfirm--footer__price1'>合计:</Text>
          <Text className='OrderConfirm--footer__price2'>¥188</Text>
        </View>
        <View className='OrderConfirm--footer__button'>
          <AtButton size='normal' type='primary' circle={true}>支付</AtButton>
        </View>
      </View>
    </View>
  )
}
OrderConfirm.config = {
  navigationBarTitleText: '确认订单'
}
const stateP = (state)=>{
  return {
    // cart:{cart对象} 赋值给props
    cart: state.cart
  }
}
export default connect(stateP,null)(OrderConfirm)
