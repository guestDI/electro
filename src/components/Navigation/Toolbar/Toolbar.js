import React from 'react';
import classes from './Toolbar.module.css';
import { Link } from 'react-scroll'

const toolbar = (props) => (
    <header className={`${classes.Toolbar} sticky-top w-100`}>
        <nav className={`${classes.Tabs} navbar`} style={{height: "3.75rem"}}>
            <li><Link to="services" spy={true} smooth={true} duration={500} title="Equipment">Наше оборудование</Link></li>
            <li><Link to="prices" spy={true} smooth={true} duration={500} title="Prices">Цены</Link></li>
            <li><Link to="projects" spy={true} smooth={true} duration={500} title="About Us ">О нас</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={600} title="Request">Оставить заявку</Link></li>
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