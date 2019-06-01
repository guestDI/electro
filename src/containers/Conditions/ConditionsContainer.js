import React, { Component } from 'react';
import Conditions from '../../screens/Conditions/Conditions'
import {animateScroll} from 'react-scroll';

class ConditionsContainer extends Component {
    componentDidMount(){
        animateScroll.scrollToTop({
            duration: 600,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    render() {
        return (
            <div>
                <Conditions/>
            </div>
        );
    }
}

export default ConditionsContainer;