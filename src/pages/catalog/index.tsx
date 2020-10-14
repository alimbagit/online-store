import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useParams, Route } from "react-router";
import { GetCategory, GetCountItemsInCategory, Category } from "data";
import OneCategoryIcon from "components/oneCategoryIcon";
import OneItemIcon from "components/oneItemIcon";
import NavigateInItems from "components/navigateInItems";
import "./catalog.scss";
import Breadcrumbs from "components/breadcrumbs";

/**
 * Основная страница каталога.
 * @see https://github.com/alimbagit/online-store
 */
interface Params {
  category: string;
}
const Catalog: React.FC<RouteComponentProps> = ({ location, match }) => {
  const numberOfItemsInPage = 12; //Количество товаров на одной странице
  const [currentCategory, setCurrentCategory] = useState<Category>(); //Текущая категория, отображаемая в каталоге
  const [currentPageNumber, setCurrentPageNumber] = useState(1); //Текущий номер страницы товаров для текущей категории
  const [totalPageItems, setTotalPageItems] = useState(1); //Количество страниц товаров в текущей категории
  const { category } = useParams<Params>(); //Берем параметр из адресной строки

  /**Загрузка категории, товары которой будет отображаться на текущей странице каталога*/
  const LoadData = () => {
    const tmpCategory = GetCategory(
      location.pathname,
      numberOfItemsInPage,
      currentPageNumber
    );
    setCurrentCategory(tmpCategory);
  };

  /**Загрузка общего количества товаров в текущей категории*/
  const LoadCountItemsInCategory = () => {
    const tmpCountItems = GetCountItemsInCategory(location.pathname);
    let tmpPageItems = Math.floor(tmpCountItems / numberOfItemsInPage);
    tmpCountItems % numberOfItemsInPage > 0 && tmpPageItems++;
    setTotalPageItems(tmpPageItems);
  };

  /**Установить текущую страницу товаров
   * @param pageNumber номер страницы товаров
   */
  const SetCurrentPage = (pageNumber: number) => {
    if (pageNumber != currentPageNumber) {
      setCurrentPageNumber(pageNumber);
    }
  };

  useEffect(() => {
    LoadData();
    LoadCountItemsInCategory();
  }, [category, currentPageNumber]);

  /**Если рекурсия не достигла конца path, то продолжаем поиск  */
  if (match.url !== location.pathname) {
    return <Route path={`${match.url}/:category`} component={Catalog} />;
  }

  return (
    <div>
      <Breadcrumbs pathname={location.pathname}/>
      <h2>{currentCategory?.description}</h2>
      {/* блок отображения категорий */}
      {currentCategory && currentCategory.categories.length > 0 && (
        <h4>Подкаталоги</h4>
      )}
      <div className="catalog-list">
        {currentCategory?.categories.map((category) => (
          // Одна категория
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
      {currentCategory && currentCategory.items.length > 0 && <h4>Товары</h4>}
      <div className="catalog-items-list">
        {currentCategory?.items.map((item) => (
          <OneItemIcon key={item.id} {...item} />
        ))}
      </div>
      {/* Навигация по страницам товаров */}
      <NavigateInItems
        totalPageItems={totalPageItems}
        SetCurrentPage={SetCurrentPage}
        currentPage={currentPageNumber}
      />
    </div>
  );
};
export default Catalog;
