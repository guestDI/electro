import React from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <div className={classes.Wrapper}>
        <div className="main-content">
            <Toolbar/>
            <main className={`${classes.Content} main-content-container p-0`}>
                {props.children}
            </main>
        </div>
    </div>
);

export default layout;