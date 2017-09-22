<template>
    <div class="user_center">
        <v-header></v-header>
        <transition name="move" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script type='text/ecmascript-6'>
    import vHeader from './Header.vue'
    export default {
//        props: [{
//           username:{
//               type: String,
//               default: '',
//           }
//        }],
        components: {
            vHeader
        },
    }
</script>

<style>

</style>
