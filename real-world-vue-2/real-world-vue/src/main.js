import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from '@/components/BaseIcon.vue'

// Globally register a component.
// NOTE: Must be above the creation of the new Vue instance.
Vue.component('BaseIcon', BaseIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
