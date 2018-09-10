import FiledsControll from './src/fileds-controll'
import FiledsList from './src/fileds-list'
FiledsControll.install = (Vue) => {
  Vue.component(FiledsControll.name, FiledsControll)
}

FiledsList.install = (Vue) => {
  Vue.component(FiledsList.name, FiledsList)
}
export {
  FiledsControll,
  FiledsList
}
