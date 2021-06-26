<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {getGlobalEnv} from "./utils/index"
export default defineComponent({
  name: "App",
  setup(){
    const env=getGlobalEnv()
  },
  components: {
  },
  mounted() {
  
  },
});
</script>

<style>
</style>
