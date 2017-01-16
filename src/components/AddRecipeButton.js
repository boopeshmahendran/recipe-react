import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class AddRecipeButton extends Component {
    
    render() {
        return (
             <Button bsStyle="primary" block onClick={() => this.props.openEditForm()}> Add Recipe </Button>
        );
    }
}

export default AddRecipeButton;