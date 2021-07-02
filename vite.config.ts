import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import path from "path"
import styleImport from 'vite-plugin-style-import';
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { minifyHtml, injectHtml } from 'vite-plugin-html';
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  const { VITE_GLOB_APP_TITLE } = env
  const isBuild = command === 'build';
  const pluginList = [
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
      ]
    }),
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
  if (isBuild) {
    //浏览器兼容
    pluginList.push(legacy({
      targets: ['defaults', 'not IE 11']
    }))
  }
  return {
    resolve: {
      alias: [{
        find: "/@/",
        replacement: root + "/src/"
      },
      {
        find: "/@types/",
        replacement: root + "/types/"
      },
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${path.resolve(__dirname, "./src/assets/style/global.less")}";`,
          javascriptEnabled: true,
        },
      },
    },
    plugins: pluginList,
    server: {
      port:3333,
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://rest.apizza.net/mock/30426cf953086844e5cc7e40c96f174e',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
         // 选项写法
         '/v1': {
          target: 'http://localhost:3000',
          changeOrigin: true
        }
      }
    }
  }
}
