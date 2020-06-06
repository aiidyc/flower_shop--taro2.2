import { connect } from '@tarojs/redux'

import { View, Text,  Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import GoodsOne from './../../compoents/goods/goodsOne'
import selectNo from './../../assets/select.png'
import selectYes from './../../assets/selected.png'
import './cart.scss'
import {CART} from "../../reducers/reducersType";

const Cart = (props) => {
  const { selectFunc, add, cart: { shopNum, selectFlag } } = props
  return (
    <View className='newCart'>
    <View className='newCart__top'>
      <View className='cartItem'>
        <View className='cartItem__left'>
            <Image
              className='cartItem__left__img'
              src={selectFlag ? selectYes : selectNo}
              onClick={()=>{ selectFunc() }}
            />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
      <View className='cartItem'>
        <View className='cartItem__left'>
          <Image
            className='cartItem__left__img'
            src={selectFlag ? selectYes : selectNo}
            onClick={()=>{ selectFunc() }}
          />
        </View>
        <View className='cartItem__Right'>
          <GoodsOne height={'16.5vh'} buttonType={'2'}/>
        </View>
      </View>
    </View>
    <View className='newCart__footer'>
      <View className='newCart__footer__left'>
        <Image
          style={{marginLeft:'10px'}}
          className='newCart__footer__img'
          src={selectFlag ? selectYes : selectNo}
          onClick={()=>{ selectFunc() }}
        />
        <Text style={{marginLeft:'10px'}}>全选</Text>
      </View>
     <View className='newCart__footer__right'>
       <AtButton size='normal' className='newCart__footer__button' type='primary' circle={true}>
         <Text>¥188.88</Text>
         <Text style={{marginLeft:'10px'}}>结算</Text>
       </AtButton>
     </View>
    </View>
    </View>
    )
}
// 获取全局状态变量和方法 放入props
const stateP = (state)=>{
  return {
    // cart:{cart对象} 赋值给props
    cart: state.cart
  }
}
const dispatchP = (dispatch) => {
  return {
    selectFunc () {
      dispatch({ type: CART.SELECT })
    },
    add () {
      dispatch({ type: CART.ADD })
    }
  }
}
Cart.config = {
  navigationBarTitleText: '购物车',
  backgroundColor:'#F3F3F3'
}
export default connect(stateP,dispatchP)(Cart)
