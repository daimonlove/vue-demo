<template>
  <DragList
    @sort-start="sortStart"
    @sort-end="sortEnd"
    @sort-move="sortMove"
    @input="onInput"
    axis="xy"
    :pressDelay="100"
    class="drag-list"
    v-model="dragListData">
    <DragItem
      v-for="(item, index) in dragListData"
      :showHandle="true"
      :index="index"
      :key="index"
      :item="item"
      class="drag-item">
      <slot v-bind:row="item" v-bind:index="index">
        <span class="item-order">{{index + 1}}</span>
        <label class="item-inner">
          <span class="item-check is-checked" @click.self="handleDelete(index)"></span>
          <span class="item-txt">{{item.desc}}</span>
        </label>
      </slot>
    </DragItem>
  </DragList>
</template>

<script>
import DragList from './drag-list'
import DragItem from './drag-item'
export default {
  name: 'index',
  props: {
    dragData: {
      type: Array,
      default: _ => {
        return []
      }
    }
  },
  data () {
    return {
      dragListData: this.dragData
    }
  },
  watch: {
    dragData: function () {
      this.dragListData = this.dragData
    }
  },
  components: {
    DragItem,
    DragList
  },
  methods: {
    sortStart ({ index }) {

    },
    sortMove () {
      // movesCounter++
    },
    sortEnd ({ oldIndex, newIndex }) {
      console.log(`oldIndex=${oldIndex},newIndex=${newIndex}`)

      // movesCounter = 0
    },
    onInput (newList) {
      this.$emit('onInput', newList)
    },
    handleDelete (index) {
      this.$emit('deleteChange', this.dragListData[index].filedsName)
      this.dragListData.splice(index, 1)

      // this.$emit('onDelete', this.dragListData[index].filedsName)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .drag-list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 32px 0 30px;
  }
  .drag-item{
    display: flex;
    align-items: center;
    width: 25%;
    margin-bottom: 8px;
    box-sizing: border-box;
    /*border: 1px solid rgba(223,223,223,1);*/
    user-select: none;
    /*transition: all .3s ease;*/

    .item-order{
      display: inline-block;
      width: 20px;
      padding-right:5px;
      text-align: right;
      color: #41B4EC;
      font-size: 12px;
    }
    .item-inner{
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 24px;
      box-sizing: border-box;
    }
    .item-check{
      position: relative;
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      cursor: pointer;

      &.is-checked{
        background: #409EFF;
        border-color: #409EFF;

        &::after{
          position: absolute;
          top: 2px;
          left: 0px;
          width: 14px;
          height: 6px;
          content: '';
          border-bottom: 1.5px solid white;
          border-left: 1.5px solid white;
          box-sizing: border-box;
          transform: rotate(-46deg) scale(0.8);
          transform-origin:center;
          transition:transform .15s ease-in .05s, -webkit-transform .15s ease-in .05s
        }
      }
    }
    .item-txt{
      padding-left:10px;
    }
  }
</style>
<!--<style lang="scss" rel="stylesheet/scss">
  .el-checkbox__label{
    font-size: 12px;
  }
  .el-checkbox__input{
    line-height: normal;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label{
    color: #606266;
  }
</style>-->

<!--``````````````````````````````````````````-->
<!--自己定义列表模板-->
<!--
<template slot-scope="scope">
  <span class="item-order">{{scope.row.desc}}{{scope.index}}</span>
</template>-->
