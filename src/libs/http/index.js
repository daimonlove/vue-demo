/*
 * @Author: liu.wei
 * @Date: 2018-06-05 14:42:20
 * @Last Modified by: liu.wei
 * @Last Modified time: 2018-07-30 11:02:42
 */

import axios from 'axios'
import Loading from 'element-ui/lib/loading'
import utils from '../utils/fun'

import basePath from './basePath'

let loadingInstance

/**
 * config axios
 *
 */
(function () {
  /* api前缀 */
  axios.defaults.baseURL = basePath

  /* 请求超时 */
  axios.defaults.timeout = 20 * 1000

  /* 请求头类型 */
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

  /* 请求拦截 */
  axios.interceptors.request.use(config => {
    let operateToken
    let operateTokenApi
    config = Object.assign({ loading: 'body' }, config)

    // loading 加载
    if (config.loading) {
      loadingInstance = Loading.service({
        target: config.loading,
        lock: true,
        text: 'Loading...'
        // background: 'rgba(0, 0, 0, 0.8)'
      })
    }

    // 设置Token 和 apiKey
    if (config.apiKey) {
      operateToken = JSON.parse(window.localStorage.getItem('operateToken'))

      if (operateToken && operateToken[config.apiKey]) {
        operateTokenApi = config.apiKey + ':' + operateToken[config.apiKey]
        config.headers = {
          'X-Access-Token': window.localStorage.getItem('token'),
          'X-Operation-Token': operateTokenApi
        }
      }
    }
    // 添加全局参数
    /* if (config.method === 'post') {

    } */
    return config
  })

  /* 响应拦截 */
  axios.interceptors.response.use(response => {
    if (loadingInstance) { loadingInstance.close() }
    return response.data
  }, error => {
    if (loadingInstance) { loadingInstance.close() }
    if (error.response) {
      switch (error.response.status) {
        case 401:
          utils.showMsg('授权失败，请重新登录！', 'error')
          break
        case 403:
          utils.showMsg('禁止访问！', 'error')
          break
        case 404:
          utils.showMsg('未找到地址！', 'error')
          break
        case 500:
          utils.showMsg('服务器错误，请稍后再试！', 'error')
          break
        case 504:
          utils.showMsg('请求超时，请稍后再试！', 'error')
          break
      }

      return Promise.reject(error.response.data)
    }
  })
})()

/**
 * get封装
 * @param {String} url
 * @param {Object} params
 * @param {Object} config
 */
const get = (url, params, config = {}) => {
  let conf = Object.assign({
    url,
    method: 'get',
    params: params
  }, config)
  return ajax(conf)
}

/**
 * post封装
 * @param {String} url
 * @param {Object} data
 * @param {Object} config
 */
const post = (url, data, config) => {
  let conf = Object.assign({
    url,
    method: 'post',
    data: data
  }, config)
  return ajax(conf)
}

/**
 *
 * @param {Object} config
 */
const ajax = (config) => {
  return axios(config).then(response => {
    return _none(response)
  }).catch(e => {
    // 添加err属性
    e.err = 'server'
    return e
  })
}

/**
 * 错误code处理
 * @param {Object} respnose
 */
const _none = (response) => {
  // 在此处理后台反馈的错误码
  if (Number(response.code) === 1) {
    return Promise.resolve(response)
  } else {
    utils.showMsg(response.message, 'warning')
    response.err = 'code'
    return Promise.reject(response)
  }
}

export default {
  get,
  post,
  ajax
}
