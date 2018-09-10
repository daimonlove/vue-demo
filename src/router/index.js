import Vue from 'vue'
import Router from 'vue-router'
import navConfig from './nav.config.json'

import Layout from '@/views/layout'

Vue.use(Router)

let routerMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

let routers = {
  path: '',
  redirect: 'index',
  component: Layout,
  children: []
}
let routerNameList = []

const createRouterItem = (item) => {
  let {
    path,
    name,
    component
  } = item

  path = path || name
  component = (component || path).replace(/^\//, '')

  return {
    path: path,
    name: name,
    meta: {
      desc: item.desc,
      icon: item.icon,
      type: item.type,
      hidden: item.hidden
    },
    component: () => import(`@/views/${component.toLowerCase()}`)
  }
}

const analysisNavConfig = () => {
  for (let key of Object.keys(navConfig)) {
    // 是否有子路由
    if (!navConfig[key].children) {
      // 验证路由是否存在
      if (!checkRouter(navConfig[key])) {
        routers.children.push(createRouterItem(navConfig[key]))
      }
    } else {
      childrenMap(navConfig[key].children)
    }
  }
}

const checkRouter = (item) => {
  if (routerNameList.includes(item.name)) {
    return true
  } else {
    routerNameList.push(item.name)
    return false
  }
}
const childrenMap = (childrenList) => {
  for (let item of childrenList) {
    if (!checkRouter(item)) {
      routers.children.push(createRouterItem(item))
    }
  }
}

analysisNavConfig()
routerMap.push(routers)

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: routerMap
})
