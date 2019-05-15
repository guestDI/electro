import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import RequestForm from '../RequestForm/RequestForm';

class Layout extends Component{
    state = {
        showSideDrawer: false
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
      return (
          <div className={classes.Wrapper}>
              <RequestForm/>
              <div>
                  <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                  <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                  <main className={`${classes.Content} p-0`}>
                      {this.props.children}
                  </main>
                  <Footer/>
              </div>
          </div>
      );
  }
}

export default Layout;