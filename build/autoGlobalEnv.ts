import * as fs from "fs"
import path from "path"
import {getEnvConfig} from "./utils"
const autoCreateFile=()=>{
    const envConfig= getEnvConfig()
    const content=`window._PRODUCTION_${envConfig.VITE_GLOB_APP_TITLE}=${JSON.stringify(envConfig)};
    Object.freeze(window.${envConfig.VITE_GLOB_APP_TITLE});
    Object.defineProperty(window, "${envConfig.VITE_GLOB_APP_TITLE}", {
      configurable: false,
      writable: false,
    });`
    fs.writeFileSync(path.resolve(__dirname,`../dist/${envConfig.VITE_GLOB_APP_TITLE}.config.js`),content)
}

autoCreateFile()

