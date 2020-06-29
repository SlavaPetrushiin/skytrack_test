import React, {useState} from 'react';
import {useSelector} from "react-redux";
import PaginationImages from "../components/PaginationImages";
import ImageList from "../components/ImageList";

const HistoryPageContainer = () => {
    const images = useSelector(state => state.images);
    const [quantityImages, setQuantityImages] = useState(5);
    const [currentPagination, setCurrentPagination] = useState(1);
    const paginationImagesCount = Math.ceil(images.images.length / quantityImages);

    const currentImages = currentPagination * quantityImages;
    const newImages = images.images.slice((currentPagination - 1) * quantityImages, currentImages);

    const handleClick = (event, page) => {
        setCurrentPagination(page);
    };

    return <HistoryPage
        handleClick={handleClick}
        newImages={newImages}
        paginationImagesCount={paginationImagesCount}
    />
};

const HistoryPage = ({handleClick, newImages, paginationImagesCount}) => {
    return (
        <div>
            <PaginationImages
                handleClick={handleClick}
                paginationImagesCount={paginationImagesCount}
            />
            <ImageList images={newImages}/>
        </div>
    );
};

export default HistoryPageContainer;