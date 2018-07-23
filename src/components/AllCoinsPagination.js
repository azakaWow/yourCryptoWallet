import React, { Component } from 'react';


const AllCoinsPagination = ({paginationPosition, onPaginationChange,  shouldRenderPagination,  shouldRenderNext}) => {


    const handlePagination = (e) => {
            let direction = false,
                className = e.target.className;

            if( className.indexOf('_back') == -1 &&
                className != 'all-coins-pagination' &&
                shouldRenderNext){
                direction = true;
            }
 
            onPaginationChange(direction);
        };

        return(
            <div  onClick={handlePagination} className="all-coins-pagination">
                <div data-start={paginationPosition === 1} className="all-coins-pagination__direction _back">Back</div>
                <div data-should-render-next={shouldRenderNext} className="all-coins-pagination__direction _next">Next</div>
            </div>
        );

}

export default AllCoinsPagination;