<template>
  <el-menu
    :default-active="activeIndex"
    :class="className"
    :collapse="asideCollapsed"
    mode="vertical"
  >
    <template v-for="(item,key) of navList" v-if="!item.hidden">
      <el-menu-item :key="key" :index="key" v-if="!item.children && !item.hidden">
        <router-link :to="item.path ? item.path : item.name"><i :class="item.icon"></i><span>{{item.desc}}</span></router-link>
      </el-menu-item>
      <el-submenu :key="key" :index="key" v-else-if="!item.hidden">
        <template slot="title"><i :class="item.icon"></i><span>{{item.desc}}</span></template>
        <el-menu-item
          v-for="(child,key2) in item.children"
          :key="key+key2+child.name"
          :index="key+key2+child.name"
        >
          <router-link :to="child.path ? child.path : child.name"><span>{{child.desc}}</span></router-link>
        </el-menu-item>

      </el-submenu>
    </template>

  </el-menu>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'AsideNav',
  props: {
    activeIndex: {
      default: 'index',
      type: String
    },
    className: String
  },
  data () {
    return {
      navList: require('@/router/nav.config.json')
    }
  },
  computed: {
    ...mapState([
      'asideCollapsed'
    ])
  }
}
</script>
