import Taro, { useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'

import NewSwiper from '../../components/swiper/index'
import ShopList from './shopList/shopList'
import TitleCard from '../../components/titile-card/titile-card'
import GoodsList from '../../components/goodsList/goodsList'
import './index.scss'

import { getToken } from "../../api/login"

const imgs = [
  {
    url: 'https://s1.ax1x.com/2020/06/04/t0wNtI.jpg',
    id: '2',
    title: '夏日福利【巴黎午后】旋转吧银河',
    subTitle: '献给你爱的那个她 ',
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
  useEffect(()=>{
    // getToken().then((res)=>{
    //   console.log('getToken', res)
    // })
  },[])
  return (
    <View className='index'>
      <NewSwiper img={imgs} height={'35%'}/>
      <TitleCard leftText={'限时抢购'} paddingTop={'12px'} height={'20px'} />
      <ShopList/>
      <TitleCard leftText={'新品推荐'} paddingBottom={'3px'}/>
      <GoodsList/>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '鲜花首页',
}
export default Index
