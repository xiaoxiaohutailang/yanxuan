import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/Index.vue'
import Cate from '../pages/Cate/Cate.vue'
import CateList from '../pages/Cate/CateList.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/index',
            component:Index,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/cate',
            component:Cate,
            children:[
                {
                    path:'/cate/catelist',
                    component:CateList,
                    meta:{
                        showFooter:true
                    }
                },
                {
                    path:'/cate',
                    redirect: '/cate/catelist',
                    meta:{
                        showFooter:true
                    }
                }
            ],
            meta:{
                showFooter:true
            }
        },
        {
            path:'/topic',
            component:Topic,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/cart',
            component:Cart,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'/index'
        }

    ]
})