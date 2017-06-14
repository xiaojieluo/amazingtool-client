<template>
    <div id="encrypt">
        Encrypt 模块
    

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>

    </div>

</template>

<script>
// import md5 from '@/components/encrypt/md5'

export default {
    name:'encrypt',

    // components: {
    //   md5
    // }
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
