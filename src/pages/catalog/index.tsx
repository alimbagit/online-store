import React, { useEffect, useState, createContext } from "react";
import LayoutPage from "components/layoutPage";
import { RouteComponentProps } from "react-router-dom";
import { GetData, data } from "data";
import OneCategoryIcon from "components/oneCategoryIcon";
import OneItemIcon from "components/oneItemIcon";
import { CartStateProps } from "redux/rootReducer";

interface CartContextInterface {
  items: CartStateProps[];
  setItems: React.Dispatch<React.SetStateAction<CartStateProps[]>>;
}

/**
 * Контекст, который содержит всю информацию о корзине.
 *
 * @see https://github.com/alimbagit/online-store
 */
export const CartContext = createContext<CartContextInterface>({
  items: [],
  setItems: () => {},
});

const Catalog: React.FC<RouteComponentProps> = ({ location }) => {
  const [currentCategory, setCurrentCategory] = useState(data);
  const [items, setItems] = useState<CartStateProps[]>([]);
  useEffect(() => {
    LoadData();
  });

  const LoadData = () => {
    const result = GetData(location.pathname);
    setCurrentCategory(result);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
      }}
    >
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
    </CartContext.Provider>
  );
};
export default Catalog;
