import React from 'react';
import classes from './InstrumentsTable.module.css';

const instrumentsTable = (props) => {
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