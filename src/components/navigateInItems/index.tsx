import React from "react";
import "./navigateInItems.scss";

interface PropsNavigateInItems {
  totalPageItems: number;
  currentPage: number;
  SetCurrentPage: (current: number) => void;
}

/**Панель навигации по страницам товарам одного подкаталога */
const NavigateInItems = ({
  totalPageItems,
  SetCurrentPage,
  currentPage,
}: PropsNavigateInItems) => (
  <div className="navigate-wrapper">
    <div onClick={() => SetCurrentPage(1)}>
      <p>&lt;&lt;</p>
    </div>
    <div
      onClick={() => {
        currentPage > 1 && SetCurrentPage(currentPage - 1);
      }}
    >
      <p>&lt;</p>
    </div>
    {new Array(totalPageItems).fill(1).map((value, index) => (
      <div
        key={index}
        onClick={() => SetCurrentPage(index + 1)}
        className={`${currentPage === index + 1 && "current-page"}`}
      >
        <p>{index + 1}</p>
      </div>
    ))}
    <div
      onClick={() => {
        currentPage < totalPageItems && SetCurrentPage(currentPage + 1);
      }}
    >
      <p>&gt;</p>
    </div>
    <div onClick={() => SetCurrentPage(totalPageItems)}>
      <p>&gt;&gt;</p>
    </div>
  </div>
);

export default NavigateInItems;
