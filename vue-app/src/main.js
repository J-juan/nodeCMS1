// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import "../static/ue/ueditor.config.js";
import "../static/ue/ueditor.all.js";
import "../static/ue/lang/zh-cn/zh-cn.js";
import "../static/ue/ueditor.parse.js";

Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.prototype.$qs=qs;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
