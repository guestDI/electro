import React from 'react';
import classes from './InstrumentCard.module.css';

const instrumentCard = props => {
    function onCategoryClick(){
        props.onCatalogItemClick(props.equipment.id)
    }

    return(
        <div className={`${classes.InstrumentCard} card`} onClick={onCategoryClick}>
            <div className={classes.Img_wrapper}>
                <img className={`card-img-top ${classes.InstrumentCard_img}`} src={`${props.equipment.categoryPhoto}`}
                     alt={props.equipment.name}/>
            </div>
            <div className={`card-body ${classes.Card_body}`}>
                <h5 className="card-title align-bottom">{props.equipment.name}</h5>
            </div>
        </div>
    )
};

export default instrumentCard;