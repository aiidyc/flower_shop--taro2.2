import Taro from '@tarojs/taro'

import { View, Text } from '@tarojs/components'
import { AtAvatar, AtIcon, AtBadge, AtList, AtListItem } from 'taro-ui'
import './mine.scss'

const Mine = (props) => {
    return (
    <View className='mine'>
      <View className='mine__header'>
        <View className='mine__header_avatar'>
          <AtAvatar  className='mine__header_avatar--img' size={"large"} circle={true} text='妮妮Yan_ni'></AtAvatar>
          <View className='mine__header_avatar--text'>
            <Text style={{color:"#FFFFFF",fontSize:'15px'}}>Yanni233</Text>
            <Text style={{color:"#BAE2D5",fontSize:'13px'}}>181*****9902</Text>
          </View>
        </View>
      </View>
      <View className='mine__content'>
        <View className='mine__content__top'>
          <View className='mine__content__top--left'>
            <Text>我的订单</Text>
          </View>
          <View className='mine__content__top--right'>
            <View className='mine__content__top--right--item' onClick={()=>{console.log('跳转到订单页面')
              Taro.navigateTo({url:'/pages/order/orderTabs/orderTabs'})
            }}>
              <AtBadge value={10} maxValue={99}>
              <AtIcon value='credit-card' size='35' color='#54B7A2'></AtIcon>
              </AtBadge>
              <Text>待付款</Text>
            </View>
            <View className='mine__content__top--right--item'>
              <AtBadge value={10} maxValue={99}>
              <AtIcon value='shopping-bag-2' size='35' color='#54B7A2'></AtIcon>
              </AtBadge>
              <Text>待发货</Text>
            </View>
            <View className='mine__content__top--right--item'>
              <AtBadge value={10} maxValue={99}>
              <AtIcon value='shopping-bag' size='35' color='#54B7A2'></AtIcon>
              </AtBadge>
              <Text>待收货</Text>
            </View>
          </View>
        </View>
        <View className='mine__content__middle'>
          <View className='mine__content__middle_list'>
            <AtList>
              <AtListItem title='个人信息' arrow='right' onClick={()=>{
                console.log('个人信息')
              }} />
              <AtListItem title='地址管理' arrow='right'
                          onClick={()=>{
                            Taro.navigateTo({url:'/pages/mine/myAddress/index'})
                          }}
              />
              <AtListItem title='地址选择' arrow='right'
                          onClick={()=>{
                            Taro.navigateTo({url:'/pages/mine/myAddress/checkAddress'})
                          }}
              />
              <AtListItem title='订单确认' arrow='right'
                          onClick={()=>{
                            Taro.navigateTo({url:'/pages/order/orderConfirm/orderConfirm'})
                          }}
              />
              <AtListItem title='商品详情' arrow='right'
                          onClick={()=>{
                            Taro.navigateTo({url:'/pages/order/productDetails/productDetails'})
                          }}
              />
            </AtList>
          </View>
        </View>
      </View>
    </View>
    )
}
Mine.config = {
  navigationBarTitleText: '我的'
}
export default Mine
