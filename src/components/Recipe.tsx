import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import recipeService from '../services/recipeServices'
import Recipe from '../types/Recipe';
import Loader from './Loader';
import { Link, useParams } from 'react-router-dom';
import { Fab, FabProps, List, ListItem, ListItemText } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { useFetch } from '../hooks/useFetch';

type RecipeParams = {
    id: string
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
        // borderRadius: 5%
    },
    subHeader: {
        paddingTop: '1rem'
    },
    editButton: {
        top: 'auto',
        left: 'auto',
        right: '2rem',
        bottom: '2rem',
        position: 'fixed',
    }
}))

const FabButton = (props: FabProps<Link>) => <Fab component={Link} {...props}></Fab>

const RecipeComponent: React.FC = () => {
    const { id } = useParams<RecipeParams>()
    const { status, data } = useFetch<Recipe[]>(`/recipes/${id}`)
    const [isLoading, setIsLoading] = useState(true)
    const [recipe, setRecipe] = useState<Recipe>()
    const classes = useStyles()

    // useEffect(() => {
    //     recipeService.getRecipe(Number(id)).then(recipe => {
    //         setIsLoading(false)
    //         setRecipe(recipe)
    //     }, error => {
    //         setIsLoading(false)
    //     })
    // }, [])

    return isLoading ? <Loader /> : (
        <Loader isLoading={isLoading}>
            <div className={classes.root}>
                <div className={classes.container}>
                    <Typography variant='h2'>{recipe?.name}</Typography>
                    <Typography variant='h5' className={classes.subHeader}>Directions</Typography>
                    <div>{recipe?.directions}</div>
                    <Typography variant='h5' className={classes.subHeader}>Ingredients</Typography>
                    <List>
                        {recipe?.ingredients.map((ingredient, idx) =>
                            <ListItem key={idx} dense={true} className={classes.listItem}>
                                <ListItemText primary={`${ingredient.qtyNumerator}`} />
                            </ListItem>
                        )}
                    </List>
                    <FabButton to={`/recipes/${recipe?.id}/edit`} className={classes.editButton} color='primary'>
                        <EditIcon />
                    </FabButton>
                </div>
            </div>
        </Loader>
    );
}

export default RecipeComponent