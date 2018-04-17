// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
import './assets/css/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Vuex from 'vuex'
import Store from './vuex/stored'
import store from './vuex/store'
import VueAreaLinkage from 'vue-area-linkage'
import Mock from './mock/mock'
Mock.bootstrap()
Vue.config.productionTip = false
const router = new VueRouter({
    routes
})
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAreaLinkage)

router.beforeEach((to, from, next) => {
    //NProgress.start();
    if (to.path == '/Login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/Login') {
        next({ path: '/Login' })
    } else {
        next()
    }
})
new Vue({
    //el: '#app',
    router,
    Store,
    store,
    render: h => h(App)
}).$mount('#app')