import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

if (typeof window.Vue === 'undefined') {
  throw new Error('Vue is not available in your browser.');
}

new Vue({
  render: h => h(App),
}).$mount('#app')
