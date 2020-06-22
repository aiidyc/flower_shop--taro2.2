import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import Taro from "@tarojs/taro";

function NewSwiper (props) {
  const { img, height } = props
  return (
      <Swiper
        style={{height: height}}
        indicatorActiveColor='#333'
        vertical={false}
        circular
        indicatorDots
        autoplay>
        {img.map(item => (
          <SwiperItem
            key={item.id}
            className='home-banner__swiper-item'
            onClick={()=>{
              Taro.navigateTo({ url: '/pages/order/productDetails/productDetails?pid=' + item.id })
            }}
          >
            <Image
              mode={'aspectFill'}
              className='home-banner__swiper-item-img'
              src={item.url}
            />
          </SwiperItem>
        ))}
      </Swiper>
  )
}
NewSwiper.defaultProps = {
  img: []
}
export default NewSwiper
