<template>

  <el-scrollbar wrapClass="gt-scrollbar">
    <div class="gt-left-nav">
      <aside-nav class="gt-left-menu"></aside-nav>
    </div>
  </el-scrollbar>

</template>

<script>
import AsideNav from './aside-nav'

export default {
  name: 'LayoutSidebar',
  components: {AsideNav},
  data () {
    return {
      activeIndex: ''
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../assets/css/index";

  @include b(left-nav) {
    padding: 20px 0;
    .el-menu--collapse>li{
      margin: 20px 0;
      i{
        font-size:24px;
      }
    }
    .el-menu-item{
      font-size:16px;
    }
    .el-menu{
      border-right: 0;
    }
    .gt-left-menu {
      & > li {
        border-left: 2px solid $--color-white;
      }
      & > .is-active {
        border-left: 2px solid $--color-base;
        .el-submenu__title{
          color: $--link-color-hover;
          i{
            color: $--link-color-hover;
          }
        }
      }
      .el-submenu__title:hover{
        color: $--link-color-hover;
        i{
          color: $--link-color-hover;
        }
      }
      a{
        display: block;

        &:hover{
          i{
            color: $--link-color-hover;

          }
        }
        &.router-link-active{
          i{
            color: $--link-color-hover;
          }
        }
      }
      i{
        display: inline-block;
        min-width: 14px;
        padding-right: 8px;
        font-size:16px;
        transition: font-size.2s cubic-bezier(.25, 0, .15, 1), translate .2s cubic-bezier(.25, 0, .15, 1);
      }
      span{
        display: inline-block;
      }

    }

  }

</style>
