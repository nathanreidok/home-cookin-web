import RecipeIngredient from "./RecipeIngredient"

type Recipe = {
    id: number,
    name: string,
    ingredients: RecipeIngredient[],
    directions: string
}

export default Recipe