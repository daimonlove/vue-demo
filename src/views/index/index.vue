<template>
  <div style="background: #fff;">
    <FiledsControll
      @search = "handleSearch"
    ></FiledsControll>
    <DragSort
      :dragData="initFileds"
      @onInput="onInput"
      @onDelete="onDelete"
    ></DragSort>
    <div style="position:relative;">
      <Retrieve
        @onChange="onChange"
        :selectNape = "initFileds"
        :navNape = "filedsKey"
        :allNape = "allFileds"></Retrieve>
      <RetrieveAdd
        :selectNape="initFileds"
        @userCustomChange="onChange"
        @otherNape = "getOtherNape"
      ></RetrieveAdd>
      <FiledsList
        :keyword="keyword"
        :selectNape="initFileds"
        :allNape="allFileds"
        :userNape = "userNape"
      ></FiledsList>
    </div>

  </div>
</template>

<script>
import {DragSort} from '@/components/drag/'
import {Retrieve, RetrieveAdd} from '@/components/retrieve'
import {FiledsControll, FiledsList} from '@/components/fileds-controll'

let initFileds = [
  {filedsName: 'invoiceCode', desc: '发票代码', checked: true},
  {filedsName: 'invoiceNumber', desc: '发票号码', checked: true},
  {filedsName: 'invoiceType', desc: '发票类型', checked: true},
  {filedsName: 'invoiceDate', desc: '开票日期', checked: true},
  {filedsName: 'outCompany', desc: '销方公司名称', checked: true},
  {filedsName: 'outInvoiceId', desc: '销方税号', checked: true},
  {filedsName: 'enterCompany', desc: '购方公司名称', checked: true},
  {filedsName: 'enterInvoiceId', desc: '购方税号', checked: true},
  {filedsName: 'taxAmount', desc: '税额', checked: true},
  {filedsName: 'inTaxAmount', desc: '含税金额', checked: true},
  {filedsName: 'unTaxAmount', desc: '不含税金额', checked: true}
]
let filedsKey = 'ABCDEFGHIJKLMNOPQRUVWX'
function createList () {
  let obj = {}
  for (let key of filedsKey) {
    obj[key] = []
    for (let i = 0; i <= 10; i++) {
      obj[key].push({filedsName: `${key}${i}`, desc: `${key}${i}`, checked: false})
    }
  }
  obj.A = obj.A.concat(initFileds)
  return obj
}
let allFileds = createList()
export default {
  name: 'index',
  data () {
    return {
      initFileds: initFileds,
      allFileds: allFileds,
      filedsKey: filedsKey,
      keyword: '',
      userNape: []
    }
  },
  components: {
    DragSort,
    Retrieve,
    RetrieveAdd,
    FiledsControll,
    FiledsList
  },
  methods: {
    onInput (newList) {
      this.initFileds = newList
      console.log(this.selectNape)
    },
    onChange (newList) {
      this.initFileds = newList
      this.initFileds.reverse().reverse()
    },
    onDelete (key) {
      for (let i = 0; i < this.initFileds.length; i++) {
        if (this.initFileds[i].filedsName === key) {
          this.initFileds.splice(i, 1)
          return
        }
      }
    },
    handleSearch (keyword) {
      this.keyword = keyword
    },
    userCustomChange (state, newList) {

    },
    getOtherNape (newList) {
      this.userNape = newList
    }
  }
}
</script>
