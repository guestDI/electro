import React, { Component } from 'react';
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import classes from "./RequestForm.module.css";
import { saveApplication } from "../../api/axios-applications";
import moment from 'moment';

class RequestForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phone: "",
            description: "",
            applicationDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss')
        };

        this.myRef = React.createRef();
    }

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

    closeModal = () => {
        this.myRef.current.click();
    }

    addApplication = e => {
        e.preventDefault(e);

        saveApplication(this.state)
            .then(response => console.log(response))
            .then(this.closeModal)

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
                                    Здесь вы можете оставить заявку на интересующий вас инструмент. Укажите имя, контактный  телефон
                                    и инструмент, который вы хотели бы взять в аренду. Наши специалисты свяжутся с вами в кратчайшие сроки.
                                    Вы также можете указать тип работ и мы подскажем, какой инструмент лучше всего вам подойдет.
                                </span>
                            </div>
                            <form className={classes.request_form} id="requestForm" onSubmit={this.addApplication}>
                                <div className="row">
                                    <div className={`${classes.input} col-md-6`} style={{paddingRight: '10px'}}>
                                        <span style={{fontSize: '12px'}}>Ваше имя <span style={{color: 'red'}}>*</span></span>
                                        {/*<input required placeholder="Ваше имя" />*/}
                                        <Input className={classes.input_field} required min="3" max="20" type="text"
                                               onTextChanged={this.onUsernameChanged} name="name"
                                               placeholder="Ваше имя" />
                                    </div>
                                    <div className={`${classes.input} col-md-6`} >
                                        <span style={{fontSize: '12px'}}>Телефон (+375)<span style={{color: 'red'}}>*</span></span>
                                        <Input className={classes.input_field} required min="9" max="9" type="text" restrictType="text"
                                               onTextChanged={this.onPhoneChanged} name="phone" placeholder="Телефон"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-12 ${classes.input}`}>
                                        <span style={{fontSize: '12px'}}>Сообщение <span style={{color: 'red'}}>*</span></span>
                                        <Textarea className={`${classes.input_field} ${classes.input_field__message}`}
                                                  required min="6" max="500" type="text" onTextChanged={this.onMessageChanged}
                                            name="message" placeholder="Сообщение" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" id="mod_cls"
                                            style={{fontSize: '13px'}}>Отмена</button>
                                    <input type="submit" value="Отправить" className={`btn ${classes.primary_button}`}/>
                                    {/*<button style={{display: 'none'}} data-dismiss="modal"/>*/}
                                    <button ref={this.myRef} type="button" className={`btn `}
                                            style={{fontSize: '13px', display: 'none'}} data-dismiss="modal" id="mod_sbm"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm;