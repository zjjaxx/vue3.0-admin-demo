import {defineStore} from "pinia"
import store from "/@/store"
import {getLocalStorage} from "../localStorage/index"
import {_TOKEN,_ROLE_LIST} from "../localStorage/constant"
export const useUserStore=defineStore({
    id:"user",
    state(){
        return {
            token:"",
            roleList:["test"],
            asyncRouterLoad:false
        }
    },
    getters:{
        getToken():string|null{
            return this.token||getLocalStorage(_TOKEN)
        },
        getRoleList():string[]|null{
            if(this.roleList.length){
                return this.roleList
            }
            else{
                if(getLocalStorage(_ROLE_LIST)){
                    return JSON.parse(getLocalStorage(_ROLE_LIST) as string) as string[]
                }
                return null
            }
        }
    }
})

export function useUserStoreWithout(){
    return useUserStore(store)
}