import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/display.css';


Vue.use(ElementUI);

//引入router实例
import router from './router.js';
import store from './store/index.js';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')




