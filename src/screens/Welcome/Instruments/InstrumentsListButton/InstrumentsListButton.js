import React, {Component} from 'react';
import classes from './InstrumentsListButton.module.css';
import { Redirect } from 'react-router'

class InstrumentsListButton extends Component{
    state = {
        navigate: false
    }

    redirectToCatalog = () => {
        this.props.onFullCatalogItemClick(1)
    }

    render(){
        const { navigate } = this.state

        if (navigate) {
            return <Redirect to="/equipment" push={true} />
        }

        return(
            <div className={`${classes.InstrumentListCard} card`}>
                {/*<img className={`card-img-top ${classes.InstrumentCard_img}`} src={require("../../../../assets/images/categories/dreli-i-miksery.jpg")}/>*/}
                <div className="card-body">
                    <span className={`${classes.InstrumentCard_text} card-title`}>Посмотреть весь каталог</span>
                    <div style={{paddingTop: '30px'}}>
                        <button type="button" className={classes.Catalog_btn} onClick={this.redirectToCatalog}>Каталог</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default InstrumentsListButton;