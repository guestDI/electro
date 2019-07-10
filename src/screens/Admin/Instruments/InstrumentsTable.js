import React from 'react';
import classes from './InstrumentsTable.module.css';

const instrumentsTable = (props) => {
    function onItemUpdate(id){
        if(props.onUpdate){
            props.onUpdate(id)
        }
    }

    let instruments = props.instruments.map((i, ind) => {
        let attachedClass = [classes.availability_button, "badge"];
        attachedClass = i.availability ? [...attachedClass, "badge-success"] : [...attachedClass, "badge-secondary"];

        let availabilityText = i.availability ? 'В наличии' : 'В аренде';
        let currentStatus = i.availability;
        return(
            <tr key={`${ind}`} className={classes.applicationRow}>
                <td>{i.id}</td>
                <td style={{maxWidth: '100px'}}>{i.name}</td>
                <td style={{maxWidth: '200px'}}>{i.description}</td>
                <td>
                    <div className={attachedClass.join(' ')} onClick={() => props.updateItemStatus(i.id, !currentStatus)}>
                        {availabilityText}
                    </div>
                </td>
                <td>
                    <button data-toggle="modal" onClick={() => onItemUpdate(i.id)}
                            data-target="#updateModalCenter">Изменить</button>
                    <button onClick={() => props.deleteInstrument(i.id)}>Удалить</button>
                </td>
            </tr>
        )
    })

    return(
        <div>
            <h4>Инструменты</h4>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Детали</th>
                    <th scope="col">Статус</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {instruments}
                </tbody>
            </table>
        </div>
    )
}

export default instrumentsTable;