<template>
  <el-scrollbar>
    <router-view class="gt-page-component"/>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .gt-page-component{
    margin: 20px 20px 20px 0;
  }
</style>
