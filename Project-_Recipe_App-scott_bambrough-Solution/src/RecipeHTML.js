import React, {useState} from "react"

function RecipeHTML({recipes, onDelete}) {
  
 
  const HTML = recipes.map((recipe, index) => {
    return(
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img className="photo" src={recipe.photo}/>
      </td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
      <td>
        <button name="delete" onClick={() => onDelete(recipe)}>Delete</button>
      </td>
    </tr>
    )
  })
  return HTML
}

export default RecipeHTML