import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import OrderItem from '../../../components/order-item/order-item'
import './orderTabs.scss'

function OrderTabs(props) {
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '待付款' }, { title: '待发货' }, { title: '待收货' }]

  useEffect(()=>{
    const newCurrent = +this.$router.params.current||0
    setCurrent(newCurrent)
  },[])

  return (
    <View className='OrderTabs'>
      <AtTabs current={current} tabList={tabList} onClick={(index)=>{setCurrent(index)}}>
        <AtTabsPane current={current} index={0} >
          <View className='orderTab'>
            <View className='orderItemBox'>
              <OrderItem orderType={'1'}/>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane  current={current} index={1}>
          <View className='orderTab' >
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
          <View className='orderTab' >
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
