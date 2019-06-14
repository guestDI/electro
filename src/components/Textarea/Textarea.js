import React, { Component } from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: this.props.predefined,
        }
    }

    componentWillReceiveProps(nextProps, props){
        if(this.props.predefined!==nextProps.predefined){
            this.setState({
                field: nextProps.predefined
            })
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
        if(this.props.required){
            return (
                <textarea className={this.props.className} style={this.props.style} minLength={this.props.min} maxLength={this.props.max} required type={this.props.type}
                          onChange={this.onChange} value={this.state.field} name={this.props.name} placeholder={this.props.placeholder}
                          disabled={this.props.disabled} onKeyDown={this.onKeyChanged}/>
            )
        } else {
            return (
                <textarea className={this.props.className} style={this.props.style} minLength={this.props.min} maxLength={this.props.max} type={this.props.type} onChange={this.onChange}
                          value={this.state.field} name={this.props.name} placeholder={this.props.placeholder} disabled={this.props.disabled}
                          onKeyDown={this.onKeyChanged}/>
            )
        }
    }
}

export default Textarea;