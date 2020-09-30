import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useParams } from "react-router";
import { GetCategory, data, GetCountItemsInCategory, Category } from "data";
import OneCategoryIcon from "components/oneCategoryIcon";
import OneItemIcon from "components/oneItemIcon";
import NavigateInItems from "components/navigateInItems";
import "./catalog.scss";

/**
 * Основная страница каталога.
 * @see https://github.com/alimbagit/online-store
 */
interface Params{
  category:string;
}
const Catalog: React.FC<RouteComponentProps> = ({ location }) => {
  const numberOfItemsInPage = 12;
  const [currentCategory, setCurrentCategory] = useState<Category>();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPageItems, setTotalPageItems] = useState(1);
  const {category} = useParams<Params>();
  
  //Загрузка категории, товары которой будет отображаться на текущей странице каталога
  const LoadData = () => {
    const tmpCategory = GetCategory(
      location.pathname,
      numberOfItemsInPage,
      currentPageNumber
    );
    setCurrentCategory(tmpCategory);
  };

  useEffect(() => {
    // setCurrentPageNumber(1);
    LoadData();
    LoadCountItemsInCategory();
  }, [category, currentPageNumber]);

  //Загрузка общего количества товаров в текущей категории
  const LoadCountItemsInCategory = () => {
    const tmpCountItems = GetCountItemsInCategory(location.pathname);
    let tmpPageItems = Math.floor(tmpCountItems / numberOfItemsInPage);
    tmpCountItems % numberOfItemsInPage > 0 && tmpPageItems++;
    setTotalPageItems(tmpPageItems);
  };
  console.log(currentPageNumber);
  const SetCurrentPage = (pageNumber: number) => {
    console.log("pageNumber=" + pageNumber);
    if (pageNumber != currentPageNumber) {
      // console.log(currentPageItems);
      setCurrentPageNumber(pageNumber);
      // console.log(currentPageItems);
      // LoadData();
    }
  };

  return (
    <div>
      <h2>{currentCategory?.description}</h2>
      {/* блок отображения категорий */}
      {currentCategory && currentCategory.categories.length > 0 && (
        <h3>Подкаталоги</h3>
      )}
      <div className="catalog-list">
        {currentCategory?.categories.map((category) => (
          <OneCategoryIcon
            key={category.name}
            pathname={
              location.pathname +
              (location.pathname === "/" ? "catalog/" : "/") +
              category.name
            }
            description={category.description}
            img={category.img}
          />
        ))}
      </div>
      {/* блок отображения товаров */}
      {currentCategory && currentCategory.items.length > 0 && <h3>Товары</h3>}
      <NavigateInItems
        totalPageItems={totalPageItems}
        SetCurrentPage={SetCurrentPage}
        currentPage={currentPageNumber}
      />
      <div className="catalog-items-list">
        {currentCategory?.items.map((item) => (
          <OneItemIcon key={item.id} {...item} />
        ))}
      </div>
      <NavigateInItems
        totalPageItems={totalPageItems}
        SetCurrentPage={SetCurrentPage}
        currentPage={currentPageNumber}
      />
    </div>
  );
};
export default Catalog;
