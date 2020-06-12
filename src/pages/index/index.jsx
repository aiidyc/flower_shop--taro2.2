import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import NewSwiper from './../../compoents/swiper/index'
import ShopList from './shopList/shopList'
import TitleCard from './../../compoents/titile-card/titile-card'
import GoodsList from './../../compoents/goodsList/goodsList'
const imgs = [
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0wNtI.jpg',
    id: '2',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她',
    price: '¥188'
  },
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
      <NewSwiper img={imgs} height={'35%'}/>
      {/*<TitleCard/>*/}
      <ShopList/>
      <View className='newGard'>
      <View className='grid-header'>
        <Text className='grid-header__title'>新品推荐</Text>
        <Text className='grid-header__more'>更多</Text>
      </View>
      <GoodsList/>
      </View>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '鲜花首页',
}
export default Index
