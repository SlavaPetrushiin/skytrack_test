import React from 'react';
import Pagination from "@material-ui/lab/Pagination";

const PaginationImages = ({paginationImagesCount, handleClick}) => {
        return (
            <Pagination
                count={paginationImagesCount}
                onChange={handleClick}
                color="primary"
            />
        );
};

export default PaginationImages;