import React  from 'react';
import ShelfCard from './ShelfCard/ShelfCard';

const shelf = (props) => {
    return(
        <ul className="list-group list-group-flush" style={{paddingTop: '35px'}}>
            {props.data.map((it, ind) =>{
                return(
                    <ShelfCard itemData={it} key={`${ind}`}/>
                    )
            })}
        </ul>
    )
}

export default shelf;