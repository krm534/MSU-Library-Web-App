import React from 'react';

const Pagination = ({ guidesPerPage, totalGuides, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalGuides / guidesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination list-inline justify-content-center">
            {
                pageNumbers.map((number) => {
                    return (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href="#" className="page-link">
                                {number}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};


export default Pagination;