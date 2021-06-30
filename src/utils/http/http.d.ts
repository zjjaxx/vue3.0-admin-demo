import axios,{AxiosRequestConfig,AxiosResponse} from "axios"
export declare interface AxiosExtendOption{
    transform?:Transform
}
export declare interface Transform{
    requestInterceptor?:RequestInterceptor,
    requesetIntercetorCatch?:RequesetIntercetorCatch,
    responseInterceptor?:ResponseInterceptor,
    responseIntercetorCatch?:ResponseIntercetorCatch
}
export declare interface RequestInterceptor{
    (config:AxiosRequestConfig):AxiosRequestConfig 
}
export declare interface RequesetIntercetorCatch{
    (error:any):any
}
export declare interface ResponseInterceptor{
    (res:AxiosResponse<any>):AxiosResponse<any>
}
export declare interface ResponseIntercetorCatch{
    (error:any):any
}

;
