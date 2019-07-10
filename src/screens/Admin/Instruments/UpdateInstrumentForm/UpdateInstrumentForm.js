import React, { Component } from 'react';
import Input from '../../../../components/Input/Input'
import Textarea from '../../../../components/Textarea/Textarea'
import moment from 'moment';

class UpdateInstrumentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            price: null
        };

        this.myRef = React.createRef();
    }

    componentWillReceiveProps(nextProps, props){

        if(this.props.itemName!==nextProps.itemName){
            this.setState({
                itemName: nextProps.itemName
            })
        }
    }

    onNameChanged = text => {
        this.setState({
            name: text,
        })

    }

    onDescChanged = text => {
        this.setState({
            description: text,
        })
    }

    onPriceChanged = text => {
        this.setState({
            price: parseInt(text),
        })
    }

    closeModal = () => {
        this.myRef.current.click();
        this.setState({
            name: "",
            description: "",
            price: null
        })
    }

    updateItem = e => {
        let item = Object.assign({}, this.state)
        item.id = this.props.instrumentId
        e.preventDefault(e);

        this.props.onUpdate(item)
            .then(response => console.log(response))
            .then(this.closeModal)

    }



    render() {
        return (
            <div className="modal fade" id="updateModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateModalLongTitle">Обновить</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="requestForm" onSubmit={this.updateItem}>
                                <div className="row">
                                    <div className={`col-md-6`} style={{paddingRight: '10px'}}>
                                        <span style={{fontSize: '12px'}}>Название <span style={{color: 'red'}}>*</span></span>
                                        <Input required min="3" max="20" type="text"
                                               onTextChanged={this.onNameChanged} name="name"
                                               placeholder="Название" />
                                    </div>
                                    <div className={` col-md-6`} >
                                        <span style={{fontSize: '12px'}}>Цена<span style={{color: 'red'}}>*</span></span>
                                        <Input  required min="1" max="9" type="text" restrictType="text"
                                               onTextChanged={this.onPriceChanged} name="price" placeholder="Цена"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-12 `}>
                                        <span style={{fontSize: '12px'}}>Описание <span style={{color: 'red'}}>*</span></span>
                                        <Textarea style={{width: '300px', height: '100px'}}
                                                  required min="6" max="500" type="text" onTextChanged={this.onDescChanged}
                                                  name="message" placeholder="Описание" predefined={this.props.itemName}/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" id="mod_cls"
                                            style={{fontSize: '13px'}}>Отмена</button>
                                    <input type="submit" value="Отправить" className={`btn `}/>
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

export default UpdateInstrumentForm;