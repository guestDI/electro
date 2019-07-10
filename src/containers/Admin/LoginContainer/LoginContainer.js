import React, { Component } from 'react';
import Login from '../../../screens/Admin/Login/Login';
import Auth from '../../../hoc/Auth/Auth';

class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
        }
    }

    onLogin = (obj) => {
        Auth.login(obj, ()=>{
            this.props.history.push("/dashboard")
        })
    }

    render() {
        return (
            <Login onLogin={this.onLogin}/>
        );
    }
}

export default LoginContainer;