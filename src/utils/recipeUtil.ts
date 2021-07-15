import RecipeIngredient from "../types/RecipeIngredient";

const formatIngredient = (ingredient: RecipeIngredient) => {

}

const toMixedFraction = (numerator: number, denominator: number) => {
    if (denominator === 0)
        return undefined
    var whole = (numerator / denominator) >> 0
    numerator -= whole * denominator

    return `${whole ? `${whole} ` : ''}${numerator}/${denominator}`
}

export default {
    formatIngredient
}