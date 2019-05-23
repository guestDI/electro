import React, { Component } from 'react';
import Catalog from '../../screens/Catalog/Catalog'
import {getAllCategories} from '../../api/axios-categories';
import {getAllItems} from '../../api/axios-items';

class CatalogContainer extends Component {
    state = {
        categories: [],
        items: []
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

        getAllItems()
            .then(
                response => {
                    this.setState({
                        items: response.data.slice()
                    })
                }
            )

    }

    render() {
        return (
            <div>
                <Catalog categories={this.state.categories} items={this.state.items}/>
            </div>
        );
    }
}

export default CatalogContainer;