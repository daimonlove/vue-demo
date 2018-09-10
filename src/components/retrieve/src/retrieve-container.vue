<template>
  <div class="retrieve-container">
    <div ref="innerRef" class="retrieve-container_inner">
      <el-checkbox-group v-model="checkList">
        <template v-for="(nape,key) of allNape">
          <div :ref="key+'Ref'" class="retrieve-container-group" :key="key">
            <h1 class="retrieve-container_tag">{{key}}</h1>
            <ul class="retrieve-container_list">
              <li class="retrieve-container_item" v-for="(item, index) of nape" :key="index">
                <el-checkbox
                  :label="item"
                  :disabled = "checkList.length<=minNape && checkList.includes( item)"
                  @change="handleChange"
                >{{item.desc}}</el-checkbox>
              </li>
            </ul>
          </div>
        </template>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'retrieve-container',
  props: {
    selectNape: {
      type: Array,
      default: _ => {
        return []
      }
    },
    allNape: Object
  },
  data () {
    return {
      minNape: 1,
      checkList: this.selectNape,
      refsOffset: []
    }
  },
  watch: {
    selectNape: function () {
      this.checkList = this.selectNape
    }
  },
  mounted () {
    /* 计算各节点在位置 */
    let refs = this.$refs
    for (let item of Object.keys(refs)) {
      if (item !== 'innerRef') {
        this.refsOffset.push({
          key: item.toString(),
          top: this.$refs[item][0].offsetTop
        })
        console.log(this.$refs[item][0].offsetTop)
      }
    }
  },
  methods: {

    handleChange (start) {
      this.$emit('change', start, this.checkList)
    },
    changeKey (key) {
      let top = this.getKeyTop(key)
      this.scrollAnimate(top)
    },
    scrollAnimate (top) {
      let _this = this
      let node = this.$refs.innerRef
      let timer = setTimeout(function () {
        let currentY = node.scrollTop
        let step = 10
        if (top > currentY) {
          let dist = Math.ceil((top - currentY) / step)
          let nextY = currentY + dist

          if (nextY < top && nextY <= node.scrollHeight - 350) {
            node.scrollTo(0, nextY)
            _this.scrollAnimate(top)
          } else {
            node.scrollTo(0, top)
            clearTimeout(timer)
          }
        } else {
          let dist = Math.floor((top - currentY) / step)
          let nextY = currentY + dist
          if (nextY > top) {
            node.scrollTo(0, nextY)
            _this.scrollAnimate(top)
          } else {
            node.scrollTo(0, top)
            clearInterval(timer)
          }
        }
      }, 1)
    },
    getKeyTop (key) {
      let refKey = `${key}Ref`
      let top = null
      for (let item of this.refsOffset) {
        if (item.key === refKey) {
          top = item.top
        }
      }

      if (top) {
        return top
      } else {
        let nextKey = key.charCodeAt() + 1
        if (nextKey <= 90) {
          return this.getKeyTop(String.fromCharCode(nextKey))
        } else {
          return this.refsOffset[this.refsOffset.length - 1].top
        }
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .retrieve-container{
    flex:1;
    height: 100%;
  }
  .retrieve-container_inner{
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(216, 216, 216, 1);
      background: rgba(216, 216, 216, 1);
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0);
      border-radius: 0;
      background: rgba(0,0,0,0);
    }
  }
  .retrieve-container-group{
    padding-bottom: 12px;
  }
  .retrieve-container_tag{
    width: 100%;
    height: 28px;
    padding-left: 38px;
    margin: 0;
    line-height: 28px;
    box-sizing: border-box;
    background: #F2F2F2;
    font-size: 12px;
    font-weight: 500;
    color: #bfbfbf;
  }
  .retrieve-container_list{
    display: flex;
    padding: 0 0 0 38px;
    margin: 0;
    flex-wrap: wrap;
  }
  .retrieve-container_item{
    display: flex;
    align-items: center;
    width: 25%;
    padding-top: 12px;
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .retrieve-container_item .el-checkbox__label{
    font-size: 12px;
  }
  .retrieve-container_item .el-checkbox__input{
    line-height: normal;
  }
  .retrieve-container_item .el-checkbox__input.is-checked + .el-checkbox__label{
    color: #606266;
  }
</style>
