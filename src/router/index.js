import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Form from '@/views/nav1/Form'
import Table from '@/views/nav1/Table'
import User from '@/views/nav1/user'
import Page4 from '@/views/nav2/Page4'
import Page5 from '@/views/nav2/Page5'
import Page6 from '@/views/nav3/Page6'
import Page7 from '@/views/nav3/Page7'
import Page8 from '@/views/nav3/Page8'
import echarts from '@/views/chart/echarts'
import NotFound from '@/views/404.vue'
Vue.use(Router)
    /**动态配置路由 */
const routes = [{
        path: '/Login',
        name: '',
        component: Login,
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',
        children: [
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: User, name: 'User' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'el-icon-news',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航三',
        iconCls: 'el-icon-edit-outline',
        children: [{
            path: '/page6',
            component: Page6,
            name: '轮播一'
        }, {
            path: '/page7',
            component: Page7,
            name: '轮播二'
        }, {
            path: '/page8',
            component: Page8,
            name: '轮播三'
        }]
    },
    {
        path: '/',
        name: '图表',
        component: Home,
        iconCls: 'fa fa-bar-chart',
        children: [{
            path: '/echarts',
            component: echarts,
            name: 'echarts'
        }]
    },
    {
        path: '/404',
        name: '',
        component: NotFound,
        hidden: true,
    },
    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }

]
export default routes