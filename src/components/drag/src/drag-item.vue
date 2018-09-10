<template>
  <li v-if="showHandle"><slot /></li>
</template>

<script>
import {ElementMixin} from './mixins/element'

export default {
  name: 'drag-item',
  props: ['item', 'showHandle'],
  mixins: [ElementMixin]
}
</script>
