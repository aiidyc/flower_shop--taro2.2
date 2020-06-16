import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

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
      <TitleCard leftText={'限时抢购'} paddingTop={'12px'} height={'20px'} />
      <ShopList/>
      <TitleCard leftText={'新品推荐'} paddingBottom={'3px'}/>
      <GoodsList/>
      {/*<AtTabBar*/}
        {/*fixed*/}
        {/*tabList={[*/}
          {/*{ title: '领取中心', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png', text: 'new' },*/}
          {/*{ title: '找折扣', image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png' },*/}
          {/*{ title: '领会员', image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png', text: '100', max: 99 }*/}
        {/*]}*/}
        {/*current={0}*/}
      {/*/>*/}
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '鲜花首页',
}
export default Index
