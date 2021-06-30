<template>
  <div class="zjjAdmin-login-container">
      login
      <router-link to="/">to main</router-link>
      <button class="mt-48" @click="setToken">settoken</button>
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

<style scoped lang="less">
@prefixUrl:~"@{globalScoped}-login";

.@{prefixUrl}-container{
    height: 300px;
    background: @colorOrange;
}
</style>