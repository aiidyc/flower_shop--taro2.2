import Taro from '@tarojs/taro'

import { View, Text, Image, Button } from '@tarojs/components'
import NewSwiper from './../../../compoents/swiper/index'
import './productDetails.scss'
import home from './../../../assets/tab-bar/home.png'
import cart from './../../../assets/tab-bar/cart.png'

const images = [
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
    id: '5',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她',
    price: '¥188'
  },
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0T3JP.png',
    id: '6',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她',
    price: '¥188'
  },
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0ou40.png',
    id: '1',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她',
    price: '¥188'
  },
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0wNtI.jpg',
    id: '2',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她',
    price: '¥188'
  },
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0TERK.png',
    id: '3',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她',
    price: '¥188'
  },
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0TVxO.png',
    id: '4',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她',
    price: '¥188'
  }
]
const ProduceDetails = (props) => {
  return (
    <View className="ProduceDetails">
      <View className="ProduceDetails__header">
        <View className="ProduceDetails__header__swiper">
          <NewSwiper img={images} height={'100%'}/>
        </View>
        <View className="ProduceDetails__header__content">
          <View className='ProduceDetails__header__content--priceCard'>
            <View className='ProduceDetails__header__content--priceCard-item1'>
              <View>
                <Text style={{color:"#D5B67A"}}>¥<Text className='priceCard-item1__price'>99</Text></Text>
                <Text className='priceCard-item1__old-price'>原价¥199</Text>
              </View>
              <View>
                <Text className='priceCard-item1__Num'>已售出375件</Text>
              </View>
            </View>
            <View className='ProduceDetails__header__content--priceCard-item2'>
              <Text className='priceCard-item2--title'>成都鲜花同城冰淇淋小花束</Text>
              <Text className='priceCard-item2--subTitle'>成都鲜花同城冰淇淋小花束套装送爱人</Text>
            </View>
          </View>
          <View className="ProduceDetails__header__content--productInfo">

          </View>
        </View>
      </View>
      <View className="ProduceDetails__footer">
        <View className='ProduceDetails__footer--left'>
          <View className='ProduceDetails__footer--left__item ProduceDetails__footer--left__item1'>
            <Image src={home} style={{width:'26px',height:'26px',marginBottom:'1px'}}/>
            <Text>主页</Text>
          </View>
          <View className='ProduceDetails__footer--left__item ProduceDetails__footer--left__item2'>
            <Image src={cart} style={{width:'26px',height:'26px',marginBottom:'1px'}}/>
            <Text>购物车</Text>
          </View>
        </View>
        <View className="ProduceDetails__footer--right">
          <View className='ProduceDetails__footer--right--btn1'>
            <Button>加入购物车</Button>
          </View>
          <View className="ProduceDetails__footer--right--btn2">
            <Button>立即购买</Button>
          </View>
        </View>
      </View>
    </View>
  )
}
ProduceDetails.config = {
  navigationBarTitleText: '商品详情'
}
export default ProduceDetails
