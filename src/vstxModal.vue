<template lang="pug">
.modal(:class="{ 'is-active': isVisible }")
  template(v-if="modalType === 'default'")
    .modal-background(@click.passive="toggleIsVisible")
    .modal-content.box.is-scrollable-y
      slot
    button.modal-close.is-large(@click.passive="toggleIsVisible")
  template(v-else-if="modalType === 'card'")
    .modal-background(@click.passive="toggleIsVisible")
    .modal-card
      header.modal-card-head
        slot(name="header")
          p.modal-card-title {{ title }}
          button.delete(aria-label="close", @click.passive="toggleIsVisible")
      section.modal-card-body
        slot(name="body")
      footer.modal-card-foot
        slot(name="footer")
          button.button.is-success(@click.passive="$emit('modalSaveChanges')") Save Changes
          button.button(@click.passive="toggleIsVisible") Cancel
</template>

<script>
export default {
  name: 'VModal',
  props: {
    modalType: {
      type: String,
      required: false,
      default: 'default'
      // modalType: Card would render the Bulma Card Modal
    },
    isVisible: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
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
