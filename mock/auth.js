import Mock from 'mockjs'
import utils from './utils'
/**
 * 用户登录
 */
Mock.mock(/\/auth\/login([?.#&].*)?$/, function (options) {
  console.log(options)
  let queryOptions = utils.getRequestParams(options)
  utils.consoleRequestParams('auth/login', options)

  let response = Mock.mock({
    code: queryOptions.userName === 'admin' ? 200 : 300,
    message: queryOptions.userName === 'admin' ? '登录成功！' : '登录失败！',
    result: {
      'userId|1': ['100001', '100002', '100003'],
      'userName': queryOptions.userName,
      'lastLoginDate': new Date().getTime()
    }
  })
  console.log(response)
  return response
})

/**
 * 用户退出
 */
Mock.mock(/\/invoice\/abandonInvoiceByNo([?.#&].*)?$/, function (options) {
  let result = Mock.mock({
    'taskId|1': ['100001', '100002', '100003']
  })

  return {
    code: 1,
    message: '发票作废成功!',
    result: result
  }
})
