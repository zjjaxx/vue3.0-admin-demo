import axios,{ AxiosRequestConfig,AxiosInstance} from "axios"

class ZAxios{
    private config:AxiosRequestConfig
    private instance:AxiosInstance
    constructor(config:AxiosRequestConfig){
        this.config=config
        this.instance=axios.create(config)
        this.setInterceptor()
    }
    getInstance():AxiosInstance{
        return this.instance
    }
    setInterceptor(){}
   
}
export default ZAxios