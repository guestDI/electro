import React, { Component } from 'react';
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import classes from "./RequestForm.module.css";
import { saveApplication } from "../../api/axios-applications"

class RequestForm extends Component {
    state = {
        name: "",
        phone: "",
        description: ""
    };

    onUsernameChanged = text => {
        this.setState({
            name: text,
        })

    }

    onPhoneChanged = text => {
        this.setState({
            phone: text,
        })
    }

    onMessageChanged = text => {
        this.setState({
            description: text,
        })
    }

    addApplication = () => {
        saveApplication(this.state)
            .then(response => console.log(response))
    }



    render() {
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
                            <div className="row" style={{paddingBottom: '10px'}}>
                                <span className={`col-md-12 col-sm-12 ${classes.desc}`}>
                                    Здесь вы можете оставить заявку на интересющий вас инструмент. Укажите имя, контактный  телефон
                                    и инструмент, который вы хотели бы взять в аренду. Наши специалисты свяжутся с вами в кратчайшие сроки.
                                    Вы также можете указать тип работ и мы подскажем, какой инструмент лучше всего вам подойдет.
                                </span>
                            </div>
                            <form className={classes.request_form}>
                                <div className="row">
                                    <div className={`${classes.input} col-md-6`} style={{paddingRight: '10px'}}>
                                        <span>Ваше имя <span style={{color: 'red'}}>*</span></span>
                                        <Input className={classes.input_field} required min="3" max="20" type="text" onTextChanged={this.onUsernameChanged}
                                               name="name" placeholder="Ваше имя" />
                                    </div>
                                    <div className={`${classes.input} col-md-6`} style={{paddingLeft: '25px'}}>
                                        <span>Телефон <span style={{color: 'red'}}>*</span></span>
                                        <Input className={classes.input_field} required min="9" max="17" type="text" onTextChanged={this.onPhoneChanged}
                                               name="phone" placeholder="Телефон" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-12 ${classes.input}`}>
                                        <span>Сообщение <span style={{color: 'red'}}>*</span></span>
                                        <Textarea className={`${classes.input_field} ${classes.input_field__message}`}
                                                  required min="6" max="256" type="text" onTextChanged={this.onMessageChanged}
                                            name="message" placeholder="Сообщение" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                            <button type="button" className={`btn ${classes.primary_button}`} onClick={this.addApplication} data-dismiss="modal">Подтвердить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm;