// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import storage from 'good-storage'
import VueScroller from 'vue-scroller'
import Common from '../static/common.js'
import VConsole from 'vconsole'
import {Button} from 'vant'
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import { Field } from 'vant';
import { Uploader } from 'vant';
import { Toast } from 'vant';
import { Notify } from 'vant';
import { Dialog } from 'vant';
import { ActionSheet } from 'vant';

Vue.prototype.$axios = axios;
Vue.prototype.$qs= qs;
Vue.prototype.$storage = storage;

Vue.use(Common)
Vue.use(VueScroller)
Vue.use(Button)
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Toast);
Vue.use(Notify);
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Vuex);


if (process.env.NODE_ENV === 'production') {
  console.log('production环境');
}else{
  let vConsole = new VConsole()
  console.log('development环境');
}

Vue.config.productionTip = false

// 仓库  使用store里面的参数  this.$store.state.totalcount
var store = new Vuex.Store({
  state:{   //
    totalcount:1
  },
  mutations:{   // 定义方法,用来修改state下面的数据的   调用方法： this.$store.commit('updatecount',lastedvalue)
    updatecount(state,arg){
      state.totalcount = arg
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,   // 状态管理
  components: { App },
  template: '<App/>'
})
