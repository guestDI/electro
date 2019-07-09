import React from 'react';
import classes from './ShelfCard.module.css';
import Button from '../../../../components/Button/Button';

const shelfCard = props => {
    function itemRequested() {
        if(props.itemRequested){
            props.itemRequested(props.itemData.name)
        }
    }


    let attachedClass = [classes.Status, "badge"]
    attachedClass = props.itemData.availability ? [...attachedClass, "badge-success"] : [...attachedClass, "badge-secondary"];
    let attachedText = props.itemData.availability ? "В наличии" : "Нет в наличии";

    return(
        <div className={`${classes.Item_group}`}>
            <div className={classes.Item_wrapper}>
                <img className={`card-img-top ${classes.Image}`} src={`${props.itemData.itemPhoto}`}
                     alt={props.itemData.name}/>
                <div className={`d-flex flex-column ${classes.Details}`} style={{paddingLeft: '20px'}}>
                    <span className={classes.Title}>{props.itemData.name}</span>
                    <span className={classes.Desc}>{props.itemData.description}</span>
                    <span className={classes.Title} style={{marginBottom: '10px'}}> {`Цена: ${props.itemData.price} руб/сут`}</span>
                    <div className={attachedClass.join(' ')}>{attachedText}</div>
                </div>
                <Button custom_btn={classes.Request_btn} title="Оставить заявку" onClick={itemRequested}/>
            </div>
        </div>
    )
};

export default shelfCard;