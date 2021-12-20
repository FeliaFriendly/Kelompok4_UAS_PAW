/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//resources/js/app.js
import Vue from 'vue';
import App from './components/App.vue'
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
import { setHeaderToken } from './utils/auth'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

axios.defaults.baseURL = 'http://sosmed-vue.herokuapp.com/api/'

Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn && store.getters.user) {
      next()
      return
    }
    next('/login')
  }

  if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      next()
      return
    }
    next('/profile')
  }

  next()
})


store.dispatch('get_user', token)
.then(() => {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
}).catch((error) => {
  console.error(error);
})


// const app = new Vue({
//     el: '#app',
//     router: router,
//     components: { App }
// });
