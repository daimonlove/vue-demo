export default {
  NAV_TOGGLE (state) {
    state.asideCollapsed = !state.asideCollapsed
  },
  LOCK_SYSTEM (state) {
    state.lockSystem = !state.lockSystem
  },
  HISTORY_PAGE (state, val) {
    // state.historyPage.splice(0, 0, val).reverse()
    state.historyPage = val
  },
  CURRENT_PAGE (state, val) {
    state.currentPage = val
  }
}
