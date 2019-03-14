<template>
    <div class="phonLogin-warp">

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
        <div class="content-warp">
            <div class="content-logo">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <input type="text" placeholder="请输入手机号" v-model="phone">
            <div class="password-wrap">
                <input type="text" placeholder="请输入短信验证码" v-model="code">
                <div class="code">获取验证码</div>
            </div>
            <div class="otherWay">
                <span>遇到问题？</span>
                <span>使用密码验证登录</span>
            </div>
            <div class="login">登录</div>
            <div class="otherWap" @click="$router.replace('/login')">其他登录方式</div>
            <div class="register">注册账号> </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            phone:'',
            code:''
          }
        },
        method:{

        },
        computed:{
            isPhone(){
                return /^1\d{10}$/.test(this.phone)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .phonLogin-warp
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
            background #fff
            .content-logo
                  height 130px
                  text-align center
                  padding 75px 0 85px 0
                  img
                      width 190px
                      height 64px
            input
                width 90%
                height 90px
                margin-left 30px
                font-size 26px
                outline none
                border-bottom 2px solid #bdbdbd
            .password-wrap
                position relative
                top 0
                left 0
                width 100%
                height 103px
                margin-top 20px
                margin-left 30px
                input
                    margin-left 0
                    outline none
                .code
                    position absolute
                    right 75px
                    top 25px
                    width 174px
                    height 58px
                    line-height 58px
                    border 1px solid #333
                    text-align center
                    font-size 28px

            .otherWay
                width 100%
                height 105px
                box-sizing border-box
                padding: 0 20px
                line-height 105px
                display flex
                justify-content space-between
                font-size 28px

            .login
                width 677px
                height 96px
                line-height 96px
                background #b4282d
                text-align center
                color #fff
                font-size 28px
                margin 32px 0 32px 30px

            .otherWap
                width 667px
                height 96px
                line-height 96px
                text-align center
                border 1px solid #b4282d
                margin 32px 0 32px 30px
            .register
                text-align center
                font-size 28px
</style>