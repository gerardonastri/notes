import axios from "axios"
import Cookies from 'js-cookie'

const  BASE_URL = "http://localhost:8000/api/";


//axios.defaults.xsrfCookieName = "csrftoken";
//axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//const csrftoken = Cookies.get('csrftoken') 

const axiosReq = axios.create({
    baseURL:  BASE_URL,
    //headers: {
     //   'X-CSRFTOKEN': csrftoken
    //},
    //withCredentials: true
})


export default axiosReq