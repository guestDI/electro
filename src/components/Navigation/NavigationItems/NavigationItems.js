import React from 'react';
import Hoc from '../../../hoc/Hoc';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom'

const navigationItems = props => {

    let equip =
        props.currentLocation === '/conditions' ?
            <NavLink to="equipment" title="Каталог">Каталог инструмента</NavLink> :
            <Link to="equipment" spy={true} smooth={true} duration={500} title="Equipment">Каталог инструмента</Link>

    let about = props.currentLocation !== '/' ?
        null :
        <li><Link to="services" spy={true} smooth={true} duration={500} title="About Us ">О нас</Link></li>

    let application = props.currentLocation !== '/' ?
        <li><div data-toggle="modal" data-target="#exampleModalCenter" title="Request">Оставить заявку</div></li> :
        null

    return(
        <Hoc>
            <li><NavLink to="/" title="Главная">Главная</NavLink></li>
            <li>{equip}</li>
            <li><NavLink to="conditions" title="Prices">Условия и Цены</NavLink></li>
            {about}
            {application}
        </Hoc>
    )
}

export default navigationItems;