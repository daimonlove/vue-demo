<template>
    <div class="fileds-controll">
      <div class="fileds-controll_head">
        <h1 class="fileds-title">导出发票列表<span>(*按住选项可拖动排序)</span></h1>
        <div class="fileds-search">
          <input
            class="fileds-search_input"
            v-model.trim="keyword"
            maxlength="20"
            @input="handleSearch"
            placeholder="搜索导出项关键字"/>
          <span class="icon-cancle" v-show="keyword !=''" @click="handleCancle"><cite>X</cite></span>
        </div>
        <div class="fileds-handle">
          <a href="javascript:;" class="btn">保存自定义</a>
          <a href="javascript:;" class="btn">恢复默认</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'fileds-search',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    handleSearch () {
      this.$emit('search', this.keyword)
    },
    handleCancle () {
      this.keyword = ''
      this.$emit('search', this.keyword)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .fileds-controll{
    position: relative;
    padding: 20px 38px 15px;
    border-bottom: 1px solid #dfdfdf;
    z-index: 10;
  }
  .fileds-controll_head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fileds-title{
    font-size: 14px;
    color: #5A5B5D;
    font-weight: 500;
    padding: 0;
    margin: 0;
    span{
      font-size: 12px;
      color: #9B9B9B;
    }
  }
  .fileds-search{
    position: relative;
    flex:1;
    margin: 0 20px;
  }
  .fileds-search_input{
    width: 150px;
    height: 30px;
    padding: 0 28px 0 10px;
    line-height: 30px;
    border: 1px solid #BFBFBF;
    box-sizing: border-box;
    font-size: 12px;
    outline: none;
  }

  .btn{
    cursor: pointer;
    display: inline-block;
    margin-left: 10px;
    color: #41B4EC;
    font-size: 12px;
    &:hover{
      color: darken(#41B4EC,20%);
    }
  }

  .icon-cancle{
    display: inline-block;
    position: relative;
    right: 24px;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    background: #D8D8D8;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    line-height: 14px;
    cite{
      font-size: 12px;
      transform: scale(.7);

      color: #979797;
      font-style:normal;
    }
    /*
    &:before{
      content: '';
      position: absolute;
      width: 10px;
      height: 1px;
      left: 50%;
      top: 50%;
      margin-left: -5px;
      margin-top: -1px;
      background-color: #979797;
      transform: rotateX(10deg);
    }
    &:after{
      content: '';
      position: absolute;
      width: 1px;
      height: 10px;
      left: 50%;
      top: 50%;
      margin-left: -1px;
      margin-top: -5px;
      background-color: #979797;
      transform: rotateX(10deg);
    }*/
  }
</style>
