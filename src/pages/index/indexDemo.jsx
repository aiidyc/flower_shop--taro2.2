// import { View, Button, Text } from '@tarojs/components'
//
// import './index.scss'
//
// function Index () {
//   return (
//     <View className='index'>
//       <Button className='add_btn'>+</Button>
//       <Button className='dec_btn' >-</Button>
//       <Button className='dec_btn' >async</Button>
//       <View><Text>{count}</Text></View>
//       <View><Text>Hello, World</Text></View>
//     </View>
//   )
// }
// export default Index
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { CART } from "../../reducers/reducersType";
import { AtButton } from 'taro-ui'

import './index.scss'

function Index (props) {
  console.log(props, 'props')
  const { add, dec, asyncAdd } = props
  const { shopNum } = props.cart
  return (
    <View className='index'>
      <AtButton type='primary'>按钮文案</AtButton>
      <Button className='add_btn' onClick={add}>+</Button>
      <Button className='dec_btn' onClick={dec}>-</Button>
      <Button className='dec_btn' onClick={asyncAdd}>async</Button>
      <View><Text>{shopNum}</Text></View>
      <View><Text>Hello, World</Text></View>
    </View>
  )
}
// 获取全局状态变量和方法 放入props
const stateP = (state)=>{
  return {
    cart: state.cart
  }
}
const dispatchP = (dispatch) => {
  return {
    add () {
      dispatch({ type: CART.ADD })
    },
    dec () {
      dispatch({ type: CART.MINUS })
    },
    asyncAdd () {
      setTimeout(() => {
        dispatch({ type: CART.ADD })
      }, 2000)
    }
  }
}
export default connect(stateP, dispatchP)(Index)

