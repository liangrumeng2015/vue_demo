import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import PullUpLoading from '@/components/PullUpLoading/PullUpLoading'

import Button from '@/components/vantUnit/Button'
import ActionSheet from '@/components/vantUnit/ActionSheet'
import DatetimePicker from '@/components/vantUnit/DatetimePicker'
import UpLoader from '@/components/UpLoader/UpLoader'
import Toast from '@/components/Tip/Toast'
import Notify from '@/components/Tip/Notify'
import Dialog from '@/components/Tip/Dialog'
import Form01 from '@/components/Form/form01'
import Form02 from '@/components/Form/form02'
import Form03 from '@/components/Form/form03'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/UpLoader',
      name: 'UpLoader',
      component: UpLoader
    },
    {
      path: '/DatetimePicker',
      name: 'DatetimePicker',
      component: DatetimePicker
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/Form01',
      name: 'Form01',
      component: Form01
    },
    {
      path: '/Form02',
      name: 'Form02',
      component: Form02,
      meta:{
        keepAlive:true   // 需要缓存的页面
      }
    },
    {
      path: '/Form03',
      name: 'Form03',
      component: Form03
    },
    {
      path: '/Notify',
      name: 'Notify',
      component: Notify
    },
    {
      path: '/ActionSheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PullUpLoading',
      name: 'PullUpLoading',
      component: PullUpLoading
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
