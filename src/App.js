import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/login/index'
import Register from './components/register/index'
import Home from './components/home/index'
import { routes } from '../src/routes/routes'
import NotFound from '../src/components/PageNotFound/pageNotFound'
//import Container from './components/container/container'
class App extends Component {
render() {
return (
<div className="jumbotron">
<div className="container">
<div className="col-sm-8 col-sm-offset-2">
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route path="*" component={NotFound}/>
            {
            routes.map(r=><Route key={r.path} path={r.path} exact={r.exact} component={r.component} name={r.name} />)
            }
        
        
        </Switch>
</Router>
</div>
</div>
</div>
);
}
}
 
export default App;