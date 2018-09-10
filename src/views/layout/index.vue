<template>
  <div class="gt-wrapper" :class="{'gt-aside-collapsed':asideCollapsed}">
    <layout-header class="gt-header"></layout-header>
    <layout-sidebar class="gt-sidebar"></layout-sidebar>
    <section class="gt-container">
      <reuse-tab class="gt-reuse-tab"></reuse-tab>
      <layout-page class="gt-page-content__scroll"></layout-page>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import LayoutHeader from './components/layout-header'
import LayoutSidebar from './components/layout-sidebar'
import ReuseTab from './components/reuse-tab'
import LayoutPage from './components/layout-page'

export default {
  name: 'layout',
  components: {
    LayoutHeader,
    LayoutSidebar,
    ReuseTab,
    LayoutPage
  },
  computed: {
    ...mapState(['asideCollapsed'])
  },
  methods: {

  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "layout";
</style>
