import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { GetRegister } from './getRegisterResponse'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', lastName: '', username: '', email: '', password: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitData = (e) => {

        <GetRegister data = {this.state}></GetRegister>
    }
    render() {
        return (
            <div className="form-comp cfb">
                <h2>Registration Form</h2>
                <form className="sign-up-form cfb">                   
                        <label>First Name:
                            <input type="text" name="firstName"  onChange={this.handleChange} value={this.state.firstName} />
                        <br/>
                        </label>
                        <label>Last Name:
                            <input type="text" name="lastName"  onChange={this.handleChange} value={this.state.lastName} />
                        <br/>
                        </label>                  
                        <label>Username:
                            <input type="username" name="username" onChange={this.handleChange} value={this.state.username} />
                        <br/>
                        </label>                              
                        <label>Email:
                            <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                        <br/>
                        </label>                           
                        <label>Password: 
                            <input type="password" name="password"  onChange={this.handleChange} value={this.state.password} />
                        <br/>
                        </label>
                    <button type="button" className="btn btn-primary" onClick={this.submitData}>Register</button>
                    <Link to = '/login'><b>Login</b></Link>
                </form>
            </div>

        )
    }
}
export default withRouter(Register);