import {View, Text, Image} from '@tarojs/components'
import './goodsList.scss'

function GoodsList (props) {
  const { goodsData } = props
  return(
    <View className='goodsCard'>
      {goodsData.map((item, index) =>
      {
        const style = {
          marginLeft:'15px'
        }
        const indexType = index % 2 !== 0
        return (
          <View key={item.id} onClick={()=>{console.log(index)}} style={indexType?style:null} className='goodsItem '>
            <Image
              mode={'aspectFill'}
              className='goodsItem_img'
              src={item.url}
            />
            <Text className='goodsItem_title'>{item.title}</Text>
            <Text className='goodsItem_subTitle'>{item.subTitle}</Text>
            <Text className='goodsItem_price'>{item.price}</Text>
          </View>
        )
      })}
    </View>
  )
}
GoodsList.defaultProps = {
  goodsData:[
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
}
export default GoodsList
