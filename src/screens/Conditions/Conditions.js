import React from 'react';
import Hoc from '../../hoc/Hoc';
import classes from './Conditions.module.css';
import Button from '../../components/Button/Button';

const conditions = () => (
    <Hoc>
        <section id="intro" className={classes.Intro_section}>
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
                            <Button title="Оставить заявку"/>
                            <div className="scroll_down" >
                                <div className="scroll_down__button" style={{display: "block"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="content" className="container-fluid">
            <p>
                Клиентом проката может стать любой совершеннолетний гражданин Республики Беларусь.
            </p>
            <p>
                Предварительно уточняйте наличие инструмента по указанным на сайте номерам телефонов.
                Возможно бронирование.

                Оборудование сдается в аренду без залога, однако менеджер оставляет за собой право потребовать залог в сумме 20-50% от коммерческой стоимости оборудования или отказать в выдаче оборудования в аренду без объяснения причин.
            </p>
        </section>
    </Hoc>
)

export default conditions;