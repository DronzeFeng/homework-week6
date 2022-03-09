import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios' // 需安裝才可使用VueAixos去呼叫
import VueAxios from 'vue-axios' // 本質上與axios相同，安裝起來可以使用this去呼叫axios
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
