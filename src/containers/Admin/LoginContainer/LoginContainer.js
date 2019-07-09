import React, { Component } from 'react';
import Login from '../../../screens/Admin/Login/Login';
import {login} from '../../../api/axios-users';
import { withRouter } from "react-router";

class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
        }
    }

    onLogin = (text) => {
        console.log(text)
        login(text)
            .then(response => {
                // console.log(response)
                 this.setState({isAuthenticated: true})
                 // this.props.browserHistory.push({
                 //     pathname: '/dashboard',
                 //     state: {isAuthenticated: true}
                 // })
            })

    }

    render() {
        return (
            <Login onLogin={this.onLogin}/>
        );
    }
}

export default LoginContainer;