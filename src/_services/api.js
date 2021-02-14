import axios from 'axios'
//const baseUrl="http://localhost:3000/"
const baseUrl="http://jsonplaceholder.typicode.com"
 
class ApiFun {
 
static postApi(url,data){
return axios.post(baseUrl + url, data);
}
 
static getApi(url){
return axios.get(baseUrl + url);
}
}
 
export default ApiFun