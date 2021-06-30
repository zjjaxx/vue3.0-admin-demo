
import axios,{AxiosRequestConfig,Canceler} from "axios"
const cancelMap=new Map<string,Canceler>()
export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');
export class ZAxiosCancel{
   addPending(config:AxiosRequestConfig){
        this.removePending(config);
        const url=getPendingUrl(config)
        config.cancelToken =
        config.cancelToken ||
        new axios.CancelToken((cancel) => {
          cancelMap.set(url,cancel)
        })
   }
   removePending(config:AxiosRequestConfig){
        const url=getPendingUrl(config)
        if(cancelMap.has(url)){
            let cancel=cancelMap.get(url)
            cancel&&cancel()
            cancelMap.delete(url)
        }
   }
   removeAllPending() {
    cancelMap.forEach((cancel) => {
       cancel();
    });
    cancelMap.clear();
  }
}

