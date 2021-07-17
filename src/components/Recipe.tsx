import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Loader from './Loader';
import { Link, useParams } from 'react-router-dom';
import { Fab, FabProps, List, ListItem, ListItemText } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { useRecipe } from '../hooks/fetch';

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
    const { isLoading, data: recipe } = useRecipe(id)
    const classes = useStyles()

    if (isLoading) return <Loader />
    if (!recipe) return null
    return isLoading ? <Loader /> : (
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
    );
}

export default RecipeComponent