import Vue from 'vue'
import Router from 'vue-router'
import SubscriptionList from '../components/SubscriptionList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SubscriptionList',
      component: SubscriptionList
    }
  ]
})
