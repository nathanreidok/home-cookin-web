import Recipe from "../types/Recipe"

var getRecipes = async () => {
    return recipes
}

var getRecipe = async (id: Number) => {
    var recipe = recipes.find(r => r.id === id)
    if (!recipe) {
        throw 'Could not find recipe.'
    }
    return recipe
}

export default {
    getRecipes,
    getRecipe,
}

const recipes: Recipe[] = [
    { id: 1, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 2, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 3, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 4, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 5, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 6, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 7, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 8, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 9, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
    { id: 10, name: 'Cake', ingredients: ['Eggs', 'Milk', 'Sugar'], directions: 'Mix it and bake it.' },
]