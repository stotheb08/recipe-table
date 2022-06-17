import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  const handleSetRecipes = (inputFromCreate) => {
    setRecipes([...recipes, inputFromCreate])
  }
 //handle delete recipe filter
  const handleDelete = (recipe) => {
    const filteredRecipes = recipes.filter(r => r.name !== recipe.name)
    setRecipes(filteredRecipes)
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} recipeDelete={handleDelete}/>
      <RecipeCreate handleSetRecipes={handleSetRecipes}/>
    </div>
  );
}

export default App;

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
