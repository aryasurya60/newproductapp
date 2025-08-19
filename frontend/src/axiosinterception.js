import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:'http://localhost:5000'
})
axiosInstance.interceptors.request.use((config)=>{ //config cheyyan vendi
    const accessToken=localStorage.getItem("token") // token read cheyyan
    if (accessToken){
        if(config){
            config.headers.token=accessToken;  // ee token aan backend il kodthatg productroute 
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error)  // async aya progrm manage cheyyan promise
}
)
export default axiosInstance;  


//axios -purath data fetch cheyyan