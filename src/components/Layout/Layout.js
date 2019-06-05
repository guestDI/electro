import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

import {withRouter} from 'react-router-dom';

class Layout extends Component{
    state = {
        showSideDrawer: false,
        itemName: ""
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }


  render(){
      const children = React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, {
              isActive: true
          });
      });

      return (
          <div className={classes.Wrapper}>

              <div>
                  <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} location={this.props.location}/>
                  <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                  <main className={`${classes.Content} p-0`}>
                      {children}
                      {/*{this.props.children}*/}
                  </main>
                  <Footer/>
              </div>
          </div>
      );
  }
}

export default withRouter(Layout);