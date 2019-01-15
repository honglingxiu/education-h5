import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from "./assets/js/api";
import VueLazyload from 'vue-lazyload'
import BaseComponents from "./components/base"; //导入组件库
import fastClick from 'fastclick'

Vue.config.productionTip = false;
fastClick.attach(document.body);//解决移动端点击延迟事件

Vue.use(Api);
Vue.use(VueLazyload, {
	loading: require("./assets/img/loading.gif")
})
Vue.use(BaseComponents);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')