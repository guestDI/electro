import React, { Component } from 'react';
import Login from '../../../screens/Admin/Login/Login'

class LoginContainer extends Component {
    state = {
        name: ""
    }

    componentDidMount(){

    }

    onLogin = (e) => {
        e.preventDefault()
        this.props.history.push({
            pathname: 'dashboard'
        })
    }

    render() {
        return (
            <Login onLogin={this.onLogin}/>
        );
    }
}

export default LoginContainer;