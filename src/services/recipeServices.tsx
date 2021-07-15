import Recipe from "../types/Recipe"

var getRecipes = async () => {
    return await fetchRecipes()
}

var getRecipe = async (id: Number) => {
    var recipe = (await fetchRecipes()).find(r => r.id === id)
    if (!recipe) {
        throw 'Could not find recipe.'
    }
    return recipe
}

export default {
    getRecipes,
    getRecipe,
}

const fetchRecipes = async () => new Promise<Recipe[]>((res, rej) => {
    res([1,2,3,4,5,6,7,8,9,10].map<Recipe>(value => ({
        id: value,
        name: 'Cake',
        ingredients: [{
            recipeId: value,
            ingredientId: 1,
            ingredient: 'Eggs',
            qtyNumerator: 1,
            qtyDenominator: 1,
        },{
            recipeId: value,
            ingredientId: 2,
            ingredient: 'Milk',
            qtyNumerator: 1,
            qtyDenominator: 2,
            measurementId: 3,
            measurement: 'Tablespoon',
        },{
            recipeId: value,
            ingredientId: 3,
            ingredient: 'Sugar',
            qtyNumerator: 5,
            qtyDenominator: 2,
            measurementId: 2,
            measurement: 'Cup'
        }],
        directions: 'Mix it and bake it.'
    })))
})