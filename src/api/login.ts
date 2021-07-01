import {axiosInstance} from "/@/utils/http/index"
import {ResResult} from "/@/utils/http/http.d"
export interface loginResult{
    token:string
}
export interface loginParams{
    account:string
    password:string
}
export const login=(data: loginParams)=>axiosInstance.post<ResResult<loginResult>>("/api/login",data)
export const loginForm=(data: loginParams)=>axiosInstance.supportFormData<ResResult<loginResult>>("/api/login",data)
export const loginGet=(data: loginParams)=>axiosInstance.get<ResResult<loginResult>>("/api/login",data)
export const loginPut=(data: loginParams)=>axiosInstance.put<ResResult<loginResult>>("/api/login",data)
export const loginDelete=(data: loginParams)=>axiosInstance.delete<ResResult<loginResult>>("/api/login",data)