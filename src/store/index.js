import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import cart from './modules/cart'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// global state
const state = {
  asideCollapsed: false, // 左侧菜单是否收缩
  lockSystem: false, // 是否锁定系统
  historyPage: [], // 历史已打开router
  currentPage: '' // 当前是哪一页
}

const modules = {
  cart
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  modules,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
