import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import NewSwiper from './../../compoents/swiper/index'
import ShopList from './shopList/shopList'
const imgs = [
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
function Index () {
  return (
    <View className='index'>
      <NewSwiper img={imgs} height={'200px'}/>
      <ShopList/>
      <View className='newGard'>
      <View className='grid-header'>
        <Text className='grid-header__title'>新品推荐</Text>
        <Text className='grid-header__more'>更多</Text>
      </View>
      <View className='at-row at-row--wrap'>
        {imgs.map((item, index) => (
          <View key={item.id} onClick={()=>{console.log(index)}} className='at-col at-col-6 goodsItem'>
            <Image
              className='goodsItem_img'
              src={item.url}
            />
            <Text className='goodsItem_title'>{item.title}</Text>
            <Text className='goodsItem_subTitle'>{item.subTitle}</Text>
            <Text className='goodsItem_price'>{item.price}</Text>
          </View>
        ))}
      </View>
      </View>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '鲜花首页',
}
export default Index
