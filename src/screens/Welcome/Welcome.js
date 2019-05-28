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
                                    <h4>+375 29 666-66-66</h4>
                                    <h4>+375 44 666-66-66</h4>
                                    {/*<Button title="Оставить заявку"/>*/}
                                    {/*<div className="scroll_down" >*/}
                                        {/*<div className="scroll_down__button" style={{display: "block"}}/>*/}
                                    {/*</div>*/}
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
                                <i className="material-icons">shop_two</i>
                                {/*<img src={require('../../images/field.png')}  />*/}
                                <h3>Индивидуальный подход</h3>
                                <p className={classes.Tile_desc}>Индивидуальный подход к каждому клиенту и гибкие цены</p>
                            </div>
                            <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${classes.Tile}`}>
                                <i className="material-icons">alarm</i>
                                {/*<img src={require('../../images/rule.png')}  />*/}
                                <h3>Гибкий график</h3>
                                <p className={classes.Tile_desc}>Гибкий график доставки инструмента, а также возможность продления</p>
                            </div>
                            <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${classes.Tile}`}>
                                {/*<img src={require('../../images/statistic.png')}  />*/}
                                <i className="material-icons">library_books</i>
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
                            <Instruments list={this.props.categories}/>
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
                                <li>Позвоните по номеру <strong>+375 (29) 666-66-66</strong> либо <strong>+375 (33) 666-66-66</strong>
                                    и уточните наличие заинтересовавшего Вас инструмента. Получите консультацию по заинтересовавшему Вас предмету проката.</li>
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