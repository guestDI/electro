import React  from 'react';
import classes from './Instruments.module.css'
import InstrumentCard from './InstrumentCard/InstrumentCard';

const instruments = props => {
    return (
        <div className={classes.Shelf}>
            {props.list.map((eq, ind) => {
                return(
                    <InstrumentCard key={`${ind}`} equipment={eq}/>
                )
            })}
        </div>
    )
}

export default instruments;