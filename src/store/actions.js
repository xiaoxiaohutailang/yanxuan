/*
包含n个间接更新数据状态的actions对象模块
 */
import {
    reqHome,
    reqCateGorys,

} from '../api'
import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORYS
} from './mutation-types'

export default {
    async getCategorys({commit}){
        const result = await reqCateGorys()
        console.log("------------------------")
        console.log(result)
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    async getCategories({commit}){
        const result = await reqHome()
        if(result.code===0){
            console.log('-----');
            const categories = result.data
            commit(RECEIVE_CATEGORIES,{categories})
            console.log('categories',categories);
        }
    }
}