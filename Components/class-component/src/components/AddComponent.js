import React, { Component } from 'react';

class AddComponent extends Component {
    render() {
        return (            
            <h1>Tổng số: {this.props.firstNumber + this.props.secondNumber}.(three)</h1>
        );
    }
}

export default AddComponent;