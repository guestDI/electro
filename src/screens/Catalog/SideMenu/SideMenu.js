import React from 'react';
import classes from './SideMenu.module.css';
import SideMenuItem from './SideMenuItem/SideMenuItem';
import Hoc from '../../../hoc/Hoc';

const sideMenu = (props) => {
    // console.log(props)
    return(
        <Hoc>
            <ul className={`${classes.SideMenu} list-group`}>
                {props.items.map((i, ind) => {
                    return(
                        <SideMenuItem item={i} key={`${ind}`}  category={props.categoryId} getByCategory={props.getItems}/>
                    )
                })}
            </ul>
        </Hoc>
    )

}

export default sideMenu;