import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PaginationImages from "../components/PaginationImages";
import ImageList from "../components/ImageList";
import {deleteImages} from "../redux/actions";
import storage from "../api/storageApi";

const HistoryPageContainer = () => {
    const images = useSelector(state => state.images);
    const dispatch = useDispatch();
    const [quantityImages] = useState(5);
    const [currentPagination, setCurrentPagination] = useState(1);
    const paginationImagesCount = Math.ceil(images.images.length / quantityImages);

    const currentImages = currentPagination * quantityImages;
    const newImages = images.images.slice((currentPagination - 1) * quantityImages, currentImages);

    const handleClickPagination = (event, page) => {
        setCurrentPagination(page);
    };

    const handleDeleteImage = (event, id) => {
        dispatch(deleteImages(id));
        storage.removeImage(id);
    };

    return <HistoryPage
        handleClickPagination={handleClickPagination}
        newImages={newImages}
        paginationImagesCount={paginationImagesCount}
        handleDeleteImage={handleDeleteImage}
    />
};

const HistoryPage = ({handleClickPagination, newImages, paginationImagesCount, handleDeleteImage}) => {
    return (
        <div>
            <PaginationImages
                handleClickPagination={handleClickPagination}
                paginationImagesCount={paginationImagesCount}
            />
            <ImageList images={newImages} handleDeleteImage={handleDeleteImage}/>
        </div>
    );
};

export default HistoryPageContainer;