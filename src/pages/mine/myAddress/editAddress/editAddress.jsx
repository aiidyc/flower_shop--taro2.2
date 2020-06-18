import Taro, {useState, useEffect} from '@tarojs/taro'
import {connect} from "@tarojs/redux";

import { View } from '@tarojs/components'
import { AtInput, AtSwitch, AtButton }  from 'taro-ui'
import './editAddress.scss'

import {ADDRESS} from "../../../../reducers/reducersType";

function EditAddress (props) {
  const { cart: { allAddress }, editAddressP } = props
  const [addressIndex,setAddressIndex] = useState(null)
  const [form,setForm] = useState({
    id:'1',
    name:'',
    phoneNumber:'',
    address:'',
    default:false
  })
  useEffect(()=>{
    // 初始化地址
    const index = this.$router.params.index
    if (!index) return
    const currentAddress = allAddress[index]
    setAddressIndex(index)
    setForm(currentAddress)
  },[])
  function handleChange (value, e) {
    const obj = { ...form, [e.target.id]: value }
    setForm(obj)
  }
  return (
   <View className='editAddress'>
       <AtInput
         required
         name='name'
         title='姓名'
         type='text'
         placeholder='请输入姓名'
         value={form.name}
         onChange={handleChange}
       />
       <AtInput
         required
         name='phoneNumber'
         title='电话'
         type='number'
         placeholder='请输入手机号'
         value={form.phoneNumber}
         onChange={handleChange}
       />
       <AtInput
         required
         name='address'
         title='地址'
         type='text'
         placeholder='请输入收货地址'
         value={form.address}
         onChange={handleChange}
       />
       <AtSwitch title='设为默认地址' checked={form.default} onChange={(value)=>{
         const obj = { ...form, default: value }
         setForm(obj)
       }} />
       <AtButton type='primary' onClick={()=>{
         const reg = /^1[3456789]\d{9}$/
         if(form.name===''||form.address===''){
           console.log(1)
           Taro.showToast({
             title: '姓名或地址不能为空',
             icon:'none',
             duration: 1000
           })
         }else if(!reg.test(form.phoneNumber)){
           Taro.showToast({
             title: '手机号码格式不正确',
             icon:'none',
             duration: 1000
           })
         }
         console.log(reg.test(form.phoneNumber), 'phone')
         // 派遣保存
         // editAddressP(form, addressIndex)
         // Taro.navigateBack()
       }}>保存</AtButton>
       <AtButton type='secondary'>删除</AtButton>
   </View>
  )
}
EditAddress.config = {
  navigationBarTitleText: '地址编辑'
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
    editAddressP (data,index) {
      dispatch({ type: ADDRESS.EDIT, data:data, index:index })
    }
  }
}
export default connect(stateP,dispatchP)(EditAddress)
