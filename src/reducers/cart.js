import { CART, ADDRESS } from './reducersType'

const INITIAL_STATE = {
  shopNum: 0,
  selectFlag: true,
  allAddress: [
    {
      id:'1',
      phoneNumber: '15203596284',
      name: '张永强1',
      address: '成都市武侯区艺墅·花乡1522',
      default: false
    },
    {
      id:'2',
      phoneNumber: '15203596284',
      name: '张永强2',
      address: '成都市武侯区艺墅·花乡1522',
      default: true
    },
    {
      id:'3',
      phoneNumber: '15203596284',
      name: '张永强3',
      address: '成都市武侯区艺墅·花乡1522',
      default: false
    },
    {
      id:'4',
      phoneNumber: '15203596284',
      name: '张永强4',
      address: '成都市武侯区艺墅·花乡1522',
      default: false
    }
  ],
  // 选中的地址
  checkedAddress: {
    index: 0,
    data: {}
  }

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
    case ADDRESS.CHECK:
      // 选择地址
      const addressState = JSON.parse(JSON.stringify(state))
      addressState.checkedAddress = action.data
      return addressState
    case ADDRESS.EDIT:
      // 修改地址
      const editState = JSON.parse(JSON.stringify(state))
      const { index, data } = action
      if(!index){
        // 添加地址
        editState.allAddress.push(data)
      }else {
        // 修改地址
        editState.allAddress[index] = data
      }
      return editState
     default:
       return state
  }
}
