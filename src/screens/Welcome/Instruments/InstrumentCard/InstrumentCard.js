import React from 'react';
import classes from './InstrumentCard.module.css';

const instrumentCard = props => (
    <div className={`${classes.InstrumentCard} card`}>
        <img className={`card-img-top ${classes.InstrumentCard_img}`} src={require("../../../../assets/images/categories/dreli-i-miksery.jpg")}
             alt={props.equipment.name}/>
        <div className="card-body">
            <h5 className="card-title">{props.equipment.name}</h5>
            {/*<p className={`card-text ${classes.shelfCard_text}`}>Some quick example text to build on the card title and make up the bulk of the*/}
            {/*card's content.</p>*/}
        </div>
    </div>
);

export default instrumentCard;