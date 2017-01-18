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
          editIndex: -1,
          showEditForm: false
      };
  }
  addRecipe(recipe) {
      this.state.recipes.push(recipe);
      this.setState({
          recipes: this.state.recipes
      });
  }
  updateRecipe(recipe, index) {
      var recipes = this.state.recipes;
      recipes[index] = recipe;
      this.setState({
          recipes: recipes
      });
  }
  deleteRecipe(index) {
      this.state.recipes.splice(index, 1);
      this.setState({
          recipes: this.state.recipes
      });
  }
  editRecipe(index) {
      this.setState({
          editIndex: index,
          showEditForm: true
      });
  }
  closeEditForm() {
      this.setState({
          showEditForm: false,
          editIndex: -1
      });
  }
  openEditForm() {
      this.setState({
          showEditForm: true
      });
  }
  render() {
    var editData = null;
    if (this.state.editIndex !== -1) {
        editData = this.state.recipes[this.state.editIndex];
        editData.index = this.state.editIndex;
    }
    return (
        <div className='App'>
            <AddRecipeButton openEditForm={this.openEditForm.bind(this)} />
    
            <EditForm showEditForm={this.state.showEditForm} closeEditForm={this.closeEditForm.bind(this)}  addRecipe={this.addRecipe.bind(this)} updateRecipe={this.updateRecipe.bind(this)} editData={editData}/>
            
            <RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteRecipe.bind(this)} editRecipe={this.editRecipe.bind(this)}/>
        </div>
    );
  }
}

export default App;