import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '46.25%',
    },
});


const ImageBlock = (props) => {
    const classes = useStyles();

    return (
        <li>
            <p>{props.title}</p>
            <p>{props.date}</p>
            <CardMedia
                component={'div'}
                className={classes.media}
                image={props.url}
            />
        </li>
    )
};

const ImageList = ({images}) => {
        return (
            <ul>
                {images.map((image, i) => <ImageBlock {...image} id={i}/>)}
            </ul>
        );
};

export default ImageList;