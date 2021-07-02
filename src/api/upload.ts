import {axiosInstance} from "/@/utils/http/index"
import {ResResult} from "/@/utils/http/http.d"
interface UploadReuslt{
    url:string
}
export const upload=(formData:FormData)=>axiosInstance.uploadFile<ResResult<UploadReuslt>>("/v1/common/upload",formData)