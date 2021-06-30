import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
import { AxiosExtendOption } from "./http"
import { ZAxiosCancel } from "./ZAxiosCancel"
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
    getInstance(): AxiosInstance {
        return this.instance
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


}
export default ZAxios