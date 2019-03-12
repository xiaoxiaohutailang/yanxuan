<template>
    <div class="cart-warpper">
        <div class="cart-header">
            <span class="cart-title">购物车</span>
            <span class="getCoupon">领劵</span>
        </div>
        <div class="cart-content">
            <div class="cart-slogan">
                <span>30天无忧退货</span>
                <span>48小时快速退款</span>
                <span>满88元免邮费</span>
            </div>
            <div class="cart-img"></div>
            <div class="goLogin">
                <div class="hint">去添加点什么吧~</div>
                <div class="loginBtn">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .cart-warpper
        width 100%
        background #F4F4F4
        .cart-header
            height 88px
            display flex
            background #fff
            .cart-title
                line-height 88px
                font-size 36px
                margin-left 320px
            .getCoupon
                display block
                font-size 30px
                line-height 88px
                margin-left 200px
                color #b4282d
        .cart-content
            height 100%
            .cart-slogan
                display flex
                justify-content space-around
                align-items center
                margin-top 30px

            .cart-img
                background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
                width 248px
                height 248px
                margin-top 360px
                background-size 248px 248px
                background-repeat no-repeat
                margin-left 250px

            .goLogin
                text-align center
                .hint
                    color #999
                    font-size 28px
                    margin-bottom 50px
                .loginBtn
                    width 480px
                    height 92px
                    background #b4282d
                    color #fff
                    font-size 28px
                    text-align center
                    line-height 92px
                    margin-left 145px


</style>