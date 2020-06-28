import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '46.25%',
    },
});

const HistoryPage = () => {
    const classes = useStyles();
    const images = useSelector(state => state.images);
    const [quantityImages, setQuantityImages] = useState(5);
    const [currentPagination, setCurrentPagination] = useState(1);

    const paginationImages = Math.ceil(images.images.length / quantityImages);

    const handleClick = (event, page) => {
        setCurrentPagination(page);
    };

    const renderImages = () => {
        const currentImages = currentPagination * quantityImages;
        const newImages = images.images.slice((currentPagination - 1) * quantityImages, currentImages);
        debugger

        return (
            newImages.map((image, i) => {
                return (
                    <li key={i}>
                        <p>{image.title}</p>
                        <p>{image.date}</p>
                        <CardMedia
                            component={'div'}
                            className={classes.media}
                            image={image.url}
                        />
                    </li>
                )
            })
        )
    };

    return (
        <div>
            <Pagination
                count={paginationImages}
                onChange={handleClick}
                color="primary"
            />
            <ul>
                {
                    renderImages()
                }
            </ul>
        </div>
    );
};

export default HistoryPage;