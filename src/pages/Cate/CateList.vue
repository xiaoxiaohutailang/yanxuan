<template>
    <div class="scroll-warp">
            <div class="scrollContent">
                <div class="banner">
                    <img src="http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg" alt="">
                </div>
                <div class="cateList">
                    <ul class="list">
                        <li class="item">
                            <div class="item-img">
                                <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                            </div>
                            <div class="item-title">丁磊的好货推荐</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
       // mounten(){
       //     const scroll = new BScroll('.scroll-warp',{
       //          click:true
       //     })
       //     console.log(scroll);
       // }
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
                .item
                    width 114px
                    height 216px
                    margin-right 32px
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