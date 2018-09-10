
let basePath = ''

/**
 * 本地开发环境,api地址切换
 */

// 测试环境
basePath = 'http://118.178.236.160:9091/api-v1'

// 刘明
// basePath = 'http://10.50.0.62:8081/api-v1'

// 打包环境,api地址由打包服务器自动注入
if (window.HostRedirect) {
  basePath = window.HostRedirect
}

export default basePath
