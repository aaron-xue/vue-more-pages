import Vue from 'vue'
import App from './index.vue'
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
