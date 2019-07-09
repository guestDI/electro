import React from 'react';

const menu = props => {
    let items = props.menuItems.map((i, ind) => {
        return(
            <button onClick={() => props.onClick(i.id)} key={`${ind}`}>{i.name}</button>
        )
    })

    return(
        <ul>
            {items}
        </ul>
    )
}

export default menu;