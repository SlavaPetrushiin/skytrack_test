import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import {useDispatch, useSelector} from "react-redux";
import {fetchImage} from "../redux/actions";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
});

const MainPageContainer = () => {
    const dispatch = useDispatch();
    const image = useSelector(state => state.images);

    useEffect(() => {
        dispatch(fetchImage())
    }, []);

    const handleClick = () => {
        dispatch(fetchImage())
    };

    return <MainPage image={image} handleClick={handleClick}/>
};


const MainPage = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <CardMedia
                    component={'div'}
                    className={classes.media}
                    image={props.image.image.url}
                />
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleClick}
                >
                    Загрузить
                </Button>
            </CardActions>
        </Card>
    );
};

export default MainPageContainer;

