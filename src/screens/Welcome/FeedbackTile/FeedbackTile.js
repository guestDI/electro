import React from 'react';
import classes from './FeedbackTile.module.css';
import Avatar from '../../../components/Avatar/Avatar';

const feedbackTile = (props) =>{
    return(
        <div className={classes.Person_tile} onClick={props.click}>
            <Avatar active={props.active} image={`${props.avatar}`}/>
            <h5>{props.name}</h5>
            <span>{props.position}</span>
            {/*<div className="social_contacts">*/}
            {/*{icons}*/}
            {/*</div>*/}
        </div>
    )
}

export default feedbackTile;