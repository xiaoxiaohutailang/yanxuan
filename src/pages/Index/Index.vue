<template>
<div class="index_box">
    <!--头部-->
    <header id="header-warp">
        <!--头部logo/搜索-->
        <div class="header">
            <h1 class="logo"></h1>
            <div class="searchInput">
                <i class="iconfont icon-sousuo"></i>
                <span class="placeholder">搜索物品，共19966款好物</span>
            </div>
            <div class="login">登录</div>
        </div>
        <!--头部导航包裹器-->
        <div class="header-nav-warp">
            <!--导航-->
            <div class="header-nav-some-warp" v-show="!isShowAllcate">
                <div class="header-nav-some">
                    <a href="javascript:;" class="active" >
                        <span>推荐</span>
                    </a>
                    <a href="javascript:;">
                        <span>居家</span>
                    </a>
                    <a href="javascript:;">
                        <span>鞋包配饰</span>
                    </a>
                    <a href="javascript:;">
                        <span>服装</span>
                    </a>
                    <a href="javascript:;">
                        <span>电器</span>
                    </a>
                    <a href="javascript:;">
                        <span>婴童</span>
                    </a>
                    <a href="javascript:;">
                        <span>饮食</span>
                    </a>
                    <a href="javascript:;">
                        <span>洗护</span>
                    </a>
                    <a href="javascript:;">
                        <span>餐厨</span>
                    </a>
                    <a href="javascript:;">
                        <span>文体</span>
                    </a>
                    <a href="javascript:;">
                    <span>特色区</span>
                </a>
                </div>
            </div>
            <!--全频道（点击显示盖住导航）-->
            <div class="allTab" v-show="isShowAllcate">
                <span>全部频道</span>
            </div>
            <!--切换按钮-->
            <div class="toggleBnt"  @click="toggleShowCate">
                <div class="iconfont icon-xialajiantou" v-show="!isShowAllcate"></div>
                <div class="iconfont  icon-xiangshangjiantou" v-show="isShowAllcate"></div>
            </div>
        </div>
        <!--全部频道-->
        <div class="header-nav-all" v-show="isShowAllcate">
            <div class="all">
                <a href="javascript;:" >
                    <span>推荐</span>
                </a>
                <a href="javascript;:" >
                    <span>居家</span>
                </a>
                <a href="javascript;:" >
                    <span>鞋包配饰</span>
                </a>
                <a href="javascript;:" >
                    <span>服装</span>
                </a>
                <a href="javascript;:" >
                    <span>电器</span>
                </a>
                <a href="javascript;:" >
                    <span>婴童</span>
                </a>
                <a href="javascript;:" >
                    <span>饮食</span>
                </a>
                <a href="javascript;:" >
                    <span>洗护</span>
                </a>
                <a href="javascript;:" >
                    <span>餐厨</span>
                </a>
                <a href="javascript;:" >
                    <span>文体</span>
                </a>
                <a href="javascript;:" >
                    <span>特色区</span>
                </a>
            </div>
        </div>
    </header>
    <!--内容区域-->
    <div class="content">
        <!--遮罩层-->
        <div class="mask"></div>
        <!-- 首页轮播图 -->
        <div class="swiper-container-banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
                <div class="swiper-slide">
                    <img
                            src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0"
                            alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!--广告语-->
        <div class="slogon">
            <div class="slogon-all slogon-left">
                <i></i>
                <span>网易自营品牌</span>
            </div>
            <div class="slogon-all slogon-content">
                <i></i>
                <span>30天无忧退货</span>
            </div>
            <div class="slogon-all slogon-right">
                <i></i>
                <span>48小时快速退款</span>
            </div>
        </div>
        <!--商品导航-->
        <ul class="shopNav">
            <li>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <span>居家</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png" alt="">
                <span>鞋包配饰</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" alt="">
                <span>服饰</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" alt="">
                <span>电器</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png" alt="">
                <span>婴童</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png" alt="">
                <span>饮食</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png" alt="">
                <span>洗护</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png" alt="">
                <span>餐厨</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png" alt="">
                <span>文体</span>
            </li>
            <li>
                <img src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png" alt="">
                <span>特色区</span>
            </li>
        </ul>
        <!--ceo推荐-->
        <div class="recommend">
            <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
        </div>
        <!--好物榜-->
       <ul class="goodRes">
           <li class="goodResItem">
               <div class="title">实时好评榜</div>
               <div class="desc">精选优质好物</div>
               <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt="">
               <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt="">
           </li>
           <li class="goodResItem">
               <div class="title">新品热销榜</div>
               <div class="desc">好物抢先体验</div>
               <img src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png" alt="">
               <img src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png" alt="">
           </li>
           <li class="goodResItem">
               <div class="title">严选线下首家店</div>
               <div class="desc">体验选式美学</div>
               <img src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png" alt="">
               <img src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png" alt="">
           </li>
           <li class="goodResItem">
               <div class="title">12月必买好物</div>
               <div class="desc">冬日小确幸指南</div>
               <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt="">
               <img src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png" alt="">
           </li>
       </ul>
        <!--私人定制-->
        <div class="personalShop">
            <div class="personalShop-title">私人定制</div>
            <div class="swiper-warp">
                <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="personalShop-item">
                            <img class="primaryPic" src="http://yanxuan.nosdn.127.net/74452c652a03866b6de171362f9ab4a8.png" alt="">
                            <div class="text">
                                <span class="name">网易精选无线吸尘器</span>
                                <span class="price">￥1599</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="personalShop-item">
                            <img class="primaryPic" src="http://yanxuan.nosdn.127.net/74452c652a03866b6de171362f9ab4a8.png" alt="">
                            <div class="text">
                                <span class="name">网易精选无线吸尘器</span>
                                <span class="price">￥1599</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="personalShop-item">
                            <img class="primaryPic" src="http://yanxuan.nosdn.127.net/74452c652a03866b6de171362f9ab4a8.png" alt="">
                            <div class="text">
                                <span class="name">网易精选无线吸尘器</span>
                                <span class="price">￥1599</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="personalShop-item">
                            <img class="primaryPic" src="http://yanxuan.nosdn.127.net/74452c652a03866b6de171362f9ab4a8.png" alt="">
                            <div class="text">
                                <span class="name">网易精选无线吸尘器</span>
                                <span class="price">￥1599</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
            </div>
        </div>
        <!--限时购-->
        <div class="timeToBuy">
            <div class="timeToBuy-header">
                <span class="timeToBuy-title">限时购</span>
                <div class="timing">
                    <span class="hour">03</span>
                    <span class="colon">:</span>
                    <span class="minutes">04</span>
                    <span class="colon">:</span>
                    <span class="seconds">05</span>
                </div>
                <span class="more">更多</span>
            </div>
            <ul class="timeToBuy-goods">
                <li class="timeToBuy-good">
                    <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" alt="">
                    <span class="activityPrice">￥289</span>
                    <span class="originPrice">￥349</span>
                </li>
                <li class="timeToBuy-good">
                    <img src="http://yanxuan.nosdn.127.net/fe06530dd35ec5062c1ecaf82d4812d6.png" alt="">
                    <span class="activityPrice">￥125</span>
                    <span class="originPrice">￥175</span>
                </li>
                <li class="timeToBuy-good">
                    <img src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png" alt="">
                    <span class="activityPrice">￥584</span>
                    <span class="originPrice">￥899</span>
                </li>
                <li class="timeToBuy-good">
                    <img src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png" alt="">
                    <span class="activityPrice">￥2079</span>
                    <span class="originPrice">￥2599</span>
                </li>
                <li class="timeToBuy-good">
                    <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png" alt="">
                    <span class="activityPrice">￥29.9</span>
                    <span class="originPrice">￥35.9</span>
                </li>
                <li class="timeToBuy-good">
                    <img src="http://yanxuan.nosdn.127.net/2adbaae8403ac4dcac56ebf2ff1a5116.png" alt="">
                    <span class="activityPrice">￥87.9</span>
                    <span class="originPrice">￥109</span>
                </li>
            </ul>
        </div>
        <!--新品首发-->
        <div class="newGoods">
            <div class="newGoods-header">
                <span class="newGoods-title">新品首发</span>
                <span class="more">更多></span>
            </div>
            <ul class="newGoods-goods" >
                <li class="newGoods-good" >
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg" alt="">
                    <div class="text">
                        <span class="name">严选X颐和园 联名</span>
                        <span class="price">¥58</span>
                    </div>
                </li>
                <li class="newGoods-good" >
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg" alt="">
                    <div class="text">
                        <span class="name">严选X颐和园 联名</span>
                        <span class="price">¥58</span>
                    </div>
                </li>
                <li class="newGoods-good" >
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg" alt="">
                    <div class="text">
                        <span class="name">严选X颐和园 联名</span>
                        <span class="price">¥58</span>
                    </div>
                </li>
                <li class="newGoods-good" >
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg" alt="">
                    <div class="text">
                        <span class="name">严选X颐和园 联名</span>
                        <span class="price">¥58</span>
                    </div>
                </li>
                <li class="newGoods-good" >
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg" alt="">
                    <div class="text">
                        <span class="name">严选X颐和园 联名</span>
                        <span class="price">¥58</span>
                    </div>
                </li>
                <li class="newGoods-good" >
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg" alt="">
                    <div class="text">
                        <span class="name">严选X颐和园 联名</span>
                        <span class="price">¥58</span>
                    </div>
                </li>
            </ul>
        </div>
        <!--人气推荐-->
        <div class="popularGoods">
            <div class="popularGoods-header">
                <span class="popularGoods-title">人气推荐</span>
                <span class="more">更多></span>
            </div>
            <div class="spItem">
                <div class="spItem-img">
                    <img src="http://yanxuan.nosdn.127.net/e52cb767feb1578fbb7f2b77d70267c8.png" alt="">
                </div>
                <div class="spItem-des">
                    <div class="name">21s素暖轻磨毛四件套</div>
                    <div class="desc">厚实粗犷肌理感，越睡越舒适</div>
                    <div class="price">¥999</div>
                </div>
            </div>
            <ul class="popularGoods-goods">
                <li class="popularGoods-good">
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/489d9ee22b95c14044592dcc43ae3aa2.png" alt="">
                    <div class="text">
                        <span class="name">30包谷峰一木软抽</span>
                        <span class="price">¥75</span>
                    </div>
                </li>
                <li class="popularGoods-good">
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/489d9ee22b95c14044592dcc43ae3aa2.png" alt="">
                    <div class="text">
                        <span class="name">30包谷峰一木软抽</span>
                        <span class="price">¥75</span>
                    </div>
                </li>
                <li class="popularGoods-good">
                    <img class="primaryPic" src="http://yanxuan.nosdn.127.net/489d9ee22b95c14044592dcc43ae3aa2.png" alt="">
                    <div class="text">
                        <span class="name">30包谷峰一木软抽</span>
                        <span class="price">¥75</span>
                    </div>
                </li>
            </ul>
        </div>
        <!--专题精选-->
        <div class="topicShop">
            <div class="topicShop-header">
                <span class="topicShop-header-title">专题精选</span>
                <span class="more">更多> </span>
            </div>
            <div class="topicShop-warpper">
                <ul class="topicShop-list">
                    <li class="topicShop-item">
                        <div class="topicShop-img">
                            <img src="https://yanxuan.nosdn.127.net/571e99aba1df41c9a7098a8c0b83526a.jpg" alt="">
                        </div>
                        <div class="topicShop-title">
                            一个接近满分的黄桃罐头是怎样的？
                        </div>
                        <div class="topicShop-subTitle">
                            肉质剔透，甘润适口
                        </div>
                    </li>
                    <li class="topicShop-item">
                        <div class="topicShop-img">
                            <img src="https://yanxuan.nosdn.127.net/571e99aba1df41c9a7098a8c0b83526a.jpg" alt="">
                        </div>
                        <div class="topicShop-title">
                            一个接近满分的黄桃罐头是怎样的？
                        </div>
                        <div class="topicShop-subTitle">
                            肉质剔透，甘润适口
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--众筹-->
        <div class="crowd">
            <div class="crowd-header">
                <div class="crowd-title">众筹</div>
                <div class="more">更多></div>
            </div>
            <ul class="crowd-list">
                <li class="crowd-item">
                    <div class="crowd-item-img">
                        <img src="https://yanxuan.nosdn.127.net/f0007d7b330b5ed3e88f43f27f9f565a.png" alt="">
                    </div>
                    <div class="crowd-item-info">
                        <div class="crowd-item-title">易武贡茶 迷你普洱茶饼100克</div>
                        <div class="crowd-item-price">¥198起</div>
                        <div class="crowd-item-progress">
                            <div class="bg"></div>
                        </div>
                        <div class="crowd-item-percent">216%</div>
                        <div class="crowd-item-supportNum">
                            217人支持
                        </div>
                    </div>
                </li>
                <li class="crowd-item">
                    <div class="crowd-item-img">
                        <img src="https://yanxuan.nosdn.127.net/f0007d7b330b5ed3e88f43f27f9f565a.png" alt="">
                    </div>
                    <div class="crowd-item-info">
                        <div class="crowd-item-title">易武贡茶 迷你普洱茶饼100克</div>
                        <div class="crowd-item-price">¥198起</div>
                        <div class="crowd-item-progress">
                            <div class="bg"></div>
                        </div>
                        <div class="crowd-item-percent">216%</div>
                        <div class="crowd-item-supportNum">
                            217人支持
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--banner + Bscroll组件-->
        <Category/>

        <!--版权-->
        <div class="ftWrap">
            <div class="ftContent">
                <div class="bd">
                    <a class="goApp" href="javascript:;">下载APP</a>
                    <a class="goPc" href="javascript:;">电脑版</a>
                </div>
                <p class="copyRight">
                    <span>网易公司版权所有 © 1997-</span>
                    <span>2019</span>
                    <br>
                    <br>
                    <span>食品经营许可证：JY13301080111719</span>
                </p>
            </div>
        </div>
    </div>
</div>

</template>



<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import BScroll from 'better-scroll'

    import Category from '../../components/Category/Category.vue'
    export default {
       data(){
           return{
               isShowAllcate:false
           }
       },
        methods:{
            toggleShowCate(){
                this.isShowAllcate = !this.isShowAllcate
            }
        },
        mounted(){
               new Swiper('.swiper-container-banner',{
                   autoplay:true, //自动轮播
                   // delay:1000, //
                   // paginationType: 'custom', //自定义分页器样式
                   loop: true, // 循环模式选项
                   pagination: {
                       el: '.swiper-pagination',
                       type: 'custom',
                       renderCustom: function (swiper, current, total) {
                           var customPaginationHtml = "";
                           for (var i = 0; i < total; i++) {
                               //判断哪个分页器此刻应该被激活
                               if (i === (current - 1)) {
                                   customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                               } else {
                                   customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                               }
                           }
                           return customPaginationHtml;
                       }
                   }
               })

               new Swiper('.swiper-warp .swiper-container',{
                   loop: true,
                   pagination: {
                       el: '.swiper-pagination',
                   },
               })

               const scroll = new BScroll('.header-nav-some-warp',{
                   scrollX: true,
                   scrollY: false,
                   click:true
               })

               new BScroll('.topicShop-warpper',{
                   scrollX: true,
                   click:true
               })

        },
        components:{
            Category
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.index_box
    #header-warp
        position fixed
        left 0
        top 0
        width 100%
        height 147.94px
        z-index 200
        background #fff
        /*头部样式*/
        .header
            display flex
            align-items center
            padding 16px 30px
            /*logo样式*/
            .logo
                width 138px
                height 40px
                background-image url("/static/images/index/indexLogo-a90bdaae6b.png")
                background-repeat no-repeat
            .searchInput
                width 60%
                height 56px
                background #ededed
                margin-left 20px
                border-radius 5px
                .iconfont
                    display inline-block
                    font-size 30px
                    margin 15px 30px
                .placeholder
                    font-size 27px
                    margin-left -30px
            .login
                width 76px
                height 42px
                line-height 42px
                text-align center
                border 2px solid #b4282d
                border-radius 5px
                margin-left 20px

         /*导航样式*/
        .header-nav-warp
            display flex
            width 100%
            height 60px
            line-height 60px
            .header-nav-some-warp
                height 100%
                overflow hidden
                .header-nav-some
                    float left
                    display flex
                    a
                        font-size 27px
                        color #333
                        padding 0 15px
                        margin-left 20px
                        &.active
                            color #b4282d
                            border-bottom 5px solid #b4282d
            /*全部频道*/
            .allTab
                position absolute
                left 0
                margin-left 20px
                span
                    font-size 27px
            /*显示全部频道*/
            .toggleBnt
                position absolute
                right  0
                width 140px
                height 60px
                background #fff
                .iconfont
                    font-size 60px
                    text-align center


        /*全部频道*/
        .header-nav-all
            width 100%
            height 317.95px
            background #fff
            a
                display block
                width 152px
                height 58px
                float left
                border 2px solid #ccc
                background #fafafa
                margin 0 0 40px 30px
                span
                    display flex
                    align-items center
                    justify-content center
                    height 58px
                    color #333

    .content
        position relative
        left 0
        top 147px
        padding-bottom 1.30667rem
        overflow-x hidden
        .mask
            position fixed
            left 0
            top 147px
            buttom 0
            right 0
            background rgba(255,255,255,.5)
            z-index 2
        .swiper-container-banner
            width: 100%;
            position: relative
            left 0
            top 0

            img
                width: 100%

            .swiper-pagination
                width: 100%
                height: 10px
                /*包裹自定义分页器的div的位置等CSS样式*/

                &.swiper-pagination-custom
                    bottom: 10px;
                    left: 0;
                    width: 100%;
                    height: 50px
        .slogon
            width: 100%
            height 68px
            display flex
            margin-top 16px
            .slogon-all
                flex 1
                color: #B4282D
                font-size: 24px
                text-align center
                margin-left 15px
                i
                    vertical-align: middle
                    display: inline-block
                    background-image: url('/static/images/index/2d0402ffcd52b3ec3b07422681c42a89.png')
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    width 32px
                    height 32px

        .shopNav
            width 100%
            height: 392px;
            clearFix()

            li
                width: 110px
                height: 156px
                float: left
                margin: 10px 20px 0
                display flex
                flex-direction column

            img
                width: 110px
                height: 110px

            span
                text-align center
                color: #333333
                margin-top: 10px
                font-size: 24px
                line-height: 36px
                white-space: nowrap

        .recommend
            img
                width 750px
                height 160px
        .goodRes
            padding 10px 30px 30px 26px
            background #fff
            overflow hidden
            .goodResItem
                background-image: url(https://yanxuan.nosdn.127.net/252dbf6cdf6597f5a25940544be765c0.png);
                background-size: 100% 100%;
                display: block;
                width 343px
                height 284px
                float left
                margin 4px 0 0 4px
                .title
                    color: #333333
                    padding-left 10px
                    font-size 32px
                .desc
                    color: #333333
                    padding-left 10px
                    margin 10px 0
                img
                    width 150px
                    height 150px

        .personalShop
            .personalShop-title
                width 100%
                height 100px
                line-height 100px
                font-size 32px
                padding 0 30px
            .swiper-warp
                width 100%
                height 318px
                .swiper-container
                    width 100%
                    height 318px
                    .personalShop-item
                        padding: 0 !important;
                        margin-left: 20px;
                        width: 216px
                        float: left;
                    .primaryPic
                        background-color: #f5f5f5;
                        margin-bottom: 12px
                        width: 216px
                        height: 216px
                    .text
                        margin-top: 0;
                        margin-bottom: .13333rem;
                        font-size: 10px
                        overflow: visible;
                        white-space: normal;
                        line-height: 36px
                    .name
                        width: 216px
                        color: #333;
                        margin-top: 0;
                        margin-bottom: 10px
                        font-size: 24px
                        line-height: 36px
                        white-space: normal;
                    .price
                        color: #b4282d

        .timeToBuy
            width 100%
            height 735px
            padding 0 30px
            font-size 32px

            overflow: hidden;
            .timeToBuy-header
                width: 100%
                height 99px
                clearFix()
                .timeToBuy-title
                    float left
                .timing
                    float left
                    display: inline-block
                    vertical-align: middle
                    margin: 5px 0 0 12px
                    .hour, .minutes, .seconds
                        display: inline-block
                        font-size: 24px
                        line-height: 36px
                        width: 36px
                        height: 36px
                        text-align: center
                        background-color: #333
                        border-radius: 40px
                        color: #fff
                        margin: 0 10px
                    .colon
                        font-size: 28px
                .more
                    float right
                    display: block;
                    font-size: 28px
                    color: #333;
                    line-height: 100px
                    margin-right 50px
            .timeToBuy-goods
                clearFix()
                .timeToBuy-good
                    height 318px
                    text-align center
                    color: #333;
                    float: left;
                    margin-right: 20px
                    img
                        display block
                        width: 216px
                        height: 216px
                        background: #F5F5F5;
                        border-radius: 4px
                    .activityPrice
                        font-size: 28px
                        color: #b4282d;
                    .originPrice
                        font-size: 24px
                        color: #7F7F7F;
                        text-decoration: line-through

        .newGoods
            width: 100%;
            line-height: 1.33333rem;
            background: #fff;
            overflow: hidden;
            padding: 0 .2rem;
            font-size: .42667rem;

            .newGoods-header
                width: 100%
                height 99px
                padding: 0 .2rem;
                clearFix()
                .newGoods-title
                    float left

                .more
                    float right
                    display: block;
                    font-size: .37333rem;
                    color: #333;
                    line-height: 1.33333rem;
                    margin-right .67333rem

            .newGoods-goods
                clearFix()

                .newGoods-good
                    float left
                    padding: 0 0 .17333rem !important;
                    margin-left: .26667rem;
                    width: 2.88rem;

                    .primaryPic
                        background-color: #f5f5f5;
                        margin-bottom: .16rem;
                        width: 2.88rem;
                        height: 2.88rem;

                    .text
                        margin-top: 0;
                        margin-bottom: .13333rem;
                        font-size: .32rem;
                        overflow: visible;
                        white-space: normal;
                        line-height: .48rem;

                    .name
                        width: 2.88rem;
                        color: #333;
                        margin-top: 0;
                        margin-bottom: .13333rem;
                        font-size: .32rem;
                        line-height: .48rem;
                        white-space: normal;

                    .price
                        color: #b4282d

        .popularGoods
            width: 100%;
            line-height: 0.53333rem;
            background: #fff;
            overflow: hidden;
            padding: 0 .2rem;
            font-size: .42667rem;
            .popularGoods-header
                width: 100%
                height 99px
                line-height: 1.33333rem;
                padding: 0 .2rem;
                clearFix()
                .popularGoods-title
                    float left
                .more
                    float right
                    display: block;
                    font-size: .37333rem;
                    color: #333;
                    line-height: 1.33333rem;
                    margin-right .67333rem
            .spItem
                color: #333;
                width: 9.2rem;
                height: 3.73333rem;
                display: flex;
                background: #FEF0DF;
                border-radius: .05333rem;
                margin: 0 .2rem .26667rem;
            .spItem-img
                  width: 3.73333rem;
                  height: 3.73333rem;
                  background: url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
                  background-size: 100% 100%;
                  margin-right: .4rem;
                img
                    width: 100%
                    height: auto
            .spItem-des
                height 3.73333rem
                padding 1.23333rem 0 0 .2rem
                .name
                    font-size: .37333rem;
                    width: 4.66667rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                .desc
                    font-size: .32rem;
                    color: #7F7F7F;
                    width: 4.66667rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                .price
                    font-size: .37333rem;
                    color: #b4282d;
            .popularGoods-goods
                clearFix()
                .popularGoods-good
                    float left
                    padding: 0 0 .17333rem !important;
                    margin-left: .26667rem;
                    width: 2.88rem;
                    .primaryPic
                        background-color: #f5f5f5;
                        margin-bottom: .16rem;
                        width: 2.88rem;
                        height: 2.88rem;
                    .text
                        margin-top: 0;
                        margin-bottom: .13333rem;
                        font-size: .32rem;
                        overflow: visible;
                        white-space: normal;
                        line-height: .48rem;
                    .name
                        width: 2.88rem;
                        color: #333;
                        margin-top: 0;
                        margin-bottom: .13333rem;
                        font-size: .32rem;
                        line-height: .48rem;
                        white-space: normal;
                    .price
                        color: #b4282d
        .topicShop

            height 530px
            font-size 32px
            .topicShop-header

                height 99px
                box-sizing border-box
                padding 0 15px
                .topicShop-header-title
                    line-height 99px
                    float left
                    margin-left 15px
                .more
                    line-height 99px
                    float right

            .topicShop-warpper
                 height 430px
                 padding 0 30px 30px 30px
                 .topicShop-list
                    height 430px
                    display flex
                    float left
                    .topicShop-item
                        height 393px
                        padding-bottom 24px
                        margin-right 32px
                        .topicShop-img
                            width 100%
                            height 266px
                            margin-bottom 20px
                            img
                                width 480px
                                height 266px
                        .topicShop-title
                            width 450px
                            height 41px
                            line-height 41px
                            padding 0 20px
                            font-size 30px
                            white-space nowrap
                            overflow hidden
                            text-overflow ellipsis
                        .topicShop-subTitle
                            width 480px
                            height 39px
                            line-height 39px
                            padding 0 20px



        .crowd
            width 100%
            height 625px
            font-size 32px
            box-sizing border-box
            padding 0 15px
            .crowd-header
                width 100%
                height 99px
                border-bottom 1px solid #eee
                .crowd-title
                    float left
                    height 99px
                    line-height 99px
                .more
                    float right
                    height 99px
                    line-height 99px
            .crowd-list
                .crowd-item
                    display flex
                    width 100%
                    height 247px
                    padding 30px 15px 0 15px
                    .crowd-item-img
                        margin-right 30px
                        img
                            width 210px
                            height 210px
                    .crowd-item-info
                        .crowd-item-title
                            font-size 34px
                        .crowd-item-price
                            margin-top 15px
                            font-size 32px
                            color #b4282d
                        .crowd-item-progress
                            width 360px
                            height 6px
                            margin-top 22px
                            .bg
                                width 100%
                                height 100%
                                background #fea438
                        .crowd-item-percent
                            position relative
                            right -380px
                            top -15px
                            font-size 24px
                            color #7f7f7f
                        .crowd-item-supportNum
                            margin-top 20px
                            font-size 24px
                            color #7f7f7f





        .ftWrap
            width 100%
            height 253px
            background #414141
            border 1px solid rgba(0,0,0,.15)
            .ftContent
                text-align center
                padding 60px 20px 28px 20px
                .bd
                   .goApp
                        margin-right 50px
                        padding 18px 40px
                        border 1px solid #fff
                        color #fff
                   .goPc
                        margin-right 40px
                        padding 18px 40px
                        border 1px solid #fff
                        color #fff
                .copyRight
                    margin-top 40px
                    color #999

</style>
<style>
    /*自定义分页器的样式，这个你自己想要什么样子自己写*/
    .swiper-pagination-customs {
        width: 40px;
        height: 5px;
        display: inline-block;
        background: #fff;
        opacity: .4;
        border-radius: 0;
        margin: 0 .13333rem 0 0;
    }

    /*自定义分页器激活时的样式表现*/
    .swiper-pagination-customs-active {
        opacity: 1;
        background: #fff;
        border-radius: 0;
    }

    .swiper-pagination-bullet {
        width: 12px;
        height: 5px;
        border-radius: 50%;
        background: #333;
        border: none;
        vertical-align: middle;
    }

    .swiper-pagination-bullet-active {
        border: none;
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 12px;
        height: 5px;
    }
</style>
