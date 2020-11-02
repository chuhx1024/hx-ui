import Vue from 'vue'
import App from './App.vue'

import HxButton from './components/button.vue'

Vue.component(HxButton.name, HxButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
