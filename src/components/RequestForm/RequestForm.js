import React, { Component } from 'react';
 import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
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
                            <h5 className="modal-title" id="exampleModalLongTitle">Оставить заявку</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className={classes.contact_form}>
                                <div className="row">
                                    <div className={`${classes.input} col-md-6`} style={{paddingRight: '10px'}}>
                                        <Input className={classes.input_field} required min="3" max="20" type="text" onTextChanged={this.onUsernameChanged}
                                               name="username" placeholder="Ваше имя" />
                                    </div>
                                    <div className={`${classes.input} col-md-6`} style={{paddingLeft: '25px'}}>
                                        <Input className={classes.input_field} required min="9" max="17" type="text" onTextChanged={this.onSubjectChanged}
                                               name="email" placeholder="Телефон" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 input-box">
                                        <Input className="input-field" required min="6" max="14" type="text" onTextChanged={this.onSubjectChanged}
                                               name="subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 input-box">
                        <Textarea className="message-input-field" required min="6" max="256" type="text" onTextChanged={this.onMessageChanged}
                                  name="message" placeholder="Message" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                            <button type="button" className={`btn ${classes.primary_button}`}>Подтвердить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm;