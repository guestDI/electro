import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={`${classes.Toolbar} sticky-top`}>
        {/*<div>MENU</div>*/}
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <nav className={`${classes.Tabs} navbar ${classes.DesktopOnly}`} style={{height: "3.75rem"}}>
            <NavigationItems/>
            {/*<li><NavLink to="/signUp" title="Sign Up">Sign Up</NavLink></li>*/}
            {/*<li><RouteLink to={{ pathname: "/signIn", state: { modal: true } }} title="Sign In"*/}
                           {/*style={{outline: 'none', textDecoration: 'none'}}>*/}
                {/*Sign In*/}
            {/*</RouteLink></li>*/}
            {/*<li><RouteLink to={{ pathname: "/signIn", state: { modal: true } }} title="Sign In">Sign In</RouteLink></li>*/}
        </nav>
    </header>
);

export default toolbar;