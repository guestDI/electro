import React, { Component } from 'react';
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Table from '../StockView/Table/Table';
import classes from "./StockView.module.css";

class StockView extends Component {
    render(){
        return(
            <div className="modal fade" id="equipmentModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Статус инструмента</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row" style={{paddingBottom: '10px'}}>
                                <span className={`col-md-12 col-sm-12 ${classes.desc}`}>
                                    Здесь вы можете посмотреть характеристики и наличие интересющего вас инструмента.
                                </span>
                            </div>
                            <Table/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                            <button type="button" className={`btn ${classes.primary_button}`}>Подтвердить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockView;