import Vue from 'vue'
import App from './App.vue'
import VueLayers from 'vuelayers'
import router from './router'
import store from './store'
import 'vuelayers/lib/style.css' 
import Header from './components/Header'
Vue.config.productionTip = false
Vue.use(VueLayers)
Vue.component('app-header',Header)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
