import {View, Text, Image} from '@tarojs/components'
import './titile-card.scss'
import xinpintuijian from './../../assets/xinpintuijian.png'

function TitleCard (props) {
  const { rightTitle, leftTitle, height, titleType } = props
  const Img = titleType === '1' ? xinpintuijian : ''
  return (
    <View className='TitleCard' style={{ height: height }}>
      <Text className='TitleCard__leftTitle'>{leftTitle}<Text className='TitleCard__leftTitle__Sub'></Text></Text>
      {/*<Image className='TitleCard__leftImg' style={{width:'92px',height:'20px'}} src={Img}/>*/}
      <Text className='TitleCard__rightTitle'>{rightTitle}</Text>
    </View>
  )
}

TitleCard.defaultProps = {
  leftTitle: '新品推荐',
  rightTitle: '更多',
  height:'40px',
  titleType: '1'
}
export default TitleCard
