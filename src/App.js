import React, { Component } from 'react';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          recipes: [
              {
                  name: "abcd",
                  ingredients: "123",
                  directions: "xyz"
              },
              {
                  name: "xyz",
                  ingredients: "234",
                  directions: "xyz"
              },
              {
                  name: "zcw",
                  ingredients: "781",
                  directions: "yzx"
              },
          ]
      }
  }
  addRecipe(recipe) {
      console.log(recipe);
      this.state.recipes.push(recipe);
      this.setState({
          recipes: this.state.recipes
      });
  }
  render() {
    return (
        <div className='App'>
            <AddRecipe addRecipe={this.addRecipe.bind(this)} />
            <RecipeList recipes={this.state.recipes} />
        </div>
    );
  }
}

export default App;
