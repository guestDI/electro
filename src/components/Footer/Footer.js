import React from 'react';
import classes from './Footer.module.css';
import Contacts from '../Footer/Contacts/Contacts';

// const scrollToTop = () => {
//     this.refs.intro.scrollIntoView({block: 'start', behavior: 'smooth'});
// }

const footer = () => (
    <footer id="contact" className={`${classes.Footer_base} ${classes.Footer_base__color} ${classes.Contact_section}`}>
        <div className="container">
            <div className={`row ${classes.Row_centered}`}>
                <div className={`col-md-3 ${classes.Contact_section__contacts}`}>
                    <Contacts/>
                </div>
                <div className="col-md-3 contact-section__about">
                    {/*<AboutUs about_links={about_links}/>*/}
                </div>
                {/*<div className="col-md-5 col-xs-12 pull-right">*/}
                    {/*<div className={classes.Info}>*/}
                        {/*<h4 className={classes.Title}>Leave Message</h4>*/}
                        {/*/!*<ContactUs/>*!/*/}
                    {/*</div>*/}
                    {/*/!*<CommonButton className="send_message__button" text="Send Message" onClick={this.props.onClick}/>*!/*/}
                {/*</div>*/}
            </div>
            <hr/>
            <div className={classes.Copyright}>
                © 2019 D.Ihnatovich, made with love
            </div>
            <div className={classes.Scroll_top}>
                <div className={classes.Scroll_top__button} style={{display: "block"}}>
                    <span className={classes.Tooltip}>Scroll To Top</span>
                </div>
            </div>
        </div>
    </footer>
);

export default footer;