import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/Index.vue'
import Cate from '../pages/Cate/Cate.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/index',
            component:Index
        },
        {
            path:'/cate',
            component:Cate
        },
        {
            path:'/topic',
            component:Topic
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/index'
        }

    ]
})