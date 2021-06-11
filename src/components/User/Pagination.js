import React from 'react';
import { useMyContext } from '../Context/Context';

const Pagination = () => {
    const {users, userPage, paginate } = useMyContext();
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(users.length / userPage); i++){
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    pageNumber.map(number => (
                        <li key={number}>
                            <button className="btn btn-outline-succces"
                            onClick={() => {
                                paginate(number);
                                localStorage.setItem('pageNumber', number);
                            }}>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;