import React, { useEffect, useState } from "react";
import LayoutPage from "../../components/layout-page";
import { RouteComponentProps, Link } from "react-router-dom";
import { GetData, Category, data } from "../../data";

const Catalog: React.FC<RouteComponentProps> = ({ match, location }) => {
  const [currentCategory, setCurrentCategory] = useState(data);

  useEffect(() => {
    LoadData();
  });

  const LoadData = () => {
    const result = GetData(location.pathname);
    setCurrentCategory(result);
  };

  return (
    <LayoutPage>
      <div>
        <h2>Это страница {currentCategory.description}</h2>
        <div className="categories">
          {currentCategory.categories.map((category) => (
            <div key={category.name}>
              <Link to={location.pathname+"/"+category.name}>
                <img src={category.img} />
                <span>{category.description}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="items">
          {currentCategory.items.map((item) => (
            <div key={item.id}>
              <img src={item.img} />
              <span>{item.description}</span>
              <span>{item.price.toString()}</span>
              <button>В КОРЗИНУ</button>
            </div>
          ))}
        </div>
      </div>
    </LayoutPage>
  );
};
export default Catalog;
