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
      let editState = JSON.parse(JSON.stringify(state))
      const { index, data } = action
      // 添加地址
      if(!index){
        // 添加--用户未设置默认地址
        if(!data.default){
          editState.allAddress.push(data)
        // 添加--用户设置了默认地址
        }else {
          const newArr = []
          newArr.push(data)
          editState.allAddress.forEach((newItem, newIndex) => {
              newArr.push({ ...newItem, default: false })
          })
          editState.allAddress = newArr
        }
      }else {
        // 修改地址--用户未设置默认地址
        if(!data.default){
          editState.allAddress[index] = data
        }else {
        // 修改地址--用户设置了默认地址
          const newArr = []
          newArr.push(data)
          editState.allAddress.forEach((newItem, newIndex) => {
            if(newIndex!==+index){
              newArr.push({ ...newItem, default: false })
            }
          })
          editState.allAddress = newArr
        }
      }
      return editState
     default:
       return state
  }
}
