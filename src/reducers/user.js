import { COUNTER } from './reducersType'

const INITIAL_STATE = {
  number: 0
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER.ADD:
      return {
        ...state,
        num: state.number + 1
      }
     case COUNTER.MINUS:
       return {
         ...state,
         num: state.number - 1
       }
     default:
       return state
  }
}
