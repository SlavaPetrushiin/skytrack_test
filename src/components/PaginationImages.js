import React from 'react';
import Pagination from "@material-ui/lab/Pagination";

const PaginationImages = ({paginationImagesCount, handleClickPagination}) => {
        return (
            <Pagination
                count={paginationImagesCount}
                onChange={handleClickPagination}
                color="primary"
            />
        );
};

export default PaginationImages;