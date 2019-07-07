import React  from 'react';
import classes from './Instruments.module.css'
import InstrumentCard from './InstrumentCard/InstrumentCard';
import InstrumentsListButton from './InstrumentsListButton/InstrumentsListButton';

const instruments = props => {
    return (
        <div className={classes.Shelf}>
            {props.list.map((eq, ind) => {
                    return(
                        <InstrumentCard key={`${ind}`} equipment={eq} onCatalogItemClick={props.redirect}/>
                    )
                // }
            }).slice(0, 7)}
            <InstrumentsListButton onFullCatalogItemClick={props.redirect}/>
        </div>
    )
}

export default instruments;