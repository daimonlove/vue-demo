<template>
  <div class="retrieve-nav">
    <span
      class="retrieve-nav-item"
      v-for="(key,index) of navList"
      :key="index"
      @click="handleKey(key)"
      >{{key}}</span><!--:class="{'is-checked': key===lastKey}"-->
  </div>
</template>

<script>
export default {
  name: 'retrieve-nav',
  props: {
    navNape: Array
  },
  computed: {
    navList: _ => {
      /* 右侧导航关键字 ,不传默认显示A-Z */
      return this.navNape ? this.navNape : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
  },
  data () {
    return {
      /* 最后点击的key */
      lastKey: 'A'
    }
  },
  methods: {
    handleKey (key) {
      if (this.lastKey === key) {
        return
      }
      this.lastKey = key
      this.$emit('navClick', key)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .retrieve-nav{
    width: 32px;
    height: 100%;
    background: #E1F6FF;
    padding-top: 5px;
    box-sizing: border-box;

    .retrieve-nav-item{
      display: block;
      height: 13px;
      line-height: 13px;
      text-align: center;
      color: #9B9B9B;
      font-size: 12px;
      transform: scale(.9);
      cursor: pointer;
      transition: all .3s;

      &.is-checked{
        background: #E1F6FF;
        color: #000;
      }
    }
  }
</style>
