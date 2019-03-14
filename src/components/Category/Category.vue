<template>
    <!--banner + Bscroll-->
     <div class="wrap">
            <div class="banner" >
                <img :src="categorie.titlePicUrl" alt="">
            </div>
            <div :class="'goodGuid-warp'+ index" class="goodGuid-warp">
                <ul class="goodGuid" >
                    <li class="good" v-for="(item, index) in categorie.itemList" :key="index">
                        <div class="good-img">
                            <img :src="item.primaryPicUrl" alt="">
                        </div>
                        <div class="good-info-name">
                            <span>{{item.name}}</span>
                        </div>
                        <div class="good-info-price">
                            <span>¥{{item.counterPrice}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        props:{
            categorie:Object,
            index:Number
        },
        // methods:{
        //   _initScroll(){
        //       new BScroll ('.goodGuid-warp',{
        //           scrollX: true,
        //           click: true
        //       })
        //
        //   }
        // },
        // watch:{
        //     categorie(){
        //         this.$nextTick(() => {
        //             this._initScroll()
        //         })
        //     }
        // }
     mounted(){
       const scroll = new BScroll ('.goodGuid-warp'+ this.index,{
                          scrollX: true,
                         click: true
                       })
                console.log('scroll',scroll);
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