<template>
    <div  class="login-warp">
        <!--头部-->
        <div class="header-warp">
            <div class="header">
                <div class="header-left">
                    <div class="goHome" @click="$router.replace('/index')">
                        <i class="iconfont icon-shouye"></i>
                    </div>
                </div>
                <div class="logo"></div>
                <div class="header-right">
                    <div class="goSearch" @click="$router.replace('/search')">
                        <i class="iconfont icon-sousuo"></i>
                    </div>
                    <div class="goCart" @click="$router.replace('/cart')">
                        <i class="iconfont icon-gouwuche"></i>
                    </div>
                </div>
            </div>
        </div>
        <!--内容logo区域-->
        <div class="content-warp">
            <div class="content-logo">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <!--手机登录-->
            <div class="content-phone">
                <i class="iconfont icon-shouji"></i>
                <span>手机号码登录</span>
            </div>
            <div class="content-email">
                <i class="iconfont icon-youxiang"></i>
                <span>邮箱账号登录</span>
            </div>
            <div class="register-phone">手机号快捷注册></div>
            <div class="login-other">
                <div class="weChat">
                    <i class="iconfont icon-weixin"></i>
                    <span>微信&nbsp;&nbsp; | </span>
                </div>
                <div class="QQ">
                    <i class="iconfont icon-QQ"> </i>
                    <span>QQ&nbsp;&nbsp; |</span>
                </div>
                <div class="weibo">
                    <i class="iconfont icon-weibo"></i>
                    <span>微博&nbsp;&nbsp; </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .login-warp
        width 100%
        .header-warp
            width 750px
            height 88px
            .header
                width 100%
                height 88px
                position fixed
                top 0
                left 0
                box-sizing border-box
                padding 6px 30px 0 30px
                display flex
                .header-left
                    float left
                    height 75px
                    line-height 75px
                    .iconfont
                        display block
                        font-size 51px
                .logo
                    width 172px
                    height 54px
                    background-image url("/static/images/index/indexLogo-a90bdaae6b.png")
                    background-repeat no-repeat
                    margin-left 210px
                    margin-top 15px
                    background-size 90% 90%

                .header-right
                    width 131px
                    height 75px
                    margin-left 135px
                    .goSearch
                        .iconfont
                            font-size 45px
                            float left
                            margin-top 20px
                    .goCart
                        .iconfont
                            font-size 45px
                            float left
                            margin-top 20px
                            margin-left 34px
        .content-warp
            height 418px
            background #F2F5F4
            .content-logo
                height 258px
                text-align center
                padding-top 160px
                img
                    width 268px
                    height 90px
            .content-phone
                margin 30px 0 30px 40px
                width 677px
                height 96px
                background #b4282d
                line-height 96px
                text-align center
                .iconfont
                    font-size 30px
                    color: #ffffff
                span
                    color: #fff
                    font-size 28px

            .content-email
                margin 30px 0 30px 40px
                width 677px
                height 96px
                line-height 96px
                text-align center
                border 1px solid #b4282d
                .iconfont
                    font-size 30px
                    color: #b4282d
                span
                    color: #b4282d
                    font-size 28px
            .register-phone
                text-align center
                font-size 28px
            .login-other
                padding-top 390px
                height 40px
                display flex
                justify-content center
                align-items center
                .weChat
                    font-size 30px
                    margin-right 20px
                    .iconfont
                        font-size 30px

                .QQ
                    font-size 30px
                    margin 0  20px
                    .iconfont
                        font-size 30px
                .weibo
                    font-size 30px
                    margin-left 20px
                    .iconfont
                        font-size 30px

</style>