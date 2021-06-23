<template>
   <div class="home">
       home
   </div>
   <div>{{isLogin}}</div>
   <button @click="login">login</button>
</template>

<script lang="ts">
import {defineComponent,computed} from "vue"
import useAppStore from "/@/store/modules/app"
export default defineComponent({
    setup(){
        const appStore=useAppStore()
        const login=()=>{
            appStore.isLogin=!appStore.isLogin
        }
        return {
            login,
            isLogin:computed(()=>appStore.isLogin)
        }
    }
}) 
</script>

<style>

</style>