import axios from "axios"
import Cookies from 'js-cookie'

const  BASE_URL = "https://jer-notes-api.herokuapp.com/api/";


//axios.defaults.xsrfCookieName = "csrftoken";
//axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//const csrftoken = Cookies.get('csrftoken') 

const axiosReq = axios.create({
    baseURL:  BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
    }
    //headers: {
     //   'X-CSRFTOKEN': csrftoken
    //},
    //withCredentials: true
})


export default axiosReq