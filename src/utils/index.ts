import {EnvConfig} from "../../types/envConfig"
export function getGlobalEnv():EnvConfig{
    const isBuild=import.meta.env.PROD
    if(isBuild){
        const {VITE_GLOB_APP_TITLE}=import.meta.env as unknown as EnvConfig
        const envConfig= window[("_PRODUCTION_"+VITE_GLOB_APP_TITLE )as any]
        return envConfig as unknown as EnvConfig
    }
    else{
        return import.meta.env  as unknown  as EnvConfig
    }
}