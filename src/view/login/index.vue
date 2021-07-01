<template>
  <div class="zjjAdmin-login-container">
    login
    <router-link to="/">to main</router-link>
    <div>token is {{ token }}</div>
    <button class="mt-48" @click="setToken">settoken</button>
    <button class="mt-48" @click="submit">form-data-post</button>
    <button class="mt-48" @click="getToken">getToken</button>
    <button class="mt-48" @click="putToken">putToken</button>
    <button class="mt-48" @click="deleteToken">deleteToken</button>
    <div>
        <a-upload
        v-model:file-list="fileList"
        name="file"
        :multiple="true"
        @change="handleChange"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          Click to Upload
        </a-button>
      </a-upload>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Upload,message,Button } from "ant-design-vue";
import { UploadOutlined } from '@ant-design/icons-vue';
import { useUserStore } from "/@/store/modules/user";
import {FileInfo,FileItem} from "/@types/ant.d"
import {
  login,
  loginForm,
  loginGet,
  loginPut,
  loginDelete,
} from "/@/api/login";

export default defineComponent({
  components: {
   UploadOutlined,
   AButton:Button,
   AUpload:Upload
  },
  setup() {
    const userStore = useUserStore();
    let token = ref(userStore.getToken);
    const setToken = async () => {
      let result;
      try {
        result = await login({ account: "17855827456", password: "123456jia" });
        token.value = result.data.result.token;
      } catch (error) {
        console.log("catch error", error);
      }
      userStore.token = "token";
    };
    const submit = async () => {
      let result;
      try {
        result = await loginForm({
          account: "17855827456",
          password: "123456jia",
        });
        token.value = result.data.result.token;
      } catch (error) {
        console.log("catch error", error);
      }
    };
    const getToken = async () => {
      let result;
      try {
        result = await loginGet({
          account: "17855827456",
          password: "123456jia",
        });
        token.value = result.data.result.token;
      } catch (error) {
        console.log("catch error", error);
      }
    };
    const putToken = async () => {
      let result;
      try {
        result = await loginPut({
          account: "17855827456",
          password: "123456jia",
        });
        token.value = result.data.result.token;
      } catch (error) {
        console.log("catch error", error);
      }
    };
    const deleteToken = async () => {
      let result;
      try {
        result = await loginDelete({
          account: "17855827456",
          password: "123456jia",
        });
        token.value = result.data.result.token;
      } catch (error) {
        console.log("catch error", error);
      }
    };
    const handleChange = (info: FileInfo) => {
      if (info.file.status === "done") {
        
      } else if (info.file.status === "error") {
      
      }
    };
    const fileList = ref([]);
    return {
      setToken,
      token,
      submit,
      getToken,
      putToken,
      deleteToken,
      handleChange,
      fileList,
    };
  },
});
</script>

<style scoped lang="less">
@prefixUrl:~"@{globalScoped}-login";

.@{prefixUrl}-container{
    height: 300px;
    background: @colorOrange;
}
</style>