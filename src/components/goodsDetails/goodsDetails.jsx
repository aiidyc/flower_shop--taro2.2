import {Image, View} from "@tarojs/components";
import './goodsDetails.scss'

function GoodsDetails () {
  return(
    <View className='at-article'>
      <View className='at-article__content'>
        <View className='at-article__section'>
          <View className='at-article__p'>
            这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </View>
          <Image
            className='at-article__img'
            src='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
            mode='widthFix' />
        </View>
      </View>
    </View>
  )
}

GoodsDetails.defaultProps = {
  goodsData: {
    url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
    id: '5',
    title: '超大花束洋桔梗',
    subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
    oldPrice: '¥288',
    price: '¥188',
    GoodsNum: 1
  }
}
export default GoodsDetails
