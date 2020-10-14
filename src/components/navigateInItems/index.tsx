import React from "react";
import "./navigateInItems.scss";

interface PropsNavigateInItems {
  totalPageItems: number;
  currentPage: number;
  SetCurrentPage: (current: number) => void;
}

/**Панель навигации по страницам товарам одного подкаталога 
 * @param totalPageItems - Общее количество страниц данного каталога
 * @param SetCurrentPage - Каллбэк функция для указания текущей страницы товаров для вышестоящего элемента
 * @param currnetPage - текущая страницв товаров
*/
const NavigateInItems = ({
  totalPageItems,
  SetCurrentPage,
  currentPage,
}: PropsNavigateInItems) => (
  <div className="navigate-wrapper">
    {/* Перемотка на самую первую страницу */}
    <div onClick={() => SetCurrentPage(1)}>
      <p>&lt;&lt;</p> 
    </div>
    {/* перемотка на одну страницу назад */}
    <div
      onClick={() => {
        currentPage > 1 && SetCurrentPage(currentPage - 1);
      }}
    >
      <p>&lt;</p>
    </div>
    {/* Список страниц */}
    {new Array(totalPageItems).fill(1).map((value, index) => (
      <div
        key={index}
        onClick={() => SetCurrentPage(index + 1)}
        className={`${currentPage === index + 1 && "current-page"}`}
      >
        <p>{index + 1}</p>
      </div>
    ))}
    {/* перемотка на одну страницу вперед */}
    <div
      onClick={() => {
        currentPage < totalPageItems && SetCurrentPage(currentPage + 1);
      }}
    >
      <p>&gt;</p>
    </div>
    {/* перемотка на самую последнюю страницу */}
    <div onClick={() => SetCurrentPage(totalPageItems)}>
      <p>&gt;&gt;</p>
    </div>
  </div>
);

export default NavigateInItems;
