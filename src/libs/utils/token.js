import Cookie from 'js-cookie'
import Config from '@/config'

/**
 * 设置Cookie
 * @param key
 * @param value
 * @param options
 */
const setToken = (key, value, options) => {
  let opts = Object.assign({}, Config.cookie, options)
  return Cookie.set(key, value, opts)
}

/**
 * 获取Cookie
 * @param key
 * @returns {*}
 */
const getToken = (key) => {
  return key ? Cookie.get(key) : Cookie.get()
}

/**
 * 删除Cookie
 * @param key
 */
const removeToken = (key) => {
  return Cookie.remove(key)
}

export default {
  setToken,
  getToken,
  removeToken
}
