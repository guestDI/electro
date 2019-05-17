import React from 'react';
import classes from './ShelfCard.module.css';

const shelfCard = props => (
    <div className={`${classes.shelfCard} card`} data-toggle="modal" data-target="#equipmentModal">
        <img className={`card-img-top ${classes.shelfCard_img}`} src={props.equipment.src} alt={props.equipment.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.equipment.title}</h5>
                {/*<p className={`card-text ${classes.shelfCard_text}`}>Some quick example text to build on the card title and make up the bulk of the*/}
                    {/*card's content.</p>*/}
            </div>
    </div>
);

export default shelfCard;