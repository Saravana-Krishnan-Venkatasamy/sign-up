import ApiFun from '../../_services/api'
export const GetRegister = (props) => {
    console.log(props);
    ApiFun.postApi('register', { firstName: props.data.firstName, lastName: props.data.lastName, userName: props.data.username, email: props.data.email, password: props.data.password })
        .then(json => {
            console.log(json.data, 'response of register api----');
            if (json.data.responseCode === 200) {
                this.props.history.push('/login')
            }
            else {
                this.props.history.push('/register')
            }
        }).catch((error) => {
            console.log("error-----------", error)
        })
    // this.props.history.push('/login')
}

