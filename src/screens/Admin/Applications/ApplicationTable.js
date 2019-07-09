import React from 'react';
 import classes from './ApplicationTable.module.css';

const applicationTable = (props) => {
    let applications = props.applications.map((app, ind) => {
        let attachedClass = [classes.active_button, "badge"];
        attachedClass = app.active ? [...attachedClass, "badge-success"] : [...attachedClass, "badge-secondary"];

        let availabilityText = app.active ? 'Новая' : 'Закрыта';
        let currentStatus = app.active;

        return(
            <tr key={`${ind}`} className={classes.applicationRow}>
                <td>{app.id}</td>
                <td>{app.applicationDate}</td>
                <td>{app.name}</td>
                <td>{app.phone}</td>
                <td>{app.description}</td>
                <td>
                    <div className={attachedClass.join(' ')} onClick={() => props.updateApplicationStatus(app.id, !currentStatus)}>
                        {availabilityText}
                    </div>
                </td>
            </tr>
        )
    })

    return(
        <div>
            <h4>Заявки</h4>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Заявка</th>
                    <th scope="col">Статус</th>
                </tr>
                </thead>
                <tbody>
                {applications}
                </tbody>
            </table>
        </div>
    )
}

export default applicationTable;