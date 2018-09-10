// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import '@/assets/css/element/index.scss'
import '@/assets/css/global.scss'

import GtComponents from '@/components'

import '@/router/guards.js'

import libs from './libs'

Vue.use(ElementUI)

Vue.use(GtComponents)

Vue.use(libs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
