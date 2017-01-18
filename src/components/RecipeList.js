import React, { Component } from 'react';
import './RecipeList.css';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Clearfix from 'react-bootstrap/lib/Clearfix';


class RecipeList extends Component {
    deleteHandler(e, index) {
        e.stopPropagation();
        this.props.deleteRecipe(index);
    }
    editHandler(e, index) {
        e.stopPropagation();
        this.props.editRecipe(index);
    }
    render() {
        return (
            <Accordion>
            {this.props.recipes.map((recipe, index) => (
                 <Panel key={index} header={
                        <div>
                            <div className='pull-left'>
                                <h4>{recipe.name}</h4>
                            </div>
                            <div className='buttons pull-right'>
                                <Button onClick={(e) => this.editHandler(e, index)}>
                                    <span className='glyphicon glyphicon-edit'></span>
                                </Button>
                                <Button onClick={(e) => this.deleteHandler(e, index)}>
                                    <span className='glyphicon glyphicon-trash'></span>
                                </Button>
                            </div>
                            <Clearfix />
                        </div>
                   } eventKey={index}>
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