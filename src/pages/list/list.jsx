import {View, Text, Image} from '@tarojs/components'
import { useState } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './list.scss'
import GoodsOne from '../../components/goods/goodsOne'
const List = (props) => {
  const [ current, setCurrent ] = useState(0)
    return (
    <View className='list'>
      <AtTabs
        current={current}
        scroll
        height='100%'
        tabDirection='vertical'
        tabList={[
          { title: '标签页1' },
          { title: '标签页2' },
          { title: '标签页3' },
          { title: '标签页4' },
          { title: '标签页5' },
          { title: '标签页6' },
        ]}
        onClick={(value)=>{
          console.log(value)
          setCurrent(value)
        }}>
        <AtTabsPane tabDirection='vertical' current={current} index={0}>
          <View style='font-size:18px;text-align:center;height:200px;'>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
            <GoodsOne/>
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={current} index={1}>
          <View style='font-size:18px;text-align:center;height:200px;'>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
            <GoodsOne priceType={'2'}/>
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={current} index={2}>
          <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={current} index={3}>
          <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={current} index={4}>
          <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={current} index={5}>
          <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
    )
}
List.config = {
  navigationBarTitleText: '分类'
}
export default List
