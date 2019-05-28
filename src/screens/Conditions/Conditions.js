import React from 'react';
import Hoc from '../../hoc/Hoc';
import classes from './Conditions.module.css';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';

const conditions = () => (
    <Hoc>
        <section id="intro" className={classes.conditions_intro_section}>
            <div className="container">
                <div className={`row ${classes.row_centered}`}>
                    <div className={`${classes.Welcome_header} col-md-10 ${classes.col_centered}`}>
                        <h2>
                            Условия проката и оплата
                        </h2>
                        <hr/>
                    </div>

                </div>
                <div className={`row ${classes.row_centered}`}>
                    <div className="col m-0">
                        <div className={`${classes.Subtext} col-md-8 ${classes.col_centered}`}>
                            <h4>+375 29 666-66-66</h4>
                            <h4>+375 44 666-66-66</h4>
                        </div>
                        <div className={classes.catalog_button_wrapper}>
                            <Button title="Оставить заявку"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="howTo" className={classes.how_to}>
            <div className="container">
                <div className={`row ${classes.row_centered}`}>
                    <div className={`col-md-8 ${classes.col_centered}`}>
                        <h2 >Как взять предмет в прокат</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <ol>
                        <li>Выберите интересующий Вас предмет проката в нашем
                            <NavLink to="equipment" title="Equipment"> каталоге</NavLink>.</li>
                        <li>Позвоните по номеру <strong>+375 (29) 666-66-66</strong> либо <strong>+375 (33) 666-66-66</strong> и уточните наличие заинтересовавшего Вас предмета. Получите консультацию по заинтересовавшему Вас предмету проката.</li>
                        <li>Закажите доставку курьером либо заберите самостоятельно.</li>
                        <li>Вы также можете оставить заявку на сайте и наши менеджеры свяжутся с вами в кратчайшие сроки.</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="notes" className={classes.how_to}>
            <div className="container">
                <div className={`row ${classes.row_centered}`}>
                    <div className={`col-md-8 ${classes.col_centered}`}>
                        <h2 >ВАЖНО!</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <ul>
                        <li>Для заключения договора проката, Вам необходимо иметь личный паспорт гражданина Республики Беларусь.</li>
                        <li>Оплата только наличными и только белорусскими рублями.</li>
                        <li>Предметы проката необходимо вернуть в исправном, укомплектованном и чистом виде.
                            При возврате предмета проката в загрязненном виде придётся оплатить штраф, в размере 10 рублей за каждый загрязненный предмет проката.</li>
                        <li>При возврате предмета проката в некомплекте, необходимо доукомплектовать его за свой счет оригинальными частями.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="notes" className={classes.how_to}>
            <div className="container">
                <div className={`row ${classes.row_centered}`}>
                    <div className={`col-md-8 ${classes.col_centered}`}>
                        <h2 >Ответственность сторон</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <ul>
                        <li>Стороны несут имущественную ответственность за неисполнение или ненадлежащее исполнение условий Договора.</li>
                        <li>Арендодатель не несет ответственности за ущерб здоровью или жизни, причиненный при использовании имущества Арендатором.</li>
                        <li>Арендодатель не несет ответственность за прямые и косвенные убытки, причиненные Арендатору или
                            третьей стороне использованием имущества.
                        </li>
                        <li>
                            Если срок договора на пользование предметом проката истек, а Арендатор его не продлевает, не
                            возвращает предмет или не сообщает о причинах не возврата, то к нему применяются санкции,
                            предусматривающие ответственность граждан за невозврат предметов проката и/или, оформляется иск в суд о взыскании причиненного ущерба
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </Hoc>
)

export default conditions;