import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入css文件
import '@/assets/css/global.css'
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:5000/api'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
