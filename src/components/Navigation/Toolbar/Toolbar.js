import React, {Component} from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTop: true
        };
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 250;
            if (isTop !== this.state.isTop) {
                this.onScroll(isTop);
            }
        });
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll(isTop) {
        this.setState({ isTop });
    }

    render(){
        let attachedClasses = [classes.toolbar, 'sticky-top']
        if(!this.state.isTop){
            attachedClasses = [classes.toolbar, classes.scrolled, 'sticky-top']
        }

        return (
            <header className={attachedClasses.join(' ')} >
                <DrawerToggle clicked={this.props.drawerToggleClicked}/>
                <nav className={`${classes.Tabs} navbar ${classes.DesktopOnly}`} style={{height: "3.75rem"}}>
                    <NavigationItems currentLocation={this.props.location.pathname}/>
                </nav>
            </header>
        )
    }
} ;

export default Toolbar;