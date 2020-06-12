import {View, Text, Image} from '@tarojs/components'
import './titile-card.scss'

function TitleCard (props) {
  const { a } = props
  return(
    <View className='TitleCard'>

    </View>
  )
}
TitleCard.config = {
  navigationBarTitleText: '页头',
}
TitleCard.defaultProps = {
  a:''
}
export default TitleCard
