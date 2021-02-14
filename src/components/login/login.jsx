import React from 'react';
import {Link,withRouter, Redirect} from 'react-router-dom';
import GetLogin from './getLoginResponse';
import '../../App.css';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '', goto: false, redirect:'/home' }
    }
    componentWillMount() {
        console.log("Component will mount")
    }   
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitData =(e) =>{      
       let response = GetLogin(this.state);
       if (response === 'success')
            this.setState({ goto: true });
       else
            alert('login failed. Try later!');        
    }
    render() {
        if(this.state.goto)
            return( <Redirect to={this.state.redirect} /> );
        return (
            <div className="form-comp cfb">
                <h2>Login Form</h2>
                <form className="sign-up-form cfb">                           
                    <label>Email:
                        <input type="email" name="email"  onChange={this.handleChange} value={this.state.email} />                    
                    <br/>
                    </label>                   
                    <label>Password: 
                        <input type="password" name="password"  onChange={this.handleChange} value={this.state.password} />
                    <br/>
                    </label>
                    <button type="button" className="btn btn-primary" onClick={this.submitData}>Login</button>
                    <Link to = '/register'><b>Register</b></Link>
                </form>
            </div>
        )
    }
}
export default withRouter(Login);