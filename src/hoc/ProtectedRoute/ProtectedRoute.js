import React from 'react';
import {
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'
import Auth from '../Auth/Auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(Auth.isAuthentificated()){
                    return <Component {...props}/>
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/admin",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }}
        />
    );
};

export default ProtectedRoute;