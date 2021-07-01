import ZAxios from "./ZAxios"
import {Transform,ResResult} from "./http.d"
import {ContentTypeEnum} from "./httpEnum"
import {AxiosRequestConfig,AxiosResponse} from "axios"
import {message} from "ant-design-vue"
import {useUserStoreWithout} from "/@/store/modules/user"
import qs from "qs"
const transform:Transform={
    requestInterceptor:(config:AxiosRequestConfig)=>{
        const userStore=useUserStoreWithout()
        const token=userStore.getToken
        if(token){
            config.headers.Authorization=token
        }
        if(config.headers["Content-Type"]==ContentTypeEnum.FORM_URLENCODED&&config.data&&config.method=="post"){
            config.data=qs.stringify(config.data)
        }
        return config
    },
    responseInterceptor:(res:AxiosResponse<ResResult>)=>{
        if(res.data.code!=200){
            message.error(res.data.msg);
            throw new Error(res.data.msg)
        }
        return res
    }
}
const config:AxiosRequestConfig={
    timeout:5000,
    headers: { 'Content-Type': ContentTypeEnum.JSON }
}

const axiosInstance=new ZAxios(config,{transform})

export {axiosInstance}