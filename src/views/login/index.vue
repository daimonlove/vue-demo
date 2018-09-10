<template>
  <div class="gt-login-bg">
    <div class="gt-login">
      <h1 class="gt-login__title">税局管理系统</h1>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="ruleForm"
        autoComplete="off"
      >
        <el-form-item prop="userName">
          <el-input
            class="gt-login__input"
            v-model="loginForm.userName"
            placeholder="Username"
            autoComplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="gt-login__input"
            type="password"
            v-model="loginForm.password"
            placeholder="Password"
            autoComplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="gt-login__btn"
            :loading="loading"
            @click="handleLogin"
            plain
          >Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      loginForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名！', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码！', trigger: 'blur'},
          {min: 6, message: '密码输入错误！', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async handleLogin () {
      this.loading = true

      try {
        let res = await this.$api.auth.login(this.loginForm, {
          loading: null
        })

        this.$utils.setToken('gtAdmin', res.result)
        this.loading = false
        this.$router.push('/index')
      } catch (e) {
        this.$message({
          showClose: true,
          message: e,
          type: 'error'
        })
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "./login";
</style>
