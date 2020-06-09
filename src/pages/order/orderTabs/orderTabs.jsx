import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import OrderItem from './../../../compoents/order-item/order-item'
import './orderTabs.scss'
const OrderTabs = (props) => {
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '待付款' }, { title: '待发货' }, { title: '待收货' }]
  return (
    <View className='OrderTabs'>
      <AtTabs current={current} tabList={tabList} onClick={(index)=>{setCurrent(index)}}>
        <AtTabsPane current={current} index={0} >
          <View style='background-color:#F3F3F3;padding-top:10rpx' >
            <View className='orderItemBox'>
              <OrderItem orderType={'1'}/>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='background-color: #F3F3F3;padding-top:10rpx'>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View><View className='orderItemBox'>
            <OrderItem orderType={'2'}/>
          </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>
            <View className='orderItemBox'>
              <OrderItem orderType={'2'}/>
            </View>

          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='background-color: #F3F3F3;padding-top:10rpx'>
            <View className='orderItemBox'>
              <OrderItem orderType={'3'}/>
            </View>
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
OrderTabs.config = {
  navigationBarTitleText: '我的订单',
  backgroundColor:'#F3F3F3'
}
export default OrderTabs
