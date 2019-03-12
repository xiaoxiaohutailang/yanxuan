<template>
    <div>
        <router-view/>
        <FoodGuide v-if="$route.meta.showFooter"/>
    </div>
</template>

<script>
    import FoodGuide from './components/FoodGuide/FoodGuide.vue'
    export default {
        components:{
            FoodGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>