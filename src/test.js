let _this = this;
let handleFunc = result => {
  if (result.code === 1) {
    localStorage.removeItem("operateToken");
    localStorage.removeItem("token");
    window.location.href = "./login.html";
  } else {
    _this.$message({
      type: 'error',
      showClose: true,
      message: result.message
    })
  }
}
let callback = apiCallback(handleFunc)
var XOperateToken = callback.defaultClient.authentications['X-Operation-Token'];
XOperateToken.apiKey = getOperateToken('g0101000');
apiAccount.logout(callback)

}
