export default function ingredientList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>

    ))
    return(
        <section>
                <div>
                    <h1 className="title-name">Ingredients on hand</h1>
                </div>
                <ul>{ingredientsListItems}</ul>

                {props.ingredients.length >3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <div>
                        <button onClick={props.getRecipe}>Get a recipe</button>
                    </div>
                </div>}
            </section>
    )
}