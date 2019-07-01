import React from 'react';
import classes from './Contacts.module.css';

const contacts = (props) =>{
    // let social_contact = (
    //     props.social_contacts.map((c, i)=>{
    //         let keyName = Object.keys(c)[0];
    //         let icon = keyName ==="twitter" ? "fa-twitter" : keyName === "facebook" ? "fa-facebook" : "fa-instagram"
    //         let link = c[keyName]
    //         return(
    //             <a key={`${i}`} href={`${link}`}>
    //                 <i className={`fa ${icon}`}/>
    //             </a>
    //         )
    //     })
    // )

    return(
        <div>
            <h4 className={classes.Title}>Контакты</h4>
            <ul className={classes.Contacts_section}>
                <li className={classes.Contact_row}>
                    <i className="fa fa-map-marker"/>
                    <span>ул. Денисовская 49<br/>Минск, Беларусь</span>
                </li>
                <li className={classes.Contact_row}>
                    <i className="fa fa-phone"/>
                    <span>+375 (44) 749-89-82</span>
                </li>
                <li className={classes.Contact_row}>
                    <i className="fa fa-phone"/>
                    <span>+375 (29) 775-89-68</span>
                </li>
                <li className={classes.Contact_row}>
                    <i className="fa fa-envelope"/>
                    <span>22lestat88@gmail.com</span>
                </li>
            </ul>
            {/*<div className="contacts_section__social">*/}
                {/*{social_contact}*/}
            {/*</div>*/}
        </div>
    )
}

export default contacts;