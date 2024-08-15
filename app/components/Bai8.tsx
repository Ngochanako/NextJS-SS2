'use client'
import React, { useState } from 'react'
import classNames from 'classnames';
import styles from '../styles/pagination.module.css'
export default function Bai8() {
const totalPages:number=20;
const [currentPage,setCurrentPage]=useState<number>(1);
const handleNext=()=>{
    setCurrentPage(currentPage+1);
}
const handlePrev=()=>{
    setCurrentPage(currentPage-1);
}
const handlePageChange=(page:number)=>{
    setCurrentPage(page);
}
const handlePageFirst=()=>{
    setCurrentPage(1);
}
const handlePageLast=()=>{
    setCurrentPage(totalPages)
}
const renderPagesNumber=()=>{
    const pages = [];
    let a:number=0,b:number=0;
    if(currentPage<4){
       a=2;
       b=4
    }else if(currentPage>17){
        a=17;
        b=19;
    }else{
        a=currentPage-1;
        b=currentPage+1;
    }
    for (let i = a; i <= b; i++) {
      pages.push(
        <button
          key={i}
          className={classNames(styles.pagesNumber, {
            [styles.active]: i === currentPage,
          })}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
}
return pages;
}
  return (
    <div className={styles.pagination}>
      <button onClick={handlePrev} className={styles.navButton} disabled={currentPage==1}>Prev</button>
      <button
            onClick={handlePageFirst}
            className={classNames(styles.pagesNumber, {
                [styles.active]: currentPage === 1,
            })}>
            1
      </button>
      <div className={`${currentPage<4?'hidden':''}`}>...</div>
    {renderPagesNumber()}
    <div className={`${currentPage>17?'hidden':''}`}>...</div>
    <button
            onClick={handlePageLast}
            className={classNames(styles.pagesNumber, {
                [styles.active]: currentPage === totalPages,
            })}>
            {totalPages}
      </button>
     <button onClick={handleNext} className={styles.navButton} disabled={currentPage==totalPages}>Next</button>
   </div>
  )


}