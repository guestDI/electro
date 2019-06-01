import React, { Component } from 'react';
import Catalog from '../../screens/Catalog/Catalog'
import {getAllCategories} from '../../api/axios-categories';
import {getAllItems, getItemsByCategory} from '../../api/axios-items';
import {animateScroll} from 'react-scroll';

class CatalogContainer extends Component {
    state = {
        categories: [],
        items: []
    }

    componentDidMount(){
        animateScroll.scrollToTop({
            duration: 600,
            delay: 0,
            smooth: 'easeInOutQuart'
        })

        getAllCategories()
            .then(
                response => {
                    this.setState({
                        categories: response.data.slice()
                    })
                }
            )


        // getAllItems()
        //     .then(
        //         response => {
        //             this.setState({
        //                 items: response.data.slice()
        //             })
        //         }
        //     )

        // let id = this.props.location.state.id ? this.props.location.state.id : 1

        getItemsByCategory(this.props.location.state.id)
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