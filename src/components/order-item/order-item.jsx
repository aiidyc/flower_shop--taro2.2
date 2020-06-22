import Taro from '@tarojs/taro'

import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import GoodsOne from './../goods/goodsOne'
import './order-item.scss'

const OrderItem = ({ orderData, orderType }) => {
  const orderList = orderData.orderList
  return (
   <View className='OrderItem'>
     <View className='OrderItem__goodsList'>
       {
         orderList.map(item=>(
           <GoodsOne key={item.id} goodsData={item} buttonType={'3'}/>
         ))
       }
     </View>
     <View className='OrderItem__price'>
      {/*<Text style={{marginRight:'10px'}}> 原价:¥288</Text>*/}
      {/*<Text style={{marginRight:'10px'}}> 优惠:¥5</Text>*/}
      <Text className='OrderItem__price__item'><Text className='OrderItem__price__subItem'>小计:</Text>¥{orderData.orderPrice}</Text>
     </View>
     <View>
       {/*待付款*/}
       {
         orderType==='1'?(
           <View className='OrderItem__button'>
           <View style={{marginRight:'10rpx'}}>
             <AtButton circle={true} >取消订单</AtButton>
           </View>
             <AtButton circle={true} >订单支付</AtButton>
           </View>
           ):orderType==='2'?
           (
             <View className='OrderItem__button'>
               <AtButton  circle={true} >提醒发货</AtButton>
             </View>
         ):orderType==='3'?(
             <View className='OrderItem__button'>
               <View style={{marginRight:'10rpx'}}>
                 <AtButton  circle={true} >查看物流</AtButton>
               </View>
               <AtButton circle={true}  >确认收货</AtButton>
             </View>
           ):null
       }

     </View>
   </View>
  )
}
OrderItem.defaultProps = {
  orderData: {
    orderPrice: 188,
    orderList:[
      {
        url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
        id: '1',
        title: '超大花束洋桔梗',
        subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
        oldPrice: '¥288',
        price: '¥188',
        GoodsNum: 2
      },
      {
        url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
        id: '2',
        title: '超大花束洋桔梗',
        subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
        oldPrice: '¥288',
        price: '¥188',
        GoodsNum: 1
      },
      {
        url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
        id: '3',
        title: '超大花束洋桔梗',
        subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
        oldPrice: '¥288',
        price: '¥188',
        GoodsNum: 3
      }
    ]
  },
  orderType: '1', // 1待付款 2代发货 3待收货 // 4去掉按钮
}
export default OrderItem
