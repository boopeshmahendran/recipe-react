import React, { Component } from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';


class RecipeList extends Component {
    render() {
        return (
            <Accordion>
            {this.props.recipes.map((recipe, index) => (
                 <Panel key={index} header={recipe.name} eventKey={index}>
                    <div className='ingredients'>
                        <h4>Ingredients: </h4>
                        <p>{recipe.ingredients}</p>
                    </div>
                    <div className='directions'>
                        <h4>Directions: </h4>
                        <p>{recipe.directions}</p>
                    </div>
                 </Panel>
             ))}
            </Accordion>
        );
    }
    
}

export default RecipeList;