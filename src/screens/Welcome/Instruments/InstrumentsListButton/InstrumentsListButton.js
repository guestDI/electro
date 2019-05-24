import React, {Component} from 'react';
import classes from './InstrumentsListButton.module.css';
import { Redirect } from 'react-router'

class instrumentsListButton extends Component{
    state = {
        navigate: false
    }

    render(){
        const { navigate } = this.state

        if (navigate) {
            return <Redirect to="/equipment" push={true} />
        }

        return(
            <div className={`${classes.InstrumentCard} card`}>
                {/*<img className={`card-img-top ${classes.InstrumentCard_img}`} src={require("../../../../assets/images/categories/dreli-i-miksery.jpg")}/>*/}
                <div className="card-body">
                    <h5 className="card-title">Посмотреть все инструменты</h5>
                    <div style={{paddingTop: '30px'}}>
                        <button type="button" className={classes.Catalog_btn} onClick={() => this.setState({ navigate: true })}>Каталог</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default instrumentsListButton;