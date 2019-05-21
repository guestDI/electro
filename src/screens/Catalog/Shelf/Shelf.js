import React  from 'react';
import classes from './Shelf.module.css'
import {EQUIPMENT} from './test_data'
import ShelfCard from './ShelfCard/ShelfCard';

const shelf = () => {
    return(
        <ul className="list-group list-group-flush">
            <ShelfCard/>
            <ShelfCard/>
            <ShelfCard/>
        </ul>
    )
    // return (
    //     <div className={classes.shelf}>
    //         {EQUIPMENT.map((eq, ind) => {
    //             return(
    //                 <ShelfCard key={`${ind}`} equipment={eq}/>
    //             )
    //         })}
    //     </div>
    // )
}

export default shelf;