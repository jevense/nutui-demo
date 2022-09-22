import { createApp } from 'vue'
import {createPinia} from 'pinia'
import {
  Tabbar, TabbarItem,
  SearchBar,
  Icon,
  Button,
  Swiper, SwiperItem,
  Grid, GridItem,
  NoticeBar,
  CountDown,
  Price,
  BackTop
} from '@nutui/nutui-taro';

import './app.scss'

// 创建 pinia 实例
const pinia = createPinia()

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(pinia)
   .use(Tabbar)
   .use(TabbarItem)
   .use(SearchBar)
   .use(Icon)
   .use(Button)
   .use(Swiper)
   .use(SwiperItem)
   .use(Grid)
   .use(GridItem)
   .use(NoticeBar)
   .use(CountDown)
   .use(Price)
   .use(BackTop)

export default App