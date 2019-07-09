import React, { Component } from 'react';
import ApplicationTable from '../../../screens/Admin/Applications/ApplicationTable';
import { getAllApplications, updateApplicationStatus } from '../../../api/axios-applications';
import {default as AdminBar} from '../../../screens/Admin/Navigation/Toolbar/Toolbar';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            applications: [],
            updated: ""
        }
    }

    componentDidMount(){
        getAllApplications()
            .then(
                response => {
                    this.setState({
                        applications: response.data.slice()
                    })
                }
            )
    }

    updateApplication = (id, status) => {
        updateApplicationStatus(id, status)
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

    render() {
        return (
            <div>
                <AdminBar/>
                <ApplicationTable applications={this.state.applications} updateApplicationStatus={this.updateApplication}/>
            </div>
        );
    }
}

export default DashboardContainer;