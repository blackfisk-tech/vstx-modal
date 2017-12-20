<template lang="pug">
.modal(:class="{ 'is-active': isVisible }")
  .modal-background(@click.passive="toggleIsVisible")
  .modal-content.box.is-scrollable-y 
    slot
  button.modal-close.is-large(@click.passive="toggleIsVisible")
</template>

<script>
export default {
  name: 'VModal',
  props: {
    isVisible: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    toggleIsVisible () {
      this.$emit('toggleIsVisible')
    }
  }
}
</script>
