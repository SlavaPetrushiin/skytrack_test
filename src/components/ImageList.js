import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    imageItems: {
        padding: 0,
    },
    imageItem: {
        padding: 0,
        listStyle: 'none',
        marginBottom: 30
    },
    media: {
        height: 0,
        paddingTop: '46.25%',
        marginBottom: 20
    },
    title: {
        fontWeight: 'bold'
    }
});


const ImageBlock = (props) => {
    const classes = useStyles();

    return (
        <li className={classes.imageItem}>
            <p className={classes.title}>{props.title}</p>
            <p>{props.date}</p>
            <CardMedia
                component={'div'}
                className={classes.media}
                image={props.url}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={props.handleDeleteImage}
            >
                Удалить
            </Button>
        </li>
    )
};

const ImageList = ({images, handleDeleteImage}) => {
    const classes = useStyles();
    return (
        <ul className={classes.imageItems}>
            {
                images.map(image => <ImageBlock
                    {...image}
                    key={image.id}
                    handleDeleteImage={(e) => handleDeleteImage(e, image.id)}
                />)
            }
        </ul>
    );
};

export default ImageList;