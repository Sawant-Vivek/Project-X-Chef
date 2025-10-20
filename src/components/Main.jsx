import React from "react"
import CloudRecipe from "./CloudRecipe"
import IngredientList from "./IngredientsList"
import { getRecipeFromMistral } from "./Ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(['tomato',' ketchup',' potato', 'ramen'])
    const [recipeShown , setRecipeShown] = React.useState(false)

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form action={addIngredient}>
                <input 
                    className="text-input" 
                    type="text" 
                    aria-label="enter your ingrediets here" 
                    placeholder="ex.Origano" 
                    name="ingredient" />
                <button className="add-button">Add Ingredients</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientList ingredients={ingredients} 
                getRecipe ={getRecipe}/>}

            {recipeShown && <CloudRecipe />}
        </main>
    )
}