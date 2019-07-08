import React, {Component} from 'react';
import classes from './SideMenuItem.module.css';

class SideMenuItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: this.props.categoryId
        }

        this.clickSideMenuItem = this.clickSideMenuItem.bind(this);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.category !== prevState.category) {
    //         return {category: nextProps.category};
    //     }
    //     else return null;
    // }

    clickSideMenuItem(e) {
        this.props.getByCategory(this.props.item.id)
        this.setState({currentIndex: e.target.id})
    }


    render() {
        let attachedClasses = `${classes.Item} list-group-item list-group-item-action`;

        if (this.state.currentIndex === this.props.item.id) {
            attachedClasses = `${classes.Item} ${classes.Item_active} list-group-item list-group-item-action`;
        }

        return (
            <li onClick={this.clickSideMenuItem} id={`${this.props.item.id}`}
                className={attachedClasses}>{this.props.item.name}</li>
        )
    }
}

export default SideMenuItem ;


