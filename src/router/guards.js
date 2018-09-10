import store from '../store'

import router from './index'

/* 全站级加载条 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import token from '@/libs/utils/token'
/**
 * NProgress配置
 * showSpinner:false <Boolean>显示、隐藏进度环
 * trickleRate:0.02 <Number>每次步进增长多少
 * trickleSpeed: 500 <Number>步进间隔，单位毫秒ms
 * parent:'#container' <String> 指定NProgress生成代码的父级元素，默认为：body
 * minimum:0.1 <Number> 通过 minimum 来修改最小百分比
 */
NProgress.configure({showSpinner: false})

// 免登录名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  let gtAdmin = token.getToken('gtAdmin')
  if (gtAdmin) {
    store.dispatch('setHistoryPage', to)
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      NProgress.done()
      next('/login')
    }
  }
})

router.afterEach(_ => {
  NProgress.done()
})
