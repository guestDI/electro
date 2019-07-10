import React, { Component } from 'react';
import InstrumentsTable from '../../../screens/Admin/Instruments/InstrumentsTable';
import Menu from '../../../screens/Admin/Instruments/Menu/Menu';
import { getItemsByCategory, updateItemStatus, deleteInstrument, updateInstrument } from '../../../api/axios-items';
import { getAllCategories } from '../../../api/axios-categories';
import {default as AdminBar} from '../../../screens/Admin/Navigation/Toolbar/Toolbar';
import { withRouter } from "react-router-dom";
import UpdateInstrumentForm from '../../../screens/Admin/Instruments/UpdateInstrumentForm/UpdateInstrumentForm'

class InstrumentsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            instrumentId: null,
            instruments: [],
            categories: [],
            updated: "",
            deleted: ""
        }
    }

    componentDidMount(){
        getAllCategories()
            .then(
                response => {
                    // console.log(response)
                    this.setState({
                        categories: response.data.slice()
                    })
                }
            )
    }

    getItems = (id) => {
        getItemsByCategory(id)
            .then(
                response => {
                    this.setState({
                        instruments: response.data.slice()
                    })
                }
            )
    }

    updateItem = (id, status) => {
        updateItemStatus(id, status)
            .then(
                response => {
                    if(response.status===200){
                        this.setState({
                            updated: "success"
                        })
                    }
                }
            )
    }

    deleteInstrumentById = (id) => {
        deleteInstrument(id)
            .then(
                response => {
                    if(response.status===200){
                        this.setState({
                            deleted: "success"
                        })
                    }
                }
            )
    }

    onUpdateRequested = (text) => {
        this.setState({
            instrumentId: text
        })
    }

    render() {
        return (
            <div>
                <UpdateInstrumentForm instrumentId={this.state.instrumentId} onUpdate={updateInstrument}/>
                <AdminBar/>
                <Menu onClick={this.getItems} menuItems={this.state.categories}/>
                <InstrumentsTable instruments={this.state.instruments}
                                  updateItemStatus={this.updateItem}
                                  deleteInstrument={this.deleteInstrumentById}
                                  onUpdate={this.onUpdateRequested}
                />
            </div>
        );
    }
}

export default InstrumentsContainer;