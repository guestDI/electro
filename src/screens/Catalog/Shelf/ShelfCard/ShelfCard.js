import React from 'react';
import classes from './ShelfCard.module.css';

const shelfCard = props => {
    //availability
    let attachedClass = [classes.Status, "badge"]
    attachedClass = props.itemData.availability ? [...attachedClass, "badge-success"] : [...attachedClass, "badge-secondary"];
    let attachedText = props.itemData.availability ? "В наличии" : "Нет в наличии";
    return(
        <div className={`list-group-item ${classes.Item_group}`}>
            <div className={classes.Item_wrapper}>
                <div className={classes.Image}></div>
                <div className="d-flex flex-column" style={{paddingLeft: '20px'}}>
                    <span className={classes.Title}>{props.itemData.name}</span>
                    <span className={classes.Desc}>{props.itemData.description}</span>
                    <div className={attachedClass.join(' ')}>{attachedText}</div>
                </div>
            </div>
        </div>
    )
};

export default shelfCard;