import React, { Component } from 'react';
import Conditions from '../../screens/Conditions/Conditions'
import {animateScroll} from 'react-scroll';
import RequestForm from '../../components/RequestForm/RequestForm';

class ConditionsContainer extends Component {
    state = {
        name: ""
    }

    componentDidMount(){
        animateScroll.scrollToTop({
            duration: 600,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
    }

    render() {
        return (
            <div>
                <RequestForm itemName={this.state.name}/>
                <Conditions/>
            </div>
        );
    }
}

export default ConditionsContainer;