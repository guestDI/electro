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
                response => console.log(response.data)
            )


        // getAllItems()
        //     .then(
        //         response => console.log(response.data)
        //     )

        // console.log(this.state.categories)
    }

    render() {
        return (
            <div>
                <Welcome/>
            </div>
        );
    }
}

export default WelcomeContainer;