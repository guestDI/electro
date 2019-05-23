import React, { Component } from 'react';
import Welcome from '../../screens/Welcome/Welcome'
import {getAllItems} from '../../api/axios-items';
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

    render() {
        return (
            <div>
                <Welcome categories={this.state.categories}/>
            </div>
        );
    }
}

export default WelcomeContainer;