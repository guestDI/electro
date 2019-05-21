import React, { Component } from 'react';
import classes from './Welcome.module.css';
import Button from '../../components/Button/Button';
import FeedbackTile from '../Welcome/FeedbackTile/FeedbackTile';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMember: 0,
            team: [
                {
                    name: "Ryan Reynolds",
                    // avatar: "https://st1.bollywoodlife.com/wp-content/uploads/2018/07/1216-GQ-FERR02-01-Ryan-Reynolds-Deadpool-04.jpg",
                    avatar: "../../assets/images/anonim.png",
                    about: "Weird. My daughter JUST stabbed me in the right eye. (She’s not a ninja, but she IS a bit of a dick) Point is, We can finally trade roles... (Happy Birthday Bubba!)",
                },
                {
                    name: "T'J Miller",
                    avatar: "https://nyppagesix.files.wordpress.com/2018/04/gettyimages-631998062.jpg?quality=90&strip=all&w=618&h=410&crop=1",
                    about: "Thank you! I hope to not ruin it for you, but TJ Miller was a bully and petulant brat and pretty much everyone who had any power on that (almost all male) set, including the male cast members, enabled him and were complicit in his unprofessionalism. They can fuck off forever. ",
                },
                {
                    name: "Morena Baccarin",
                    avatar: "https://www.celebritysizes.com/wp-content/uploads/2016/11/Morena-Baccarin.jpg",
                    about: "Morena Baccarin was born in Rio de Janeiro, Brazil, to actress Vera Setta and journalist Fernando Baccarin. Her uncle was actor Ivan Setta. Morena has Italian and Brazilian Portuguese ancestry. She moved to New York at the age of 10, when her father was transferred there",
                }
            ]
        };
    }


    // handleMemberClick = (index) => {
    //     this.setState({
    //         activeMember: index
    //     })
    // }

    render(){

        // let team = (
        //     this.state.team.map((member, index) => {
        //         let active = this.state.activeMember === index
        //         return(
        //             <div key={`${index}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        //                 <FeedbackTile  active={active} click={this.handleMemberClick.bind(this, index)} name={member.name}
        //                              avatar={member.avatar}/>
        //             </div>
        //         )
        //     })
        // )

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
                            {/*<Shelf/>*/}
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
                        <div className="row">
                            <ol>
                                <li>Выберите интересующий Вас предмет проката.</li>
                                <li>Позвоните по номеру <strong>+375 (29) 666-66-66</strong> либо <strong>+375 (33) 666-66-66</strong> и уточните наличие заинтересовавшего Вас предмета. Получите консультацию по заинтересовавшему Вас предмету проката.</li>
                                <li>Закажите доставку курьером либо заберите самостоятельно.</li>
                                <li>Вы также можете оставить заявку на сайте и наши менеджеры свяжутся с вами в кратчайшие сроки.</li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Welcome;