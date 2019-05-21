import React from 'react';
import classes from './SideMenu.module.css';
import SideMenuItem from './SideMenuItem/SideMenuItem';

const sideMenu = (props) => {
    return(
        <div className="list-group">
            {props.items.map((i, ind) => {
                return(
                    <SideMenuItem item={i} key={`${ind}`}/>
                )
            })}
        </div>
    )

}

export default sideMenu;