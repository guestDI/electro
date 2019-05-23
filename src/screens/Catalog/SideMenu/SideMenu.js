import React from 'react';
import classes from './SideMenu.module.css';
import SideMenuItem from './SideMenuItem/SideMenuItem';
import Hoc from '../../../hoc/Hoc';

const sideMenu = (props) => {
    return(
        <Hoc>
            <label>Прокат инструмента</label>
            <div className={`${classes.SideMenu} list-group`}>
                {props.items.map((i, ind) => {
                    return(
                        <SideMenuItem item={i} key={`${ind}`}/>
                    )
                })}
            </div>
        </Hoc>
    )

}

export default sideMenu;