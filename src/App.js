import React, { Component } from 'react';
import AddRecipeButton from './components/AddRecipeButton';
import EditForm from './components/EditForm';
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
          ],
          showEditForm: false
      };
  }
  addRecipe(recipe) {
      this.state.recipes.push(recipe);
      this.setState({
          recipes: this.state.recipes
      });
  }
  deleteRecipe(index) {
      this.state.recipes.splice(index, 1);
      this.setState({
          recipes: this.state.recipes
      });
  }
  closeEditForm() {
      this.setState({
          showEditForm: false
      });
  }
  openEditForm() {
      this.setState({
          showEditForm: true
      });
  }
  render() {
    return (
        <div className='App'>
            <AddRecipeButton openEditForm={this.openEditForm.bind(this)} />
            <EditForm showEditForm={this.state.showEditForm} closeEditForm={this.closeEditForm.bind(this)}  addRecipe={this.addRecipe.bind(this)}/>
            <RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteRecipe.bind(this)} />
        </div>
    );
  }
}

export default App;