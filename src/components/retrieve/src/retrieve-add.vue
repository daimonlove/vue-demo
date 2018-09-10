<template>
  <div class="retrieve-add">
    <el-checkbox-group v-model="checkList">
    <ul class="retrieve-add_list">
      <li
        class="retrieve-add_item"
        v-for="(item,index) of napeList" :key="index">
        <el-checkbox
          :label="item"
          @change="handleChange"
        >{{item.desc}}</el-checkbox>
        <span class="icon-delete" @click="handleDelete(index)"></span>
      </li>

      <li class="retrieve-add_item" v-show="!addStart" @click="handleAddShow">
        <span class="icon-add"></span>添加自定义类
      </li>
      <li class="retrieve-add_item add-form" v-show="addStart">
        <input ref="addInputRef" class="add-input" v-model.trim="fileds.filedsName" :maxlength="10" placeholder="请输入列名"/> -
        <input class="add-input" v-model.trim="fileds.val" :maxlength="20" placeholder="请输入内容"/>
        <span class="add-btn is-save" @click="handleSave">保存</span>
        <span class="add-btn is-cancle" @click="handleCancle">取消</span>
      </li>
    </ul>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'retrieve-add',
  props: {
    selectNape: Array
  },
  data () {
    return {
      napeList: [],
      checkList: this.selectNape,
      addStart: false,
      fileds: {
        filedsName: '',
        desc: '',
        val: '',
        checked: false
      }
    }
  },
  methods: {
    handleChange (state) {
      this.$emit('userCustomChange', this.checkList)
    },
    handleDelete (index) {
      let key = this.napeList[index].filedsName
      this.napeList.splice(index, 1)
      for (let i = 0; i < this.checkList.length; i++) {
        if (this.checkList[i].filedsName === key) {
          this.checkList.splice(i, 1)
          this.$emit('userCustomChange', this.checkList)
          return
        }
      }
    },
    handleAddShow () {
      this.addStart = true
      let _this = this
      setTimeout(function () {
        _this.$refs.addInputRef.focus()
      }, 0)
    },
    handleCancle () {
      this.addStart = false
      this.cancleForm()
    },
    handleSave () {
      if (this.fileds.filedsName === '') {
        this.$message({
          type: 'warning',
          message: '请输入列名！'
        })
      }
      this.fileds.desc = this.fileds.filedsName
      this.napeList.push(this.fileds)
      this.addStart = false
      this.cancleForm()
      this.$emit('otherNape', this.napeList)
    },
    cancleForm () {
      this.fileds = {
        filedsName: '',
        desc: '',
        val: '',
        checked: false
      }
    }
  },
  watch: {
    selectNape: function () {
      this.checkList = this.selectNape
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .retrieve-add_list{
    display: flex;
    padding: 0 38px;
    margin: 10px 0;
    flex-wrap: wrap;
  }
  .retrieve-add_item{
    display: flex;
    align-items: center;
    width: 25%;
    padding-top: 8px;
    font-size: 12px;
    &:hover{
      cursor: pointer;
      .icon-add{
        background: #409EFF;
      }
    }
  }
  .icon-delete{
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 8px;
    border-radius: 50%;
    background: #EC4141;
    cursor: pointer;

    &::after{
      position: absolute;
      top:7px;
      left:3px;
      content: '';
      width: 10px;
      height: 2px;
      background-color: #fff;

    }
  }

  .icon-add{
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    background: #D8D8D8;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;

    &:before{
      content: '';
      position: absolute;
      width: 12px;
      height: 2px;
      left: 50%;
      top: 50%;
      margin-left: -6px;
      margin-top: -1px;
      background-color: #fff;
    }
    &:after{
      content: '';
      position: absolute;
      width: 2px;
      height: 12px;
      left: 50%;
      top: 50%;
      margin-left: -1px;
      margin-top: -6px;
      background-color: #fff;
    }
  }

  .add-form{
    width: 100%;
    .add-input{
      width: 80px;
      height: 20px;
      padding: 0 5px;
      box-sizing: border-box;
      border: 1px solid #bfbfbf;
      outline: none;
    }
  }

  .add-btn{
    cursor: pointer;
    display: inline-block;
    margin-left: 10px;

    &.is-save{
      color: #41B4EC;
      &:hover{
        color: darken(#41B4EC,20%);
      }
    }

    &.is-cancle{
      color: #909399;
      &:hover{
        color: darken(#909399,20%);
      }
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .retrieve-add_item .el-checkbox__label{
    font-size: 12px;
  }
  .retrieve-add_item .el-checkbox__input{
    line-height: normal;
  }
  .retrieve-add_item .el-checkbox__input.is-checked + .el-checkbox__label{
    color: #606266;
  }
</style>
