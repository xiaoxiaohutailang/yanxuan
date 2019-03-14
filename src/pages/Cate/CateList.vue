<template>
    <div class="scroll-warp">
            <div class="scrollContent">
                <div class="banner" >
                    <img src="http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg" alt="">
                </div>
                <div class="cateList">
                    <ul class="list">
                        <li class="item"
                            v-for="(categoryItem2,index) in categorys.categoryL2List" :key="index">
                            <div class="item-img">
                                <img v-lazy="categoryItem2.bannerUrl" alt="">
                            </div>
                            <div class="item-title">{{categoryItem2.name}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    export default {
       mounted(){
           // this.$store.dispatch('get')
           const scroll = new BScroll('.scroll-warp',{
                click:true
           })
           console.log(scroll);
       },
        computed:{
            ...mapState({
                categorys: state => state.categorys
            })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .scroll-warp
        height 1125px
        margin-top 45px
        .banner
            img
                width 528px
                height 192px
        .cateList
            width 528px
            .list
                display flex
                flex-wrap wrap
                .item
                    width 114px
                    height 216px
                    margin-right 32px
                    margin-left 20px
                    .item-img
                        img
                            display block
                            width 144px
                            height 144px
                    .item-title
                        width 144px
                        height 72px
                        text-align center
                        font-size 24px
                        line-height 36px
                        display: -webkit-box
                        -webkit-line-clamp: 2
                        -webkit-box-orient: vertical
</style>