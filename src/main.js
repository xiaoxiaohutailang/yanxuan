/*
入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    },
    router
})