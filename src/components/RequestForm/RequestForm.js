import React, { Component } from 'react';
// import Input from '../../shared_components/Input/index'
// import CommonButton from '../../shared_components/CommonButton/index'
import classes from "./RequestForm.module.css";

class RequestForm extends Component {
    // static defaultProps = {
    //     isModal: true
    // };

    // onClose = () => {
    //     this.props.history.goBack();
    // };
    //
    // login = (e) => {
    //     e.preventDefault(e);
    //     this.props.history.push('home');
    // }

    render() {
        // console.log('call')
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm;