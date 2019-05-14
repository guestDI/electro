import React from 'react';
import classes from './SiteMenu.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const siteMenu = () =>{
    return(
        <div>
            <h4 className={classes.Title}>Меню сайта</h4>
            <ul className={classes.Contacts_section}>
                <NavigationItems/>
            </ul>
        </div>
    )
}

export default siteMenu;