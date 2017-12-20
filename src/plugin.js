import vstxModal from './vstxModal.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vstx-modal', vstxModal);
  }
};