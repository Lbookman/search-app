import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import moment from 'moment'



Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  if (!value) return ''
  return moment(value.toString()).format('MM/DD/YYYY hh:mm')
})

Vue.use(VueRouter)

import Details from './components/Details';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
     path: '/Details/:id',
     name: 'Details',
     component: Details
   }
 ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
