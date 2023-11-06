import React from 'react';
import './style.css';
import ArrowIcon from '../../assets/arrow.svg'

const Pagination = ({ page, onChange }) => {


    return (
        <div>
            <button disabled={page.pageNumber === 0} onClick={() => onChange(page.pageNumber)} >
                <img src={ArrowIcon} />
            </button>
            <p>{`${page.pageNumber + 1} de ${page.totalCount}`}</p>
            <button disabled={page.pageNumber === 2000} onClick={() => onChange(page.pageNumber + 2)} >
                <img src={ArrowIcon} className="flip-horizontal" />
            </button>
        </div>
    );
}

export default Pagination;
