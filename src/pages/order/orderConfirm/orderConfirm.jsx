import Taro from '@tarojs/taro'

import { View, Text, Image } from '@tarojs/components'
import OrderItem from './../../../compoents/order-item/order-item'

import rightArrow from './../../../assets/right-arrow.png'
import coordinate from './../../../assets/coordinate.png'

import './OrderConfirm.scss'
import {AtButton} from "taro-ui";

const OrderConfirm = (props) => {
  return (
    <View className='OrderConfirm'>
      <View className='OrderConfirm--top'>
        <View className='OrderConfirm--top__address'>
          <View className='OrderConfirm--top__address--top'>
            <View className='OrderConfirm--top__address--top__info'>
              <Image style={{width:'22px',height:'22px',marginRight:'10px'}} src={coordinate}/>
              <Text className='OrderConfirm--top__address--top__info__text'>点击选择收货地址</Text>
            </View>
            <Image style={{width:'22px',height:'22px'}} src={rightArrow}/>
          </View>
          <View className='OrderConfirm--top__address--footer'>
            <Text style={{color:'#626262',fontSize:'33rpx'}}>送达时间</Text>
            <Text style={{color:'#D7B285',marginRight:'5px',fontSize:'33rpx'}}>选择时间</Text>
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
export default OrderConfirm
