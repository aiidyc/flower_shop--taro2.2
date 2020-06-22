import {View, Text } from '@tarojs/components'
import './titile-card.scss'

function TitleCard (props) {
  const { rightText, leftText, height, paddingTop, paddingBottom } = props
  return (
    <View className='TitleCard' style={{ height: height, paddingTop: paddingTop,paddingBottom:paddingBottom}}>
      <View className='TitleCard__leftTitle'>
        <Text>{leftText}</Text>
        <View className='TitleCard__leftTitle__bgc'></View>
      </View>
      <Text className='TitleCard__rightTitle'>{rightText}</Text>
    </View>
  )
}

TitleCard.defaultProps = {
  leftText: '新品推荐',
  rightText: '更多',
  height:'30px',
  paddingTop:'0px',
  paddingBottom:'0px'
}
export default TitleCard
