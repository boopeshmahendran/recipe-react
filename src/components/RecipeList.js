import React, { Component } from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';

class RecipeList extends Component {
    render() {
        return (
            <Accordion>
            {this.props.recipes.map((recipe, index) => (
                 <Recipe key={index} recipe={recipe} />
             ))}
            </Accordion>
        );
    }
    
}

export default RecipeList;