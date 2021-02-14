import React from 'react';
import Table from '../Table/table.component'

class Home extends React.Component {

    logout = () => {
        this.props.history.push('/login')
    }
    render() {
        return <div>
            <h2>Login Successful!</h2>
            <h3>Welcome to Home Page</h3>
            <button className="btn btn-default" onClick={this.logout}>Logout</button>
            <Table></Table>
        </div>
    }
}

export default Home;