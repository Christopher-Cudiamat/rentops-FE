import React, { useState } from 'react';
import { 
  ArrowIconLeft,
  ArrowIconRight,
  PaginationContainer
} from './pagination.style';
import ReactPaginate from 'react-paginate';
import nextArrow from '../../assets/icon/right-arrow-secondary.svg';
import prevArrow from '../../assets/icon/left-arrow-secondary.svg';
import { 
  IDataPagination,
  IPaginationProps
} from './pagination.type';




const Pagination: React.FC<IPaginationProps> = ({
  setSkip,
  pageCount,
  ItemPerPage
}) => {

  let [page, setPage] = useState(0);
  let totalPage = Math.ceil(pageCount / ItemPerPage);
 
  const handleOnClick = (data: IDataPagination) => {
    setSkip(data.selected  * 6);
    setPage(data.selected);
  } 


  return (
    <PaginationContainer isVisible={totalPage > 1}>
      <ReactPaginate
        previousLabel={
          <ArrowIconLeft  
            isVisible={page > 0}
            src={prevArrow} alt="Prev icon"
           />
        }
        nextLabel={
          <ArrowIconRight 
            isVisible={page !== totalPage - 1}
            src={nextArrow} alt="Next icon"
          />
        }
        breakLabel={'...'}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={7}
        onPageChange={handleOnClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginationContainer>
  );
}

export default Pagination;
