import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { minifyHtml, injectHtml } from 'vite-plugin-html';
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  const { VITE_GLOB_APP_TITLE } = env
  const isBuild = command === 'build';
  const pluginList = [
    vue(),
    // vite-plugin-html
    minifyHtml(),
    injectHtml({
      injectData: {
        title: VITE_GLOB_APP_TITLE,
        injectScript: isBuild ? `<script src="./${VITE_GLOB_APP_TITLE}.config.js"></script>` : '',
      }
    })
  ]
  if(isBuild){
    //浏览器兼容
    pluginList.push(legacy({
      targets: ['defaults', 'not IE 11']
    }))
  }
  return {
    resolve:{
      alias:[{
        find:"/@/",
        replacement:root+"/src/"
      }]
    },
    plugins: pluginList
  }
}
