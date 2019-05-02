import React, { Component } from 'react';
import classes from './Welcome.module.css';
import Hoc from '../../hoc/Hoc';

class Welcome extends Component {
    render(){
        return(
            <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
                <section ref="intro" id="intro" className={classes.Intro_section}>
                    <div className="container-fluid">
                        {/*<div className={`${classes.Row_centered} row`}>*/}
                            {/*<div className="welcome-header col-md-10 col-centered ">*/}
                                {/*<h1 className="text-upper-case">*/}
                                    {/*The best way to create your own tournament*/}
                                {/*</h1>*/}
                                {/*<hr/>*/}
                            {/*</div>*/}
                            {/*<div className="welcome-text col-md-8 col-centered">*/}
                                {/*<p>StartTournament can help you build your own tournament with your own rules and schedule!</p>*/}
                            {/*</div>*/}
                            {/*<div className="get_started_wrapper">*/}
                                {/*<button className="get_started_wrapper_button" >*/}
                                    {/*Связаться*/}
                                {/*</button>*/}
                                {/*<div className="scroll_down" >*/}
                                    {/*<div className="scroll_down__button" style={{display: "block"}}/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </div>
        )
    }
}

export default Welcome;