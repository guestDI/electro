import React, { Component } from 'react';
import Catalog from '../../screens/Catalog/Catalog'
import {getAllCategories} from '../../api/axios-categories';
import {getAllItems, getItemsByCategory} from '../../api/axios-items';
import {animateScroll} from 'react-scroll';

class CatalogContainer extends Component {
    state = {
        categories: [],
        items: [],
        id: 1
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

        let temp_id = null;
        if(this.props.location.state){
            temp_id = this.props.location.state.id
            this.setState({
                id: this.props.location.state.id
            })
        } else {
            temp_id = 1
        }
        // console.log(id)
        getItemsByCategory(temp_id)
            .then(
                response => {
                    this.setState({
                        items: response.data.slice()
                    })
                }
            )
    }

    getItems = (id) => {
        getItemsByCategory(id)
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
                <Catalog categories={this.state.categories} items={this.state.items} getItemsByCategory={this.getItems}
                         catId={this.state.id}
                />
            </div>
        );
    }
}

export default CatalogContainer;