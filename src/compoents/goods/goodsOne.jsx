import {Image, Text, View} from "@tarojs/components";
import { AtIcon, AtInputNumber } from 'taro-ui'
import './index.scss'
import { useState } from '@tarojs/taro'

function GoodsOne (props) {
  const { item, height, numWidth, priceType, buttonType } = props
  const [ count, setCount ] = useState(0)
  return(
    <View className='goodsItem' style={{height:height}}>
      <Image
        className='goodsItem_img'
        src={item.url}
      />
      <View className='goodsItem__text'>
        <Text className='goodsItem__text_title'>{item.title}</Text>
        <Text className='goodsItem__text_subTitle'>{item.subTitle}</Text>
        <View className='goodsItem__text_footer'>
          <View className='goodsItem__text_footer--left'>
            {priceType === '1' ?
              (<Text className='goodsItem__text_price'>{item.price}</Text> ):
              (<View>
                <Text className='goodsItem__text_two-price1'>{item.oldPrice}</Text>
                <Text className='goodsItem__text_two-price2'>{item.price}</Text>
              </View>
              )
            }
          </View>
          <View className='goodsItem__text_footer--right'>
            {buttonType === '1' ?
              (<AtIcon onClick={()=>{console.log(item)}} value='add-circle' size='25' color='#5F9F92'></AtIcon>):
              (
                <AtInputNumber
                  min={0}
                  max={9999}
                  step={1}
                  value={count}
                  width={numWidth}
                  onChange={(value)=>{
                    setCount(value)
                  }}
                />
              )
            }
          </View>
        </View>

      </View>
    </View>
  )
}
GoodsOne.defaultProps = {
  item: {
    url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
    id: '5',
    title: '超大花束洋桔梗',
    subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
    oldPrice: '¥288',
    price: '¥188'
  },
  height: '120px',
  numWidth: 50,
  priceType: '1',
  buttonType:'1'
}
export default GoodsOne
