import {Image, Text, View} from "@tarojs/components";
import { AtIcon, AtInputNumber } from 'taro-ui'
import './goodsOne.scss'
import { useState } from '@tarojs/taro'

function GoodsOne (props) {
  const { goodsData, height, numWidth, priceType, buttonType } = props
  const [ count, setCount ] = useState(0)
  return(
    <View className='goodsItem' style={{height:height}}>
      <Image
        mode={'aspectFill'}
        className='goodsItem_img'
        src={goodsData.url}
      />
      <View className='goodsItem__text'>
        <Text className='goodsItem__text_title'>{goodsData.title}</Text>
        <Text className='goodsItem__text_subTitle'>{goodsData.subTitle}</Text>
        <View className='goodsItem__text_footer'>
          <View className='goodsItem__text_footer--left'>
            {priceType === '1' ?
              (<Text className='goodsItem__text_price'>{goodsData.price}</Text> ):
              (<View>
                <Text className='goodsItem__text_two-price1'>{goodsData.oldPrice}</Text>
                <Text className='goodsItem__text_two-price2'>{goodsData.price}</Text>
              </View>
              )
            }
          </View>
          <View className='goodsItem__text_footer--right'>
            {buttonType === '1' ?
              (<AtIcon onClick={()=>{console.log(goodsData)}} value='add-circle' size='25' color='#5F9F92'></AtIcon>):
              buttonType === '2'?
              (
                <AtInputNumber
                  min={1}
                  max={9999}
                  step={1}
                  value={count}
                  width={numWidth}
                  onChange={(value)=>{
                    setCount(value)
                  }}
                />
              ):(<Text style={{color:'#757575'}}>x{goodsData.GoodsNum}</Text>)
            }
          </View>
        </View>

      </View>
    </View>
  )
}
GoodsOne.defaultProps = {
  goodsData: {
    url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
    id: '5',
    title: '超大花束洋桔梗',
    subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
    oldPrice: '¥288',
    price: '¥188',
    GoodsNum: 1
  },
  height: '120px',
  numWidth: 50, // 数字框宽度
  priceType: '1',
  buttonType:'1'
}
export default GoodsOne
