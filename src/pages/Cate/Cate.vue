<template>
    <div>
        <div class="header-warp">
            <div class="search">
                <div class="iconfont icon-sousuo"></div>
                <div class="search-info">搜索商品，共1999款好物</div>
            </div>
        </div>
        <div class="content">
            <div class="cateNav-warp">
                <ul class="cateNav-list">
                    <li class="cateNav-item "
                        :class="categoryItem.id===Number($route.query.categoryId) ?'active': ''"
                        v-for="(categoryItem,index) in categorys.categoryL1List" :key="index" >
                        <router-link :to="`/cate/cateList?categoryId=${categoryItem.id}`">
                            <span>{{categoryItem.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="cateContent-warp">
                <router-view/>
            </div>
         </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        computed:{
            ...mapState({
                categorys:state => state.categorys
            })
        },
        mounted(){
            this.$store.dispatch("getCategorys")
            const scroll = new BScroll('.cateNav-warp',{
                click:true,
                scrollY:true
            })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header-warp
        position fixed
        left 0
        top 0
        z-index 5
        background #fff
        width 100%
        height 89px
        box-sizing border-box
        padding 15px 35px
        margin-buttom 45px
        .search
            width 675px
            height 56px
            background #EDEDED
            .iconfont
                display inline-block
                font-size 34px
                padding 15px 0
                padding-left 150px
            .search-info
                display inline-block
                text-align center
                line-height 56px
                font-size 28px
    .content
        .cateNav-warp
            width 162px
            height 1110px
            position relative
            float left
            .cateNav-list
                width 100%
                padding-top 45px
                .cateNav-item
                    text-align center
                    height 50px
                    font-size 28px
                    margin-top 45px
                    &:first-child
                        margin-top 90px
                    &.active
                        border-left 5px solid #ab2b2b
                        span
                            color #ab2b2b
        .cateContent-warp
            position relative
            margin-left 162px
            padding 30px 30px 21px 30px


</style>