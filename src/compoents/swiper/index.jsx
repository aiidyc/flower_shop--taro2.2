import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

function NewSwiper (props) {
  const { img, height } = props
  return (
      <Swiper
        style={{height: height}}
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={false}
        circular
        indicatorDots
        autoplay>
        {img.map(item => (
          <SwiperItem
            key={item.id}
            className='home-banner__swiper-item'
            onClick={()=>{console.log(1)}}
          >
            <Image
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
