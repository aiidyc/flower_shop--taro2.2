import { View } from '@tarojs/components'

function Vif (props) {
  const { children, vif = null} = props
  console.log(vif)
  if(!vif) return null
  return (
   <View>

   </View>
  )
}
export default Vif

