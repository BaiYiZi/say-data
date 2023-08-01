import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from './router'
// import ElementUI from 'element-plus';
// import 'element-ui/lib/theme-chalk/index.css';
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
