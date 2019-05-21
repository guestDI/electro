import React, { Component } from 'react';
import Catalog from '../../screens/Catalog/Catalog'
import {getAllCategories} from '../../api/axios-categories';

class CatalogContainer extends Component {
    state = {
        categories: []
    }

    componentDidMount(){
        getAllCategories()
            .then(
                response => {
                    this.setState({
                        categories: response.data.slice()
                    })
                }
            )

        // console.log(this.state.categories)

    }

    render() {
        return (
            <div>
                <Catalog categories={this.state.categories}/>
            </div>
        );
    }
}

export default CatalogContainer;