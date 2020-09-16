import React, { useEffect, useState, createContext } from "react";
import LayoutPage from "components/layoutPage";
import { RouteComponentProps } from "react-router-dom";
import { GetCategory, data, GetCountItemsInCategory } from "data";
import OneCategoryIcon from "components/oneCategoryIcon";
import OneItemIcon from "components/oneItemIcon";
import { CartItemProps } from "redux/rootReducer";

/**
 * Основная страница каталога.
 *
 * @see https://github.com/alimbagit/online-store
 */

const Catalog: React.FC<RouteComponentProps> = ({ location }) => {
  const numberOfItemsInPage = 12;
  const [currentCategory, setCurrentCategory] = useState(data);
  const [currentPageItems, setCurrentPageItems] = useState(0);
  const [items, setItems] = useState<CartItemProps[]>([]);
  useEffect(() => {
    LoadData();
  });

  const LoadData = () => {
    const result = GetCategory(location.pathname, numberOfItemsInPage, currentPageItems);
    setCurrentPageItems(Math.floor(GetCountItemsInCategory(location.pathname) / numberOfItemsInPage))
    setCurrentCategory(result);
  };

  return (
    <LayoutPage>
      <>
        <div>
          <h2>{currentCategory.description}</h2>
          <div className="categories">
            {/* блок отображения категорий */}
            {currentCategory.categories.length > 0 && <h3>Каталоги</h3>}
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
          <div className="items">
            {currentCategory.items.map((item) => (
              <OneItemIcon key={item.id} {...item} />
            ))}
          </div>

        </div>
        <div></div>
      </>
    </LayoutPage>
  );
};
export default Catalog;
