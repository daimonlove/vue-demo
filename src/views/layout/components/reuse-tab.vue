<template>
  <el-tabs
    v-model="activeName"
    :closable="closable"
    type="card"
    @tab-click="handleTabClick"
    @tab-remove="removeHistoryPage"
  >
    <el-tab-pane
      v-for="item in historyPage"
      :key="item.name"
      :label="item.meta.desc"
      :name="item.name"
      :path="item.path"
    >
      <!--<span slot="label"><router-link :to="item.path">{{item.meta.desc}}</router-link></span>-->
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'ReuseTab',
  data () {
    return {
      activeName: '',
      closable: false
    }
  },
  computed: {
    ...mapState([
      'historyPage'
    ])
  },
  created () {
    this.activeName = this.$store.state.currentPage
  },
  methods: {
    handleTabClick (target) {
      if (this.$store.state.currentPage !== target.name) {
        this.$router.push(target.$attrs.path)
      }
    },
    ...mapActions([
      'removeHistoryPage'
    ])
  },
  watch: {
    historyPage: function () {
      this.activeName = this.$store.state.currentPage
      this.closable = this.historyPage.length > 1
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../assets/css/index";
  .gt-reuse-tab{
    &.el-tabs--border-card{
      box-shadow: none;
      & > .el-tabs__content{
        padding: 0;
        opacity: 0;
      }
    }
    .el-tabs__header{
      margin: 6px 10px;
    }
    & > .el-tabs__header{
      border: 0;
      .el-tabs__nav{
        border: 0;
      }
      .el-tabs__item{
        border-left: 0;
        font-weight: 400;
        &.is-active{
          border-bottom: 2px solid $--color-base;
          color: $--color-base;
        }
      }
    }
    .el-tabs__nav-next, .el-tabs__nav-prev{
      font-size: $--font-size-base;
    }
  }
</style>
