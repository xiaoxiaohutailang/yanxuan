/*
入口文件
 */
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import 'lib-flexible/flexible'
import store from './store'
import router from './router'
import loadingGIF from './common/imgs/loading.gif'
import "./mock/mockServer"

Vue.use(VueLazyLoad,{loading:loadingGIF})
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    },
    router,
    store
})