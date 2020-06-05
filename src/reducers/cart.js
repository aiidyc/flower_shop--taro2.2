import { CART } from './reducersType'

const INITIAL_STATE = {
  shopNum: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CART.ADD:
      return {
        ...state,
        shopNum: state.shopNum + 1
      }
     case CART.MINUS:
       return {
         ...state,
         shopNum: state.shopNum - 1
       }
     default:
       return state
  }
}
