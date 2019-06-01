import React, { Component } from 'react';
import Welcome from '../../screens/Welcome/Welcome'
import {getAllCategories} from '../../api/axios-categories';

class WelcomeContainer extends Component {
    state = {
        categories: []
    };

    componentDidMount(){
        getAllCategories()
            .then(
                response => {
                    this.setState({
                        categories: response.data.slice()
                    })
                }
            )
    }

    redirectToCatalog = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: 'equipment',
            state: { id: 2 }
        })
    }

    render() {
        return (
            <div>
                <Welcome categories={this.state.categories} goToCatalog={this.redirectToCatalog}/>
            </div>
        );
    }
}

export default WelcomeContainer;