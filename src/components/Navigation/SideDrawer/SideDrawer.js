import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../Backdrop/Backdrop';
import Hoc from '../../../hoc/Hoc';

const sideDrawer = (props) => {
    let attachedClasses = [classes.sideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.sideDrawer, classes.Open]
    }

    return(
        <Hoc>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Hoc>
    );
};

export default sideDrawer;