import React from 'react';
import Hoc from '../../../hoc/Hoc';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom'

const navigationItems = props => {
    // let equip =(
    //     <Link to="equipment" spy={true} smooth={true} duration={500} title="Equipment">Каталог инструмента</Link>
    // )
    // if(props.currentLocation === '/conditions'){
    //     equip = (
    //         <NavLink to="equipment" title="Equipment">Каталог инструмента</NavLink>
    //     )
    // }

    let about = props.currentLocation !== '/' ?
        null :
        <li><Link to="services" spy={true} smooth={true} duration={500} title="About Us ">О нас</Link></li>

    let application = props.currentLocation !== '/' ?
        <li><div onClick={props.closeSidedrawer} data-toggle="modal" data-target="#exampleModalCenter" title="Request">Оставить заявку</div></li> :
        null

    return(
        <Hoc>
            <li><NavLink onClick={props.closeSidedrawer} to="/" title="Главная">Главная</NavLink></li>
            <li><NavLink onClick={props.closeSidedrawer} to="equipment" title="Equipment">Каталог инструмента</NavLink></li>
            <li><NavLink onClick={props.closeSidedrawer} to="conditions" title="Prices">Условия и Цены</NavLink></li>
            {about}
            {application}
        </Hoc>
    )
}

export default navigationItems;