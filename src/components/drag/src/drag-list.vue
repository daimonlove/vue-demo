<template>
  <ul>
    <slot />
  </ul>
</template>

<script>
import {ContainerMixin} from './mixins/container'
export default {
  name: 'drag-list',
  mixins: [ContainerMixin]
}
</script>
