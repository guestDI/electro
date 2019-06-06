import React, { Component } from 'react';
import Welcome from '../../screens/Welcome/Welcome'
import {getAllCategories} from '../../api/axios-categories';
import RequestForm from '../../components/RequestForm/RequestForm';

class WelcomeContainer extends Component {
    state = {
        categories: [],
        name: ""
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

    redirectToCatalog = (id) => {
        // e.preventDefault();
        this.props.history.push({
            pathname: 'equipment',
            state: { id: id }
        })
    }

    render() {
        return (
            <div>
                <RequestForm itemName={this.state.name}/>
                <Welcome categories={this.state.categories} goToCatalog={this.redirectToCatalog}/>
            </div>
        );
    }
}

export default WelcomeContainer;