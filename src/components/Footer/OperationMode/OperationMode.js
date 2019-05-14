import React from 'react';
import classes from './OperationMode.module.css';

const operationMode = (props) =>{
    let times = (
        props.times.map((d, i)=>{
            return(
                <li key={`${i}`} className={classes.Mode_row}>
                    <span>{d.day}</span>
                    <span>{d.time}</span>
                </li>
            )
        })
    )

    return(
        <div>
            <h4 className={classes.Title}>Режим работы</h4>
            <ul className={classes.Operation_mode_section}>
                {times}
            </ul>
        </div>
    )
}

export default operationMode;