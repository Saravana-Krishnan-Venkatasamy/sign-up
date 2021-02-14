//import ApiFun from '../../_services/api'
 const GetLogin = (data) => {  
    let response = 'failure'
    if(data.email==='Eliseo@gardner.biz' && data.password ==='Abc@123')
        response='success';
    
    return response;
}
export default GetLogin;

/*ApiFun.postApi('posts', { email: data.email, password: data.password })
        .then(json => {
           
            if(json.status===201){//if (json.data.result && json.data.result.length > 0)
                 
                 console.log(json.status);
                 response = 'success';
            }
            else {
    
                response = 'failure';
            }
        }).catch((error) => {
            alert('login failed. Try later!')
        })*/