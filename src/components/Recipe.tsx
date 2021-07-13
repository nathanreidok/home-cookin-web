import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import recipeService from '../services/recipeServices'
import Recipe from '../types/Recipe';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

type RecipeParams = {
    id: string
}

const RecipeComponent: React.FC = () => {
    const { id } = useParams<RecipeParams>()
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     console.log('getting recipes')
    //     recipeService.getRecipes().then(recipes => {
    //         console.log('recipes', recipes)
    //         setIsLoading(false)
    //     }, error => {
    //         setIsLoading(false)
    //     })
    // }, [])

    return (
        <Loader isLoading={isLoading}>
            <Typography variant='h2'></Typography>
            <div>Recipe</div>
        </Loader>
    );
}

export default RecipeComponent