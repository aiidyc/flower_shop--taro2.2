import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

const Cart = (props) => {
  // console.log(props)
  return (
    <View><Text>购物车{props.cart.shopNum}</Text></View>
    )
}
// 获取全局状态变量和方法 放入props
const stateP = (state)=>{
  return {
    // cart:{cart对象} 赋值给props
    cart: state.cart
  }
}
export default connect(stateP,null)(Cart)
