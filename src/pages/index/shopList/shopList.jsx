import {View, Text, Image} from '@tarojs/components'
import './shopList.scss'
import Taro from "@tarojs/taro";

function ShopList (props) {
  const { shopData } = props
  return (
    <View>
      {/*<View className='shopList__header'>*/}
        {/*<Text className='shopList__header__title'>限时抢购</Text>*/}
        {/*<Text className='shopList__header__more'>更多</Text>*/}
      {/*</View>*/}
      <View className='at-row at-row--wrap'>
        {shopData.map((item, index) => (
          <View key={item.id} className='at-col at-col-12 shopList__item' onClick={()=>{
            Taro.navigateTo({ url: '/pages/order/productDetails/productDetails?pid=' + item.id })
          }}>
              <Image
                className='shopList__item__img'
                mode={'aspectFill'}
                src={item.url}
              />
            <View className='shopList__item_text'>
              <Text className='shopList__item__text_title'>{item.title}</Text>
              <Text className='shopList__item__text_subTitle'>{item.subTitle}</Text>
              <View className='shopList__item_text__price'>
                <Text className='shopList__item_text__price--old'>¥288</Text>
                <Text className='shopList__item_text__price--new'>¥188</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
ShopList.defaultProps = {
  shopData: [
    {
      url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
      id: '5',
      title: '超大花束洋桔梗',
      subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
      price: '¥188'
    },
    {
      url: 'https://s1.ax1x.com/2020/06/04/t0TERK.png',
      id: '3',
      title: '超大花束洋桔梗',
      subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
      price: '¥188'
    },
    {
      url: 'https://s1.ax1x.com/2020/06/04/t0TVxO.png',
      id: '4',
      title: '超大花束洋桔梗',
      subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
      price: '¥188'
    }
  ]
}
export default ShopList
