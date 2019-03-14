/*
包含n个直接更新数据状态的mutations对象模块
 */
import {
    RECEIVE_CATEGORYS,
    RECEIVE_CATEGORIES
} from './mutation-types'


export default {
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_CATEGORIES](state,{categories}){
        state.categories = categories
    }
}