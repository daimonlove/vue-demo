import utils from '@/libs/utils'
import router from '@/router'

export default {
  setHistoryPage ({commit, state}, to) {
    let val = {
      path: to.path,
      name: to.name,
      meta: to.meta
    }
    if (utils.lightContrast(state.historyPage, to, 'name') === -1) {
      let arr = state.historyPage.concat()
      arr.push(val)
      commit('HISTORY_PAGE', arr)
    }

    commit('CURRENT_PAGE', val.name)
  },
  removeHistoryPage ({commit, state}, targetName) {
    let nextTab
    let listPage = state.historyPage
    if (state.currentPage === targetName) {
      listPage.forEach((item, index) => {
        if (item.name === targetName) {
          nextTab = listPage[index + 1] || listPage[index - 1]
          if (nextTab) {
            router.push(nextTab.path)
          }
        }
      })
    }
    let historyPage = listPage.filter(item => item.name !== targetName)
    if (historyPage.length) {
      commit('HISTORY_PAGE', historyPage)
    }
  }
}
