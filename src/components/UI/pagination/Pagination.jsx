import React, {useEffect, useState} from 'react';
import {getTotalPages} from "../../../utils/pages";
import {usePages} from "../../hooks/usePages";
import cl from './Pagination.module.css';


const Pagination = ({currentPage, setCurrentPage, totalCount, limit, onClick}) => {

    const totalPages = getTotalPages(totalCount, limit);
    const pages = usePages(totalPages, limit);
    function changePage(e){
        setCurrentPage(e.target.innerText);
    }
    return (
        <div className={cl.pages}>
            {pages.map((el)=><span
                onClick={(e)=>{changePage(e)}}
                className={currentPage==el?cl.pages__inner+' '+cl.active:cl.pages__inner}
                key={el}>{el}</span>)}
        </div>
    );
};

export default Pagination;