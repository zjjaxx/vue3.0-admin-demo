<template>
  <div>
    default index
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
console.log("button is",Button)
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    "AButton": Button,
  },
});
</script>

<style>
</style>