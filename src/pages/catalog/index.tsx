import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { GetCategory, data, GetCountItemsInCategory } from "data";
import OneCategoryIcon from "components/oneCategoryIcon";
import OneItemIcon from "components/oneItemIcon";
import "./catalog.scss";

/**
 * Основная страница каталога.
 * @see https://github.com/alimbagit/online-store
 */

const Catalog: React.FC<RouteComponentProps> = ({ location, match }) => {
  const numberOfItemsInPage = 12;
  const [currentCategory, setCurrentCategory] = useState(data);
  const [currentPageItems, setCurrentPageItems] = useState(1);
  const [totalPageItems, setTotalPageItems] = useState(1);

  useEffect(() => {
    LoadData();
    LoadCountItemsInCategory();
    SetCurrentPage(1);
  }, [location]);

  //Загрузка категории, товары которой будет отображаться на текущей странице каталога
  const LoadData = () => {
    const tmpCategory = GetCategory(
      location.pathname,
      numberOfItemsInPage,
      currentPageItems
    );
    setCurrentCategory(tmpCategory);
  };

  //Загрузка общего количества товаров в текущей категории
  const LoadCountItemsInCategory = () => {
    const tmpCountItems = GetCountItemsInCategory(location.pathname);
    let tmpPageItems = Math.floor(tmpCountItems / numberOfItemsInPage);
    tmpCountItems % numberOfItemsInPage > 0 && tmpPageItems++;
    setTotalPageItems(tmpPageItems);
  };

  const SetCurrentPage = (pageNumber: number) => {
    setCurrentPageItems(pageNumber);
  };

  const NavigateInItems = () => (
    <div>
      {new Array(totalPageItems).fill(1).map((value, index) => {
        return (
          <Link
            key={index}
            to={location.pathname}
            onClick={() => SetCurrentPage(index + 1)}
          >
            страница {index + 1}
          </Link>
        );
      })}
    </div>
  );

  return (
    <div>
      <h2>{currentCategory.description}</h2>
      {/* блок отображения категорий */}
      {currentCategory.categories.length > 0 && <h3>Подкаталоги</h3>}
      <div className="catalog-list">
        {currentCategory.categories.map((category) => (
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
      {currentCategory.items.length > 0 && <h3>Товары</h3>}
      <NavigateInItems />
      <div className="catalog-items-list">
        {currentCategory.items.map((item) => (
          <OneItemIcon key={item.id} {...item} />
        ))}
      </div>
      <NavigateInItems />
    </div>
  );
};
export default Catalog;
