import Vue from 'vue'
import App from './App.vue'
import htmlToPdf from '@/utils/htmlToPdf';
import * as echarts from 'echarts';//建议按需导入，不会占用项目太多资源
Vue.prototype.$echarts = echarts;
// 使用 Vue.use() 方法就会调用工具方法中的install方法
Vue.use(htmlToPdf);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
