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

import recipeService from '../services/recipeService'
import Recipe from '../types/Recipe';
import Loader from './Loader';
import { Link, useParams } from 'react-router-dom';
import { Fab, FabProps, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { useInput } from '../hooks';

type RecipeFormProps = {
    recipe: Recipe
}

var useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'center'
    },
    container: {
        minWidth: '20rem',
        maxWidth: '60rem',
        flexGrow: 1
    },
    listItem: {
        border: '1px solid gray',
    },
    subHeader: {
        paddingTop: '1rem'
    }
}))

const RecipeEditForm: React.FC<RecipeFormProps> = ({ recipe }) => {
    const { value: name, bind: bindName } = useInput(recipe.name)
    const { value: directions, bind: bindDirections } = useInput(recipe.directions)
    const classes = useStyles()

    return (
        <form>
            <TextField label='Recipe Name' {...bindName}/>
            <TextField label='Directions' {...bindDirections}/>

            <List>
                {recipe.ingredients.map((ingredient, idx) =>
                    <ListItem key={idx} dense={true} className={classes.listItem}>
                        <ListItemText primary={ingredient} />
                    </ListItem>
                )}
            </List>
        </form>
    );
}

export default RecipeEditForm