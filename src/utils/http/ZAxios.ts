import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios"
import { AxiosExtendOption} from "./http"
import { ZAxiosCancel } from "./ZAxiosCancel"
import {ContentTypeEnum} from "./httpEnum"
class ZAxios {
    private config: AxiosRequestConfig
    private instance: AxiosInstance
    private axiosExtendOption: AxiosExtendOption
    constructor(config: AxiosRequestConfig, axiosExtendOption: AxiosExtendOption) {
        this.config = config
        this.axiosExtendOption = axiosExtendOption
        this.instance = axios.create(config)
        this.setInterceptor()
    }
    setInterceptor() {
        if (!this.axiosExtendOption.transform) {
            return
        }
        const {
            requesetIntercetorCatch,
            requestInterceptor,
            responseInterceptor,
            responseIntercetorCatch

        } = this.axiosExtendOption.transform
        let cancel: ZAxiosCancel
        // Add a request interceptor
        this.instance.interceptors.request.use(_config => {
            let ignoreCancel = _config.headers?.ignoreCancel || this.config.headers?.ignoreCancel
            if (!ignoreCancel) {
                cancel = new ZAxiosCancel()
                cancel.addPending(_config)
                if(requestInterceptor){
                    _config = requestInterceptor(_config)
                }
            }
            return _config
        }, requesetIntercetorCatch);
        this.instance.interceptors.response.use(res => {
            if (cancel) {
                cancel.removePending(res.config)
            }
            if(responseInterceptor){
                res=responseInterceptor(res)
            }
            return res
        }, responseIntercetorCatch);
    }
    supportFormData<T=any>(url:string,data:object):Promise<AxiosResponse<T>>{
       return this.instance.post<T>(url,data,{headers:{"Content-Type":ContentTypeEnum.FORM_URLENCODED}})
    }
    uploadFile<T=any>(url:string,data:FormData):Promise<AxiosResponse<T>>{
        return this.instance.post<T>(url,data,{headers:{"Content-Type":ContentTypeEnum.FORM_DATA}})
    }
    post<T=any>(url:string,data:object):Promise<AxiosResponse<T>>{
        return this.instance.post<T>(url,data)
    }
    get<T=any>(url:string,params:object):Promise<AxiosResponse<T>>{
        return this.instance.get<T>(url,{params})
    }
    put<T=any>(url:string,data:object):Promise<AxiosResponse<T>>{
        return this.instance.put<T>(url,data)
    }
    delete<T=any>(url:string,data:object):Promise<AxiosResponse<T>>{
        return this.instance.delete<T>(url,{params:data})
    }

}
export default ZAxios