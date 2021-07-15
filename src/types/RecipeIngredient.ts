type RecipeIngredient = {
    recipeId: number
    ingredientId: number
    ingredient: string
    measurementId?: number
    measurement?: string
    qtyNumerator: number
    qtyDenominator: number
}

export default RecipeIngredient