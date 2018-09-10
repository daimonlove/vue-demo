export const ElementMixin = {
  inject: ['manager'],
  props: {
    index: {
      type: Number,
      required: true
    },
    collection: {
      type: [String, Number],
      default: 'default'
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (!this.disable) {
      // console.log(this.manager)
      this.setDraggable(this.collection, this.index)
    }
  },
  watch: {
    index (newIndex) {
      if (this.$el && this.$el.sortableInfo) {
        this.$el.sortableInfo.index = newIndex
      }
    },
    disabled (isDisabled) {
      if (isDisabled) {
        this.removeDraggable(this.collection)
      } else {
        this.setDraggable(this.collection, this.index)
      }
    },
    collection (newCollection, oldCollection) {
      this.removeDraggable(oldCollection)
      this.setDraggable(newCollection, this.index)
    }
  },
  beforeDestroy () {
    if (!this.disable) {
      this.removeDraggable(this.collection)
    }
  },
  methods: {
    setDraggable (collection, index) {
      const node = this.$el

      node.sortableInfo = {
        index,
        collection,
        manager: this.manager
      }

      this.ref = {node}
      this.manager.add(collection, this.ref)
    },
    removeDraggable (collection) {
      this.manager.remove(collection, this.ref)
    }
  }
}
