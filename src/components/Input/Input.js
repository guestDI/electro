import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: this.props.field,
        }
    }

    onChange = (event) => {
        let value = event.target.value;
        this.setState({
            field: value,
        });
        if (this.props.onTextChanged) {
            this.props.onTextChanged(value);
        }
    }

    onKeyChanged = (event) => {
        let key = event.keyCode || event.which; // get key cross-browser
        if(this.props.restrictType==="text"){
            if (((key < 36) && (key!==8)) || (((key > 57) && (key < 96)) || (key > 105))) {
                if (event.preventDefault) event.preventDefault();
                // event.returnValue = false;
            }
        } else if(this.props.restrictType==="number"){
            if (((key < 65) && (key!==8) && (key!==37) && (key!==39) && (key!==46)) || (key > 90)) {
                if (event.preventDefault) event.preventDefault();
            }
        }
    }

    render() {
        // const {style = {}} = this.props
        if(this.props.required){
            return (
                <input className={this.props.className} style={this.props.style} minLength={this.props.min} maxLength={this.props.max}
                       required type={this.props.type} onChange={this.onChange} value={this.props.field} name={this.props.name}
                       placeholder={this.props.placeholder} pattern={this.props.pattern} disabled={this.props.disabled}
                       onKeyDown={this.onKeyChanged}/>
            )
        } else {
            return (
                <input className={this.props.className} style={this.props.style} minLength={this.props.min} maxLength={this.props.max} type={this.props.type} onChange={this.onChange}
                       value={this.props.field} name={this.props.name} placeholder={this.props.placeholder} disabled={this.props.disabled}
                       pattern={this.props.pattern} onKeyDown={this.onKeyChanged}/>
            )
        }
    }
}

export default Input;