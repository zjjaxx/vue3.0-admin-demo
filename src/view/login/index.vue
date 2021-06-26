<template>
  <div class="login">
      login
      <router-link to="/">to main</router-link>
      <button @click="setToken">settoken</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useUserStore} from "/@/store/modules/user"
export default defineComponent ({
  setup(){
    const userStore=useUserStore()

    const setToken=()=>{
      userStore.token="token"
    }
    return{
      setToken
    }
  }
})
</script>

<style>

</style>