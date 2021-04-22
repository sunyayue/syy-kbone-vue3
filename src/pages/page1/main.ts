import { createApp } from 'vue'
import App from './App.vue'

// 需要将创建根组件实例的逻辑封装成方法
console.log('page1')
window.VUE_APP_MP = ''
createApp(App).mount('#app')
