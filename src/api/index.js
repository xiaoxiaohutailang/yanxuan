/*
 包含n个接口请求函数对象模块
 */
import ajax from'./ajax'

export const reqHome = () => ajax('/home') //发送首页ajax
export const reqCateGorys = () => ajax('/classify')
