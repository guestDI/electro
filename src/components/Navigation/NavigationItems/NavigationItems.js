import React from 'react';
import Hoc from '../../../hoc/Hoc';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom'

const navigationItems = () => (
    <Hoc>
        <li><Link to="equipment" spy={true} smooth={true} duration={500} title="Equipment">Наше оборудование</Link></li>
        <li><NavLink to="conditions" title="Prices">Условия и Цены</NavLink></li>
        <li><Link to="services" spy={true} smooth={true} duration={500} title="About Us ">О нас</Link></li>
        <li><div data-toggle="modal" data-target="#exampleModalCenter" title="Request">Оставить заявку</div></li>
    </Hoc>
);

export default navigationItems;