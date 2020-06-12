import Taro from '@tarojs/taro'

import { View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtBadge, AtList, AtListItem } from 'taro-ui'
import './mine.scss'
import daifukuan from './../../assets/daifukuan.png'
import daifahuo from './../../assets/daifahuo.png'
import daishouhuo from '../../assets/daishouhuo.png'

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
          <View className='mine__content__top--left' onClick={()=>{Taro.navigateTo({url:'/pages/order/orderTabs/orderTabs'})
          }}>
            <Text>我的订单</Text>
          </View>
          <View className='mine__content__top--right'>
            <View className='mine__content__top--right--item' onClick={()=>{console.log('跳转到待收货')
              Taro.navigateTo({url:'/pages/order/orderTabs/orderTabs?current=0'})
            }}>
              <AtBadge value={10} maxValue={99}>
                <Image src={daifukuan} style={{width:'60rpx',height:'60rpx'}}/>
              {/*<AtIcon value='credit-card' size='35' color='#54B7A2'></AtIcon>*/}
              </AtBadge>
              <Text style={{marginTop:'5px'}}>待付款</Text>
            </View>
            <View className='mine__content__top--right--item'onClick={()=>{console.log('跳转到待发货')
              Taro.navigateTo({url:'/pages/order/orderTabs/orderTabs?current=1'})
            }} >
              <AtBadge value={10} maxValue={99}>
                <Image src={daifahuo} style={{width:'60rpx',height:'60rpx'}}/>
              </AtBadge>
              <Text style={{marginTop:'5px'}}>待发货</Text>
            </View>
            <View className='mine__content__top--right--item' onClick={()=>{console.log('跳转到待收货')
              Taro.navigateTo({url:'/pages/order/orderTabs/orderTabs?current=2'})
            }}>
              <AtBadge value={10} maxValue={99}>
                <Image src={daishouhuo} style={{width:'60rpx',height:'60rpx'}}/>
              </AtBadge>
              <Text style={{marginTop:'5px'}}>待收货</Text>
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
