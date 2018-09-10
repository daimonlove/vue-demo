<template>
  <div class="search-list_box" v-show="keyword !=''">
    <div class="zw"></div>
    <el-checkbox-group v-model="selectNape">
    <ul class="fileds_list">
      <li class="fileds_item" v-for="(item,index) of searchList" :key="index">
        <el-checkbox
          :label="item"
        >{{item.desc}}</el-checkbox>
      </li>
    </ul>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'fileds-list',
  props: {
    keyword: String,
    selectNape: Array,
    allNape: [Array, Object],
    userNape: Array
  },
  data () {
    return {
      searchList: []
    }
  },
  watch: {
    keyword: function () {
      if (this.keyword === '') {
        return []
      }
      let arr = []
      for (let key of Object.keys(this.allNape)) {
        for (let item of this.allNape[key]) {
          if (item.desc.indexOf(this.keyword) >= 0) {
            arr.push(item)
          }
        }
      }

      for (let item of this.userNape) {
        if (item.desc.indexOf(this.keyword) >= 0) {
          arr.push(item)
        }
      }
      this.searchList = arr
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .search-list_box{
    position: absolute;
    top: 0;
    left:0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 100;
  }
  .zw{
    height: 28px;
    width: 100%;
    background: #F2F2F2;
  }
  .fileds_list{
    display: flex;
    padding: 0 28px 0 38px;
    margin: 0;
    flex-wrap: wrap;
  }
  .fileds_item{
    display: flex;
    align-items: flex-start;
    width: 25%;
    padding-top: 8px;
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .fileds_item .el-checkbox__label{
    font-size: 12px;
  }
  .fileds_item .el-checkbox__input{
    line-height: normal;
  }
  .fileds_item .el-checkbox__input.is-checked + .el-checkbox__label{
    color: #606266;
  }
</style>
