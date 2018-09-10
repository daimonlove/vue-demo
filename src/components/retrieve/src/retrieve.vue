<template>
  <div class="retrieve">
    <RetrieveContainer
      ref="RetrieveContainerRef"
      :selectNape="selectNape"
      :allNape = "allNape"
      @change="handleNapeChange"
    ></RetrieveContainer>
    <RetrieveNav
      @navClick="handleNavClick"
    ></RetrieveNav>
  </div>
</template>

<script>
import RetrieveNav from './retrieve-nav'
import RetrieveContainer from './retrieve-container'
export default {
  name: 'retrieve',

  props: {
    selectNape: Array,
    allNape: Object,
    navNape: [Array, String]
  },
  components: {
    RetrieveNav,
    RetrieveContainer
  },
  methods: {
    handleNavClick (key) {
      this.$refs.RetrieveContainerRef.changeKey(key)
    },
    handleNapeChange (val) {
      this.$emit('onChange', val)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .retrieve{
    display: flex;
    height: 350px;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
  }
</style>
