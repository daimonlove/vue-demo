<template>
  <header>
    <div class="logo">
      <img src="http://ogbftyapv.bkt.clouddn.com/logo_new.png">
    </div>
    <div class="gt-top-nav-wrap">

      <ul class="gt-top-nav">
        <li @click="NAV_TOGGLE">
          <div class="gt-item">
            <i
              :class="asideCollapsed ? 'icon-menu-fold' : 'icon-menu-unfold'"></i>
          </div>
        </li>
        <li @click="LOCK_SYSTEM">
          <div class="gt-item">
            <i class="icon-lock"></i>
          </div>
        </li>
        <li @click="handleScreenFull">
          <div class="gt-item">
            <i class="icon-screen-full"></i>
          </div>
        </li>
      </ul>

      <ul class="gt-top-nav">
        <li>
          <div class="gt-item">
            <el-badge :value="3" class="item">
              <i class="el-icon-bell"></i>
            </el-badge>
          </div>
        </li>
        <li>
          <div class="gt-item">
            <i
              class="icon-setting"></i>
          </div>
        </li>
        <li>
          <div class="gt-item">
            <i
              class="el-icon-menu"></i>
          </div>
        </li>
        <li>
          <div class="gt-item is-pd8">
            <el-dropdown>
              <div class="gt-avatar-wrapper">
                <img src="../../../assets/imgs/avatar.jpg">
                <span class="el-dropdown-link">
                  admin
                </span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import screenfull from 'screenfull'

export default {
  name: 'LayoutHeader',
  computed: {
    ...mapState([
      'asideCollapsed'
    ])
  },
  methods: {
    ...mapMutations([
      'NAV_TOGGLE',
      'LOCK_SYSTEM'
    ]),
    handleScreenFull () {
      screenfull.toggle()
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../assets/css/index";

  .logo {
    width: 200px;
    height: 27px;
    margin-left: -16px;
    transition: width .2s cubic-bezier(.25, 0, .15, 1);
    text-align: center;
    img {
      max-width: 100px;
    }
  }

  @include b(top-nav-wrap) {
    display: flex;
    flex: 1;
    justify-content: space-between;
    color: $--color-white;
  }

  @include b(top-nav) {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    & > li {
      vertical-align: middle;
    }
    @include b(item){
      display: block;
      padding: 8px 2px;
      min-width: 50px;
      border-radius: 2px;
      text-align: center;
      line-height: 100%;
      transition: background-color .3s;
      cursor: pointer;
      outline: 0;

      &:hover{
        background-color: rgba(255,255,255,.2);
      }

      i {
        font-size: 18px;
        line-height: 100%;
      }

      @include when(pd8){
        padding-left: 8px !important;
        padding-right: 8px !important;
      }

    }
    .el-dropdown{
      color: $--color-white;
    }
  }
  @include b(avatar-wrapper){
    display: flex;
    align-items: center;
    img{
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border-radius: 12px;
      background: $--color-gray;
      line-height: 24px;
      vertical-align: middle;
      border-style: none;
      border: 0;
    }
  }
</style>
