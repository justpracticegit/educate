import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/css/main.css'
import '@/assets/css/mobile.css'

createApp(App).use(router).mount('#app')
