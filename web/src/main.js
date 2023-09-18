import './assets/main.css'
import './assets/font/font.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from "element-plus";
import 'element-plus/dist/index.css';

import mitt from 'mitt'

const app = createApp(App)
// 全局事件总线
app.config.globalProperties.$bus = new mitt()

app.use(Element)
app.use(router)

app.mount('#app')
