import Retrieve from './src/retrieve'
import RetrieveAdd from './src/retrieve-add'
Retrieve.install = (Vue) => {
  Vue.component(Retrieve.name, Retrieve)
}
RetrieveAdd.install = (Vue) => {
  Vue.component(RetrieveAdd.name, RetrieveAdd)
}

export {
  Retrieve,
  RetrieveAdd
}
