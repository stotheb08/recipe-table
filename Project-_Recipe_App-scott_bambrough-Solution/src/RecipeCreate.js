import React, { useState } from "react";

function RecipeCreate({handleSetRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [formData, setFormData] = useState({...initialFormData})
  
  const handleSubmit = (event) => {
    event.preventDefault()
    handleSetRecipes(formData)
    setFormData({...initialFormData})
  }
  const handleOnChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value,})  
  }
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                type="text"
                onChange={handleOnChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                onChange={handleOnChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                type="url"
                onChange={handleOnChange}
                value={formData.photo}
                placeholder="Img Url"
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                rows={2}
                onChange={handleOnChange}
                value={formData.ingredients}
                placeholder="ingredients"
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                rows={2}
                onChange={handleOnChange}
                value={formData.preparation}
                placeholder="preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
