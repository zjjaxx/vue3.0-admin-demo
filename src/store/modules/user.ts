import {defineStore} from "pinia"

export const useUserStore=defineStore({
    id:"user",
    state(){
        return {
            token:""
        }
    },
    getters:{
        getToken():string{
            return this.token
        }
    }
})