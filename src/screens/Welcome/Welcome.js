import React, { Component } from 'react';
import classes from './Welcome.module.css';
// import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom'
import Instruments from '../Welcome/Instruments/Instruments';


class Welcome extends Component {

    // handleMemberClick = (index) => {
    //     this.setState({
    //         activeMember: index
    //     })
    // }

    render(){
        return(
            <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
                <section ref="intro" id="intro" className={classes.Intro_section}>
                    <div className="container">
                        <div className={`row ${classes.Row_centered}`}>
                            <div className={`${classes.Welcome_header} col-md-10 ${classes.Col_centered}`}>
                                <h2 className={classes.Text_upper_case}>
                                    Лучший выбор профессионального инструмента
                                </h2>
                                <hr/>
                            </div>
                            <div className="col m-0">
                                <div className={`${classes.Subtext} col-md-8 ${classes.Col_centered}`}>
                                    <p>Низкие цены. Быстрая доставка. Индивидуальный подход.</p>
                                </div>
                                <div className={classes.Get_started_wrapper}>
                                    <h4>+375 (44) 749-89-82</h4>
                                    <h4>+375 (29) 775-89-68</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className={classes.Advantages_section}>
                    <div className="container">
                        <div className={`row ${classes.Row_centered}`}>
                            <div className={`col-md-8 ${classes.Col_centered}`}>
                                <h2 className={classes.Text_upper_case}>Наши преимущества</h2>
                                <hr/>
                            </div>
                        </div>
                        <div className={`row ${classes.Advantages_section__row}`}>
                            <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${classes.Tile}`}>
                                <img src={require("../../assets/images/icons/round_shop_two_black_48dp.png")}
                                     style={{backgroundSize: 'cover', backgroundPosition: 'center center'}} alt=""/>
                                {/*<i className="material-icons">shop_two</i>*/}
                                <h3>Индивидуальный подход</h3>
                                <p className={classes.Tile_desc}>Индивидуальный подход к каждому клиенту и гибкие цены</p>
                            </div>
                            <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${classes.Tile}`}>
                                <img src={require("../../assets/images/icons/round_alarm_black_48dp.png")}
                                     style={{backgroundSize: 'cover', backgroundPosition: 'center center'}} alt=""/>
                                {/*<i className="material-icons">alarm</i>*/}
                                <h3>Гибкий график</h3>
                                <p className={classes.Tile_desc}>Гибкий график доставки инструмента, а также возможность продления</p>
                            </div>
                            <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${classes.Tile}`}>
                                <img src={require("../../assets/images/icons/round_library_books_black_48dp.png")}
                                     style={{backgroundSize: 'cover', backgroundPosition: 'center center'}} alt=""/>
                                {/*<i className="material-icons">library_books</i>*/}
                                <h3>Широкий ассортимент</h3>
                                <p className={classes.Tile_desc}>Широкий выбор инструментов разной категории</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="equipment" className={classes.Equipment_section}>
                    <div className="container">
                        <div className={`${classes.Row_centered} row`}>
                            <div className={`col-md-8 ${classes.Col_centered}`}>
                                <h2 className={classes.Text_upper_case}>Наше оборудование</h2>
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            <Instruments list={this.props.categories} redirect={this.props.goToCatalog}/>
                        </div>
                    </div>
                </section>

                <section id="team" className={classes.How_section}>
                    <div className="container" >
                        <div className={`row ${classes.Row_centered}`}>
                            <div className={`col-md-8 ${classes.Col_centered}`}>
                                <h2 className={classes.Text_upper_case}>Как мы работаем</h2>
                                <hr/>
                            </div>
                        </div>
                        <div className="row" style={{textAlign: 'left'}}>
                            <ol>
                                <li>Выберите интересующий Вас предмет проката из нашего
                                    <NavLink to="equipment" title="Equipment"> каталога</NavLink>.</li>
                                <li>Позвоните по номеру <strong>+375 (44) 749-89-82</strong> или <strong>+375 (29) 775-89-68 </strong>
                                    и уточните наличие заинтересовавшего Вас инструмента. Вы также можете получить консультацию,
                                    если вы не знаете, какой инструмент вам нужен для тех или иных работ.</li>
                                <li>Закажите доставку курьером либо заберите инструмент самостоятельно.</li>
                                <li>Вы также можете оставить заявку на сайте и наши менеджеры свяжутся с вами в кратчайшие сроки,
                                чтобы определить наиболее подходящий вариант аренды</li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Welcome;