import {defineStore} from "pinia"

const useAppStore=defineStore({
    id:"app",
    state(){
        return {
            isLogin:false
        }
    }
})

export default useAppStore