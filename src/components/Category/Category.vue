<template>
    <!--banner + Bscroll-->
     <div class="wrap">
            <div class="banner">
                <img src="https://yanxuan.nosdn.127.net/1a6763ce33440783cc6700fd132b6375.jpg" alt="">
            </div>
            <div class="goodGuid-warp">
                    <ul class="goodGuid">
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                        <li class="good">
                            <div class="good-img">
                                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                            </div>
                            <div class="good-info-name">
                                <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                            </div>
                            <div class="good-info-price">
                                <span>¥349</span>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        mounted(){
            const scroll = new BScroll ('.goodGuid-warp',{
                scrollX: true,
                click: true
                
            })
            console.log(scroll);
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .wrap
        width 750px
        .banner
            width 100%
            height 400px
            img
                width 750px
                height 400px
        .goodGuid-warp
            width 100%
            height 362px
            box-sizing border-box
            padding 0 30px 30px 30px
            margin-top 30px

            .goodGuid
                height 362px
                float left
                display flex
                .good
                    width 200px
                    height 329px
                    margin-right 20px
                    .good-img
                        width 200px
                        height 200px
                        background-color: #f4f4f4;

                        img
                            width 200px
                            height 200px
                            background-color: #f4f4f4;
                    .good-info-name
                        font-size 24px
                        line-height 36px
                        overflow: hidden;
                        margin-top 10px
                        //第二行开始出现省略号
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        white-space: normal;
                        -webkit-box-orient: vertical;
                    .good-info-price
                        color #b4282d
                        margin-top 5px
                        font-size 24px

</style>