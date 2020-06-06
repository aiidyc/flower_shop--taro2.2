import { CART } from './reducersType'

const INITIAL_STATE = {
  shopNum: 0,
  selectFlag: true
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
    case CART.SELECT:
      const newState = JSON.parse(JSON.stringify(state))
      newState.selectFlag = !newState.selectFlag
      return newState
     default:
       return state
  }
}
